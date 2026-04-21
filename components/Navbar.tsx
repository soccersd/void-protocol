'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

interface NavLink {
  number: string
  label: string
  href: string
  code: string
}

const navLinks: NavLink[] = [
  { number: '01', label: 'STABILIZED ANOMALIES', href: '#hardware', code: 'PRODUCTS' },
  { number: '02', label: 'VOID PHYSICS', href: '#protocols', code: 'TECHNOLOGY' },
  { number: '03', label: 'EVENT HORIZON', href: '#horizon', code: 'LIVE_DATA' },
  { number: '04', label: 'CORE ARCHITECTURE', href: '#about', code: 'ABOUT' }
]

// Glitch text effect component
function GlitchText({ text, className }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState(text)
  const [isHovered, setIsHovered] = useState(false)
  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`'

  const scramble = () => {
    let iterations = 0
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (index < iterations) return text[index]
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')
      )
      iterations += 1 / 2
      if (iterations >= text.length) {
        clearInterval(interval)
        setDisplayText(text)
      }
    }, 30)
  }

  return (
    <span
      className={className}
      onMouseEnter={() => {
        setIsHovered(true)
        scramble()
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {displayText}
    </span>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-black/90 backdrop-blur-[20px]' : 'bg-black/80 backdrop-blur-[15px]'
        }`}
      >
        {/* Scanline overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="w-full h-[2px] bg-gradient-to-r from-transparent via-accent/20 to-transparent"
            animate={{ y: ['0%', '1000%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Bottom border with gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Brand Section (Left) */}
            <div className="flex items-center gap-4">
              {/* VOID-PROTOCOL Logo */}
              <motion.div
                className="relative w-10 h-10"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src="/logos/void-protocol-logo.jpg"
                  alt="VOID-PROTOCOL Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              <div>
                <h1 className="text-white font-bold tracking-[0.3em] text-sm">
                  VOID_PROTOCOL
                </h1>
                <p className="text-[8px] font-mono text-zinc-600 tracking-widest uppercase">
                  Abyssal Synthesis // Sector_07
                </p>
              </div>
            </div>

            {/* Navigation Links (Center) - Desktop */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <a
                  key={link.code}
                  href={link.href}
                  className="group relative py-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-accent/60">
                      {link.number}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-600">
                      //
                    </span>
                    <GlitchText
                      text={link.label}
                      className="text-xs font-mono text-zinc-400 group-hover:text-white transition-colors duration-300 tracking-wider"
                    />
                  </div>
                  
                  {/* Underline with glow effect */}
                  <div className="absolute bottom-0 left-1/2 w-0 h-px bg-accent shadow-[0_0_10px_rgba(157,0,255,0.8)] group-hover:w-full group-hover:left-0 transition-all duration-500" />
                </a>
              ))}
            </div>

            {/* System Info (Right) - Desktop */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Connection status */}
              <div className="flex items-center gap-3 text-[10px] font-mono">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-green-500">Connection_Secure</span>
                </div>
                <span className="text-zinc-700">|</span>
                <span className="text-zinc-500">Link: Stable</span>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
              >
                <Icon
                  icon={isOpen ? 'solar:close-circle-linear' : 'solar:menu-dots-linear'}
                  className="text-2xl"
                />
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            >
              <Icon
                icon={isOpen ? 'solar:close-circle-linear' : 'solar:menu-dots-linear'}
                className="text-2xl"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            {/* Backdrop with glitch effect */}
            <motion.div
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Glitch overlay */}
            <motion.div
              className="absolute inset-0"
              animate={{
                opacity: [0, 0.1, 0, 0.1, 0],
                background: [
                  'linear-gradient(45deg, transparent 48%, rgba(157,0,255,0.1) 50%, transparent 52%)',
                  'linear-gradient(45deg, transparent 48%, rgba(157,0,255,0.1) 50%, transparent 52%)'
                ]
              }}
              transition={{ duration: 0.5, repeat: 3 }}
            />

            {/* Menu content */}
            <motion.div
              className="relative z-10 h-full flex flex-col items-center justify-center p-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Mobile brand */}
              <div className="mb-12 text-center">
                <motion.div
                  className="w-12 h-12 mx-auto mb-4 bg-accent rounded-sm"
                  style={{ rotate: '45deg' }}
                  animate={{
                    opacity: [0.6, 1, 0.6],
                    boxShadow: [
                      '0 0 10px rgba(157, 0, 255, 0.3)',
                      '0 0 30px rgba(157, 0, 255, 0.8)',
                      '0 0 10px rgba(157, 0, 255, 0.3)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <h2 className="text-2xl font-bold text-white tracking-[0.3em]">
                  VOID_PROTOCOL
                </h2>
                <p className="text-[8px] font-mono text-zinc-600 tracking-widest uppercase mt-1">
                  Abyssal Synthesis // Sector_07
                </p>
              </div>

              {/* Mobile navigation links */}
              <nav className="space-y-6 mb-12">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.code}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-center group"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-center gap-3 mb-1">
                      <span className="text-xs font-mono text-accent">{link.number}</span>
                      <span className="text-xs font-mono text-zinc-700">//</span>
                      <GlitchText
                        text={link.label}
                        className="text-lg font-mono text-zinc-300 group-hover:text-white transition-colors tracking-wider"
                      />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                      {link.code}
                    </span>
                  </motion.a>
                ))}
              </nav>

              {/* Mobile CTA */}
              <motion.button
                className="relative px-8 py-3 border border-white/20 overflow-hidden group"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  className="absolute inset-0 bg-accent/10"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
                <span className="relative z-10 text-sm font-mono text-white tracking-[0.2em] group-hover:text-accent transition-colors">
                  IDENTIFY_USER
                </span>
              </motion.button>

              {/* Mobile status */}
              <div className="mt-12 flex items-center gap-4 text-[10px] font-mono">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-green-500">Connection_Secure</span>
                </div>
                <span className="text-zinc-700">|</span>
                <span className="text-zinc-500">Link: Stable</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
