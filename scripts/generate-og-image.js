import { chromium } from 'playwright';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, '../assets/images/og-image.png');

// Inline the SVG logo so the HTML page is fully self-contained
const logoSvg = readFileSync(resolve(__dirname, '../assets/images/logo-getinside.svg'), 'utf-8');
const logoDataUri = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString('base64')}`;

const b64 = (f, mime) => `data:${mime};base64,${readFileSync(resolve(__dirname, f)).toString('base64')}`;
const bricolage = b64('../assets/fonts/BricolageGrotesque-latin.woff2', 'font/woff2');
const serif = b64('../assets/fonts/SourceSerif4-Italic-latin.woff2', 'font/woff2');
const pelican = b64('../assets/images/ds/pelican-salut-hd.webp', 'image/webp');

// Design system getinside : grège, encre, jaune en aplat (jamais en texte), contour 2 px + ombre dure
const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  @font-face { font-family: 'Bricolage Grotesque'; src: url(${bricolage}) format('woff2'); font-weight: 200 800; }
  @font-face { font-family: 'Source Serif 4'; src: url(${serif}) format('woff2'); font-style: italic; font-weight: 200 900; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 1200px; height: 630px; overflow: hidden; background: #f4f4f0; }
  .root {
    width: 1200px; height: 630px; background: #f4f4f0;
    display: flex; justify-content: space-between; align-items: stretch;
    padding: 64px 80px; font-family: 'Bricolage Grotesque', system-ui, sans-serif; color: #0c0c09;
  }
  .text { display: flex; flex-direction: column; justify-content: space-between; width: 620px; }
  .logo { display: block; width: 180px; }
  .eyebrow { font-size: 16px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 18px; }
  .headline { font-size: 80px; font-weight: 800; line-height: 1; letter-spacing: -2px; }
  .headline em { font-family: 'Source Serif 4', Georgia, serif; font-style: italic; font-weight: 600; letter-spacing: -1px; }
  .subtitle { font-size: 24px; font-weight: 400; line-height: 1.35; color: #55554f; margin-top: 22px; }
  .card {
    width: 400px; align-self: center; height: 470px; background: #fcf758;
    border: 2px solid #0c0c09; border-radius: 32px; box-shadow: 8px 8px 0 0 #0c0c09;
    display: flex; align-items: center; justify-content: center;
  }
  .card img { height: 400px; }
</style>
</head>
<body>
<div class="root">
  <div class="text">
    <img class="logo" src="${logoDataUri}" alt="getinside">
    <div>
      <div class="eyebrow">Handbook</div>
      <div class="headline">Le marketing<br><em>qui touche.</em></div>
      <div class="subtitle">Recruter, fidéliser et monétiser vos clients avec le colis et le courrier adressé.</div>
    </div>
  </div>
  <div class="card"><img src="${pelican}" alt=""></div>
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
