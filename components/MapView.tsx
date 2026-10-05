'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { Apartment } from '@/types/apartment'
import ApartmentCard from './ApartmentCard'

const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)

interface MapViewProps {
  apartments: Apartment[]
  favorites: Set<number>
  onToggleFavorite: (id: number) => void
}

export default function MapView({ apartments, favorites, onToggleFavorite }: MapViewProps) {
  const [selectedApartment, setSelectedApartment] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('leaflet/dist/leaflet.css')
    }
  }, [])

  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = 288 + 16
      scrollRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="relative h-full">
      <div className="h-full">
        <MapContainer
          center={[41.0082, 28.9784]}
          zoom={12}
          style={{ height: '100%', width: '100%' }}
          zoomControl={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          {apartments.map((apartment, index) => (
            <Marker
              key={apartment.id}
              position={[apartment.lat, apartment.lng]}
              eventHandlers={{
                click: () => {
                  setSelectedApartment(apartment.id)
                  scrollToCard(index)
                }
              }}
            />
          ))}
        </MapContainer>
      </div>

      <div className="absolute bottom-20 left-0 right-0 px-4">
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory"
        >
          {apartments.map(apartment => (
            <div key={apartment.id} className="snap-center flex-shrink-0">
              <ApartmentCard
                apartment={apartment}
                isFavorite={favorites.has(apartment.id)}
                onToggleFavorite={onToggleFavorite}
                size="compact"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
