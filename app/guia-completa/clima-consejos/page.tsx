import Link from 'next/link'
import { Metadata } from 'next'
import { ArticleSchema } from '@/components/seo/ArticleSchema'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Clima en París en Mayo-Junio 2026 | Qué Vestir para Roland Garros',
  description: 'Clima en París durante Roland Garros: temperaturas, lluvia, recomendaciones de ropa y cómo prepararte para el tiempo variable en mayo y junio.',
  keywords: 'clima paris mayo junio, tiempo roland garros, que vestir roland garros, lluvia paris mayo, temperatura paris junio',
  openGraph: {
    title: 'Clima en París y Qué Vestir para Roland Garros 2026',
    description: 'Guía completa del clima en París durante mayo-junio y recomendaciones de vestimenta',
    type: 'article',
  },
  alternates: {
    canonical: 'https://entradasrolandgarros.com/guia-completa/clima-consejos',
  },
}

export default function ClimaConsejosPage() {
  const breadcrumbItems = [
    { name: 'Inicio', url: '/' },
    { name: 'Guía Completa', url: '/guia-completa' },
    { name: 'Clima y Consejos', url: '/guia-completa/clima-consejos' }
  ]

  return (
    <>
      <ArticleSchema
        headline="Clima en París y Qué Vestir para Roland Garros 2026"
        description="Información climática detallada de París en mayo-junio y recomendaciones completas de vestimenta"
        datePublished="2025-01-15"
        dateModified="2025-01-15"
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Clima en París Durante Roland Garros
            </h1>
            <p className="text-xl text-purple-100">
              Qué esperar del tiempo en mayo-junio y cómo prepararte para todas las condiciones
            </p>
          </div>
        </div>
      </section>

      {/* Quick Weather Summary */}
      <section className="py-8 bg-purple-50 border-b-2 border-purple-200">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Resumen Climático Rápido</h2>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl mb-2">🌡️</div>
                  <p className="font-bold text-lg">15-24°C</p>
                  <p className="text-sm text-gray-600">Rango de Temperaturas</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">☀️</div>
                  <p className="font-bold text-lg">6-8 horas</p>
                  <p className="text-sm text-gray-600">Sol por Día</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🌧️</div>
                  <p className="font-bold text-lg">30-40%</p>
                  <p className="text-sm text-gray-600">Probabilidad Lluvia</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🧥</div>
                  <p className="font-bold text-lg">Capas</p>
                  <p className="text-sm text-gray-600">Estrategia Vestimenta</p>
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
              El clima en París durante Roland Garros (finales de mayo a principios de junio) es generalmente agradable, pero puede ser bastante variable. Es la primavera tardía moviéndose hacia el verano, lo que significa que puedes experimentar días soleados y cálidos, lluvias repentinas, o mañanas frescas que se convierten en tardes calurosas.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              La clave para disfrutar cómodamente de tu día en Roland Garros es estar preparado para cualquier escenario climático. A diferencia de torneos en clima más predecible (como el Australian Open en verano o Wimbledon en julio), Roland Garros requiere una planificación flexible.
            </p>
          </div>
        </div>
      </section>

      {/* Clima por Mes */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Clima Detallado por Período
            </h2>

            <div className="space-y-6">
              {/* Mayo (Primera Semana) */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">🌸</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">
                      Finales de Mayo (Primera Semana del Torneo)
                    </h3>
                    <p className="text-sm text-gray-600">Aproximadamente 24 de mayo - 31 de mayo 2026</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 text-purple-600">Temperaturas</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>Máximas diurnas:</strong> 18-22°C (64-72°F)</li>
                      <li>• <strong>Mínimas nocturnas:</strong> 12-14°C (54-57°F)</li>
                      <li>• <strong>Mediodía (12-15h):</strong> 20-22°C típicamente</li>
                      <li>• <strong>Tardes/Noche:</strong> Enfriamiento a 15-17°C</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold mb-3 text-blue-600">Condiciones</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>Lluvia:</strong> 8-10 días con lluvia en mayo</li>
                      <li>• <strong>Precipitación mensual:</strong> 60-65mm</li>
                      <li>• <strong>Horas de sol:</strong> 7-8 horas diarias promedio</li>
                      <li>• <strong>Humedad:</strong> 65-75%</li>
                      <li>• <strong>Viento:</strong> Moderado, 15-20 km/h</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Característica:</strong> La primera semana suele ser más fresca y con mayor probabilidad de lluvia. Es común ver interrupciones por lluvia en esta fase del torneo.
                  </p>
                </div>
              </div>

              {/* Junio (Segunda Semana) */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">☀️</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">
                      Principios de Junio (Segunda Semana del Torneo)
                    </h3>
                    <p className="text-sm text-gray-600">Aproximadamente 1 de junio - 7 de junio 2026</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 text-purple-600">Temperaturas</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>Máximas diurnas:</strong> 20-24°C (68-75°F)</li>
                      <li>• <strong>Mínimas nocturnas:</strong> 13-15°C (55-59°F)</li>
                      <li>• <strong>Mediodía (12-15h):</strong> 22-24°C típicamente</li>
                      <li>• <strong>Tardes/Noche:</strong> 17-19°C</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold mb-3 text-blue-600">Condiciones</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>Lluvia:</strong> 7-8 días con lluvia en junio</li>
                      <li>• <strong>Precipitación mensual:</strong> 50-55mm</li>
                      <li>• <strong>Horas de sol:</strong> 8 horas diarias promedio</li>
                      <li>• <strong>Humedad:</strong> 60-70%</li>
                      <li>• <strong>Viento:</strong> Ligero a moderado, 10-18 km/h</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Característica:</strong> Generalmente más cálido y soleado que la primera semana. Días más largos (amanece ~6:00 AM, oscurece ~21:30). Ideal para las finales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lluvia en Roland Garros */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              La Lluvia en Roland Garros: Qué Esperar
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <p className="text-gray-700 mb-3">
                La lluvia es una parte histórica de Roland Garros. A diferencia de otros torneos, Roland Garros tradicionalmente NO tenía techo retráctil hasta 2024, cuando se instaló uno en Philippe-Chatrier. Sin embargo, las demás pistas siguen al aire libre.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Estadísticas de Lluvia</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <p className="font-bold mb-2">Probabilidad por Día</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Finales de mayo: 35-40% de probabilidad</li>
                      <li>• Principios de junio: 30-35% de probabilidad</li>
                      <li>• Promedio torneo: ~8-10 días con algo de lluvia</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <p className="font-bold mb-2">Tipo de Lluvia</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Mayormente chubascos breves (15-45 min)</li>
                      <li>• Rara vez lluvia todo el día</li>
                      <li>• Más común por las tardes</li>
                      <li>• Tormentas ocasionales con truenos</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Qué Sucede Cuando Llueve</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="font-bold mb-2">Court Philippe-Chatrier (con techo)</p>
                    <p className="text-sm">
                      Desde 2024, la pista principal tiene techo retráctil. El juego puede continuar cerrando el techo en aproximadamente 15 minutos. Los espectadores permanecen en sus asientos.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <p className="font-bold mb-2">Otras Pistas (sin techo)</p>
                    <p className="text-sm mb-2">
                      Suzanne-Lenglen, Simonne-Mathieu y pistas secundarias suspenden el juego cuando llueve.
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Las lonas cubren las pistas rápidamente</li>
                      <li>• Los jugadores salen de la pista</li>
                      <li>• Los espectadores pueden refugiarse en áreas cubiertas</li>
                      <li>• El juego se reanuda cuando para la lluvia y se seca la pista (30-90 min)</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="font-bold mb-2">Tu Entrada Sigue Siendo Válida</p>
                    <p className="text-sm">
                      Si tu partido se suspende por lluvia, puedes quedarte en el recinto. El partido continuará cuando mejore el clima, incluso si se extiende hasta tarde en la noche.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                <h3 className="font-bold mb-3">Consejos para Días de Lluvia</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Lleva siempre un chubasquero ligero o poncho plegable</li>
                  <li>• Paraguas pequeños están permitidos (máx. 1m diámetro)</li>
                  <li>• Protege tus electrónicos en bolsas impermeables</li>
                  <li>• Usa calzado resistente al agua</li>
                  <li>• Aprovecha las pausas por lluvia para comer o explorar áreas cubiertas</li>
                  <li>• Ten paciencia: los partidos eventualmente se reanudan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qué Vestir */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Recomendaciones Detalladas de Vestimenta
            </h2>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
              <h3 className="font-bold mb-3">Principio Fundamental: Sistema de Capas</h3>
              <p className="text-gray-700">
                La mejor estrategia es vestir en <strong>capas ajustables</strong> que puedas quitar o añadir según cambie la temperatura durante el día. Las mañanas son frescas (12-15°C), el mediodía cálido (20-24°C), y las tardes/noches vuelven a refrescar (15-17°C).
              </p>
            </div>

            <div className="space-y-6">
              {/* Parte Superior */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span>👕</span>
                  <span>Parte Superior del Cuerpo</span>
                </h3>

                <div className="space-y-4">
                  <div>
                    <p className="font-bold mb-2 text-purple-600">Capa Base</p>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• <strong>Camiseta de manga corta o larga:</strong> Dependiendo del pronóstico</li>
                      <li>• <strong>Polo o camiseta técnica:</strong> Materiales que respiren (evita algodón 100%)</li>
                      <li>• <strong>Colores claros:</strong> Reflejan el sol si hace calor</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-bold mb-2 text-purple-600">Capa Intermedia</p>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• <strong>Jersey ligero o sudadera:</strong> Para la mañana y tarde</li>
                      <li>• <strong>Cardigan o fleece fino:</strong> Fácil de poner y quitar</li>
                      <li>• <strong>Debe caber en tu mochila:</strong> Cuando no lo uses</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-bold mb-2 text-purple-600">Capa Exterior</p>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• <strong>Chaqueta cortavientos:</strong> Ligera, plegable, impermeable</li>
                      <li>• <strong>Chubasquero o poncho:</strong> Imprescindible (la lluvia es probable)</li>
                      <li>• <strong>Capucha recomendada:</strong> Protección extra</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Parte Inferior */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span>👖</span>
                  <span>Parte Inferior del Cuerpo</span>
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-bold mb-2 text-blue-600">Días Cálidos (22-24°C)</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Pantalones cortos o falda</li>
                      <li>• Pantalones de tela ligera</li>
                      <li>• Ropa deportiva cómoda</li>
                      <li>• Lleva un pantalón largo en la mochila</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-bold mb-2 text-blue-600">Días Frescos (15-20°C)</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Pantalones largos definitivamente</li>
                      <li>• Jeans o pantalones de tela</li>
                      <li>• Considera leggings debajo si hace mucho frío</li>
                      <li>• Evita pantalones demasiado ajustados (estarás sentado horas)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Calzado */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span>👟</span>
                  <span>Calzado</span>
                </h3>

                <div className="space-y-3 text-sm text-gray-700">
                  <p className="font-bold">Esencial: Comodidad por encima de estilo</p>
                  <ul className="space-y-2 ml-4">
                    <li>• <strong>Zapatillas deportivas cómodas:</strong> Caminarás 5-10 km durante el día</li>
                    <li>• <strong>Ya usadas (no nuevas):</strong> Evita ampollas</li>
                    <li>• <strong>Resistentes al agua preferiblemente:</strong> Por si llueve</li>
                    <li>• <strong>Evita:</strong> Tacones, sandalias abiertas, zapatos rígidos</li>
                    <li>• <strong>Calcetines:</strong> Cómodos, transpirables, lleva un par extra</li>
                  </ul>
                </div>
              </div>

              {/* Accesorios */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span>🧢</span>
                  <span>Accesorios Esenciales</span>
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-bold mb-2 text-orange-600">Protección Solar (Obligatorio)</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Gorra o sombrero:</strong> IMPRESCINDIBLE</li>
                      <li>• <strong>Gafas de sol:</strong> Con protección UV</li>
                      <li>• <strong>Protector solar:</strong> SPF 30+ (llévalo contigo)</li>
                      <li>• <strong>Bálsamo labial con SPF</strong></li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-bold mb-2 text-orange-600">Para Lluvia/Frío</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Paraguas plegable pequeño</strong></li>
                      <li>• <strong>Bufanda ligera:</strong> Para tardes frescas</li>
                      <li>• <strong>Guantes ligeros:</strong> Solo si es muy frío (raro)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ejemplos de Outfits */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Ejemplos de Outfits para Diferentes Escenarios
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Día Soleado */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-200">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">☀️</div>
                  <h3 className="font-bold text-lg">Día Soleado y Cálido</h3>
                  <p className="text-sm text-gray-600">22-24°C, cielo despejado</p>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Camiseta de manga corta clara</li>
                  <li>✓ Pantalones cortos o falda</li>
                  <li>✓ Zapatillas deportivas</li>
                  <li>✓ Gorra y gafas de sol</li>
                  <li>✓ Jersey ligero en la mochila</li>
                  <li>✓ Protector solar aplicado</li>
                </ul>
              </div>

              {/* Día Nublado */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-6 border-2 border-gray-200">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">☁️</div>
                  <h3 className="font-bold text-lg">Día Nublado/Fresco</h3>
                  <p className="text-sm text-gray-600">16-20°C, posible llovizna</p>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Camiseta manga larga</li>
                  <li>✓ Jersey o sudadera encima</li>
                  <li>✓ Pantalones largos</li>
                  <li>✓ Zapatillas resistentes al agua</li>
                  <li>✓ Chaqueta cortavientos</li>
                  <li>✓ Gorra + protector solar igualmente</li>
                </ul>
              </div>

              {/* Día Lluvioso */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border-2 border-blue-200">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">🌧️</div>
                  <h3 className="font-bold text-lg">Día con Lluvia</h3>
                  <p className="text-sm text-gray-600">14-18°C, chubascos</p>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Capas: camiseta + jersey</li>
                  <li>✓ Pantalones impermeables o secado rápido</li>
                  <li>✓ Zapatillas resistentes al agua</li>
                  <li>✓ Chubasquero/poncho impermeable</li>
                  <li>✓ Paraguas pequeño</li>
                  <li>✓ Gorra con visera (repele agua)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consejos Adicionales */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Consejos Adicionales sobre el Clima
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3 text-purple-600">Antes de tu Visita</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Verifica el pronóstico 3-5 días antes</li>
                  <li>• Revisa el pronóstico la noche anterior</li>
                  <li>• Mira el pronóstico por horas (no solo diario)</li>
                  <li>• Apps recomendadas: Météo-France, Weather.com</li>
                  <li>• Prepara ropa según el pronóstico pero lleva opciones</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3 text-blue-600">Durante tu Día</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• El clima puede cambiar rápidamente</li>
                  <li>• Mañanas frescas se calientan al mediodía</li>
                  <li>• Tardes/noches refrescan nuevamente</li>
                  <li>• Incluso en días nublados usa protector solar</li>
                  <li>• Mantente hidratado (el sol deshidrata)</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3 text-green-600">Protección Solar</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Aplica protector 30 min antes de salir</li>
                  <li>• Reaplica cada 2 horas religiosamente</li>
                  <li>• Muchos asientos están a pleno sol 6+ horas</li>
                  <li>• El reflejo de la arcilla aumenta la exposición</li>
                  <li>• Quemaduras solares arruinarán tu experiencia</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3 text-orange-600">Gestión de Capas</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Ten un sistema para guardar capas en tu mochila</li>
                  <li>• Usa bolsas Ziploc para organizar y proteger de lluvia</li>
                  <li>• Ajusta tu ropa en los cambios de lado (no durante puntos)</li>
                  <li>• Considera comprar un poncho barato allí si olvidas el tuyo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mitos del Clima */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Mitos Comunes sobre el Clima en Roland Garros
            </h2>

            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <p className="font-bold mb-2">❌ Mito: "Siempre llueve en Roland Garros"</p>
                <p className="text-sm text-gray-700">
                  <strong>Realidad:</strong> Sí llueve con cierta frecuencia (30-40% de días), pero no es constante. Muchos días son soleados y hermosos. La lluvia históricamente ha sido parte del torneo, pero ahora Philippe-Chatrier tiene techo.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <p className="font-bold mb-2">❌ Mito: "Hace frío en París en junio"</p>
                <p className="text-gray-700 text-sm">
                  <strong>Realidad:</strong> No hace frío, hace fresco por las mañanas/noches (12-15°C), pero agradable durante el día (20-24°C). Es primavera tardía, no invierno.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <p className="font-bold mb-2">❌ Mito: "No necesito protector solar si está nublado"</p>
                <p className="text-gray-700 text-sm">
                  <strong>Realidad:</strong> Los rayos UV atraviesan las nubes. Puedes quemarte incluso en días nublados, especialmente después de 6+ horas al aire libre. SIEMPRE usa protector solar.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <p className="font-bold mb-2">❌ Mito: "El clima será igual todos los días del torneo"</p>
                <p className="text-gray-700 text-sm">
                  <strong>Realidad:</strong> El clima es variable. Puedes tener un día soleado a 24°C y al siguiente lluvia a 16°C. Cada día es diferente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist Final */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Checklist de Preparación Climática</h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p className="font-bold mb-2">La Noche Anterior:</p>
                  <label className="flex items-center gap-2 bg-white/10 p-2 rounded">
                    <input type="checkbox" className="form-checkbox" />
                    <span>Verifica pronóstico actualizado</span>
                  </label>
                  <label className="flex items-center gap-2 bg-white/10 p-2 rounded">
                    <input type="checkbox" className="form-checkbox" />
                    <span>Prepara capas según pronóstico</span>
                  </label>
                  <label className="flex items-center gap-2 bg-white/10 p-2 rounded">
                    <input type="checkbox" className="form-checkbox" />
                    <span>Mete chubasquero en mochila</span>
                  </label>
                  <label className="flex items-center gap-2 bg-white/10 p-2 rounded">
                    <input type="checkbox" className="form-checkbox" />
                    <span>Verifica que zapatos sean cómodos</span>
                  </label>
                </div>
                <div className="space-y-2">
                  <p className="font-bold mb-2">Antes de Salir:</p>
                  <label className="flex items-center gap-2 bg-white/10 p-2 rounded">
                    <input type="checkbox" className="form-checkbox" />
                    <span>Gorra y gafas de sol empacadas</span>
                  </label>
                  <label className="flex items-center gap-2 bg-white/10 p-2 rounded">
                    <input type="checkbox" className="form-checkbox" />
                    <span>Protector solar aplicado</span>
                  </label>
                  <label className="flex items-center gap-2 bg-white/10 p-2 rounded">
                    <input type="checkbox" className="form-checkbox" />
                    <span>Protector solar en la mochila</span>
                  </label>
                  <label className="flex items-center gap-2 bg-white/10 p-2 rounded">
                    <input type="checkbox" className="form-checkbox" />
                    <span>Todas las capas en la mochila</span>
                  </label>
                </div>
              </div>
            </div>
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
                <p className="text-sm text-gray-600">Lista completa de esenciales</p>
              </Link>
              <Link href="/guia-completa/primera-vez" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="text-2xl mb-2">⭐</div>
                <h3 className="font-bold mb-1">Guía Primerizos</h3>
                <p className="text-sm text-gray-600">Tips para tu primera visita</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
