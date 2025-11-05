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
            <h4 className="font-bold text-lg mb-4">Contacto y Redes</h4>
            <p className="text-white/70 mb-4">Síguenos para no perderte ninguna actualización.</p>
            <div className="flex space-x-4">
              <a className="text-white/70 hover:text-primary transition-colors" href="#" aria-label="Twitter">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a className="text-white/70 hover:text-primary transition-colors" href="#" aria-label="Facebook">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/>
                </svg>
              </a>
              <a className="text-white/70 hover:text-primary transition-colors" href="#" aria-label="Instagram">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>© 2024 Roland Garros Guía Español. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
