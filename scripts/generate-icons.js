import { chromium } from 'playwright';
import { readFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, '../assets/images/icons');
mkdirSync(OUT_DIR, { recursive: true });

// Brand mark (square keyvisual) inlined for self-contained rendering
const markSvg = readFileSync(resolve(__dirname, '../assets/images/gi-keyvisual.svg'), 'utf-8');
const markDataUri = `data:image/svg+xml;base64,${Buffer.from(markSvg).toString('base64')}`;

// size, filename, background, mark scale (% of canvas), border-radius (% of canvas)
const ICONS = [
  { size: 16, file: 'favicon-16.png', bg: '#F7F6F3', scale: 0.82, radius: 0 },
  { size: 32, file: 'favicon-32.png', bg: '#F7F6F3', scale: 0.82, radius: 0 },
  { size: 180, file: 'apple-touch-icon.png', bg: '#FFFFFF', scale: 0.70, radius: 0 },
  { size: 192, file: 'icon-192.png', bg: '#FFFFFF', scale: 0.72, radius: 22 },
  { size: 512, file: 'icon-512.png', bg: '#FFFFFF', scale: 0.72, radius: 22 },
  // Maskable: extra safe-area padding (mark smaller, full-bleed mint bg)
  { size: 512, file: 'icon-512-maskable.png', bg: '#6AE7C8', scale: 0.56, radius: 0 },
];

const browser = await chromium.launch();
const page = await browser.newPage();

for (const { size, file, bg, scale, radius } of ICONS) {
  const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
    *{margin:0;padding:0;box-sizing:border-box}
    html,body{width:${size}px;height:${size}px;overflow:hidden}
    .root{width:${size}px;height:${size}px;background:${bg};
      border-radius:${(radius / 100) * size}px;
      display:flex;align-items:center;justify-content:center}
    img{width:${Math.round(size * scale)}px;height:${Math.round(size * scale)}px;object-fit:contain}
  </style></head><body>
    <div class="root"><img src="${markDataUri}" alt="getinside"></div>
  </body></html>`;

  await page.setViewportSize({ width: size, height: size });
  await page.setContent(html, { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({
    path: resolve(OUT_DIR, file),
    omitBackground: false,
    clip: { x: 0, y: 0, width: size, height: size },
  });
  console.log(`✓ ${file} (${size}×${size})`);
}

await browser.close();
console.log(`✓ Icons written to ${OUT_DIR}`);
