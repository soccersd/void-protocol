'use client'

import { useState, useEffect, useCallback } from 'react'

export function useDecryptedText(text: string, speed: number = 50, trigger: boolean = true) {
  const [displayText, setDisplayText] = useState('')
  const [isDecoded, setIsDecoded] = useState(false)

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'

  const decryptText = useCallback(() => {
    setDisplayText('')
    setIsDecoded(false)
    
    let iteration = 0
    const maxLength = text.length
    
    const interval = setInterval(() => {
      const decrypted = text
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' '
          if (index < iteration) {
            return text[index]
          }
          return characters[Math.floor(Math.random() * characters.length)]
        })
        .join('')
      
      setDisplayText(decrypted)
      iteration += 1 / 3
      
      if (iteration >= maxLength) {
        clearInterval(interval)
        setIsDecoded(true)
      }
    }, speed)
    
    return () => clearInterval(interval)
  }, [text, speed])

  useEffect(() => {
    if (trigger) {
      const cleanup = decryptText()
      return cleanup
    } else {
      setDisplayText('')
      setIsDecoded(false)
    }
  }, [trigger, decryptText])

  return { displayText, isDecoded }
}
