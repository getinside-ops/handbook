import fs from 'fs'
const html = fs.readFileSync('.vitepress/dist/en/index.html', 'utf-8')
console.log(html.includes('🛍️ Advertisers') ? 'YES' : 'NO')
