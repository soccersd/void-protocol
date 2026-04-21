'use client'

import { useEffect, useRef, useState } from 'react'
import { Icon } from '@iconify/react'
import { useDecryptedText } from '@/hooks/useDecryptedText'

interface MinerSpecs {
  name: string
  codeName: string
  model: string
  tier: string
  description: string
  image: string
  hashrate: string
  power: string
  price: string
  features: string[]
  accent: string
  glowColor: string
}

const miners: MinerSpecs[] = [
  {
    name: 'Fragment-01',
    codeName: 'The Shard',
    model: 'F-01',
    tier: 'Beginners / Home Miners',
    description: 'Embedded Crystal design with internal circuits',
    image: '/images/fragment-01.jpeg',
    hashrate: 'TBD',
    power: 'TBD',
    price: 'TBD',
    features: ['Compact mineral design', 'Low power consumption', 'Silent operation', 'Plug & play setup'],
    accent: 'bg-cyan-500',
    glowColor: 'shadow-cyan-500/50'
  },
  {
    name: 'Fissure-05',
    codeName: 'The Rift',
    model: 'F-05',
    tier: 'Professional Farmers',
    description: 'Large fissure with violet magma-like glow',
    image: '/images/fissure-05.jpeg',
    hashrate: 'TBD',
    power: 'TBD',
    price: 'TBD',
    features: ['Enhanced hashrate', 'Advanced cooling', 'Remote monitoring', 'Optimized efficiency'],
    accent: 'bg-accent',
    glowColor: 'shadow-accent/50'
  },
  {
    name: 'Anomaly-X',
    codeName: 'The Singularity',
    model: 'A-X',
    tier: 'Enterprise / Whales',
    description: 'Levitating components with magnetic fields',
    image: '/images/Anomaly-X.jpeg',
    hashrate: 'TBD',
    power: 'TBD',
    price: 'TBD',
    features: ['Maximum performance', 'Magnetic levitation', 'Enterprise support', 'Priority allocation'],
    accent: 'bg-purple-600',
    glowColor: 'shadow-purple-600/50'
  }
]

function GlitchImage({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const [isGlitching, setIsGlitching] = useState(false)

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={style}
      onMouseEnter={() => setIsGlitching(true)}
      onMouseLeave={() => setIsGlitching(false)}
    >
      {/* Glitch layers */}
      {isGlitching && (
        <>
          <div className="absolute inset-0 bg-cyan-500/20 mix-blend-screen animate-pulse translate-x-1" />
          <div className="absolute inset-0 bg-accent/20 mix-blend-screen animate-pulse -translate-x-1" />
          <div className="absolute inset-0 bg-purple-500/10 mix-blend-screen animate-pulse translate-y-1" />
        </>
      )}
      {children}
    </div>
  )
}

