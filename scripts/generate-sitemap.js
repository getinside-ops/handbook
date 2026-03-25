#!/usr/bin/env node
/**
 * Génère un sitemap XML pour getinside Handbook
 * Exécuté après npm run docs:build
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

// Priorités par type de page
const priorityMap = {
  'start-here': 0.9,
  'advertisers': 0.8,
  'publishers': 0.8,
  'faq': 0.7,
  'resources': 0.6,
  'glossary': 0.6,
};

function getPriority(urlPath) {
  if (urlPath === '' || urlPath === '/') return 1.0;
  for (const [key, priority] of Object.entries(priorityMap)) {
    if (urlPath.includes(key)) {
      return priority;
    }
  }
  return 0.5;
}

function getChangefreq(urlPath) {
  if (urlPath === '' || urlPath === '/' || urlPath.includes('start-here') || urlPath.includes('advertisers')) {
    return 'weekly';
  }
  if (urlPath.includes('resources')) {
    return 'monthly';
  }
  return 'monthly';
}

function walkDir(dir, fileList = [], exclude = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filepath = path.join(dir, file);
    if (exclude.includes(filepath)) return;
    const stat = fs.statSync(filepath);

    if (stat.isDirectory()) {
      walkDir(filepath, fileList, exclude);
    } else if (file.endsWith('.md')) {
      fileList.push(filepath);
    }
  });

  return fileList;
}

function mdToUrlPath(mdFilePath) {
  // docs/advertisers/index.md → advertisers/
  // docs/advertisers/pricing.md → advertisers/pricing
  // docs/en/advertisers/index.md → en/advertisers/
  let relativePath = path.relative(ROOT, mdFilePath);

  // Remplacer backslashes par slashes (Windows compatibility)
  relativePath = relativePath.replace(/\\/g, '/');

  // Supprimer le préfixe 'docs/' (srcDir)
  relativePath = relativePath.replace(/^docs\//, '');

  // Supprimer l'extension .md
  relativePath = relativePath.replace(/\.md$/, '');

  // Pour les index.md, garder juste le répertoire
  if (relativePath === 'index') {
    return '';
  }
  if (relativePath.endsWith('/index')) {
    relativePath = relativePath.slice(0, -6) + '/';
  }

  return relativePath;
}

function getLastModified(filePath) {
  try {
    const stat = fs.statSync(filePath);
    return stat.mtime.toISOString().split('T')[0];
  } catch {
    return new Date().toISOString().split('T')[0];
  }
}

function generateSitemap() {
  // Walk docs/ but skip docs/en/ — it's included separately
  const mdFiles = walkDir(DOCS_DIR, [], [DOCS_EN_DIR]);

  // Include EN files if docs/en/ exists
  if (fs.existsSync(DOCS_EN_DIR)) {
    walkDir(DOCS_EN_DIR, mdFiles);
  }

  // Pages à exclure du sitemap (pages d'erreur, etc.)
  const EXCLUDED_PAGES = ['404.md'];

  // Générer les URLs
  const urls = mdFiles
    .filter((mdFile) => !EXCLUDED_PAGES.includes(path.basename(mdFile)))
    .map((mdFile) => {
      const urlPath = mdToUrlPath(mdFile);
      const fullUrl = `${SITE_URL}/${urlPath}`;
      const lastMod = getLastModified(mdFile);
      const priority = getPriority(urlPath);
      const changefreq = getChangefreq(urlPath);

      return {
        url: fullUrl,
        lastmod: lastMod,
        changefreq,
        priority,
      };
    })
    // Trier par URL pour cohérence
    .sort((a, b) => a.url.localeCompare(b.url));

  // Générer le XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  urls.forEach(({ url, lastmod, changefreq, priority: prio }) => {
    xml += '  <url>\n';
    xml += `    <loc>${escapeXml(url)}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${prio.toFixed(1)}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';

  return xml;
}

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Créer le répertoire dist s'il n'existe pas
if (!fs.existsSync(DIST_DIR)) {
  fs.mkdirSync(DIST_DIR, { recursive: true });
}

// Générer et écrire le sitemap
const sitemap = generateSitemap();
const sitemapPath = path.join(DIST_DIR, 'sitemap.xml');

fs.writeFileSync(sitemapPath, sitemap, 'utf-8');
console.log(`✓ Sitemap généré: ${sitemapPath}`);
console.log(`✓ ${(sitemap.match(/<url>/g) || []).length} URLs indexées`);
