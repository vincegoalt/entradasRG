import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Favoritos Masculinos Roland Garros 2026: Análisis de Candidatos | Guía Completa',
  description: 'Análisis detallado de los principales candidatos al título masculino de Roland Garros 2026. Descubre quiénes son los favoritos en tierra batida para conquistar París.',
  keywords: 'favoritos masculinos roland garros 2026, candidatos roland garros, tenistas roland garros, favoritos tierra batida, carlos alcaraz roland garros',
  openGraph: {
    title: 'Favoritos Masculinos Roland Garros 2026: Análisis Completo',
    description: 'Análisis profundo de los principales candidatos masculinos para el título de Roland Garros 2026',
    type: 'article',
  },
}

export default function FavoritosMasculinosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <Link href="/jugadores-favoritos-2026" className="text-blue-200 hover:text-white">
                ← Volver a Jugadores Favoritos
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Favoritos Masculinos Roland Garros 2026
            </h1>
            <p className="text-xl text-blue-100">
              Análisis completo de los principales candidatos al título masculino en el Grand Slam parisino
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              El cuadro masculino de Roland Garros 2026 presenta una competición fascinante con una mezcla perfecta
              de juventud emergente y experiencia consolidada. La era posterior al dominio absoluto de Rafael Nadal
              ha abierto el torneo a una nueva generación de jugadores hambrientos de éxito en la tierra batida parisina.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              A continuación, analizamos en profundidad a los principales candidatos, evaluando sus fortalezas,
              debilidades y probabilidades de conquistar el título más codiciado en tierra batida.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Los Máximos Favoritos
            </h2>

            {/* Carlos Alcaraz */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8 border-l-4 border-blue-600">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Carlos Alcaraz (España)</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Favorito Principal
                </span>
              </div>

              <p className="text-gray-700 mb-4">
                El joven prodigio español se ha consolidado como uno de los tenistas más completos del circuito.
                Su combinación de potencia, velocidad y versatilidad táctica lo hace especialmente peligroso en
                tierra batida, donde puede desplegar todo su arsenal técnico.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-green-700">Fortalezas</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Juego completo y versátil adaptable a cualquier situación</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Excelente movimiento y capacidad defensiva</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Drop shot excepcional que desequilibra rivales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Mentalidad ganadora en momentos cruciales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Tradición española en tierra batida</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-red-700">Aspectos a Mejorar</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">⚠</span>
                      <span>Gestión de la energía en torneos largos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">⚠</span>
                      <span>Tendencia ocasional a pérdidas de concentración</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">⚠</span>
                      <span>Presión de las expectativas españolas</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Pronóstico:</strong> Alcaraz llega como uno de los principales favoritos. Su juego moderno
                  y completo, combinado con la tradición española en tierra batida, lo convierte en un candidato
                  muy serio al título. Si mantiene su nivel físico y mental durante las dos semanas, será muy difícil
                  de vencer.
                </p>
              </div>
            </div>

            {/* Jannik Sinner */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8 border-l-4 border-red-600">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Jannik Sinner (Italia)</h3>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Favorito Principal
                </span>
              </div>

              <p className="text-gray-700 mb-4">
                El italiano ha dado un salto cualitativo impresionante, estableciéndose como uno de los mejores
                jugadores del mundo. Su potencia de fondo de cancha y su capacidad para dictar el ritmo del partido
                lo hacen extremadamente peligroso en cualquier superficie, incluida la tierra batida.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-green-700">Fortalezas</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Potencia excepcional desde el fondo de la cancha</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Derecha devastadora capaz de dictar el juego</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Mejora constante en su juego defensivo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Mentalidad fría y calculadora bajo presión</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Excelente preparación física</span>
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
                      <span>Mayor variación en su juego cuando la potencia no funciona</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">⚠</span>
                      <span>Experiencia en finales de Grand Slam en arcilla</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Pronóstico:</strong> Sinner ha demostrado que su juego puede ser dominante en cualquier
                  superficie. Aunque la tierra batida históricamente no ha sido su mejor superficie, su evolución
                  reciente lo convierte en un candidato muy serio. Necesitará encontrar el balance perfecto entre
                  agresividad y paciencia.
                </p>
              </div>
            </div>

            {/* Novak Djokovic */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8 border-l-4 border-purple-600">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Novak Djokovic (Serbia)</h3>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Experiencia Legendaria
                </span>
              </div>

              <p className="text-gray-700 mb-4">
                El campeón serbio, con múltiples títulos en Roland Garros, sigue siendo un competidor formidable
                incluso en las etapas finales de su carrera. Su experiencia, inteligencia táctica y capacidad de
                rendimiento en los momentos decisivos nunca deben subestimarse.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-green-700">Fortalezas</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Experiencia incomparable en Grand Slams</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Capacidad de elevarse en momentos cruciales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Juego defensivo excepcional y recuperación de bolas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Inteligencia táctica superior</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Mental de acero en partidos ajustados</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-red-700">Aspectos a Considerar</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">⚠</span>
                      <span>Edad y recuperación física entre partidos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">⚠</span>
                      <span>Motivación y calendario de competición</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">⚠</span>
                      <span>Competencia más joven y física</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Pronóstico:</strong> Nunca se debe descartar a Djokovic en un Grand Slam. Aunque ya no
                  sea el favorito absoluto, su experiencia y habilidad para ganar los puntos importantes lo mantienen
                  como un candidato serio. Si llega en buena forma física, puede sorprender a muchos.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-8 mt-12 text-gray-900">
              Contendientes Serios
            </h2>

            {/* Daniil Medvedev */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Daniil Medvedev (Rusia)</h3>
              <p className="text-gray-700 mb-4">
                Aunque la tierra batida no es su superficie favorita, Medvedev ha mejorado significativamente su
                juego en arcilla. Su altura, alcance y capacidad de variar el juego lo hacen un rival complicado
                para cualquiera, especialmente si las condiciones son más rápidas.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-sm text-gray-600">
                  <strong>Factor clave:</strong> Su capacidad para neutralizar el juego de rivales más agresivos
                  con su defensa atípica y ángulos inusuales puede dar sorpresas.
                </p>
              </div>
            </div>

            {/* Stefanos Tsitsipas */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Stefanos Tsitsipas (Grecia)</h3>
              <p className="text-gray-700 mb-4">
                El griego tiene uno de los mejores resultados en Roland Garros de la nueva generación, habiendo
                llegado a finales. Su revés a una mano y su potente derecha funcionan excepcionalmente bien en
                tierra batida, y tiene la experiencia de haber competido en las rondas finales.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-sm text-gray-600">
                  <strong>Factor clave:</strong> Necesita mantener la consistencia mental durante todo el torneo
                  y gestionar mejor los momentos de presión en partidos decisivos.
                </p>
              </div>
            </div>

            {/* Alexander Zverev */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Alexander Zverev (Alemania)</h3>
              <p className="text-gray-700 mb-4">
                El alemán ha demostrado en múltiples ocasiones que puede competir al más alto nivel en tierra batida,
                con excelentes resultados en Roma y Madrid. Su saque potente y su juego desde el fondo lo convierten
                en un rival peligroso, especialmente si encuentra confianza en su juego.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-sm text-gray-600">
                  <strong>Factor clave:</strong> La consistencia y la capacidad de cerrar partidos importantes
                  serán determinantes para sus aspiraciones.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-8 mt-12 text-gray-900">
              Caballos Oscuros y Sorpresas Potenciales
            </h2>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Especialistas en Tierra Batida</h3>
              <p className="text-gray-700 mb-4">
                Jugadores como Casper Ruud (Noruega), quien ha demostrado ser un especialista formidable en arcilla,
                o nuevos talentos emergentes de Sudamérica y Europa que crecieron jugando en tierra batida, pueden
                dar grandes sorpresas. Estos jugadores suelen alcanzar su mejor nivel en Roland Garros y no deben
                subestimarse.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">La Nueva Generación</h3>
              <p className="text-gray-700 mb-4">
                Varios jugadores jóvenes que estarán entre los 18 y 22 años en 2026 podrían estar listos para dar
                el salto. La historia de Roland Garros está llena de jóvenes que anunciaron su llegada con grandes
                actuaciones en París. Jugadores con menos presión y nada que perder pueden ser extremadamente
                peligrosos.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900">
              Factores Determinantes para el Éxito
            </h2>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-6 mb-6">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Condiciones de Juego</h3>
              <p className="text-gray-700 mb-3">
                Las condiciones climáticas en París pueden variar significativamente durante el torneo. Días fríos
                y húmedos hacen que la arcilla juegue más lenta y pesada, favoreciendo a los defensores y jugadores
                pacientes. Condiciones secas y cálidas aceleran la superficie, beneficiando a jugadores más agresivos.
              </p>
              <p className="text-gray-700">
                Los candidatos que mejor se adapten a estas variaciones tendrán una ventaja significativa. La
                capacidad de ajustar la estrategia según las condiciones será crucial.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-6 mb-6">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Forma Física y Gestión del Calendario</h3>
              <p className="text-gray-700">
                La gira de tierra batida previa a Roland Garros (Montecarlo, Barcelona, Madrid, Roma) es intensiva.
                Los jugadores deben encontrar el balance perfecto entre competir lo suficiente para llegar con ritmo
                y confianza, pero sin agotarse física o mentalmente antes del Grand Slam. La gestión inteligente del
                calendario puede ser la diferencia entre llegar fresco o exhausto a París.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900">
              Predicción Final
            </h2>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-300 rounded-lg p-8">
              <p className="text-lg text-gray-700 mb-4">
                El torneo masculino de Roland Garros 2026 promete ser uno de los más abiertos y competitivos de
                los últimos años. Con la combinación de juventud, talento emergente y experiencia veterana, los
                pronósticos son más difíciles que nunca.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Carlos Alcaraz y Jannik Sinner</strong> emergen como los favoritos principales, representando
                la nueva era del tenis masculino. Ambos tienen las herramientas necesarias para dominar en tierra
                batida, y probablemente uno de los dos levantará el trofeo.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Sin embargo, <strong>Novak Djokovic</strong> no puede descartarse. Su experiencia y capacidad de
                elevarse en los momentos decisivos lo mantienen como un candidato serio, especialmente si los
                partidos se ajustan y la experiencia se vuelve crucial.
              </p>
              <p className="text-lg text-gray-700">
                Los <strong>caballos oscuros</strong> como Tsitsipas, Zverev o especialistas en arcilla pueden
                aprovechar el nivel de competitividad para dar sorpresas. En un torneo tan exigente física y
                mentalmente como Roland Garros, el sorteo del cuadro y las condiciones climáticas también jugarán
                un papel determinante en quién finalmente se coronará campeón.
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
                href="/jugadores-favoritos-2026/favoritas-femeninas"
                className="block p-4 bg-pink-50 rounded-lg border-2 border-pink-200 hover:border-pink-400 transition-colors"
              >
                <h3 className="font-bold mb-2 text-gray-900">Favoritas Femeninas</h3>
                <p className="text-sm text-gray-600">Análisis del cuadro femenino</p>
              </Link>
              <Link
                href="/jugadores-favoritos-2026/records-historicos"
                className="block p-4 bg-orange-50 rounded-lg border-2 border-orange-200 hover:border-orange-400 transition-colors"
              >
                <h3 className="font-bold mb-2 text-gray-900">Records Históricos</h3>
                <p className="text-sm text-gray-600">El legado de Nadal y más</p>
              </Link>
              <Link
                href="/calendario-roland-garros-2026"
                className="block p-4 bg-blue-50 rounded-lg border-2 border-blue-200 hover:border-blue-400 transition-colors"
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
