import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#23140f] text-white">
      <div className="mx-auto max-w-[960px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Column 1 - Enlaces Rápidos */}
          <div>
            <h4 className="font-bold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-white/70">
              <li><Link href="/calendario-roland-garros-2026" className="hover:text-primary transition-colors">Calendario</Link></li>
              <li><Link href="/entradas-roland-garros-2026" className="hover:text-primary transition-colors">Entradas</Link></li>
              <li><Link href="/estadio-roland-garros" className="hover:text-primary transition-colors">El Estadio</Link></li>
              <li><Link href="/guia-completa/como-llegar" className="hover:text-primary transition-colors">Cómo Llegar</Link></li>
              <li><Link href="/alojamiento-paris" className="hover:text-primary transition-colors">Alojamiento</Link></li>
              <li><Link href="/preguntas-frecuentes" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 2 - Recursos Útiles */}
          <div>
            <h4 className="font-bold text-lg mb-4">Recursos Útiles</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="https://www.rolandgarros.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Sitio Oficial de Roland-Garros</a></li>
              <li><a href="https://es.parisinfo.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Turismo de París</a></li>
              <li><a href="https://www.ratp.fr" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Guía de Transporte de París</a></li>
            </ul>
          </div>

          {/* Column 3 - Contacto */}
          <div>
            <h4 className="font-bold text-lg mb-4">Sobre Esta Guía</h4>
            <p className="text-white/70 mb-4">Guía informativa independiente en español sobre Roland Garros 2026 para hispanohablantes.</p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>© 2026 Roland Garros Guía Español. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
