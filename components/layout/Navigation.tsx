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
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
