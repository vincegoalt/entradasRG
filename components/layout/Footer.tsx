import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#1d110c] text-white">
      {/* Trust Strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-[960px] px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <span className="material-symbols-outlined text-green-400" style={{fontSize: '20px', fontVariationSettings: "'FILL' 1"}}>verified</span>
              <span>Información Verificada</span>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <span className="material-symbols-outlined text-blue-400" style={{fontSize: '20px', fontVariationSettings: "'FILL' 1"}}>language</span>
              <span>100% en Español</span>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <span className="material-symbols-outlined text-yellow-400" style={{fontSize: '20px', fontVariationSettings: "'FILL' 1"}}>update</span>
              <span>Actualizado 2026</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[960px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Column 1 - Brand + CTA */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary" style={{fontSize: '32px', fontVariationSettings: "'FILL' 1"}}>sports_tennis</span>
              <span className="text-white font-bold text-lg"><span className="text-primary">Entradas</span> Roland Garros</span>
            </div>
            <p className="text-white/60 text-sm mb-5 leading-relaxed">Guía informativa independiente en español sobre Roland Garros 2026 para hispanohablantes.</p>
            <a
              href="https://goaltickets.com/es/collections/entradas-roland-garros-2026"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-primary font-semibold px-4 py-2 rounded-lg hover:bg-primary/30 transition-colors text-sm"
            >
              <span className="material-symbols-outlined" style={{fontSize: '18px'}}>confirmation_number</span>
              Comprar Entradas
            </a>
          </div>

          {/* Column 2 - Enlaces */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-4">Guía</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/calendario-roland-garros-2026" className="text-white/70 hover:text-primary transition-colors">Calendario 2026</Link></li>
              <li><Link href="/entradas-roland-garros-2026" className="text-white/70 hover:text-primary transition-colors">Entradas y Precios</Link></li>
              <li><Link href="/final-roland-garros-2026" className="text-white/70 hover:text-primary transition-colors">Final Roland Garros 2026</Link></li>
              <li><Link href="/estadio-roland-garros" className="text-white/70 hover:text-primary transition-colors">El Estadio</Link></li>
              <li><Link href="/guia-completa/como-llegar" className="text-white/70 hover:text-primary transition-colors">Cómo Llegar</Link></li>
              <li><Link href="/alojamiento-paris" className="text-white/70 hover:text-primary transition-colors">Alojamiento</Link></li>
              <li><Link href="/historia-roland-garros" className="text-white/70 hover:text-primary transition-colors">Historia</Link></li>
              <li><Link href="/preguntas-frecuentes" className="text-white/70 hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 3 - Recursos */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-4">Recursos</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="https://www.rolandgarros.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-colors">Sitio Oficial Roland-Garros</a></li>
              <li><a href="https://es.parisinfo.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-colors">Turismo de París</a></li>
              <li><a href="https://www.ratp.fr" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-colors">Transporte de París (RATP)</a></li>
              <li><a href="https://goaltickets.com/es/collections/entradas-roland-garros-2026" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-colors">GoalTickets - Entradas Garantizadas</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2026 Entradas Roland Garros. Todos los derechos reservados.</p>
          <p>No afiliado con la FFT ni Roland-Garros.</p>
        </div>
      </div>
    </footer>
  )
}
