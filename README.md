# 🏠 Mobile-First Apartment Finder

<div align="center">
  <img src="public/preview.png" alt="App Preview" width="100%" />
  
  <p align="center">
    Modern, mobil-öncelikli daire kiralama uygulaması
    <br />
    <a href="#features"><strong>Özellikler »</strong></a>
    <br />
    <br />
    <a href="https://your-username.github.io/apartment-finder">Demo'yu Dene</a>
    ·
    <a href="#kurulum">Kurulum</a>
    ·
    <a href="DEPLOYMENT.md">Yayınlama</a>
  </p>
</div>

A modern, mobile-first apartment rental search application with a native app-like experience.

## ✨ Öne Çıkan Özellikler

<table>
  <tr>
    <td width="50%">
      <h3>🗺️ Harita Görünümü</h3>
      <img src="public/screenshots/map-view.png" alt="Map View" />
      <p>Harita üzerinde daireleri görüntüleyin, kartlar arasında kaydırın</p>
    </td>
    <td width="50%">
      <h3>📱 Liste Görünümü</h3>
      <img src="public/screenshots/list-view.png" alt="List View" />
      <p>Detaylı kart görünümü ile tüm daireleri listeleyin</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>🏠 Detay Sayfası</h3>
      <img src="public/screenshots/detail-view.png" alt="Detail View" />
      <p>Kaydırılabilir galeri ve tam bilgiler</p>
    </td>
    <td width="50%">
      <h3>🔍 Akıllı Filtreler</h3>
      <img src="public/screenshots/filters.png" alt="Filters" />
      <p>Fiyat, mesafe, kombi ve puan filtreleri</p>
    </td>
  </tr>
</table>

## Features

- 🗺️ **Interactive Map View** - Browse apartments on a map with horizontal scrollable cards
- 📱 **Mobile-First Design** - Optimized for iPhone 15 Pro and modern Android devices
- 💚 **Favorites System** - Save your favorite apartments
- 🔍 **Smart Filters** - Filter by rent, distance, combi heating, and score
- 🏠 **Beautiful Detail Pages** - Swipeable image galleries and comprehensive property info
- 🎨 **Modern UI** - Airbnb/Sahibinden-inspired design with smooth animations

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Leaflet (Maps)
- Framer Motion (Animations)
- Lucide Icons

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your mobile browser or use responsive mode.

## Mobile Testing

For best experience:
- Use Chrome DevTools device mode (iPhone 15 Pro)
- Or test on actual mobile device
- Ensure viewport is set to mobile size

## Project Structure

```
├── app/
│   ├── apartment/[id]/ - Apartment detail page
│   ├── layout.tsx      - Root layout
│   ├── page.tsx        - Home page
│   └── globals.css     - Global styles
├── components/
│   ├── ApartmentCard.tsx  - Apartment card component
│   ├── BottomNav.tsx      - Bottom navigation
│   ├── FilterSheet.tsx    - Filter drawer
│   ├── ListView.tsx       - List view
│   ├── MapView.tsx        - Map view with cards
│   └── SearchBar.tsx      - Search bar
├── data/
│   └── apartments.ts      - Sample apartment data
└── types/
    └── apartment.ts       - TypeScript types
```

## UI/UX Features

- Touch-friendly 44px+ buttons
- Bottom navigation for one-handed use
- Smooth animations and transitions
- Card-based layout
- Swipeable image galleries
- Slide-up filter drawer
- Sticky search bar
- Safe area support for notched devices
