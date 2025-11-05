import Link from 'next/link'
import { Navigation } from './Navigation'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background-light/80 backdrop-blur-sm border-b border-[#f4eae6]">
      <div className="mx-auto flex max-w-[960px] items-center justify-between whitespace-nowrap px-4 py-3">
        <div className="flex items-center gap-4 text-[#1d110c]">
          <div className="size-6 text-primary">
            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1.5a1.5 1.5 0 0 1 1.5 1.5v3.66a3.5 3.5 0 0 0 1.666 2.934l.32.192a2.5 2.5 0 0 1-1.391 4.597l-.488-.13a3.499 3.499 0 0 0-3.314 0l-.488.13a2.5 2.5 0 0 1-1.391-4.597l.32-.192A3.5 3.5 0 0 0 9 6.66V3a1.5 1.5 0 0 1 1.5-1.5Zm0-1.5a3 3 0 0 0-3 3v3.66a2 2 0 0 1-.952 1.676l-.32.192C6.44 9.177 6.13 10.51 6.84 11.5c.382.52.93.856 1.543.95l.488.13a5 5 0 0 1 4.742 0l.488-.13c1.4-.373 2.22-1.928 1.583-3.232l-.32-.192A2 2 0 0 1 15 6.66V3a3 3 0 0 0-3-3Z"/>
              <path d="M4.5 9.5a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1h-14a.5.5 0 0 1-.5-.5Zm-.443 3.528a.5.5 0 0 1 .63.316l2.125 7a.5.5 0 0 1-.94.284L4.05 13.9a.5.5 0 0 1 .007-.488.5.5 0 0 1 .44-.384Zm15.886 0a.5.5 0 0 1 .44.384.5.5 0 0 1 .008.488l-1.822 6.728a.5.5 0 0 1-.94-.284l2.125-7a.5.5 0 0 1 .189-.316Z"/>
            </svg>
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
