'use client'

import { Icon } from '@iconify/react'
import { useState } from 'react'

const navLinks = [
  { label: 'Resonator', href: '#hardware' },
  { label: 'Specs', href: '#protocols' },
  { label: 'About', href: '#about' },
  { label: 'Docs', href: '#docs' }
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-40 bg-void/70 backdrop-blur-xl border-b border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="text-xs font-medium tracking-widest uppercase text-zinc-100 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-zinc-400 rotate-45 inline-block"></span>
            Void
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-mono text-zinc-400 uppercase tracking-[0.15em] hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 bg-white/[0.02] border border-white/[0.05] px-3 py-1 rounded-full">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent shadow-[0_0_8px_#9D00FF]"></span>
            </span>
            <span className="text-[10px] font-mono text-zinc-400 tracking-[0.2em] uppercase">Sys.On</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-zinc-400 hover:text-white transition-colors p-1"
          >
            <Icon icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:menu-dots-linear"} className="text-xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/[0.03] bg-void/95 backdrop-blur-xl">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-mono text-zinc-400 uppercase tracking-[0.15em] hover:text-white transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
