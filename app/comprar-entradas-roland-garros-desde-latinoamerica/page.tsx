import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { ArticleSchema } from '@/components/seo/ArticleSchema'

export const metadata: Metadata = {
  title: 'Comprar Entradas Roland Garros desde Latinoamérica: Guía para Hispanos',
  description: 'Guía completa para comprar entradas de Roland Garros 2026 desde México, Argentina, Colombia, Chile y toda Latinoamérica. Alternativas a la lotería oficial, plataformas verificadas y consejos prácticos.',
  keywords: [
    'comprar entradas roland garros desde latinoamerica',
    'entradas roland garros mexico',
    'roland garros desde argentina',
    'boletos roland garros colombia',
    'entradas roland garros chile',
    'como comprar entradas roland garros internacional',
    'roland garros compradores internacionales'
  ],
  openGraph: {
    title: 'Comprar Entradas Roland Garros desde Latinoamérica',
    description: 'Guía para hispanos: cómo comprar entradas para Roland Garros 2026 desde cualquier país de habla hispana.',
    type: 'article',
    url: 'https://entradasrolandgarros.com/comprar-entradas-roland-garros-desde-latinoamerica',
  },
  alternates: {
    canonical: 'https://entradasrolandgarros.com/comprar-entradas-roland-garros-desde-latinoamerica',
  },
}

const faqs = [
  {
    question: '¿Puedo comprar entradas para Roland Garros desde México o Argentina?',
    answer: 'Sí, puedes comprar entradas oficiales a través de rolandgarros.com desde cualquier país. Sin embargo, el sistema de lotería y la web están orientados al público francés y europeo. Plataformas internacionales especializadas como GoalTickets ofrecen una alternativa más accesible para compradores latinoamericanos, con interfaz en español y métodos de pago internacionales.'
  },
  {
    question: '¿Qué métodos de pago aceptan para compradores internacionales?',
    answer: 'El sitio oficial de Roland Garros acepta tarjetas de crédito internacionales (Visa, Mastercard). Sin embargo, algunas tarjetas latinoamericanas pueden ser rechazadas por restricciones de la pasarela de pago francesa. Plataformas como GoalTickets aceptan una variedad más amplia de métodos de pago internacionales.'
  },
  {
    question: '¿Las entradas compradas internacionalmente funcionan igual?',
    answer: 'Sí, las entradas son digitales y se transfieren a través de la app oficial del torneo. No importa desde qué país las compres, funcionan exactamente igual. Lo importante es asegurarte de que la plataforma donde compras realice la transferencia oficial por la app.'
  },
  {
    question: '¿Necesito visa para ir a Roland Garros desde Latinoamérica?',
    answer: 'Depende de tu nacionalidad. Ciudadanos de México, Argentina, Chile, Colombia, Perú, Uruguay, Brasil y otros países tienen acceso sin visa a la zona Schengen por hasta 90 días como turistas. Verifica los requisitos específicos para tu pasaporte antes de comprar entradas.'
  }
]

