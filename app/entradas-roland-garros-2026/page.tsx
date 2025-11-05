import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { SportsEventSchema } from '@/components/seo/SportsEventSchema'
import { FAQSchema } from '@/components/seo/FAQSchema'

export const metadata: Metadata = {
  title: 'Entradas Roland Garros 2026: Tipos, Precios y Dónde Comprar',
  description: 'Guía completa de entradas para Roland Garros 2026: tipos de tickets, precios actualizados, ground pass, mejores asientos y dónde comprar de forma segura.',
  keywords: [
    'entradas roland garros 2026',
    'roland garros entradas',
    'tickets roland garros',
    'ground pass roland garros',
    'precio entradas roland garros',
    'comprar entradas roland garros',
    'entradas roland garros oficiales',
    'roland garros 2026 tickets'
  ],
  openGraph: {
    title: 'Entradas Roland Garros 2026: Guía Completa de Tipos y Precios',
    description: 'Todo sobre las entradas para Roland Garros 2026: tipos, precios, ground pass, mejores asientos y dónde comprar de forma oficial.',
    type: 'article',
    url: 'https://entradasrolandgarros.com/entradas-roland-garros-2026',
  },
  alternates: {
    canonical: 'https://entradasrolandgarros.com/entradas-roland-garros-2026',
  },
}

const faqs = [
  {
    question: '¿Cuándo salen a la venta las entradas para Roland Garros 2026?',
    answer: 'Las entradas oficiales para Roland Garros 2026 saldrán a la venta a principios de 2026, típicamente en febrero o marzo. El proceso incluye un sistema de lotería para las entradas más demandadas de las finales y semifinales.'
  },
  {
    question: '¿Cuánto cuestan las entradas de Roland Garros?',
    answer: 'Los precios varían ampliamente: el ground pass cuesta entre €35-50 en primera semana y hasta €85 en finales. Entradas individuales para pistas principales van desde €65 en primeras rondas hasta más de €500 para las finales en Philippe-Chatrier.'
  },
  {
    question: '¿Qué es el ground pass de Roland Garros?',
    answer: 'El ground pass es una entrada que te da acceso a todas las pistas exteriores, excepto las tres principales (Philippe-Chatrier, Suzanne-Lenglen y Simonne-Mathieu). Es la opción más económica y ofrece gran valor en la primera semana del torneo.'
  },
  {
    question: '¿Dónde comprar entradas oficiales para Roland Garros?',
    answer: 'Las entradas oficiales se compran únicamente en rolandgarros.com, el sitio web oficial de la Fédération Française de Tennis (FFT). Desconfía de revendedores no autorizados que pueden vender entradas falsas o a precios inflados.'
  },
  {
    question: '¿Se pueden comprar entradas el mismo día del evento?',
    answer: 'Sí, durante la primera semana del torneo suelen estar disponibles entradas el mismo día, especialmente ground passes. Sin embargo, para las rondas finales y partidos importantes, es muy difícil conseguir entradas de último momento.'
  },
  {
    question: '¿Los niños necesitan entrada para Roland Garros?',
    answer: 'Los niños menores de 4 años entran gratis si no ocupan asiento. Niños de 4 años en adelante necesitan su propia entrada. Existen precios reducidos para menores de 12 años en algunas categorías de entradas.'
  }
]

