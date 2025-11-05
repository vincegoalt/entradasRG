import Link from 'next/link'
import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { ArticleSchema } from '@/components/seo/ArticleSchema'

export const metadata: Metadata = {
  title: 'Fechas Importantes Roland Garros 2026 | Calendario Detallado',
  description: 'Todas las fechas importantes de Roland Garros 2026: clasificaciones, rondas principales, finales y eventos especiales. Planifica tu visita con nuestro calendario detallado.',
  keywords: 'fechas roland garros 2026, calendario roland garros, fechas torneo french open, clasificaciones roland garros',
}

export default function FechasImportantesPage() {
  return (
    <>
      <ArticleSchema
        headline="Fechas Importantes Roland Garros 2026"
        description="Calendario detallado con todas las fechas clave del torneo Roland Garros 2026"
        image="https://entradasrolandgarros.com/images/calendario-roland-garros.jpg"
        datePublished="2025-01-15"
        dateModified="2025-01-15"
      />

      <Breadcrumbs
        items={[
          { name: 'Calendario Roland Garros 2026', url: 'https://entradasrolandgarros.com/calendario-roland-garros-2026' },
          { name: 'Fechas Importantes', url: 'https://entradasrolandgarros.com/calendario-roland-garros-2026/fechas-importantes' }
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Fechas Importantes Roland Garros 2026
            </h1>
            <p className="text-xl md:text-2xl text-orange-100">
              Todas las fechas clave del torneo para planificar tu visita perfecta
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-8">
                Conocer las fechas importantes de Roland Garros 2026 es fundamental para planificar tu visita
                al torneo más prestigioso de tenis en tierra batida. Esta guía detallada te ayudará a entender
                el calendario completo del torneo, desde las rondas de clasificación hasta las ceremonias finales,
                permitiéndote elegir los mejores días para asistir según tus preferencias y presupuesto.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Resumen de Fechas Clave 2026</h2>

              <div className="bg-orange-50 border-l-4 border-orange-600 p-6 mb-8 rounded-r-lg">
                <ul className="space-y-2 text-gray-800">
                  <li><strong>Clasificaciones:</strong> 19-23 de mayo de 2026</li>
                  <li><strong>Inicio del cuadro principal:</strong> Domingo 24 de mayo de 2026</li>
                  <li><strong>Día del Niño:</strong> Sábado 23 de mayo de 2026</li>
                  <li><strong>Primera ronda:</strong> 24-26 de mayo de 2026</li>
                  <li><strong>Segunda ronda:</strong> 27-28 de mayo de 2026</li>
                  <li><strong>Tercera ronda:</strong> 29-30 de mayo de 2026</li>
                  <li><strong>Octavos de final:</strong> 31 mayo - 1 junio de 2026</li>
                  <li><strong>Cuartos de final:</strong> 2-3 de junio de 2026</li>
                  <li><strong>Semifinales:</strong> 4-5 de junio de 2026</li>
                  <li><strong>Final femenina:</strong> Sábado 6 de junio de 2026</li>
                  <li><strong>Final masculina:</strong> Domingo 7 de junio de 2026</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Rondas de Clasificación (19-23 de mayo)</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Las rondas de clasificación de Roland Garros comienzan cinco días antes del inicio oficial del
                cuadro principal. Durante estos días, jugadores ubicados fuera de los primeros 100 en el ranking
                mundial compiten por las últimas 16 plazas disponibles en el cuadro principal, tanto en categoría
                masculina como femenina.
              </p>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Detalles de las Clasificaciones</h3>
                <p className="text-gray-700 mb-4">
                  Las clasificaciones son una excelente oportunidad para ver tenis de alta calidad a precios muy
                  accesibles. Muchos jugadores que eventualmente llegan a las rondas finales del torneo han pasado
                  por las clasificaciones en etapas anteriores de sus carreras. Además, el ambiente es más relajado
                  y puedes acercarte más a las pistas.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold">•</span>
                    <span><strong>Primera ronda de clasificación:</strong> 19-20 de mayo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold">•</span>
                    <span><strong>Segunda ronda de clasificación:</strong> 21-22 de mayo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold">•</span>
                    <span><strong>Ronda final de clasificación:</strong> 23 de mayo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold">•</span>
                    <span><strong>Entradas:</strong> Disponibles en el día, precios desde €10-15</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Primera Semana del Torneo (24-30 de mayo)</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                La primera semana de Roland Garros es cuando el torneo realmente cobra vida. Con las tres primeras
                rondas del cuadro principal, el recinto está lleno de actividad con partidos simultáneos en todas
                las pistas. Esta semana ofrece la mejor oportunidad para ver la mayor cantidad de tenis y jugadores
                diferentes.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">Primera Ronda (24-26 de mayo)</h3>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  El domingo 24 de mayo marca el inicio oficial del cuadro principal con la primera ronda del
                  torneo. Durante tres días intensos, los 128 jugadores en categoría masculina y las 128 jugadoras
                  en categoría femenina disputarán sus partidos de apertura. Esta es la ronda más emocionante para
                  los aficionados que disfrutan de la variedad.
                </p>
                <p className="text-gray-700 font-medium">
                  <strong>Mejor para:</strong> Aficionados que quieren ver múltiples partidos, cazadores de
                  autógrafos, quienes buscan precios accesibles y ambiente festivo.
                </p>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">Segunda Ronda (27-28 de mayo)</h3>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  Miércoles y jueves de la primera semana presentan la segunda ronda, donde 64 partidos se disputan
                  en cada categoría. En esta etapa, los favoritos comienzan a enfrentar rivales más complicados,
                  y pueden aparecer las primeras sorpresas del torneo. El nivel de juego aumenta notablemente.
                </p>
                <p className="text-gray-700 font-medium">
                  <strong>Mejor para:</strong> Equilibrio entre cantidad de partidos y calidad del tenis,
                  precios todavía razonables.
                </p>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">Tercera Ronda (29-30 de mayo)</h3>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  El viernes y sábado de la primera semana cierran con la tercera ronda, donde solo 32 jugadores
                  quedan en competencia en cada categoría. Los partidos son significativamente más competitivos,
                  y esta es generalmente la última ronda donde el ground pass ofrece un buen valor, ya que aún hay
                  múltiples pistas en acción.
                </p>
                <p className="text-gray-700 font-medium">
                  <strong>Mejor para:</strong> Quienes buscan tenis de calidad sin pagar precios de segunda semana,
                  última oportunidad de ambiente festivo.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Segunda Semana del Torneo (31 mayo - 7 junio)</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                La segunda semana de Roland Garros es donde el torneo alcanza su clímax. Con solo los mejores
                jugadores restantes, cada partido adquiere una importancia dramática. Los precios de las entradas
                aumentan considerablemente, pero la calidad del tenis es incomparable.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">Octavos de Final (31 mayo - 1 junio)</h3>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  El lunes 31 de mayo marca el inicio de la segunda semana con los octavos de final. Solo 16
                  jugadores quedan en cada categoría, y prácticamente todos son nombres reconocidos del circuito
                  mundial. Estos partidos se juegan principalmente en las tres pistas principales: Philippe-Chatrier,
                  Suzanne-Lenglen y Simonne-Mathieu.
                </p>
                <p className="text-gray-700 font-medium">
                  <strong>Precio aproximado:</strong> €80-200 dependiendo de la pista y asiento.
                </p>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">Cuartos de Final (2-3 de junio)</h3>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  Martes y miércoles de la segunda semana presentan los cuartos de final, considerado por muchos
                  aficionados experimentados como el mejor momento para asistir. Solo ocho jugadores quedan, el
                  nivel es excepcional, pero los precios aún no han alcanzado los picos extremos de las finales.
                  Esta ronda ofrece la mejor relación calidad-precio de la segunda semana.
                </p>
                <p className="text-gray-700 font-medium">
                  <strong>Precio aproximado:</strong> €120-300 dependiendo de la pista y asiento.
                </p>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">Semifinales (4-5 de junio)</h3>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  Jueves y viernes se disputan las semifinales en Philippe-Chatrier, con dos partidos masculinos
                  y dos femeninos que determinarán quiénes competirán por el título. La tensión es palpable, el
                  estadio está completamente lleno, y cada punto puede cambiar el rumbo de una carrera. Las entradas
                  son altamente demandadas y costosas.
                </p>
                <p className="text-gray-700 font-medium">
                  <strong>Precio aproximado:</strong> €200-400 dependiendo del asiento.
                </p>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">Finales (6-7 de junio)</h3>
              <div className="bg-orange-50 border-l-4 border-orange-600 p-6 mb-6 rounded-r-lg">
                <p className="text-gray-700 mb-4">
                  El fin de semana final de Roland Garros es el momento más esperado del año en el tenis de tierra
                  batida. La final femenina el sábado 6 de junio y la final masculina el domingo 7 de junio son los
                  partidos más prestigiosos del torneo. Philippe-Chatrier alcanza su máxima capacidad con una
                  atmósfera eléctrica que solo las finales de Grand Slam pueden ofrecer.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Final Femenina - Sábado 6 de junio:</strong> Tradicionalmente comienza alrededor de las
                  15:00 horas. La ceremonia de premiación sigue inmediatamente después del partido.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Final Masculina - Domingo 7 de junio:</strong> Generalmente programada para las 15:00 horas.
                  Es considerada la final más importante del año en tierra batida, con la ceremonia de clausura del
                  torneo tras el partido.
                </p>
                <p className="text-gray-700 font-medium">
                  <strong>Precio aproximado:</strong> €300-1000+ dependiendo del asiento y demanda.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Eventos Especiales y Fechas Adicionales</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-orange-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-orange-600">Día del Niño</h3>
                  <p className="text-gray-700 mb-2"><strong>Fecha:</strong> Sábado 23 de mayo de 2026</p>
                  <p className="text-gray-600">
                    El día antes del inicio oficial del torneo, Roland Garros organiza actividades especiales
                    para niños y familias. Incluye exhibiciones de jugadores, zonas de juego interactivas y
                    la oportunidad de acercarse más a las estrellas del tenis.
                  </p>
                </div>

                <div className="bg-white border-2 border-orange-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-orange-600">Dobles y Mixtos</h3>
                  <p className="text-gray-700 mb-2"><strong>Fechas:</strong> Durante todo el torneo</p>
                  <p className="text-gray-600">
                    Las competiciones de dobles masculinos, femeninos y mixtos se juegan paralelamente al torneo
                    individual. Las finales de dobles generalmente se programan durante el fin de semana final,
                    antes de las finales individuales.
                  </p>
                </div>

                <div className="bg-white border-2 border-orange-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-orange-600">Ceremonias de Premiación</h3>
                  <p className="text-gray-700 mb-2"><strong>Fechas:</strong> 6-7 de junio de 2026</p>
                  <p className="text-gray-600">
                    Las ceremonias de premiación se realizan inmediatamente después de cada final en la pista
                    Philippe-Chatrier. Incluyen la entrega del trofeo, discursos de los finalistas y la tradicional
                    foto con la Copa de los Mosqueteros.
                  </p>
                </div>

                <div className="bg-white border-2 border-orange-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-orange-600">Día de Descanso</h3>
                  <p className="text-gray-700 mb-2"><strong>Tradicionalmente:</strong> Entre semifinales y finales</p>
                  <p className="text-gray-600">
                    Históricamente, había un día de descanso entre las semifinales y las finales, pero en años
                    recientes esto ha cambiado. Consulta el calendario oficial para confirmar los días exactos
                    de cada ronda.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Cómo Elegir tus Fechas Ideales</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                La elección de cuándo asistir a Roland Garros depende de varios factores personales. Considera
                estos aspectos al planificar tu visita:
              </p>

              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-orange-500 pl-6 py-2">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Si prefieres cantidad sobre calidad</h3>
                  <p className="text-gray-700">
                    Elige la primera semana (24-30 de mayo), especialmente los primeros días. Podrás ver muchos
                    partidos simultáneos y experimentar el ambiente más festivo del torneo con precios accesibles.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6 py-2">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Si buscas la mejor relación calidad-precio</h3>
                  <p className="text-gray-700">
                    Los cuartos de final (2-3 de junio) son la opción ideal. Tenis de máximo nivel con solo
                    los mejores jugadores del mundo, pero con precios significativamente más bajos que las finales.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6 py-2">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Si es tu visita de una vez en la vida</h3>
                  <p className="text-gray-700">
                    Las finales del fin de semana (6-7 de junio) ofrecen la experiencia más memorable y prestigiosa,
                    aunque con los precios más altos. La atmósfera es incomparable y la emoción, inolvidable.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6 py-2">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Si viajas con niños</h3>
                  <p className="text-gray-700">
                    La primera semana es más adecuada para familias: precios accesibles, ambiente relajado,
                    más oportunidades de moverte libremente y ver entrenamientos. Considera también asistir al
                    Día del Niño el 23 de mayo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Continúa Planificando tu Visita
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/calendario-roland-garros-2026"
                className="text-orange-600 hover:text-orange-700 font-medium flex items-center"
              >
                <span className="mr-2">←</span>
                Volver al Calendario Principal
              </Link>
              <Link
                href="/calendario-roland-garros-2026/horarios-por-ronda"
                className="text-orange-600 hover:text-orange-700 font-medium flex items-center"
              >
                <span className="mr-2">→</span>
                Horarios por Ronda
              </Link>
              <Link
                href="/entradas-roland-garros-2026"
                className="text-orange-600 hover:text-orange-700 font-medium flex items-center"
              >
                <span className="mr-2">→</span>
                Tipos de Entradas y Precios
              </Link>
              <Link
                href="/calendario-roland-garros-2026/orden-de-juego"
                className="text-orange-600 hover:text-orange-700 font-medium flex items-center"
              >
                <span className="mr-2">→</span>
                Orden de Juego Diario
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
