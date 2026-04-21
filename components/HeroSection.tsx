'use client'

import { useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'

export default function HeroSection() {
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

    const target = sectionRef.current?.querySelector('.reveal-target')
    if (target) observer.observe(target)

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 sm:px-6 overflow-hidden">
      {/* Aggressive ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-accent/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[40vw] h-[40vw] bg-accent/[0.03] rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto flex flex-col items-center z-10 reveal-target mt-8">
        {/* Elite Command Badge */}
        <div className="mb-4 sm:mb-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-accent/40 bg-accent/10 backdrop-blur-sm">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <p className="font-mono text-[8px] sm:text-[10px] text-accent tracking-[0.3em] sm:tracking-[0.4em] uppercase font-bold">THE ELITE COMMAND</p>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          </div>
        </div>

        {/* Deployment Status */}
        <div className="flex items-center gap-1 sm:gap-2 mb-4 sm:mb-6">
          <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-accent/50" />
          <p className="font-mono text-[9px] sm:text-[11px] text-accent/80 tracking-[0.2em] sm:tracking-[0.3em] uppercase">VOID-PROTOCOL: DEPLOYMENT INITIALIZED</p>
          <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-accent/50" />
        </div>

        {/* Main Title - Ultra Aggressive */}
        <h1
          className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] leading-none font-black tracking-tighter mb-3 sm:mb-4 text-center uppercase glitch-text text-white drop-shadow-[0_0_40px_rgba(157,0,255,0.3)]"
          data-text="THE RESONATOR SERIES"
        >
          <span className="block">THE</span>
          <span className="block text-accent">RESONATOR</span>
          <span className="block text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-zinc-400">SERIES</span>
        </h1>

        {/* Tactical Divider */}
        <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          <Icon icon="solar:hexagonal-prims-linear" className="text-xl sm:text-2xl text-accent" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        </div>

        {/* Subtitle - Weapon Description */}
        <p className="text-center text-xs sm:text-sm md:text-base text-zinc-300 max-w-3xl mb-8 sm:mb-12 leading-relaxed font-mono px-2">
          Deep-layer extraction architecture synthesized for the Grotto's crushing reality. 
          Engineered for <span className="text-accent font-bold">absolute resonance stability</span> within the Club HashCash ecosystem.
        </p>

        {/* Hero Image - Weapon Display */}
        <div className="w-full max-w-6xl aspect-[16/9] sm:aspect-[21/9] relative rounded-sm border border-accent/20 bg-gradient-to-b from-zinc-900/60 to-black backdrop-blur-md overflow-hidden mb-8 sm:mb-16 group shadow-[0_20px_60px_rgba(157,0,255,0.2)]">
          {/* Product Image */}
          <img 
            src="/images/alll.jpeg"
            alt="VOID-PROTOCOL Resonator Series"
            className="w-full h-full object-cover"
          />
          
          {/* Aggressive overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-accent/5" />

          {/* Tactical Overlay Specs */}
          <div className="absolute top-2 sm:top-4 left-3 sm:left-6 flex flex-col font-mono text-[8px] sm:text-[10px] text-zinc-400 z-30 uppercase tracking-widest space-y-0.5 sm:space-y-1">
            <span className="text-accent">&gt; CLASS: ELITE COMMAND</span>
            <span>&gt; MODEL: RESONATOR R-01</span>
            <span>&gt; STATUS: <span className="text-accent font-bold">DEPLOYMENT READY</span></span>
          </div>
          
          <div className="absolute top-2 sm:top-4 right-3 sm:right-6 flex flex-col items-end font-mono text-[8px] sm:text-[10px] text-zinc-500 z-30 uppercase tracking-widest space-y-0.5 sm:space-y-1">
            <span>SECTOR: 07</span>
            <span>DEPTH: ABYSSAL</span>
          </div>

          {/* Bottom tactical info */}
          <div className="absolute bottom-2 sm:bottom-4 left-3 sm:left-6 right-3 sm:right-6 flex justify-between items-end">
            <div className="font-mono text-[7px] sm:text-[9px] text-zinc-600 tracking-wider">
              SYS.ID: VOID_PROTOCOL.RESONATOR.01
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              <span className="font-mono text-[7px] sm:text-[9px] text-accent tracking-wider">OPERATIONAL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
