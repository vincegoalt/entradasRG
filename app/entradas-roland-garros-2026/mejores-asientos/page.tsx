import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { FAQSchema } from '@/components/seo/FAQSchema'

export const metadata: Metadata = {
  title: 'Mejores Asientos Roland Garros 2026: Guía por Pista, Sol y Sombra',
  description: 'Guía completa de los mejores asientos en Roland Garros 2026. Análisis por pista, consideraciones de sol y sombra, categorías recomendadas y dónde sentarse para la mejor experiencia.',
  keywords: [
    'mejores asientos roland garros',
    'donde sentarse roland garros',
    'asientos sombra roland garros',
    'philippe chatrier mejores asientos',
    'roland garros seating guide',
    'roland garros sol sombra'
  ],
  openGraph: {
    title: 'Mejores Asientos Roland Garros 2026: Guía Completa',
    description: 'Descubre los mejores asientos por pista, consideraciones de sol/sombra y categorías recomendadas.',
    type: 'article',
    url: 'https://entradasrolandgarros.com/entradas-roland-garros-2026/mejores-asientos',
  },
  alternates: {
    canonical: 'https://entradasrolandgarros.com/entradas-roland-garros-2026/mejores-asientos',
  },
}

const faqs = [
  {
    question: '¿Cuáles son los mejores asientos en Philippe-Chatrier?',
    answer: 'Los asientos categoría 1 (centrales, filas 10-25) ofrecen las mejores vistas. Sin embargo, categoría 2 lateral bajo (filas 1-15) ofrece excelente compromiso precio-vista. Evita asientos directamente detrás de las líneas de fondo si quieres seguir la pelota de cerca.'
  },
  {
    question: '¿Es mejor sentarse al sol o a la sombra?',
    answer: 'En días calurosos de mayo-junio, la sombra es crucial. Philippe-Chatrier: lado norte tiene sombra por la tarde. Suzanne-Lenglen: oeste tiene sombra después del mediodía. Considera horario del partido y clima previsto al elegir asientos.'
  },
  {
    question: '¿Vale la pena pagar por asientos bajos o son mejores los altos?',
    answer: 'Asientos bajos (filas 1-10) ofrecen intensidad y cercanía a jugadores, pero dificultan seguir la pelota. Filas medias (10-25) ofrecen mejor equilibrio: ves tácticas claramente y sientes la atmósfera. Asientos altos (25+) dan perspectiva panorámica ideal para analizar el juego.'
  },
  {
    question: '¿Los asientos detrás de los jugadores son buenos?',
    answer: 'Depende de tu preferencia. Asientos detrás de la línea de fondo te dan la perspectiva del jugador (genial para entender profundidad y velocidad), pero es más difícil seguir el intercambio. Asientos laterales ofrecen mejor vista completa de la cancha.'
  }
]

