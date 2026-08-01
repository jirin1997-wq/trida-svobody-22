# Třída Svobody 22 — Pronájem Prostor Olomouc

Elegantní scroll-scrub web pro pronájem prostor v historickém domě v centru Olomouce.

## 🎯 Project Info

| Vlastnost | Hodnota |
|-----------|---------|
| **Website ID** | `1db4f63d-a80e-402f-8a6c-b95d82896c07` |
| **Subdoména** | `trida-svobody-22` |
| **Template** | scroll-scrub |
| **Typ** | website (standalone) |
| **Status** | Phase 3+4 — Ready to Deploy |

---

## 📍 Property

- **Adresa:** Tř. Svobody 619/22, 779 00 Olomouc, Česká Republika
- **Typ:** Historický činžovní dům v centru města
- **Umístění:** 2. patro
- **Google Maps:** https://maps.google.com/?q=49.5914115,17.2499975

---

## 🏠 Pronajímané Prostory

### Byt 4+1
- **Plocha:** 127 m²
- **Cena:** 24 000 Kč/měsíc + energie
- **Dostupnost:** Ihned
- **Popis:** Prostorný, elegantní, s moderním komfortem

### Sklepy
- **Dostupnost:** Dle zájmu
- **Typ:** Historická architektura, bezpečné úložiště

---

## 🎨 Design & Brand

### Barvová Paleta
- **Černá:** #1A1A1A
- **Bílá:** #FFFFFF
- **Šedá:** #808080
- **Měď (accent):** #8B7355

### Typografie
- **Headings:** Lora (serif, elegance)
- **Body:** Inter (sans-serif, čitelnost)

### Estétika
Elegantní, minimalistická, historické kořeny s moderním pojetím.

---

## 🚀 Tech Stack

### Frontend
- **React 18** (`'use client'`)
- **TypeScript**
- **CSS Modules** (styling + animations)
- **Lenis** (@studio-freight/lenis) — smooth scroll
- **GSAP** — ScrollTrigger animations
- **ScrollScrub** — Custom scroll-scrub engine (Higgsfields)

### Deployment
- **Higgsfields** — Website builder + deployment
- **CI/CD:** Git-based (push → auto-deploy)

---

## 📁 File Structure

```
app/
├── src/
│   ├── scroll-scrub-scenes.ts        # Design tokens + scene config
│   └── routes/
│       ├── index.tsx                 # Main page component
│       └── index.module.css           # Styling + animations
└── public/
    └── images/
        ├── hero-facade.jpg           # (Canva page 1)
        ├── foyer.jpg                 # (Canva page 2)
        ├── apartment.jpg             # (Canva pages 3-4)
        └── cellar.jpg                # (Canva page 5)
```

---

## 🔄 Journey (6 Sekcí)

```
Heritage (0-2.5s)   → Historická architektura, vstup
     ↓
Welcome (2.5-5s)    → Foyer, schodiště, atmosféra
     ↓
Spaces-Apt (5-8s)   → Byt 4+1, luxusní interiér
     ↓
Spaces-Cellar (8-10s) → Sklepy, úložní prostory
     ↓
Details (10-13s)    → Praktické informace, spec sheet
     ↓
Contact (13-15s)    → Mapa, telefon, email, CTA
```

---

## ✨ Features

### Animation
- ✅ **Smooth scroll:** Lenis v `useEffect`
- ✅ **ScrollTrigger:** GSAP pro section animations
- ✅ **Fade-in:** Elementy se animují při scrollu
- ✅ **Hover effects:** Buttons, cards, links

### Responsive
- ✅ **Mobile-first:** 480px–1920px
- ✅ **Adaptive grid:** Specs tvoří se z 3 na 1 sloupec
- ✅ **Touch-friendly:** Larger buttons, bigger font na mobilu

### Accessibility
- ✅ **Semantic HTML:** `<section>`, `<header>`, `<footer>`
- ✅ **Alt text:** Všechny obrázky
- ✅ **Color contrast:** WCAG AA
- ✅ **Reduced motion:** `@media (prefers-reduced-motion)`

---

## 📞 Kontakty

- **Telefon:** +420 732 613 208
- **Email:** jiri.n@outlook.com
- **Adresa:** Tř. Svobody 619/22, Olomouc

---

## 🚀 Deployment

Viz **DEPLOY_INSTRUCTIONS.md** pro step-by-step.

**TL;DR:**
```bash
git clone <repo-url>
cd trida-svobody-22
cp /path/to/files/* .
npm install
git add .
git commit -m "Phase 3+4: Web + motion"
git push origin main
npx higgsfields deploy_website --website-id 1db4f63d-...
```

---

## 🔍 Live URL

Po deploymentu bude dostupný na:
```
https://trida-svobody-22.higgsfield.ai
```

(Nebo tvoje custom doména, pokud je nastavena.)

---

## 📝 Poznámky

- **Design brief:** Schválený (Phase 0 ✓)
- **Storyboard:** Schválený (Phase 1 ✓)
- **Web build:** Kompletní (Phase 3 ✓)
- **Motion:** Integrován (Phase 4 ✓)
- **QA:** Mechanical gate passed (Phase 5 ✓)
- **Deploy:** Ready (Phase 6 pending)

---

## 🎯 Next Steps

1. Stáhni fotky z Canvy
2. Pushnul do repo
3. Deploy na Higgsfields
4. Ověř live na webu
5. Aktualizuj paměť na "LIVE"

**Pokud máš dotazy, piš!**
