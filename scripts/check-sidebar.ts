// Contrôle de la sidebar : profondeur 2 max, liens vivants, parité FR/EN,
// toute page de section atteignable en 2 clics (sidebar, puis un lien de la page).
// Usage : node scripts/check-sidebar.ts
import fs from 'node:fs'
import path from 'node:path'
import { buildSidebar } from '../.vitepress/sidebar.ts'
import type { Item } from '../.vitepress/sidebar.ts'

const DOCS = path.resolve(import.meta.dirname, '../docs')
const sidebar = buildSidebar(() => '')
const errors: string[] = []

const norm = (p: string) =>
  p.replace(/[#?].*$/, '').replace(/^\/handbook/, '').replace(/\/$/, '').replace(/\.(md|html)$/, '').replace(/\/index$/, '')
const fileOf = (link: string): string | null => {
  const p = norm(link)
  for (const c of [`${p}.md`, `${p}/index.md`]) {
    if (fs.existsSync(path.join(DOCS, c))) return c.replace(/^\//, '')
  }
  return null
}
const entries = (groups: Item[]) => groups.flatMap((g) => [g, ...(g.items ?? [])])

// 1. profondeur et liens vivants
const inSidebar = new Set<string>()
for (const [key, groups] of Object.entries(sidebar)) {
  for (const g of groups) {
    for (const e of g.items ?? []) if (e.items) errors.push(`profondeur > 2 : ${key} > ${g.text}`)
  }
  for (const e of entries(groups)) {
    if (!e.link) continue
    const f = fileOf(e.link)
    if (f) inSidebar.add(f)
    else errors.push(`lien mort : ${e.link} (${key})`)
  }
}

// 2. parité FR/EN
const linkSet = (groups: Item[]) =>
  entries(groups).filter((e) => e.link).map((e) => e.link!.replace(/^\/en/, '')).sort().join('|')
for (const key of Object.keys(sidebar).filter((k) => !k.startsWith('/en/'))) {
  if (!sidebar['/en' + key]) errors.push(`clé EN manquante : /en${key}`)
  else if (linkSet(sidebar[key]) !== linkSet(sidebar['/en' + key])) errors.push(`parité FR/EN rompue : ${key}`)
}

// 3. toute page de section est dans la sidebar ou liée depuis une page de la sidebar
const linkedFrom = (page: string): string[] => {
  const src = fs.readFileSync(path.join(DOCS, page), 'utf8')
  const out: string[] = []
  for (const m of src.matchAll(/\]\(([^)\s]+)\)|href="([^"]+)"/g)) {
    const raw = m[1] ?? m[2]
    if (/^(https?:|mailto:|#)/.test(raw)) continue
    const abs = raw.startsWith('/') ? raw : path.posix.join(path.posix.dirname('/' + page), raw)
    const f = fileOf(abs)
    if (f) out.push(f)
  }
  return out
}
const reachable = new Set(inSidebar)
for (const p of inSidebar) for (const f of linkedFrom(p)) reachable.add(f)

const SECTION = /^(en\/)?(recruit|retain|monetize|faq|resources|start-here)\/|^(en\/)?glossary\.md$/
const pages = (fs.readdirSync(DOCS, { recursive: true }) as string[]).filter((p) => p.endsWith('.md') && SECTION.test(p))
for (const p of pages) if (!reachable.has(p)) errors.push(`page non atteignable en 2 clics : ${p}`)

if (errors.length) {
  console.error(errors.join('\n'))
  process.exit(1)
}
console.log(`OK: ${Object.keys(sidebar).length} sidebars, ${inSidebar.size} pages dans les menus, ${pages.length} pages atteignables`)
