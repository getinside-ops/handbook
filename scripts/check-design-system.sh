#!/usr/bin/env bash
# Vérifie que le design system getinside est appliqué. Sort en erreur au premier écart.
set -u
cd "$(dirname "$0")/.."
fail=0
check() { if ! eval "$2"; then echo "FAIL: $1"; fail=1; fi; }

T=.vitepress/theme
check "Google Fonts retiré de config.ts" '! grep -q "googleapis\|gstatic" .vitepress/config.ts'
check "Google Fonts retiré de style.css" '! grep -q "googleapis" $T/style.css'
check "Garnett retiré" '! grep -rq "Garnett" $T assets --include=*.css --include=*.ts'
check "mode sombre désactivé" 'grep -q "appearance: false" .vitepress/config.ts'
check "plus de règle .dark" '! grep -q "^\.dark\|[ ,]\.dark " $T/style.css $T/ds-*.css'
check "plus de menthe #6AE7C8 / #067a66 / #0aaa8e" '! grep -rqi "6ae7c8\|067a66\|0aaa8e" $T .vitepress/config.ts'
check "police Bricolage présente" 'test -f assets/fonts/BricolageGrotesque-latin.woff2'
check "police Source Serif présente" 'test -f assets/fonts/SourceSerif4-Italic-latin.woff2'
check "jetons chargés" 'grep -q "ds-tokens.css" $T/index.ts'
check "sidebar : feuille de style chargée" 'grep -q "ds-sidebar.css" $T/index.ts'
check "sidebar : état actif sans contour 2px" '! grep -q "border: 2px" $T/ds-sidebar.css'
check "composants enregistrés" 'grep -q "GiLinkCard" $T/index.ts'
check "images du design system présentes" 'test "$(ls assets/images/ds 2>/dev/null | wc -l)" -ge 20'
check "pas de prix dans les composants" '! grep -rqiE "[0-9] ?(€|eur)" $T/components/Gi*.vue'

[ $fail -eq 0 ] && echo "OK: design system appliqué" || exit 1
