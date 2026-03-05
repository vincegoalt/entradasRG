import Link from 'next/link'
import { Navigation } from './Navigation'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#f4eae6] shadow-sm">
      <div className="mx-auto flex max-w-[960px] items-center justify-between whitespace-nowrap px-4 py-3">
        <Link href="/" className="flex items-center gap-2.5 text-[#1d110c] hover:text-primary transition-colors group">
          <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg shadow-sm group-hover:bg-orange-600 transition-colors">
            <span className="material-symbols-outlined text-white" style={{fontSize: '18px', fontVariationSettings: "'FILL' 1"}}>sports_tennis</span>
          </div>
          <span className="text-lg font-bold tracking-tight">
            <span className="text-primary">Entradas</span> Roland Garros
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <Navigation />
          <a
            href="https://goaltickets.com/es/collections/entradas-roland-garros-2026"
            target="_blank"
            rel="noopener"
            className="hidden lg:inline-flex items-center gap-1.5 bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors btn-shine"
          >
            <span className="material-symbols-outlined" style={{fontSize: '18px'}}>confirmation_number</span>
            Comprar Entradas
          </a>
        </div>
      </div>
    </header>
  )
}
