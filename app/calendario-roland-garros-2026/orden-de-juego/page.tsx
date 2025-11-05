import Link from 'next/link'
import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { ArticleSchema } from '@/components/seo/ArticleSchema'

export const metadata: Metadata = {
  title: 'Orden de Juego Roland Garros 2026 | Cómo Consultar el Programa Diario',
  description: 'Guía completa sobre el orden de juego diario de Roland Garros 2026. Aprende cómo consultarlo, interpretarlo y planificar tu día en el torneo.',
  keywords: 'orden de juego roland garros, programa diario roland garros, partidos hoy roland garros, horarios partidos roland garros 2026',
}

export default function OrdenDeJuegoPage() {
  return (
    <>
      <ArticleSchema
        headline="Orden de Juego Roland Garros 2026"
        description="Todo lo que necesitas saber sobre el orden de juego diario de Roland Garros 2026"
        image="https://entradasrolandgarros.com/images/orden-juego-roland-garros.jpg"
        datePublished="2025-01-15"
        dateModified="2025-01-15"
      />

      <Breadcrumbs
        items={[
          { name: 'Calendario Roland Garros 2026', url: 'https://entradasrolandgarros.com/calendario-roland-garros-2026' },
          { name: 'Orden de Juego', url: 'https://entradasrolandgarros.com/calendario-roland-garros-2026/orden-de-juego' }
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Orden de Juego Roland Garros 2026
            </h1>
            <p className="text-xl md:text-2xl text-orange-100">
              Cómo consultar y entender el programa diario de partidos
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
                El orden de juego diario es la herramienta más importante para cualquier espectador de Roland Garros.
                Este documento oficial, publicado cada tarde para el día siguiente, detalla exactamente qué partidos
                se jugarán, en qué pistas y a qué hora aproximada. Saber cómo consultarlo, interpretarlo y planificar
                tu día basándote en él transformará tu experiencia en el torneo.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-600 p-6 mb-8 rounded-r-lg">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Información Clave</h3>
                <ul className="space-y-2 text-gray-800">
                  <li><strong>Hora de publicación:</strong> 18:00-19:00 horas del día anterior</li>
                  <li><strong>Dónde consultarlo:</strong> rolandgarros.com y app oficial</li>
                  <li><strong>Idiomas disponibles:</strong> Francés, inglés, español y otros</li>
                  <li><strong>Actualizaciones:</strong> En tiempo real durante el día de juego</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">¿Qué es el Orden de Juego?</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                El orden de juego (ordre de jeu en francés, order of play en inglés) es el programa oficial diario
                que especifica todos los partidos programados para el día siguiente. Este documento incluye los
                nombres de los jugadores, la pista asignada y la hora aproximada o el orden secuencial de los partidos.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                El orden de juego es elaborado por el equipo de programación del torneo, que considera múltiples
                factores: el ranking de los jugadores, el equilibrio entre categorías masculina y femenina, el
                descanso entre partidos de cada jugador, las preferencias televisivas, las condiciones climáticas
                previstas y la capacidad de las pistas. Es un ejercicio complejo de logística que busca maximizar
                la calidad del espectáculo mientras respeta las necesidades de los competidores.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Cómo Consultar el Orden de Juego</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-orange-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-orange-600">Sitio Web Oficial</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>URL:</strong> rolandgarros.com
                  </p>
                  <p className="text-gray-600 mb-3">
                    El sitio web oficial de Roland Garros publica el orden de juego completo cada tarde
                    alrededor de las 18:00-19:00 horas. Navega a la sección "Order of Play" o "Ordre de Jeu"
                    en el menú principal.
                  </p>
                  <p className="text-gray-700 font-medium">
                    <strong>Ventaja:</strong> Vista completa en pantalla grande, fácil de imprimir.
                  </p>
                </div>

                <div className="bg-white border-2 border-orange-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-orange-600">Aplicación Móvil Oficial</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>App:</strong> Roland-Garros Official (iOS y Android)
                  </p>
                  <p className="text-gray-600 mb-3">
                    La aplicación oficial es la forma más conveniente de consultar el orden de juego,
                    especialmente cuando estás en el estadio. Ofrece notificaciones push cuando se publica
                    el nuevo orden de juego y actualizaciones en tiempo real.
                  </p>
                  <p className="text-gray-700 font-medium">
                    <strong>Ventaja:</strong> Notificaciones, actualizaciones en tiempo real, accesible en el estadio.
                  </p>
                </div>

                <div className="bg-white border-2 border-orange-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-orange-600">Pantallas en el Estadio</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Ubicación:</strong> Distribuidas por todo el recinto
                  </p>
                  <p className="text-gray-600 mb-3">
                    Roland Garros cuenta con numerosas pantallas digitales que muestran el orden de juego
                    actualizado, resultados en vivo y próximos partidos. Son especialmente útiles para
                    verificar cambios de última hora.
                  </p>
                  <p className="text-gray-700 font-medium">
                    <strong>Ventaja:</strong> Información visual inmediata mientras exploras el recinto.
                  </p>
                </div>

                <div className="bg-white border-2 border-orange-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-orange-600">Programas Impresos</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Disponibilidad:</strong> Puntos de información en el estadio
                  </p>
                  <p className="text-gray-600 mb-3">
                    Algunos puntos de información distribuyen versiones impresas del orden de juego diario.
                    Son útiles si prefieres tener una referencia física o si tienes problemas de batería
                    en tu dispositivo móvil.
                  </p>
                  <p className="text-gray-700 font-medium">
                    <strong>Ventaja:</strong> No requiere batería, fácil de compartir con tu grupo.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Cómo Interpretar el Orden de Juego</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Entender cómo leer el orden de juego correctamente es crucial para planificar tu día. Aquí está
                todo lo que necesitas saber sobre cómo está estructurado y qué significa cada elemento.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Elementos del Orden de Juego</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Pista (Court)</p>
                    <p className="text-gray-700">
                      Los partidos están organizados por pista. Las pistas principales (Philippe-Chatrier,
                      Suzanne-Lenglen, Simonne-Mathieu) aparecen primero, seguidas de las pistas numeradas.
                      Cada pista tiene su propia lista secuencial de partidos.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Jugadores y Clasificación</p>
                    <p className="text-gray-700">
                      Los nombres de los jugadores aparecen con su clasificación en el torneo (número entre
                      paréntesis). Por ejemplo, "C. Alcaraz (3)" significa que Alcaraz es la tercera cabeza
                      de serie del torneo. "Q" indica un jugador que vino de la clasificación, "WC" significa
                      wild card (invitación).
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Horario de Inicio</p>
                    <p className="text-gray-700 mb-2">
                      El primer partido de cada pista generalmente tiene una hora específica (ej: "11:00").
                      Los partidos subsiguientes en la misma pista aparecerán como "No antes de [hora]" o
                      simplemente listados en orden secuencial sin hora específica.
                    </p>
                    <p className="text-gray-600 text-sm">
                      <strong>Importante:</strong> "No antes de" (pas avant / not before) significa que el
                      partido NO comenzará antes de esa hora, pero podría comenzar más tarde si los partidos
                      previos en esa pista se extienden.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Tipo de Partido</p>
                    <p className="text-gray-700">
                      El orden de juego especifica si es individual masculino (Men's Singles), individual
                      femenino (Women's Singles), dobles masculinos, dobles femeninos o dobles mixtos.
                      También indica la ronda del torneo.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Sesión Nocturna</p>
                    <p className="text-gray-700">
                      Los partidos de la sesión nocturna (solo en Philippe-Chatrier) están claramente marcados
                      y comienzan a las 20:00 horas. Estos requieren una entrada separada y específica para
                      la sesión nocturna.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Ejemplo de Lectura del Orden de Juego</h2>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-orange-600">Philippe-Chatrier - Martes 27 de mayo</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-semibold mb-1">11:00 - Individual Femenino - Segunda Ronda</p>
                    <p>I. Swiatek (1) vs. M. Kostyuk</p>
                    <p className="text-sm text-gray-600 mt-1">
                      <strong>Interpretación:</strong> El primer partido comienza a las 11:00. Swiatek es
                      cabeza de serie número 1.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-semibold mb-1">No antes de 13:30 - Individual Masculino - Segunda Ronda</p>
                    <p>C. Alcaraz (3) vs. J. Sinner (2)</p>
                    <p className="text-sm text-gray-600 mt-1">
                      <strong>Interpretación:</strong> Este partido no comenzará antes de las 13:30, pero
                      podría comenzar más tarde dependiendo de cuánto dure el partido de Swiatek.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-semibold mb-1">A continuación - Individual Femenino - Segunda Ronda</p>
                    <p>E. Rybakina (4) vs. M. Keys</p>
                    <p className="text-sm text-gray-600 mt-1">
                      <strong>Interpretación:</strong> Este partido comenzará después de que termine el
                      partido anterior. La hora exacta dependerá completamente de la duración de los
                      partidos previos.
                    </p>
                  </div>

                  <div className="bg-orange-50 p-3 rounded border-l-4 border-orange-500">
                    <p className="font-semibold mb-1">20:00 - SESIÓN NOCTURNA - Individual Masculino - Segunda Ronda</p>
                    <p>R. Nadal vs. N. Djokovic (1)</p>
                    <p className="text-sm text-gray-600 mt-1">
                      <strong>Interpretación:</strong> Este partido es de la sesión nocturna, que requiere
                      entrada separada. Comenzará a las 20:00 independientemente de lo que ocurra durante
                      la sesión diurna.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Cambios y Actualizaciones del Orden de Juego</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                El orden de juego no es completamente fijo y puede experimentar cambios por diversos motivos.
                Comprender cuándo y por qué cambia te ayudará a adaptarte durante tu día en el torneo.
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Retrasos por Clima</h3>
                  <p className="text-gray-700 mb-3">
                    La lluvia es la causa más común de cambios en el orden de juego. Cuando llueve, los partidos
                    en pistas descubiertas se suspenden. Philippe-Chatrier tiene techo retráctil desde 2020,
                    pero Suzanne-Lenglen y las pistas secundarias no.
                  </p>
                  <p className="text-gray-600">
                    <strong>Qué hacer:</strong> Los partidos suspendidos se reanudan generalmente en la misma
                    pista lo antes posible. Esto puede retrasar todos los partidos subsiguientes. Consulta
                    la app oficial regularmente para actualizaciones.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Partidos que se Extienden</h3>
                  <p className="text-gray-700 mb-3">
                    En tierra batida, los partidos pueden durar mucho tiempo. Un partido de cinco sets puede
                    fácilmente superar las cuatro horas. Cuando esto ocurre, todos los partidos programados
                    "no antes de" en esa pista se retrasan proporcionalmente.
                  </p>
                  <p className="text-gray-600">
                    <strong>Qué hacer:</strong> Monitorea el progreso de los partidos en curso usando la app.
                    Si el partido que quieres ver está listado como tercero en una pista, prepárate para esperar
                    varias horas después del inicio programado del día.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Cambios de Pista de Último Minuto</h3>
                  <p className="text-gray-700 mb-3">
                    Ocasionalmente, el torneo puede mover un partido de una pista a otra. Esto puede ocurrir
                    para equilibrar la carga entre pistas, acomodar retrasos climáticos o por otras razones
                    logísticas.
                  </p>
                  <p className="text-gray-600">
                    <strong>Qué hacer:</strong> Verifica la app oficial antes de dirigirte a una pista específica.
                    Si tienes entrada para una pista específica, generalmente seguirá siendo válida incluso si
                    cambian los partidos programados para esa pista.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Retiros de Jugadores</h3>
                  <p className="text-gray-700 mb-3">
                    Si un jugador se retira antes de su partido (walkover), ese partido se cancela y el orden
                    de juego se ajusta. Los partidos subsiguientes en esa pista pueden adelantarse.
                  </p>
                  <p className="text-gray-600">
                    <strong>Qué hacer:</strong> Si esperabas ver un partido específico, el retiro significa que
                    no se jugará. Sin embargo, los partidos siguientes comenzarán antes, así que verifica las
                    actualizaciones para no perderte otros partidos interesantes.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Estrategias para Planificar tu Día</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Una vez que entiendes cómo funciona el orden de juego, puedes usarlo estratégicamente para
                maximizar tu experiencia en Roland Garros. Aquí están las mejores prácticas para planificar
                tu día basándote en el orden de juego.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="font-bold mb-3 text-gray-900 flex items-center">
                    <span className="text-2xl mr-2">🎯</span>
                    Identifica tus Partidos Prioritarios
                  </h3>
                  <p className="text-gray-700">
                    Revisa el orden de juego la noche anterior y marca los 2-3 partidos que absolutamente
                    quieres ver. Planifica tu día alrededor de estos partidos prioritarios, dejando flexibilidad
                    para explorar otros si el tiempo lo permite.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="font-bold mb-3 text-gray-900 flex items-center">
                    <span className="text-2xl mr-2">⏱️</span>
                    Calcula Tiempos Realistas
                  </h3>
                  <p className="text-gray-700">
                    Para un partido de Grand Slam en tierra batida, asume un mínimo de 2 horas para sets directos
                    y 3-4 horas si va a cinco sets. Si un partido está listado como "segundo en pista", es poco
                    probable que comience antes de 2-3 horas después del inicio del día.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="font-bold mb-3 text-gray-900 flex items-center">
                    <span className="text-2xl mr-2">🏟️</span>
                    Aprovecha las Pistas Múltiples
                  </h3>
                  <p className="text-gray-700">
                    Si tienes un ground pass, no te limites a una sola pista. Durante la primera semana, puedes
                    ver partes de múltiples partidos. Comienza en una pista por la mañana, muévete a otra para
                    el mediodía y termina en una tercera por la tarde.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="font-bold mb-3 text-gray-900 flex items-center">
                    <span className="text-2xl mr-2">🔄</span>
                    Mantén un Plan B
                  </h3>
                  <p className="text-gray-700">
                    Siempre ten partidos alternativos identificados en caso de que tu primer plan no funcione
                    (partido termina rápido, retrasos climáticos, etc.). La flexibilidad es clave para disfrutar
                    plenamente de Roland Garros.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Consejos Avanzados</h2>

              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-orange-500 pl-6 py-2">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Configura Notificaciones Personalizadas</h3>
                  <p className="text-gray-700">
                    En la app oficial, puedes marcar jugadores como favoritos y recibir notificaciones cuando
                    se publique su próximo partido. Esto es especialmente útil si sigues a jugadores específicos
                    y quieres asegurarte de no perderte sus partidos.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6 py-2">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Observa los Patrones del Torneo</h3>
                  <p className="text-gray-700">
                    Los mejores jugadores tienden a programarse en Philippe-Chatrier o Suzanne-Lenglen. Las
                    sesiones nocturnas generalmente presentan partidos de alto perfil. Si quieres ver a las
                    estrellas máximas, enfoca tu atención en estas pistas y sesiones.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6 py-2">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Aprovecha los Entrenamientos</h3>
                  <p className="text-gray-700">
                    Si un jugador que querías ver perdió su partido o juega un día que no asistes, puedes
                    intentar verlo entrenar. Los horarios de entrenamiento se publican en las pistas de
                    entrenamiento, aunque son menos formales que el orden de juego oficial.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6 py-2">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Comprende los Días de Descanso</h3>
                  <p className="text-gray-700">
                    Los jugadores de Grand Slam generalmente tienen al menos un día de descanso entre partidos.
                    Si un jugador ganó el lunes, probablemente jugará de nuevo el miércoles o jueves. Esto te
                    ayuda a anticipar cuándo podrías verlos nuevamente si planeas múltiples visitas.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Recursos Adicionales</h2>

              <div className="bg-orange-50 border-l-4 border-orange-600 p-6 mb-8 rounded-r-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Herramientas Útiles</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold">•</span>
                    <span><strong>Live Scores:</strong> La sección de resultados en vivo muestra el progreso
                    actual de todos los partidos, ayudándote a estimar cuándo comenzará el siguiente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold">•</span>
                    <span><strong>Court Finder:</strong> Algunas apps y pantallas del estadio muestran mapas
                    para ayudarte a navegar entre pistas rápidamente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold">•</span>
                    <span><strong>Weather Updates:</strong> Consulta las condiciones climáticas en la app para
                    anticipar posibles retrasos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold">•</span>
                    <span><strong>Social Media:</strong> Las cuentas oficiales de Roland Garros publican
                    actualizaciones importantes sobre cambios en el orden de juego</span>
                  </li>
                </ul>
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
                href="/calendario-roland-garros-2026/horarios-por-ronda"
                className="text-orange-600 hover:text-orange-700 font-medium flex items-center"
              >
                <span className="mr-2">→</span>
                Horarios Detallados por Ronda
              </Link>
              <Link
                href="/entradas-roland-garros-2026"
                className="text-orange-600 hover:text-orange-700 font-medium flex items-center"
              >
                <span className="mr-2">→</span>
                Información sobre Entradas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
