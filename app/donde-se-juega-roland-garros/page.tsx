import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { FAQSchema } from '@/components/seo/FAQSchema'

export const metadata: Metadata = {
  title: 'Dónde Se Juega Roland Garros: Ubicación, Superficie y Cómo Llegar',
  description: 'Roland Garros se juega en el Stade Roland Garros, 2 Avenue Gordon Bennett, París 75016. Superficie de tierra batida (arcilla roja). Guía de ubicación, cómo llegar y comparación con otros Grand Slams.',
  keywords: [
    'donde se juega roland garros',
    'roland garros ubicacion',
    'roland garros superficie',
    'tierra batida roland garros',
    'stade roland garros direccion',
    'roland garros paris',
    'arcilla roja tenis'
  ],
  openGraph: {
    title: 'Dónde Se Juega Roland Garros: Ubicación y Superficie',
    description: 'Stade Roland Garros, París 75016. Tierra batida. Todo sobre la ubicación y cómo llegar.',
    type: 'article',
    url: 'https://entradasrolandgarros.com/donde-se-juega-roland-garros',
  },
  alternates: {
    canonical: 'https://entradasrolandgarros.com/donde-se-juega-roland-garros',
  },
}

const faqs = [
  {
    question: '¿Dónde se juega Roland Garros?',
    answer: 'Roland Garros se juega en el Stade Roland Garros, ubicado en 2 Avenue Gordon Bennett, en el distrito 16 de París (75016), Francia. El complejo está cerca del Bois de Boulogne y cuenta con 18 pistas de tierra batida.'
  },
  {
    question: '¿Qué superficie tiene Roland Garros?',
    answer: 'Roland Garros se juega sobre tierra batida (arcilla roja), una superficie compuesta por varias capas: piedra caliza, clinker y una capa final de polvo de ladrillo triturado de aproximadamente 2mm. Esta superficie ralentiza la pelota y produce un bote alto.'
  },
  {
    question: '¿Cómo llegar al Stade Roland Garros?',
    answer: 'La forma más fácil es en metro: línea 10 hasta Porte d\'Auteuil (a 400 metros del estadio). También se puede llegar en autobús (líneas 22, 32, 241) o en tranvía T3a hasta Porte d\'Auteuil. En coche hay parking limitado y se recomienda transporte público.'
  },
  {
    question: '¿Cuántas pistas tiene Roland Garros?',
    answer: 'El complejo Roland Garros tiene 18 pistas de tierra batida. Las tres principales son Philippe-Chatrier (15,225 espectadores), Suzanne-Lenglen (9,829 espectadores) y Simonne-Mathieu (5,000 espectadores). Las 15 restantes son pistas exteriores accesibles con ground pass.'
  }
]

export default function DondeSeJuegaRolandGarrosPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-[#fcf9f8]">
        <div className="bg-white border-b border-[#ead5cd] py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: 'Dónde Se Juega Roland Garros', url: 'https://entradasrolandgarros.com/donde-se-juega-roland-garros' }
              ]}
            />
          </div>
        </div>

        <article className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">

              <h1 className="text-4xl md:text-5xl font-bold text-[#1d110c] mb-6">
                Dónde Se Juega Roland Garros: Ubicación, Superficie y Guía
              </h1>

              {/* Capsule */}
              <div className="rounded-lg border border-[#ead5cd] bg-white p-6 shadow-sm mb-10">
                <p className="text-[#1d110c] text-base leading-relaxed">
                  <strong>Roland Garros se juega en el Stade Roland Garros</strong>, ubicado en <strong>2 Avenue Gordon Bennett, París 75016, Francia</strong>. La superficie es <strong>tierra batida</strong> (arcilla roja triturada). El complejo tiene 18 pistas, con la principal Philippe-Chatrier con capacidad para 15,225 espectadores. Se accede fácilmente por metro (línea 10, Porte d'Auteuil).
                </p>
              </div>

              {/* Location Details */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Ubicación del Stade Roland Garros
                </h2>

                <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 mb-6">
                  <div className="space-y-3 text-[#1d110c]">
                    <p><strong>Dirección:</strong> 2 Avenue Gordon Bennett, 75016 París, Francia</p>
                    <p><strong>Distrito:</strong> 16e arrondissement (zona oeste de París)</p>
                    <p><strong>Cerca de:</strong> Bois de Boulogne, Porte d'Auteuil</p>
                    <p><strong>Coordenadas:</strong> 48.8469° N, 2.2531° E</p>
                    <p><strong>Superficie total:</strong> Aproximadamente 12 hectáreas</p>
                  </div>
                </div>

                <p className="text-lg text-[#1d110c] leading-relaxed">
                  El Stade Roland Garros se encuentra en uno de los barrios más elegantes de París, en el límite occidental de la ciudad junto al Bois de Boulogne, el parque más grande de la capital francesa. La zona es predominantemente residencial y tranquila, lo que contrasta con la vibrante atmósfera que se crea durante las dos semanas del torneo.
                </p>
              </section>

              {/* Surface */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Superficie: La Tierra Batida de Roland Garros
                </h2>

                <p className="text-lg text-[#1d110c] leading-relaxed mb-6">
                  Roland Garros es el único Grand Slam que se juega sobre <strong>tierra batida</strong> (en francés, "terre battue"), una superficie que define la identidad del torneo y condiciona el estilo de juego.
                </p>

                <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4 text-[#1d110c]">Composición de la Superficie</h3>
                  <ul className="space-y-2 text-[#1d110c]">
                    <li><strong>Capa base:</strong> Piedra caliza compactada para drenaje</li>
                    <li><strong>Capa intermedia:</strong> Clinker (residuo de combustión) triturado</li>
                    <li><strong>Capa superior:</strong> Aproximadamente 2mm de polvo de ladrillo rojo triturado</li>
                    <li><strong>Color:</strong> Ocre/rojo característico</li>
                    <li><strong>Mantenimiento:</strong> Riego 3-4 veces al día durante el torneo</li>
                  </ul>
                </div>

                <div className="bg-white border-l-4 border-primary p-6 rounded-r-xl mb-6">
                  <h3 className="text-xl font-bold mb-3 text-[#1d110c]">Cómo Afecta al Juego</h3>
                  <p className="text-[#1d110c] mb-3">
                    La tierra batida <strong>ralentiza la pelota</strong> y produce un <strong>bote más alto</strong> que las superficies duras o el césped. Esto favorece a los jugadores con gran resistencia física, capacidad defensiva y habilidad para construir puntos largos desde el fondo de la pista.
                  </p>
                  <p className="text-[#1d110c]">
                    Los deslizamientos controlados son una técnica esencial en esta superficie, y los partidos tienden a ser más largos que en otros Grand Slams. Los sacadores potentes tienen menos ventaja aquí que en Wimbledon o el US Open.
                  </p>
                </div>
              </section>

              {/* Comparison Table */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Comparación con Otros Grand Slams
                </h2>

                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-[#ead5cd] rounded-xl overflow-hidden shadow-sm">
                    <thead className="bg-[#1d110c] text-white">
                      <tr>
                        <th className="py-3 px-4 text-left">Grand Slam</th>
                        <th className="py-3 px-4 text-left">Superficie</th>
                        <th className="py-3 px-4 text-left">Ubicación</th>
                        <th className="py-3 px-4 text-left">Fechas</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#ead5cd]">
                      <tr className="bg-primary/5">
                        <td className="py-3 px-4 font-bold text-primary">Roland Garros</td>
                        <td className="py-3 px-4 font-semibold">Tierra batida</td>
                        <td className="py-3 px-4">París, Francia</td>
                        <td className="py-3 px-4">Mayo-Junio</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 font-semibold">Australian Open</td>
                        <td className="py-3 px-4">Pista dura (GreenSet)</td>
                        <td className="py-3 px-4">Melbourne, Australia</td>
                        <td className="py-3 px-4">Enero</td>
                      </tr>
                      <tr className="bg-[#fcf9f8]">
                        <td className="py-3 px-4 font-semibold">Wimbledon</td>
                        <td className="py-3 px-4">Césped</td>
                        <td className="py-3 px-4">Londres, Reino Unido</td>
                        <td className="py-3 px-4">Junio-Julio</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 font-semibold">US Open</td>
                        <td className="py-3 px-4">Pista dura (DecoTurf)</td>
                        <td className="py-3 px-4">Nueva York, EE.UU.</td>
                        <td className="py-3 px-4">Agosto-Septiembre</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* How to Get There */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Cómo Llegar al Stade Roland Garros
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#1d110c]">Metro</h3>
                    <p className="text-[#1d110c]">
                      <strong>Línea 10</strong> hasta <strong>Porte d'Auteuil</strong> (400m del estadio). Es la opción más rápida y recomendada.
                    </p>
                  </div>

                  <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#1d110c]">Autobús y Tranvía</h3>
                    <p className="text-[#1d110c]">
                      Autobuses 22, 32, 241 y Tranvía T3a hasta Porte d'Auteuil. Buenas opciones si estás en la zona sur de París.
                    </p>
                  </div>
                </div>

                <Link
                  href="/guia-completa/como-llegar"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Guía Completa de Cómo Llegar
                  <span className="material-symbols-outlined" style={{fontSize: '20px'}}>arrow_forward</span>
                </Link>
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

              {/* Related Links */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Contenido Relacionado
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <Link
                    href="/estadio-roland-garros"
                    className="block bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-lg font-bold mb-2 text-[#1d110c]">Estadio Roland Garros</h3>
                    <p className="text-sm text-[#a15d45]">
                      Guía completa de pistas e instalaciones del complejo.
                    </p>
                  </Link>

                  <Link
                    href="/alojamiento-paris"
                    className="block bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-lg font-bold mb-2 text-[#1d110c]">Alojamiento en París</h3>
                    <p className="text-sm text-[#a15d45]">
                      Hoteles y barrios recomendados cerca del estadio.
                    </p>
                  </Link>

                  <Link
                    href="/entradas-roland-garros-2026"
                    className="block bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-lg font-bold mb-2 text-[#1d110c]">Comprar Entradas</h3>
                    <p className="text-sm text-[#a15d45]">
                      Entradas para Roland Garros 2026 desde 35 EUR.
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
