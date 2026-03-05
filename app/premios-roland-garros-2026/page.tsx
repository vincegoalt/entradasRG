import { Metadata } from 'next'
import Link from 'next/link'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { PageHero } from '@/components/ui/PageHero'
import { GoalTicketsCTA } from '@/components/ui/GoalTicketsCTA'

export const metadata: Metadata = {
  title: 'Premios Roland Garros 2026: Prize Money por Ronda y Datos',
  description: 'Descubre cuánto gana el campeón de Roland Garros 2026, el prize money por ronda, comparativa con otros Grand Slams, impuestos y datos curiosos sobre los premios.',
  keywords: [
    'premios roland garros 2026',
    'prize money roland garros',
    'cuanto gana el campeon de roland garros',
    'premios roland garros por ronda',
    'dinero roland garros 2026',
    'premio campeon roland garros',
    'prize money grand slam 2026',
    'premios tenis roland garros'
  ],
  openGraph: {
    title: 'Premios Roland Garros 2026: Prize Money por Ronda y Datos',
    description: 'Prize money completo de Roland Garros 2026: ~2.4M EUR para el campeón, ~53M EUR en premios totales. Datos por ronda y comparativa Grand Slam.',
    type: 'article',
    url: 'https://entradasrolandgarros.com/premios-roland-garros-2026',
  },
  alternates: {
    canonical: 'https://entradasrolandgarros.com/premios-roland-garros-2026',
  },
}

const faqs = [
  {
    question: '¿Cuánto gana el campeón de Roland Garros?',
    answer: 'El campeón individual de Roland Garros 2026 se lleva aproximadamente 2.400.000 EUR en premios. Es el mayor premio del torneo, aunque tras impuestos franceses (~20-30% para no residentes) el importe neto se reduce a unos 1.700.000-1.900.000 EUR.'
  },
  {
    question: '¿Cuánto cobra un jugador eliminado en primera ronda?',
    answer: 'Un jugador eliminado en la primera ronda del cuadro principal de Roland Garros recibe aproximadamente 55.000 EUR. Los jugadores que caen en la fase de clasificación cobran entre 15.000 y 25.000 EUR dependiendo de la ronda.'
  },
  {
    question: '¿Roland Garros paga igual a hombres y mujeres?',
    answer: 'Sí. Desde 2006, Roland Garros ofrece premios idénticos para el cuadro masculino y femenino en todas las rondas. El campeón y la campeona reciben exactamente la misma cantidad.'
  },
  {
    question: '¿Cuánto ha ganado Nadal en premios en Roland Garros?',
    answer: 'Rafael Nadal acumuló aproximadamente 130 millones de euros en premios solo en Roland Garros a lo largo de su carrera, gracias a sus 14 títulos conquistados entre 2005 y 2022. Es el jugador que más prize money ha ganado en un solo Grand Slam.'
  },
  {
    question: '¿Cuánto cobran los recogepelotas en Roland Garros?',
    answer: 'Los recogepelotas (ramasseurs de balles) de Roland Garros no reciben un salario como tal. Es un rol honorífico: reciben equipamiento deportivo completo, comidas durante el torneo, transporte y una experiencia única. Se seleccionan entre jóvenes de 12 a 16 años de clubes de tenis franceses.'
  },
  {
    question: '¿Qué Grand Slam paga más?',
    answer: 'El US Open es el Grand Slam que ofrece el mayor prize money total (~65 millones de dólares) y el mayor premio individual para el campeón (~3,6 millones de dólares). Sin embargo, las diferencias se reducen al convertir las monedas.'
  },
  {
    question: '¿Los premios de Roland Garros han subido?',
    answer: 'Sí, de forma significativa. En 2010 el prize money total era de unos 16 millones de euros, en 2015 subió a 28 millones, en 2020 a 38 millones y en 2025 alcanzó los 53 millones. El crecimiento supera el 230% en 15 años.'
  },
  {
    question: '¿Cuánto se lleva el campeón después de impuestos?',
    answer: 'Francia aplica una retención fiscal de aproximadamente el 20-30% a los deportistas no residentes. Así, de los ~2.400.000 EUR brutos del campeón, el importe neto estimado es de 1.700.000 a 1.900.000 EUR, dependiendo de la nacionalidad y los acuerdos de doble imposición.'
  }
]

