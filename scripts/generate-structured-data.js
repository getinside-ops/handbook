#!/usr/bin/env node
/**
 * Injecte du JSON-LD statique (FAQPage + HowTo) dans le HTML buildé.
 *
 * Pourquoi un script post-build : le schéma WebPage/Breadcrumb existant est
 * injecté côté client (theme/index.ts, onMounted) — invisible pour les
 * crawlers sans JS. FAQPage et HowTo ouvrent des rich results Google et
 * doivent donc être rendus en statique. Le contenu reste « single source » :
 * on relit le markdown et on régénère le schéma à chaque build.
 *
 *  - FAQPage : pages docs/faq/** (et /en/) → blocs `::: details Question`
 *  - HowTo   : pages contenant des `<div class="gi-step">` → étapes <h3>
 *
 * Exécuté après `vitepress build` (voir package.json → docs:build).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const DOCS_DIR = path.join(ROOT, 'docs');
const DOCS_EN_DIR = path.join(ROOT, 'docs/en');
const DIST_DIR = path.join(ROOT, '.vitepress/dist');
const SITE_URL = 'https://getinside-ops.github.io/handbook';

function walkDir(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  for (const file of fs.readdirSync(dir)) {
    if (file === '.vitepress' || file === 'superpowers' || file === 'node_modules') continue;
    const fp = path.join(dir, file);
    const stat = fs.statSync(fp);
    if (stat.isDirectory()) walkDir(fp, fileList);
    else if (file.endsWith('.md') && file !== '404.md') fileList.push(fp);
  }
  return fileList;
}

/** docs/faq/billing.md → .vitepress/dist/faq/billing.html ; index.md → index.html */
function mdToDistHtml(mdFilePath) {
  let rel = path.relative(DOCS_DIR, mdFilePath).replace(/\\/g, '/').replace(/\.md$/, '');
  return path.join(DIST_DIR, rel + '.html');
}

function pageUrl(mdFilePath) {
  let rel = path.relative(ROOT, mdFilePath).replace(/\\/g, '/').replace(/^docs\//, '').replace(/\.md$/, '');
  if (rel === 'index') rel = '';
  else if (rel.endsWith('/index')) rel = rel.slice(0, -6) + '/';
  return `${SITE_URL}/${rel}`;
}

function stripFrontmatter(c) {
  return c.replace(/^---\n[\s\S]*?\n---\n?/, '');
}

/** Markdown/HTML inline → texte brut lisible. */
function toPlainText(s) {
  return s
    .replace(/<[^>]+>/g, ' ')                 // balises HTML
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')     // images
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')   // liens → texte
    .replace(/`([^`]+)`/g, '$1')               // code inline
    .replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, '$1') // gras/italique
    .replace(/^#{1,6}\s+/gm, '')               // titres
    .replace(/^>\s?/gm, '')                    // citations
    .replace(/^[-*+]\s+/gm, '')                // puces
    .replace(/^\d+\.\s+/gm, '')                // listes ordonnées
    .replace(/\s+/g, ' ')
    .trim();
}

function getH1(body) {
  const m = body.match(/^#\s+(.+)$/m);
  return m ? toPlainText(m[1]) : '';
}

/** Extrait les paires Q/R des blocs `::: details` (gestion des `:::` imbriqués). */
function extractFaqs(body) {
  const lines = body.split('\n');
  const openRe = /^:::\s+(\w+)(.*)$/;
  const closeRe = /^:::\s*$/;
  const faqs = [];
  let i = 0;
  while (i < lines.length) {
    const m = lines[i].match(openRe);
    if (m && m[1] === 'details') {
      const question = toPlainText(m[2].trim());
      const buf = [];
      let depth = 1;
      i++;
      while (i < lines.length && depth > 0) {
        if (openRe.test(lines[i])) { depth++; }
        else if (closeRe.test(lines[i])) { depth--; if (depth === 0) { i++; break; } }
        else { buf.push(lines[i]); }
        i++;
      }
      const answer = toPlainText(buf.join(' '));
      if (question && answer) faqs.push({ q: question, a: answer });
      continue;
    }
    i++;
  }
  return faqs;
}

/** Extrait les étapes des blocs `<div class="gi-step">…<h3>Titre</h3>…</div>`. */
function extractSteps(body) {
  const steps = [];
  // chaque gi-step-body : titre h3 + reste = texte
  const bodyRe = /<div class="gi-step-body">([\s\S]*?)<\/div>\s*<\/div>/g;
  let m;
  while ((m = bodyRe.exec(body)) !== null) {
    const inner = m[1];
    const h3 = inner.match(/<h3>([\s\S]*?)<\/h3>/);
    if (!h3) continue;
    const name = toPlainText(h3[1]);
    const text = toPlainText(inner.replace(/<h3>[\s\S]*?<\/h3>/, ''));
    if (name) steps.push({ name, text: text || name });
  }
  return steps;
}

function inject(htmlPath, jsonLd, marker) {
  if (!fs.existsSync(htmlPath)) return false;
  let html = fs.readFileSync(htmlPath, 'utf-8');
  if (html.includes(`data-schema="${marker}"`)) return false; // déjà injecté
  const tag = `<script type="application/ld+json" data-schema="${marker}">${JSON.stringify(jsonLd)}</script>`;
  html = html.replace('</head>', `${tag}</head>`);
  fs.writeFileSync(htmlPath, html, 'utf-8');
  return true;
}

function run() {
  const files = [...walkDir(DOCS_DIR)];
  let faqCount = 0;
  let howtoCount = 0;

  for (const md of files) {
    const raw = fs.readFileSync(md, 'utf-8');
    const body = stripFrontmatter(raw);
    const url = pageUrl(md);
    const htmlPath = mdToDistHtml(md);
    const rel = path.relative(DOCS_DIR, md).replace(/\\/g, '/');
    const isFaq = rel.startsWith('faq/') || rel.startsWith('en/faq/');

    // FAQPage
    if (isFaq) {
      const faqs = extractFaqs(body);
      if (faqs.length >= 2) {
        const schema = {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          url,
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        };
        if (inject(htmlPath, schema, 'faq')) faqCount++;
      }
    }

    // HowTo (pages avec gi-step, hors FAQ)
    if (!isFaq && body.includes('class="gi-step"')) {
      const steps = extractSteps(body);
      if (steps.length >= 2) {
        const schema = {
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: getH1(body) || 'Guide getinside',
          url,
          step: steps.map((s, idx) => ({
            '@type': 'HowToStep',
            position: idx + 1,
            name: s.name,
            text: s.text,
          })),
        };
        if (inject(htmlPath, schema, 'howto')) howtoCount++;
      }
    }
  }

  console.log(`✓ JSON-LD injecté : ${faqCount} pages FAQPage, ${howtoCount} pages HowTo`);
}

run();
