interface GoalTicketsCTAProps {
  title?: string
  subtitle?: string
  image?: string
}

export function GoalTicketsCTA({
  title = 'Asegura tus Entradas para Roland Garros 2026',
  subtitle = 'Entradas verificadas con transferencia oficial por app y garantía de autenticidad.',
  image = '/images/heroes/clay-court.jpg',
}: GoalTicketsCTAProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1d110c] via-[#2a1a12] to-[#1d110c] p-8 md:p-10">
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-primary" style={{fontSize: '28px', fontVariationSettings: "'FILL' 1"}}>verified</span>
          <span className="text-primary font-bold text-sm uppercase tracking-wider">Entradas Garantizadas</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
          {title}
        </h3>
        <p className="text-white/70 mb-6 max-w-2xl">
          {subtitle}
        </p>

        <div className="flex flex-wrap gap-3 mb-6">
          <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-white/90 text-xs font-medium">
            <span className="material-symbols-outlined text-green-400" style={{fontSize: '14px', fontVariationSettings: "'FILL' 1"}}>verified</span>
            100% Auténticas
          </div>
          <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-white/90 text-xs font-medium">
            <span className="material-symbols-outlined text-blue-400" style={{fontSize: '14px', fontVariationSettings: "'FILL' 1"}}>smartphone</span>
            Transferencia por App
          </div>
          <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-white/90 text-xs font-medium">
            <span className="material-symbols-outlined text-yellow-400" style={{fontSize: '14px', fontVariationSettings: "'FILL' 1"}}>shield</span>
            Garantía Total
          </div>
        </div>

        <a
          href="https://goaltickets.com/es/collections/entradas-roland-garros-2026"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3.5 rounded-xl hover:bg-orange-600 transition-colors btn-shine text-lg"
        >
          <span className="material-symbols-outlined" style={{fontSize: '22px'}}>confirmation_number</span>
          Ver Entradas en GoalTickets
          <span className="material-symbols-outlined" style={{fontSize: '18px'}}>arrow_forward</span>
        </a>
      </div>
    </section>
  )
}
