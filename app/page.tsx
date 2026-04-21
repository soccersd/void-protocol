'use client'

import { useEffect, useState } from 'react'
import Cursor from '@/components/Cursor'
import HeroSection from '@/components/HeroSection'
import ProductLineup from '@/components/ProductLineup'
import TechSpecs from '@/components/TechSpecs'
import EventHorizon from '@/components/EventHorizon'
import BrandStory from '@/components/BrandStory'
import Footer from '@/components/Footer'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="relative">
      <Cursor />
      <div className="bg-noise" />
      <div className="schematic-bg fixed top-0 left-0 w-full h-screen" />
      
      <HeroSection />
      <ProductLineup />
      <TechSpecs />
      <EventHorizon />
      <BrandStory />
      <Footer />
    </main>
  )
}
