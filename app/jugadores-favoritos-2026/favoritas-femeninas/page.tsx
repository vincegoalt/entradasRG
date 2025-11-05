import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Favoritas Femeninas Roland Garros 2026: Análisis de Candidatas | Guía Completa',
  description: 'Análisis detallado de las principales candidatas al título femenino de Roland Garros 2026. Descubre quiénes son las favoritas en tierra batida para conquistar París.',
  keywords: 'favoritas femeninas roland garros 2026, candidatas roland garros, tenistas roland garros, favoritas tierra batida, wta roland garros',
  openGraph: {
    title: 'Favoritas Femeninas Roland Garros 2026: Análisis Completo',
    description: 'Análisis profundo de las principales candidatas femeninas para el título de Roland Garros 2026',
    type: 'article',
  },
}

export default function FavoritasFemeninasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-rose-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <Link href="/jugadores-favoritos-2026" className="text-pink-200 hover:text-white">
                ← Volver a Jugadores Favoritos
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Favoritas Femeninas Roland Garros 2026
            </h1>
            <p className="text-xl text-pink-100">
              Análisis completo de las principales candidatas al título femenino en el Grand Slam parisino
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              El tenis femenino en 2026 presenta uno de los panoramas más emocionantes y competitivos de la historia
              reciente. Con múltiples jugadoras capaces de ganar en cualquier superficie y una profundidad de talento
              excepcional, predecir la campeona de Roland Garros es más difícil que nunca.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              La tierra batida ha producido algunas de las finales más memorables del tenis femenino, y 2026 promete
              continuar esa tradición con una nueva generación de jugadoras combinándose con campeonas establecidas
              en la lucha por el título más prestigioso en arcilla.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Las Máximas Favoritas
            </h2>

            {/* Iga Swiatek */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8 border-l-4 border-pink-600">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Iga Swiatek (Polonia)</h3>
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Favorita Principal
                </span>
              </div>

              <p className="text-gray-700 mb-4">
                La dominadora polaca de la tierra batida en los últimos años ha demostrado ser prácticamente
                imbatible en Roland Garros cuando está en forma. Su combinación de potencia, consistencia y
                mentalidad ganadora la convierten en la jugadora a vencer en París.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-green-700">Fortalezas</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Dominio absoluto reciente en tierra batida</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Forehand devastador con top spin pesado</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Capacidad defensiva excepcional</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Mentalidad de campeona en momentos cruciales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Experiencia ganando múltiples títulos en París</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Preparación física y técnica específica para arcilla</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-red-700">Aspectos a Considerar</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">⚠</span>
                      <span>Presión de las expectativas altísimas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">⚠</span>
                      <span>Gestión emocional en partidos ajustados</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">⚠</span>
                      <span>Mantener motivación después de múltiples títulos</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Pronóstico:</strong> Swiatek es la clara favorita para Roland Garros 2026. Su dominio
                  en tierra batida ha sido comparable al de los grandes del tenis masculino, y será extremadamente
                  difícil vencerla en su mejor superficie. Solo una actuación excepcional de una rival o un día
                  fuera de lo normal podría detenerla.
                </p>
              </div>
            </div>

            {/* Aryna Sabalenka */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8 border-l-4 border-red-600">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Aryna Sabalenka (Bielorrusia)</h3>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Candidata Seria
                </span>
              </div>

              <p className="text-gray-700 mb-4">
                La potente bielorrusa ha demostrado que puede ganar Grand Slams y competir al más alto nivel en
                cualquier superficie. Su juego de potencia, cuando está controlado, puede ser devastador incluso
                en tierra batida.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-green-700">Fortalezas</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Potencia brutal desde ambos lados</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Experiencia ganando Grand Slams</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Saque dominante que genera puntos fáciles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Mentalidad agresiva y valiente</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Mejora constante en su consistencia</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-red-700">Aspectos a Mejorar</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">⚠</span>
                      <span>Adaptación al ritmo más lento de la arcilla</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">⚠</span>
                      <span>Control de errores no forzados en partidos largos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">⚠</span>
                      <span>Paciencia en rallies extensos característicos de arcilla</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Pronóstico:</strong> Sabalenka tiene todas las herramientas para ganar Roland Garros,
                  pero necesitará encontrar el balance perfecto entre agresividad y paciencia. Si logra controlar
                  su potencia y minimizar los errores no forzados, puede vencer a cualquiera, incluida Swiatek.
                </p>
              </div>
            </div>

            {/* Coco Gauff */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8 border-l-4 border-blue-600">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Coco Gauff (Estados Unidos)</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Estrella en Ascenso
                </span>
              </div>

              <p className="text-gray-700 mb-4">
                La joven estadounidense ha demostrado una madurez excepcional para su edad y continúa mejorando
                todos los aspectos de su juego. Su atletismo y capacidad defensiva la hacen especialmente peligrosa
                en tierra batida.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-green-700">Fortalezas</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Velocidad y cobertura de cancha excepcionales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Capacidad defensiva de primer nivel</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Mentalidad competitiva y madurez</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Mejora constante en armas ofensivas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Juventud y frescura física</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-red-700">Aspectos a Desarrollar</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">⚠</span>
                      <span>Necesita más potencia para dominar rallies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">⚠</span>
                      <span>Experiencia en fases finales de Grand Slams</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">⚠</span>
                      <span>Consistencia del primer saque</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Pronóstico:</strong> Gauff tiene el potencial de ganar Roland Garros 2026. Su juego
                  natural se adapta perfectamente a la tierra batida, y su constante mejora la hace cada vez más
                  peligrosa. Podría ser el año en que dé el salto definitivo en arcilla.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-8 mt-12 text-gray-900">
              Contendientes Serias
            </h2>

            {/* Elena Rybakina */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Elena Rybakina (Kazajistán)</h3>
              <p className="text-gray-700 mb-4">
                La campeona de Wimbledon ha demostrado que su juego potente puede funcionar en cualquier superficie.
                Aunque tradicionalmente no es especialista en arcilla, su saque dominante y golpes planos pueden
                ser muy efectivos, especialmente en condiciones rápidas. Su altura le da ventajas únicas en tierra
                batida cuando encuentra su ritmo.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-sm text-gray-600">
                  <strong>Factor clave:</strong> Su capacidad para dictaminar el juego con su saque y forehand,
                  limitando rallies largos donde otras jugadoras pueden tener ventaja.
                </p>
              </div>
            </div>

            {/* Jessica Pegula */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Jessica Pegula (Estados Unidos)</h3>
              <p className="text-gray-700 mb-4">
                La estadounidense ha demostrado una consistencia excepcional en el circuito y ha alcanzado las
                rondas finales de varios Grand Slams. Su juego sólido, sin aparentes debilidades, la hace una
                rival extremadamente difícil. En tierra batida, su consistencia y capacidad de mantener alto
                nivel durante partidos largos son activos valiosos.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-sm text-gray-600">
                  <strong>Factor clave:</strong> Su experiencia y madurez en momentos de presión pueden ser
                  determinantes en partidos ajustados de Grand Slam.
                </p>
              </div>
            </div>

            {/* Ons Jabeur */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ons Jabeur (Túnez)</h3>
              <p className="text-gray-700 mb-4">
                La tenista tunecina posee uno de los juegos más creativos y variados del circuito. Sus drop shots,
                cambios de ritmo y variedad táctica la hacen especialmente interesante en tierra batida, donde la
                paciencia y la construcción de puntos son fundamentales. Aunque ha tenido decepciones en finales
                de Grand Slam, tiene todas las herramientas para triunfar en París.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-sm text-gray-600">
                  <strong>Factor clave:</strong> Su capacidad para desestabilizar rivales con su juego impredecible
                  y su experiencia en tierra batida del norte de África.
                </p>
              </div>
            </div>

            {/* Marketa Vondrousova */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Marketa Vondrousova (República Checa)</h3>
              <p className="text-gray-700 mb-4">
                La checa ha demostrado que puede ganar Grand Slams y tiene excelentes resultados históricos en
                Roland Garros. Su juego zurdo, variado y creativo funciona excepcionalmente bien en arcilla. Los
                ángulos que crea con su revés y su capacidad para cambiar el ritmo la convierten en una rival
                muy complicada en tierra batida.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-sm text-gray-600">
                  <strong>Factor clave:</strong> Su juego zurdo atípico puede causar problemas a las favoritas,
                  especialmente si llega con confianza después de buenos resultados previos.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-8 mt-12 text-gray-900">
              Caballos Oscuros y Sorpresas Potenciales
            </h2>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Jugadoras Españolas e Italianas</h3>
              <p className="text-gray-700 mb-4">
                Las tenistas de países con fuerte tradición en tierra batida siempre son peligrosas en Roland
                Garros. Jugadoras españolas que han crecido en academias de arcilla o italianas que dominan la
                temporada europea en tierra pueden dar grandes sorpresas. Su comodidad natural en la superficie
                y comprensión táctica del juego en arcilla las hacen rivales complicadas.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">La Nueva Generación Emergente</h3>
              <p className="text-gray-700 mb-4">
                Varias jugadoras jóvenes que estarán alcanzando su madurez tenística en 2026 podrían estar listas
                para anunciarse en el escenario más grande. El tenis femenino tiene una historia de jóvenes talentos
                ganando Grand Slams a edades tempranas. Jugadoras sin presión de expectativas y con el juego
                moderno pueden ser extremadamente peligrosas.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900">
              Factores Determinantes en el Tenis Femenino
            </h2>

            <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-l-4 border-pink-600 p-6 mb-6">
              <h3 className="font-bold text-lg mb-4 text-gray-900">La Competitividad del Circuito WTA</h3>
              <p className="text-gray-700 mb-3">
                El tenis femenino actual se caracteriza por una competitividad excepcional donde prácticamente
                cualquier jugadora del top 20 puede vencer a las favoritas en un buen día. Esta paridad hace que
                el camino hacia el título sea más impredecible que nunca.
              </p>
              <p className="text-gray-700">
                Las jugadoras que logren mantener la consistencia mental y física durante las dos semanas, gestionar
                la presión en momentos cruciales y adaptarse a diferentes estilos de juego tendrán las mejores
                posibilidades de éxito.
              </p>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-l-4 border-pink-600 p-6 mb-6">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Importancia de la Preparación Específica</h3>
              <p className="text-gray-700 mb-3">
                La temporada de tierra batida europea requiere una preparación física y táctica específica. Las
                jugadoras que dediquen tiempo a entrenar en arcilla, participen en los torneos preparatorios
                correctos y lleguen con confianza en su juego tendrán ventaja significativa.
              </p>
              <p className="text-gray-700">
                La gestión inteligente del calendario, evitando lesiones y llegando fresca pero con ritmo a París,
                será crucial. El equilibrio entre descanso y competición puede marcar la diferencia entre una
                eliminación temprana y una carrera profunda en el torneo.
              </p>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-l-4 border-pink-600 p-6 mb-6">
              <h3 className="font-bold text-lg mb-4 text-gray-900">El Factor Mental en Partidos de Grand Slam</h3>
              <p className="text-gray-700">
                Los partidos femeninos en Grand Slams, al mejor de tres sets, pueden ser extremadamente volátiles.
                La capacidad de gestionar nervios, recuperarse de sets perdidos y mantener la concentración en
                momentos decisivos a menudo es más importante que la superioridad técnica o física. Las jugadoras
                con experiencia en rondas finales de Grand Slams tienen una ventaja psicológica significativa.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900">
              Predicción Final
            </h2>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-300 rounded-lg p-8">
              <p className="text-lg text-gray-700 mb-4">
                El torneo femenino de Roland Garros 2026 presenta un panorama fascinante con múltiples candidatas
                legítimas al título. A diferencia del cuadro masculino, donde hay uno o dos favoritos claros, el
                tenis femenino muestra una profundidad excepcional.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Iga Swiatek</strong> emerge como la clara favorita. Su dominio reciente en tierra batida
                ha sido tan impresionante que será extremadamente difícil vencerla cuando está en su mejor forma.
                Si mantiene su nivel y evita lesiones o problemas de forma, es la gran candidata a repetir título.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Aryna Sabalenka</strong> representa la mayor amenaza para Swiatek. Su potencia y experiencia
                ganando Grand Slams la convierten en una rival formidable. Si encuentra el balance entre agresividad
                y paciencia, puede derrotar a cualquiera.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Coco Gauff</strong> y otras jóvenes estrellas como posibles ganadoras de Grand Slams previos
                representan el futuro del tenis femenino. Su constante mejora y adaptabilidad las hacen candidatas
                serias y podrían dar la sorpresa.
              </p>
              <p className="text-lg text-gray-700">
                Sin embargo, la <strong>profundidad del tenis femenino</strong> significa que jugadoras como
                Rybakina, Pegula, Jabeur o Vondrousova no pueden descartarse. El sorteo del cuadro, las condiciones
                climáticas y el estado de forma en el momento exacto del torneo jugarán papeles cruciales en
                determinar quién levantará la Copa Suzanne Lenglen en 2026.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Continúa Explorando</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/jugadores-favoritos-2026/favoritos-masculinos"
                className="block p-4 bg-blue-50 rounded-lg border-2 border-blue-200 hover:border-blue-400 transition-colors"
              >
                <h3 className="font-bold mb-2 text-gray-900">Favoritos Masculinos</h3>
                <p className="text-sm text-gray-600">Análisis del cuadro masculino</p>
              </Link>
              <Link
                href="/jugadores-favoritos-2026/records-historicos"
                className="block p-4 bg-orange-50 rounded-lg border-2 border-orange-200 hover:border-orange-400 transition-colors"
              >
                <h3 className="font-bold mb-2 text-gray-900">Records Históricos</h3>
                <p className="text-sm text-gray-600">Legado y grandes hazañas</p>
              </Link>
              <Link
                href="/calendario-roland-garros-2026"
                className="block p-4 bg-green-50 rounded-lg border-2 border-green-200 hover:border-green-400 transition-colors"
              >
                <h3 className="font-bold mb-2 text-gray-900">Calendario 2026</h3>
                <p className="text-sm text-gray-600">Fechas y orden de juego</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
