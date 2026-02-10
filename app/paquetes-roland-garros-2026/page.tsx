import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { ArticleSchema } from '@/components/seo/ArticleSchema'

export const metadata: Metadata = {
  title: 'Paquetes Roland Garros 2026: Vuelo + Hotel + Entradas desde España y LATAM',
  description: 'Planifica tu viaje completo a Roland Garros 2026: paquetes de vuelo, hotel y entradas. Presupuestos por perfil, timeline de reservas y recomendaciones de alojamiento cerca del estadio.',
  keywords: [
    'paquetes roland garros 2026',
    'viaje roland garros',
    'vuelo hotel entradas roland garros',
    'paquete deportivo roland garros',
    'viaje paris roland garros',
    'planificar viaje roland garros'
  ],
  openGraph: {
    title: 'Paquetes Roland Garros 2026: Planifica tu Viaje Completo',
    description: 'Guía de planificación DIY: vuelos, hoteles y entradas para Roland Garros 2026.',
    type: 'article',
    url: 'https://entradasrolandgarros.com/paquetes-roland-garros-2026',
  },
  alternates: {
    canonical: 'https://entradasrolandgarros.com/paquetes-roland-garros-2026',
  },
}

const faqs = [
  {
    question: '¿Cuánto cuesta un viaje completo a Roland Garros?',
    answer: 'Depende del origen y nivel de comodidad. Desde España: €800-2,500 por persona. Desde Latinoamérica: $1,900-4,000 USD. Estos rangos incluyen vuelo, hotel (5-7 noches), entradas (2-3 días) y gastos de comida y transporte.'
  },
  {
    question: '¿Cuándo debo empezar a planificar mi viaje?',
    answer: 'Idealmente 6-8 meses antes del torneo (octubre-noviembre). Esto te permite: encontrar vuelos a mejor precio, reservar hotel en zona cercana al estadio, participar en la lotería oficial de entradas, y tener tiempo para buscar alternativas si no obtienes entradas oficiales.'
  },
  {
    question: '¿Cuántos días necesito para disfrutar Roland Garros?',
    answer: 'Recomendamos un mínimo de 5 noches en París: 2-3 días de torneo y 2-3 días para explorar la ciudad. Si solo quieres tenis, 3 noches son suficientes. Para la experiencia completa (turismo + torneo), 7 noches es ideal.'
  },
  {
    question: '¿Es mejor armar el paquete por mi cuenta o comprar uno organizado?',
    answer: 'Armar el paquete DIY (vuelo + hotel + entradas por separado) suele ser más económico y flexible. Los paquetes organizados son más cómodos pero cuestan 30-50% más. Nuestra recomendación: reserva vuelo y hotel por tu cuenta, y compra entradas a través del canal oficial o plataformas especializadas como GoalTickets.'
  }
]