export default function EntradasRolandGarrosPage() {
  return (
    <>
      <SportsEventSchema
        name="Roland Garros 2026"
        startDate="2026-05-24"
        endDate="2026-06-07"
        description="Entradas para Roland Garros 2026 - French Open"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-[#fcf9f8]">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-[#ead5cd] py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: 'Entradas Roland Garros 2026', url: 'https://entradasrolandgarros.com/entradas-roland-garros-2026' }
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-white py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1d110c] mb-6">
                Entradas Roland Garros 2026: Tipos, Precios y Dónde Comprar
              </h1>
              <p className="text-xl text-[#a15d45] mb-8">
                Guía completa para conseguir tus entradas oficiales al torneo de tenis más prestigioso en tierra batida
              </p>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-8 text-[#1d110c]">
              Explora por Sección
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <Link
                href="/entradas-roland-garros-2026/tipos-de-entradas"
                className="bg-white p-6 rounded-xl shadow-sm border border-[#ead5cd] hover:shadow-md transition-shadow text-center"
              >
                <span className="material-symbols-outlined text-primary block mb-3" style={{fontSize: '32px'}}>
                  confirmation_number
                </span>
                <div className="font-semibold text-[#1d110c]">Tipos de Entradas</div>
              </Link>
              <Link
                href="/entradas-roland-garros-2026/ground-pass"
                className="bg-white p-6 rounded-xl shadow-sm border border-[#ead5cd] hover:shadow-md transition-shadow text-center"
              >
                <span className="material-symbols-outlined text-primary block mb-3" style={{fontSize: '32px'}}>
                  badge
                </span>
                <div className="font-semibold text-[#1d110c]">Ground Pass</div>
              </Link>
              <Link
                href="/entradas-roland-garros-2026/precios"
                className="bg-white p-6 rounded-xl shadow-sm border border-[#ead5cd] hover:shadow-md transition-shadow text-center"
              >
                <span className="material-symbols-outlined text-primary block mb-3" style={{fontSize: '32px'}}>
                  payments
                </span>
                <div className="font-semibold text-[#1d110c]">Precios</div>
              </Link>
              <Link
                href="/entradas-roland-garros-2026/donde-comprar"
                className="bg-white p-6 rounded-xl shadow-sm border border-[#ead5cd] hover:shadow-md transition-shadow text-center"
              >
                <span className="material-symbols-outlined text-primary block mb-3" style={{fontSize: '32px'}}>
                  shopping_cart
                </span>
                <div className="font-semibold text-[#1d110c]">Dónde Comprar</div>
              </Link>
              <Link
                href="/entradas-roland-garros-2026/mejores-asientos"
                className="bg-white p-6 rounded-xl shadow-sm border border-[#ead5cd] hover:shadow-md transition-shadow text-center"
              >
                <span className="material-symbols-outlined text-primary block mb-3" style={{fontSize: '32px'}}>
                  event_seat
                </span>
                <div className="font-semibold text-[#1d110c]">Mejores Asientos</div>
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">

              {/* Introduction */}
              <section>
                <p className="text-lg text-[#1d110c] leading-relaxed mb-6">
                  Conseguir entradas para Roland Garros 2026 requiere planificación y conocimiento del sistema de venta oficial.
                  Este torneo del Grand Slam es uno de los eventos deportivos más demandados del mundo, con miles de aficionados
                  compitiendo por un número limitado de asientos disponibles cada año.
                </p>
                <p className="text-lg text-[#1d110c] leading-relaxed">
                  En esta guía completa, te explicaremos todos los tipos de entradas disponibles, desde el popular ground pass
                  hasta los asientos premium en la pista Philippe-Chatrier, cómo funciona el proceso de venta oficial, qué
                  precios esperar según la ronda y el asiento, y cómo evitar estafas en el mercado secundario.
                </p>
              </section>

              {/* Visión General */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Visión General del Sistema de Entradas
                </h2>

                <div className="bg-white border-l-4 border-primary p-6 rounded-xl shadow-sm mb-6">
                  <h3 className="text-xl font-bold mb-3 text-[#1d110c]">Información Importante</h3>
                  <p className="text-[#1d110c] mb-4">
                    La <strong>Fédération Française de Tennis (FFT)</strong> es el único vendedor oficial de entradas para
                    Roland Garros. Todas las entradas legítimas se venden a través de su plataforma oficial en rolandgarros.com.
                  </p>
                  <p className="text-[#1d110c]">
                    Las entradas para las rondas finales (semifinales y finales) se asignan principalmente mediante un
                    <strong> sistema de lotería</strong> que se realiza varios meses antes del torneo, mientras que las
                    entradas para las primeras rondas se venden por orden de llegada.
                  </p>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-[#1d110c]">Calendario de Venta de Entradas 2026</h3>
                <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6">
                  <ul className="space-y-3 text-[#1d110c]">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1" style={{fontSize: '24px'}}>
                        schedule
                      </span>
                      <div>
                        <span className="font-bold text-primary">Enero-Febrero:</span> Inscripción para la lotería de finales y semifinales
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1" style={{fontSize: '24px'}}>
                        schedule
                      </span>
                      <div>
                        <span className="font-bold text-primary">Marzo:</span> Resultados de la lotería y venta de entradas para primeras rondas
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1" style={{fontSize: '24px'}}>
                        schedule
                      </span>
                      <div>
                        <span className="font-bold text-primary">Abril-Mayo:</span> Venta continua de entradas disponibles y reventa oficial
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1" style={{fontSize: '24px'}}>
                        schedule
                      </span>
                      <div>
                        <span className="font-bold text-primary">Durante el torneo:</span> Ground passes y algunas entradas individuales disponibles diariamente
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Tipos de Entradas */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Principales Tipos de Entradas
                </h2>

                <div className="grid gap-6">
                  {/* Ground Pass */}
                  <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary" style={{fontSize: '32px'}}>
                          badge
                        </span>
                        <h3 className="text-2xl font-bold text-[#1d110c]">Ground Pass</h3>
                      </div>
                      <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                        Mejor valor
                      </span>
                    </div>
                    <p className="text-[#1d110c] mb-4">
                      Acceso a todas las pistas exteriores (excepto Philippe-Chatrier, Suzanne-Lenglen y Simonne-Mathieu).
                      Perfecto para ver múltiples partidos en un día y descubrir nuevos talentos.
                    </p>
                    <div className="bg-[#fcf9f8] p-4 rounded-lg mb-4">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-[#1d110c]">Precio aproximado:</span>
                        <span className="text-primary font-bold text-xl">€35-85</span>
                      </div>
                      <div className="text-sm text-[#a15d45] mt-2">
                        Varía según la semana del torneo
                      </div>
                    </div>
                    <Link
                      href="/entradas-roland-garros-2026/ground-pass"
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                    >
                      Ver guía completa del Ground Pass
                      <span className="material-symbols-outlined" style={{fontSize: '20px'}}>arrow_forward</span>
                    </Link>
                  </div>

                  {/* Entradas Individuales */}
                  <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-primary" style={{fontSize: '32px'}}>
                        confirmation_number
                      </span>
                      <h3 className="text-2xl font-bold text-[#1d110c]">Entradas Individuales para Pistas Principales</h3>
                    </div>
                    <p className="text-[#1d110c] mb-4">
                      Asiento asignado en una de las tres pistas principales. Incluye acceso ground pass el mismo día.
                    </p>
                    <div className="space-y-3 mb-4">
                      <div className="bg-[#fcf9f8] p-4 rounded-lg">
                        <div className="font-semibold mb-2 text-[#1d110c]">Philippe-Chatrier (Pista Central)</div>
                        <div className="flex justify-between">
                          <span className="text-sm text-[#a15d45]">Primera semana:</span>
                          <span className="font-bold text-primary">€65-250</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-[#a15d45]">Finales:</span>
                          <span className="font-bold text-primary">€150-540</span>
                        </div>
                      </div>
                      <div className="bg-[#fcf9f8] p-4 rounded-lg">
                        <div className="font-semibold mb-2 text-[#1d110c]">Suzanne-Lenglen (Pista 2)</div>
                        <div className="flex justify-between">
                          <span className="text-sm text-[#a15d45]">Primera semana:</span>
                          <span className="font-bold text-primary">€50-180</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-[#a15d45]">Semifinales:</span>
                          <span className="font-bold text-primary">€90-320</span>
                        </div>
                      </div>
                      <div className="bg-[#fcf9f8] p-4 rounded-lg">
                        <div className="font-semibold mb-2 text-[#1d110c]">Simonne-Mathieu (Pista 3)</div>
                        <div className="flex justify-between">
                          <span className="text-sm text-[#a15d45]">Rango de precios:</span>
                          <span className="font-bold text-primary">€45-200</span>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/entradas-roland-garros-2026/tipos-de-entradas"
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                    >
                      Ver todos los tipos de entradas
                      <span className="material-symbols-outlined" style={{fontSize: '20px'}}>arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </section>

              {/* Precios Table */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Rango de Precios por Ronda
                </h2>

                <p className="text-[#1d110c] mb-6">
                  Los precios de las entradas varían significativamente según la ronda del torneo, la pista y la ubicación
                  del asiento. Aquí tienes una guía general de lo que puedes esperar:
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-[#ead5cd] rounded-xl overflow-hidden shadow-sm">
                    <thead className="bg-[#1d110c] text-white">
                      <tr>
                        <th className="py-3 px-4 text-left">Ronda</th>
                        <th className="py-3 px-4 text-left">Ground Pass</th>
                        <th className="py-3 px-4 text-left">Pistas Principales</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#ead5cd]">
                      <tr className="bg-white">
                        <td className="py-3 px-4 font-semibold text-[#1d110c]">Primera Ronda</td>
                        <td className="py-3 px-4 text-[#1d110c]">€35-45</td>
                        <td className="py-3 px-4 text-[#1d110c]">€65-180</td>
                      </tr>
                      <tr className="bg-[#fcf9f8]">
                        <td className="py-3 px-4 font-semibold text-[#1d110c]">Segunda Ronda</td>
                        <td className="py-3 px-4 text-[#1d110c]">€40-50</td>
                        <td className="py-3 px-4 text-[#1d110c]">€75-200</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 font-semibold text-[#1d110c]">Tercera Ronda</td>
                        <td className="py-3 px-4 text-[#1d110c]">€45-55</td>
                        <td className="py-3 px-4 text-[#1d110c]">€85-220</td>
                      </tr>
                      <tr className="bg-[#fcf9f8]">
                        <td className="py-3 px-4 font-semibold text-[#1d110c]">Octavos de Final</td>
                        <td className="py-3 px-4 text-[#1d110c]">€55-65</td>
                        <td className="py-3 px-4 text-[#1d110c]">€100-280</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 font-semibold text-[#1d110c]">Cuartos de Final</td>
                        <td className="py-3 px-4 text-[#1d110c]">€65-75</td>
                        <td className="py-3 px-4 text-[#1d110c]">€120-350</td>
                      </tr>
                      <tr className="bg-[#fcf9f8]">
                        <td className="py-3 px-4 font-semibold text-[#1d110c]">Semifinales</td>
                        <td className="py-3 px-4 text-[#1d110c]">€75-85</td>
                        <td className="py-3 px-4 text-[#1d110c]">€140-450</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 font-semibold text-[#1d110c]">Finales</td>
                        <td className="py-3 px-4 text-[#1d110c]">€75-85</td>
                        <td className="py-3 px-4 text-[#1d110c]">€150-540</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <Link
                  href="/entradas-roland-garros-2026/precios"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Ver Desglose Completo de Precios
                  <span className="material-symbols-outlined" style={{fontSize: '20px'}}>arrow_forward</span>
                </Link>
              </section>

              {/* FAQ Section */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Preguntas Frecuentes sobre Entradas
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
                  Explora Más sobre Entradas
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <Link
                    href="/entradas-roland-garros-2026/tipos-de-entradas"
                    className="block bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2 text-[#1d110c]">Tipos de Entradas</h3>
                    <p className="text-[#1d110c] mb-3">
                      Guía detallada de cada tipo de entrada: ground pass, individuales, paquetes y más.
                    </p>
                    <span className="text-primary font-semibold inline-flex items-center gap-1">
                      Leer más
                      <span className="material-symbols-outlined" style={{fontSize: '18px'}}>arrow_forward</span>
                    </span>
                  </Link>

                  <Link
                    href="/entradas-roland-garros-2026/ground-pass"
                    className="block bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2 text-[#1d110c]">Ground Pass Completo</h3>
                    <p className="text-[#1d110c] mb-3">
                      Todo sobre el ground pass: acceso, ventajas, mejores días y cómo aprovecharlo al máximo.
                    </p>
                    <span className="text-primary font-semibold inline-flex items-center gap-1">
                      Leer más
                      <span className="material-symbols-outlined" style={{fontSize: '18px'}}>arrow_forward</span>
                    </span>
                  </Link>

                  <Link
                    href="/entradas-roland-garros-2026/precios"
                    className="block bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2 text-[#1d110c]">Precios Detallados</h3>
                    <p className="text-[#1d110c] mb-3">
                      Tablas completas de precios por ronda, pista, categoría y consejos para economizar.
                    </p>
                    <span className="text-primary font-semibold inline-flex items-center gap-1">
                      Leer más
                      <span className="material-symbols-outlined" style={{fontSize: '18px'}}>arrow_forward</span>
                    </span>
                  </Link>

                  <Link
                    href="/entradas-roland-garros-2026/donde-comprar"
                    className="block bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2 text-[#1d110c]">Dónde Comprar</h3>
                    <p className="text-[#1d110c] mb-3">
                      Canales oficiales, proceso de compra paso a paso y cómo evitar estafas.
                    </p>
                    <span className="text-primary font-semibold inline-flex items-center gap-1">
                      Leer más
                      <span className="material-symbols-outlined" style={{fontSize: '18px'}}>arrow_forward</span>
                    </span>
                  </Link>

                  <Link
                    href="/entradas-roland-garros-2026/mejores-asientos"
                    className="block bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2 text-[#1d110c]">Mejores Asientos</h3>
                    <p className="text-[#1d110c] mb-3">
                      Guía de asientos por pista, consideraciones de sol/sombra y vistas óptimas.
                    </p>
                    <span className="text-primary font-semibold inline-flex items-center gap-1">
                      Leer más
                      <span className="material-symbols-outlined" style={{fontSize: '18px'}}>arrow_forward</span>
                    </span>
                  </Link>

                  <Link
                    href="/calendario-roland-garros-2026"
                    className="block bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2 text-[#1d110c]">Calendario 2026</h3>
                    <p className="text-[#1d110c] mb-3">
                      Fechas exactas de cada ronda para planificar qué días comprar entradas.
                    </p>
                    <span className="text-primary font-semibold inline-flex items-center gap-1">
                      Leer más
                      <span className="material-symbols-outlined" style={{fontSize: '18px'}}>arrow_forward</span>
                    </span>
                  </Link>
                </div>
              </section>

            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#1d110c]">
              ¿Listo para Asistir a Roland Garros 2026?
            </h2>
            <p className="text-xl mb-8 text-[#a15d45]">
              Explora más guías para planificar tu viaje perfecto
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/calendario-roland-garros-2026"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                Ver Calendario Completo
                <span className="material-symbols-outlined" style={{fontSize: '20px'}}>arrow_forward</span>
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-bold border-2 border-primary hover:bg-[#fcf9f8] transition-colors"
              >
                Volver al Inicio
                <span className="material-symbols-outlined" style={{fontSize: '20px'}}>arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
