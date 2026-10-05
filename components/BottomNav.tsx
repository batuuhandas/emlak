'use client'

import { Map, List, Heart, User } from 'lucide-react'

interface BottomNavProps {
  view: 'map' | 'list'
  onViewChange: (view: 'map' | 'list') => void
  favCount: number
}

export default function BottomNav({ view, onViewChange, favCount }: BottomNavProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 safe-area-bottom">
      <div className="grid grid-cols-4 h-16">
        <button
          onClick={() => onViewChange('map')}
          className={`flex flex-col items-center justify-center gap-1 ${
            view === 'map' ? 'text-primary' : 'text-gray-500'
          }`}
        >
          <Map className="w-6 h-6" />
          <span className="text-xs font-medium">Map</span>
        </button>

        <button
          onClick={() => onViewChange('list')}
          className={`flex flex-col items-center justify-center gap-1 ${
            view === 'list' ? 'text-primary' : 'text-gray-500'
          }`}
        >
          <List className="w-6 h-6" />
          <span className="text-xs font-medium">List</span>
        </button>

        <button className="flex flex-col items-center justify-center gap-1 text-gray-500 relative">
          <Heart className="w-6 h-6" />
          <span className="text-xs font-medium">Saved</span>
          {favCount > 0 && (
            <span className="absolute top-1 right-1/4 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {favCount}
            </span>
          )}
        </button>

        <button className="flex flex-col items-center justify-center gap-1 text-gray-500">
          <User className="w-6 h-6" />
          <span className="text-xs font-medium">Profile</span>
        </button>
      </div>
    </div>
  )
}
