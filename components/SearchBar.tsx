'use client'

import { Search, SlidersHorizontal } from 'lucide-react'

interface SearchBarProps {
  onFilterClick: () => void
}

export default function SearchBar({ onFilterClick }: SearchBarProps) {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex-1 flex items-center bg-gray-100 rounded-2xl px-4 py-3 gap-3">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search location..."
              className="flex-1 bg-transparent outline-none text-base"
            />
          </div>
          <button
            onClick={onFilterClick}
            className="bg-primary text-white p-3 rounded-2xl active:scale-95 transition-transform"
          >
            <SlidersHorizontal className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}
