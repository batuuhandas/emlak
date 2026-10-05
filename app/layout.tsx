import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Apartment Finder - Daire Kiralama Uygulaması',
  description: 'Hayalinizdeki daireyi bulun. Harita üzerinde görüntüleyin, filtreleyın, favorilerinize ekleyin.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  themeColor: '#FF385C',
  openGraph: {
    title: 'Apartment Finder',
    description: 'Modern mobil daire kiralama uygulaması',
    url: 'https://your-username.github.io/apartment-finder',
    siteName: 'Apartment Finder',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Apartment Finder Preview',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apartment Finder',
    description: 'Modern mobil daire kiralama uygulaması',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  )
}
