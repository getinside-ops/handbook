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
const DOCS_DIR = path.join(ROOT, 'docs/fr');
const DIST_DIR = path.join(ROOT, '.vitepress/dist');
const SITE_URL = 'https://anthropics.github.io/handbook';

// Priorités par type de page
const priorityMap = {
  'start-here': 0.9,
  'advertisers': 0.8,
  'publishers': 0.8,
  'faq': 0.7,
  'resources': 0.6,
  'glossary': 0.6,
};

function getPriority(relativePath) {
  for (const [key, priority] of Object.entries(priorityMap)) {
    if (relativePath.includes(key)) {
      return priority;
    }
  }
  return 0.5;
}

function getChangefreq(relativePath) {
  // Pages fréquemment mises à jour
  if (relativePath.includes('start-here') || relativePath.includes('advertisers')) {
    return 'weekly';
  }
  if (relativePath.includes('resources')) {
    return 'monthly';
  }
  return 'monthly';
}

function walkDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);

    if (stat.isDirectory()) {
      walkDir(filepath, fileList);
    } else if (file.endsWith('.md')) {
      fileList.push(filepath);
    }
  });

  return fileList;
}

function mdToUrlPath(mdFilePath) {
  // /handbook/docs/fr/start-here/index.md → /handbook/docs/fr/start-here/
  // /handbook/docs/fr/start-here/why-it-works.md → /handbook/docs/fr/start-here/why-it-works
  let relativePath = path.relative(ROOT, mdFilePath);

  // Remplacer backslashes par slashes (Windows compatibility)
  relativePath = relativePath.replace(/\\/g, '/');

  // Supprimer l'extension .md
  relativePath = relativePath.replace(/\.md$/, '');

  // Pour les index.md, garder juste le répertoire
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
  const mdFiles = walkDir(DOCS_DIR);

  // Ajouter aussi les pages root
  const extraPages = [
    'index.md',
    'sitemap.md',
  ];

  extraPages.forEach((page) => {
    const filePath = path.join(ROOT, page);
    if (fs.existsSync(filePath)) {
      mdFiles.push(filePath);
    }
  });

  // Générer les URLs
  const urls = mdFiles
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
