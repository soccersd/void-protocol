'use client'

import { useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'

export default function TechSpecs() {
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
    <section ref={sectionRef} id="protocols" className="relative py-24 px-6 z-10 bg-black/30">
      {/* Aggressive ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[50vw] h-[50vw] bg-accent/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center reveal-target">
          <p className="font-mono text-[10px] text-accent uppercase tracking-[0.3em] mb-2">02 // VOID PHYSICS</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-4 drop-shadow-[0_0_20px_rgba(157,0,255,0.3)]">RESONANCE FIDELITY & STRUCTURAL INTEGRITY</h2>
          <p className="text-sm text-zinc-300 max-w-2xl mx-auto">
            Validated through high-pressure simulations in Sector_07. All metrics are stabilized for peak extraction throughput within the Club HashCash ecosystem.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="rounded-sm border border-accent/20 bg-zinc-900/30 overflow-hidden reveal-target shadow-[0_0_30px_rgba(157,0,255,0.2)]">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-accent/20 bg-accent/5">
                  <th className="p-6 text-left font-mono text-[10px] text-accent uppercase tracking-[0.15em] font-black">METRIC // PROTOCOL</th>
                  <th className="p-6 text-center font-mono text-[10px] text-accent uppercase tracking-[0.15em] font-black">FRAGMENT-01</th>
                  <th className="p-6 text-center font-mono text-[10px] text-accent uppercase tracking-[0.15em] font-black">FISSURE-05</th>
                  <th className="p-6 text-center font-mono text-[10px] text-accent uppercase tracking-[0.15em] font-black">ANOMALY-X</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-accent/10">
                {[
                  { metric: 'RESONANCE FREQUENCY (HASH)', f01: '[TBD]', f05: '[TBD]', ax: '[TBD]' },
                  { metric: 'ABYSSAL VOLTAGE (POWER)', f01: '[TBD]', f05: '[TBD]', ax: '[TBD]' },
                  { metric: 'OBSIDIAN HEAT EXCHANGE', f01: 'SINGLE-CORE', f05: 'DUAL-FISSURE', ax: 'LIQUID-VOID' },
                  { metric: 'TURBINE VELOCITY (RPM)', f01: 'STABILIZED', f05: 'OVERCLOCKED', ax: 'ADAPTIVE' },
                  { metric: 'SONAR NOISE SIGNATURE', f01: '< 35 dB', f05: '< 50 dB', ax: '[SILENT]' },
                  { metric: 'THERMAL BLEED THRESHOLD', f01: 'NOMINAL', f05: 'ELEVATED', ax: 'EXTREME', highlight: true }
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-accent/5 transition-colors">
                    <td className="p-4 font-mono text-xs text-white uppercase tracking-wider font-bold">{row.metric}</td>
                    <td className="p-4 text-center font-mono text-sm text-zinc-300">{row.f01}</td>
                    <td className="p-4 text-center font-mono text-sm text-zinc-300">{row.f05}</td>
                    <td className={`p-4 text-center font-mono text-sm ${row.highlight ? 'text-accent' : 'text-zinc-300'}`}>{row.ax}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Compliance Matrix */}
        <div className="mt-16 reveal-target">
          <div className="text-center mb-12">
            <h3 className="text-xl font-black text-white mb-2 font-sans drop-shadow-[0_0_20px_rgba(157,0,255,0.3)]">COMPLIANCE MATRIX: [AUTHORIZED CLEARANCE]</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                code: 'CE',
                fullCode: 'CE // CORE-EVALUATED',
                status: 'CERTIFIED_ZONE_STABLE',
                icon: 'solar:shield-check-linear',
                decree: 'Rigorously tested for high-fidelity energy transfer safety between the "Surface Terraces" and "Grotto Depths." Fully compliant with Dimensional Safety Regulation 07.'
              },
              {
                code: 'FCC',
                fullCode: 'FCC // FREQUENCY-CHAOS CONTROLLED',
                status: 'ZERO_INTERFERENCE_VALIDATED',
                icon: 'solar:radio-linear',
                decree: 'Implements advanced signal-shielding protocols to ensure the Uplink does not oscillate with the volatile void frequencies of the Abyss. Zero-noise interference guaranteed.'
              },
              {
                code: 'RoHS',
                fullCode: 'RoHS // RESIDUE-FREE OBSIDIAN SYNTHESIS',
                status: 'NON_TOXIC_STABILIZED',
                icon: 'solar:recycle-linear',
                decree: 'Synthesized using premium residue-free Obsidian lattices. Guaranteed free from toxic off-gassing and material degradation, ensuring long-term structural integrity under corrosive atmospheric conditions.'
              },
              {
                code: 'ISO',
                fullCode: 'ISO-VOID: 9001 // STABILITY DIRECTIVE',
                status: 'PRECISION_GOVERNANCE',
                icon: 'solar:award-linear',
                decree: 'Manufactured under the Supreme Stability Directive. Every hardware cycle is audited for absolute precision, structural order, and tactical reliability within the VOID-PROTOCOL ecosystem.'
              }
            ].map((compliance) => (
              <div
                key={compliance.code}
                className="relative p-6 rounded-sm border border-accent/20 bg-surface/50 backdrop-blur-xl group hover:bg-accent/5 transition-all duration-500 shadow-[0_0_20px_rgba(157,0,255,0.1)] hover:shadow-[0_0_30px_rgba(157,0,255,0.2)]"
              >
                {/* Background Code (Large, Transparent) */}
                <div className="absolute top-4 right-4 text-7xl font-black text-white/[0.03] font-sans select-none">
                  {compliance.code}
                </div>

                {/* Icon & Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0">
                    <Icon icon={compliance.icon} className="text-3xl text-accent drop-shadow-[0_0_10px_rgba(157,0,255,0.5)]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-black text-white font-mono tracking-wide mb-2">
                      [{compliance.fullCode}]
                    </h4>
                    <div className="font-mono text-[10px] text-accent uppercase tracking-[0.2em]">
                      STATUS: <span className="text-white font-bold">{compliance.status}</span>
                    </div>
                  </div>
                </div>

                {/* Decree - Inter for readability */}
                <div className="mt-4 pt-4 border-t border-accent/10">
                  <p className="text-[10px] font-mono text-accent uppercase tracking-[0.2em] mb-2">
                    DECREE:
                  </p>
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                    {compliance.decree}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-500" />

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-accent/20" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-accent/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
