#!/usr/bin/env node
/**
 * Génère /llms.txt (index concis) et /llms-full.txt (corpus complet FR)
 * pour getinside Handbook — standard llmstxt.org, destiné aux crawlers IA.
 * Exécuté après `vitepress build` (voir package.json → docs:build).
 *
 * Même logique de parcours que generate-sitemap.js : on lit les .md sources
 * (frontmatter title/description) et on écrit dans .vitepress/dist/.
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

// Pages exclues (erreur, pages internes)
const EXCLUDED = ['404.md'];

// Sections FR : ordre + libellé d'affichage, clé = 1er segment du chemin
const FR_SECTIONS = [
  { key: 'start-here', label: 'Découvrir getinside' },
  { key: 'recruit', label: 'Recruter' },
  { key: 'retain', label: 'Fidéliser' },
  { key: 'monetize', label: 'Monétiser' },
  { key: 'faq', label: 'FAQ : Questions fréquentes' },
  { key: 'resources', label: 'Ressources' },
  { key: 'glossary', label: 'Glossaire' },
];

function walkDir(dir, fileList = [], exclude = []) {
  if (!fs.existsSync(dir)) return fileList;
  for (const file of fs.readdirSync(dir)) {
    const filepath = path.join(dir, file);
    if (exclude.includes(filepath)) continue;
    if (file === '.vitepress' || file === 'superpowers' || file === 'node_modules') continue;
    const stat = fs.statSync(filepath);
    if (stat.isDirectory()) walkDir(filepath, fileList, exclude);
    else if (file.endsWith('.md') && !EXCLUDED.includes(file)) fileList.push(filepath);
  }
  return fileList;
}

function mdToUrlPath(mdFilePath) {
  let rel = path.relative(ROOT, mdFilePath).replace(/\\/g, '/').replace(/^docs\//, '').replace(/\.md$/, '');
  if (rel === 'index') return '';
  if (rel.endsWith('/index')) return rel.slice(0, -6) + '/';
  return rel;
}

/** Parse le frontmatter YAML minimal (title, description). */
function parseFrontmatter(content) {
  const m = content.match(/^---\n([\s\S]*?)\n---/);
  const fm = { title: '', description: '' };
  if (!m) return fm;
  const block = m[1];
  const title = block.match(/^title:\s*(.+)$/m);
  const desc = block.match(/^description:\s*(.+)$/m);
  if (title) fm.title = unquote(title[1].trim());
  if (desc) fm.description = unquote(desc[1].trim());
  return fm;
}

function unquote(s) {
  return s.replace(/^["']/, '').replace(/["']$/, '').trim();
}

/** Convertit le corps markdown en texte brut lisible (pour llms-full.txt). */
function stripFrontmatter(content) {
  return content.replace(/^---\n[\s\S]*?\n---\n?/, '');
}

function sectionKeyOf(urlPath) {
  if (urlPath === '' ) return 'start-here';
  const seg = urlPath.split('/')[0];
  return seg || 'start-here';
}

function buildIndex() {
  const frFiles = walkDir(DOCS_DIR, [], [DOCS_EN_DIR]);
  const enFiles = walkDir(DOCS_EN_DIR);

  const entries = frFiles.map((f) => {
    const fm = parseFrontmatter(fs.readFileSync(f, 'utf-8'));
    const urlPath = mdToUrlPath(f);
    return { urlPath, url: `${SITE_URL}/${urlPath}`, ...fm, section: sectionKeyOf(urlPath) };
  });

  let out = '# getinside Handbook\n\n';
  out += '> Documentation officielle de getinside, la solution de marketing par le colis et le courrier adressé : guides opérationnels et processus pour recruter, fidéliser et monétiser vos clients. Le marketing qui touche.\n\n';
  out += 'getinside permet de recruter des clients en faisant diffuser votre campagne chez d\'autres marques (insertion colis, échantillonnage), de fidéliser les clients inactifs par courrier adressé et de monétiser votre audience en diffusant les campagnes d\'autres marques. 98 % de délivrabilité, 100 % d\'attention, 500+ marques.\n\n';
  out += 'Cette documentation est bilingue : les pages françaises sont canoniques, les traductions anglaises vivent sous `/en/`.\n';

  for (const sec of FR_SECTIONS) {
    const items = entries.filter((e) => e.section === sec.key);
    if (!items.length) continue;
    // index de section en premier (urlPath se terminant par '/' ou == section)
    items.sort((a, b) => a.url.localeCompare(b.url));
    out += `\n## ${sec.label}\n\n`;
    for (const it of items) {
      const desc = it.description ? `: ${it.description}` : '';
      out += `- [${it.title || it.urlPath}](${it.url})${desc}\n`;
    }
  }

  // Section anglaise compacte
  if (enFiles.length) {
    out += '\n## English Documentation\n\n';
    const enEntries = enFiles
      .map((f) => {
        const fm = parseFrontmatter(fs.readFileSync(f, 'utf-8'));
        const urlPath = mdToUrlPath(f);
        return { url: `${SITE_URL}/${urlPath}`, urlPath, ...fm };
      })
      .sort((a, b) => a.url.localeCompare(b.url));
    for (const it of enEntries) {
      const desc = it.description ? `: ${it.description}` : '';
      out += `- [${it.title || it.urlPath}](${it.url})${desc}\n`;
    }
  }

  return { text: out, frFiles };
}

function buildFull(frFiles) {
  let out = '# getinside Handbook — Corpus complet (FR)\n\n';
  out += `> Contenu intégral des pages françaises de la documentation getinside. Source canonique. Traductions anglaises disponibles sous ${SITE_URL}/en/.\n\n`;
  const sorted = [...frFiles].sort((a, b) => mdToUrlPath(a).localeCompare(mdToUrlPath(b)));
  for (const f of sorted) {
    const raw = fs.readFileSync(f, 'utf-8');
    const fm = parseFrontmatter(raw);
    const url = `${SITE_URL}/${mdToUrlPath(f)}`;
    out += `\n\n---\n\n# ${fm.title || mdToUrlPath(f)}\nURL: ${url}\n\n`;
    out += stripFrontmatter(raw).trim() + '\n';
  }
  return out;
}

if (!fs.existsSync(DIST_DIR)) fs.mkdirSync(DIST_DIR, { recursive: true });

const { text, frFiles } = buildIndex();
fs.writeFileSync(path.join(DIST_DIR, 'llms.txt'), text, 'utf-8');
console.log(`✓ llms.txt généré (${(text.match(/^- /gm) || []).length} liens)`);

const full = buildFull(frFiles);
fs.writeFileSync(path.join(DIST_DIR, 'llms-full.txt'), full, 'utf-8');
console.log(`✓ llms-full.txt généré (${(full.length / 1024).toFixed(0)} KB, ${frFiles.length} pages FR)`);
