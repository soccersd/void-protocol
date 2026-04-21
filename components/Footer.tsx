'use client'

import { Icon } from '@iconify/react'

export default function Footer() {
  return (
    <footer className="border-t border-accent/10 bg-void py-12 relative z-10">
      {/* Aggressive ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Footer Header */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-black text-white mb-2 font-sans drop-shadow-[0_0_20px_rgba(157,0,255,0.3)]">
            FOOTER ARCHITECTURE: [TERMINAL EXIT]
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Icon icon="solar:hexagonal-prims-linear" className="text-2xl text-accent drop-shadow-[0_0_10px_rgba(157,0,255,0.5)]" />
              <span className="text-sm font-black tracking-widest uppercase text-zinc-100">
                VOID-PROTOCOL
              </span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed max-w-md mb-4 font-mono">
              VOID-PROTOCOL: The Anomalies Series. Synthesized through abyssal resonance protocols from raw Grotto minerals. As an official extraction partner for the Club HashCash ecosystem, we deliver stabilized, high-fidelity mining solutions engineered for extreme operational depths.
            </p>
          </div>

          {/* Products - Hardware Matrix */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-accent mb-4 font-bold">Products</h4>
            <ul className="space-y-2">
              {[
                { label: 'R-01 // Fragment', href: '#hardware' },
                { label: 'R-05 // Fissure', href: '#hardware' },
                { label: 'R-X // Anomaly', href: '#hardware' },
                { label: 'Hardware Matrix', href: '#protocols' }
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-xs text-zinc-400 hover:text-accent hover:tracking-wider transition-all font-mono">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-accent mb-4 font-bold">Resources</h4>
            <ul className="space-y-2">
              {[
                { label: 'Field Documentation', href: '#protocols' },
                { label: 'Abyssal Specs', href: '#protocols' },
                { label: 'Uplink Setup', href: '#protocols' },
                { label: 'Nexus Support', href: '#protocols' }
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-xs text-zinc-400 hover:text-accent hover:tracking-wider transition-all font-mono">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-accent/10 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] text-zinc-600 uppercase tracking-[0.2em]">
          <div className="flex items-center gap-2">
            <Icon icon="solar:shield-check-linear" className="text-sm text-accent" />
            © 2026 VOID-PROTOCOL. All Rights Reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Telegram</a>
            <a href="#" className="hover:text-accent transition-colors">Discord</a>
            <a href="https://x.com/voidprotocolxs" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">X</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
