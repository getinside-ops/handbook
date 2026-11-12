export interface Entry {
  text: string
  link?: string
  items?: Entry[]
}

const norm = (p: string) => p.replace(/#.*$/, '').replace(/\.html$/, '').replace(/\/index$/, '').replace(/\/$/, '')
const strip = (s: string) => s.replace(/<[^>]*>/g, '').trim()

/**
 * Libellé du groupe de la sidebar le plus proche de la page `here` (chemin sans .md).
 * Lien exact, sinon plus long préfixe. Le lien racine du parcours (`root`) ne compte
 * que s'il est exact, sinon il capterait toutes les pages du parcours.
 */
export function groupOf(groups: Entry[], here: string, root: string): string | null {
  const page = norm(here)
  const top = norm(root)
  let best: { len: number; text: string } | null = null
  for (const g of groups) {
    for (const e of [g, ...(g.items ?? [])]) {
      if (!e.link) continue
      const l = norm(e.link)
      const hit = page === l || (l !== top && page.startsWith(l + '/'))
      if (hit && (!best || l.length > best.len)) best = { len: l.length, text: strip(g.text) }
    }
  }
  return best ? best.text : null
}
