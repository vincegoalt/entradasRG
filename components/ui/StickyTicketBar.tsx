'use client'

import { useState, useEffect } from 'react'

export function StickyTicketBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden animate-slide-up">
      <div className="bg-[#1d110c] border-t border-white/10 px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex flex-col min-w-0">
          <span className="text-white text-sm font-bold truncate">Roland Garros 2026</span>
          <span className="text-white/70 text-xs">Desde 35 EUR por entrada</span>
        </div>
        <a
          href="https://goaltickets.com/es/collections/entradas-roland-garros-2026"
          target="_blank"
          rel="noopener"
          className="shrink-0 bg-primary text-white text-sm font-bold px-5 py-2.5 rounded-lg btn-shine min-h-[44px] flex items-center"
        >
          Ver Entradas
        </a>
      </div>
    </div>
  )
}
