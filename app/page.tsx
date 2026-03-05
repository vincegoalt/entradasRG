import Link from 'next/link'
import Image from 'next/image'
import { SportsEventSchema } from '@/components/seo/SportsEventSchema'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { WebSiteSchema } from '@/components/seo/WebSiteSchema'
import { Countdown } from '@/components/ui/Countdown'
import { TrustBar } from '@/components/ui/TrustBar'
import { StickyTicketBar } from '@/components/ui/StickyTicketBar'

const homeFaqs = [
  {
    question: '¿Cuándo es Roland Garros 2026?',
    answer: 'Roland Garros 2026 se celebra del 24 de mayo al 7 de junio de 2026 en el Stade Roland Garros de París. Las rondas de clasificación comienzan el 18 de mayo. La final femenina es el 6 de junio y la final masculina el 7 de junio.'
  },
  {
    question: '¿Cuándo empieza Roland Garros 2026?',
    answer: 'El cuadro principal de Roland Garros 2026 comienza el domingo 24 de mayo de 2026. Las rondas de clasificación arrancan el lunes 18 de mayo. Los partidos en pistas principales empiezan a las 11:00 y las sesiones nocturnas en Philippe-Chatrier a las 20:00.'
  },
  {
    question: '¿Dónde se juega Roland Garros?',
    answer: 'Roland Garros se juega en el Stade Roland Garros, ubicado en 2 Avenue Gordon Bennett, París 75016, Francia. El complejo cuenta con 18 pistas de tierra batida, siendo la principal Philippe-Chatrier con capacidad para 15,225 espectadores y techo retráctil. Se accede fácilmente por metro (Porte d\'Auteuil, línea 10).'
  }
]

