'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

interface LogEntry {
  id: number
  timestamp: string
  message: string
  type: 'info' | 'success' | 'warning'
}

interface NodeData {
  id: string
  x: number
  y: number
  status: 'online' | 'syncing' | 'offline'
  hashRate: number
}

export default function EventHorizon() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [currentBlock, setCurrentBlock] = useState(778200)
  const [networkHashrate, setNetworkHashrate] = useState(125.4)
  const [activeNodes, setActiveNodes] = useState(47)
  const [logs, setLogs] = useState<LogEntry[]>([])
  const [glitchActive, setGlitchActive] = useState(false)
  const [radarRotation, setRadarRotation] = useState(0)
  const [nodes, setNodes] = useState<NodeData[]>([
    { id: 'Node_01', x: 30, y: 25, status: 'online', hashRate: 45.2 },
    { id: 'Node_02', x: 60, y: 40, status: 'online', hashRate: 38.7 },
    { id: 'Node_03', x: 45, y: 70, status: 'syncing', hashRate: 52.1 },
    { id: 'Node_04', x: 75, y: 20, status: 'online', hashRate: 41.3 },
    { id: 'Node_05', x: 20, y: 55, status: 'online', hashRate: 39.8 },
    { id: 'Node_06', x: 55, y: 60, status: 'syncing', hashRate: 44.5 },
    { id: 'Node_07', x: 85, y: 65, status: 'online', hashRate: 47.9 },
  ])

  // Waveform data
  const [waveData, setWaveData] = useState<number[]>([])
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Simulate real-time data updates
  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      // Micro-fluctuations for hashrate
      setNetworkHashrate(prev => {
        const change = (Math.random() - 0.5) * 2
        return Math.max(120, Math.min(130, prev + change))
      })

      // Block height increases
      if (Math.random() > 0.7) {
        setCurrentBlock(prev => prev + 1)
      }

      // Active nodes fluctuation
      setActiveNodes(prev => {
        const change = Math.floor((Math.random() - 0.5) * 3)
        return Math.max(45, Math.min(50, prev + change))
      })

      // Update node hash rates
      setNodes(prev => prev.map(node => ({
        ...node,
        hashRate: Math.max(35, Math.min(55, node.hashRate + (Math.random() - 0.5) * 3))
      })))

      // Add new log entry
      const logMessages = [
        { message: 'Syncing Node_01... Done', type: 'success' as const },
        { message: 'Block #778201 validated', type: 'info' as const },
        { message: 'Resonance spike detected in Sector_07', type: 'warning' as const },
        { message: 'Uplink stabilized at 125.4 TH/s', type: 'success' as const },
        { message: 'Node_03 sync progress: 87%', type: 'info' as const },
        { message: 'Abyssal frequency calibrated', type: 'success' as const },
        { message: 'HashCache payout processed', type: 'info' as const },
      ]
      
      const randomLog = logMessages[Math.floor(Math.random() * logMessages.length)]
      const now = new Date()
      const timestamp = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`
      
      setLogs(prev => [
        { id: Date.now(), timestamp, message: randomLog.message, type: randomLog.type },
        ...prev.slice(0, 7)
      ])
    }, 2000)

    return () => clearInterval(interval)
  }, [isVisible])

  // Radar rotation
  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setRadarRotation(prev => (prev + 2) % 360)
    }, 50)

    return () => clearInterval(interval)
  }, [isVisible])

  // Generate waveform data
  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setWaveData(prev => {
        const newData = [...prev.slice(-100), Math.sin(Date.now() / 1000) * 50 + (Math.random() - 0.5) * 20]
        return newData
      })
    }, 100)

    return () => clearInterval(interval)
  }, [isVisible])

  // Random glitch effect
  useEffect(() => {
    if (!isVisible) return

    const glitchInterval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 200)
    }, 10000 + Math.random() * 5000)

    return () => clearInterval(glitchInterval)
  }, [isVisible])

  // Draw waveform on canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || waveData.length < 2) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.strokeStyle = 'rgba(157, 0, 255, 0.8)'
    ctx.lineWidth = 2
    ctx.beginPath()

    waveData.forEach((value, index) => {
      const x = (index / 100) * canvas.width
      const y = canvas.height / 2 + value
      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.stroke()
  }, [waveData])

  return (
    <section ref={sectionRef} id="horizon" className="relative py-24 px-6 z-10 bg-black/50">
      {/* Aggressive ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[50vw] h-[50vw] bg-accent/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center reveal-target">
          <p className="font-mono text-[10px] text-accent uppercase tracking-[0.3em] mb-2">03 // LIVE TELEMETRY</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-4 drop-shadow-[0_0_20px_rgba(157,0,255,0.3)]">
            EVENT HORIZON
          </h2>
          <p className="text-sm text-zinc-300 max-w-2xl mx-auto">
            Real-time monitoring of abyssal resonance frequencies and extraction network status across Sector_07.
          </p>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Network Resonance (Waveform) */}
          <div className="lg:col-span-2 p-6 rounded-sm border border-accent/20 bg-surface/50 backdrop-blur-xl shadow-[0_0_30px_rgba(157,0,255,0.2)]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-mono text-accent uppercase tracking-[0.2em] font-bold">
                NETWORK RESONANCE
              </h3>
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 bg-accent rounded-full"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-[10px] font-mono text-accent">LIVE</span>
              </div>
            </div>
            
            <div className="relative h-48 bg-black/50 rounded-sm overflow-hidden border border-accent/10">
              <AnimatePresence>
                {glitchActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.3, 0] }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-accent/10 z-10"
                    style={{
                      clipPath: `inset(${Math.random() * 100}% 0 ${Math.random() * 100}% 0)`
                    }}
                  />
                )}
              </AnimatePresence>
              <canvas
                ref={canvasRef}
                width={800}
                height={200}
                className="w-full h-full"
              />
              
              {/* Grid lines */}
              <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_49.5%,rgba(157,0,255,0.05)_50%,transparent_50.5%)] bg-[length:100%_20px] pointer-events-none" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49.5%,rgba(157,0,255,0.05)_50%,transparent_50.5%)] bg-[length:20px_100%] pointer-events-none" />
            </div>

            <div className="mt-4 flex items-center justify-between font-mono text-[10px]">
              <span className="text-zinc-500">FREQUENCY: 125.4 TH/s</span>
              <span className="text-zinc-500">AMPLITUDE: NORMAL</span>
              <span className="text-zinc-500">PHASE: STABLE</span>
            </div>
          </div>

          {/* Extraction Depth & Uplinks */}
          <div className="space-y-6">
            {/* Extraction Depth */}
            <div className="p-6 rounded-sm border border-accent/20 bg-surface/50 backdrop-blur-xl shadow-[0_0_20px_rgba(157,0,255,0.1)]">
              <h3 className="text-xs font-mono text-accent uppercase tracking-[0.2em] font-bold mb-4">
                EXTRACTION DEPTH
              </h3>
              <div className="text-4xl font-black text-white mb-2 font-mono drop-shadow-[0_0_10px_rgba(157,0,255,0.5)]">
                #{currentBlock.toLocaleString()}
              </div>
              <p className="text-[10px] font-mono text-zinc-500 uppercase">
                Latest Block Height // HashCash Network
              </p>
              <motion.div
                className="mt-4 h-1 bg-accent/20 rounded-full overflow-hidden"
              >
                <motion.div
                  className="h-full bg-accent"
                  animate={{ width: ['0%', '100%'] }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
              </motion.div>
            </div>

            {/* Grotto Uplinks */}
            <div className="p-6 rounded-sm border border-accent/20 bg-surface/50 backdrop-blur-xl shadow-[0_0_20px_rgba(157,0,255,0.1)]">
              <h3 className="text-xs font-mono text-accent uppercase tracking-[0.2em] font-bold mb-4">
                GROTTO UPLINKS
              </h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-black text-white font-mono drop-shadow-[0_0_10px_rgba(157,0,255,0.5)]">
                  {activeNodes}
                </span>
                <span className="text-xs font-mono text-zinc-500">/ 50 Nodes</span>
              </div>
              <p className="text-[10px] font-mono text-zinc-500 uppercase">
                Active Nodes // Sector_07
              </p>
              <div className="mt-4 grid grid-cols-5 gap-2">
                {Array.from({ length: 10 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="h-1 rounded-full"
                    animate={{
                      backgroundColor: i < Math.floor(activeNodes / 5) ? 'rgba(157, 0, 255, 0.8)' : 'rgba(157, 0, 255, 0.2)'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Abyssal Radar & System Logs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Abyssal Radar */}
          <div className="p-6 rounded-sm border border-accent/20 bg-surface/50 backdrop-blur-xl shadow-[0_0_20px_rgba(157,0,255,0.1)]">
            <h3 className="text-xs font-mono text-accent uppercase tracking-[0.2em] font-bold mb-4">
              ABYSSAL RADAR // SECTOR_07
            </h3>
            <div className="relative h-80 bg-black/50 rounded-sm overflow-hidden border border-accent/10">
              {/* Radar circles */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(157,0,255,0.1)" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(157,0,255,0.15)" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="25" fill="none" stroke="rgba(157,0,255,0.2)" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="15" fill="none" stroke="rgba(157,0,255,0.25)" strokeWidth="0.5" />
                
                {/* Cross lines */}
                <line x1="5" y1="50" x2="95" y2="50" stroke="rgba(157,0,255,0.1)" strokeWidth="0.5" />
                <line x1="50" y1="5" x2="50" y2="95" stroke="rgba(157,0,255,0.1)" strokeWidth="0.5" />
                
                {/* Radar sweep */}
                <line
                  x1="50"
                  y1="50"
                  x2="50"
                  y2="5"
                  stroke="rgba(157,0,255,0.8)"
                  strokeWidth="0.5"
                  transform={`rotate(${radarRotation} 50 50)`}
                />
                
                {/* Node blips */}
                {nodes.map((node) => (
                  <g key={node.id}>
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="1.5"
                      fill={node.status === 'online' ? 'rgba(157, 0, 255, 0.9)' : 'rgba(157, 0, 255, 0.4)'}
                    >
                      <animate
                        attributeName="opacity"
                        values="1;0.3;1"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="3"
                      fill="none"
                      stroke="rgba(157, 0, 255, 0.5)"
                      strokeWidth="0.3"
                    >
                      <animate
                        attributeName="r"
                        values="1.5;4;1.5"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.8;0;0.8"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                ))}
              </svg>

              {/* Grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_49.5%,rgba(157,0,255,0.03)_50%,transparent_50.5%)] bg-[length:10px_10px] pointer-events-none" />
            </div>

            {/* Node list */}
            <div className="mt-4 grid grid-cols-2 gap-2 font-mono text-[10px]">
              {nodes.slice(0, 6).map((node) => (
                <div key={node.id} className="flex items-center gap-2">
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full"
                    animate={{
                      backgroundColor: node.status === 'online' ? '#9D00FF' : '#FFA500'
                    }}
                  />
                  <span className="text-zinc-400">{node.id}</span>
                  <span className="text-zinc-600">|</span>
                  <span className="text-accent">{node.hashRate.toFixed(1)} TH/s</span>
                </div>
              ))}
            </div>
          </div>

          {/* VOID_LOG_STREAM */}
          <div className="p-6 rounded-sm border border-accent/20 bg-surface/50 backdrop-blur-xl shadow-[0_0_20px_rgba(157,0,255,0.1)]">
            <h3 className="text-xs font-mono text-accent uppercase tracking-[0.2em] font-bold mb-4">
              VOID_LOG_STREAM
            </h3>
            <div className="h-80 bg-black/70 rounded-sm border border-accent/10 p-4 overflow-hidden font-mono text-[10px]">
              <div className="space-y-2">
                <AnimatePresence>
                  {logs.map((log, index) => (
                    <motion.div
                      key={log.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex gap-3"
                    >
                      <span className="text-zinc-600 flex-shrink-0">[{log.timestamp}]</span>
                      <span
                        className={
                          log.type === 'success'
                            ? 'text-green-400'
                            : log.type === 'warning'
                            ? 'text-yellow-400'
                            : 'text-accent'
                        }
                      >
                        {log.message}
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>
                <motion.div
                  className="w-2 h-3 bg-accent"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
            </div>

            {/* Status indicators */}
            <div className="mt-4 grid grid-cols-3 gap-3 font-mono text-[10px]">
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-zinc-400">System Online</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="solar:shield-check-linear" className="text-accent" />
                <span className="text-zinc-400">Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="solar:link-linear" className="text-accent" />
                <span className="text-zinc-400">Synced</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
