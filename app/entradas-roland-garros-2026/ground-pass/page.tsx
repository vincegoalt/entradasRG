import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { FAQSchema } from '@/components/seo/FAQSchema'

export const metadata: Metadata = {
  title: 'Ground Pass Roland Garros 2026: Guía Completa, Precio y Consejos',
  description: 'Todo sobre el ground pass de Roland Garros 2026: qué incluye, precio, mejores días para comprarlo, estrategias y cómo maximizar tu experiencia.',
  keywords: [
    'ground pass roland garros',
    'roland garros ground pass precio',
    'entrada general roland garros',
    'ground pass roland garros 2026',
    'que incluye ground pass roland garros',
    'mejor dia ground pass roland garros'
  ],
  openGraph: {
    title: 'Ground Pass Roland Garros 2026: Guía Completa',
    description: 'La entrada más económica y versátil para Roland Garros. Descubre todo sobre el ground pass.',
    type: 'article',
    url: 'https://entradasrolandgarros.com/entradas-roland-garros-2026/ground-pass',
  },
  alternates: {
    canonical: 'https://entradasrolandgarros.com/entradas-roland-garros-2026/ground-pass',
  },
}

const faqs = [
  {
    question: '¿Qué pistas puedo ver con el ground pass?',
    answer: 'Con el ground pass tienes acceso a todas las pistas exteriores (aproximadamente 6-18 pistas) excepto las tres principales: Philippe-Chatrier, Suzanne-Lenglen y Simonne-Mathieu. Estas pistas exteriores albergan partidos de alta calidad, especialmente durante la primera semana.'
  },
  {
    question: '¿Cuántos partidos puedo ver en un día con ground pass?',
    answer: 'Durante la primera semana del torneo, puedes ver fácilmente entre 15 y 50+ partidos en un solo día con un ground pass, dependiendo de cuánto tiempo pases en cada pista. Los partidos en pistas exteriores se juegan simultáneamente en múltiples canchas.'
  },
  {
    question: '¿Es mejor comprar ground pass o entrada individual?',
    answer: 'Depende de tus preferencias. El ground pass es mejor si quieres ver múltiples partidos, explorar libremente y pagar menos. Una entrada individual es mejor si quieres garantizar ver un partido específico en una pista principal con asiento asignado.'
  },
  {
    question: '¿Se puede comprar ground pass el mismo día?',
    answer: 'Sí, durante la primera semana del torneo generalmente hay ground passes disponibles el mismo día en taquillas. Sin embargo, para los fines de semana y las rondas finales, es mejor comprar con anticipación ya que se agotan más rápido.'
  }
]

