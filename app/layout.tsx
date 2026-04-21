import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'VOID-PROTOCOL | Anomalies Series',
  description: 'Synthesized extraction units from Grotto minerals. VOID-PROTOCOL - Abyssal resonance protocols for the Club HashCash ecosystem.',
  keywords: ['mining hardware', 'cryptocurrency', 'bitcoin miner', 'hashcash', 'anomalies series', 'void protocol', 'grotto', 'resonance protocol'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth bg-void">
      <body className={`${inter.variable} ${jetbrainsMono.variable} text-zinc-300 font-sans antialiased overflow-x-hidden selection:bg-accent/30 selection:text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
