'use client'

import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { ArrowLeft, Heart, Share2, MapPin, Home, Ruler, Flame, Star } from 'lucide-react'
import { apartments } from '@/data/apartments'
import { motion } from 'framer-motion'

export default function ApartmentDetail() {
  const params = useParams()
  const router = useRouter()
  const [currentImage, setCurrentImage] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  const apartment = apartments.find(apt => apt.id === Number(params.id))

  if (!apartment) {
    return <div>Apartment not found</div>
  }

  return (
    <div className="h-screen flex flex-col bg-white">
      <div className="relative">
        <div className="relative h-96 overflow-hidden">
          <motion.div
            className="flex h-full transition-transform duration-300"
            style={{ transform: `translateX(-${currentImage * 100}%)` }}
          >
            {apartment.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${apartment.title} - ${index + 1}`}
                className="w-full h-full object-cover flex-shrink-0"
              />
            ))}
          </motion.div>
        </div>

        <div className="absolute top-4 left-4 right-4 flex justify-between">
          <button
            onClick={() => router.back()}
            className="bg-white/90 backdrop-blur-sm p-3 rounded-full active:scale-90 transition-transform"
          >
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="bg-white/90 backdrop-blur-sm p-3 rounded-full active:scale-90 transition-transform"
            >
              <Heart
                className={`w-6 h-6 ${isFavorite ? 'fill-primary text-primary' : 'text-gray-900'}`}
              />
            </button>
            <button className="bg-white/90 backdrop-blur-sm p-3 rounded-full active:scale-90 transition-transform">
              <Share2 className="w-6 h-6 text-gray-900" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {apartment.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`h-2 rounded-full transition-all ${
                currentImage === index ? 'w-8 bg-white' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-28">
        <div className="p-6 space-y-6">
          <div>
            <div className="flex items-start justify-between mb-3">
              <h1 className="text-2xl font-bold text-gray-900 flex-1">
                {apartment.title}
              </h1>
              <div className="bg-green-500 text-white px-3 py-1.5 rounded-xl text-base font-bold flex items-center gap-1">
                <Star className="w-4 h-4 fill-white" />
                {apartment.score}/10
              </div>
            </div>
            
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin className="w-5 h-5 mr-1" />
              <span className="text-base">{apartment.district} • {apartment.walkingDistance} min walk</span>
            </div>

            <div className="text-3xl font-bold text-gray-900">
              ₺{apartment.rent.toLocaleString()}
              <span className="text-lg text-gray-500 font-normal">/month</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gray-50 p-4 rounded-2xl">
              <Home className="w-6 h-6 text-gray-600 mb-2" />
              <div className="text-2xl font-bold text-gray-900">{apartment.bedrooms}+1</div>
              <div className="text-sm text-gray-600">Rooms</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-2xl">
              <Ruler className="w-6 h-6 text-gray-600 mb-2" />
              <div className="text-2xl font-bold text-gray-900">{apartment.size}</div>
              <div className="text-sm text-gray-600">m²</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-2xl">
              <MapPin className="w-6 h-6 text-gray-600 mb-2" />
              <div className="text-2xl font-bold text-gray-900">{apartment.floor}</div>
              <div className="text-sm text-gray-600">Floor</div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Features</h2>
            <div className="flex flex-wrap gap-2">
              {apartment.hasCombi && (
                <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2">
                  <Flame className="w-4 h-4" />
                  Combi Heating
                </span>
              )}
              {apartment.features.map((feature, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-sm font-semibold"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Description</h2>
            <p className="text-gray-600 text-base leading-relaxed">
              {apartment.description}
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex gap-3">
        <button className="flex-1 bg-gray-100 text-gray-900 py-4 rounded-2xl font-bold text-lg active:scale-95 transition-transform">
          Message
        </button>
        <button className="flex-1 bg-primary text-white py-4 rounded-2xl font-bold text-lg active:scale-95 transition-transform">
          Call Owner
        </button>
      </div>
    </div>
  )
}
