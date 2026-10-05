'use client'

import { Apartment } from '@/types/apartment'
import ApartmentCard from './ApartmentCard'

interface ListViewProps {
  apartments: Apartment[]
  favorites: Set<number>
  onToggleFavorite: (id: number) => void
}

export default function ListView({ apartments, favorites, onToggleFavorite }: ListViewProps) {
  return (
    <div className="h-full overflow-y-auto pb-20">
      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">
            {apartments.length} Apartments
          </h2>
        </div>
        
        {apartments.map(apartment => (
          <ApartmentCard
            key={apartment.id}
            apartment={apartment}
            isFavorite={favorites.has(apartment.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </div>
  )
}