export default function GroundPassPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-8">
          <div className="container mx-auto px-4">
            <Breadcrumbs
              items={[
                { name: 'Entradas Roland Garros 2026', url: 'https://entradasrolandgarros.com/entradas-roland-garros-2026' },
                { name: 'Ground Pass', url: 'https://entradasrolandgarros.com/entradas-roland-garros-2026/ground-pass' }
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-800 text-white pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <span className="font-semibold">La Mejor Opción de Valor</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Ground Pass Roland Garros 2026
              </h1>
              <p className="text-xl md:text-2xl text-green-100">
                Guía completa para aprovechar al máximo la entrada más versátil y económica del torneo
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">

              {/* Introduction */}
              <section className="mb-12">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  El ground pass (entrada general) es la forma más popular de asistir a Roland Garros, especialmente para
                  verdaderos aficionados al tenis que quieren maximizar la cantidad de tenis que ven. Con un ground pass,
                  puedes moverte libremente entre múltiples pistas exteriores, descubrir nuevos talentos, y ver docenas de
                  partidos en un solo día, todo a una fracción del precio de una entrada individual para pista principal.
                </p>

                <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">En Resumen: El Ground Pass</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-green-600 mb-1">€35-85</div>
                      <div className="text-sm text-gray-600">Precio según semana</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600 mb-1">15-50+</div>
                      <div className="text-sm text-gray-600">Partidos por día</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600 mb-1">6-18</div>
                      <div className="text-sm text-gray-600">Pistas accesibles</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ¿Qué es el Ground Pass? */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  ¿Qué es Exactamente el Ground Pass?
                </h2>

                <p className="text-gray-700 mb-6">
                  El ground pass es una entrada sin asiento asignado que te da acceso libre a todas las pistas exteriores
                  del complejo de Roland Garros. A diferencia de las entradas individuales que te dan un asiento específico
                  en una pista principal, el ground pass te permite explorar el recinto libremente y elegir qué partidos ver.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-green-800">Acceso Incluido</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span><strong>Pistas 4-18:</strong> Todas las pistas exteriores con asientos por orden de llegada</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span><strong>Zonas de práctica:</strong> Ve a los jugadores calentando de cerca</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span><strong>Village Roland Garros:</strong> Zona de entretenimiento y actividades</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span><strong>Pantallas gigantes:</strong> Para seguir partidos de pistas principales</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span><strong>Restaurantes y tiendas:</strong> Toda la zona comercial</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span><strong>Áreas verdes:</strong> Zonas de descanso y picnic</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-red-800">NO Incluye</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <span><strong>Philippe-Chatrier:</strong> Pista central principal</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <span><strong>Suzanne-Lenglen:</strong> Segunda pista más grande</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <span><strong>Simonne-Mathieu:</strong> Tercera pista principal</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <span><strong>Áreas VIP:</strong> Salones de hospitalidad</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <span><strong>Asientos asignados:</strong> Los asientos son por orden de llegada</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                  <p className="text-gray-700">
                    <strong>Importante:</strong> Aunque no tienes acceso a las tres pistas principales, puedes seguir todos
                    sus partidos en las pantallas gigantes distribuidas por el complejo, muchas con áreas de asientos cómodas
                    y bares cercanos. Es una excelente alternativa cuando quieres descansar entre partidos en pistas exteriores.
                  </p>
                </div>
              </section>

              {/* Precios */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Precios del Ground Pass 2026
                </h2>

                <p className="text-gray-700 mb-6">
                  El precio del ground pass varía según la semana del torneo, con incrementos progresivos a medida que
                  el torneo avanza y el número de partidos en pistas exteriores disminuye.
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full bg-white border border-gray-300">
                    <thead className="bg-green-600 text-white">
                      <tr>
                        <th className="py-3 px-4 text-left">Ronda</th>
                        <th className="py-3 px-4 text-left">Días</th>
                        <th className="py-3 px-4 text-left">Precio</th>
                        <th className="py-3 px-4 text-left">Partidos Aprox.</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="bg-green-50">
                        <td className="py-3 px-4 font-semibold">Primera Ronda</td>
                        <td className="py-3 px-4">Domingo-Martes</td>
                        <td className="py-3 px-4 text-green-600 font-bold">€35-40</td>
                        <td className="py-3 px-4">50+ partidos/día</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold">Segunda Ronda</td>
                        <td className="py-3 px-4">Miércoles-Viernes</td>
                        <td className="py-3 px-4 text-green-600 font-bold">€40-50</td>
                        <td className="py-3 px-4">30-40 partidos/día</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="py-3 px-4 font-semibold">Tercera Ronda</td>
                        <td className="py-3 px-4">Sábado-Lunes</td>
                        <td className="py-3 px-4 text-green-600 font-bold">€45-55</td>
                        <td className="py-3 px-4">20-25 partidos/día</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold">Octavos de Final</td>
                        <td className="py-3 px-4">Lunes-Miércoles</td>
                        <td className="py-3 px-4 text-green-600 font-bold">€55-65</td>
                        <td className="py-3 px-4">10-15 partidos/día</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="py-3 px-4 font-semibold">Cuartos de Final</td>
                        <td className="py-3 px-4">Miércoles-Jueves</td>
                        <td className="py-3 px-4 text-green-600 font-bold">€65-75</td>
                        <td className="py-3 px-4">5-8 partidos/día</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold">Semifinales</td>
                        <td className="py-3 px-4">Jueves-Viernes</td>
                        <td className="py-3 px-4 text-green-600 font-bold">€75-85</td>
                        <td className="py-3 px-4">Limitados</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="py-3 px-4 font-semibold">Finales</td>
                        <td className="py-3 px-4">Sábado-Domingo</td>
                        <td className="py-3 px-4 text-green-600 font-bold">€75-85</td>
                        <td className="py-3 px-4">Solo finales</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Mejor Valor por tu Dinero</h3>
                  <p className="text-gray-700 mb-3">
                    El ground pass ofrece el mejor valor durante la <strong>primera semana del torneo</strong> (Primera y
                    Segunda Ronda), cuando:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Hay la mayor cantidad de partidos simultáneos</li>
                    <li>• Los precios son más bajos (€35-50)</li>
                    <li>• Ves a todos los mejores jugadores del mundo</li>
                    <li>• Hay menos aglomeraciones que en las rondas finales</li>
                    <li>• El clima suele ser mejor (finales de mayo)</li>
                  </ul>
                </div>
              </section>

              {/* Mejores Días */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  ¿Cuál es el Mejor Día para Comprar Ground Pass?
                </h2>

                <div className="space-y-6">
                  <div className="bg-white border-2 border-green-400 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">Lunes-Martes de Primera Semana</h3>
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        MEJOR OPCIÓN
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Los primeros tres días del torneo ofrecen la experiencia definitiva del ground pass con el máximo
                      número de partidos y los precios más bajos del torneo.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold mb-2 text-green-700">Ventajas</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• 50+ partidos disponibles</li>
                          <li>• Precio más bajo (€35-40)</li>
                          <li>• Menos aglomeraciones</li>
                          <li>• Todos los top players juegan</li>
                          <li>• Fácil moverse entre pistas</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-gray-700">Desventajas</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Algunos partidos menos competitivos</li>
                          <li>• Puede haber sorpresas (eliminaciones tempranas)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-blue-300 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">Miércoles-Viernes (Segunda Ronda)</h3>
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        BUEN EQUILIBRIO
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Un excelente compromiso entre cantidad de tenis y calidad de partidos, con precios todavía razonables.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold mb-2 text-blue-700">Ventajas</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• 30-40 partidos por día</li>
                          <li>• Mejor calidad promedio</li>
                          <li>• Precio moderado (€40-50)</li>
                          <li>• Ambiente más animado</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-gray-700">Desventajas</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Más gente que en primeros días</li>
                          <li>• Precio ligeramente superior</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-orange-300 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">Segunda Semana (Octavos en adelante)</h3>
                      <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        VALOR LIMITADO
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      A medida que el torneo avanza, el valor del ground pass disminuye significativamente ya que la mayoría
                      de los mejores partidos se juegan en las tres pistas principales.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold mb-2 text-orange-700">Ventajas</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Máxima calidad de tenis</li>
                          <li>• Ambiente de finales único</li>
                          <li>• Pantallas gigantes con mejores partidos</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-gray-700">Desventajas</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Muy pocos partidos en exteriores</li>
                          <li>• Precio alto (€65-85)</li>
                          <li>• Difícil justificar el costo</li>
                          <li>• Mejor invertir en entrada individual</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Estrategias */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Estrategias para Maximizar tu Ground Pass
                </h2>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">1. Llega Temprano</h3>
                    <p className="text-gray-700 mb-3">
                      Las puertas se abren típicamente a las 10:00 AM. Llegar a la apertura te permite:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Conseguir los mejores asientos en pistas populares</li>
                      <li>• Ver a los jugadores en el calentamiento matinal</li>
                      <li>• Planificar tu día revisando el orden de juego</li>
                      <li>• Evitar colas en la entrada</li>
                      <li>• Disfrutar del complejo antes de las multitudes</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">2. Estudia el Orden de Juego</h3>
                    <p className="text-gray-700 mb-3">
                      El orden de juego se publica la noche anterior (alrededor de las 18:00) en rolandgarros.com:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Identifica los partidos que más te interesan</li>
                      <li>• Nota en qué pistas se jugarán</li>
                      <li>• Planifica una ruta entre pistas</li>
                      <li>• Ten alternativas si los partidos terminan rápido</li>
                      <li>• Considera horarios de comida entre partidos importantes</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">3. Gestiona tu Tiempo y Energía</h3>
                    <p className="text-gray-700 mb-3">
                      Un día completo en Roland Garros puede ser agotador. Estrategias clave:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Alterna entre pistas:</strong> No te quedes todo el día en una sola</li>
                      <li>• <strong>Toma descansos:</strong> Usa las áreas de césped para relajarte</li>
                      <li>• <strong>Hidrátate:</strong> Lleva botella reutilizable (hay fuentes de agua)</li>
                      <li>• <strong>Protección solar:</strong> Muchas pistas no tienen sombra completa</li>
                      <li>• <strong>Calzado cómodo:</strong> Caminarás varios kilómetros</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">4. Explora Diferentes Pistas</h3>
                    <p className="text-gray-700 mb-3">
                      Cada pista tiene su propia personalidad y ventajas:
                    </p>
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-4 rounded">
                        <div className="font-bold mb-1">Pistas 4-6 (Tamaño Medio)</div>
                        <p className="text-sm text-gray-700">
                          Buena capacidad, buenos asientos, partidos de jugadores top 30-50. Ambiente equilibrado.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded">
                        <div className="font-bold mb-1">Pistas 7-10 (Pequeñas)</div>
                        <p className="text-sm text-gray-700">
                          Muy íntimas, cerca de la acción, perfectas para ver técnicas de cerca. Llenan rápido para partidos populares.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded">
                        <div className="font-bold mb-1">Pistas 11-18 (Exteriores Pequeñas)</div>
                        <p className="text-sm text-gray-700">
                          Descubre futuros campeones. Ambiente relajado, fácil entrar y salir entre partidos.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">5. Aprovecha las Zonas de Práctica</h3>
                    <p className="text-gray-700 mb-3">
                      Una ventaja poco conocida del ground pass:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Ve a los top players calentando antes de partidos importantes</li>
                      <li>• Observa sus rutinas y preparación de cerca</li>
                      <li>• Mejor horario: temprano en la mañana (9:00-10:30)</li>
                      <li>• Los jugadores suelen ser más accesibles para autógrafos</li>
                      <li>• Excelente para fotografía deportiva</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">6. Usa las Pantallas Gigantes Estratégicamente</h3>
                    <p className="text-gray-700 mb-3">
                      Para seguir partidos de las pistas principales sin entrada individual:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Varias pantallas gigantes distribuidas con áreas de asientos</li>
                      <li>• Ambiente animado similar a ver en vivo</li>
                      <li>• Buena opción durante mediodía cuando hace más calor</li>
                      <li>• Cerca de zonas de restauración</li>
                      <li>• Perfecto para descansar entre visitas a pistas exteriores</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Qué Llevar */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Qué Llevar con tu Ground Pass
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-green-800">Esenciales Recomendados</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <div>
                          <strong>Protección solar:</strong> Gorra, gafas de sol, protector solar
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <div>
                          <strong>Botella de agua reutilizable:</strong> Fuentes disponibles para rellenar
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <div>
                          <strong>Calzado cómodo:</strong> Caminarás mucho todo el día
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <div>
                          <strong>Batería portátil:</strong> Para tu teléfono/cámara
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <div>
                          <strong>Mochila pequeña:</strong> Para guardar pertenencias
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <div>
                          <strong>Capa de lluvia ligera:</strong> Mayo puede ser impredecible
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <div>
                          <strong>Snacks ligeros:</strong> Barras energéticas, frutos secos
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-red-800">Prohibido / No Recomendado</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <div>
                          <strong>Bolsas grandes:</strong> Mochilas {'>'} 25L no permitidas
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <div>
                          <strong>Alimentos elaborados:</strong> No se permite comida completa
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <div>
                          <strong>Bebidas alcohólicas:</strong> Solo se venden dentro
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <div>
                          <strong>Cámaras profesionales:</strong> Sin lentes largos ({'>'} 200mm)
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <div>
                          <strong>Sillas/taburetes plegables:</strong> No permitidos
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <div>
                          <strong>Paraguas grandes:</strong> Obstruyen visión (capas mejor opción)
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Comparación */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Ground Pass vs. Entrada Individual: ¿Cuál Elegir?
                </h2>

                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-3 px-4 text-left">Aspecto</th>
                        <th className="py-3 px-4 text-left">Ground Pass</th>
                        <th className="py-3 px-4 text-left">Entrada Individual</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 px-4 font-semibold">Precio</td>
                        <td className="py-3 px-4 text-green-600">€35-85</td>
                        <td className="py-3 px-4">€65-540</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-4 font-semibold">Partidos visibles</td>
                        <td className="py-3 px-4 text-green-600">15-50+ por día</td>
                        <td className="py-3 px-4">1 partido garantizado</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold">Flexibilidad</td>
                        <td className="py-3 px-4 text-green-600">Total, muévete libremente</td>
                        <td className="py-3 px-4">Asiento fijo durante el partido</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-4 font-semibold">Pistas principales</td>
                        <td className="py-3 px-4 text-red-600">No incluidas</td>
                        <td className="py-3 px-4 text-green-600">Asiento asignado</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold">Asiento garantizado</td>
                        <td className="py-3 px-4 text-red-600">No, por orden llegada</td>
                        <td className="py-3 px-4 text-green-600">Sí, numerado</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-4 font-semibold">Mejor para</td>
                        <td className="py-3 px-4 text-green-600">Fanáticos, exploradores</td>
                        <td className="py-3 px-4">Un partido específico</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold">Disponibilidad</td>
                        <td className="py-3 px-4 text-green-600">Alta, mismo día posible</td>
                        <td className="py-3 px-4">Limitada, planificación necesaria</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Recomendación</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Elige Ground Pass si:</strong> Es tu primera vez, quieres ver mucho tenis, tienes presupuesto
                    limitado, visitas en primera semana, o te gusta explorar libremente.
                  </p>
                  <p className="text-gray-700">
                    <strong>Elige Entrada Individual si:</strong> Hay un partido específico que no te quieres perder,
                    prefieres comodidad de asiento asignado, visitas en finales, o quieres la experiencia completa de
                    pista central.
                  </p>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Preguntas Frecuentes
                </h2>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-bold mb-2 text-gray-900">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Conclusión */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Conclusión: Maximiza tu Experiencia Ground Pass
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  El ground pass de Roland Garros es posiblemente la mejor entrada de valor en el circuito de Grand Slams.
                  Por una fracción del precio de una entrada individual, puedes ver docenas de partidos de tenis de clase
                  mundial, explorar uno de los complejos de tenis más hermosos del mundo, y vivir la atmósfera única de
                  Roland Garros.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  La clave para aprovechar al máximo tu ground pass es la planificación estratégica: llegar temprano,
                  estudiar el orden de juego, alternar entre diferentes pistas, y gestionar tu energía durante el día.
                  Con las estrategias correctas, un solo día con ground pass puede darte recuerdos que durarán toda la vida.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ya sea que seas un fanático incondicional del tenis que quiere ver la mayor cantidad posible de partidos,
                  o un visitante casual que quiere experimentar Roland Garros sin gastar una fortuna, el ground pass es
                  tu entrada ideal. Especialmente durante la primera semana del torneo, ofrece un valor incomparable que
                  ninguna otra entrada puede igualar.
                </p>
              </section>

              {/* Related Links */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Guías Relacionadas
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <Link
                    href="/entradas-roland-garros-2026/tipos-de-entradas"
                    className="block bg-orange-50 border border-orange-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Todos los Tipos de Entradas</h3>
                    <p className="text-gray-700 mb-3">
                      Compara ground pass con entradas individuales, sesiones nocturnas y paquetes premium.
                    </p>
                    <span className="text-orange-600 font-semibold">Leer más →</span>
                  </Link>

                  <Link
                    href="/entradas-roland-garros-2026/precios"
                    className="block bg-orange-50 border border-orange-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Precios Detallados</h3>
                    <p className="text-gray-700 mb-3">
                      Desglose completo de precios para todas las rondas y tipos de entradas.
                    </p>
                    <span className="text-orange-600 font-semibold">Leer más →</span>
                  </Link>

                  <Link
                    href="/entradas-roland-garros-2026/donde-comprar"
                    className="block bg-orange-50 border border-orange-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Dónde Comprar</h3>
                    <p className="text-gray-700 mb-3">
                      Cómo comprar tu ground pass de forma oficial y segura, evitando estafas.
                    </p>
                    <span className="text-orange-600 font-semibold">Leer más →</span>
                  </Link>

                  <Link
                    href="/calendario-roland-garros-2026"
                    className="block bg-orange-50 border border-orange-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Calendario 2026</h3>
                    <p className="text-gray-700 mb-3">
                      Fechas de cada ronda para planificar qué días comprar tu ground pass.
                    </p>
                    <span className="text-orange-600 font-semibold">Leer más →</span>
                  </Link>
                </div>
              </section>

            </div>
          </div>
        </article>

        {/* CTA */}
        <section className="py-12 bg-gradient-to-r from-green-600 to-green-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para tu Aventura con Ground Pass?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link
                href="/entradas-roland-garros-2026"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-green-50 transition-colors"
              >
                Volver a Guía de Entradas
              </Link>
              <Link
                href="/calendario-roland-garros-2026"
                className="bg-green-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-900 transition-colors border-2 border-white"
              >
                Ver Calendario
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
