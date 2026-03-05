import Link from 'next/link'
import { Metadata } from 'next'
import { ArticleSchema } from '@/components/seo/ArticleSchema'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { PageHero } from '@/components/ui/PageHero'
import { GoalTicketsCTA } from '@/components/ui/GoalTicketsCTA'

export const metadata: Metadata = {
  title: 'Reglas del Estadio Roland Garros 2026 | Normativa y Seguridad',
  description: 'Guía completa de reglas de Roland Garros: comportamiento, controles de seguridad, políticas de reingreso, accesos según entrada y etiqueta del espectador.',
  keywords: 'reglas roland garros, normativa roland garros, seguridad roland garros, prohibiciones roland garros, etiqueta tenis',
  openGraph: {
    title: 'Reglas del Estadio Roland Garros 2026',
    description: 'Todo lo que necesitas saber sobre las reglas y normativa en Roland Garros',
    type: 'article',
  },
  alternates: {
    canonical: 'https://entradasrolandgarros.com/guia-completa/reglas-estadio',
  },
}

export default function ReglasEstadioPage() {
  const breadcrumbItems = [
    { name: 'Inicio', url: '/' },
    { name: 'Guía Completa', url: '/guia-completa' },
    { name: 'Reglas del Estadio', url: '/guia-completa/reglas-estadio' }
  ]

  return (
    <>
      <ArticleSchema
        headline="Reglas del Estadio Roland Garros 2026"
        description="Normativa completa del recinto Roland Garros: reglas de comportamiento, seguridad, accesos y etiqueta"
        datePublished="2025-01-15"
        dateModified="2025-01-15"
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <PageHero
        title="Reglas del Estadio Roland Garros"
        subtitle="Normativa, objetos prohibidos y consejos de comportamiento"
        image="/images/heroes/tennis-stadium.jpg"
        badge={{ icon: 'gavel', text: 'Normativa Oficial' }}
        primaryCta={{ text: 'Comprar Entradas', href: 'https://goaltickets.com/es/collections/entradas-roland-garros-2026', icon: 'confirmation_number', external: true }}
      />

      {/* Quick Summary */}
      <section className="py-8 bg-red-50 border-b-2 border-red-200">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Reglas Básicas - Resumen</h2>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span>Control de seguridad obligatorio en todas las entradas</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span>Silencio absoluto durante los puntos</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span>Entrada/salida solo en cambios de lado</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span>No se permite el reingreso al recinto</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span>Respeta los asientos asignados en pistas principales</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span>Móviles en silencio, sin llamadas en las gradas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto prose prose-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Roland Garros tiene normas específicas diseñadas para garantizar la seguridad de todos los asistentes y preservar la calidad de la experiencia deportiva. Conocer y respetar estas reglas te ayudará a evitar problemas y disfrutar plenamente del torneo.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              La mayoría de las reglas se basan en el sentido común y el respeto: hacia los jugadores que necesitan concentración, hacia otros espectadores que merecen disfrutar del tenis sin molestias, y hacia el prestigio del torneo. Este es uno de los eventos deportivos más importantes del mundo, y el comportamiento de los espectadores es parte de lo que lo hace especial.
            </p>
          </div>
        </div>
      </section>

      {/* Control de Seguridad */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Control de Seguridad y Acceso
            </h2>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Proceso de Entrada</h3>

              <div className="space-y-4 mb-6">
                <p className="text-gray-700">
                  Todos los visitantes deben pasar por controles de seguridad similares a los aeropuertos. El proceso incluye:
                </p>

                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li className="font-bold">
                    Verificación de entrada
                    <p className="font-normal text-sm ml-6 mt-1">Escaneo de tu billete físico o código QR digital</p>
                  </li>
                  <li className="font-bold">
                    Control de bolsos
                    <p className="font-normal text-sm ml-6 mt-1">Inspección manual o escáner de rayos X de todas las mochilas y bolsos</p>
                  </li>
                  <li className="font-bold">
                    Detector de metales
                    <p className="font-normal text-sm ml-6 mt-1">Paso obligatorio por arco detector o revisión con detector manual</p>
                  </li>
                  <li className="font-bold">
                    Cacheo aleatorio
                    <p className="font-normal text-sm ml-6 mt-1">Pueden realizar cacheos corporales aleatorios por seguridad</p>
                  </li>
                </ol>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="font-bold mb-2">Tiempo de Espera en Seguridad</p>
                <p className="text-sm text-gray-700">
                  Antes del inicio de las sesiones (11:00 AM o 14:00 PM), las colas pueden ser de 30-60 minutos. Para finales y partidos importantes, puede ser incluso más largo. <strong>Llega con 60-90 minutos de anticipación.</strong>
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Política de Reingreso</h3>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-4">
                <p className="font-bold text-red-900 mb-2">IMPORTANTE: NO se permite el reingreso</p>
                <p className="text-gray-700">
                  Una vez que sales del recinto de Roland Garros, <strong>NO puedes volver a entrar</strong> con la misma entrada, incluso si tu sesión aún no ha terminado. Tu entrada queda invalidada al salir.
                </p>
              </div>

              <div className="space-y-3 text-gray-700">
                <p><strong>Excepciones muy limitadas:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li>Emergencias médicas (requiere autorización del personal médico)</li>
                  <li>Algunas entradas VIP especiales tienen privilegios de reingreso</li>
                  <li>Personal acreditado y prensa</li>
                </ul>

                <p className="text-sm mt-4">
                  <strong>Consecuencia:</strong> Planifica tu día en consecuencia. Si necesitas salir para comer o por cualquier razón, tendrías que comprar una nueva entrada para volver.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reglas de Comportamiento */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Reglas de Comportamiento Durante los Partidos
            </h2>

            <div className="space-y-6">
              {/* Silencio */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🤫</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Silencio Durante el Juego</h3>
                    <p className="text-gray-700 mb-4">
                      La regla más importante en el tenis profesional: <strong>silencio absoluto durante los puntos.</strong>
                    </p>

                    <div className="space-y-3 text-sm text-gray-700">
                      <div className="border-l-4 border-green-500 pl-4">
                        <p className="font-bold text-green-700 mb-1">Cuándo SÍ puedes hacer ruido:</p>
                        <ul className="space-y-1">
                          <li>• Entre puntos (después de que termine el punto)</li>
                          <li>• Durante cambios de lado (cada dos juegos)</li>
                          <li>• En los descansos entre sets</li>
                          <li>• Aplaudir después de buenos puntos (no durante)</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-red-500 pl-4">
                        <p className="font-bold text-red-700 mb-1">Cuándo NO debes hacer ruido:</p>
                        <ul className="space-y-1">
                          <li>• Durante el saque (desde que el jugador bota la pelota)</li>
                          <li>• Durante el intercambio de golpes (rally)</li>
                          <li>• Cuando el juez dice "Quiet please" (silencio por favor)</li>
                          <li>• Nunca grites durante el punto</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                      <p className="text-sm text-gray-700">
                        <strong>Nota:</strong> El juez de silla puede advertir o incluso expulsar a espectadores que no respeten el silencio. Es una falta grave en el tenis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Movimiento */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🚶</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Entrada y Salida de las Gradas</h3>
                    <p className="text-gray-700 mb-4">
                      Solo puedes entrar o salir de las gradas durante los cambios de lado o entre sets.
                    </p>

                    <div className="space-y-3 text-gray-700 text-sm">
                      <div>
                        <p className="font-bold mb-2">Cuándo puedes moverte:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Cada dos juegos (cuando los jugadores cambian de lado)</li>
                          <li>Entre sets (descanso más largo)</li>
                          <li>Durante interrupciones por lluvia o lesiones</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-bold mb-2">Proceso:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>El personal te detendrá en las puertas si intentas entrar durante un punto</li>
                          <li>Te harán esperar hasta el próximo cambio de lado</li>
                          <li>Cuando se abren las puertas, dirígete rápidamente a tu asiento</li>
                          <li>Permanece en tu asiento hasta el próximo cambio de lado si quieres salir</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Asientos */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">💺</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Asientos Asignados</h3>

                    <div className="space-y-4 text-gray-700">
                      <div>
                        <p className="font-bold mb-2">Pistas Principales (Philippe-Chatrier, Suzanne-Lenglen, Simonne-Mathieu):</p>
                        <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                          <li>Asientos numerados y asignados</li>
                          <li>DEBES sentarte en tu asiento específico</li>
                          <li>El personal verificará tu entrada y asiento</li>
                          <li>No puedes cambiar de asiento, incluso si ves espacios vacíos</li>
                          <li>Si alguien está en tu asiento, notifica al personal (no discutas)</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-bold mb-2">Pistas Secundarias (con Ground Pass):</p>
                        <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                          <li>Asientos por orden de llegada (primero llega, primero se sienta)</li>
                          <li>Puedes elegir dónde sentarte si hay espacio</li>
                          <li>Para partidos populares, haz cola temprano</li>
                          <li>Una vez sentado, puedes perder tu lugar si sales</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Teléfonos y Fotos */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📱</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Teléfonos Móviles y Fotografía</h3>

                    <div className="space-y-4">
                      <div className="border-l-4 border-green-500 pl-4">
                        <p className="font-bold text-green-700 mb-2">Permitido:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                          <li>Fotos SIN flash durante los partidos</li>
                          <li>Vídeos cortos sin flash</li>
                          <li>Teléfono en modo silencioso o vibración</li>
                          <li>Usar la app de Roland Garros para seguir resultados</li>
                          <li>Fotos en áreas comunes y zonas no deportivas</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-red-500 pl-4">
                        <p className="font-bold text-red-700 mb-2">Prohibido:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                          <li>Flash durante el juego (causa distracción a jugadores)</li>
                          <li>Llamadas telefónicas en las gradas</li>
                          <li>Grabación profesional sin acreditación</li>
                          <li>Streaming en vivo del partido (derechos de transmisión)</li>
                          <li>Sonidos audibles del teléfono (notificaciones, juegos, etc.)</li>
                        </ul>
                      </div>

                      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                        <p className="text-sm text-gray-700">
                          <strong>Recomendación:</strong> Pon tu teléfono en modo avión o silencioso total. Una llamada o notificación sonora durante un punto puede resultar muy embarazosa y molesta.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acceso según Tipo de Entrada */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Accesos Según tu Tipo de Entrada
            </h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-orange-600">Ground Pass (Entrada General)</h3>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <p className="font-bold mb-2">Tienes acceso a:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Todas las pistas exteriores (secundarias) por orden de llegada</li>
                      <li>Court 6, 7, 8, 9, 10, 11, 12, 13, 14 y pistas de entrenamiento</li>
                      <li>Todas las áreas comunes del recinto</li>
                      <li>Zona de restauración y tiendas</li>
                      <li>Village (área de actividades y exposiciones)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold mb-2 text-red-600">NO tienes acceso a:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Court Philippe-Chatrier (requiere entrada específica)</li>
                      <li>Court Suzanne-Lenglen (requiere entrada específica)</li>
                      <li>Court Simonne-Mathieu (requiere entrada específica)</li>
                      <li>Palcos VIP y áreas premium</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Entrada de Pista Específica</h3>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <p className="font-bold mb-2">Tienes acceso a:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>La pista específica indicada en tu entrada (asiento numerado)</li>
                      <li>Todas las pistas secundarias (como el ground pass)</li>
                      <li>Todas las áreas comunes</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold mb-2">Importante:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Cada entrada es válida para UNA sesión específica (día/noche)</li>
                      <li>Si tu partido termina temprano, puedes ir a pistas secundarias</li>
                      <li>No puedes entrar a otras pistas principales sin otra entrada</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-purple-600">Paquetes y Entradas Especiales</h3>
                <div className="space-y-3 text-gray-700 text-sm">
                  <p><strong>Pack Sesión Completa:</strong> Acceso a sesiones de día y noche el mismo día</p>
                  <p><strong>Hospitality/VIP:</strong> Acceso a salones, catering, mejores asientos y a veces múltiples pistas</p>
                  <p><strong>Abonos semanales:</strong> Acceso diario durante una semana específica del torneo</p>
                  <p className="text-xs text-gray-600 mt-3">Verifica siempre los términos específicos de tu entrada en tu billete o email de confirmación.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Etiqueta del Espectador */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Etiqueta del Espectador de Tenis
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <p className="text-gray-700 mb-3">
                El tenis es un deporte de tradición y etiqueta. Más allá de las reglas obligatorias, hay normas de cortesía que todo espectador debe conocer:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4 text-green-600">Buenos Comportamientos</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Aplaudir buenos puntos de AMBOS jugadores (muestra deportividad)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Esperar en silencio durante los saques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Animar entre puntos, no durante</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Permanecer sentado durante los puntos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Respetar el espacio de otros espectadores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Seguir las instrucciones del personal y jueces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Aplaudir al final del partido, gane quien gane</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4 text-red-600">Comportamientos a Evitar</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    <span>Gritar durante los puntos o saques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    <span>Aplaudir errores del oponente (muy mal visto)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    <span>Abuchear o insultar a jugadores o árbitros</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    <span>Usar flash en fotografías</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    <span>Comer ruidosamente o con envoltorios crujientes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    <span>Bloquear la vista de otros con sombreros grandes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    <span>Salir durante un punto o game en curso</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-orange-50 border-l-4 border-orange-500 p-6">
              <h3 className="font-bold mb-3">Nota Cultural: Roland Garros vs Otros Torneos</h3>
              <p className="text-gray-700 text-sm">
                Roland Garros tiene fama de ser uno de los torneos con público más conocedor y respetuoso. A diferencia de torneos como el US Open (donde el ambiente es más festivo), en Roland Garros se espera un comportamiento más formal y tradicional. El público francés aprecia el buen tenis y aplaude las buenas jugadas independientemente del jugador.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios y Facilidades */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Servicios y Facilidades en el Recinto
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4">Servicios Disponibles</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Baños:</strong> Distribuidos por todo el recinto, pueden tener colas</li>
                  <li>• <strong>Fuentes de agua:</strong> Gratuitas, para rellenar botellas</li>
                  <li>• <strong>Puntos de información:</strong> Personal que habla varios idiomas</li>
                  <li>• <strong>WiFi gratuito:</strong> Disponible en todo el recinto</li>
                  <li>• <strong>Primeros auxilios:</strong> Estaciones médicas en varias ubicaciones</li>
                  <li>• <strong>Puntos de carga móvil:</strong> Limitados, mejor llevar power bank</li>
                  <li>• <strong>Objetos perdidos:</strong> Oficina central para reportar pérdidas</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4">Accesibilidad</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Sillas de ruedas:</strong> Asientos específicos disponibles (reserva anticipada)</li>
                  <li>• <strong>Rampas de acceso:</strong> En todas las pistas principales</li>
                  <li>• <strong>Baños adaptados:</strong> En las principales instalaciones</li>
                  <li>• <strong>Perros guía:</strong> Permitidos con documentación apropiada</li>
                  <li>• <strong>Asistencia personal:</strong> Disponible bajo solicitud</li>
                  <li>• <strong>Ascensores:</strong> En algunas áreas del recinto</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qué Hacer en Caso de... */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Qué Hacer en Caso de...
            </h2>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold mb-2">Emergencia Médica</h3>
                <p className="text-gray-700 text-sm">
                  Notifica inmediatamente al personal más cercano o dirígete a un puesto de primeros auxilios. Hay estaciones médicas en todo el recinto con personal profesional.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold mb-2">Objeto Perdido</h3>
                <p className="text-gray-700 text-sm">
                  Dirígete a la oficina de objetos perdidos ubicada en la zona de información principal. También puedes preguntar al personal de seguridad más cercano.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold mb-2">Problema con tu Asiento</h3>
                <p className="text-gray-700 text-sm">
                  Si alguien está sentado en tu lugar, muestra tu entrada al personal de la pista (no discutas con el otro espectador). Ellos resolverán la situación.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold mb-2">Comportamiento Inapropiado de Otros</h3>
                <p className="text-gray-700 text-sm">
                  Notifica discretamente al personal de seguridad. No confrontes directamente a otros espectadores, deja que el personal maneje la situación.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold mb-2">Niño Perdido</h3>
                <p className="text-gray-700 text-sm">
                  Dirígete inmediatamente al puesto de información más cercano. Roland Garros tiene protocolos específicos para niños extraviados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consejos Finales */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Consejos Finales
            </h2>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-xl">1.</span>
                  <span><strong>Llega temprano:</strong> Para evitar estrés con seguridad y encontrar tu asiento antes del inicio</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-xl">2.</span>
                  <span><strong>Lee tu entrada:</strong> Conoce exactamente a qué áreas tienes acceso</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-xl">3.</span>
                  <span><strong>Respeta el silencio:</strong> Es la regla de oro del tenis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-xl">4.</span>
                  <span><strong>Sigue al personal:</strong> Están ahí para ayudarte y mantener el orden</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-xl">5.</span>
                  <span><strong>Disfruta el tenis:</strong> Estás viendo a los mejores del mundo en su deporte</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GoalTickets CTA */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <GoalTicketsCTA />
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Guías Relacionadas
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/guia-completa" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="text-2xl mb-2">📋</div>
                <h3 className="font-bold mb-1">Guía Completa</h3>
                <p className="text-sm text-gray-600">Volver al índice principal</p>
              </Link>
              <Link href="/guia-completa/que-llevar" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="text-2xl mb-2">🎒</div>
                <h3 className="font-bold mb-1">Qué Llevar</h3>
                <p className="text-sm text-gray-600">Artículos permitidos y prohibidos</p>
              </Link>
              <Link href="/guia-completa/primera-vez" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="text-2xl mb-2">⭐</div>
                <h3 className="font-bold mb-1">Guía Primerizos</h3>
                <p className="text-sm text-gray-600">Consejos para tu primera vez</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
