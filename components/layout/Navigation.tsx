'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/calendario-roland-garros-2026', label: 'Calendario' },
    { href: '/entradas-roland-garros-2026', label: 'Entradas' },
    { href: '/estadio-roland-garros', label: 'El Estadio' },
    { href: '/guia-completa/como-llegar', label: 'Cómo Llegar' },
    { href: '/preguntas-frecuentes', label: 'FAQ' },
  ]

  return (
    <nav className="flex items-center">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-[#1d110c] hover:text-primary text-sm font-medium transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation Button */}
      <button
        className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-[60px] left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl border-b border-[#f4eae6] md:hidden">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#1d110c] font-medium hover:bg-orange-50 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://goaltickets.com/es/collections/entradas-roland-garros-2026"
              target="_blank"
              rel="noopener"
              className="flex items-center justify-center gap-2 mt-2 bg-primary text-white font-bold px-4 py-3 rounded-lg btn-shine"
              onClick={() => setIsOpen(false)}
            >
              <span className="material-symbols-outlined" style={{fontSize: '18px'}}>confirmation_number</span>
              Comprar Entradas
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
