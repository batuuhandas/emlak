'use client'

import { useState } from 'react'
import MapView from '@/components/MapView'
import ListView from '@/components/ListView'
import BottomNav from '@/components/BottomNav'
import SearchBar from '@/components/SearchBar'
import FilterSheet from '@/components/FilterSheet'
import { apartments } from '@/data/apartments'

export default function Home() {
  const [view, setView] = useState<'map' | 'list'>('map')
  const [showFilters, setShowFilters] = useState(false)
  const [favorites, setFavorites] = useState<Set<number>>(new Set())
  const [filters, setFilters] = useState({
    maxRent: 50000,
    maxDistance: 30,
    combiOnly: false,
    minScore: 0,
  })

  const toggleFavorite = (id: number) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(id)) {
      newFavorites.delete(id)
    } else {
      newFavorites.add(id)
    }
    setFavorites(newFavorites)
  }

  const filteredApartments = apartments.filter(apt => {
    if (apt.rent > filters.maxRent) return false
    if (apt.walkingDistance > filters.maxDistance) return false
    if (filters.combiOnly && !apt.hasCombi) return false
    if (apt.score < filters.minScore) return false
    return true
  })

  return (
    <main className="h-screen flex flex-col overflow-hidden">
      <SearchBar onFilterClick={() => setShowFilters(true)} />
      
      <div className="flex-1 overflow-hidden">
        {view === 'map' ? (
          <MapView 
            apartments={filteredApartments}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        ) : (
          <ListView 
            apartments={filteredApartments}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        )}
      </div>

      <BottomNav view={view} onViewChange={setView} favCount={favorites.size} />
      
      <FilterSheet 
        isOpen={showFilters}
        onClose={() => setShowFilters(false)}
        filters={filters}
        onFiltersChange={setFilters}
      />
    </main>
  )
}
