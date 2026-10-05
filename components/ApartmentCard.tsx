'use client'

import { Heart, MapPin, Flame } from 'lucide-react'
import { Apartment } from '@/types/apartment'
import { useRouter } from 'next/navigation'

interface ApartmentCardProps {
  apartment: Apartment
  isFavorite: boolean
  onToggleFavorite: (id: number) => void
  size?: 'default' | 'compact'
}

export default function ApartmentCard({ 
  apartment, 
  isFavorite, 
  onToggleFavorite,
  size = 'default' 
}: ApartmentCardProps) {
  const router = useRouter()

  const handleCardClick = () => {
    router.push(`/apartment/${apartment.id}`)
  }

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onToggleFavorite(apartment.id)
  }

  return (
    <div 
      onClick={handleCardClick}
      className={`bg-white rounded-2xl shadow-card active:shadow-card-hover transition-all overflow-hidden ${
        size === 'compact' ? 'w-72' : 'w-full'
      }`}
    >
      <div className="relative">
        <img 
          src={apartment.images[0]} 
          alt={apartment.title}
          className="w-full h-48 object-cover"
        />
        <button 
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full active:scale-90 transition-transform"
        >
          <Heart 
            className={`w-5 h-5 ${isFavorite ? 'fill-primary text-primary' : 'text-gray-700'}`}
          />
        </button>
        {apartment.hasCombi && (
          <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Flame className="w-3 h-3" />
            Combi
          </div>
        )}
        <div className="absolute bottom-3 right-3 bg-green-500 text-white px-3 py-1.5 rounded-xl text-sm font-bold">
          {apartment.score}/10
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-gray-900 flex-1 line-clamp-1">
            {apartment.title}
          </h3>
        </div>
        
        <div className="flex items-center text-gray-600 text-sm mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{apartment.district}</span>
          <span className="mx-2">•</span>
          <span>{apartment.walkingDistance} min walk</span>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              ₺{apartment.rent.toLocaleString()}
            </span>
            <span className="text-gray-500 text-sm">/month</span>
          </div>
          <div className="text-sm text-gray-600">
            {apartment.bedrooms}+1 • {apartment.size}m²
          </div>
        </div>
      </div>
    </div>
  )
}
