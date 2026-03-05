import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { SportsEventSchema } from '@/components/seo/SportsEventSchema'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { PageHero } from '@/components/ui/PageHero'
import { GoalTicketsCTA } from '@/components/ui/GoalTicketsCTA'

export const metadata: Metadata = {
  title: 'Final Roland Garros 2026: Fechas, Horarios y Entradas',
  description: 'Todo sobre la final de Roland Garros 2026: la final femenina el 6 de junio y la final masculina el 7 de junio en Philippe-Chatrier. Horarios, entradas, cómo ver por TV y guía completa.',
  keywords: [
    'final roland garros 2026',
    'final masculina roland garros 2026',
    'final femenina roland garros 2026',
    'cuando es la final de roland garros',
    'finales roland garros 2026',
    'semifinales roland garros 2026'
  ],
  openGraph: {
    title: 'Final Roland Garros 2026: Fechas, Horarios y Entradas',
    description: 'Final femenina 6 de junio, final masculina 7 de junio 2026 en Philippe-Chatrier. Guía completa.',
    type: 'article',
    url: 'https://entradasrolandgarros.com/final-roland-garros-2026',
  },
  alternates: {
    canonical: 'https://entradasrolandgarros.com/final-roland-garros-2026',
  },
}

const faqs = [
  {
    question: '¿Cuándo es la final de Roland Garros 2026?',
    answer: 'La final femenina de Roland Garros 2026 se disputará el sábado 6 de junio de 2026 y la final masculina el domingo 7 de junio de 2026, ambas en la pista Philippe-Chatrier del Stade Roland Garros en París.'
  },
  {
    question: '¿A qué hora es la final de Roland Garros 2026?',
    answer: 'Las finales de Roland Garros suelen comenzar a las 15:00 horas (hora de París). La final femenina el sábado y la final masculina el domingo. El horario exacto se confirma en las semanas previas al torneo.'
  },
  {
    question: '¿Cuánto cuestan las entradas para la final de Roland Garros?',
    answer: 'Las entradas para la final de Roland Garros van desde aproximadamente 150 EUR (categoría 4, posiciones elevadas) hasta más de 540 EUR (categoría 1, asientos premium) en la pista Philippe-Chatrier. Las entradas se asignan principalmente por lotería.'
  },
  {
    question: '¿Cómo ver la final de Roland Garros 2026 por TV?',
    answer: 'En España se puede seguir por Eurosport y DAZN. En Latinoamérica, ESPN transmite Roland Garros. En Francia, France Télévisions tiene los derechos de emisión en abierto. También se puede seguir en streaming en plataformas como discovery+ y Star+.'
  },
  {
    question: '¿Cuándo son las semifinales de Roland Garros 2026?',
    answer: 'Las semifinales masculinas se juegan el viernes 5 de junio y las semifinales femeninas el jueves 4 de junio de 2026, ambas en la pista Philippe-Chatrier.'
  }
]

