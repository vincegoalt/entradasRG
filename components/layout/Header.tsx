import Link from 'next/link'
import { Navigation } from './Navigation'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background-light/80 backdrop-blur-sm border-b border-[#f4eae6]">
      <div className="mx-auto flex max-w-[960px] items-center justify-between whitespace-nowrap px-4 py-3">
        <div className="flex items-center gap-4 text-[#1d110c]">
          <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-md">
            <span className="text-white text-sm font-black tracking-tight leading-none">RG</span>
          </div>
          <Link href="/">
            <h2 className="text-[#1d110c] text-lg font-bold tracking-tight hover:text-primary transition-colors">
              Roland Garros Guía
            </h2>
          </Link>
        </div>

        <Navigation />
      </div>
    </header>
  )
}
