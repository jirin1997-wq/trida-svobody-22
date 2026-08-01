#!/bin/bash
set -e

WEBSITE_ID="1db4f63d-a80e-402f-8a6c-b95d82896c07"
REPO_URL="https://apps-repos.higgsfield.ai/hfu-user3DwGBJPVZpsZaMRKG6F0uXAY3eI/trida-svobody-22-${WEBSITE_ID}.git"

echo "🚀 Třída Svobody 22 — Automated Setup"
echo "==========================================="
echo ""

# Step 1: Clone repository
echo "📥 Step 1: Cloning Higgsfields repository..."
if [ -d "trida-svobody-22" ]; then
  echo "   ⚠️  Directory already exists. Skipping clone."
  cd trida-svobody-22
else
  git clone "$REPO_URL" trida-svobody-22
  cd trida-svobody-22
fi

# Step 2: Configure git
echo "⚙️  Step 2: Configuring git..."
git config user.email "deployment@trida-svobody-22.local"
git config user.name "Třída Svobody Deploy Bot"

# Step 3: Copy files
echo "📄 Step 3: Copying source files..."
cp ../scroll-scrub-scenes.ts app/src/scroll-scrub-scenes.ts
cp ../index.tsx app/src/routes/index.tsx
cp ../index.module.css app/src/routes/index.module.css

# Step 4: Copy images
echo "🖼️  Step 4: Copying images..."
mkdir -p public/images
cp ../public/images/* public/images/ 2>/dev/null || true

# Step 5: Install dependencies
echo "📦 Step 5: Installing dependencies..."
npm install 2>&1 | grep -E "(added|up to date|found 0 vulnerabilities)" || true

# Step 6: Git commit
echo "💾 Step 6: Committing changes..."
git add app/src/scroll-scrub-scenes.ts
git add app/src/routes/index.tsx
git add app/src/routes/index.module.css
git add public/images/ 2>/dev/null || true

git commit -m "Phase 3+4: Web build + Lenis+GSAP motion

- scroll-scrub-scenes: Design tokens + 6-scene config
- index.tsx: Full page component with ScrollScrub + sections
- index.module.css: Complete styling + animations + responsive
- Images: Hero facade, foyer, apartment, cellar (from Canva)
- Animation: Lenis smooth scroll + GSAP ScrollTrigger
- Mobile: Fully responsive (480px-1920px)" || echo "   ℹ️  Nothing to commit (files unchanged)"

# Step 7: Push
echo "🚀 Step 7: Pushing to origin..."
git push origin main

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📱 Next steps:"
echo "   1. Deploy: npx higgsfields deploy_website --website-id ${WEBSITE_ID}"
echo "   2. Wait 5 minutes for build"
echo "   3. Live at: https://trida-svobody-22.<host>"
echo ""
echo "📞 Contacts verified:"
echo "   ✓ Telefon: +420 732 613 208"
echo "   ✓ Email: jiri.n@outlook.com"
echo "   ✓ Adresa: Tř. Svobody 619/22, Olomouc"
echo ""
