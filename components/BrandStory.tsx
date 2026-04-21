'use client'

import { useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'

export default function BrandStory() {
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
    <section ref={sectionRef} id="about" className="relative py-24 px-6 z-10">
      {/* Aggressive ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/3 w-[50vw] h-[50vw] bg-accent/[0.02] rounded-full blur-[100px] pointer-events-none" />

      {/* Background with tech-line overlay */}
      <div className="absolute inset-0 bg-surface pointer-events-none">
        {/* Faint tech-lines */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49.5%,rgba(157,0,255,0.03)_50%,transparent_50.5%)] bg-[length:100px_100%]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_49.5%,rgba(157,0,255,0.03)_50%,transparent_50.5%)] bg-[length:100%_100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Dossier Layout */}
          <div className="reveal-target">
            {/* Dossier Header */}
            <div className="mb-8">
              {/* Classification badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent/30 bg-accent/5 mb-4">
                <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest">Classified Dossier</span>
              </div>

              {/* Section label */}
              <p className="font-mono text-[10px] text-accent uppercase tracking-[0.3em] mb-2">03 // CORE ARCHITECTURE</p>

              {/* Main headline - Inter Bold */}
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-3 font-sans drop-shadow-[0_0_20px_rgba(157,0,255,0.3)]">
                FORGING ORDER FROM ABYSSAL CHAOS
              </h2>

              {/* Secret ID signature */}
              <div className="flex items-center gap-2 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent" />
                <span className="text-[10px] font-mono text-zinc-600 tracking-wider">ID: [VOID_GENESIS_01.78]</span>
                <div className="h-px flex-1 bg-gradient-to-l from-accent/50 to-transparent" />
              </div>
            </div>

            {/* Content - JetBrains Mono for technical log feel */}
            <div className="space-y-4 text-sm text-zinc-400 leading-relaxed font-mono border-l-2 border-accent/20 pl-6">
              <p className="relative">
                <span className="absolute -left-[31px] text-accent/40 text-xs">{">"}</span>
                VOID-PROTOCOL emerged from the crushing pressures of Sector_07. We didn't just build a brand; 
                we stabilized the volatile energy of the Grotto. While others see cryptocurrency mining as a 
                financial tool, we see it as a Resonance Protocol—the ultimate synthesis of raw mineral power 
                and high-fidelity engineering.
              </p>
              <p className="relative">
                <span className="absolute -left-[31px] text-accent/40 text-xs">{">"}</span>
                Our mission is simple: To empower those who dare to operate at the edge of the void. Every unit 
                in the Anomalies Series is synthesized with obsidian-grade shielding and pressure-tested against 
                the harshest Grotto-native anomalies, ensuring your uplink to the Club HashCash ecosystem remains 
                unbreakable.
              </p>
            </div>

            {/* Industrial Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-white/[0.05]">
              {[
                { value: '03', sublabel: '//', label: 'STABILIZED TIERS', desc: 'แบ่งเกณฑ์ความผิดปกติที่ควบคุมได้' },
                { value: '∞', sublabel: '//', label: 'UPLINK SYNC', desc: 'การเชื่อมต่อที่ไม่มีวันดับ' },
                { value: '365D', sublabel: '//', label: 'INTEGRITY GUARD', desc: 'การป้องกันความสมบูรณ์ของตัวเครื่อง' }
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-2xl font-medium text-white">{stat.value}</span>
                    <span className="text-xs font-mono text-accent/60">{stat.sublabel}</span>
                  </div>
                  <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">{stat.label}</div>
                  <div className="text-[10px] font-mono text-zinc-600">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="reveal-target" style={{ transitionDelay: '200ms' }}>
            <div className="relative aspect-square rounded-sm border border-white/[0.05] bg-gradient-to-br from-zinc-900/30 to-black overflow-hidden">
              {/* Grid Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
              
              {/* Center Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="w-32 h-32 rounded-full border-2 border-accent/30 flex items-center justify-center mb-6 animate-pulse-slow">
                  <Icon icon="solar:hexagonal-prims-linear" className="text-6xl text-accent" />
                </div>
                
                <h3 className="text-2xl font-medium text-white text-center mb-2">VOID_PROTOCOL</h3>
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-[0.2em] text-center mb-8">
                  Abyssal Synthesis // Sector_07
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap justify-center gap-2">
                  {['Resonance', 'Stability', 'Integrity', 'Synthesis'].map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 border border-white/[0.1] rounded-sm text-[10px] font-mono text-zinc-400 uppercase tracking-wider"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-accent/50" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent/50" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-accent/50" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-accent/50" />
            </div>
          </div>
        </div>

        {/* System Protocols */}
        <div className="mt-24 reveal-target">
          <div className="text-center mb-16">
            <p className="font-mono text-[10px] text-accent uppercase tracking-[0.3em] mb-2">03 // CORE ARCHITECTURE</p>
            <h3 className="text-2xl font-black text-white mb-2 font-sans drop-shadow-[0_0_20px_rgba(157,0,255,0.3)]">SYSTEM PROTOCOLS</h3>
            <p className="text-xs font-mono text-accent uppercase tracking-[0.3em]">[OPERATIONAL PARAMETERS]</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                icon: 'solar:shield-up-linear',
                title: 'INTEGRITY_GUARD',
                subtitle: 'OBSIDIAN-CLASS',
                memoryAddr: '0xVOID_01',
                content: (
                  <>
                    Every chassis is reinforced with a high-density <span className="text-accent font-medium">obsidian-carbon lattice</span>. Our hardware undergoes destructive pressure-testing against Grotto-native atmospheric anomalies, ensuring <span className="text-accent font-medium">zero structural deformation</span> under extreme depth-stress. If it doesn't survive the simulation, it doesn't leave the lab.
                  </>
                )
              },
              {
                number: '02',
                icon: 'solar:globus-linear',
                title: 'NEURAL_SYNC',
                subtitle: 'PERSISTENT UPLINK',
                memoryAddr: '0xVOID_02',
                content: (
                  <>
                    Unbreakable synchronization with the Club HashCash ecosystem. Utilizing <span className="text-accent font-medium">Abyssal Redundancy Logic</span>, our uplink modules guarantee absolute resonance stability. Even during localized void-glitches, your extraction stream remains consistent, eliminating <span className="text-accent font-medium">data-drift and downtime</span>.
                  </>
                )
              },
              {
                number: '03',
                icon: 'solar:graph-up-linear',
                title: 'HARMONIC_SYNTHESIS',
                subtitle: 'PEAK EXTRACTION',
                memoryAddr: '0xVOID_03',
                content: (
                  <>
                    The ultimate convergence of raw mineral harmonics and high-fidelity signal processing. Our proprietary synthesis engine converts raw Grotto resonance into pure extraction power, utilizing <span className="text-accent font-medium">intelligent frequency-tuning</span> to achieve maximum hash-efficiency at any depth.
                  </>
                )
              }
            ].map((protocol) => (
              <div
                key={protocol.number}
                className="relative p-6 rounded-sm border border-white/[0.05] bg-zinc-900/20 hover:bg-white/[0.02] transition-all duration-500 group"
              >
                {/* Memory Address Overlay */}
                <div className="absolute top-4 right-4 text-[9px] font-mono text-zinc-700 tracking-wider">
                  ADDR: {protocol.memoryAddr}
                </div>

                {/* Icon & Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon icon={protocol.icon} className="text-3xl text-accent" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-accent/60">Protocol {protocol.number}</span>
                        <span className="text-[10px] font-mono text-zinc-700">//</span>
                      </div>
                      <h4 className="text-base font-bold text-white font-mono mt-1">
                        [{protocol.title}]
                      </h4>
                      <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mt-0.5">
                        {protocol.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="h-px w-full bg-gradient-to-r from-accent/30 to-transparent" />
                </div>

                {/* Content - Inter font for readability */}
                <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                  {protocol.content}
                </p>

                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
