import Link from 'next/link'
import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { SportsEventSchema } from '@/components/seo/SportsEventSchema'
import { FAQSchema } from '@/components/seo/FAQSchema'

export const metadata: Metadata = {
  title: 'Calendario Roland Garros 2026: Fechas, Horarios y Orden de Juego',
  description: 'Calendario completo Roland Garros 2026 con fechas de cada ronda, horarios detallados y orden de juego diario. Planifica tu visita al torneo de tenis más prestigioso en tierra batida.',
  keywords: 'calendario roland garros 2026, fechas roland garros 2026, horarios roland garros, orden de juego roland garros, calendario french open 2026',
}

export default function CalendarioPage() {
  const faqs = [
    {
      question: '¿Cuándo se celebra Roland Garros 2026?',
      answer: 'Roland Garros 2026 se celebrará del 24 de mayo al 7 de junio de 2026. El torneo dura dos semanas completas, con las rondas de clasificación comenzando unos días antes del inicio oficial del cuadro principal.'
    },
    {
      question: '¿Qué días son las finales de Roland Garros 2026?',
      answer: 'La final femenina se disputará el sábado 6 de junio de 2026, mientras que la final masculina tendrá lugar el domingo 7 de junio de 2026. Las finales de dobles se juegan durante el fin de semana del torneo.'
    },
    {
      question: '¿A qué hora empiezan los partidos en Roland Garros?',
      answer: 'Los partidos en Roland Garros generalmente comienzan a las 11:00 horas en las pistas principales. Las sesiones nocturnas en Philippe-Chatrier comienzan a las 20:00 horas. En pistas secundarias, los primeros partidos pueden empezar a las 10:30 horas.'
    },
    {
      question: '¿Cuándo se publica el orden de juego diario?',
      answer: 'El orden de juego oficial para el día siguiente se publica generalmente alrededor de las 18:00-19:00 horas en el sitio web oficial de Roland Garros. Los horarios pueden sufrir cambios debido a retrasos por lluvia u otros factores.'
    },
    {
      question: '¿Cuál es el mejor momento para visitar Roland Garros?',
      answer: 'La primera semana ofrece más partidos simultáneos y precios más accesibles, ideal para ver múltiples jugadores. La segunda semana presenta tenis de mayor nivel con semifinales y finales. Los cuartos de final ofrecen un equilibrio perfecto entre calidad y precio.'
    }
  ]

  return (
    <>
      <SportsEventSchema
        name="Roland Garros 2026"
        startDate="2026-05-24"
        endDate="2026-06-07"
        description="Calendario completo del torneo Roland Garros 2026 con fechas de cada ronda y horarios"
      />
      <FAQSchema faqs={faqs} />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Link href="/" className="text-[#a15d45] text-sm font-medium leading-normal hover:text-primary">
            Inicio
          </Link>
          <span className="text-[#a15d45] text-sm font-medium leading-normal">/</span>
          <span className="text-[#1d110c] text-sm font-medium leading-normal">Calendario</span>
        </div>

        {/* Page Heading */}
        <div className="flex flex-col gap-3 mb-12">
          <h1 className="text-[#1d110c] text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
            Calendario y Fechas Clave 2026
          </h1>
          <p className="text-[#a15d45] text-lg font-normal leading-normal max-w-3xl">
            Una guía completa de las fechas del torneo, desde las rondas de clasificación hasta las emocionantes finales en la Philippe-Chatrier.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Navigation */}
          <aside className="w-full lg:w-1/4 xl:w-1/5 lg:sticky lg:top-28 h-fit">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <h3 className="text-[#1d110c] text-base font-bold leading-normal">Contenidos</h3>
                <p className="text-[#a15d45] text-sm font-normal leading-normal">Navegación de la página</p>
              </div>
              <div className="flex flex-col gap-1 border-l-2 border-[#f4eae6]">
                <a
                  className="flex items-center gap-3 px-3 py-2 border-l-2 border-primary bg-primary/10"
                  href="#fechas-clave"
                >
                  <span className="material-symbols-outlined text-primary text-xl" style={{fontVariationSettings: "'FILL' 1"}}>
                    calendar_today
                  </span>
                  <p className="text-primary text-sm font-bold leading-normal">Fechas Importantes</p>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 border-l-2 border-transparent hover:bg-primary/10 transition-colors"
                  href="#fase-clasificacion"
                >
                  <span className="material-symbols-outlined text-[#1d110c] text-xl" style={{fontVariationSettings: "'FILL' 1"}}>
                    confirmation_number
                  </span>
                  <p className="text-[#1d110c] text-sm font-medium leading-normal">Fase de Clasificación</p>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 border-l-2 border-transparent hover:bg-primary/10 transition-colors"
                  href="#semana-1"
                >
                  <span className="material-symbols-outlined text-[#1d110c] text-xl" style={{fontVariationSettings: "'FILL' 1"}}>
                    sports_tennis
                  </span>
                  <p className="text-[#1d110c] text-sm font-medium leading-normal">Cuadro Principal - Semana 1</p>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 border-l-2 border-transparent hover:bg-primary/10 transition-colors"
                  href="#semana-2"
                >
                  <span className="material-symbols-outlined text-[#1d110c] text-xl" style={{fontVariationSettings: "'FILL' 1"}}>
                    sports_tennis
                  </span>
                  <p className="text-[#1d110c] text-sm font-medium leading-normal">Cuadro Principal - Semana 2</p>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 border-l-2 border-transparent hover:bg-primary/10 transition-colors"
                  href="#finales"
                >
                  <span className="material-symbols-outlined text-[#1d110c] text-xl" style={{fontVariationSettings: "'FILL' 1"}}>
                    emoji_events
                  </span>
                  <p className="text-[#1d110c] text-sm font-medium leading-normal">Finales</p>
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="w-full lg:w-3/4 xl:w-4/5 space-y-12">
            {/* Key Dates Section */}
            <section id="fechas-clave">
              <h2 className="text-[#1d110c] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-4 pt-2">
                Fechas Clave
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-[#ead5cd]">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>sell</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1d110c]">Apertura Venta de Entradas</h4>
                      <p className="text-sm text-[#a15d45]">Miércoles, 11 de Marzo</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-[#ead5cd]">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>draw</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1d110c]">Sorteo del Cuadro Principal</h4>
                      <p className="text-sm text-[#a15d45]">Jueves, 21 de Mayo</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-[#ead5cd]">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>calendar_month</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1d110c]">Inicio del Torneo</h4>
                      <p className="text-sm text-[#a15d45]">Domingo, 24 de Mayo</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-[#ead5cd]">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>emoji_events</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1d110c]">Finales del Torneo</h4>
                      <p className="text-sm text-[#a15d45]">Sábado 6 y Domingo 7 de Junio</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Qualifying Stage */}
            <section id="fase-clasificacion">
              <h2 className="text-[#1d110c] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-4 pt-2">
                Fase de Clasificación
              </h2>
              <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] overflow-hidden">
                <div className="p-6">
                  <p className="text-[#a15d45]">
                    La fase de clasificación, conocida como "Les Qualifs", determina los últimos jugadores que entrarán al cuadro principal. Los partidos se disputan la semana previa al inicio del torneo.
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-[#1d110c] text-white text-sm">
                      <tr>
                        <th className="p-4 font-semibold">Fecha</th>
                        <th className="p-4 font-semibold">Ronda</th>
                        <th className="p-4 font-semibold">Hora de Inicio (Aprox.)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-[#f4eae6]">
                        <td className="p-4 whitespace-nowrap">Lunes, 18 de Mayo</td>
                        <td className="p-4">Primera Ronda Masculina y Femenina</td>
                        <td className="p-4">10:00 AM</td>
                      </tr>
                      <tr className="bg-[#fcf9f8] border-t border-[#f4eae6]">
                        <td className="p-4 whitespace-nowrap">Martes, 19 de Mayo</td>
                        <td className="p-4">Primera Ronda Masculina y Femenina</td>
                        <td className="p-4">10:00 AM</td>
                      </tr>
                      <tr className="border-t border-[#f4eae6]">
                        <td className="p-4 whitespace-nowrap">Miércoles, 20 de Mayo</td>
                        <td className="p-4">Segunda Ronda Masculina y Femenina</td>
                        <td className="p-4">11:00 AM</td>
                      </tr>
                      <tr className="bg-[#fcf9f8] border-t border-[#f4eae6]">
                        <td className="p-4 whitespace-nowrap">Viernes, 22 de Mayo</td>
                        <td className="p-4">Ronda Final Masculina y Femenina</td>
                        <td className="p-4">11:00 AM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Main Draw - Week 1 */}
            <section id="semana-1">
              <h2 className="text-[#1d110c] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-4 pt-2">
                Cuadro Principal - Semana 1
              </h2>
              <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] overflow-hidden">
                <div className="p-6 mb-4">
                  <p className="text-[#a15d45]">
                    La primera semana del torneo presenta las primeras cuatro rondas del cuadro principal, con acción simultánea en múltiples pistas.
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-[#1d110c] text-white text-sm">
                      <tr>
                        <th className="p-4 font-semibold">Fecha</th>
                        <th className="p-4 font-semibold">Ronda</th>
                        <th className="p-4 font-semibold">Detalles</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-[#f4eae6]">
                        <td className="p-4 whitespace-nowrap">Dom 24 - Lun 25 Mayo</td>
                        <td className="p-4">Primera Ronda</td>
                        <td className="p-4">128 jugadores en cada cuadro</td>
                      </tr>
                      <tr className="bg-[#fcf9f8] border-t border-[#f4eae6]">
                        <td className="p-4 whitespace-nowrap">Mie 27 - Jue 28 Mayo</td>
                        <td className="p-4">Segunda Ronda</td>
                        <td className="p-4">64 jugadores restantes</td>
                      </tr>
                      <tr className="border-t border-[#f4eae6]">
                        <td className="p-4 whitespace-nowrap">Vie 29 - Sáb 30 Mayo</td>
                        <td className="p-4">Tercera Ronda</td>
                        <td className="p-4">32 jugadores restantes</td>
                      </tr>
                      <tr className="bg-[#fcf9f8] border-t border-[#f4eae6]">
                        <td className="p-4 whitespace-nowrap">Dom 31 Mayo - Lun 1 Jun</td>
                        <td className="p-4">Octavos de Final</td>
                        <td className="p-4">16 jugadores restantes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Main Draw - Week 2 */}
            <section id="semana-2">
              <h2 className="text-[#1d110c] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-4 pt-2">
                Cuadro Principal - Semana 2
              </h2>
              <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] overflow-hidden">
                <div className="p-6 mb-4">
                  <p className="text-[#a15d45]">
                    La segunda semana marca las etapas decisivas del torneo, con cuartos de final, semifinales y las finales que coronarán a los campeones.
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-[#1d110c] text-white text-sm">
                      <tr>
                        <th className="p-4 font-semibold">Fecha</th>
                        <th className="p-4 font-semibold">Ronda</th>
                        <th className="p-4 font-semibold">Detalles</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-[#f4eae6]">
                        <td className="p-4 whitespace-nowrap">Mar 2 - Mie 3 Junio</td>
                        <td className="p-4">Cuartos de Final</td>
                        <td className="p-4">8 jugadores restantes</td>
                      </tr>
                      <tr className="bg-[#fcf9f8] border-t border-[#f4eae6]">
                        <td className="p-4 whitespace-nowrap">Jue 4 - Vie 5 Junio</td>
                        <td className="p-4">Semifinales</td>
                        <td className="p-4">4 jugadores restantes</td>
                      </tr>
                      <tr className="border-t border-[#f4eae6]">
                        <td className="p-4 whitespace-nowrap">Sábado 6 Junio</td>
                        <td className="p-4">Final Femenina</td>
                        <td className="p-4">Court Philippe-Chatrier</td>
                      </tr>
                      <tr className="bg-[#fcf9f8] border-t border-[#f4eae6]">
                        <td className="p-4 whitespace-nowrap">Domingo 7 Junio</td>
                        <td className="p-4">Final Masculina</td>
                        <td className="p-4">Court Philippe-Chatrier</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Finals Section */}
            <section id="finales">
              <h2 className="text-[#1d110c] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-4 pt-2">
                Finales
              </h2>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#ead5cd]">
                <p className="text-[#a15d45] mb-6">
                  El fin de semana de las finales es el clímax del torneo, donde se coronan los campeones en la legendaria pista Philippe-Chatrier.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/10">
                    <span className="material-symbols-outlined text-primary text-2xl mt-1" style={{fontVariationSettings: "'FILL' 1"}}>
                      emoji_events
                    </span>
                    <div>
                      <h4 className="font-bold text-[#1d110c]">Sábado, 6 de Junio</h4>
                      <p className="text-sm text-[#a15d45]">Final Individual Femenina, Final Dobles Masculino</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/10">
                    <span className="material-symbols-outlined text-primary text-2xl mt-1" style={{fontVariationSettings: "'FILL' 1"}}>
                      emoji_events
                    </span>
                    <div>
                      <h4 className="font-bold text-[#1d110c]">Domingo, 7 de Junio</h4>
                      <p className="text-sm text-[#a15d45]">Final Individual Masculina, Final Dobles Femenino</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Related Content */}
            <section>
              <h2 className="text-[#1d110c] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-4 pt-5">
                Contenido Relacionado
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link
                  href="/entradas-roland-garros-2026"
                  className="bg-white rounded-xl shadow-sm border border-[#ead5cd] overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="material-symbols-outlined text-primary text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>
                        confirmation_number
                      </span>
                      <h3 className="font-bold text-lg text-[#1d110c] group-hover:text-primary transition-colors">
                        Guía para Comprar Entradas
                      </h3>
                    </div>
                    <p className="text-sm text-[#a15d45]">
                      Consejos y fechas clave para asegurar tu lugar en las gradas.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/alojamiento-paris"
                  className="bg-white rounded-xl shadow-sm border border-[#ead5cd] overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="material-symbols-outlined text-primary text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>
                        hotel
                      </span>
                      <h3 className="font-bold text-lg text-[#1d110c] group-hover:text-primary transition-colors">
                        Dónde Alojarse en París
                      </h3>
                    </div>
                    <p className="text-sm text-[#a15d45]">
                      Los mejores hoteles y zonas para hospedarse durante el torneo.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/guia-completa/como-llegar"
                  className="bg-white rounded-xl shadow-sm border border-[#ead5cd] overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="material-symbols-outlined text-primary text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>
                        pin_drop
                      </span>
                      <h3 className="font-bold text-lg text-[#1d110c] group-hover:text-primary transition-colors">
                        Cómo Llegar a Roland Garros
                      </h3>
                    </div>
                    <p className="text-sm text-[#a15d45]">
                      Opciones de transporte público y consejos para tu visita.
                    </p>
                  </div>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
