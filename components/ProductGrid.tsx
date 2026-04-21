'use client'

import { useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'

export default function ProductGrid() {
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
    <section ref={sectionRef} className="relative py-24 px-6 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex items-end justify-between border-b border-white/[0.05] pb-6 reveal-target">
          <div>
            <p className="font-mono text-[10px] text-accent uppercase tracking-[0.3em] mb-2">Hardware Specifications</p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white">The Arsenal</h2>
          </div>
          <Icon icon="solar:database-linear" className="text-2xl text-zinc-600" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Card 1: Fragment-01 */}
          <div className="md:col-span-7 relative rounded-sm border border-white/[0.05] bg-gradient-to-br from-zinc-900/30 to-black p-8 overflow-hidden group reveal-target hover:bg-white/[0.02] transition-colors duration-500">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.01)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] group-hover:animate-[gradient-move_3s_linear_infinite]" />

            <div className="relative z-10 flex flex-col h-full justify-between min-h-[300px]">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="w-1.5 h-1.5 bg-accent shadow-[0_0_10px_#9D00FF]" />
                    <h3 className="text-xl font-medium tracking-tight text-white">Fragment-01</h3>
                  </div>
                  <p className="font-mono text-[10px] text-zinc-500 tracking-wider uppercase">Entry-Level Excavator</p>
                </div>
                <div className="p-2 border border-white/[0.05] bg-black/50 rounded-sm text-zinc-400">
                  <Icon icon="solar:chip-linear" className="text-xl" />
                </div>
              </div>

              <div className="mt-8">
                <table className="w-full font-mono text-[11px]">
                  <tbody>
                    <tr className="border-b border-white/[0.03]">
                      <td className="py-3 text-zinc-500 tracking-wide">COMPUTE METRIC</td>
                      <td className="py-3 text-right text-zinc-300">Class C</td>
                    </tr>
                    <tr className="border-b border-white/[0.03]">
                      <td className="py-3 text-zinc-500 tracking-wide">THERMAL LOAD</td>
                      <td className="py-3 text-right text-zinc-300">Nominal</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-zinc-500 tracking-wide">ACQUISITION</td>
                      <td className="py-3 text-right text-accent font-medium tracking-wider">RESTRICTED</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Card 2: Fissure-05 */}
          <div
            className="md:col-span-5 relative rounded-sm border border-white/[0.05] bg-gradient-to-bl from-zinc-900/30 to-black p-8 overflow-hidden group reveal-target hover:bg-white/[0.02] transition-colors duration-500"
            style={{ transitionDelay: '100ms' }}
          >
            <div className="relative z-10 flex flex-col h-full justify-between min-h-[300px]">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="w-1.5 h-1.5 bg-white shadow-[0_0_10px_#FFF]" />
                    <h3 className="text-xl font-medium tracking-tight text-white">Fissure-05</h3>
                  </div>
                  <p className="font-mono text-[10px] text-zinc-500 tracking-wider uppercase">Mid-Tier Array</p>
                </div>
                <div className="p-2 border border-white/[0.05] bg-black/50 rounded-sm text-zinc-400">
                  <Icon icon="solar:server-square-update-linear" className="text-xl" />
                </div>
              </div>

              <div className="mt-8">
                <table className="w-full font-mono text-[11px]">
                  <tbody>
                    <tr className="border-b border-white/[0.03]">
                      <td className="py-3 text-zinc-500 tracking-wide">COMPUTE METRIC</td>
                      <td className="py-3 text-right text-zinc-300">Class B</td>
                    </tr>
                    <tr className="border-b border-white/[0.03]">
                      <td className="py-3 text-zinc-500 tracking-wide">THERMAL LOAD</td>
                      <td className="py-3 text-right text-zinc-300">Elevated</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-zinc-500 tracking-wide">ACQUISITION</td>
                      <td className="py-3 text-right text-accent font-medium tracking-wider">RESTRICTED</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Card 3: Anomaly-X */}
          <div
            className="md:col-span-12 relative rounded-sm border border-white/[0.08] bg-black p-8 md:p-10 overflow-hidden group reveal-target"
            style={{ transitionDelay: '200ms' }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-accent/5 blur-[80px] pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row gap-10 md:items-center justify-between">
              <div className="flex-1 max-w-lg">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-3xl font-medium tracking-tighter text-white">Anomaly-X</h3>
                  <span className="px-2 py-1 bg-white/[0.03] border border-white/[0.1] text-zinc-300 font-mono text-[9px] tracking-[0.2em] uppercase rounded-sm">
                    Classified
                  </span>
                </div>
                <p className="text-sm font-light text-zinc-400 leading-relaxed">
                  Industrial-grade obsidian extraction architecture. Operates outside standard parametric boundaries. Schematics currently locked pending clearance.
                </p>

                <button className="mt-8 flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest hover:text-white transition-colors">
                  <Icon icon="solar:lock-password-linear" />
                  Request Access
                </button>
              </div>

              <div className="flex-1 w-full md:max-w-md border border-white/[0.03] bg-white/[0.01] p-6 rounded-sm">
                <table className="w-full font-mono text-[11px]">
                  <tbody>
                    <tr className="border-b border-white/[0.03]">
                      <td className="py-2.5 text-zinc-500 tracking-wide">CORE ARCHITECTURE</td>
                      <td className="py-2.5 text-right text-zinc-300">Obsidian-V2</td>
                    </tr>
                    <tr className="border-b border-white/[0.03]">
                      <td className="py-2.5 text-zinc-500 tracking-wide">YIELD POTENTIAL</td>
                      <td className="py-2.5 text-right text-zinc-300">Undisclosed</td>
                    </tr>
                    <tr className="border-b border-white/[0.03]">
                      <td className="py-2.5 text-zinc-500 tracking-wide">POWER DRAW</td>
                      <td className="py-2.5 text-right text-zinc-300">Anomalous</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 text-zinc-500 tracking-wide">ACQUISITION</td>
                      <td className="py-2.5 text-right text-zinc-600 line-through decoration-accent">UNAVAILABLE</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