export default function ComprarDesdeLatamPage() {
  return (
    <>
      <ArticleSchema
        headline="Comprar Entradas Roland Garros desde Latinoamérica"
        description="Guía completa para compradores hispanos internacionales"
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
                { name: 'Comprar desde Latinoamérica', url: 'https://entradasrolandgarros.com/comprar-entradas-roland-garros-desde-latinoamerica' }
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-[#1d110c] text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprar Entradas para Roland Garros desde Latinoamérica
            </h1>
            <p className="text-xl text-[#ead5cd]">
              Guía completa para hispanohablantes: supera las barreras del sistema francés y consigue tus boletos
            </p>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 space-y-12">

            {/* Introduction */}
            <section>
              <p className="text-lg text-[#1d110c] leading-relaxed mb-6">
                Asistir a Roland Garros es el sueño de miles de aficionados al tenis en México, Argentina, Colombia, Chile y toda Latinoamérica. Sin embargo, el proceso de compra de entradas puede ser complicado para compradores internacionales: el sitio oficial está centrado en el público francés, el sistema de lotería tiene horarios europeos, y los métodos de pago no siempre son compatibles.
              </p>
              <p className="text-lg text-[#1d110c] leading-relaxed">
                Esta guía te explica paso a paso las opciones reales que tienes para conseguir tus entradas, qué dificultades puedes encontrar, y cuáles son las alternativas más confiables para compradores hispanos.
              </p>
            </section>

            {/* Pain Points */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                Desafíos para Compradores Latinoamericanos
              </h2>

              <div className="space-y-4">
                <div className="bg-white border border-[#ead5cd] rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#1d110c]">
                    <span className="material-symbols-outlined text-primary align-middle mr-2" style={{fontSize: '24px'}}>language</span>
                    Barrera del idioma
                  </h3>
                  <p className="text-[#1d110c]">
                    El sitio oficial de Roland Garros (rolandgarros.com) está principalmente en francés e inglés. Aunque tiene traducción parcial, el proceso de compra, los términos y condiciones, y las instrucciones de la lotería pueden resultar confusos si no dominas estos idiomas.
                  </p>
                </div>

                <div className="bg-white border border-[#ead5cd] rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#1d110c]">
                    <span className="material-symbols-outlined text-primary align-middle mr-2" style={{fontSize: '24px'}}>schedule</span>
                    Zona horaria desfavorable
                  </h3>
                  <p className="text-[#1d110c]">
                    La venta de entradas y los resultados de la lotería se publican en horario europeo (CET/CEST). Cuando son las 10:00 AM en París, son las 3:00 AM en Ciudad de México o las 6:00 AM en Buenos Aires. Las entradas más demandadas se agotan en minutos.
                  </p>
                </div>

                <div className="bg-white border border-[#ead5cd] rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#1d110c]">
                    <span className="material-symbols-outlined text-primary align-middle mr-2" style={{fontSize: '24px'}}>credit_card_off</span>
                    Métodos de pago limitados
                  </h3>
                  <p className="text-[#1d110c]">
                    Algunas tarjetas de crédito emitidas en Latinoamérica pueden ser rechazadas por la pasarela de pago del sitio oficial francés. Las tarjetas de débito y métodos de pago locales (OXXO, Mercado Pago, PSE, etc.) no son aceptados.
                  </p>
                </div>

                <div className="bg-white border border-[#ead5cd] rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#1d110c]">
                    <span className="material-symbols-outlined text-primary align-middle mr-2" style={{fontSize: '24px'}}>casino</span>
                    Sistema de lotería incierto
                  </h3>
                  <p className="text-[#1d110c]">
                    Para las entradas de semifinales y finales, la FFT utiliza un sistema de lotería. No hay garantía de obtener entradas aunque te inscribas, y el proceso puede ser confuso para quienes no están familiarizados con el sistema francés.
                  </p>
                </div>
              </div>
            </section>

            {/* Official Channel */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                Opción 1: Canal Oficial (rolandgarros.com)
              </h2>

              <div className="bg-white border border-[#ead5cd] rounded-xl p-6 mb-6">
                <p className="text-[#1d110c] mb-4">
                  El canal oficial siempre debe ser tu primera opción. A pesar de las dificultades, es posible comprar entradas desde Latinoamérica si sigues estos pasos:
                </p>
                <ol className="space-y-3 text-[#1d110c]">
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shrink-0">1</span>
                    <span>Crea tu cuenta en rolandgarros.com con anticipación (octubre-noviembre anterior al torneo).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shrink-0">2</span>
                    <span>Activa notificaciones por email para recibir alertas de venta.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shrink-0">3</span>
                    <span>Inscríbete en la lotería para finales/semifinales (febrero-marzo).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shrink-0">4</span>
                    <span>Ten preparada una tarjeta Visa o Mastercard internacional con compras online habilitadas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shrink-0">5</span>
                    <span>Programa alarmas en tu horario local para las ventanas de venta.</span>
                  </li>
                </ol>
              </div>

              <div className="bg-[#fcf9f8] border-l-4 border-[#a15d45] p-6 rounded-r-xl">
                <p className="text-[#1d110c] font-semibold mb-2">Limitaciones del canal oficial para compradores LATAM:</p>
                <ul className="text-[#1d110c] space-y-1 text-sm">
                  <li>- No hay garantía de obtener entradas en la lotería</li>
                  <li>- Horarios de venta en madrugada para la mayoría de países</li>
                  <li>- Posible rechazo de tarjetas de crédito latinoamericanas</li>
                  <li>- Soporte al cliente solo en francés e inglés</li>
                  <li>- Entradas para finales extremadamente limitadas</li>
                </ul>
              </div>
            </section>

            {/* GoalTickets Alternative */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                Opción 2: Plataformas Internacionales Especializadas
              </h2>

              <p className="text-[#1d110c] mb-6">
                Si no obtuviste entradas en la lotería oficial, o si prefieres una experiencia de compra más accesible para compradores internacionales, existen plataformas especializadas que ofrecen entradas verificadas con garantías adicionales.
              </p>

              <div className="bg-white border-2 border-primary rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 text-[#1d110c]">
                  ¿Por qué elegir una plataforma internacional?
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-600 mt-0.5" style={{fontSize: '20px'}}>check_circle</span>
                      <span className="text-[#1d110c] text-sm">Interfaz en español</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-600 mt-0.5" style={{fontSize: '20px'}}>check_circle</span>
                      <span className="text-[#1d110c] text-sm">Métodos de pago internacionales</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-600 mt-0.5" style={{fontSize: '20px'}}>check_circle</span>
                      <span className="text-[#1d110c] text-sm">Entradas garantizadas (sin lotería)</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-600 mt-0.5" style={{fontSize: '20px'}}>check_circle</span>
                      <span className="text-[#1d110c] text-sm">Transferencia oficial por app del torneo</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-600 mt-0.5" style={{fontSize: '20px'}}>check_circle</span>
                      <span className="text-[#1d110c] text-sm">Soporte al cliente en tu idioma</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-600 mt-0.5" style={{fontSize: '20px'}}>check_circle</span>
                      <span className="text-[#1d110c] text-sm">Política de reembolso clara</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#ead5cd]">
                  <a
                    href="https://goaltickets.com/es/collections/entradas-roland-garros-2026"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
                  >
                    Comprar boletos en GoalTickets
                    <span className="material-symbols-outlined" style={{fontSize: '20px'}}>open_in_new</span>
                  </a>
                  <p className="text-sm text-[#a15d45] mt-2">
                    Plataforma especializada en entradas deportivas con versión en español
                  </p>
                </div>
              </div>
            </section>

            {/* Country-specific tips */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                Consejos por País
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-[#ead5cd] rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-3 text-[#1d110c]">Desde México</h3>
                  <ul className="space-y-2 text-sm text-[#1d110c]">
                    <li>- Diferencia horaria: -7h (CET) / -6h (verano)</li>
                    <li>- Vuelos directos: CDMX-París con Air France/Aeromexico</li>
                    <li>- Sin visa para estancias menores a 90 días</li>
                    <li>- Tarjetas Visa/Mastercard funcionan generalmente</li>
                  </ul>
                </div>

                <div className="bg-white border border-[#ead5cd] rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-3 text-[#1d110c]">Desde Argentina</h3>
                  <ul className="space-y-2 text-sm text-[#1d110c]">
                    <li>- Diferencia horaria: -4h (CET) / -5h (verano)</li>
                    <li>- Vuelos: Buenos Aires-París con escala</li>
                    <li>- Sin visa para estancias menores a 90 días</li>
                    <li>- Considerar impuesto PAIS y tipo de cambio</li>
                  </ul>
                </div>

                <div className="bg-white border border-[#ead5cd] rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-3 text-[#1d110c]">Desde Colombia</h3>
                  <ul className="space-y-2 text-sm text-[#1d110c]">
                    <li>- Diferencia horaria: -6h (CET) / -7h (verano)</li>
                    <li>- Vuelos: Bogotá-París con escala o directo</li>
                    <li>- Sin visa Schengen desde 2015</li>
                    <li>- Tarjetas internacionales recomendadas</li>
                  </ul>
                </div>

                <div className="bg-white border border-[#ead5cd] rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-3 text-[#1d110c]">Desde Chile</h3>
                  <ul className="space-y-2 text-sm text-[#1d110c]">
                    <li>- Diferencia horaria: -4h (CET) / -5h (verano)</li>
                    <li>- Vuelos: Santiago-París con escala</li>
                    <li>- Sin visa para estancias menores a 90 días</li>
                    <li>- Tarjetas chilenas funcionan bien en Europa</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Budget Planning */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                Presupuesto Estimado del Viaje
              </h2>

              <div className="bg-white border border-[#ead5cd] rounded-xl overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-[#1d110c] text-white">
                    <tr>
                      <th className="py-3 px-4 text-left">Concepto</th>
                      <th className="py-3 px-4 text-left">Rango (USD)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#ead5cd]">
                    <tr>
                      <td className="py-3 px-4 text-[#1d110c]">Vuelo ida y vuelta (LATAM-París)</td>
                      <td className="py-3 px-4 text-[#1d110c] font-semibold">$800-1,500</td>
                    </tr>
                    <tr className="bg-[#fcf9f8]">
                      <td className="py-3 px-4 text-[#1d110c]">Hotel 5-7 noches (zona Roland Garros)</td>
                      <td className="py-3 px-4 text-[#1d110c] font-semibold">$600-1,200</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-[#1d110c]">Entradas (2-3 días, ground pass + pista)</td>
                      <td className="py-3 px-4 text-[#1d110c] font-semibold">$100-600</td>
                    </tr>
                    <tr className="bg-[#fcf9f8]">
                      <td className="py-3 px-4 text-[#1d110c]">Comida y transporte (7 días)</td>
                      <td className="py-3 px-4 text-[#1d110c] font-semibold">$400-700</td>
                    </tr>
                    <tr className="bg-[#1d110c] text-white font-bold">
                      <td className="py-3 px-4">Total estimado</td>
                      <td className="py-3 px-4">$1,900-4,000</td>
                    </tr>
                  </tbody>
                </table>
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

            {/* Related Links */}
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
                  <p className="text-[#a15d45] text-sm mb-3">Guía completa de opciones de compra con el sistema de 3 niveles.</p>
                  <span className="text-primary font-semibold">Leer más →</span>
                </Link>
                <Link
                  href="/entradas-roland-garros-2026/precios"
                  className="block bg-white border border-[#ead5cd] rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-2 text-[#1d110c]">Precios de Entradas</h3>
                  <p className="text-[#a15d45] text-sm mb-3">Desglose completo de precios por ronda y categoría.</p>
                  <span className="text-primary font-semibold">Leer más →</span>
                </Link>
                <Link
                  href="/alojamiento-paris"
                  className="block bg-white border border-[#ead5cd] rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-2 text-[#1d110c]">Alojamiento en París</h3>
                  <p className="text-[#a15d45] text-sm mb-3">Mejores zonas y hoteles para tu estadía durante Roland Garros.</p>
                  <span className="text-primary font-semibold">Leer más →</span>
                </Link>
                <Link
                  href="/guia-completa/como-llegar"
                  className="block bg-white border border-[#ead5cd] rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-2 text-[#1d110c]">Cómo Llegar</h3>
                  <p className="text-[#a15d45] text-sm mb-3">Transporte desde aeropuertos y dentro de París.</p>
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
