'use client'

import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const animate = () => {
      const newCursorPos = {
        x: cursorPos.x + (mousePos.x - cursorPos.x) * 0.2,
        y: cursorPos.y + (mousePos.y - cursorPos.y) * 0.2,
      }
      setCursorPos(newCursorPos)

      if (cursorRef.current) {
        const size = isHovering ? 24 : 12
        const offset = size / 2
        cursorRef.current.style.transform = `translate(${newCursorPos.x - offset}px, ${newCursorPos.y - offset}px)`
        cursorRef.current.style.width = `${size}px`
        cursorRef.current.style.height = `${size}px`
      }

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [mousePos, cursorPos, isHovering])

  useEffect(() => {
    const clickables = document.querySelectorAll('button, a')
    
    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    clickables.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      clickables.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 border border-accent/70 rounded-full pointer-events-none z-[9999] mix-blend-screen transition-transform duration-75 flex items-center justify-center backdrop-blur-sm"
      style={{
        borderColor: isHovering ? '#fff' : 'rgba(157, 0, 255, 0.7)',
        backgroundColor: isHovering ? 'rgba(255,255,255,0.1)' : 'transparent',
      }}
    >
      <div className="w-[1px] h-[1px] bg-white rounded-full" />
    </div>
  )
}
