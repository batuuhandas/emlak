# Deployment Guide / Yayınlama Rehberi

## Vercel ile Deploy (Önerilen ⭐)

En kolay ve hızlı yöntem:

1. GitHub'a push yapın
2. [vercel.com](https://vercel.com)'a gidin ve GitHub ile giriş yapın
3. "New Project" → Repository'nizi seçin
4. "Deploy" tıklayın
5. ✅ Bitti! Otomatik URL alırsınız (örn: `your-app.vercel.app`)

**Avantajları:**
- Otomatik SSL
- Her commit'te otomatik deploy
- Hızlı CDN
- Ücretsiz

---

## GitHub Pages ile Deploy

1. **GitHub Settings'e gidin:**
   - Repository → Settings → Pages
   - Source: "GitHub Actions" seçin

2. **Kodu GitHub'a push yapın:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Otomatik deploy başlayacak:**
   - Actions tab'ında ilerlemeyi görün
   - 2-3 dakika sonra hazır olur

4. **URL'niz:**
   - `https://[kullanıcıadınız].github.io/[repo-adı]`
   - Örnek: `https://ahmet.github.io/apartment-finder`

**Önemli:** `next.config.js` içinde `basePath` değerini repo adınıza göre değiştirin!

```js
basePath: process.env.NODE_ENV === 'production' ? '/REPO-ADINIZ' : '',
```

---

## Netlify ile Deploy

1. [netlify.com](https://netlify.com)'a gidin
2. "Add new site" → "Import from Git"
3. Repository'nizi seçin
4. Build command: `npm run build`
5. Publish directory: `out`
6. Deploy!

---

## Hangi Yöntem?

- **En kolay:** Vercel (Next.js için optimize)
- **Ücretsiz hosting:** GitHub Pages
- **Form/Serverless fonksiyonlar:** Netlify

Hepsi ücretsiz ve otomatik deploy destekler!
