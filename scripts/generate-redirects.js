#!/usr/bin/env node
/**
 * Génère des pages de redirection statiques (GitHub Pages n'a pas de règles
 * serveur) pour les anciennes URLs /advertisers/ et /publishers/.
 * Exécuté après vitepress build. La table vient de scripts/redirects.json.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(__dirname, '..', '.vitepress/dist');
const BASE = '/handbook';
const redirects = JSON.parse(fs.readFileSync(path.join(__dirname, 'redirects.json'), 'utf8'));

const stub = (to, lang) => `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<title>Redirection…</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="${to}">
<meta http-equiv="refresh" content="0; url=${to}">
<script>location.replace(${JSON.stringify(to)} + location.search + location.hash)</script>
</head>
<body><a href="${to}">Cette page a déménagé.</a></body>
</html>
`;

let count = 0;
for (const [from, to] of Object.entries(redirects)) {
  // /dir/ -> dir/index.html ; /dir/page -> dir/page.html
  const rel = from.endsWith('/') ? `${from}index.html` : `${from}.html`;
  const file = path.join(DIST_DIR, rel);
  if (fs.existsSync(file)) continue; // ne jamais écraser une vraie page
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, stub(BASE + to, from.startsWith("/en/") ? "en" : "fr"));
  count++;
}
console.log(`✓ ${count} redirections générées`);
