# 📸 Ekran Görüntüleri Nasıl Alınır?

GitHub repo önizleme görselleri için ekran görüntüleri almanız gerekiyor.

## Hızlı Yöntem

1. **Uygulamayı çalıştırın:**
   ```bash
   npm run dev
   ```

2. **Chrome DevTools'u açın:**
   - F12 veya Cmd+Option+I (Mac)
   - Toggle device toolbar (Cmd+Shift+M)
   - iPhone 15 Pro seçin

3. **Ekran görüntülerini alın:**
   - Ana sayfa (harita görünümü)
   - Liste görünümü
   - Filtreler açık
   - Detay sayfası
   - Galeri kaydırma

4. **Görselleri kaydedin:**
   ```
   public/screenshots/
   ├── map-view.png
   ├── list-view.png
   ├── filters.png
   └── detail-view.png
   ```

## GitHub Repo Önizleme Görseli

**Boyut:** 1200x630px

### Canva ile (Önerilen):
1. [canva.com](https://canva.com)'a gidin
2. "Social Media" → "Facebook Post" (1200x630)
3. Uygulama ekran görüntülerini ekleyin
4. Logo ve başlık ekleyin
5. `og-image.png` olarak indirin
6. `public/og-image.png` olarak kaydedin

### Figma ile:
1. 1200x630px frame oluşturun
2. Ekran görüntülerini yerleştirin
3. Export as PNG
4. `public/og-image.png` olarak kaydedin

## Örnek Kompozisyon

```
┌─────────────────────────────────────┐
│                                     │
│  🏠 Apartment Finder                │
│                                     │
│  ┌──────┐ ┌──────┐ ┌──────┐       │
│  │ Map  │ │ List │ │Detail│       │
│  │ View │ │ View │ │ View │       │
│  └──────┘ └──────┘ └──────┘       │
│                                     │
│  Modern Mobile-First Design         │
│                                     │
└─────────────────────────────────────┘
```

## Sonraki Adım

Görselleri ekledikten sonra:
```bash
git add public/
git commit -m "Add preview images"
git push
```

GitHub otomatik olarak `og-image.png` dosyasını repo önizlemesinde gösterecektir! 🎉
