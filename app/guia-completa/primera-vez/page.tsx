import Link from 'next/link'
import { Metadata } from 'next'
import { ArticleSchema } from '@/components/seo/ArticleSchema'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Guía para Primerizos en Roland Garros 2026 | Consejos y Tips',
  description: 'Guía completa para tu primera visita a Roland Garros: llegada, estrategias para ver más tenis, dónde comer, souvenirs y errores comunes a evitar.',
  keywords: 'primera vez roland garros, consejos roland garros, tips roland garros, guia principiantes roland garros, errores evitar roland garros',
  openGraph: {
    title: 'Guía para Primerizos en Roland Garros 2026',
    description: 'Todo lo que necesitas saber para tu primera visita a Roland Garros',
    type: 'article',
  }
}

export default function PrimeraVezPage() {
  const breadcrumbItems = [
    { name: 'Inicio', url: '/' },
    { name: 'Guía Completa', url: '/guia-completa' },
    { name: 'Primera Vez', url: '/guia-completa/primera-vez' }
  ]

  return (
    <>
      <ArticleSchema
        headline="Guía para Primerizos en Roland Garros 2026"
        description="Guía completa con consejos, estrategias y tips para disfrutar al máximo tu primera visita a Roland Garros"
        datePublished="2025-01-15"
        dateModified="2025-01-15"
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Guía para Primerizos en Roland Garros
            </h1>
            <p className="text-xl text-orange-100">
              Todo lo que necesitas saber para disfrutar al máximo tu primera visita al French Open
            </p>
          </div>
        </div>
      </section>

      {/* Quick Tips Summary */}
      <section className="py-8 bg-orange-50 border-b-2 border-orange-200">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Los 5 Consejos Más Importantes</h2>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-xl">1.</span>
                  <span className="text-gray-700">Llega temprano (60-90 min antes del inicio) para evitar colas de seguridad</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-xl">2.</span>
                  <span className="text-gray-700">Con ground pass, dirígete primero a las pistas secundarias para buenos asientos</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-xl">3.</span>
                  <span className="text-gray-700">Lleva protector solar, gorra y agua - lo usarás más de lo que crees</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-xl">4.</span>
                  <span className="text-gray-700">Descarga la app oficial de Roland Garros antes de ir</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-xl">5.</span>
                  <span className="text-gray-700">Relájate y disfruta - no intentes ver todo, enfócate en lo que más te interesa</span>
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
              ¡Felicidades por decidir asistir a Roland Garros! Estás a punto de experimentar uno de los eventos deportivos más prestigiosos y emocionantes del mundo. Ver tenis en vivo en tierra batida, en el lugar donde las leyendas han hecho historia, es una experiencia que nunca olvidarás.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Como primerizo, es normal sentirse un poco abrumado. El recinto es grande, hay múltiples pistas simultáneas, colas para todo, y reglas específicas que debes conocer. Esta guía está diseñada para ayudarte a navegar tu primer día en Roland Garros con confianza, maximizar tu experiencia y evitar los errores comunes que cometen los visitantes primerizos.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Expectativas Realistas</h3>
              <p className="text-gray-700">
                Roland Garros es enorme y tiene tenis sucediendo simultáneamente en hasta 16 pistas. <strong>No podrás verlo todo.</strong> Y eso está bien. La clave es planificar lo que más te interesa y estar abierto a descubrimientos inesperados. Algunos de los mejores recuerdos vienen de partidos que no planeabas ver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Antes de Llegar */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Antes de Llegar al Estadio
            </h2>

            <div className="space-y-6">
              {/* Preparación Previa */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span>📱</span>
                  <span>Preparación Digital (Haz Esto el Día Anterior)</span>
                </h3>

                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold mb-2">Descarga la App Oficial de Roland Garros</h4>
                    <p className="text-sm text-gray-700 mb-2">Disponible en iOS y Android. Es ESENCIAL y gratuita.</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Orden de juego en tiempo real</li>
                      <li>• Resultados y marcadores en vivo</li>
                      <li>• Mapa interactivo del recinto</li>
                      <li>• Horarios actualizados (los partidos pueden retrasarse)</li>
                      <li>• Información sobre colas en pistas secundarias</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-bold mb-2">Prepara tu Entrada Digital</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Descarga tu e-ticket en tu teléfono</li>
                      <li>• Guarda una captura de pantalla del código QR como respaldo</li>
                      <li>• Imprime una copia física por si hay problemas técnicos</li>
                      <li>• Ten tu confirmación de compra accesible</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-bold mb-2">Revisa el Orden de Juego</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Publicado el día anterior (generalmente alrededor de las 18:00-19:00):
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Qué jugadores juegan en qué pistas</li>
                      <li>• Horarios aproximados (los partidos pueden retrasarse)</li>
                      <li>• Planifica qué partidos quieres ver prioritariamente</li>
                      <li>• Identifica las pistas donde necesitarás hacer cola</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Qué Llevar */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span>🎒</span>
                  <span>Repaso de Qué Llevar</span>
                </h3>

                <p className="text-gray-700 mb-4 text-sm">
                  Para la lista completa, consulta nuestra <Link href="/guia-completa/que-llevar" className="text-blue-600 hover:underline font-bold">guía de Qué Llevar</Link>. Los esenciales son:
                </p>

                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-orange-50 p-4 rounded">
                    <p className="font-bold mb-2 text-orange-700">Absolutamente Esenciales:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>✓ Entrada (digital + impresa)</li>
                      <li>✓ Protector solar SPF 30+</li>
                      <li>✓ Gorra o sombrero</li>
                      <li>✓ Gafas de sol</li>
                      <li>✓ Botella de agua vacía</li>
                      <li>✓ Power bank cargado</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded">
                    <p className="font-bold mb-2 text-blue-700">Muy Recomendados:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>✓ Chaqueta ligera/cortavientos</li>
                      <li>✓ Chubasquero plegable</li>
                      <li>✓ Snacks (ahorra dinero)</li>
                      <li>✓ Dinero en efectivo (€50-100)</li>
                      <li>✓ Bolsa impermeable para electrónicos</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tu Llegada */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Tu Llegada a Roland Garros
            </h2>

            <div className="space-y-6">
              {/* Timing */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">A Qué Hora Llegar</h3>

                <div className="space-y-4">
                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <p className="font-bold mb-2 text-green-800">Recomendación: 60-90 minutos antes del inicio de la sesión</p>
                    <p className="text-sm text-gray-700">
                      Si la sesión de mañana empieza a las 11:00, llega entre 9:30-10:00. Si la sesión de tarde empieza a las 14:00, llega entre 12:30-13:00.
                    </p>
                  </div>

                  <div>
                    <p className="font-bold mb-2">¿Por qué llegar tan temprano?</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span><strong>Colas de seguridad:</strong> 20-45 minutos en días concurridos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span><strong>Orientación inicial:</strong> Necesitas tiempo para familiarizarte con el recinto</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span><strong>Encontrar tu asiento/pista:</strong> El recinto es grande y puede ser confuso</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span><strong>Mejores asientos en pistas secundarias:</strong> Si tienes ground pass, primero en llegar es primero en sentarse</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span><strong>Rellenar agua, ir al baño, comprar comida:</strong> Antes de que se llene</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                    <p className="font-bold mb-2">Para Finales y Partidos Importantes</p>
                    <p className="text-sm text-gray-700">
                      Llega 2-3 horas antes. Las colas pueden ser extremadamente largas, y la seguridad es más estricta.
                    </p>
                  </div>
                </div>
              </div>

              {/* Proceso de Entrada */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">El Proceso de Entrada Paso a Paso</h3>

                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                    <div>
                      <p className="font-bold mb-1">Llega a la Entrada Correcta</p>
                      <p className="text-sm text-gray-700">
                        Hay varias entradas. La principal es la Puerta 1 (Porte d'Auteuil). Verifica tu entrada para confirmar qué puerta debes usar según tu tipo de billete.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                    <div>
                      <p className="font-bold mb-1">Haz Cola en Seguridad</p>
                      <p className="text-sm text-gray-700 mb-2">
                        Similar a un aeropuerto. Sé paciente, ten tu entrada lista.
                      </p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Saca tu teléfono/entrada antes de llegar al frente</li>
                        <li>• Quita objetos metálicos de tus bolsillos</li>
                        <li>• Prepárate para que revisen tu mochila</li>
                      </ul>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                    <div>
                      <p className="font-bold mb-1">Escaneo de Entrada</p>
                      <p className="text-sm text-gray-700">
                        Tu código QR será escaneado. Si hay problema, el personal te ayudará.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                    <div>
                      <p className="font-bold mb-1">Control de Seguridad</p>
                      <p className="text-sm text-gray-700 mb-2">
                        Detector de metales y revisión de bolsos.
                      </p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Abre tu mochila completamente</li>
                        <li>• Podrían pedirte que enciendas electrónicos</li>
                        <li>• Artículos prohibidos serán confiscados</li>
                      </ul>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                    <div>
                      <p className="font-bold mb-1">¡Estás Dentro!</p>
                      <p className="text-sm text-gray-700">
                        Tómate un momento para orientarte. Busca un mapa o abre la app. Identifica dónde estás y hacia dónde necesitas ir.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primeras Acciones */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Primeras Acciones al Entrar al Recinto
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <p className="font-bold mb-2">No corras inmediatamente a una pista</p>
              <p className="text-gray-700 text-sm">
                Es tentador correr directamente al tenis, pero invertir 10-15 minutos en orientarte y prepararte hará que el resto del día sea mucho más placentero.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">1️⃣</div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-2">Oriéntate Físicamente</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Encuentra el mapa físico más cercano o usa la app</li>
                      <li>• Identifica dónde están las pistas que te interesan</li>
                      <li>• Localiza baños, fuentes de agua, puntos de comida</li>
                      <li>• Identifica puntos de referencia para no perderte</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">2️⃣</div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-2">Rellena tu Botella de Agua</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Hay fuentes gratuitas por todo el recinto</li>
                      <li>• Estarás al sol durante horas - la hidratación es crítica</li>
                      <li>• Ahorra €3-5 que costaría una botella</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">3️⃣</div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-2">Verifica el Orden de Juego Actualizado</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Los horarios pueden haber cambiado desde anoche</li>
                      <li>• Partidos anteriores pueden haber terminado antes/después</li>
                      <li>• La app muestra el estado actual en tiempo real</li>
                      <li>• Ajusta tu plan según las actualizaciones</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">4️⃣</div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-2">Aplica Protector Solar</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Hazlo AHORA, antes de sentarte</li>
                      <li>• Es más fácil aplicar de pie que en asientos apretados</li>
                      <li>• No olvides cuello, orejas, brazos</li>
                      <li>• Programa recordatorio para reaplicar en 2 horas</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">5️⃣</div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-2">Decide tu Primera Pista</h3>
                    <p className="text-sm text-gray-700 mb-2">Basándote en tu tipo de entrada:</p>
                    <div className="space-y-2 text-sm">
                      <div className="border-l-4 border-green-500 pl-3">
                        <p className="font-bold">Si tienes entrada de pista específica:</p>
                        <p className="text-gray-700">Ve directamente a tu pista asignada para encontrar tu asiento</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-3">
                        <p className="font-bold">Si tienes ground pass:</p>
                        <p className="text-gray-700">Elige una pista secundaria con un partido interesante que esté por empezar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estrategias Ground Pass */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Estrategias para Maximizar tu Ground Pass
            </h2>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
              <p className="text-gray-700">
                El ground pass es un valor increíble - acceso a múltiples pistas por el precio de una entrada. Pero requiere estrategia para aprovecharlo al máximo.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Estrategia "Pájaro Madrugador"</h3>
                <p className="text-sm text-gray-700 mb-4">
                  <strong>Mejor para:</strong> Ver el máximo tenis posible en pistas secundarias
                </p>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li>1. Llega cuando abren las puertas (generalmente 9:00-9:30 AM)</li>
                  <li>2. Ve directamente a una pista secundaria interesante (Courts 6-14)</li>
                  <li>3. Consigue un buen asiento para el primer partido</li>
                  <li>4. Quédate en esa pista para múltiples partidos si lo disfrutas</li>
                  <li>5. Cambia de pista entre partidos si quieres variedad</li>
                </ol>
                <div className="bg-green-50 p-4 rounded mt-4">
                  <p className="text-sm font-bold mb-1">Ventaja:</p>
                  <p className="text-sm text-gray-700">Verás más tenis, mejores asientos, menos colas</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Estrategia "Cherry-Picking" (Selección Selectiva)</h3>
                <p className="text-sm text-gray-700 mb-4">
                  <strong>Mejor para:</strong> Ver jugadores específicos o partidos de calidad
                </p>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li>1. Revisa el orden de juego y marca 3-4 partidos que te interesen</li>
                  <li>2. Planifica tu día para llegar a esas pistas antes de que empiecen</li>
                  <li>3. Haz cola 30-45 min antes de partidos populares</li>
                  <li>4. Entre partidos, explora el recinto, come, descansa</li>
                  <li>5. Sé flexible - si un partido es aburrido, vete y busca otro</li>
                </ol>
                <div className="bg-blue-50 p-4 rounded mt-4">
                  <p className="text-sm font-bold mb-1">Ventaja:</p>
                  <p className="text-sm text-gray-700">Ves exactamente lo que quieres, tienes tiempo para disfrutar el recinto</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Estrategia "Explorer" (Explorador)</h3>
                <p className="text-sm text-gray-700 mb-4">
                  <strong>Mejor para:</strong> Descubrir nuevos jugadores y disfrutar la atmósfera
                </p>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li>1. No planifiques demasiado - deja espacio para la espontaneidad</li>
                  <li>2. Camina entre pistas, observa qué está sucediendo</li>
                  <li>3. Entra a pistas donde escuches emoción o veas buen tenis de lejos</li>
                  <li>4. Quédate si te gusta, sigue moviéndote si no</li>
                  <li>5. Explora el Village, tiendas, áreas de exhibición</li>
                </ol>
                <div className="bg-orange-50 p-4 rounded mt-4">
                  <p className="text-sm font-bold mb-1">Ventaja:</p>
                  <p className="text-sm text-gray-700">Experiencia relajada, descubrimientos inesperados, menos estrés</p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <h3 className="font-bold mb-3">Consejo de Insider sobre Colas</h3>
              <p className="text-sm text-gray-700 mb-2">
                En pistas secundarias populares (especialmente cuando juegan estrellas), se forman colas. El personal te dirá dónde hacer cola.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Llega 30-45 min antes del partido si es un jugador top</li>
                <li>• Lleva algo para leer o entretenerte mientras esperas</li>
                <li>• Una vez que entres, encuentra asiento rápidamente</li>
                <li>• Los mejores asientos se llenan en minutos para partidos populares</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comida y Bebida */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Comida, Bebida y Descansos
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4 text-green-600">Opciones de Comida en Roland Garros</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <p className="font-bold mb-1">Comida que Trajiste</p>
                    <p>La opción más económica. Permitido llevar tu propia comida (sándwiches, frutas, snacks).</p>
                  </div>
                  <div>
                    <p className="font-bold mb-1">Puestos de Comida (€8-15)</p>
                    <p>Sándwiches, ensaladas, wraps, opciones calientes. Distribuidos por todo el recinto.</p>
                  </div>
                  <div>
                    <p className="font-bold mb-1">Restaurantes (€20-40+)</p>
                    <p>Varias opciones de sit-down con cocina francesa. Requiere reserva o espera.</p>
                  </div>
                  <div>
                    <p className="font-bold mb-1">Champán y Macarons</p>
                    <p>Experiencia clásica de Roland Garros. Disponible en varios puntos. (€15-25)</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4 text-blue-600">Consejos sobre Comida</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Come <strong>entre partidos</strong>, no durante. Así no pierdes tenis.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Evita horas pico (12:30-14:00) cuando las colas son larguísimas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Lleva snacks para emergencias (barritas, frutos secos)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Fuentes de agua gratuitas - no necesitas comprar agua embotellada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Presupuesto recomendado: €20-30 para comida si no traes la tuya</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4 text-purple-600">Cuándo Tomar Descansos</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span><strong>Entre sets:</strong> Momento perfecto para ir al baño</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span><strong>Entre partidos:</strong> Come, explora, descansa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span><strong>Pausas por lluvia:</strong> Perfecto para actividades indoor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span><strong>Partidos aburridos:</strong> No te sientas obligado a quedarte</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4 text-orange-600">Gestión de Energía</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Un día en Roland Garros es físicamente exigente:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    <span>Caminarás 8-12 km fácilmente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    <span>Estarás al sol durante horas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    <span>Busca sombra cuando puedas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    <span>Siéntate y descansa periódicamente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    <span>Mantente hidratado constantemente</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Errores Comunes */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Errores Comunes de Primerizos (y Cómo Evitarlos)
            </h2>

            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="font-bold mb-2">❌ Error: Llegar justo cuando empieza el partido</h3>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Problema:</strong> Pasarás el primer set en la cola de seguridad.
                </p>
                <p className="text-sm text-green-700">
                  <strong>✓ Solución:</strong> Llega 60-90 minutos antes del inicio de la sesión.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="font-bold mb-2">❌ Error: Olvidar protector solar</h3>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Problema:</strong> Quemadura solar dolorosa que arruinará el resto de tu viaje.
                </p>
                <p className="text-sm text-green-700">
                  <strong>✓ Solución:</strong> Aplica antes de salir, lleva el frasco, reaplica cada 2 horas.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="font-bold mb-2">❌ Error: Intentar verlo todo</h3>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Problema:</strong> Te agotarás y no disfrutarás nada plenamente.
                </p>
                <p className="text-sm text-green-700">
                  <strong>✓ Solución:</strong> Elige 2-3 prioridades y relájate. Calidad sobre cantidad.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="font-bold mb-2">❌ Error: Quedarse en una pista si el partido es aburrido</h3>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Problema:</strong> Desperdicias tiempo viendo tenis de baja calidad.
                </p>
                <p className="text-sm text-green-700">
                  <strong>✓ Solución:</strong> Está bien salir. Hay 10+ otros partidos sucediendo simultáneamente.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="font-bold mb-2">❌ Error: No descargar la app oficial</h3>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Problema:</strong> Te pierdes, no sabes qué está pasando, buscas información constantemente.
                </p>
                <p className="text-sm text-green-700">
                  <strong>✓ Solución:</strong> Descarga la app de Roland Garros antes de ir. Es esencial.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="font-bold mb-2">❌ Error: Usar zapatos nuevos o incómodos</h3>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Problema:</strong> Ampollas dolorosas después de 10 km de caminata.
                </p>
                <p className="text-sm text-green-700">
                  <strong>✓ Solución:</strong> Zapatillas deportivas cómodas y YA USADAS.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="font-bold mb-2">❌ Error: No llevar capas de ropa</h3>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Problema:</strong> Frío en la mañana o noche, calor al mediodía.
                </p>
                <p className="text-sm text-green-700">
                  <strong>✓ Solución:</strong> Sistema de capas que puedas ajustar durante el día.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="font-bold mb-2">❌ Error: Olvidar que no puedes reingresar</h3>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Problema:</strong> Sales a comer/comprar algo fuera y no puedes volver a entrar.
                </p>
                <p className="text-sm text-green-700">
                  <strong>✓ Solución:</strong> Planifica quedarte en el recinto todo el día. Lleva/compra todo dentro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Souvenirs */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Souvenirs y Tienda Oficial
            </h2>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <p className="text-gray-700 mb-4">
                La tienda oficial de Roland Garros es enorme y tiene mercancía exclusiva del torneo. Es popular, especialmente entre partidos y al final del día.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-3 text-orange-600">Artículos Populares</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Toallas oficiales con el logo (€25-40)</li>
                    <li>• Gorras y viseras (€20-35)</li>
                    <li>• Camisetas y polos (€30-60)</li>
                    <li>• Pelotas de tenis oficiales del torneo (€5-10)</li>
                    <li>• Llaveros y pins (€5-15)</li>
                    <li>• Bolsas y mochilas (€20-50)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-3 text-blue-600">Consejos de Compra</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Visita temprano para evitar multitudes</li>
                    <li>• O al final del día (menos gente, misma mercancía)</li>
                    <li>• Artículos exclusivos del año se agotan rápido</li>
                    <li>• Lleva efectivo Y tarjeta (ambos aceptados)</li>
                    <li>• Deja espacio en tu mochila para lo que compres</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <h3 className="font-bold mb-3">Souvenir Gratuito: Tu Entrada</h3>
              <p className="text-sm text-gray-700">
                No tires tu entrada física o código QR. Es un recuerdo memorable de tu día en Roland Garros. Muchos fans las enmarcan junto con fotos del día.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Al Final del Día */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Al Final del Día
            </h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Salida del Recinto</h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Después de partidos importantes (especialmente finales), decenas de miles de personas salen simultáneamente. Esto significa:
                  </p>
                  <ul className="space-y-2 text-sm ml-4">
                    <li>• <strong>Metro Porte d'Auteuil:</strong> Colas de 30-60 minutos</li>
                    <li>• <strong>Taxis/Uber:</strong> Muy difícil conseguir, precios altos</li>
                    <li>• <strong>Calles congestionadas:</strong> Mucha gente caminando</li>
                  </ul>

                  <div className="bg-blue-50 p-4 rounded mt-4">
                    <p className="font-bold mb-2">Estrategias para Evitar el Caos:</p>
                    <ul className="text-sm space-y-1">
                      <li>1. <strong>Espera 30-45 min en el recinto:</strong> Disfruta de la atmósfera post-partido, compra souvenirs</li>
                      <li>2. <strong>Camina a Michel-Ange Molitor:</strong> 12 min a pie, estación menos concurrida</li>
                      <li>3. <strong>Toma autobús línea 22:</strong> Menos gente que el metro</li>
                      <li>4. <strong>Camina 10-15 min antes de pedir taxi:</strong> Alejarte del estadio aumenta disponibilidad</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Reflexiona sobre tu Experiencia</h3>
                <p className="text-gray-700 mb-4">
                  Antes de que termine el día, tómate un momento para absorberlo:
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Toma algunas fotos finales del estadio</li>
                  <li>• Revisa las fotos/vídeos que tomaste durante el día</li>
                  <li>• Guarda tu entrada como recuerdo</li>
                  <li>• Anota mentalmente tus momentos favoritos</li>
                  <li>• Piensa en qué harías diferente si vuelves</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GoalTickets CTA */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-lg border border-[#ead5cd] bg-[#fcf9f8] p-8 text-center">
              <h3 className="text-xl font-bold text-[#1d110c] mb-2">¿Todavía necesitas entradas para Roland Garros 2026?</h3>
              <p className="text-gray-700 mb-4 max-w-lg mx-auto">
                Si aún no tienes tu entrada, consulta precios y disponibilidad en plataformas especializadas con transferencia oficial por app.
              </p>
              <a
                href="https://goaltickets.com/es/collections/entradas-roland-garros-2026"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 bg-[#c75033] text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                Ver entradas en GoalTickets
                <span className="material-symbols-outlined" style={{fontSize: '20px'}}>open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mensaje Final */}
      <section className="py-12 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              ¡Disfruta tu Primera Vez en Roland Garros!
            </h2>
            <p className="text-lg mb-6 text-orange-100">
              Recuerda: no hay una forma "correcta" de experimentar Roland Garros. Algunos prefieren quedarse en una pista todo el día viendo tenis de alta calidad. Otros disfrutan moviéndose, explorando y empapándose de la atmósfera. Ambos enfoques son perfectamente válidos.
            </p>
            <p className="text-lg text-orange-100">
              Lo más importante es estar presente, disfrutar el momento y crear recuerdos que durarán toda la vida. Estás a punto de vivir algo especial. ¡A disfrutarlo!
            </p>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Otras Guías Útiles
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/guia-completa" className="block p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow">
                <div className="text-2xl mb-2">📋</div>
                <h3 className="font-bold mb-1">Guía Completa</h3>
                <p className="text-sm text-gray-600">Volver al índice principal</p>
              </Link>
              <Link href="/guia-completa/como-llegar" className="block p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow">
                <div className="text-2xl mb-2">🚇</div>
                <h3 className="font-bold mb-1">Cómo Llegar</h3>
                <p className="text-sm text-gray-600">Guía completa de transporte</p>
              </Link>
              <Link href="/guia-completa/que-llevar" className="block p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow">
                <div className="text-2xl mb-2">🎒</div>
                <h3 className="font-bold mb-1">Qué Llevar</h3>
                <p className="text-sm text-gray-600">Checklist de esenciales</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
