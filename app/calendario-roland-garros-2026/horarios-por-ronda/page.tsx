import Link from 'next/link'
import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { ArticleSchema } from '@/components/seo/ArticleSchema'

export const metadata: Metadata = {
  title: 'Horarios por Ronda Roland Garros 2026 | Programación del Torneo',
  description: 'Horarios detallados de cada ronda de Roland Garros 2026. Conoce cuándo comienzan los partidos en cada pista y planifica tu día en el torneo.',
  keywords: 'horarios roland garros, horarios por ronda, programación roland garros 2026, sesiones roland garros, hora partidos roland garros',
}

export default function HorariosPorRondaPage() {
  return (
    <>
      <ArticleSchema
        headline="Horarios por Ronda Roland Garros 2026"
        description="Guía completa de horarios para cada ronda del torneo Roland Garros 2026"
        image="https://entradasrolandgarros.com/images/horarios-roland-garros.jpg"
        datePublished="2025-01-15"
        dateModified="2025-01-15"
      />

      <Breadcrumbs
        items={[
          { name: 'Calendario Roland Garros 2026', url: 'https://entradasrolandgarros.com/calendario-roland-garros-2026' },
          { name: 'Horarios por Ronda', url: 'https://entradasrolandgarros.com/calendario-roland-garros-2026/horarios-por-ronda' }
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Horarios por Ronda Roland Garros 2026
            </h1>
            <p className="text-xl md:text-2xl text-orange-100">
              Programación detallada de cada ronda para aprovechar al máximo tu experiencia
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
                Comprender los horarios de Roland Garros es esencial para planificar tu visita de manera efectiva.
                Cada ronda del torneo tiene patrones de programación diferentes, y conocer estos detalles te
                permitirá maximizar tu tiempo en el estadio, ver a tus jugadores favoritos y disfrutar de la
                mejor experiencia posible. Esta guía desglosa los horarios típicos para cada ronda del torneo.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-600 p-6 mb-8 rounded-r-lg">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Horarios Generales</h3>
                <p className="text-gray-800">
                  <strong>Sesión matutina:</strong> 10:30-11:00 horas (pistas secundarias)<br />
                  <strong>Sesión principal:</strong> 11:00 horas (pistas principales)<br />
                  <strong>Sesión de tarde:</strong> Tras la finalización del primer partido<br />
                  <strong>Sesión nocturna:</strong> 20:00 horas (Philippe-Chatrier solamente)
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Rondas de Clasificación (19-23 de mayo)</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Las rondas de clasificación tienen un formato más condensado y flexible que el cuadro principal.
                Múltiples partidos se juegan simultáneamente en las pistas de clasificación, y los horarios pueden
                variar según el clima y la duración de los partidos previos.
              </p>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Programación de Clasificaciones</h3>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <p className="font-semibold mb-1">Primera sesión del día</p>
                    <p><strong>Horario de inicio:</strong> 10:00 horas aproximadamente</p>
                    <p className="text-gray-600">
                      Los primeros partidos comienzan temprano para acomodar el gran número de partidos programados.
                      Esta es la mejor sesión para evitar multitudes.
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="font-semibold mb-1">Sesiones posteriores</p>
                    <p><strong>Horario:</strong> Continuo hasta aproximadamente las 19:00-20:00 horas</p>
                    <p className="text-gray-600">
                      Los partidos continúan durante todo el día en múltiples pistas. No hay sesión nocturna
                      durante las clasificaciones.
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="font-semibold mb-1">Número de pistas activas</p>
                    <p className="text-gray-600">
                      Generalmente 6-8 pistas funcionan simultáneamente durante las clasificaciones, permitiendo
                      ver múltiples partidos con una sola entrada.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Primera Ronda (24-26 de mayo)</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                La primera ronda presenta el mayor número de partidos simultáneos del torneo, con acción en
                prácticamente todas las pistas del complejo. Los horarios están diseñados para maximizar el número
                de partidos que se pueden completar en tres días.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-orange-600">Philippe-Chatrier</h3>
                  <p className="text-gray-700 mb-3"><strong>Primer partido:</strong> 11:00 horas</p>
                  <p className="text-gray-700 mb-3"><strong>Segundo partido:</strong> Tras finalizar el primero</p>
                  <p className="text-gray-700 mb-3"><strong>Tercer partido:</strong> Generalmente alrededor de las 15:00-16:00 horas</p>
                  <p className="text-gray-700"><strong>Sesión nocturna:</strong> 20:00 horas (si está programada)</p>
                  <p className="text-gray-600 mt-3 text-sm">
                    Durante la primera ronda, Philippe-Chatrier normalmente alberga 3-4 partidos diarios,
                    alternando entre categoría masculina y femenina.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-orange-600">Suzanne-Lenglen</h3>
                  <p className="text-gray-700 mb-3"><strong>Primer partido:</strong> 11:00 horas</p>
                  <p className="text-gray-700 mb-3"><strong>Segundo partido:</strong> Tras finalizar el primero</p>
                  <p className="text-gray-700 mb-3"><strong>Tercer partido:</strong> Tarde (variable)</p>
                  <p className="text-gray-700"><strong>Cuarto partido:</strong> Si el tiempo lo permite</p>
                  <p className="text-gray-600 mt-3 text-sm">
                    Suzanne-Lenglen es la segunda pista más importante y alberga partidos de alto nivel
                    durante toda la primera ronda.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-orange-600">Simonne-Mathieu</h3>
                  <p className="text-gray-700 mb-3"><strong>Primer partido:</strong> 11:00 horas</p>
                  <p className="text-gray-700 mb-3"><strong>Partidos subsiguientes:</strong> Continuo</p>
                  <p className="text-gray-600 mt-3 text-sm">
                    La tercera pista principal mantiene un programa activo con partidos interesantes
                    durante toda la primera semana.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-orange-600">Pistas Secundarias (4-14)</h3>
                  <p className="text-gray-700 mb-3"><strong>Primer partido:</strong> 10:30 horas</p>
                  <p className="text-gray-700 mb-3"><strong>Programación:</strong> Continua hasta el anochecer</p>
                  <p className="text-gray-600 mt-3 text-sm">
                    Las pistas numeradas pueden tener hasta 5-6 partidos diarios durante la primera ronda.
                    Ideal para el ground pass.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Segunda y Tercera Ronda (27-30 de mayo)</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                A medida que el torneo avanza hacia la segunda y tercera ronda, el número de partidos disminuye,
                pero la calidad aumenta. Los horarios se vuelven ligeramente más predecibles, aunque siguen
                dependiendo de la duración de los partidos previos.
              </p>

              <div className="bg-white border-2 border-orange-200 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Segunda Ronda - Programación Típica</h3>
                <p className="text-gray-700 mb-4">
                  Con 64 partidos por completar en dos días (miércoles y jueves), la programación sigue siendo
                  intensa pero más manejable que la primera ronda. Las tres pistas principales están activas
                  todo el día.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold">•</span>
                    <span><strong>Pistas principales:</strong> 3-4 partidos por día en cada una</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold">•</span>
                    <span><strong>Pistas secundarias:</strong> 4-5 partidos por pista</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold">•</span>
                    <span><strong>Sesión nocturna:</strong> Comienza a estar más establecida con partidos destacados</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-orange-200 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Tercera Ronda - Programación Típica</h3>
                <p className="text-gray-700 mb-4">
                  El viernes y sábado de la primera semana presentan 32 partidos totales. Esta es la última
                  ronda donde verás acción significativa en las pistas secundarias antes de que el torneo se
                  concentre en las tres pistas principales.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold">•</span>
                    <span><strong>Philippe-Chatrier:</strong> 3-4 partidos de alto nivel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold">•</span>
                    <span><strong>Suzanne-Lenglen:</strong> 3-4 partidos destacados</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold">•</span>
                    <span><strong>Simonne-Mathieu y pistas secundarias:</strong> Partidos restantes distribuidos</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Octavos de Final (31 mayo - 1 junio)</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Los octavos de final marcan el inicio de la segunda semana y un cambio significativo en la
                programación. Solo 16 partidos quedan por completar, y prácticamente todos se juegan en las
                tres pistas principales.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-600 p-6 mb-8 rounded-r-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Distribución de Partidos</h3>
                <p className="text-gray-700 mb-3">
                  Durante los dos días de octavos de final, los 16 partidos se distribuyen entre las tres
                  pistas principales. Esta es la primera ronda donde prácticamente no hay acción en las
                  pistas secundarias.
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-800"><strong>Lunes 31 de mayo:</strong> 8 partidos (4 hombres, 4 mujeres)</p>
                  <p className="text-gray-800"><strong>Martes 1 de junio:</strong> 8 partidos (4 hombres, 4 mujeres)</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-5">
                  <h3 className="font-bold mb-3 text-orange-600">Philippe-Chatrier</h3>
                  <p className="text-gray-700 text-sm mb-2"><strong>11:00 h</strong> - Primer partido</p>
                  <p className="text-gray-700 text-sm mb-2"><strong>~14:30 h</strong> - Segundo partido</p>
                  <p className="text-gray-700 text-sm"><strong>20:00 h</strong> - Sesión nocturna</p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-5">
                  <h3 className="font-bold mb-3 text-orange-600">Suzanne-Lenglen</h3>
                  <p className="text-gray-700 text-sm mb-2"><strong>11:00 h</strong> - Primer partido</p>
                  <p className="text-gray-700 text-sm"><strong>~14:30 h</strong> - Segundo partido</p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-5">
                  <h3 className="font-bold mb-3 text-orange-600">Simonne-Mathieu</h3>
                  <p className="text-gray-700 text-sm mb-2"><strong>11:00 h</strong> - Primer partido</p>
                  <p className="text-gray-700 text-sm"><strong>~14:30 h</strong> - Segundo partido</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Cuartos de Final (2-3 de junio)</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Los cuartos de final presentan una programación más concentrada con solo ocho partidos totales.
                Estos partidos se consideran premium y reciben los mejores horarios en Philippe-Chatrier y
                Suzanne-Lenglen.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Programación de Cuartos de Final</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Martes 2 de junio - Cuartos de Final Masculinos</p>
                    <ul className="space-y-1 text-gray-700 ml-4">
                      <li><strong>Philippe-Chatrier:</strong> 11:00 h - Primer cuarto de final masculino</li>
                      <li><strong>Philippe-Chatrier:</strong> ~14:30 h - Segundo cuarto de final masculino</li>
                      <li><strong>Suzanne-Lenglen:</strong> 11:00 h - Tercer cuarto de final masculino</li>
                      <li><strong>Philippe-Chatrier:</strong> 20:00 h - Cuarto cuarto de final masculino (nocturna)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Miércoles 3 de junio - Cuartos de Final Femeninos</p>
                    <ul className="space-y-1 text-gray-700 ml-4">
                      <li><strong>Philippe-Chatrier:</strong> 11:00 h - Primer cuarto de final femenino</li>
                      <li><strong>Philippe-Chatrier:</strong> ~14:30 h - Segundo cuarto de final femenino</li>
                      <li><strong>Suzanne-Lenglen:</strong> 11:00 h - Tercer cuarto de final femenino</li>
                      <li><strong>Philippe-Chatrier:</strong> 20:00 h - Cuarto cuarto de final femenino (nocturna)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Semifinales (4-5 de junio)</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Las semifinales se juegan exclusivamente en Philippe-Chatrier, la pista central de Roland Garros.
                Con solo cuatro partidos totales en dos días, los horarios son más definidos y predecibles.
              </p>

              <div className="bg-white border-2 border-orange-200 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Horarios de Semifinales</h3>
                <div className="space-y-4">
                  <div className="bg-orange-50 p-4 rounded">
                    <p className="font-semibold text-gray-900 mb-2">Jueves 4 de junio - Semifinales Femeninas</p>
                    <p className="text-gray-700 mb-1"><strong>Primera semifinal:</strong> 12:00 horas aproximadamente</p>
                    <p className="text-gray-700"><strong>Segunda semifinal:</strong> Tras finalizar la primera (generalmente 15:00-16:00 h)</p>
                    <p className="text-gray-600 mt-2 text-sm">
                      Ambas semifinales femeninas se juegan en el mismo día en Philippe-Chatrier, permitiendo
                      a los aficionados ver ambos partidos con una sola entrada.
                    </p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded">
                    <p className="font-semibold text-gray-900 mb-2">Viernes 5 de junio - Semifinales Masculinas</p>
                    <p className="text-gray-700 mb-1"><strong>Primera semifinal:</strong> 12:00 horas aproximadamente</p>
                    <p className="text-gray-700"><strong>Segunda semifinal:</strong> Tras finalizar la primera (generalmente 15:00-16:00 h)</p>
                    <p className="text-gray-600 mt-2 text-sm">
                      Las semifinales masculinas siguen el mismo formato, con ambos partidos en el mismo día.
                      Estos partidos determinan quiénes disputarán la final del domingo.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Finales (6-7 de junio)</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Las finales de Roland Garros tienen los horarios más establecidos del torneo. Como los eventos
                culminantes del año en tierra batida, estos partidos reciben programación preferencial en
                Philippe-Chatrier.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-300 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-3 text-orange-600">Final Femenina</h3>
                  <p className="text-gray-900 text-lg mb-2"><strong>Sábado 6 de junio de 2026</strong></p>
                  <p className="text-gray-700 mb-4"><strong>Horario:</strong> 15:00 horas (aproximadamente)</p>
                  <p className="text-gray-600 mb-3">
                    La final individual femenina se disputa tradicionalmente en la tarde del sábado. Es uno de
                    los partidos más importantes del año en el tenis femenino mundial.
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Nota:</strong> La ceremonia de premiación se realiza inmediatamente después del
                    partido, añadiendo aproximadamente 30 minutos al evento total.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-300 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-3 text-orange-600">Final Masculina</h3>
                  <p className="text-gray-900 text-lg mb-2"><strong>Domingo 7 de junio de 2026</strong></p>
                  <p className="text-gray-700 mb-4"><strong>Horario:</strong> 15:00 horas (aproximadamente)</p>
                  <p className="text-gray-600 mb-3">
                    La final masculina cierra el torneo el domingo por la tarde. Considerada la final más
                    prestigiosa del año en tierra batida, atrae a una audiencia global de millones de espectadores.
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Nota:</strong> La ceremonia de clausura del torneo sigue a la ceremonia de premiación,
                    marcando el final oficial de Roland Garros 2026.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Consejos para Gestionar los Horarios</h2>

              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Llega con Antelación</h3>
                  <p className="text-gray-700">
                    Especialmente para las sesiones matutinas, llega al menos 60-90 minutos antes del horario
                    de inicio publicado. Esto te da tiempo para pasar seguridad, explorar el recinto, encontrar
                    buenos asientos en pistas sin asientos asignados, y disfrutar del ambiente previo al partido.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Comprende "No Antes De"</h3>
                  <p className="text-gray-700">
                    Los horarios listados como "no antes de" (pas avant en francés) significan que el partido
                    no comenzará antes de esa hora, pero podría comenzar más tarde si los partidos previos se
                    extienden. Siempre ten un plan B y flexibilidad en tu programación.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Usa la Aplicación Oficial</h3>
                  <p className="text-gray-700">
                    La app oficial de Roland Garros proporciona actualizaciones en tiempo real sobre horarios,
                    retrasos y cambios. Activa las notificaciones para tus jugadores favoritos para saber
                    exactamente cuándo jugarán. También muestra el progreso actual de los partidos en curso,
                    ayudándote a estimar cuándo comenzará el siguiente.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Planifica para Retrasos Climáticos</h3>
                  <p className="text-gray-700">
                    La lluvia puede causar retrasos significativos, especialmente en pistas sin techo retráctil.
                    Philippe-Chatrier tiene techo, pero Suzanne-Lenglen y la mayoría de las pistas secundarias no.
                    Los partidos suspendidos se reanudan generalmente lo antes posible, pero esto puede alterar
                    completamente el orden de juego del día.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Considera la Sesión Nocturna</h3>
                  <p className="text-gray-700">
                    La sesión nocturna de Philippe-Chatrier, que comienza a las 20:00 horas, ofrece una
                    experiencia única bajo las luces. El ambiente es diferente, generalmente más íntimo y
                    emocionante. Sin embargo, ten en cuenta el transporte de regreso, ya que los partidos
                    pueden terminar tarde, especialmente si van a cinco sets.
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
                href="/calendario-roland-garros-2026/fechas-importantes"
                className="text-orange-600 hover:text-orange-700 font-medium flex items-center"
              >
                <span className="mr-2">→</span>
                Fechas Importantes del Torneo
              </Link>
              <Link
                href="/calendario-roland-garros-2026/orden-de-juego"
                className="text-orange-600 hover:text-orange-700 font-medium flex items-center"
              >
                <span className="mr-2">→</span>
                Cómo Consultar el Orden de Juego
              </Link>
              <Link
                href="/estadio-roland-garros"
                className="text-orange-600 hover:text-orange-700 font-medium flex items-center"
              >
                <span className="mr-2">→</span>
                Guía de Pistas y Estadios
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