export default function PremiosRolandGarros2026Page() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-[#fcf9f8]">
        <PageHero
          title="Premios Roland Garros 2026"
          subtitle="Prize money por ronda, comparativa Grand Slam y datos curiosos sobre los premios del torneo"
          image="/images/heroes/clay-court.jpg"
          badge={{ icon: 'emoji_events', text: 'Prize Money 2026' }}
          primaryCta={{ text: 'Comprar Entradas', href: 'https://goaltickets.com/es/collections/entradas-roland-garros-2026', icon: 'confirmation_number', external: true }}
          secondaryCta={{ text: 'Ver Premios por Ronda', href: '#premios-por-ronda', icon: 'arrow_downward' }}
        />

        <article className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">

              {/* Capsule Answer */}
              <div className="rounded-xl border border-[#ead5cd] bg-gradient-to-r from-orange-50/50 to-[#fcf9f8] p-6 shadow-sm mb-10">
                <p className="text-[#1d110c] text-base leading-relaxed">
                  <strong>El campeón individual de Roland Garros 2026 se llevará aproximadamente 2.400.000 EUR</strong>, con un prize money total estimado de <strong>~53 millones de euros</strong>. Incluso un jugador eliminado en primera ronda cobra unos 55.000 EUR. Desde 2006, hombres y mujeres reciben premios idénticos.
                </p>
              </div>

              {/* Prize Money by Round */}
              <section id="premios-por-ronda" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Prize Money por Ronda en Roland Garros 2026
                </h2>

                <p className="text-[#1d110c] mb-6 leading-relaxed">
                  La siguiente tabla muestra los premios estimados para cada ronda del cuadro individual y de dobles. Los importes son aproximados y se basan en la edición 2025, con un ligero incremento proyectado.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#c75033] text-white">
                        <th className="px-4 py-3 text-left font-bold">Ronda</th>
                        <th className="px-4 py-3 text-left font-bold">Individual</th>
                        <th className="px-4 py-3 text-left font-bold">Dobles (por pareja)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 bg-white">
                        <td className="px-4 py-3 font-semibold">Campeón</td>
                        <td className="px-4 py-3">~2.400.000 EUR</td>
                        <td className="px-4 py-3">~650.000 EUR</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="px-4 py-3 font-semibold">Subcampeón</td>
                        <td className="px-4 py-3">~1.200.000 EUR</td>
                        <td className="px-4 py-3">~325.000 EUR</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-white">
                        <td className="px-4 py-3 font-semibold">Semifinales</td>
                        <td className="px-4 py-3">~600.000 EUR</td>
                        <td className="px-4 py-3">~162.000 EUR</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="px-4 py-3 font-semibold">Cuartos de final</td>
                        <td className="px-4 py-3">~380.000 EUR</td>
                        <td className="px-4 py-3">~90.000 EUR</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-white">
                        <td className="px-4 py-3 font-semibold">4ª Ronda</td>
                        <td className="px-4 py-3">~230.000 EUR</td>
                        <td className="px-4 py-3">~50.000 EUR</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="px-4 py-3 font-semibold">3ª Ronda</td>
                        <td className="px-4 py-3">~140.000 EUR</td>
                        <td className="px-4 py-3">~28.000 EUR</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-white">
                        <td className="px-4 py-3 font-semibold">2ª Ronda</td>
                        <td className="px-4 py-3">~90.000 EUR</td>
                        <td className="px-4 py-3">~18.000 EUR</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="px-4 py-3 font-semibold">1ª Ronda</td>
                        <td className="px-4 py-3">~55.000 EUR</td>
                        <td className="px-4 py-3">~12.000 EUR</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-white">
                        <td className="px-4 py-3 font-semibold">Clasificación</td>
                        <td className="px-4 py-3">~15.000-25.000 EUR</td>
                        <td className="px-4 py-3">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[#a15d45] text-sm">
                  * Los importes son estimaciones basadas en la progresión histórica. Los premios oficiales de 2026 se confirmarán semanas antes del torneo.
                </p>
              </section>

              {/* Historical Evolution */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Evolución Histórica del Prize Money
                </h2>

                <p className="text-[#1d110c] mb-4 leading-relaxed">
                  El prize money de Roland Garros ha experimentado un crecimiento espectacular en los últimos 15 años, impulsado por los contratos televisivos, los patrocinios y la globalización del tenis. Estos son los hitos principales:
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 text-center">
                    <p className="text-sm text-[#a15d45] font-medium mb-1">2010</p>
                    <p className="text-2xl font-black text-[#1d110c]">~16M EUR</p>
                    <p className="text-xs text-[#a15d45] mt-1">Prize money total</p>
                  </div>
                  <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 text-center">
                    <p className="text-sm text-[#a15d45] font-medium mb-1">2015</p>
                    <p className="text-2xl font-black text-[#1d110c]">~28M EUR</p>
                    <p className="text-xs text-[#a15d45] mt-1">Prize money total</p>
                  </div>
                  <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 text-center">
                    <p className="text-sm text-[#a15d45] font-medium mb-1">2020</p>
                    <p className="text-2xl font-black text-[#1d110c]">~38M EUR</p>
                    <p className="text-xs text-[#a15d45] mt-1">Prize money total</p>
                  </div>
                  <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 text-center">
                    <p className="text-sm text-[#a15d45] font-medium mb-1">2025</p>
                    <p className="text-2xl font-black text-[#1d110c]">~53M EUR</p>
                    <p className="text-xs text-[#a15d45] mt-1">Prize money total</p>
                  </div>
                </div>

                <p className="text-[#1d110c] leading-relaxed">
                  En apenas 15 años, los premios totales han crecido más de un 230%. Este aumento refleja la apuesta de la Federación Francesa de Tenis (FFT) por mantener Roland Garros competitivo frente a los otros Grand Slams, especialmente el US Open y el Australian Open, que históricamente ofrecían cifras superiores.
                </p>
              </section>

              {/* Grand Slam Comparison */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Comparativa de Premios entre Grand Slams
                </h2>

                <p className="text-[#1d110c] mb-6 leading-relaxed">
                  ¿Cómo se compara Roland Garros con los otros tres Grand Slams? Cada torneo utiliza su moneda local, lo que dificulta una comparación directa, pero estos son los datos aproximados:
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#c75033] text-white">
                        <th className="px-4 py-3 text-left font-bold">Torneo</th>
                        <th className="px-4 py-3 text-left font-bold">Prize Money Total</th>
                        <th className="px-4 py-3 text-left font-bold">Campeón Individual</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 bg-white">
                        <td className="px-4 py-3 font-semibold">US Open</td>
                        <td className="px-4 py-3">~65M USD</td>
                        <td className="px-4 py-3">~3.6M USD</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="px-4 py-3 font-semibold">Australian Open</td>
                        <td className="px-4 py-3">~60M AUD</td>
                        <td className="px-4 py-3">~3.15M AUD</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-white">
                        <td className="px-4 py-3 font-semibold">Wimbledon</td>
                        <td className="px-4 py-3">~50M GBP</td>
                        <td className="px-4 py-3">~2.7M GBP</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="px-4 py-3 font-semibold">Roland Garros</td>
                        <td className="px-4 py-3">~53M EUR</td>
                        <td className="px-4 py-3">~2.4M EUR</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[#a15d45] text-sm">
                  * Los importes son aproximados y corresponden a las ediciones más recientes. Las cifras varían cada año y las diferencias cambiarias afectan la comparación.
                </p>
              </section>

              {/* Ball Boy Earnings */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  ¿Cuánto Cobran los Recogepelotas?
                </h2>

                <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 mb-6">
                  <p className="text-[#1d110c] leading-relaxed mb-4">
                    Los recogepelotas de Roland Garros, conocidos en francés como <em>ramasseurs de balles</em>, no reciben un salario propiamente dicho. Se trata de un <strong>rol honorífico y formativo</strong> al que aspiran miles de jóvenes tenistas franceses cada año.
                  </p>
                  <p className="text-[#1d110c] leading-relaxed mb-4">
                    A cambio de su trabajo durante las dos semanas del torneo, los recogepelotas reciben:
                  </p>
                  <ul className="space-y-2 text-[#1d110c]">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary mt-0.5" style={{fontSize: '18px'}}>checkroom</span>
                      <span><strong>Equipamiento deportivo completo:</strong> ropa, zapatillas y accesorios oficiales del torneo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary mt-0.5" style={{fontSize: '18px'}}>restaurant</span>
                      <span><strong>Comidas:</strong> desayuno, almuerzo y merienda durante cada jornada</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary mt-0.5" style={{fontSize: '18px'}}>directions_bus</span>
                      <span><strong>Transporte:</strong> traslados organizados desde puntos de recogida</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary mt-0.5" style={{fontSize: '18px'}}>stars</span>
                      <span><strong>Experiencia única:</strong> estar en la pista con los mejores tenistas del mundo, un recuerdo para toda la vida</span>
                    </li>
                  </ul>
                </div>

                <p className="text-[#1d110c] leading-relaxed">
                  Se seleccionan unos 250 jóvenes de entre 12 y 16 años, procedentes de clubes de tenis de toda Francia. El proceso de selección incluye pruebas físicas, de coordinación y de conocimiento de las reglas del tenis.
                </p>
              </section>

              {/* Champion Take-Home After Taxes */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  ¿Cuánto Se Lleva el Campeón Después de Impuestos?
                </h2>

                <p className="text-[#1d110c] mb-4 leading-relaxed">
                  Francia aplica una retención fiscal a los deportistas no residentes que compiten en el país. Para los tenistas internacionales que ganan premios en Roland Garros, la carga fiscal es significativa:
                </p>

                <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 mb-6">
                  <div className="grid sm:grid-cols-3 gap-6 text-center">
                    <div>
                      <p className="text-sm text-[#a15d45] font-medium mb-1">Premio bruto</p>
                      <p className="text-2xl font-black text-[#1d110c]">~2.400.000 EUR</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#a15d45] font-medium mb-1">Retención fiscal</p>
                      <p className="text-2xl font-black text-red-600">~20-30%</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#a15d45] font-medium mb-1">Neto estimado</p>
                      <p className="text-2xl font-black text-green-700">~1.7-1.9M EUR</p>
                    </div>
                  </div>
                </div>

                <p className="text-[#1d110c] mb-4 leading-relaxed">
                  El porcentaje exacto depende de la nacionalidad del jugador y de los convenios de doble imposición entre Francia y su país de residencia fiscal. Los jugadores franceses tributan según el régimen fiscal general francés, que puede ser incluso más elevado para las rentas altas.
                </p>

                <p className="text-[#1d110c] leading-relaxed">
                  Además del impuesto francés, los jugadores pueden tener obligaciones fiscales adicionales en su país de residencia, aunque muchos tenistas profesionales residen en jurisdicciones con fiscalidad favorable como Mónaco, Dubái o Suiza.
                </p>
              </section>

              {/* Fun Facts */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Datos Curiosos sobre los Premios de Roland Garros
                </h2>

                <div className="space-y-4">
                  <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6">
                    <h3 className="text-xl font-bold mb-2 text-[#1d110c]">Nadal: el rey del prize money en París</h3>
                    <p className="text-[#1d110c] leading-relaxed">
                      Rafael Nadal acumuló aproximadamente <strong>130 millones de euros</strong> solo en premios de Roland Garros a lo largo de su carrera. Sus 14 títulos entre 2005 y 2022 le convierten en el deportista que más dinero ha ganado en un único torneo en la historia del tenis.
                    </p>
                  </div>

                  <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6">
                    <h3 className="text-xl font-bold mb-2 text-[#1d110c]">Igualdad salarial desde 2006</h3>
                    <p className="text-[#1d110c] leading-relaxed">
                      Roland Garros fue el segundo Grand Slam (tras el Australian Open en 2001) en igualar los premios entre hombres y mujeres. Desde 2006, la campeona y el campeón reciben exactamente la misma cantidad. Wimbledon tardó hasta 2007 y el US Open lo implementó desde 1973.
                    </p>
                  </div>

                  <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6">
                    <h3 className="text-xl font-bold mb-2 text-[#1d110c]">El premio del clasificatorio</h3>
                    <p className="text-[#1d110c] leading-relaxed">
                      Incluso los jugadores que no logran entrar en el cuadro principal reciben compensación. Caer en la primera ronda de la clasificación supone unos 15.000 EUR, una cantidad que para muchos tenistas del circuito challenger representa un ingreso muy significativo.
                    </p>
                  </div>

                  <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6">
                    <h3 className="text-xl font-bold mb-2 text-[#1d110c]">Crecimiento imparable</h3>
                    <p className="text-[#1d110c] leading-relaxed">
                      En 1968, cuando Roland Garros se abrió a los profesionales (Era Open), el premio del campeón era de unos pocos miles de francos. Hoy supera los 2 millones de euros. El crecimiento ha sido exponencial, especialmente desde los años 2000 con la explosión de los derechos de televisión.
                    </p>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Preguntas Frecuentes sobre los Premios
                </h2>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              <GoalTicketsCTA />

              {/* Related Links */}
              <section className="mt-12">
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
                    href="/final-roland-garros-2026"
                    className="block bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow card-hover"
                  >
                    <h3 className="text-lg font-bold mb-2 text-[#1d110c]">Final Roland Garros 2026</h3>
                    <p className="text-sm text-[#a15d45]">
                      Fechas, horarios y entradas para las finales masculina y femenina.
                    </p>
                  </Link>

                  <Link
                    href="/preguntas-frecuentes"
                    className="block bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow card-hover"
                  >
                    <h3 className="text-lg font-bold mb-2 text-[#1d110c]">Preguntas Frecuentes</h3>
                    <p className="text-sm text-[#a15d45]">
                      Resuelve todas tus dudas sobre Roland Garros 2026.
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
