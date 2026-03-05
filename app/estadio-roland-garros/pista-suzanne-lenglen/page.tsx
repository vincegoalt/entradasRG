import Link from 'next/link'
import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { SportsEventSchema } from '@/components/seo/SportsEventSchema'

export const metadata: Metadata = {
  title: 'Pista Suzanne-Lenglen: Segunda Pista Principal de Roland Garros',
  description: 'Guía completa de la pista Suzanne-Lenglen en Roland Garros: capacidad de 10,068 espectadores, historia, características, mejores asientos y cómo conseguir entradas para la segunda pista más importante del torneo.',
  keywords: 'suzanne lenglen, pista suzanne lenglen, court 1 roland garros, segunda pista roland garros',
  openGraph: {
    title: 'Pista Suzanne-Lenglen: Segunda Pista Principal de Roland Garros',
    description: 'Todo sobre la pista Suzanne-Lenglen con capacidad para 10,068 espectadores y su ambiente único.',
    url: 'https://entradasrolandgarros.com/estadio-roland-garros/pista-suzanne-lenglen',
    type: 'article',
  },
  alternates: {
    canonical: 'https://entradasrolandgarros.com/estadio-roland-garros/pista-suzanne-lenglen',
  },
}

export default function SuzanneLenglenPage() {
  return (
    <>
      <SportsEventSchema
        name="Pista Suzanne-Lenglen - Roland Garros 2026"
        startDate="2026-05-24"
        endDate="2026-06-07"
        description="La segunda pista principal de Roland Garros con capacidad para 10,068 espectadores, escenario de semifinales y partidos clave"
      />

      <Breadcrumbs
        items={[
          { name: 'Estadio Roland Garros', url: 'https://entradasrolandgarros.com/estadio-roland-garros' },
          { name: 'Pista Suzanne-Lenglen', url: 'https://entradasrolandgarros.com/estadio-roland-garros/pista-suzanne-lenglen' }
        ]}
      />

      {/* Main Content */}
      <article className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1d110c] mb-6">
              Court Suzanne-Lenglen: Tradición y Modernidad
            </h1>
            <p className="text-xl text-[#a15d45] leading-relaxed">
              La segunda pista más grande de Roland Garros con 10,068 asientos y atmósfera incomparable
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] p-6 text-center">
              <div className="text-3xl font-bold text-[#c1483a] mb-2">10,068</div>
              <div className="text-sm text-[#a15d45]">Espectadores</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] p-6 text-center">
              <div className="text-3xl font-bold text-[#c1483a] mb-2">1994</div>
              <div className="text-sm text-[#a15d45]">Inauguración</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] p-6 text-center">
              <div className="text-3xl font-bold text-[#c1483a] mb-2">N-S</div>
              <div className="text-sm text-[#a15d45]">Orientación</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] p-6 text-center">
              <div className="text-3xl font-bold text-[#c1483a] mb-2">2</div>
              <div className="text-sm text-[#a15d45]">Pista Nº</div>
            </div>
          </div>

          {/* Main Content Card */}
          <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] p-8 md:p-12 mb-8">

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                La <strong>pista Suzanne-Lenglen</strong> es la segunda pista más grande del complejo de Roland Garros, con una capacidad de <strong>10,068 espectadores</strong>. Inaugurada en 1994 y nombrada en honor a una de las tenistas francesas más legendarias de todos los tiempos, esta pista combina diseño moderno con una atmósfera íntima que la hace favorita tanto de jugadores como de espectadores.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A diferencia de la masiva Philippe-Chatrier, la Suzanne-Lenglen ofrece una experiencia más cercana y personal. Las gradas empinadas garantizan que cada asiento tenga una excelente vista de la acción, y la pista tradicionalmente alberga semifinales y partidos cruciales de las últimas rondas del torneo.
              </p>
            </div>

            {/* Suzanne Lenglen - The Person */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Suzanne Lenglen: La Divina</h2>

              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Suzanne Lenglen (1899-1938) fue una revolucionaria del tenis femenino, tanto dentro como fuera de la pista. Conocida como "La Divina", dominó el tenis mundial en la década de 1920 con un estilo de juego atlético y agresivo que era completamente nuevo para el tenis femenino de su época.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-gray-900">Logros Deportivos</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• <strong>6 títulos de Roland Garros</strong> (1920, 1921, 1922, 1923, 1925, 1926)</li>
                      <li>• <strong>6 títulos de Wimbledon</strong> (1919-1923, 1925)</li>
                      <li>• Medalla de oro olímpica en individuales y mixtos (1920)</li>
                      <li>• Solo perdió 7 partidos en toda su carrera</li>
                      <li>• Ganó 241 títulos en total</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-gray-900">Impacto Cultural</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Revolucionó la moda del tenis femenino con faldas cortas</li>
                      <li>• Primera gran celebridad deportiva femenina</li>
                      <li>• Introdujo el profesionalismo en el tenis</li>
                      <li>• Atrajo multitudes sin precedentes al tenis</li>
                      <li>• Símbolo de la mujer moderna de los años 20</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">Un Legado Duradero</h3>
                <p className="text-gray-700 text-sm">
                  Lenglen falleció prematuramente a los 39 años en 1938, pero su impacto en el tenis perduró. Fue incluida en el Salón Internacional de la Fama del Tenis en 1978, y la pista que lleva su nombre se inauguró en 1994, asegurando que su memoria permanezca viva en cada Roland Garros.
                </p>
              </div>
            </section>

            {/* History and Evolution */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Historia y Evolución de la Pista</h2>

              <div className="space-y-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">1994: Construcción e Inauguración</h3>
                  <p className="text-gray-700 leading-relaxed">
                    La pista Suzanne-Lenglen fue construida como parte de una importante expansión de Roland Garros en la década de 1990. Reemplazó a la antigua pista "Court A" y fue diseñada con arquitectura moderna que contrastaba con el estilo más clásico de la pista central Philippe-Chatrier. Su inauguración marcó una nueva era para el torneo, permitiendo programar más partidos de alto nivel simultáneamente.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Diseño Arquitectónico Único</h3>
                  <p className="text-gray-700 leading-relaxed">
                    El diseño de la Lenglen fue revolucionario para su época. Las gradas empinadas maximizan la capacidad mientras mantienen a todos los espectadores relativamente cerca de la acción. La estructura de acero y hormigón permite una visibilidad excepcional desde cualquier asiento, sin columnas que obstruyan la vista.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Renovaciones y Mejoras Continuas</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Aunque la estructura básica se ha mantenido, la pista ha recibido múltiples mejoras a lo largo de los años: actualización de asientos en 2010, instalación de iluminación LED de última generación en 2015, mejora de sistemas de audio y pantallas electrónicas en 2018, y optimización continua de las instalaciones para espectadores y jugadores.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Planes Futuros: ¿Techo Retráctil?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Existe discusión sobre la posibilidad de añadir un techo retráctil a la Suzanne-Lenglen, similar al de la Philippe-Chatrier. Aunque no hay planes confirmados, la infraestructura de la pista fue diseñada pensando en futuras expansiones, haciendo técnicamente viable esta adición.
                  </p>
                </div>
              </div>
            </section>

            {/* Court Characteristics */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Características y Especificaciones</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Dimensiones y Orientación</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li><strong>Orientación:</strong> Norte-Sur (ideal para evitar deslumbramiento)</li>
                    <li><strong>Área de juego:</strong> 23.77m x 10.97m (individuales)</li>
                    <li><strong>Superficie:</strong> Tierra batida roja (idéntica a Philippe-Chatrier)</li>
                    <li><strong>Altura máxima de gradas:</strong> Aproximadamente 25 metros</li>
                    <li><strong>Pendiente de gradas:</strong> Empinada para máxima visibilidad</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Instalaciones Técnicas</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li><strong>Iluminación:</strong> Sistema LED profesional de 1,000+ lux</li>
                    <li><strong>Marcador electrónico:</strong> Gran pantalla LED visible desde todos los asientos</li>
                    <li><strong>Sistema de sonido:</strong> Audio de alta calidad en toda la pista</li>
                    <li><strong>Cámaras de TV:</strong> 8+ posiciones para cobertura completa</li>
                    <li><strong>Hawk-Eye:</strong> Sistema de revisión de línea electrónico</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Ventajas de la Orientación Norte-Sur</h3>
                <p className="text-gray-700 mb-3">
                  La orientación norte-sur de la Suzanne-Lenglen es ideal para el tenis. Los jugadores nunca tienen el sol directamente en los ojos al servir o restar, lo que puede ser un problema significativo en pistas orientadas este-oeste.
                </p>
                <p className="text-gray-700">
                  Esta orientación también beneficia a los espectadores, distribuyendo la exposición solar de manera más equilibrada entre ambos lados de la pista a lo largo del día. Durante las sesiones de tarde, la luz es generalmente más uniforme y favorable tanto para jugadores como para fotografía.
                </p>
              </div>
            </section>

            {/* Seating Guide */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Guía de Asientos y Ubicaciones</h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                La configuración de gradas empinadas de la Suzanne-Lenglen significa que prácticamente todos los asientos ofrecen buenas vistas. Sin embargo, hay diferencias significativas en la experiencia dependiendo de tu ubicación.
              </p>

              <div className="space-y-6">
                <div className="bg-white border-2 border-red-300 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Distribución de Asientos por Categoría</h3>

                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">Categoría A - Asientos Premium (Filas 1-15, Central)</h4>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Precio aproximado:</strong> 150-300€ dependiendo de la ronda
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Características:</strong> Vista perfecta a nivel de ojos de los jugadores, cercanía increíble a la acción, puedes escuchar los golpes y las comunicaciones de los jugadores.
                      </p>
                      <p className="text-gray-700 text-sm">
                        <strong>Ideal para:</strong> Fanáticos que quieren la experiencia más inmersiva posible, fotógrafos (sin equipo profesional), y quienes aprecian los detalles técnicos del juego.
                      </p>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">Categoría B - Asientos Medios (Filas 16-30, Central)</h4>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Precio aproximado:</strong> 80-200€ dependiendo de la ronda
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Características:</strong> Excelente vista panorámica de toda la pista, altura ideal para ver patrones de juego y estrategia, muy buena relación calidad-precio.
                      </p>
                      <p className="text-gray-700 text-sm">
                        <strong>Ideal para:</strong> Espectadores que quieren ver el panorama completo del partido, aquellos que buscan el mejor balance entre precio y experiencia.
                      </p>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">Categoría C - Asientos Elevados (Filas 31+, Todas las secciones)</h4>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Precio aproximado:</strong> 40-120€ dependiendo de la ronda
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Características:</strong> Vista elevada tipo "halcón" de toda la cancha, más económicos, puedes ver perfectamente toda la pista incluso desde las filas superiores.
                      </p>
                      <p className="text-gray-700 text-sm">
                        <strong>Ideal para:</strong> Presupuestos ajustados, grupos grandes, espectadores que prefieren perspectiva táctica completa.
                      </p>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">Asientos Laterales vs. Detrás de Línea de Fondo</h4>
                      <p className="text-gray-700 text-sm mb-3">
                        <strong>Laterales (a lo largo de la red):</strong> Mejor vista del movimiento lateral de los jugadores, ideal para apreciar ángulos de golpes, perspectiva completa del saque.
                      </p>
                      <p className="text-gray-700 text-sm">
                        <strong>Detrás de línea de fondo:</strong> Vista del saque directamente, puedes ver exactamente dónde cae cada pelota, perspectiva "desde dentro" del partido.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">Consejo de Experto</h3>
                  <p className="text-gray-700">
                    Para la mejor experiencia en la Suzanne-Lenglen, busca asientos en las filas 18-25 en las secciones centrales laterales. Esta ubicación ofrece la perspectiva perfecta para apreciar tanto los detalles técnicos como el panorama táctico del partido, y suelen ser más accesibles económicamente que los asientos premium inferiores mientras mantienen excelente calidad.
                  </p>
                </div>
              </div>
            </section>

            {/* Match Experience */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">La Experiencia del Partido</h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ver un partido en la Suzanne-Lenglen es una experiencia única que difiere notablemente de la pista central Philippe-Chatrier, con su propia personalidad y atmósfera.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">Atmósfera y Ambiente</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    La atmósfera en la Lenglen tiende a ser más relajada y menos formal que en la Philippe-Chatrier, pero igualmente apasionada. El público es conocedor y vocal, especialmente cuando juegan franceses.
                  </p>
                  <p className="text-gray-700 text-sm mb-3">
                    Las gradas empinadas crean un efecto de "caldero" donde el ruido y la energía del público se amplifican, haciendo que incluso partidos de rondas tempranas puedan tener una atmósfera electrizante.
                  </p>
                  <p className="text-gray-700 text-sm">
                    Muchos jugadores han comentado que prefieren jugar en la Lenglen debido a la cercanía del público y la energía única de la pista.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">Programación Típica</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Durante la primera semana, la Suzanne-Lenglen típicamente alberga partidos de primeras rondas con jugadores sembrados. Es común ver a Top 20 en acción aquí.
                  </p>
                  <p className="text-gray-700 text-sm mb-3">
                    En la segunda semana, la pista frecuentemente se usa para semifinales (especialmente individuales femeninas), cuartos de final, y partidos importantes de dobles.
                  </p>
                  <p className="text-gray-700 text-sm">
                    Los horarios suelen comenzar alrededor de las 11:00 AM y pueden extenderse hasta la noche, aunque no tiene iluminación para partidos nocturnos programados.
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Comparación con Philippe-Chatrier</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">Ventajas de Suzanne-Lenglen:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Entradas más accesibles y fáciles de conseguir</li>
                      <li>• Atmósfera más íntima y cercana</li>
                      <li>• Menos formal, más relajada</li>
                      <li>• Todos los asientos tienen excelente vista</li>
                      <li>• Menos multitudes en alrededores</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">Ventajas de Philippe-Chatrier:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Alberga todas las finales</li>
                      <li>• Techo retráctil para juego garantizado</li>
                      <li>• Más historia y prestigio</li>
                      <li>• Instalaciones VIP superiores</li>
                      <li>• Partidos nocturnos programados</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Memorable Matches */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Partidos Memorables en la Suzanne-Lenglen</h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Aunque no alberga finales, la Suzanne-Lenglen ha sido escenario de partidos épicos que han definido carreras y creado momentos inolvidables.
              </p>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Nadal vs. Djokovic - Cuartos de Final 2015</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Resultado:</strong> Djokovic 7-5, 6-3, 6-1
                  </p>
                  <p className="text-gray-700 text-sm">
                    Una de las mayores sorpresas en la historia reciente de Roland Garros. Djokovic finalmente derrotó a Nadal en París de manera convincente, poniendo fin a una racha de dominio del español. El partido se jugó en condiciones ventosas que favorecieron al serbio.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Serena Williams vs. Muguruza - Cuartos de Final 2014</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Resultado:</strong> Muguruza 6-2, 6-2
                  </p>
                  <p className="text-gray-700 text-sm">
                    La joven española Garbiñe Muguruza anunció su llegada al tenis de élite con una victoria demoledora sobre Serena Williams. Este partido marcó el inicio de una carrera que culminaría con su título en Roland Garros 2016.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Federer vs. Wawrinka - Cuartos de Final 2015</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Resultado:</strong> Wawrinka 6-4, 6-3, 7-6(4)
                  </p>
                  <p className="text-gray-700 text-sm">
                    Un duelo suizo emocional donde Wawrinka venció a su compatriota y amigo Federer en su camino al título. El partido mostró el tenis agresivo de Wawrinka en tierra batida en su mejor momento.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Safina vs. Kuznetsova - Semifinal 2009</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Resultado:</strong> Kuznetsova 7-6(3), 5-7, 7-5
                  </p>
                  <p className="text-gray-700 text-sm">
                    Un maratón de 3 horas y 2 minutos entre dos rusas en una de las semifinales femeninas más dramáticas. Kuznetsova ganó el torneo después de superar este increíble desafío.
                  </p>
                </div>
              </div>
            </section>

            {/* Facilities and Amenities */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Instalaciones y Servicios</h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white border-2 border-red-200 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">🍔</div>
                  <h3 className="font-bold mb-2 text-gray-900">Comida y Bebida</h3>
                  <p className="text-gray-600 text-sm">
                    Múltiples puntos de venta alrededor de la pista con opciones que van desde snacks rápidos hasta comidas completas
                  </p>
                </div>

                <div className="bg-white border-2 border-red-200 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">🚻</div>
                  <h3 className="font-bold mb-2 text-gray-900">Baños</h3>
                  <p className="text-gray-600 text-sm">
                    Instalaciones sanitarias modernas en cada nivel, incluyendo baños adaptados para personas con movilidad reducida
                  </p>
                </div>

                <div className="bg-white border-2 border-red-200 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">📺</div>
                  <h3 className="font-bold mb-2 text-gray-900">Pantallas</h3>
                  <p className="text-gray-600 text-sm">
                    Pantallas adicionales en las zonas de concesión para no perderte nada si necesitas salir brevemente
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Accesibilidad</h3>
                <p className="text-gray-700 mb-3">
                  La pista Suzanne-Lenglen está completamente adaptada para personas con movilidad reducida:
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-700 text-sm">
                  <li>• Ascensores a todos los niveles</li>
                  <li>• Asientos reservados para sillas de ruedas</li>
                  <li>• Rampas de acceso</li>
                  <li>• Baños adaptados</li>
                  <li>• Personal de asistencia disponible</li>
                  <li>• Puertas de acceso amplias</li>
                </ul>
              </div>
            </section>

            {/* Tips for Visitors */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Consejos para tu Visita</h2>

              <div className="space-y-4">
                <div className="bg-yellow-50 rounded-lg p-5">
                  <h3 className="font-bold mb-2 text-gray-900">Mejor Momento para Visitar</h3>
                  <p className="text-gray-700 text-sm">
                    La primera semana ofrece más partidos y mayor variedad de horarios. Las semifinales (típicamente en la segunda semana) ofrecen el mejor tenis. Llega temprano para conseguir buenos asientos en las secciones de entrada general.
                  </p>
                </div>

                <div className="bg-yellow-50 rounded-lg p-5">
                  <h3 className="font-bold mb-2 text-gray-900">Qué Llevar</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Dado que la pista no tiene techo, protección solar es esencial:
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Gorra o sombrero</li>
                    <li>• Gafas de sol</li>
                    <li>• Protector solar</li>
                    <li>• Botella de agua (hay puntos de recarga)</li>
                    <li>• Chubasquero ligero (el clima parisino es impredecible)</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-lg p-5">
                  <h3 className="font-bold mb-2 text-gray-900">Fotografía</h3>
                  <p className="text-gray-700 text-sm">
                    Las cámaras personales están permitidas (sin flash durante el juego). Los asientos medios laterales ofrecen los mejores ángulos para fotografía. El equipo profesional y los trípodes no están permitidos.
                  </p>
                </div>
              </div>
            </section>

            {/* Getting Tickets */}
            <section className="mb-12 bg-white rounded-xl shadow-sm border border-[#ead5cd] p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1d110c] mb-4">
                Cómo Conseguir Entradas para la Suzanne-Lenglen
              </h2>
              <p className="text-lg mb-6 text-[#a15d45]">
                Las entradas para la Suzanne-Lenglen son más accesibles que para la Philippe-Chatrier, pero siguen siendo muy demandadas para partidos importantes.
              </p>
              <div className="space-y-3 mb-6 text-[#1d110c] text-sm">
                <p>• Disponibles como parte del ground pass durante la primera semana</p>
                <p>• Entradas individuales para semifinales y partidos específicos de segunda semana</p>
                <p>• Precios generalmente 30-40% más económicos que Philippe-Chatrier</p>
                <p>• Mejor disponibilidad en sistema de lotería y reventa oficial</p>
              </div>
              <Link
                href="/entradas-roland-garros-2026"
                className="inline-block bg-[#c1483a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a13a2e] transition-colors"
              >
                Ver Guía Completa de Entradas 2026
              </Link>
            </section>

            {/* Related Pages */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Explora Otras Pistas de Roland Garros</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/estadio-roland-garros/pista-philippe-chatrier"
                  className="block p-5 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-red-500 hover:shadow-lg transition-all"
                >
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Pista Philippe-Chatrier</h3>
                  <p className="text-gray-600 text-sm">La pista central con techo retráctil y 15,225 asientos</p>
                </Link>

                <Link
                  href="/estadio-roland-garros/pista-simonne-mathieu"
                  className="block p-5 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-red-500 hover:shadow-lg transition-all"
                >
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Pista Simonne-Mathieu</h3>
                  <p className="text-gray-600 text-sm">Diseño único rodeado de invernaderos históricos</p>
                </Link>

                <Link
                  href="/estadio-roland-garros"
                  className="block p-5 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-red-500 hover:shadow-lg transition-all md:col-span-2"
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
