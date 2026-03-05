import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { FAQSchema } from '@/components/seo/FAQSchema'

export const metadata: Metadata = {
  title: 'Entradas Final Roland Garros 2026: Precios, Cómo Comprar y Disponibilidad',
  description: 'Guía completa para comprar entradas para la final de Roland Garros 2026. Precios desde 150 EUR, sistema de lotería, alternativas si están agotadas y guía paso a paso.',
  keywords: [
    'entradas final roland garros',
    'entradas semifinal roland garros',
    'entradas finales roland garros 2026',
    'comprar entradas final roland garros',
    'precio entradas final roland garros',
    'loteria entradas roland garros'
  ],
  openGraph: {
    title: 'Entradas Final Roland Garros 2026: Precios y Cómo Comprar',
    description: 'Precios desde 150 EUR. Sistema de lotería, guía paso a paso y alternativas.',
    type: 'article',
    url: 'https://entradasrolandgarros.com/entradas-final-roland-garros',
  },
  alternates: {
    canonical: 'https://entradasrolandgarros.com/entradas-final-roland-garros',
  },
}

const faqs = [
  {
    question: '¿Cuánto cuestan las entradas para la final de Roland Garros 2026?',
    answer: 'Las entradas para la final de Roland Garros 2026 van desde aproximadamente 150 EUR (categoría 4, asientos elevados) hasta más de 540 EUR (categoría 1, asientos premium centrales). Los precios exactos se anuncian cuando se abre el sistema de venta.'
  },
  {
    question: '¿Cómo se compran las entradas para la final de Roland Garros?',
    answer: 'Las entradas para las finales se asignan principalmente mediante un sistema de lotería en rolandgarros.com. Debes registrarte durante el período de inscripción (febrero-marzo), y si resultas seleccionado, podrás comprar tus entradas. También existe la reventa oficial limitada.'
  },
  {
    question: '¿Qué pasa si no consigo entradas oficiales para la final?',
    answer: 'Si no obtuviste entradas en la lotería oficial, puedes buscar en la reventa oficial de Roland Garros (que suele abrirse semanas antes del torneo) o consultar plataformas de reventa especializadas como GoalTickets que ofrecen entradas verificadas con garantía.'
  },
  {
    question: '¿Las entradas para la final incluyen el ground pass?',
    answer: 'Sí, todas las entradas individuales para la pista Philippe-Chatrier (donde se juegan las finales) incluyen automáticamente acceso ground pass para ese mismo día, permitiéndote también explorar las pistas exteriores.'
  }
]

export default function EntradasFinalRolandGarrosPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-[#fcf9f8]">
        <div className="bg-white border-b border-[#ead5cd] py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: 'Entradas Final Roland Garros', url: 'https://entradasrolandgarros.com/entradas-final-roland-garros' }
              ]}
            />
          </div>
        </div>

        <article className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">

              <h1 className="text-4xl md:text-5xl font-bold text-[#1d110c] mb-6">
                Entradas para la Final de Roland Garros 2026: Precios y Cómo Comprar
              </h1>

              {/* Capsule */}
              <div className="rounded-lg border border-[#ead5cd] bg-white p-6 shadow-sm mb-10">
                <p className="text-[#1d110c] text-base leading-relaxed">
                  <strong>Las entradas para la final de Roland Garros 2026 van desde 150 EUR hasta más de 540 EUR</strong> en la pista Philippe-Chatrier. Se asignan principalmente por <strong>lotería oficial</strong> en rolandgarros.com (inscripción febrero-marzo 2026). La <Link href="/final-roland-garros-2026" className="text-primary font-semibold hover:underline">final femenina es el 6 de junio y la masculina el 7 de junio</Link>.
                </p>
              </div>

              {/* Price Table */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Precios de Entradas: Finales vs Semifinales vs Cuartos
                </h2>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-[#ead5cd] rounded-xl overflow-hidden shadow-sm">
                    <thead className="bg-[#1d110c] text-white">
                      <tr>
                        <th className="py-3 px-4 text-left">Ronda</th>
                        <th className="py-3 px-4 text-left">Cat. 4</th>
                        <th className="py-3 px-4 text-left">Cat. 3</th>
                        <th className="py-3 px-4 text-left">Cat. 2</th>
                        <th className="py-3 px-4 text-left">Cat. 1</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#ead5cd]">
                      <tr className="bg-white">
                        <td className="py-3 px-4 font-semibold">Cuartos de final</td>
                        <td className="py-3 px-4">120 EUR</td>
                        <td className="py-3 px-4">200 EUR</td>
                        <td className="py-3 px-4">270 EUR</td>
                        <td className="py-3 px-4">350 EUR</td>
                      </tr>
                      <tr className="bg-[#fcf9f8]">
                        <td className="py-3 px-4 font-semibold">Semifinales</td>
                        <td className="py-3 px-4">140 EUR</td>
                        <td className="py-3 px-4">250 EUR</td>
                        <td className="py-3 px-4">350 EUR</td>
                        <td className="py-3 px-4">450 EUR</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 font-bold text-primary">Final femenina</td>
                        <td className="py-3 px-4">150 EUR</td>
                        <td className="py-3 px-4">280 EUR</td>
                        <td className="py-3 px-4">380 EUR</td>
                        <td className="py-3 px-4">500 EUR</td>
                      </tr>
                      <tr className="bg-[#fcf9f8]">
                        <td className="py-3 px-4 font-bold text-primary">Final masculina</td>
                        <td className="py-3 px-4">160 EUR</td>
                        <td className="py-3 px-4">300 EUR</td>
                        <td className="py-3 px-4">400 EUR</td>
                        <td className="py-3 px-4">540 EUR</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-sm text-[#a15d45]">
                  Precios aproximados basados en ediciones anteriores. Los precios definitivos se confirman al abrir la venta oficial.
                </p>
              </section>

              {/* Step by Step */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Cómo Comprar Entradas para la Final: Paso a Paso
                </h2>

                <div className="space-y-4">
                  <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">1</div>
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-[#1d110c]">Regístrate en rolandgarros.com</h3>
                        <p className="text-[#1d110c]">Crea una cuenta en el sitio oficial del torneo. Necesitarás un email válido y datos personales, ya que las entradas son nominativas.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">2</div>
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-[#1d110c]">Inscríbete en la Lotería (Feb-Mar 2026)</h3>
                        <p className="text-[#1d110c]">Durante el período de inscripción, selecciona los días y pistas que te interesan. Puedes elegir múltiples opciones para aumentar tus posibilidades.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">3</div>
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-[#1d110c]">Espera los Resultados</h3>
                        <p className="text-[#1d110c]">Los seleccionados reciben un email con instrucciones para completar la compra en un plazo limitado (normalmente 48-72 horas).</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">4</div>
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-[#1d110c]">Completa la Compra</h3>
                        <p className="text-[#1d110c]">Si fuiste seleccionado, paga con tarjeta de crédito y recibe tus entradas digitales. Las entradas se transfieren a la app oficial del torneo.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Lottery System */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  El Sistema de Lotería Oficial
                </h2>

                <div className="bg-white border-l-4 border-primary p-6 rounded-r-xl mb-6">
                  <p className="text-[#1d110c] mb-3">
                    La Fédération Française de Tennis (FFT) utiliza un <strong>sistema de lotería</strong> para las entradas más demandadas (semifinales y finales en Philippe-Chatrier) porque la demanda supera ampliamente la oferta.
                  </p>
                  <p className="text-[#1d110c]">
                    El sistema es aleatorio y no da prioridad por orden de registro. Sin embargo, los miembros del programa de fidelidad de la FFT pueden tener acceso anticipado a ciertas categorías.
                  </p>
                </div>
              </section>

              {/* Alternatives */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Alternativas si las Entradas Oficiales Están Agotadas
                </h2>

                <div className="space-y-4">
                  <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6">
                    <h3 className="text-xl font-bold mb-2 text-[#1d110c]">Reventa Oficial de Roland Garros</h3>
                    <p className="text-[#1d110c]">
                      Semanas antes del torneo, la FFT abre una plataforma de reventa oficial donde los poseedores de entradas pueden revender a precio nominal. Es la opción más segura después de la lotería.
                    </p>
                  </div>

                  <div className="bg-[#fcf9f8] border border-[#ead5cd] rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-primary mt-1" style={{fontSize: '28px'}}>verified</span>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-[#1d110c]">Plataformas de Reventa Especializadas</h3>
                        <p className="text-[#1d110c] mb-3">
                          Si no conseguiste entradas por canales oficiales, plataformas especializadas como GoalTickets ofrecen entradas verificadas con garantía de autenticidad y transferencia oficial por app.
                        </p>
                        <a
                          href="https://goaltickets.com/es/collections/entradas-roland-garros-2026"
                          target="_blank"
                          rel="noopener"
                          className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                        >
                          Ver disponibilidad y precios en GoalTickets
                          <span className="material-symbols-outlined" style={{fontSize: '18px'}}>open_in_new</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Preguntas Frecuentes
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

              {/* Related */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Contenido Relacionado
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <Link
                    href="/final-roland-garros-2026"
                    className="block bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-lg font-bold mb-2 text-[#1d110c]">Final Roland Garros 2026</h3>
                    <p className="text-sm text-[#a15d45]">
                      Fechas, horarios, historia y cómo ver las finales por TV.
                    </p>
                  </Link>

                  <Link
                    href="/entradas-roland-garros-2026"
                    className="block bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-lg font-bold mb-2 text-[#1d110c]">Todas las Entradas</h3>
                    <p className="text-sm text-[#a15d45]">
                      Guía completa de entradas para Roland Garros 2026 desde 35 EUR.
                    </p>
                  </Link>

                  <Link
                    href="/estadio-roland-garros/pista-philippe-chatrier"
                    className="block bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-lg font-bold mb-2 text-[#1d110c]">Pista Philippe-Chatrier</h3>
                    <p className="text-sm text-[#a15d45]">
                      Capacidad, techo retráctil y mejores asientos.
                    </p>
                  </Link>
                </div>
              </section>

            </div>
          </div>
        </article>
      </div>
    </>
  )
}