function BreathingOrb({ color }: { color: string }) {
  return (
    <div className="relative">
      {/* Multiple pulsing orbs for breathing effect */}
      <div
        className={`absolute inset-0 ${color} rounded-full blur-xl animate-pulse`}
        style={{ animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
      />
      <div
        className={`absolute inset-0 ${color} rounded-full blur-2xl animate-pulse`}
        style={{ animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite 0.5s' }}
      />
      <div
        className={`absolute inset-0 ${color} rounded-full blur-3xl animate-pulse`}
        style={{ animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite 1s' }}
      />
    </div>
  )
}

function TerminalText({ text, visible }: { text: string; visible: boolean }) {
  const { displayText } = useDecryptedText(text, 40, visible)
  
  return (
    <span className="font-mono text-xs text-zinc-400">
      <span className="text-accent">&gt; </span>
      {displayText}
      {!displayText && <span className="animate-pulse">_</span>}
    </span>
  )
}

function ProductCard({ miner, index }: { miner: MinerSpecs; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className="relative rounded-sm border border-white/[0.05] bg-gradient-to-b from-zinc-900/30 to-black overflow-hidden group reveal-target hover:bg-white/[0.02] transition-all duration-500 hover:border-accent/30 h-full flex flex-col"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Accent Line */}
      <div className={`h-1 w-full ${miner.accent}`} />

      <div className="p-8 flex flex-col flex-1">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className={`w-2 h-2 ${miner.accent} shadow-lg ${miner.glowColor}`} />
            <div>
              <h3 className="text-2xl font-medium tracking-tight text-white">{miner.name}</h3>
              <p className="font-mono text-[10px] text-zinc-500 tracking-wider uppercase">{miner.codeName}</p>
            </div>
          </div>
          <TerminalText text={miner.description} visible={isVisible} />
        </div>

        {/* Product Visual with Glitch Effect */}
        <GlitchImage className="mb-6 rounded-sm bg-black/50 border border-white/[0.03] flex items-center justify-center relative overflow-hidden" style={{ height: '320px' }}>
          {/* Product Image */}
          <img 
            src={miner.image} 
            alt={miner.name}
            className="w-full h-full object-contain p-4"
          />
          
          {/* Breathing glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <BreathingOrb color={miner.accent.replace('bg-', 'bg-')} />

          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
        </GlitchImage>

        {/* Specs */}
        <div className="space-y-3 mb-6">
          <div className="flex justify-between items-center py-2 border-b border-white/[0.03]">
            <TerminalText text="HASHRATE" visible={isVisible} />
            <span className="text-sm font-mono text-zinc-300">{miner.hashrate}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-white/[0.03]">
            <TerminalText text="POWER" visible={isVisible} />
            <span className="text-sm font-mono text-zinc-300">{miner.power}</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <TerminalText text="PRICE" visible={isVisible} />
            <span className="text-lg font-mono text-accent font-medium">{miner.price}</span>
          </div>
        </div>

        {/* Features - Fixed height with flex */}
        <div className="space-y-2 mb-6 flex-1">
          {miner.features.map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <Icon icon="solar:check-circle-linear" className="text-accent text-sm flex-shrink-0" />
              <span className="text-xs text-zinc-400">{feature}</span>
            </div>
          ))}
        </div>

        {/* Target User - Always at bottom before CTA */}
        <div className="p-3 border border-white/[0.05] rounded-sm bg-white/[0.02]">
          <TerminalText text={`TARGET: ${miner.tier}`} visible={isVisible} />
        </div>

        {/* CTA - Push to bottom */}
        <button className="w-full py-3 mt-6 border border-white/10 text-white font-mono text-xs uppercase tracking-[0.15em] transition-all duration-300 hover:border-accent hover:bg-accent/10">
          Access Schematics
        </button>
      </div>
    </div>
  )
}

export default function ProductLineup() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const targets = sectionRef.current?.querySelectorAll('.reveal-target')
    targets?.forEach((target) => observer.observe(target))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="hardware" className="relative py-24 px-6 z-10">
      {/* Aggressive ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[40vw] h-[40vw] bg-accent/[0.02] rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 flex items-end justify-between border-b border-accent/10 pb-6 reveal-target relative">
          <div>
            <p className="font-mono text-[10px] text-accent uppercase tracking-[0.3em] mb-2">01 // STABILIZED ANOMALIES</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-4 drop-shadow-[0_0_20px_rgba(157,0,255,0.3)]">STABILIZED ANOMALY SERIES</h2>
            <p className="font-mono text-[10px] text-accent/80 uppercase tracking-[0.2em] mb-4">ABYSSAL EXTRACTION UNITS</p>
            <p className="text-sm text-zinc-300 max-w-2xl font-mono leading-relaxed">
              {"A tiered lineup of high-fidelity extraction units synthesized from Grotto minerals. Engineered to maintain structural integrity and resonance stability across varying depths—from personal resonance shards to high-density industrial singularities."}
            </p>
          </div>
          <Icon icon="solar:cpu-linear" className="text-3xl text-accent hidden md:block drop-shadow-[0_0_10px_rgba(157,0,255,0.5)]" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {miners.map((miner, index) => (
            <ProductCard key={miner.model} miner={miner} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