export default function MejoresAsientosPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-8">
          <div className="container mx-auto px-4">
            <Breadcrumbs
              items={[
                { name: 'Entradas Roland Garros 2026', url: 'https://entradasrolandgarros.com/entradas-roland-garros-2026' },
                { name: 'Mejores Asientos', url: 'https://entradasrolandgarros.com/entradas-roland-garros-2026/mejores-asientos' }
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Mejores Asientos Roland Garros 2026
              </h1>
              <p className="text-xl md:text-2xl text-purple-100">
                Guía completa por pista: dónde sentarse para la mejor experiencia según tu presupuesto
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
                  Elegir el asiento correcto puede transformar completamente tu experiencia en Roland Garros. No se trata
                  solo de estar cerca de la acción: factores como la posición del sol, el ángulo de visión, la altura del
                  asiento y la pista específica influyen enormemente en tu disfrute del partido.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Esta guía te ayudará a entender las ventajas y desventajas de cada zona de asientos, consideraciones
                  críticas de sol y sombra en el calor parisino de mayo-junio, y las mejores opciones según tu presupuesto
                  y preferencias. Ya sea que busques la intensidad de primera fila o la perspectiva táctica de asientos
                  altos, encontrarás la información necesaria para tomar la mejor decisión.
                </p>
              </section>

              {/* Philippe-Chatrier */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Philippe-Chatrier (Pista Central): Guía de Asientos
                </h2>

                <p className="text-gray-700 mb-6">
                  Con capacidad para 15,225 espectadores, Philippe-Chatrier es la pista más icónica de Roland Garros.
                  Renovada en 2019 con techo retráctil, ofrece experiencia de clase mundial en cualquier clima.
                </p>

                {/* Categoría 1 */}
                <div className="bg-orange-50 border-2 border-orange-400 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-0">Categoría 1 (Oro) - Asientos Premium</h3>
                    <span className="bg-orange-600 text-white px-3 py-2 rounded-lg font-bold">
                      €150-540
                    </span>
                  </div>

                  <div className="bg-white rounded-lg p-6 mb-4">
                    <h4 className="font-bold text-lg mb-3 text-gray-900">Ubicación</h4>
                    <p className="text-gray-700 mb-3">
                      Secciones centrales (a ambos lados de la cancha), filas 10-30. Los asientos más codiciados del torneo.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-bold text-green-700 mb-2">Ventajas</h5>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Vista perfectamente centrada de toda la cancha</li>
                          <li>• Ángulo ideal para seguir intercambios</li>
                          <li>• Proximidad a la acción sin perder perspectiva</li>
                          <li>• Sombra parcial en la mayoría de asientos</li>
                          <li>• Ambiente premium con mejores servicios</li>
                          <li>• Asientos más cómodos del estadio</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-red-700 mb-2">Desventajas</h5>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Precio muy alto (hasta €540 para finales)</li>
                          <li>• Difícil conseguir (alta demanda)</li>
                          <li>• Filas muy bajas (1-10) pueden dificultar seguir pelota</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-100 border-l-4 border-orange-500 p-4">
                    <p className="text-gray-700 mb-0">
                      <strong>Recomendación:</strong> Si tu presupuesto lo permite, las filas 15-25 de categoría 1 ofrecen
                      la experiencia definitiva de Roland Garros. Evita filas 1-5 a menos que quieras sentir la intensidad
                      extrema (pero prepárate para girar la cabeza constantemente).
                    </p>
                  </div>
                </div>

                {/* Categoría 2 */}
                <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-0">Categoría 2 (Plata) - Mejor Valor</h3>
                    <span className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold">
                      €100-420
                    </span>
                  </div>

                  <div className="bg-white rounded-lg p-6 mb-4">
                    <h4 className="font-bold text-lg mb-3 text-gray-900">Ubicación</h4>
                    <p className="text-gray-700 mb-3">
                      Secciones laterales bajas (filas 1-20) o centrales altas (filas 30-45). Excelente compromiso
                      precio-calidad.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-bold text-green-700 mb-2">Ventajas</h5>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• 30-40% más económico que categoría 1</li>
                          <li>• Laterales bajos: cercanía sin perder vista completa</li>
                          <li>• Centrales altos: perspectiva táctica excelente</li>
                          <li>• Buena disponibilidad vs. categoría 1</li>
                          <li>• Muchos asientos tienen sombra</li>
                          <li>• Vista sin obstrucciones</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-red-700 mb-2">Desventajas</h5>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Asientos laterales: ángulo menos ideal</li>
                          <li>• Asientos altos: menos cercanía emocional</li>
                          <li>• Algunos asientos laterales tienen sol directo</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-100 border-l-4 border-blue-500 p-4">
                    <p className="text-gray-700 mb-0">
                      <strong>Recomendación:</strong> La categoría 2 ofrece posiblemente el mejor valor en Philippe-Chatrier.
                      Si eliges lateral bajo (filas 5-15), tendrás una experiencia muy similar a categoría 1 a fracción del
                      precio. Los asientos centrales altos son perfectos para analistas del juego.
                    </p>
                  </div>
                </div>

                {/* Categoría 3 */}
                <div className="bg-gray-50 border-2 border-gray-400 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-0">Categoría 3 (Bronce) - Económica</h3>
                    <span className="bg-gray-600 text-white px-3 py-2 rounded-lg font-bold">
                      €65-350
                    </span>
                  </div>

                  <div className="bg-white rounded-lg p-6 mb-4">
                    <h4 className="font-bold text-lg mb-3 text-gray-900">Ubicación</h4>
                    <p className="text-gray-700 mb-3">
                      Asientos altos en esquinas, laterales muy altos, o detrás de las líneas de fondo. Las zonas más
                      económicas del estadio.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-bold text-green-700 mb-2">Ventajas</h5>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Precio muy accesible (desde €65)</li>
                          <li>• Vista panorámica completa</li>
                          <li>• Mejor para días calurosos (más sombra)</li>
                          <li>• Perfectos para entender tácticas globales</li>
                          <li>• Menor aglomeración en pasillos</li>
                          <li>• Fácil acceso a baños y concesiones</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-red-700 mb-2">Desventajas</h5>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Distancia considerable de la cancha</li>
                          <li>• Menos intensidad emocional</li>
                          <li>• Difícil ver expresiones de jugadores</li>
                          <li>• Asientos detrás de fondo: seguir pelota complicado</li>
                          <li>• Escaleras empinadas para llegar</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-100 border-l-4 border-gray-500 p-4">
                    <p className="text-gray-700 mb-0">
                      <strong>Recomendación:</strong> Si tu prioridad es estar en Philippe-Chatrier sin gastar demasiado,
                      categoría 3 es perfectamente válida. Los asientos laterales altos son mejores que detrás del fondo.
                      Ideal para primera experiencia o días muy calurosos donde la sombra es prioritaria.
                    </p>
                  </div>
                </div>

                {/* Sol y Sombra Chatrier */}
                <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Consideraciones de Sol y Sombra</h3>

                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-bold mb-2 text-gray-900">Sesiones de Tarde (14:00-19:00)</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Lado Norte (Tribune Nord):</strong> Sombra progresiva desde las 15:00. MEJOR OPCIÓN.</li>
                        <li>• <strong>Lado Sur (Tribune Sud):</strong> Sol directo hasta las 18:00. Evitar en días calurosos.</li>
                        <li>• <strong>Lado Este:</strong> Sol hasta media tarde.</li>
                        <li>• <strong>Lado Oeste:</strong> Sombra temprana, luego sol.</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-bold mb-2 text-gray-900">Sesiones Nocturnas (21:00+)</h4>
                      <p className="text-gray-700">
                        Con el techo retráctil y luces artificiales, el sol no es factor. Todas las secciones tienen
                        iluminación uniforme. Elige puramente por vista preferida.
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-bold mb-2 text-gray-900">Días Nublados/Frescos</h4>
                      <p className="text-gray-700">
                        Si la temperatura es {'<'} 20°C o está nublado, considera asientos con sol para mayor confort térmico.
                        El lado sur es ideal en estos casos.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Suzanne-Lenglen */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Suzanne-Lenglen: Guía de Asientos
                </h2>

                <p className="text-gray-700 mb-6">
                  Con capacidad para 10,068 espectadores, Suzanne-Lenglen es la segunda pista de Roland Garros. Ambiente
                  más íntimo y animado que Philippe-Chatrier, con precios más accesibles.
                </p>

                <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Características Generales</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• <strong>Mejores asientos:</strong> Secciones centrales, filas 10-25</li>
                    <li>• <strong>Mejor valor:</strong> Laterales bajos (filas 5-15) - excelente vista a precio razonable</li>
                    <li>• <strong>Sombra:</strong> Lado oeste tiene sombra después del mediodía</li>
                    <li>• <strong>Sol:</strong> Lado este recibe sol directo en sesiones de tarde</li>
                    <li>• <strong>Acústica:</strong> Mejor que Philippe-Chatrier - estadio más compacto amplifica ambiente</li>
                    <li>• <strong>Vista:</strong> Prácticamente no hay malos asientos - estadio bien diseñado</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Por Qué Elegir Suzanne-Lenglen</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Precios 20-30% más bajos que Chatrier</li>
                      <li>• Partidos de jugadores top 20 garantizado</li>
                      <li>• Ambiente más ruidoso y apasionado</li>
                      <li>• Menos "corporativo" que Chatrier</li>
                      <li>• Cercanía a la acción en casi todos los asientos</li>
                      <li>• Incluye ground pass el mismo día</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Asientos Recomendados</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Presupuesto alto:</strong> Centrales filas 15-25</li>
                      <li>• <strong>Mejor valor:</strong> Laterales filas 8-18</li>
                      <li>• <strong>Económico:</strong> Altos centrales (vista completa)</li>
                      <li>• <strong>Días calurosos:</strong> Lado oeste cualquier fila</li>
                      <li>• <strong>Días frescos:</strong> Lado este filas bajas</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Veredicto</h3>
                  <p className="text-gray-700 mb-0">
                    Suzanne-Lenglen ofrece posiblemente la mejor relación calidad-precio en todo Roland Garros. Si no
                    tienes necesidad específica de estar en la pista central, este estadio te dará una experiencia igual
                    de memorable con mejor valor y ambiente más auténtico. Los jugadores top juegan aquí regularmente.
                  </p>
                </div>
              </section>

              {/* Simonne-Mathieu */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Simonne-Mathieu: Guía de Asientos
                </h2>

                <p className="text-gray-700 mb-6">
                  La pista más nueva de Roland Garros (inaugurada en 2019), con un diseño arquitectónico único semi-enterrado
                  y rodeado de invernaderos botánicos. Capacidad para 5,000 espectadores.
                </p>

                <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Experiencia Única</h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-bold mb-2 text-green-700">Ventajas Especiales</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Arquitectura única - una de las pistas más bonitas del mundo</li>
                        <li>• Ambiente muy íntimo (solo 5,000 personas)</li>
                        <li>• Diseño semi-enterrado protege del viento</li>
                        <li>• Invernaderos crean microclima único</li>
                        <li>• Excelente para fotografía</li>
                        <li>• Menos multitudes y más espacio</li>
                        <li>• Precios accesibles</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 text-gray-700">Consideraciones</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Jugadores top 30-50 (menos stars que otras dos)</li>
                        <li>• Ubicación un poco alejada del centro</li>
                        <li>• Algunos asientos tienen sol directo todo el día</li>
                        <li>• Escaleras empinadas para acceder</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold mb-2 text-gray-900">Mejores Asientos</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Vista perfecta:</strong> Laterales norte, filas 8-15 (sombra + vista)</li>
                      <li>• <strong>Fotógrafos:</strong> Lado sur superior (marco con invernaderos)</li>
                      <li>• <strong>Cercanía:</strong> Cualquier fila baja (1-10) - estadio compacto</li>
                      <li>• <strong>Sombra garantizada:</strong> Lado norte, cualquier altura</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Recomendación</h3>
                  <p className="text-gray-700 mb-0">
                    Simonne-Mathieu es ideal para tu primera vez en Roland Garros o si buscas una experiencia más relajada
                    y fotogénica. Los precios son muy razonables (€45-200) y la arquitectura única hace que valga la pena
                    incluso si el partido no es de altísimo nivel. Perfecto para días muy calurosos gracias a su diseño
                    que proporciona mucha sombra natural.
                  </p>
                </div>
              </section>

              {/* Factores Generales */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Factores Clave al Elegir Asientos
                </h2>

                <div className="space-y-6">
                  {/* Factor 1: Altura */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">1. Altura del Asiento</h3>

                    <div className="space-y-4">
                      <div className="bg-red-50 p-4 rounded">
                        <h4 className="font-bold mb-2 text-red-700">Filas Muy Bajas (1-5)</h4>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Sensación:</strong> Intensidad extrema, como estar en la cancha
                        </p>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Mejor para:</strong> Fanáticos hardcore que priorizan atmósfera sobre vista completa
                        </p>
                        <p className="text-sm text-gray-700">
                          <strong>Limitaciones:</strong> Difícil seguir la pelota en intercambios rápidos, cuello cansado
                          de girar, red puede obstruir vista
                        </p>
                      </div>

                      <div className="bg-green-50 p-4 rounded">
                        <h4 className="font-bold mb-2 text-green-700">Filas Bajas-Medias (6-15)</h4>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Sensación:</strong> Excelente equilibrio entre cercanía y visibilidad
                        </p>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Mejor para:</strong> Mayoría de espectadores - la "zona dorada"
                        </p>
                        <p className="text-sm text-gray-700">
                          <strong>Ventajas:</strong> Ves expresiones de jugadores, sigues la pelota sin problema, sientes
                          el ambiente, ángulo de vista ideal
                        </p>
                      </div>

                      <div className="bg-blue-50 p-4 rounded">
                        <h4 className="font-bold mb-2 text-blue-700">Filas Medias-Altas (16-30)</h4>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Sensación:</strong> Perspectiva táctica, vista completa de la cancha
                        </p>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Mejor para:</strong> Analistas del juego, estudiantes de tenis, días calurosos (sombra)
                        </p>
                        <p className="text-sm text-gray-700">
                          <strong>Ventajas:</strong> Entiendes tácticas perfectamente, ves movimientos completos, menos
                          aglomeración
                        </p>
                      </div>

                      <div className="bg-gray-50 p-4 rounded">
                        <h4 className="font-bold mb-2 text-gray-700">Filas Altas (30+)</h4>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Sensación:</strong> Vista panorámica tipo "bird's eye"
                        </p>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Mejor para:</strong> Presupuesto ajustado, días muy soleados
                        </p>
                        <p className="text-sm text-gray-700">
                          <strong>Limitaciones:</strong> Poca cercanía emocional, difícil ver detalles, sensación de estar
                          "lejos del evento"
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Factor 2: Ubicación Lateral vs Central */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">2. Ubicación: Lateral vs. Central</h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-purple-50 p-4 rounded">
                        <h4 className="font-bold mb-3 text-purple-700">Asientos Centrales (Lado)</h4>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div>
                            <p className="font-semibold mb-1">Ventajas:</p>
                            <ul className="ml-4 space-y-1">
                              <li>• Vista simétrica perfecta de toda la cancha</li>
                              <li>• Fácil seguir intercambios laterales</li>
                              <li>• Mejores asientos del estadio</li>
                              <li>• Ves ambos lados igualmente bien</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold mb-1">Desventajas:</p>
                            <ul className="ml-4 space-y-1">
                              <li>• Precio premium (€€€)</li>
                              <li>• Difícil conseguir</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-orange-50 p-4 rounded">
                        <h4 className="font-bold mb-3 text-orange-700">Asientos Laterales (Esquinas)</h4>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div>
                            <p className="font-semibold mb-1">Ventajas:</p>
                            <ul className="ml-4 space-y-1">
                              <li>• Precio más accesible (20-30% menos)</li>
                              <li>• Mejor disponibilidad</li>
                              <li>• Aún excelente vista si filas bajas</li>
                              <li>• Vista diagonal interesante</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold mb-1">Desventajas:</p>
                            <ul className="ml-4 space-y-1">
                              <li>• Ángulo menos ideal para profundidad</li>
                              <li>• Un lado de la cancha más cerca que otro</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Factor 3: Detrás del Fondo */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">3. Asientos Detrás de las Líneas de Fondo</h3>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
                      <p className="text-gray-700 font-semibold mb-2">Perspectiva Polarizante</p>
                      <p className="text-gray-700 text-sm">
                        Estos asientos generan opiniones divididas. Algunos los aman por la perspectiva única de jugador,
                        otros los detestan por la dificultad de seguir intercambios.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold mb-2 text-green-700">Ventajas</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Perspectiva del jugador (profundidad, velocidad)</li>
                          <li>• Entiendes dificultad de los golpes</li>
                          <li>• Ves estrategia de posicionamiento</li>
                          <li>• Experiencia única e inmersiva</li>
                          <li>• Precio generalmente más bajo</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-red-700">Desventajas</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Muy difícil seguir intercambios rápidos</li>
                          <li>• Ves mayormente espaldas de un jugador</li>
                          <li>• No ves la otra mitad de la cancha bien</li>
                          <li>• Cuello cansado girando constantemente</li>
                          <li>• Pierdes contexto táctico general</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded mt-4">
                      <p className="text-gray-700 text-sm mb-0">
                        <strong>Recomendación:</strong> Solo elige asientos detrás del fondo si (1) es tu única opción
                        disponible, (2) tienes presupuesto muy limitado, o (3) eres jugador/entrenador que quiere estudiar
                        técnica específicamente. Para la mayoría, asientos laterales a mismo precio ofrecen mejor experiencia.
                      </p>
                    </div>
                  </div>

                  {/* Factor 4: Clima */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">4. Consideraciones Climáticas</h3>

                    <p className="text-gray-700 mb-4">
                      Roland Garros se juega en mayo-junio cuando París puede tener temperaturas de 15°C a 30°C. El clima
                      debe influir SIGNIFICATIVAMENTE en tu elección de asiento.
                    </p>

                    <div className="space-y-4">
                      <div className="bg-red-50 p-4 rounded">
                        <h4 className="font-bold mb-2 text-red-700">Días Calurosos ({'>'} 25°C)</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• <strong>Prioridad #1:</strong> Asientos con sombra (norte en Chatrier, oeste en Lenglen)</li>
                          <li>• <strong>Altura:</strong> Considera asientos altos (más brisa, sombra)</li>
                          <li>• <strong>Horario:</strong> Sesiones de mañana o nocturnas preferibles</li>
                          <li>• <strong>Equipo:</strong> Gorra, protector solar, botella de agua imprescindibles</li>
                          <li>• <strong>Evita:</strong> Asientos bajos en lado sur de Chatrier = horno solar</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 p-4 rounded">
                        <h4 className="font-bold mb-2 text-blue-700">Días Frescos ({'<'} 20°C)</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• <strong>Busca sol:</strong> Lado sur de Chatrier, este de Lenglen</li>
                          <li>• <strong>Altura:</strong> Filas bajas (menos viento, más calor)</li>
                          <li>• <strong>Ropa:</strong> Lleva capas - temperaturas varían durante el día</li>
                          <li>• <strong>Ventaja:</strong> Más flexibilidad en elección de asientos</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-4 rounded">
                        <h4 className="font-bold mb-2 text-gray-700">Días Lluviosos/Nublados</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• <strong>Philippe-Chatrier:</strong> Techo retráctil = juego continúa</li>
                          <li>• <strong>Otras pistas:</strong> Delays frecuentes, considera ground pass</li>
                          <li>• <strong>Sol/sombra:</strong> Irrelevante, elige por vista preferida</li>
                          <li>• <strong>Consejo:</strong> Lleva capa de lluvia ligera</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Recomendaciones por Presupuesto */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Mejores Asientos por Presupuesto
                </h2>

                <div className="space-y-6">
                  <div className="bg-green-100 border-2 border-green-500 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Presupuesto Económico (€45-100)</h3>
                    <div className="space-y-3">
                      <div className="bg-white rounded p-4">
                        <h4 className="font-bold mb-2">Opción #1: Simonne-Mathieu, Cualquier Asiento</h4>
                        <p className="text-sm text-gray-700 mb-1">
                          <strong>Precio:</strong> €45-80 | <strong>Por qué:</strong> Excelente valor, arquitectura única, atmosfera íntima
                        </p>
                      </div>
                      <div className="bg-white rounded p-4">
                        <h4 className="font-bold mb-2">Opción #2: Suzanne-Lenglen, Categoría 3</h4>
                        <p className="text-sm text-gray-700 mb-1">
                          <strong>Precio:</strong> €60-95 | <strong>Por qué:</strong> Jugadores top 20, vista completa desde altura
                        </p>
                      </div>
                      <div className="bg-white rounded p-4">
                        <h4 className="font-bold mb-2">Opción #3: Philippe-Chatrier, Categoría 3 Primera Semana</h4>
                        <p className="text-sm text-gray-700 mb-1">
                          <strong>Precio:</strong> €65-85 | <strong>Por qué:</strong> Experimenta pista central sin romper el banco
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-100 border-2 border-blue-500 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Presupuesto Medio (€100-200)</h3>
                    <div className="space-y-3">
                      <div className="bg-white rounded p-4">
                        <h4 className="font-bold mb-2">Opción #1: Suzanne-Lenglen, Laterales Bajos (Filas 8-15)</h4>
                        <p className="text-sm text-gray-700 mb-1">
                          <strong>Precio:</strong> €110-160 | <strong>Por qué:</strong> Mejor valor absoluto, vista excelente, ambiente top
                        </p>
                      </div>
                      <div className="bg-white rounded p-4">
                        <h4 className="font-bold mb-2">Opción #2: Philippe-Chatrier, Categoría 2 Primera Semana</h4>
                        <p className="text-sm text-gray-700 mb-1">
                          <strong>Precio:</strong> €120-180 | <strong>Por qué:</strong> Experiencia Chatrier con buen compromiso calidad-precio
                        </p>
                      </div>
                      <div className="bg-white rounded p-4">
                        <h4 className="font-bold mb-2">Opción #3: Philippe-Chatrier, Categoría 3 Cuartos de Final</h4>
                        <p className="text-sm text-gray-700 mb-1">
                          <strong>Precio:</strong> €170-200 | <strong>Por qué:</strong> Tenis top 8 en pista central a precio accesible
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-100 border-2 border-orange-500 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Presupuesto Alto (€200-350)</h3>
                    <div className="space-y-3">
                      <div className="bg-white rounded p-4">
                        <h4 className="font-bold mb-2">Opción #1: Philippe-Chatrier, Cat 2 Lateral Bajo Cuartos</h4>
                        <p className="text-sm text-gray-700 mb-1">
                          <strong>Precio:</strong> €250-320 | <strong>Por qué:</strong> Tenis élite con vista casi tan buena como Cat 1
                        </p>
                      </div>
                      <div className="bg-white rounded p-4">
                        <h4 className="font-bold mb-2">Opción #2: Philippe-Chatrier, Cat 1 Tercera Ronda</h4>
                        <p className="text-sm text-gray-700 mb-1">
                          <strong>Precio:</strong> €220-280 | <strong>Por qué:</strong> Mejores asientos posibles a precio moderado
                        </p>
                      </div>
                      <div className="bg-white rounded p-4">
                        <h4 className="font-bold mb-2">Opción #3: Suzanne-Lenglen, Centrales Bajos Semifinales</h4>
                        <p className="text-sm text-gray-700 mb-1">
                          <strong>Precio:</strong> €200-320 | <strong>Por qué:</strong> Ambiente increíble en semis a precio razonable
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-100 border-2 border-purple-500 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Presupuesto Premium (€350+)</h3>
                    <div className="space-y-3">
                      <div className="bg-white rounded p-4">
                        <h4 className="font-bold mb-2">Opción #1: Philippe-Chatrier, Cat 1 Filas 15-25 Semifinales</h4>
                        <p className="text-sm text-gray-700 mb-1">
                          <strong>Precio:</strong> €420-480 | <strong>Por qué:</strong> Experiencia definitiva, "zona dorada" para semis
                        </p>
                      </div>
                      <div className="bg-white rounded p-4">
                        <h4 className="font-bold mb-2">Opción #2: Philippe-Chatrier, Cat 1 Final</h4>
                        <p className="text-sm text-gray-700 mb-1">
                          <strong>Precio:</strong> €480-540 | <strong>Por qué:</strong> Sueño de vida, partido más importante del año
                        </p>
                      </div>
                      <div className="bg-white rounded p-4">
                        <h4 className="font-bold mb-2">Opción #3: Paquete Hospitalidad</h4>
                        <p className="text-sm text-gray-700 mb-1">
                          <strong>Precio:</strong> €500-2000+ | <strong>Por qué:</strong> Experiencia VIP completa con comida y servicios
                        </p>
                      </div>
                    </div>
                  </div>
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
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-500 rounded-lg p-8">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">
                    Conclusión: Elige Según tu Prioridad
                  </h2>

                  <p className="text-lg text-gray-700 mb-4">
                    No existe un "mejor asiento" universal en Roland Garros - todo depende de tus preferencias, presupuesto
                    y prioridades. Aquí está tu guía de decisión rápida:
                  </p>

                  <div className="bg-white rounded-lg p-6 space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="font-bold text-gray-900">Si priorizas VALOR: Suzanne-Lenglen laterales bajos</p>
                      <p className="text-sm text-gray-600">Mejor equilibrio precio-experiencia en todo el torneo</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="font-bold text-gray-900">Si priorizas EXPERIENCIA: Philippe-Chatrier Cat 1 filas 15-25</p>
                      <p className="text-sm text-gray-600">La zona dorada para vivir Roland Garros al máximo</p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <p className="font-bold text-gray-900">Si priorizas PRESUPUESTO: Simonne-Mathieu cualquier asiento</p>
                      <p className="text-sm text-gray-600">Experiencia única a precio muy accesible</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <p className="font-bold text-gray-900">Si priorizas AMBIENTE: Suzanne-Lenglen cualquier día popular</p>
                      <p className="text-sm text-gray-600">El estadio más ruidoso y apasionado del torneo</p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-4">
                      <p className="font-bold text-gray-900">Si priorizas CLIMA: Verifica sol/sombra según pronóstico</p>
                      <p className="text-sm text-gray-600">En días {'>'} 25°C, la sombra es más importante que la vista perfecta</p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 mt-6 mb-0">
                    Recuerda: estar en Roland Garros es en sí mismo una experiencia increíble. Incluso asientos "económicos"
                    te dan acceso al mejor tenis del mundo en uno de los torneos más prestigiosos. Elige según tu presupuesto,
                    disfruta el momento, y crea recuerdos para toda la vida.
                  </p>
                </div>
              </section>

              {/* Related Links */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Guías Relacionadas
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <Link
                    href="/entradas-roland-garros-2026/precios"
                    className="block bg-orange-50 border border-orange-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Precios por Categoría</h3>
                    <p className="text-gray-700 mb-3">
                      Revisa precios de cada categoría para decidir tu presupuesto.
                    </p>
                    <span className="text-orange-600 font-semibold">Leer más →</span>
                  </Link>

                  <Link
                    href="/entradas-roland-garros-2026/tipos-de-entradas"
                    className="block bg-orange-50 border border-orange-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Tipos de Entradas</h3>
                    <p className="text-gray-700 mb-3">
                      Entiende las opciones antes de elegir tus asientos.
                    </p>
                    <span className="text-orange-600 font-semibold">Leer más →</span>
                  </Link>

                  <Link
                    href="/entradas-roland-garros-2026/donde-comprar"
                    className="block bg-orange-50 border border-orange-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Dónde Comprar</h3>
                    <p className="text-gray-700 mb-3">
                      Compra tus asientos elegidos de forma oficial y segura.
                    </p>
                    <span className="text-orange-600 font-semibold">Leer más →</span>
                  </Link>

                  <Link
                    href="/entradas-roland-garros-2026"
                    className="block bg-orange-50 border border-orange-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Guía Principal</h3>
                    <p className="text-gray-700 mb-3">
                      Volver a la guía completa de entradas Roland Garros 2026.
                    </p>
                    <span className="text-orange-600 font-semibold">Leer más →</span>
                  </Link>
                </div>
              </section>

            </div>
          </div>
        </article>

        {/* CTA */}
        <section className="py-12 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para Elegir tus Asientos Perfectos?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link
                href="/entradas-roland-garros-2026"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-purple-50 transition-colors"
              >
                Volver a Guía de Entradas
              </Link>
              <Link
                href="/entradas-roland-garros-2026/donde-comprar"
                className="bg-purple-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-purple-900 transition-colors border-2 border-white"
              >
                Ver Dónde Comprar
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
