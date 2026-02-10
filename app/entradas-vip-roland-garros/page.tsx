import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { ArticleSchema } from '@/components/seo/ArticleSchema'

export const metadata: Metadata = {
  title: 'Entradas VIP Roland Garros 2026: Hospitalidad, Palcos y Experiencias Premium',
  description: 'Guía completa de entradas VIP y hospitalidad para Roland Garros 2026. Palcos privados, suites corporativas, paquetes premium y experiencias exclusivas con precios y comparativa.',
  keywords: [
    'entradas vip roland garros',
    'hospitalidad roland garros 2026',
    'palcos roland garros',
    'experiencia vip roland garros',
    'paquetes premium roland garros',
    'corporate hospitality roland garros',
    'suites roland garros'
  ],
  openGraph: {
    title: 'Entradas VIP Roland Garros 2026: Guía de Hospitalidad Premium',
    description: 'Todo sobre entradas VIP, palcos privados y experiencias premium en Roland Garros 2026.',
    type: 'article',
    url: 'https://entradasrolandgarros.com/entradas-vip-roland-garros',
  },
  alternates: {
    canonical: 'https://entradasrolandgarros.com/entradas-vip-roland-garros',
  },
}

const faqs = [
  {
    question: '¿Cuánto cuestan los paquetes VIP de Roland Garros?',
    answer: 'Los paquetes de hospitalidad comienzan desde aproximadamente €500 por persona por día para opciones básicas, hasta €2,000-5,000+ para experiencias premium con palcos privados y servicio de chef. Los palcos corporativos para grupos pueden superar los €20,000 por día.'
  },
  {
    question: '¿Qué incluyen los paquetes de hospitalidad?',
    answer: 'Típicamente incluyen: asientos premium en pistas principales, acceso a lounges VIP con aire acondicionado, menú gastronómico (3-5 platos), barra libre (champán, vinos), servicio de catering durante todo el día, y en paquetes superiores, recepción privada y parking preferencial.'
  },
  {
    question: '¿Puedo comprar una experiencia VIP para un solo día?',
    answer: 'Sí, la mayoría de proveedores ofrecen paquetes por día individual. También existen paquetes de múltiples días con descuento. La disponibilidad varía según la fecha: los días de finales y semifinales son los más demandados y caros.'
  },
  {
    question: '¿Dónde comprar paquetes VIP verificados?',
    answer: 'Los paquetes oficiales se venden a través de proveedores autorizados listados en el sitio web de Roland Garros. Plataformas internacionales especializadas como GoalTickets también ofrecen opciones de entradas premium verificadas con garantía de autenticidad para compradores internacionales.'
  }
]