export default function HomePage() {
  return (
    <>
      <SportsEventSchema
        name="Roland Garros 2026"
        startDate="2026-05-24"
        endDate="2026-06-07"
        description="French Open 2026 - Grand Slam de tenis en tierra batida"
      />
      <FAQSchema faqs={homeFaqs} />
      <WebSiteSchema />
      <StickyTicketBar />

      {/* Trust Bar */}
      <TrustBar />

      {/* Hero Section - Full width, dramatic */}
      <section className="relative min-h-[520px] sm:min-h-[560px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero/rolandgarros2026.jpg"
          alt="Roland Garros stadium with clay court in view"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />

        <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 px-4 text-center max-w-3xl mx-auto">
          <div className="flex flex-col gap-3">
            <p className="text-orange-300 text-sm sm:text-base font-semibold uppercase tracking-widest">
              24 Mayo - 7 Junio 2026 &middot; París
            </p>
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight drop-shadow-lg">
              Tu Guía para Vivir
              <span className="block text-gradient">Roland Garros 2026</span>
            </h1>
            <p className="text-white/85 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              Fechas, entradas desde 35 EUR, calendario, cómo llegar y todo lo que necesitas para el Grand Slam parisino.
            </p>
          </div>

          <Countdown targetDate="2026-05-24T11:00:00+02:00" />

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="https://goaltickets.com/es/collections/entradas-roland-garros-2026"
              target="_blank"
              rel="noopener"
              className="flex items-center justify-center gap-2 bg-primary text-white text-base font-bold px-7 py-3.5 rounded-lg hover:bg-orange-600 transition-all btn-shine shadow-lg shadow-orange-500/25 min-h-[48px]"
            >
              <span className="material-symbols-outlined" style={{fontSize: '20px'}}>confirmation_number</span>
              Comprar Entradas
            </a>
            <Link
              href="/calendario-roland-garros-2026"
              className="flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm text-white text-base font-semibold px-7 py-3.5 rounded-lg border border-white/25 hover:bg-white/25 transition-all min-h-[48px]"
            >
              Explorar la Guía
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[960px] px-4 sm:px-6 lg:px-8">

        {/* Quick Answer Capsule */}
        <section className="w-full py-8">
          <div className="rounded-xl border border-[#ead5cd] bg-white p-6 shadow-sm">
            <p className="text-[#1d110c] text-base leading-relaxed">
              <strong>Roland Garros 2026</strong> se celebra del <strong>24 de mayo al 7 de junio</strong> en el Stade Roland Garros de París, sobre tierra batida. Las entradas están disponibles <strong>desde 35 EUR</strong> (ground pass). La pista central Philippe-Chatrier tiene capacidad para <strong>15,225 espectadores</strong> y techo retráctil. El torneo incluye <strong>128 jugadores</strong> en cada cuadro individual durante <strong>2 semanas</strong> de competición. Consulta las <Link href="/calendario-roland-garros-2026" className="text-primary font-semibold hover:underline">fechas de Roland Garros 2026</Link>, cómo <Link href="/entradas-roland-garros-2026" className="text-primary font-semibold hover:underline">comprar entradas para Roland Garros 2026</Link>, o la guía de la <Link href="/final-roland-garros-2026" className="text-primary font-semibold hover:underline">final de Roland Garros 2026</Link>.
            </p>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="w-full pb-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-500 to-red-600 p-5 text-white">
              <span className="material-symbols-outlined absolute -right-2 -top-2 text-white/10" style={{fontSize: '72px', fontVariationSettings: "'FILL' 1"}}>calendar_month</span>
              <p className="text-white/80 text-xs font-medium uppercase tracking-wider">Fechas</p>
              <p className="text-xl sm:text-2xl font-black mt-1">24 May - 7 Jun</p>
            </div>
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 p-5 text-white">
              <span className="material-symbols-outlined absolute -right-2 -top-2 text-white/10" style={{fontSize: '72px', fontVariationSettings: "'FILL' 1"}}>location_on</span>
              <p className="text-white/80 text-xs font-medium uppercase tracking-wider">Ubicación</p>
              <p className="text-xl sm:text-2xl font-black mt-1">París, Francia</p>
            </div>
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-red-600 to-rose-700 p-5 text-white">
              <span className="material-symbols-outlined absolute -right-2 -top-2 text-white/10" style={{fontSize: '72px', fontVariationSettings: "'FILL' 1"}}>sports_tennis</span>
              <p className="text-white/80 text-xs font-medium uppercase tracking-wider">Superficie</p>
              <p className="text-xl sm:text-2xl font-black mt-1">Tierra Batida</p>
            </div>
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-rose-600 to-pink-700 p-5 text-white">
              <span className="material-symbols-outlined absolute -right-2 -top-2 text-white/10" style={{fontSize: '72px', fontVariationSettings: "'FILL' 1"}}>stadium</span>
              <p className="text-white/80 text-xs font-medium uppercase tracking-wider">Capacidad</p>
              <p className="text-xl sm:text-2xl font-black mt-1">15,225</p>
            </div>
          </div>
        </section>

        {/* Navigation Grid */}
        <section className="w-full py-10">
          <h2 className="text-[#1d110c] text-2xl sm:text-3xl font-bold mb-6">Planifica tu Visita</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/calendario-roland-garros-2026" className="group card-hover rounded-xl border border-[#ead5cd] bg-white p-6 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors" style={{fontSize: '24px', fontVariationSettings: "'FILL' 1"}}>calendar_month</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#1d110c] text-lg font-bold group-hover:text-primary transition-colors">Calendario y Fechas</h3>
                <p className="text-[#a15d45] text-sm">Horarios de cada ronda, desde clasificación hasta la final.</p>
              </div>
              <span className="text-primary text-sm font-semibold flex items-center gap-1 mt-auto">
                Ver calendario
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1" style={{fontSize: '16px'}}>arrow_forward</span>
              </span>
            </Link>

            <Link href="/entradas-roland-garros-2026" className="group card-hover rounded-xl border-2 border-primary/30 bg-orange-50/50 p-6 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-white" style={{fontSize: '24px', fontVariationSettings: "'FILL' 1"}}>confirmation_number</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-[#1d110c] text-lg font-bold group-hover:text-primary transition-colors">Entradas</h3>
                  <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Desde 35 EUR</span>
                </div>
                <p className="text-[#a15d45] text-sm">Tipos, precios, ground pass y cómo comprar de forma segura.</p>
              </div>
              <span className="text-primary text-sm font-semibold flex items-center gap-1 mt-auto">
                Ver entradas
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1" style={{fontSize: '16px'}}>arrow_forward</span>
              </span>
            </Link>

            <Link href="/estadio-roland-garros" className="group card-hover rounded-xl border border-[#ead5cd] bg-white p-6 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors" style={{fontSize: '24px', fontVariationSettings: "'FILL' 1"}}>stadium</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#1d110c] text-lg font-bold group-hover:text-primary transition-colors">El Estadio</h3>
                <p className="text-[#a15d45] text-sm">Pistas, mapa del complejo e instalaciones de Roland Garros.</p>
              </div>
              <span className="text-primary text-sm font-semibold flex items-center gap-1 mt-auto">
                Explorar estadio
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1" style={{fontSize: '16px'}}>arrow_forward</span>
              </span>
            </Link>

            <Link href="/guia-completa/como-llegar" className="group card-hover rounded-xl border border-[#ead5cd] bg-white p-6 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors" style={{fontSize: '24px', fontVariationSettings: "'FILL' 1"}}>pin_drop</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#1d110c] text-lg font-bold group-hover:text-primary transition-colors">Cómo Llegar</h3>
                <p className="text-[#a15d45] text-sm">Metro, bus y las mejores rutas hasta el estadio.</p>
              </div>
              <span className="text-primary text-sm font-semibold flex items-center gap-1 mt-auto">
                Ver rutas
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1" style={{fontSize: '16px'}}>arrow_forward</span>
              </span>
            </Link>

            <Link href="/alojamiento-paris" className="group card-hover rounded-xl border border-[#ead5cd] bg-white p-6 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors" style={{fontSize: '24px', fontVariationSettings: "'FILL' 1"}}>hotel</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#1d110c] text-lg font-bold group-hover:text-primary transition-colors">Alojamiento</h3>
                <p className="text-[#a15d45] text-sm">Hoteles y barrios recomendados cerca del estadio.</p>
              </div>
              <span className="text-primary text-sm font-semibold flex items-center gap-1 mt-auto">
                Ver hoteles
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1" style={{fontSize: '16px'}}>arrow_forward</span>
              </span>
            </Link>

            <Link href="/preguntas-frecuentes" className="group card-hover rounded-xl border border-[#ead5cd] bg-white p-6 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors" style={{fontSize: '24px', fontVariationSettings: "'FILL' 1"}}>quiz</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#1d110c] text-lg font-bold group-hover:text-primary transition-colors">Preguntas Frecuentes</h3>
                <p className="text-[#a15d45] text-sm">Respuestas a las dudas más comunes de los visitantes.</p>
              </div>
              <span className="text-primary text-sm font-semibold flex items-center gap-1 mt-auto">
                Ver FAQ
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1" style={{fontSize: '16px'}}>arrow_forward</span>
              </span>
            </Link>
          </div>
        </section>

        {/* GoalTickets CTA - Premium look */}
        <section className="w-full py-10">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1d110c] to-[#3d2a1f] p-8 sm:p-10">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary" style={{fontSize: '28px', fontVariationSettings: "'FILL' 1"}}>verified</span>
                  <span className="text-orange-400 text-sm font-semibold uppercase tracking-wider">Partner Oficial de Entradas</span>
                </div>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-3">
                  Asegura tus Entradas para Roland Garros 2026
                </h2>
                <p className="text-white/70 text-base mb-4 max-w-lg">
                  Entradas verificadas con transferencia oficial por app. Las entradas para las finales se agotan meses antes del torneo.
                </p>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-3 mb-6 justify-center md:justify-start">
                  <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1.5">
                    <span className="material-symbols-outlined text-green-400" style={{fontSize: '14px', fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                    <span className="text-white/80 text-xs font-medium">100% Auténticas</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1.5">
                    <span className="material-symbols-outlined text-blue-400" style={{fontSize: '14px', fontVariationSettings: "'FILL' 1"}}>smartphone</span>
                    <span className="text-white/80 text-xs font-medium">Transferencia por App</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1.5">
                    <span className="material-symbols-outlined text-yellow-400" style={{fontSize: '14px', fontVariationSettings: "'FILL' 1"}}>shield</span>
                    <span className="text-white/80 text-xs font-medium">Garantía Total</span>
                  </div>
                </div>

                <a
                  href="https://goaltickets.com/es/collections/entradas-roland-garros-2026"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 bg-primary text-white text-base font-bold px-8 py-4 rounded-xl hover:bg-orange-600 transition-all btn-shine shadow-lg shadow-orange-500/20 min-h-[48px]"
                >
                  Ver Disponibilidad y Precios
                  <span className="material-symbols-outlined" style={{fontSize: '20px'}}>arrow_forward</span>
                </a>
              </div>

              {/* Price preview card */}
              <div className="shrink-0 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 w-full md:w-64">
                <p className="text-white/60 text-xs font-medium uppercase tracking-wider mb-3">Precios Desde</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white text-sm">Ground Pass</span>
                    <span className="text-white font-bold">35 EUR</span>
                  </div>
                  <div className="border-t border-white/10" />
                  <div className="flex justify-between items-center">
                    <span className="text-white text-sm">Pista Principal</span>
                    <span className="text-white font-bold">65 EUR</span>
                  </div>
                  <div className="border-t border-white/10" />
                  <div className="flex justify-between items-center">
                    <span className="text-white text-sm">Semifinales</span>
                    <span className="text-white font-bold">140 EUR</span>
                  </div>
                  <div className="border-t border-white/10" />
                  <div className="flex justify-between items-center">
                    <span className="text-white text-sm">Final</span>
                    <span className="text-primary font-bold">150 EUR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section - Historia */}
        <section className="w-full py-10">
          <div className="flex flex-col-reverse md:flex-row items-center gap-10">
            <div className="flex-1">
              <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/hero/rolandgarros2026.jpg"
                  alt="Historia de Roland Garros"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h2 className="text-[#1d110c] tracking-tight text-3xl font-bold sm:text-4xl">
                  Historia y Tradición
                </h2>
                <p className="text-[#a15d45] text-base leading-relaxed">
                  Desde 1928, Roland Garros ha sido el escenario de las hazañas más legendarias del tenis. 14 títulos de Nadal, finales épicas y la mística de la tierra batida parisina.
                </p>
              </div>
              <Link
                href="/historia-roland-garros"
                className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all w-fit"
              >
                Descubrir la historia
                <span className="material-symbols-outlined" style={{fontSize: '20px'}}>arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="w-full py-10 pb-16">
          <div className="rounded-2xl bg-gradient-to-r from-primary to-orange-400 p-8 sm:p-10 text-center text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-2">No te Pierdas Nada</h2>
            <p className="mb-6 max-w-lg mx-auto text-white/90">
              Recibe las últimas noticias, consejos y ofertas exclusivas para Roland Garros 2026 directamente en tu correo.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                className="flex-grow rounded-lg border-0 text-gray-900 px-4 py-3 placeholder:text-gray-400 focus:ring-2 focus:ring-white shadow-sm"
                placeholder="Tu correo electrónico"
                type="email"
              />
              <button
                className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-primary shadow-sm hover:bg-orange-50 transition-colors min-h-[48px]"
                type="submit"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}
