'use client'

import { X, Flame } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface FilterSheetProps {
  isOpen: boolean
  onClose: () => void
  filters: {
    maxRent: number
    maxDistance: number
    combiOnly: boolean
    minScore: number
  }
  onFiltersChange: (filters: any) => void
}

export default function FilterSheet({ isOpen, onClose, filters, onFiltersChange }: FilterSheetProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 max-h-[85vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-bold">Filters</h2>
              <button onClick={onClose} className="p-2">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-3 block">
                  Max Rent: ₺{filters.maxRent.toLocaleString()}/month
                </label>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="5000"
                  value={filters.maxRent}
                  onChange={(e) => onFiltersChange({ ...filters, maxRent: Number(e.target.value) })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 mb-3 block">
                  Max Walking Distance: {filters.maxDistance} min
                </label>
                <input
                  type="range"
                  min="5"
                  max="45"
                  step="5"
                  value={filters.maxDistance}
                  onChange={(e) => onFiltersChange({ ...filters, maxDistance: Number(e.target.value) })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 mb-3 block">
                  Min Score: {filters.minScore}/10
                </label>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.5"
                  value={filters.minScore}
                  onChange={(e) => onFiltersChange({ ...filters, minScore: Number(e.target.value) })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <button
                onClick={() => onFiltersChange({ ...filters, combiOnly: !filters.combiOnly })}
                className={`w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-semibold transition-all ${
                  filters.combiOnly
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                <Flame className="w-5 h-5" />
                Combi Only
              </button>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => onFiltersChange({
                    maxRent: 50000,
                    maxDistance: 30,
                    combiOnly: false,
                    minScore: 0,
                  })}
                  className="flex-1 py-4 bg-gray-100 text-gray-700 rounded-2xl font-semibold"
                >
                  Reset
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-4 bg-primary text-white rounded-2xl font-semibold"
                >
                  Apply
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