export default function FinalRolandGarros2026Page() {
  return (
    <>
      <SportsEventSchema
        name="Final Roland Garros 2026"
        startDate="2026-06-06"
        endDate="2026-06-07"
        description="Finales del torneo Roland Garros 2026 - Final femenina 6 junio, final masculina 7 junio en Philippe-Chatrier"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-[#fcf9f8]">
        <PageHero
          title="Final Roland Garros 2026"
          subtitle="Fechas, horarios, entradas y guía completa de las finales masculina y femenina"
          image="/images/heroes/tennis-stadium.jpg"
          badge={{ icon: 'emoji_events', text: 'Final Femenina 6 Jun · Final Masculina 7 Jun' }}
          primaryCta={{ text: 'Comprar Entradas', href: 'https://goaltickets.com/es/collections/entradas-roland-garros-2026', icon: 'confirmation_number', external: true }}
          secondaryCta={{ text: 'Ver Precios', href: '#precios', icon: 'arrow_downward' }}
        />

        <div className="bg-white/80 border-b border-[#ead5cd] py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: 'Final Roland Garros 2026', url: 'https://entradasrolandgarros.com/final-roland-garros-2026' }
              ]}
            />
          </div>
        </div>

        <article className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">

              {/* Capsule Answer */}
              <div className="rounded-xl border border-[#ead5cd] bg-gradient-to-r from-orange-50/50 to-[#fcf9f8] p-6 shadow-sm mb-10">
                <p className="text-[#1d110c] text-base leading-relaxed">
                  <strong>La final femenina de Roland Garros 2026 se juega el sábado 6 de junio</strong> y la <strong>final masculina el domingo 7 de junio</strong>, ambas en la pista Philippe-Chatrier (15,225 espectadores) a partir de las 15:00. Las entradas para la final van desde 150 EUR hasta más de 540 EUR y se asignan por <Link href="/entradas-roland-garros-2026" className="text-primary font-semibold hover:underline">lotería oficial</Link>.
                </p>
              </div>

              {/* Week 2 Schedule */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Calendario Semana 2: De Cuartos a la Final
                </h2>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-[#ead5cd] rounded-xl overflow-hidden shadow-sm">
                    <thead className="bg-[#1d110c] text-white">
                      <tr>
                        <th className="py-3 px-4 text-left">Fecha</th>
                        <th className="py-3 px-4 text-left">Ronda</th>
                        <th className="py-3 px-4 text-left">Pista</th>
                        <th className="py-3 px-4 text-left">Hora</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#ead5cd]">
                      <tr className="bg-white">
                        <td className="py-3 px-4 font-semibold">Mar 2 junio</td>
                        <td className="py-3 px-4">Cuartos de final (M)</td>
                        <td className="py-3 px-4">Philippe-Chatrier</td>
                        <td className="py-3 px-4">11:00</td>
                      </tr>
                      <tr className="bg-[#fcf9f8]">
                        <td className="py-3 px-4 font-semibold">Mie 3 junio</td>
                        <td className="py-3 px-4">Cuartos de final (F)</td>
                        <td className="py-3 px-4">Philippe-Chatrier</td>
                        <td className="py-3 px-4">11:00</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 font-semibold">Jue 4 junio</td>
                        <td className="py-3 px-4">Semifinales femeninas</td>
                        <td className="py-3 px-4">Philippe-Chatrier</td>
                        <td className="py-3 px-4">15:00</td>
                      </tr>
                      <tr className="bg-[#fcf9f8]">
                        <td className="py-3 px-4 font-semibold">Vie 5 junio</td>
                        <td className="py-3 px-4">Semifinales masculinas</td>
                        <td className="py-3 px-4">Philippe-Chatrier</td>
                        <td className="py-3 px-4">14:30</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 font-semibold">Sáb 6 junio</td>
                        <td className="py-3 px-4 font-bold text-primary">Final femenina</td>
                        <td className="py-3 px-4">Philippe-Chatrier</td>
                        <td className="py-3 px-4">15:00</td>
                      </tr>
                      <tr className="bg-[#fcf9f8]">
                        <td className="py-3 px-4 font-semibold">Dom 7 junio</td>
                        <td className="py-3 px-4 font-bold text-primary">Final masculina</td>
                        <td className="py-3 px-4">Philippe-Chatrier</td>
                        <td className="py-3 px-4">15:00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Ticket Prices */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Precios de Entradas para las Finales
                </h2>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-[#ead5cd] rounded-xl overflow-hidden shadow-sm">
                    <thead className="bg-[#1d110c] text-white">
                      <tr>
                        <th className="py-3 px-4 text-left">Ronda</th>
                        <th className="py-3 px-4 text-left">Cat. 4</th>
                        <th className="py-3 px-4 text-left">Cat. 2-3</th>
                        <th className="py-3 px-4 text-left">Cat. 1</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#ead5cd]">
                      <tr className="bg-white">
                        <td className="py-3 px-4 font-semibold">Cuartos de final</td>
                        <td className="py-3 px-4">120-180 EUR</td>
                        <td className="py-3 px-4">200-300 EUR</td>
                        <td className="py-3 px-4">300-350 EUR</td>
                      </tr>
                      <tr className="bg-[#fcf9f8]">
                        <td className="py-3 px-4 font-semibold">Semifinales</td>
                        <td className="py-3 px-4">140-200 EUR</td>
                        <td className="py-3 px-4">250-380 EUR</td>
                        <td className="py-3 px-4">400-450 EUR</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 font-semibold">Final</td>
                        <td className="py-3 px-4">150-200 EUR</td>
                        <td className="py-3 px-4">280-400 EUR</td>
                        <td className="py-3 px-4">450-540 EUR</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[#a15d45] text-sm mb-4">
                  Los precios son aproximados y pueden variar. Las entradas para finales se asignan principalmente mediante lotería oficial en rolandgarros.com.
                </p>

                <Link
                  href="/entradas-final-roland-garros"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Guía Completa de Entradas para la Final
                  <span className="material-symbols-outlined" style={{fontSize: '20px'}}>arrow_forward</span>
                </Link>
              </section>

              {/* Memorable Finals */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Finales Memorables en la Historia de Roland Garros
                </h2>

                <div className="space-y-4">
                  <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6">
                    <h3 className="text-xl font-bold mb-2 text-[#1d110c]">Nadal vs Federer, 2006</h3>
                    <p className="text-[#1d110c]">
                      Primera final entre los dos grandes rivales en Roland Garros. Nadal ganó 1-6, 6-1, 6-4, 7-6(4), inaugurando una era de dominio absoluto en tierra batida con lo que serían 14 títulos en París.
                    </p>
                  </div>

                  <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6">
                    <h3 className="text-xl font-bold mb-2 text-[#1d110c]">Djokovic vs Tsitsipas, 2021</h3>
                    <p className="text-[#1d110c]">
                      Djokovic remontó dos sets en contra (0-2) para ganar 6-7, 2-6, 6-3, 6-2, 6-4. Una de las remontadas más épicas en finales de Grand Slam, que le permitió completar su segundo Roland Garros.
                    </p>
                  </div>

                  <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6">
                    <h3 className="text-xl font-bold mb-2 text-[#1d110c]">Swiątek, dominadora moderna</h3>
                    <p className="text-[#1d110c]">
                      Iga Swiątek ha ganado 4 títulos en Roland Garros (2020, 2022, 2023, 2024), consolidándose como la jugadora más dominante de su generación en tierra batida, con victorias contundentes en las finales.
                    </p>
                  </div>
                </div>
              </section>

              {/* How to Watch */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Cómo Ver la Final por TV en Español
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#1d110c]">España</h3>
                    <ul className="space-y-2 text-[#1d110c]">
                      <li><strong>Eurosport / DAZN:</strong> Cobertura completa del torneo</li>
                      <li><strong>Movistar+:</strong> A través del canal Eurosport</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#1d110c]">Latinoamérica</h3>
                    <ul className="space-y-2 text-[#1d110c]">
                      <li><strong>ESPN:</strong> Transmisión en toda la región</li>
                      <li><strong>Star+:</strong> Streaming en vivo</li>
                    </ul>
                  </div>
                </div>
              </section>

              <GoalTicketsCTA />

              {/* FAQ Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Preguntas Frecuentes sobre la Final
                </h2>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6">
                      <h3 className="text-lg font-bold mb-2 text-[#1d110c]">{faq.question}</h3>
                      <p className="text-[#1d110c]">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Related Links */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Contenido Relacionado
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <Link
                    href="/entradas-roland-garros-2026"
                    className="block bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow card-hover"
                  >
                    <h3 className="text-lg font-bold mb-2 text-[#1d110c]">Comprar Entradas</h3>
                    <p className="text-sm text-[#a15d45]">
                      Guía completa de entradas para Roland Garros 2026 desde 35 EUR.
                    </p>
                  </Link>

                  <Link
                    href="/estadio-roland-garros/pista-philippe-chatrier"
                    className="block bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow card-hover"
                  >
                    <h3 className="text-lg font-bold mb-2 text-[#1d110c]">Pista Philippe-Chatrier</h3>
                    <p className="text-sm text-[#a15d45]">
                      Todo sobre la pista central donde se juegan las finales.
                    </p>
                  </Link>

                  <Link
                    href="/calendario-roland-garros-2026"
                    className="block bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow card-hover"
                  >
                    <h3 className="text-lg font-bold mb-2 text-[#1d110c]">Calendario Completo</h3>
                    <p className="text-sm text-[#a15d45]">
                      Todas las fechas y horarios del torneo Roland Garros 2026.
                    </p>
                  </Link>
                </div>
              </section>

            </div>
          </div>
        </article>

        <section className="relative py-16 bg-gradient-to-br from-[#1d110c] via-[#2a1a12] to-[#1d110c] overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: "url('/images/heroes/clay-court.jpg')" }} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">¿Listo para Roland Garros 2026?</h2>
            <p className="text-lg mb-8 text-white/70 max-w-xl mx-auto">Asegura tus entradas y vive el torneo más emocionante del tenis</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://goaltickets.com/es/collections/entradas-roland-garros-2026" target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl font-bold hover:bg-orange-600 transition-colors btn-shine">
                <span className="material-symbols-outlined" style={{fontSize: '20px'}}>confirmation_number</span>
                Comprar Entradas
              </a>
              <a href="/" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-3.5 rounded-xl font-bold border border-white/20 hover:bg-white/20 transition-colors">
                Explorar la Guía
                <span className="material-symbols-outlined" style={{fontSize: '20px'}}>arrow_forward</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