export default function EntradasVipPage() {
  return (
    <>
      <ArticleSchema
        headline="Entradas VIP Roland Garros 2026"
        description="Guía completa de hospitalidad y experiencias premium"
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
                { name: 'Entradas VIP Roland Garros', url: 'https://entradasrolandgarros.com/entradas-vip-roland-garros' }
              ]}
            />
          </div>
        </div>

        {/* Hero */}
        <section className="bg-[#1d110c] text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Entradas VIP y Hospitalidad Roland Garros 2026
            </h1>
            <p className="text-xl text-[#ead5cd]">
              Palcos privados, suites corporativas y experiencias premium para vivir Roland Garros al máximo nivel
            </p>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 space-y-12">

            {/* Introduction */}
            <section>
              <p className="text-lg text-[#1d110c] leading-relaxed mb-6">
                Roland Garros ofrece algunas de las experiencias VIP más exclusivas del mundo del deporte. Desde paquetes de hospitalidad con gastronomía francesa de primer nivel hasta palcos privados con vista privilegiada a Philippe-Chatrier, las opciones premium permiten disfrutar del torneo con un nivel de comodidad y servicio excepcional.
              </p>
              <p className="text-lg text-[#1d110c] leading-relaxed">
                Esta guía cubre todas las opciones VIP disponibles, qué incluye cada nivel, rangos de precios y cómo acceder a estas experiencias exclusivas.
              </p>
            </section>

            {/* Options */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                Niveles de Experiencia Premium
              </h2>

              <div className="space-y-6">
                {/* Hospitality Standard */}
                <div className="bg-white border-2 border-[#ead5cd] rounded-xl overflow-hidden">
                  <div className="bg-[#a15d45] text-white p-4 flex justify-between items-center">
                    <h3 className="text-xl font-bold">Hospitalidad Estándar</h3>
                    <span className="bg-white text-[#a15d45] px-4 py-1 rounded-full font-bold">€500-800/día</span>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-bold mb-2 text-[#1d110c]">Incluye:</h4>
                        <ul className="space-y-1 text-sm text-[#1d110c]">
                          <li>- Asiento categoría 1-2 en pista principal</li>
                          <li>- Acceso a lounge compartido con A/C</li>
                          <li>- Almuerzo de 3 platos</li>
                          <li>- Barra libre (vino, cerveza, refrescos)</li>
                          <li>- Ground pass incluido</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-[#1d110c]">Ideal para:</h4>
                        <p className="text-sm text-[#1d110c]">Parejas o grupos pequeños que quieren una experiencia superior sin el costo de un palco privado. Perfecto para celebraciones especiales o primeras visitas premium.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Premium Hospitality */}
                <div className="bg-white border-2 border-primary rounded-xl overflow-hidden">
                  <div className="bg-primary text-white p-4 flex justify-between items-center">
                    <h3 className="text-xl font-bold">Hospitalidad Premium</h3>
                    <span className="bg-white text-primary px-4 py-1 rounded-full font-bold">€1,000-2,000/día</span>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-bold mb-2 text-[#1d110c]">Incluye:</h4>
                        <ul className="space-y-1 text-sm text-[#1d110c]">
                          <li>- Asiento categoría 1 (oro) Philippe-Chatrier</li>
                          <li>- Acceso a suite privada o semi-privada</li>
                          <li>- Menú gastronómico de 5 platos</li>
                          <li>- Champán y vinos premium ilimitados</li>
                          <li>- Servicio de catering continuo</li>
                          <li>- Regalos de bienvenida oficiales</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-[#1d110c]">Ideal para:</h4>
                        <p className="text-sm text-[#1d110c]">Ejecutivos, clientes corporativos y aficionados que quieren la mejor experiencia posible. Incluye elementos que hacen del día un evento memorable con servicio de primer nivel.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Private Boxes */}
                <div className="bg-white border-2 border-[#1d110c] rounded-xl overflow-hidden">
                  <div className="bg-[#1d110c] text-white p-4 flex justify-between items-center">
                    <h3 className="text-xl font-bold">Palcos Privados (Loges)</h3>
                    <span className="bg-white text-[#1d110c] px-4 py-1 rounded-full font-bold">€5,000-20,000+/día</span>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-bold mb-2 text-[#1d110c]">Incluye:</h4>
                        <ul className="space-y-1 text-sm text-[#1d110c]">
                          <li>- Palco privado (6-20 personas)</li>
                          <li>- Vista privilegiada de Philippe-Chatrier</li>
                          <li>- Chef privado con menú personalizable</li>
                          <li>- Servicio de mayordomo dedicado</li>
                          <li>- Pantallas privadas y mobiliario de lujo</li>
                          <li>- Terraza exterior exclusiva</li>
                          <li>- Parking VIP reservado</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-[#1d110c]">Ideal para:</h4>
                        <p className="text-sm text-[#1d110c]">Empresas que buscan impresionar a clientes, grupos corporativos, o quienes desean la máxima privacidad y exclusividad. Los palcos ofrecen la experiencia más lujosa disponible en Roland Garros.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Comparison */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                Comparativa de Experiencias VIP
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-[#ead5cd] rounded-xl overflow-hidden">
                  <thead className="bg-[#1d110c] text-white">
                    <tr>
                      <th className="py-3 px-4 text-left">Característica</th>
                      <th className="py-3 px-4 text-left">Estándar</th>
                      <th className="py-3 px-4 text-left">Premium</th>
                      <th className="py-3 px-4 text-left">Palco</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#ead5cd] text-sm">
                    <tr>
                      <td className="py-3 px-4 font-semibold text-[#1d110c]">Precio/persona</td>
                      <td className="py-3 px-4 text-[#1d110c]">€500-800</td>
                      <td className="py-3 px-4 text-[#1d110c]">€1,000-2,000</td>
                      <td className="py-3 px-4 text-[#1d110c]">€800-3,000+</td>
                    </tr>
                    <tr className="bg-[#fcf9f8]">
                      <td className="py-3 px-4 font-semibold text-[#1d110c]">Asientos</td>
                      <td className="py-3 px-4 text-[#1d110c]">Cat 1-2</td>
                      <td className="py-3 px-4 text-[#1d110c]">Cat 1 (Oro)</td>
                      <td className="py-3 px-4 text-[#1d110c]">Vista privilegiada</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-[#1d110c]">Gastronomía</td>
                      <td className="py-3 px-4 text-[#1d110c]">3 platos</td>
                      <td className="py-3 px-4 text-[#1d110c]">5 platos gourmet</td>
                      <td className="py-3 px-4 text-[#1d110c]">Chef privado</td>
                    </tr>
                    <tr className="bg-[#fcf9f8]">
                      <td className="py-3 px-4 font-semibold text-[#1d110c]">Bebidas</td>
                      <td className="py-3 px-4 text-[#1d110c]">Vino y cerveza</td>
                      <td className="py-3 px-4 text-[#1d110c]">Champán premium</td>
                      <td className="py-3 px-4 text-[#1d110c]">Todo ilimitado</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-[#1d110c]">Privacidad</td>
                      <td className="py-3 px-4 text-[#1d110c]">Lounge compartido</td>
                      <td className="py-3 px-4 text-[#1d110c]">Semi-privado</td>
                      <td className="py-3 px-4 text-[#1d110c]">Totalmente privado</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Where to buy */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                Dónde Comprar Entradas VIP
              </h2>

              <div className="space-y-4">
                <div className="bg-white border border-[#ead5cd] rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-2 text-[#1d110c]">1. Proveedores oficiales de Roland Garros</h3>
                  <p className="text-[#1d110c] text-sm">
                    Los paquetes oficiales se venden a través de agencias autorizadas listadas en el sitio web del torneo. Reserva con varios meses de anticipación.
                  </p>
                </div>

                <div className="bg-white border border-[#ead5cd] rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-2 text-[#1d110c]">2. Plataformas especializadas internacionales</h3>
                  <p className="text-[#1d110c] text-sm mb-3">
                    Para compradores internacionales que buscan entradas premium verificadas,{' '}
                    <a
                      href="https://goaltickets.com/es/collections/entradas-abierto-francia-2026"
                      target="_blank"
                      rel="noopener"
                      className="text-primary font-semibold hover:underline"
                    >
                      GoalTickets
                    </a>{' '}
                    ofrece opciones de entradas premium y VIP con garantía de autenticidad y transferencia oficial por app.
                  </p>
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
                  href="/entradas-roland-garros-2026/mejores-asientos"
                  className="block bg-white border border-[#ead5cd] rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-2 text-[#1d110c]">Mejores Asientos</h3>
                  <p className="text-[#a15d45] text-sm mb-3">Guía de asientos por pista, sol/sombra y categorías.</p>
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
              </div>
            </section>

          </div>
        </article>
      </div>
    </>
  )
}
