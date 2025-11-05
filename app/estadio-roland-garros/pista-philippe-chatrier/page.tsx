import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { SportsEventSchema } from '@/components/seo/SportsEventSchema'

export const metadata: Metadata = {
  title: 'Pista Philippe-Chatrier: La Central de Roland Garros con Techo Retráctil',
  description: 'Todo sobre la pista central Philippe-Chatrier: capacidad de 15,225 espectadores, techo retráctil inaugurado en 2020, mejores asientos, historia y características técnicas de la pista más importante de Roland Garros.',
  keywords: 'philippe chatrier, pista central roland garros, techo retractil roland garros, capacidad philippe chatrier, court central',
  openGraph: {
    title: 'Pista Philippe-Chatrier: La Central de Roland Garros',
    description: 'Guía completa de la pista central Philippe-Chatrier con su innovador techo retráctil y 15,225 asientos.',
    url: 'https://entradasrolandgarros.com/estadio-roland-garros/pista-philippe-chatrier',
    type: 'article',
  },
}

export default function PhilippeChartrierPage() {
  return (
    <>
      <SportsEventSchema
        name="Pista Philippe-Chatrier - Roland Garros 2026"
        startDate="2026-05-24"
        endDate="2026-06-07"
        description="La pista central de Roland Garros con capacidad para 15,225 espectadores y techo retráctil, escenario de las finales del torneo"
      />

      <Breadcrumbs
        items={[
          { name: 'Estadio Roland Garros', url: 'https://entradasrolandgarros.com/estadio-roland-garros' },
          { name: 'Pista Philippe-Chatrier', url: 'https://entradasrolandgarros.com/estadio-roland-garros/pista-philippe-chatrier' }
        ]}
      />

      {/* Main Content */}
      <article className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1d110c] mb-6">
              Court Philippe-Chatrier: El Escenario de las Leyendas
            </h1>
            <p className="text-xl text-[#a15d45] leading-relaxed">
              La pista central de Roland Garros con techo retráctil donde se corona a los campeones
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] p-6 text-center">
              <div className="text-3xl font-bold text-[#c1483a] mb-2">15,225</div>
              <div className="text-sm text-[#a15d45]">Espectadores</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] p-6 text-center">
              <div className="text-3xl font-bold text-[#c1483a] mb-2">2020</div>
              <div className="text-sm text-[#a15d45]">Techo Retráctil</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] p-6 text-center">
              <div className="text-3xl font-bold text-[#c1483a] mb-2">15 min</div>
              <div className="text-sm text-[#a15d45]">Cerrar el Techo</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] p-6 text-center">
              <div className="text-3xl font-bold text-[#c1483a] mb-2">1928</div>
              <div className="text-sm text-[#a15d45]">Inauguración</div>
            </div>
          </div>

          {/* Main Content Card */}
          <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] p-8 md:p-12 mb-8">

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                La <strong>pista Philippe-Chatrier</strong> es el corazón palpitante de Roland Garros, el escenario donde se han escrito las páginas más gloriosas de la historia del tenis en tierra batida. Con capacidad para <strong>15,225 espectadores</strong>, esta pista central es testigo de los partidos más importantes del torneo, incluyendo ambas finales individuales masculina y femenina.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Desde su inauguración en 1928, la pista ha sido remodelada en múltiples ocasiones, pero la transformación más significativa llegó en 2020 con la instalación de un techo retráctil de última generación, colocando a Roland Garros a la par con los otros Grand Slam en términos de capacidad para garantizar juego continuo sin importar las condiciones climáticas.
              </p>
            </div>

            {/* History Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Historia y Evolución de la Pista Central</h2>

              <div className="space-y-6">
                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">1928: Los Orígenes</h3>
                  <p className="text-gray-700 leading-relaxed">
                    La pista fue inaugurada el 18 de mayo de 1928, construida específicamente para albergar la defensa francesa de la Copa Davis. El nombre original era simplemente "Court Central", y contaba con una capacidad inicial mucho menor que la actual. El primer partido oficial enfrentó a Francia contra Estados Unidos, con victoria francesa.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">1981: Renombrada en Honor a Philippe Chatrier</h3>
                  <p className="text-gray-700 leading-relaxed">
                    La pista fue renombrada en honor a Philippe Chatrier, presidente de la Federación Francesa de Tenis desde 1973 hasta 1993, quien transformó Roland Garros en el torneo de élite que es hoy. Chatrier también fue presidente de la Federación Internacional de Tenis y miembro del Comité Olímpico Internacional.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">1994-1998: Primera Gran Renovación</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Se llevó a cabo una renovación masiva que aumentó significativamente la capacidad de la pista y modernizó las instalaciones. Se instalaron nuevos asientos, se mejoró la acústica, y se añadieron palcos VIP y zonas de prensa de última generación.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">2019-2020: El Techo Retráctil</h3>
                  <p className="text-gray-700 leading-relaxed">
                    La transformación más ambiciosa en la historia de la pista culminó con la instalación de un sofisticado techo retráctil. El proyecto costó más de 50 millones de euros y requirió años de planificación e ingeniería. El techo se estrenó durante Roland Garros 2020, garantizando que las interrupciones por lluvia sean cosa del pasado.
                  </p>
                </div>
              </div>
            </section>

            {/* The Retractable Roof */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">El Techo Retráctil: Innovación Técnica</h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                El techo retráctil de la Philippe-Chatrier es una maravilla de ingeniería moderna que transforma completamente la experiencia de juego y espectador. Su diseño permite cerrar completamente la pista en aproximadamente 15 minutos cuando amenaza lluvia.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">Especificaciones Técnicas</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li><strong>Vigas metálicas:</strong> 11 en total</li>
                    <li><strong>Peso total:</strong> 330 toneladas</li>
                    <li><strong>Tiempo de cierre:</strong> 15 minutos</li>
                    <li><strong>Altura máxima:</strong> 45 metros sobre la pista</li>
                    <li><strong>Resistencia al viento:</strong> Hasta 110 km/h</li>
                    <li><strong>Material:</strong> Acero galvanizado y membrana traslúcida</li>
                    <li><strong>Paneles solares:</strong> Integrados en la estructura</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">Funcionamiento</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    El techo está compuesto por 11 vigas que se despliegan desde ambos lados de la pista sobre rieles. Las vigas se mueven simultáneamente hasta encontrarse en el centro, creando una cobertura completa.
                  </p>
                  <p className="text-gray-700 text-sm mb-3">
                    La membrana traslúcida permite que entre luz natural incluso cuando el techo está cerrado, manteniendo una sensación de espacio abierto y buena visibilidad para jugadores y espectadores.
                  </p>
                  <p className="text-gray-700 text-sm">
                    El sistema es completamente automatizado y puede operarse de forma remota. Los sensores meteorológicos pueden activar el cierre automático si se detecta lluvia.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Impacto en el Juego</h3>
                <p className="text-gray-700 mb-3">
                  Cuando el techo está cerrado, las condiciones de juego cambian ligeramente. La ausencia de viento y la temperatura más controlada pueden beneficiar a ciertos estilos de juego. Algunos jugadores prefieren jugar con techo cerrado, mientras que otros se sienten más cómodos al aire libre.
                </p>
                <p className="text-gray-700">
                  La pelota tiende a volar un poco más rápido bajo techo debido a las condiciones de aire más estables, aunque la tierra batida sigue ralentizando el juego significativamente en comparación con otras superficies.
                </p>
              </div>
            </section>

            {/* Seating and Views */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Asientos y Mejores Ubicaciones</h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Con 15,225 asientos distribuidos en múltiples niveles, la Philippe-Chatrier ofrece una amplia variedad de ubicaciones con diferentes perspectivas y rangos de precio. Comprender la disposición de los asientos es crucial para maximizar tu experiencia.
              </p>

              {/* Seating Chart Image */}
              <div className="mb-8 bg-gray-50 rounded-lg p-4">
                <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                  <Image
                    src="/images/courts/plano de asientos de Roland Garros.png"
                    alt="Plano de asientos de Philippe-Chatrier - Roland Garros"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <p className="text-center text-sm text-gray-600 mt-3">
                  Plano de asientos del Court Philippe-Chatrier mostrando todas las categorías y ubicaciones
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white border-2 border-orange-300 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Categorías de Asientos</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Categoría 1 - Asientos Premium</h4>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Ubicación:</strong> Filas centrales a media altura (aproximadamente filas 10-25)
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Precio:</strong> Los más caros del estadio (400-500€+ para finales)
                      </p>
                      <p className="text-gray-700 text-sm">
                        <strong>Ventajas:</strong> Perspectiva perfecta a la altura de los ojos de los jugadores, vista completa de la pista sin obstrucciones, excelente para fotografía.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Categoría 2 - Asientos Elevados Centrales</h4>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Ubicación:</strong> Filas superiores en las secciones centrales (filas 26-40)
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Precio:</strong> Rango medio-alto (200-400€ para finales)
                      </p>
                      <p className="text-gray-700 text-sm">
                        <strong>Ventajas:</strong> Excelente vista panorámica de toda la pista, buena relación calidad-precio, menos multitudes.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Categoría 3 - Asientos Laterales</h4>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Ubicación:</strong> Secciones laterales a diversas alturas
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Precio:</strong> Rango medio (150-300€ para finales)
                      </p>
                      <p className="text-gray-700 text-sm">
                        <strong>Ventajas:</strong> Buena vista de la línea lateral, más accesibles económicamente, ambiente animado.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Categoría 4 - Asientos de Fondo y Elevados</h4>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Ubicación:</strong> Detrás de las líneas de fondo y filas muy superiores
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Precio:</strong> Más económicos (80-200€ para finales)
                      </p>
                      <p className="text-gray-700 text-sm">
                        <strong>Ventajas:</strong> Precio accesible, vista completa de la pista desde perspectiva elevada, experiencia de Grand Slam sin romper el banco.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">Recomendaciones de Asientos</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      <strong>Para fotografía:</strong> Categoría 1, filas 15-20, secciones centrales. La altura perfecta para capturar la acción sin usar zoom excesivo.
                    </li>
                    <li>
                      <strong>Mejor relación calidad-precio:</strong> Categoría 2, filas 26-35. Vista panorámica excelente a precio más accesible.
                    </li>
                    <li>
                      <strong>Para presupuesto limitado:</strong> Categoría 4 en secciones laterales superiores. Aún puedes ver todo perfectamente y disfrutar de la atmósfera única.
                    </li>
                    <li>
                      <strong>Para fanáticos hardcore:</strong> Primera fila detrás del juez de silla. Cercanía increíble a la acción, puedes escuchar a los jugadores.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Memorable Moments */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Momentos Históricos en la Philippe-Chatrier</h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                La pista central ha sido testigo de algunos de los momentos más memorables de la historia del tenis. Estas son solo algunas de las hazañas épicas que se han vivido en su tierra batida.
              </p>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Rafael Nadal: El Rey de la Philippe-Chatrier</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>14 títulos en Roland Garros (2005-2022)</strong>
                  </p>
                  <p className="text-gray-700 text-sm">
                    La pista central ha visto a Nadal dominar como ningún otro jugador en la historia del tenis. Su récord de 14 títulos en Roland Garros, todos con finales jugadas en la Philippe-Chatrier, lo convierte en el jugador más exitoso en una sola pista de Grand Slam. Su dominio en tierra batida parisina es considerado uno de los logros deportivos más extraordinarios de todos los tiempos.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Final Épica: Federer vs. Nadal 2008</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Victoria de Nadal 6-1, 6-3, 6-0</strong>
                  </p>
                  <p className="text-gray-700 text-sm">
                    Considerada una de las actuaciones más dominantes en una final de Grand Slam, Nadal demolió a Federer en una exhibición de tenis en tierra batida. El partido duró solo 1 hora y 48 minutos, mostrando la supremacía absoluta del español en su superficie favorita.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">El Primer Título bajo Techo: Djokovic 2020</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Victoria sobre Tsitsipas en la final</strong>
                  </p>
                  <p className="text-gray-700 text-sm">
                    El torneo de 2020, pospuesto al otoño debido a la pandemia y jugado parcialmente bajo el techo recién instalado, vio a Novak Djokovic conquistar su segundo título de Roland Garros. Fue la primera vez que el techo retráctil se utilizó en condiciones de competición oficial.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Chris Evert: La Reina de la Tierra Batida</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>7 títulos de Roland Garros (1974, 1975, 1979, 1980, 1983, 1985, 1986)</strong>
                  </p>
                  <p className="text-gray-700 text-sm">
                    Evert dominó Roland Garros durante más de una década, ganando 7 títulos individuales. Su estilo de juego basado en consistencia desde el fondo de la pista era perfecto para la tierra batida de la Philippe-Chatrier.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Iga Świątek: Nueva Dominadora</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>4 títulos (2020, 2022, 2023, 2024)</strong>
                  </p>
                  <p className="text-gray-700 text-sm">
                    La polaca emergió como la jugadora dominante de su generación en tierra batida, ganando su primer título a los 19 años sin perder un set en todo el torneo. Sus victorias posteriores han consolidado su estatus como una de las mejores jugadoras en tierra batida de la era moderna.
                  </p>
                </div>
              </div>
            </section>

            {/* Match Experience */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">La Experiencia de Ver un Partido</h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Asistir a un partido en la pista Philippe-Chatrier es una experiencia única que va mucho más allá del tenis. La atmósfera, la arquitectura, y la historia se combinan para crear momentos inolvidables.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">Atmósfera del Público</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    El público francés es conocido por su conocimiento profundo del tenis y su respeto por el juego. Durante los puntos, reina un silencio casi absoluto, pero entre puntos y al final de rallies espectaculares, la ovación puede ser ensordecedora.
                  </p>
                  <p className="text-gray-700 text-sm">
                    Las finales dominicales son particularmente especiales, con una mezcla de tensión, emoción y elegancia que solo se encuentra en Roland Garros.
                  </p>
                </div>

                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">Instalaciones en la Pista</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    La pista cuenta con múltiples puntos de venta de comida y bebida en los alrededores, baños modernos, y áreas de descanso. Los palcos VIP ofrecen servicio de restaurante completo.
                  </p>
                  <p className="text-gray-700 text-sm">
                    Hay pantallas de video en varios puntos para no perderte las repeticiones importantes, y el marcador electrónico principal muestra estadísticas detalladas del partido.
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-6">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Consejos para tu Primera Vez</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Llega al menos 30 minutos antes del inicio del partido para encontrar tu asiento y familiarizarte con la pista</li>
                  <li>• Los teléfonos móviles deben estar en silencio durante los puntos - el público lo toma muy en serio</li>
                  <li>• Puedes entrar y salir entre juegos, pero no durante los puntos</li>
                  <li>• Trae binoculares si estás en asientos elevados - añaden mucho a la experiencia</li>
                  <li>• La protección solar es esencial para asientos al sol, especialmente en sesiones de día</li>
                  <li>• Aprovecha los entrenamientos previos al partido si llegas temprano - a veces puedes verlos desde tu asiento</li>
                </ul>
              </div>
            </section>

            {/* Technical Details */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Detalles Técnicos de la Pista</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Dimensiones y Especificaciones</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li><strong>Área de juego:</strong> 23.77m x 10.97m (individuales)</li>
                    <li><strong>Altura libre:</strong> Mínimo 12 metros</li>
                    <li><strong>Composición superficie:</strong> Ladrillo triturado, piedra caliza, clinker</li>
                    <li><strong>Grosor capa superior:</strong> Aproximadamente 2mm de polvo de ladrillo</li>
                    <li><strong>Color característico:</strong> Ocre/rojo (polvo de ladrillo rojo)</li>
                    <li><strong>Sistema de drenaje:</strong> Multicapa para evacuación rápida</li>
                    <li><strong>Iluminación:</strong> 1,200 lux para televisión HD</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Mantenimiento Diario</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    La tierra batida de la Philippe-Chatrier recibe cuidados intensivos diarios:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Riego 3-4 veces al día durante el torneo</li>
                    <li>• Rastrillado completo entre cada partido</li>
                    <li>• Repintado de líneas blancas regularmente</li>
                    <li>• Compactación controlada de la superficie</li>
                    <li>• Adición de polvo de ladrillo según necesidad</li>
                    <li>• Inspección constante de uniformidad</li>
                    <li>• Ajuste de humedad según condiciones climáticas</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Accessibility */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Accesibilidad e Instalaciones Especiales</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                La pista Philippe-Chatrier está completamente equipada para garantizar que todos los espectadores puedan disfrutar de la experiencia, independientemente de sus necesidades de movilidad o accesibilidad.
              </p>

              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">Para Personas con Movilidad Reducida</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Asientos reservados específicamente para sillas de ruedas con excelente visibilidad</li>
                    <li>• Ascensores y rampas para acceder a todos los niveles</li>
                    <li>• Baños adaptados en cada nivel</li>
                    <li>• Personal de asistencia disponible</li>
                    <li>• Espacios de estacionamiento reservados cerca de las entradas</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">Para Personas con Discapacidad Visual o Auditiva</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Dispositivos de audio descripción disponibles</li>
                    <li>• Sistemas de amplificación para personas con problemas de audición</li>
                    <li>• Acompañamiento para personas con discapacidad visual</li>
                    <li>• Señalización en braille en áreas clave</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Getting Tickets */}
            <section className="mb-12 bg-white rounded-xl shadow-sm border border-[#ead5cd] p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1d110c] mb-4">
                Cómo Conseguir Entradas para la Philippe-Chatrier
              </h2>
              <p className="text-lg mb-6 text-[#a15d45]">
                Las entradas para la pista central son las más demandadas de todo el torneo. La mayoría se venden a través del sistema de lotería oficial.
              </p>
              <div className="space-y-3 mb-6 text-[#1d110c]">
                <p>• Las entradas individuales para la Philippe-Chatrier se venden principalmente en rondas finales</p>
                <p>• Los precios varían desde 150€ (cuartos de final) hasta 500€+ (finales) dependiendo de la categoría</p>
                <p>• El sistema de lotería se abre varios meses antes del torneo</p>
                <p>• También hay reventa oficial limitada más cerca de las fechas</p>
              </div>
              <Link
                href="/entradas-roland-garros-2026"
                className="inline-block bg-[#c1483a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a13a2e] transition-colors"
              >
                Guía Completa de Entradas Roland Garros 2026
              </Link>
            </section>

            {/* Related Pages */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Explora Otras Pistas de Roland Garros</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/estadio-roland-garros/pista-suzanne-lenglen"
                  className="block p-5 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all"
                >
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Pista Suzanne-Lenglen</h3>
                  <p className="text-gray-600 text-sm">La segunda pista más grande con 10,068 espectadores</p>
                </Link>

                <Link
                  href="/estadio-roland-garros/pista-simonne-mathieu"
                  className="block p-5 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all"
                >
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Pista Simonne-Mathieu</h3>
                  <p className="text-gray-600 text-sm">Diseño único rodeado de invernaderos históricos</p>
                </Link>

                <Link
                  href="/estadio-roland-garros"
                  className="block p-5 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all md:col-span-2"
                >
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Volver al Estadio Roland Garros</h3>
                  <p className="text-gray-600 text-sm">Visión general de todas las pistas e instalaciones</p>
                </Link>
              </div>
            </section>

          </div>
        </div>
      </article>
    </>
  )
}