export default function PaquetesPage() {
  return (
    <>
      <ArticleSchema
        headline="Paquetes Roland Garros 2026"
        description="Guía de planificación DIY para tu viaje a Roland Garros"
        image="https://entradasrolandgarros.com/images/hero/rolandgarros2026.jpg"
        datePublished="2026-02-09"
        dateModified="2026-02-09"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-[#fcf9f8]">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-[#ead5cd] py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: 'Paquetes Roland Garros 2026', url: 'https://entradasrolandgarros.com/paquetes-roland-garros-2026' }
              ]}
            />
          </div>
        </div>

        {/* Hero */}
        <section className="bg-[#1d110c] text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Paquetes Roland Garros 2026: Planifica tu Viaje Completo
            </h1>
            <p className="text-xl text-[#ead5cd]">
              Guía DIY: vuelos + hotel + entradas con presupuestos reales y timeline de reservas
            </p>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 space-y-12">

            {/* Introduction */}
            <section>
              <p className="text-lg text-[#1d110c] leading-relaxed mb-6">
                Planificar un viaje a Roland Garros no tiene por qué ser complicado ni excesivamente caro. Con la estrategia correcta, puedes armar tu propio paquete de vuelo, hotel y entradas que se ajuste a tu presupuesto y preferencias, obteniendo mejor valor que los paquetes turísticos organizados.
              </p>
              <p className="text-lg text-[#1d110c] leading-relaxed">
                Esta guía te da un plan paso a paso con presupuestos reales, timeline de reservas y recomendaciones probadas para cada componente de tu viaje.
              </p>
            </section>

            {/* Timeline */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                Timeline de Planificación
              </h2>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-24 shrink-0 text-right">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">Oct-Nov</span>
                  </div>
                  <div className="bg-white border border-[#ead5cd] rounded-xl p-4 flex-1">
                    <h3 className="font-bold text-[#1d110c] mb-1">Reservar vuelos</h3>
                    <p className="text-sm text-[#a15d45]">Los mejores precios se encuentran 6-8 meses antes. Busca vuelos a París CDG o ORY.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-24 shrink-0 text-right">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">Dic-Ene</span>
                  </div>
                  <div className="bg-white border border-[#ead5cd] rounded-xl p-4 flex-1">
                    <h3 className="font-bold text-[#1d110c] mb-1">Reservar alojamiento</h3>
                    <p className="text-sm text-[#a15d45]">Hoteles cerca del estadio se agotan rápido. Distrito 16 o Boulogne-Billancourt son ideales.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-24 shrink-0 text-right">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">Feb-Mar</span>
                  </div>
                  <div className="bg-white border border-[#ead5cd] rounded-xl p-4 flex-1">
                    <h3 className="font-bold text-[#1d110c] mb-1">Inscribirse en la lotería de entradas</h3>
                    <p className="text-sm text-[#a15d45]">Registrarse en rolandgarros.com para la lotería de finales/semifinales.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-24 shrink-0 text-right">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">Mar-Abr</span>
                  </div>
                  <div className="bg-white border border-[#ead5cd] rounded-xl p-4 flex-1">
                    <h3 className="font-bold text-[#1d110c] mb-1">Comprar entradas</h3>
                    <p className="text-sm text-[#a15d45]">Venta general de entradas para primeras rondas. Si no obtuviste en lotería, buscar alternativas.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-24 shrink-0 text-right">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">May</span>
                  </div>
                  <div className="bg-white border border-[#ead5cd] rounded-xl p-4 flex-1">
                    <h3 className="font-bold text-[#1d110c] mb-1">Preparar el viaje</h3>
                    <p className="text-sm text-[#a15d45]">Descargar apps (Roland Garros, RATP, Google Maps offline). Verificar documentos de viaje.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Budget Profiles */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                Presupuestos por Perfil de Viajero
              </h2>

              <div className="space-y-6">
                {/* Budget */}
                <div className="bg-white border-2 border-green-400 rounded-xl overflow-hidden">
                  <div className="bg-green-600 text-white p-4">
                    <h3 className="text-xl font-bold">Presupuesto Económico</h3>
                    <p className="text-green-100 text-sm">5 noches, primera semana, ground pass</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-[#1d110c]">Vuelo (España) / (LATAM)</span>
                        <span className="font-semibold text-[#1d110c]">€100-300 / $800-1,200</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-[#1d110c]">Hotel (hostal/Airbnb, 5 noches)</span>
                        <span className="font-semibold text-[#1d110c]">€250-500</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-[#1d110c]">Entradas (2x ground pass)</span>
                        <span className="font-semibold text-[#1d110c]">€70-100</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-[#1d110c]">Comida y transporte</span>
                        <span className="font-semibold text-[#1d110c]">€200-350</span>
                      </div>
                      <div className="flex justify-between font-bold border-t border-[#ead5cd] pt-2 mt-2">
                        <span className="text-[#1d110c]">Total (desde España)</span>
                        <span className="text-green-600">€620-1,250</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mid-range */}
                <div className="bg-white border-2 border-blue-400 rounded-xl overflow-hidden">
                  <div className="bg-blue-600 text-white p-4">
                    <h3 className="text-xl font-bold">Presupuesto Medio</h3>
                    <p className="text-blue-100 text-sm">6 noches, primera + segunda semana, pista principal</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-[#1d110c]">Vuelo (España) / (LATAM)</span>
                        <span className="font-semibold text-[#1d110c]">€150-400 / $900-1,500</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-[#1d110c]">Hotel (3 estrellas, 6 noches)</span>
                        <span className="font-semibold text-[#1d110c]">€500-900</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-[#1d110c]">Entradas (ground pass + cuartos de final)</span>
                        <span className="font-semibold text-[#1d110c]">€200-400</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-[#1d110c]">Comida y transporte</span>
                        <span className="font-semibold text-[#1d110c]">€350-500</span>
                      </div>
                      <div className="flex justify-between font-bold border-t border-[#ead5cd] pt-2 mt-2">
                        <span className="text-[#1d110c]">Total (desde España)</span>
                        <span className="text-blue-600">€1,200-2,200</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Premium */}
                <div className="bg-white border-2 border-primary rounded-xl overflow-hidden">
                  <div className="bg-primary text-white p-4">
                    <h3 className="text-xl font-bold">Presupuesto Premium</h3>
                    <p className="text-orange-100 text-sm">7 noches, finales, mejores asientos</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-[#1d110c]">Vuelo (España) / (LATAM)</span>
                        <span className="font-semibold text-[#1d110c]">€200-600 / $1,000-1,800</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-[#1d110c]">Hotel (4 estrellas distrito 16, 7 noches)</span>
                        <span className="font-semibold text-[#1d110c]">€900-1,500</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-[#1d110c]">Entradas (semi + final Cat 1-2)</span>
                        <span className="font-semibold text-[#1d110c]">€500-1,000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-[#1d110c]">Comida y transporte</span>
                        <span className="font-semibold text-[#1d110c]">€500-700</span>
                      </div>
                      <div className="flex justify-between font-bold border-t border-[#ead5cd] pt-2 mt-2">
                        <span className="text-[#1d110c]">Total (desde España)</span>
                        <span className="text-primary">€2,100-3,800</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Tickets component */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                Componente de Entradas: Tus Opciones
              </h2>

              <div className="space-y-4">
                <div className="bg-white border border-[#ead5cd] rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-2 text-[#1d110c]">Canal oficial (rolandgarros.com)</h3>
                  <p className="text-[#1d110c] text-sm">
                    Mejores precios pero disponibilidad limitada y sistema de lotería para finales. Ideal si puedes planificar con mucha anticipación.
                  </p>
                </div>

                <div className="bg-white border border-[#ead5cd] rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-2 text-[#1d110c]">Plataformas especializadas internacionales</h3>
                  <p className="text-[#1d110c] text-sm mb-3">
                    Para asegurar fechas específicas o si la lotería oficial está agotada. Plataformas como{' '}
                    <a
                      href="https://goaltickets.com/es/collections/entradas-roland-garros-2026"
                      target="_blank"
                      rel="noopener"
                      className="text-primary font-semibold hover:underline"
                    >
                      GoalTickets
                    </a>{' '}
                    ofrecen precios actualizados con disponibilidad real y garantía de autenticidad.
                  </p>
                </div>
              </div>
            </section>

            {/* Hotel recommendations */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                Zonas Recomendadas de Alojamiento
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-[#ead5cd] rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-2 text-[#1d110c]">Distrito 16 (Auteuil/Passy)</h3>
                  <p className="text-sm text-[#a15d45] mb-2">A 5-15 min a pie del estadio</p>
                  <p className="text-sm text-[#1d110c]">La zona más cercana, elegante y tranquila. Precios más altos pero máxima comodidad. Ideal para presupuesto premium.</p>
                </div>

                <div className="bg-white border border-[#ead5cd] rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-2 text-[#1d110c]">Boulogne-Billancourt</h3>
                  <p className="text-sm text-[#a15d45] mb-2">A 10-20 min en metro</p>
                  <p className="text-sm text-[#1d110c]">Ciudad vecina con buenos hoteles a precios más accesibles. Excelente conexión de metro. Mejor relación calidad-precio.</p>
                </div>

                <div className="bg-white border border-[#ead5cd] rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-2 text-[#1d110c]">Distrito 15 (Commerce/Grenelle)</h3>
                  <p className="text-sm text-[#a15d45] mb-2">A 20-30 min en metro</p>
                  <p className="text-sm text-[#1d110c]">Barrio residencial con buena oferta de hoteles y restaurantes. Conexión fácil por línea 10 de metro directo.</p>
                </div>

                <div className="bg-white border border-[#ead5cd] rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-2 text-[#1d110c]">Centro de París (1-6)</h3>
                  <p className="text-sm text-[#a15d45] mb-2">A 30-40 min en metro</p>
                  <p className="text-sm text-[#1d110c]">Ideal si quieres combinar turismo con tenis. Más lejos del estadio pero cerca de las principales atracciones. Mejor para viajes largos.</p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                Preguntas Frecuentes
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white border border-[#ead5cd] rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-2 text-[#1d110c]">{faq.question}</h3>
                    <p className="text-[#1d110c]">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                Guías Relacionadas
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  href="/entradas-roland-garros-2026/donde-comprar"
                  className="block bg-white border border-[#ead5cd] rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-2 text-[#1d110c]">Dónde Comprar Entradas</h3>
                  <p className="text-[#a15d45] text-sm mb-3">Guía completa de opciones de compra.</p>
                  <span className="text-primary font-semibold">Leer más →</span>
                </Link>
                <Link
                  href="/alojamiento-paris"
                  className="block bg-white border border-[#ead5cd] rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-2 text-[#1d110c]">Alojamiento en París</h3>
                  <p className="text-[#a15d45] text-sm mb-3">Hoteles y zonas recomendadas en detalle.</p>
                  <span className="text-primary font-semibold">Leer más →</span>
                </Link>
                <Link
                  href="/comprar-entradas-roland-garros-desde-latinoamerica"
                  className="block bg-white border border-[#ead5cd] rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-2 text-[#1d110c]">Comprar desde Latinoamérica</h3>
                  <p className="text-[#a15d45] text-sm mb-3">Guía específica para compradores hispanos.</p>
                  <span className="text-primary font-semibold">Leer más →</span>
                </Link>
                <Link
                  href="/guia-completa/como-llegar"
                  className="block bg-white border border-[#ead5cd] rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-2 text-[#1d110c]">Cómo Llegar al Estadio</h3>
                  <p className="text-[#a15d45] text-sm mb-3">Transporte público y rutas hasta Roland Garros.</p>
                  <span className="text-primary font-semibold">Leer más →</span>
                </Link>
              </div>
            </section>

          </div>
        </article>
      </div>
    </>
  )
}
