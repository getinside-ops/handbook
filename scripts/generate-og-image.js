import { chromium } from 'playwright';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, '../assets/images/og-image.png');

// Inline the SVG logo so the HTML page is fully self-contained
const logoSvg = readFileSync(resolve(__dirname, '../assets/images/logo-getinside.svg'), 'utf-8');
const logoDataUri = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString('base64')}`;

const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 1200px; height: 630px; overflow: hidden; background: #F7F6F3; }

  .root {
    position: relative;
    width: 1200px;
    height: 630px;
    background: #F7F6F3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 56px 96px;
    overflow: hidden;
  }

  /* Right-edge mint accent bar */
  .accent-bar {
    position: absolute;
    top: 0; right: 0;
    width: 5px; height: 100%;
    background: linear-gradient(180deg, #6AE7C8 0%, #0aaa8e 100%);
  }

  /* Subtle geometric wash on right side */
  .wash {
    position: absolute;
    top: 0; right: 0;
    width: 38%; height: 100%;
    background: linear-gradient(135deg, rgba(10,170,142,0.06) 0%, rgba(106,231,200,0.02) 100%);
    clip-path: polygon(60px 0, 100% 0, 100% 100%, 0 100%);
  }

  /* Decorative circles */
  .circle-lg {
    position: absolute;
    bottom: -50px; right: 60px;
    width: 220px; height: 220px;
    border-radius: 50%;
    border: 1.5px solid rgba(10,170,142,0.12);
  }
  .circle-sm {
    position: absolute;
    bottom: 20px; right: 150px;
    width: 90px; height: 90px;
    border-radius: 50%;
    border: 1.5px solid rgba(10,170,142,0.09);
  }

  /* Logo */
  .logo { display: block; width: 180px; }

  /* Bottom text block */
  .eyebrow {
    font-family: system-ui, -apple-system, sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #0aaa8e;
    margin-bottom: 14px;
  }
  .headline {
    font-family: system-ui, -apple-system, sans-serif;
    font-size: 52px; /* larger than mockup — correct at full 1200px canvas */
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.5px;
    color: #1b1b1f;
  }
  .subtitle {
    font-family: system-ui, -apple-system, sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #555;
    margin-top: 14px;
  }
</style>
</head>
<body>
<div class="root">
  <div class="accent-bar"></div>
  <div class="wash"></div>
  <div class="circle-lg"></div>
  <div class="circle-sm"></div>

  <img class="logo" src="${logoDataUri}" alt="getinside">

  <div>
    <div class="eyebrow">Handbook</div>
    <div class="headline">Retail media,<br>explained.</div>
    <div class="subtitle">Broadcasting or monetizing? This handbook covers both.</div>
  </div>
</div>
</body>
</html>`;

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1200, height: 630 });
await page.setContent(html, { waitUntil: 'domcontentloaded' });

// Wait for all fonts to render before screenshotting
await page.evaluate(() => document.fonts.ready);

await page.screenshot({
  path: OUT,
  clip: { x: 0, y: 0, width: 1200, height: 630 },
});

await browser.close();
console.log(`✓ OG image written to ${OUT}`);
