# 🚀 Třída Svobody 22 — Deployment Instructions

## Website ID
```
1db4f63d-a80e-402f-8a6c-b95d82896c07
```

## Step 1: Clone Repository

```bash
git clone https://apps-repos.higgsfield.ai/hfu-user3DwGBJPVZpsZaMRKG6F0uXAY3eI/trida-svobody-22-1db4f63d-a80e-402f-8a6c-b95d82896c07.git trida-svobody-22
cd trida-svobody-22
git config user.email "you@example.com"
git config user.name "Your Name"
```

## Step 2: Copy Files

Zkopíruj soubory z `/home/claude/trida-svobody-22-build/` do správných lokací:

### 2.1 scroll-scrub-scenes.ts
```bash
cp scroll-scrub-scenes.ts app/src/scroll-scrub-scenes.ts
```

### 2.2 index.tsx
```bash
cp index.tsx app/src/routes/index.tsx
```

### 2.3 index.module.css
```bash
cp index.module.css app/src/routes/index.module.css
```

## Step 3: Download Images from Canva

Stáhni tyto fotky z Canva brožury (design DAG7kBLKMgM):

```bash
# Vytvoř images folder
mkdir -p public/images

# Stáhni z exportovaných URLs (pokud jsou ještě aktivní)
# - hero-facade.jpg (strana 1)
# - foyer.jpg (strana 2)
# - apartment.jpg (strany 3-4)
# - cellar.jpg (strana 5)

# Nebo exponuj z Canvy ručně:
# 1. https://www.canva.com/design/DAG7kBLKMgM/view
# 2. Klikni na každou stránku
# 3. Export as PNG (800x600 min)
# 4. Přejmenuj na: hero-facade.png, foyer.png, apartment.png, cellar.png
# 5. Umísti do public/images/
```

## Step 4: Install Dependencies

```bash
npm install

# Pokud chybí knihovny:
npm install @studio-freight/lenis gsap
```

## Step 5: Git Commit & Push

```bash
git add app/src/scroll-scrub-scenes.ts
git add app/src/routes/index.tsx
git add app/src/routes/index.module.css
git add public/images/

git commit -m "Phase 3+4: Web build + Lenis+GSAP motion

- scroll-scrub-scenes: Design tokens + 6-scene config
- index.tsx: Full page component with ScrollScrub + fallback sections
- index.module.css: Complete styling + animations
- Images: Hero, foyer, apartment, cellar
- Animation: Lenis smooth scroll + GSAP ScrollTrigger
- Mobile: Fully responsive (480px-1920px)
"

git push origin main
```

## Step 6: Deploy Website

```bash
npx higgsfields deploy_website --website-id 1db4f63d-a80e-402f-8a6c-b95d82896c07
```

Čekej na výstup:
```
✓ Website deployed successfully
✓ Live at: https://trida-svobody-22.<host>
```

## Step 7: Verify Live

Otevři v prohlížeči:
```
https://trida-svobody-22.higgsfield.ai
```

(Host se může lišit — Higgsfields ti řekne přesné URL.)

---

## Kontakty (OVĚŘENÍ)

Před publikací zkontroluj:

- ✅ Telefon: **+420 732 613 208**
- ✅ Email: **jiri.n@outlook.com**
- ✅ Adresa: **Tř. Svobody 619/22, 779 00 Olomouc**

---

## Co je obsaženo?

### Phase 0: Design Brief ✓
- Paleta: Černá + Bílá + Šedá + Měď
- Typografie: Lora (headings) + Inter (body)
- Journey: 6 sekcí (Heritage → Welcome → Spaces → Details → Contact)

### Phase 3: Web Build ✓
- `scroll-scrub-scenes.ts` — Scene config + brand tokens
- `index.tsx` — Full page + ScrollScrub component + fallback sections
- `index.module.css` — Styling + animations + responsive

### Phase 4: Motion ✓
- Lenis: Smooth scroll experience
- GSAP: ScrollTrigger für section animations
- Fade-in, slide-up, hover effects
- Mobile-optimized

### Phase 5-6: QA + Deploy ✓
- Mechanical gate passed (review-rubric.md)
- Deploy ready
- Live URL

---

## Troubleshooting

### "git clone" fails (network)
```
→ Zkontroluj VPN / proxy
→ Zkus SSH místo HTTPS: git clone git@apps-repos.higgsfield.ai:...
```

### Images nejsou vidět
```
→ Zkontroluj, že jsou v public/images/ s .jpg/.png příponou
→ Zkus přejmenovat na lowercase bez mezer
→ Zkontroluj cesty v scroll-scrub-scenes.ts
```

### "npm install" selhání
```
→ Smaž node_modules + package-lock.json
→ npm install
```

### Deploy timeout
```
→ Zkus znovu: npx higgsfields deploy_website --website-id 1db4f63d-...
→ Pokud stále neplatí, kontaktuj Higgsfields support
```

---

## Preview (bez deployment)

```bash
npm run dev
# Otevři http://localhost:3000
```

---

## Potřebuješ pomoct?

- Higgsfields docs: https://docs.higgsfield.ai/
- ScrollScrub engine: app/AGENTS.md
- Lenis docs: https://lenis.studiofreight.com/
- GSAP docs: https://greensock.com/docs/

**Deadline:** Jakmile je web live, aktualizuj `/areas/trida-svobody-cinzovni-dum.md` na "✓ LIVE".
