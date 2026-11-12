import test from 'node:test'
import assert from 'node:assert/strict'
import { groupOf } from '../.vitepress/theme/sidebar-trail.ts'

const groups = [
  {
    text: '<svg></svg>Démarrer',
    items: [
      { text: "Vue d'ensemble", link: '/recruit/' },
      { text: 'Suivi & Mesure', link: '/recruit/analytics' },
    ],
  },
  {
    text: 'Insertion colis',
    items: [
      { text: 'Présentation', link: '/recruit/sponsored-mail/' },
      { text: 'Guide de création', link: '/recruit/sponsored-mail/design-guide/' },
    ],
  },
  { text: '<span class="gi-dot"></span>Échantillonnage', link: '/recruit/sampling/' },
]
const root = '/recruit/'

test('lien exact : renvoie le groupe, sans balises', () => {
  assert.equal(groupOf(groups, '/recruit/analytics', root), 'Démarrer')
})

test("page d'accueil du parcours : groupe de la vue d'ensemble", () => {
  assert.equal(groupOf(groups, '/recruit/index', root), 'Démarrer')
})

test('page cachée : plus long préfixe gagne (guide avant présentation)', () => {
  assert.equal(groupOf(groups, '/recruit/sponsored-mail/design-guide/legal', root), 'Insertion colis')
})

test('lien de premier niveau : le libellé de l\'entrée sert de groupe', () => {
  assert.equal(groupOf(groups, '/recruit/sampling/index', root), 'Échantillonnage')
})

test('page sans rattachement : null (le lien racine ne capte pas tout)', () => {
  assert.equal(groupOf(groups, '/recruit/sustainability', root), null)
})
