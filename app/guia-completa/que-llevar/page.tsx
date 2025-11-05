import Link from 'next/link'
import { Metadata } from 'next'
import { ArticleSchema } from '@/components/seo/ArticleSchema'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Qué Llevar a Roland Garros 2026 | Lista Completa de Esenciales',
  description: 'Checklist completo de qué llevar a Roland Garros: protección solar, ropa adecuada, tecnología permitida, comida y bebida, y artículos prohibidos.',
  keywords: 'que llevar roland garros, lista roland garros, permitido roland garros, prohibido roland garros, mochila roland garros',
  openGraph: {
    title: 'Qué Llevar a Roland Garros 2026 - Lista Completa',
    description: 'Guía práctica de qué llevar y qué evitar en tu visita a Roland Garros',
    type: 'article',
  }
}

export default function QueLlevarPage() {
  const breadcrumbItems = [
    { name: 'Inicio', url: '/' },
    { name: 'Guía Completa', url: '/guia-completa' },
    { name: 'Qué Llevar', url: '/guia-completa/que-llevar' }
  ]

  return (
    <>
      <ArticleSchema
        headline="Qué Llevar a Roland Garros 2026"
        description="Lista completa de artículos esenciales, recomendados y prohibidos para tu visita a Roland Garros"
        datePublished="2025-01-15"
        dateModified="2025-01-15"
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Qué Llevar a Roland Garros 2026
            </h1>
            <p className="text-xl text-green-100">
              Lista completa de esenciales, recomendaciones y artículos prohibidos para disfrutar tu día en el torneo
            </p>
          </div>
        </div>
      </section>

      {/* Quick Checklist */}
      <section className="py-8 bg-green-50 border-b-2 border-green-200">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Checklist Rápido de Esenciales</h2>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Entrada / E-ticket (digital o impreso)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Protector solar (SPF 30+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Gorra o sombrero</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Gafas de sol</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Botella de agua reutilizable</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Teléfono móvil cargado</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Cargador portátil (power bank)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Snacks ligeros</span>
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
              Preparar adecuadamente tu mochila o bolso para Roland Garros puede marcar la diferencia entre un día cómodo y memorable, y uno lleno de incomodidades. Roland Garros tiene políticas específicas sobre qué está permitido y qué no, además de restricciones de tamaño para bolsos y mochilas.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Esta guía te ayudará a empacar exactamente lo que necesitas, evitar artículos prohibidos que te harán perder tiempo en seguridad, y prepararte para las condiciones climáticas variables de París en primavera.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Restricción de Tamaño de Bolsos</h3>
              <p className="text-gray-700 mb-2">
                <strong>Dimensiones máximas permitidas:</strong> 40cm x 30cm x 20cm (largo x alto x ancho)
              </p>
              <p className="text-gray-700">
                Los bolsos y mochilas que superen estas dimensiones no podrán ingresar al recinto. No hay servicio de guardarropa, así que planifica en consecuencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Artículos Esenciales */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Artículos Esenciales (Imprescindibles)
            </h2>

            <div className="space-y-6">
              {/* Documentación */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🎫</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Documentación y Entradas</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold mt-1">•</span>
                        <div>
                          <strong>Entrada al torneo:</strong> Digital en tu smartphone o impresa. Recomendamos tener ambas como respaldo.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold mt-1">•</span>
                        <div>
                          <strong>Identificación personal:</strong> DNI o pasaporte. Aunque no siempre lo piden, es buena idea llevarlo.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold mt-1">•</span>
                        <div>
                          <strong>Tarjetas de pago:</strong> Aunque hay cajeros, es mejor llevar efectivo y tarjetas.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Protección Solar */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">☀️</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Protección Solar (Crítico)</h3>
                    <p className="text-gray-700 mb-4">
                      Estarás al aire libre durante horas, muchos asientos están completamente expuestos al sol. La protección solar no es opcional.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold mt-1">•</span>
                        <div>
                          <strong>Protector solar SPF 30 o superior:</strong> Aplica antes de llegar y reaplica cada 2 horas. Formato de tamaño viaje (hasta 100ml).
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold mt-1">•</span>
                        <div>
                          <strong>Gorra o sombrero:</strong> Imprescindible. Las viseras están permitidas. Evita sombreros muy anchos que molesten a otros espectadores.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold mt-1">•</span>
                        <div>
                          <strong>Gafas de sol:</strong> Con protección UV. Estarás mirando hacia el cielo durante horas.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold mt-1">•</span>
                        <div>
                          <strong>Bálsamo labial con SPF:</strong> Los labios también se queman.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Hidratación y Comida */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🥤</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Hidratación y Comida</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold mt-1">•</span>
                        <div>
                          <strong>Botella de agua reutilizable (vacía):</strong> Hay fuentes de agua potable gratuitas en todo el recinto. Una botella de 750ml-1L es ideal.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold mt-1">•</span>
                        <div>
                          <strong>Snacks y comida ligera:</strong> Permitido llevar tu propia comida. Sugerencias: sándwiches, frutas, frutos secos, barritas energéticas.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold mt-1">•</span>
                        <div>
                          <strong>Límite de bebidas:</strong> Máximo 1 litro de líquidos en total (excluyendo la botella vacía que llenarás dentro).
                        </div>
                      </li>
                    </ul>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                      <p className="text-sm text-gray-700">
                        <strong>Nota:</strong> La comida y bebida dentro de Roland Garros puede ser cara (€8-15 por comida). Llevar tu propia comida te ahorrará dinero sin perder calidad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tecnología */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📱</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Tecnología Esencial</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold mt-1">•</span>
                        <div>
                          <strong>Smartphone completamente cargado:</strong> Para tu e-ticket, app de Roland Garros, fotos y comunicación.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold mt-1">•</span>
                        <div>
                          <strong>Cargador portátil (power bank):</strong> Muy recomendado. Un día completo agotará tu batería, especialmente si tomas fotos y vídeos.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold mt-1">•</span>
                        <div>
                          <strong>Cable de carga:</strong> Para usar con tu power bank.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold mt-1">•</span>
                        <div>
                          <strong>Auriculares (opcionales):</strong> Para escuchar comentarios de radio si lo deseas durante los partidos.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artículos Recomendados */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Artículos Altamente Recomendados
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <span>🧥</span>
                  <span>Ropa y Capas</span>
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Chaqueta ligera o cortavientos (el clima cambia rápidamente)</li>
                  <li>• Chubasquero plegable o poncho de lluvia compacto</li>
                  <li>• Ropa en capas para ajustar a la temperatura</li>
                  <li>• Calzado cómodo (caminarás mucho)</li>
                  <li>• Jersey o sudadera para las tardes/noches frescas</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <span>🩹</span>
                  <span>Artículos de Salud/Comodidad</span>
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Pañuelos de papel</li>
                  <li>• Toallitas húmedas o gel desinfectante</li>
                  <li>• Medicamentos personales que necesites</li>
                  <li>• Analgésicos básicos (ibuprofeno, paracetamol)</li>
                  <li>• Tiritas/curitas (para ampollas por caminar)</li>
                  <li>• Antihistamínicos si tienes alergias</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <span>📸</span>
                  <span>Entretenimiento y Recuerdos</span>
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Cámara compacta (las réflex están permitidas sin flash)</li>
                  <li>• Libro o revista (para tiempos de espera)</li>
                  <li>• Bolígrafo (para autógrafos si tienes suerte)</li>
                  <li>• Artículo pequeño para autografiar (pelota de tenis, programa)</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <span>💼</span>
                  <span>Otros Útiles</span>
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Mochila pequeña plegable extra (para souvenirs)</li>
                  <li>• Bolsa impermeable para proteger electrónicos</li>
                  <li>• Dinero en efectivo (€50-100 recomendado)</li>
                  <li>• Información de emergencia (hotel, contactos)</li>
                  <li>• Guía o mapa del estadio (disponible en app)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ropa Según el Clima */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Qué Vestir Según el Clima
            </h2>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <p className="text-gray-700 mb-6">
                El clima en París durante Roland Garros (finales de mayo - principios de junio) puede ser variable. Las temperaturas típicas oscilan entre 12°C-24°C, pero puede hacer más frío o calor.
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="font-bold text-lg mb-3">Día Soleado (20-24°C)</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Camiseta o polo de manga corta</li>
                    <li>• Pantalones cortos o falda (no hay código de vestimenta estricto)</li>
                    <li>• Gorra/sombrero es OBLIGATORIO</li>
                    <li>• Gafas de sol esenciales</li>
                    <li>• Lleva una chaqueta ligera (puede refrescar por la tarde)</li>
                    <li>• Protector solar aplicado y en tu bolso</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-bold text-lg mb-3">Día Nublado/Fresco (15-19°C)</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Camiseta de manga larga o polo</li>
                    <li>• Pantalones largos o jeans</li>
                    <li>• Chaqueta ligera o jersey</li>
                    <li>• Gorra (aún puede haber sol intermitente)</li>
                    <li>• Protector solar (los rayos UV atraviesan las nubes)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-gray-500 pl-4">
                  <h3 className="font-bold text-lg mb-3">Día con Lluvia (12-18°C)</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Chubasquero o chaqueta impermeable</li>
                    <li>• Ropa en capas (puede hacer frío húmedo)</li>
                    <li>• Pantalones largos impermeables o de secado rápido</li>
                    <li>• Calzado resistente al agua</li>
                    <li>• Considera un paraguas pequeño (máx. 1 metro de diámetro)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-bold text-lg mb-3">Sesiones Nocturnas (12-16°C)</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Pantalones largos definitivamente</li>
                    <li>• Chaqueta abrigada o sudadera con capucha</li>
                    <li>• Considera una bufanda ligera</li>
                    <li>• Las temperaturas caen significativamente después del atardecer</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <h3 className="font-bold mb-3">Estrategia de Capas (Layer Strategy)</h3>
              <p className="text-gray-700 mb-3">
                La mejor estrategia es vestir en <strong>capas que puedas quitar o poner</strong> según cambie el clima durante el día:
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Capa base: Camiseta técnica o polo</li>
                <li>• Capa intermedia: Jersey ligero o sudadera</li>
                <li>• Capa exterior: Chaqueta cortavientos o impermeable</li>
                <li>• Todo debe caber en tu mochila cuando no lo uses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Artículos PROHIBIDOS */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Artículos Prohibidos (No Permitidos)
            </h2>

            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-3xl">⛔</span>
                <div>
                  <h3 className="font-bold text-xl text-red-900 mb-2">Importante: Lista de Prohibiciones</h3>
                  <p className="text-gray-700">
                    Los siguientes artículos NO están permitidos y serán confiscados en el control de seguridad. No hay servicio de consigna, por lo que deberás desecharlos o regresar a tu alojamiento.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div>
                  <h4 className="font-bold mb-3 text-red-900">Estrictamente Prohibido:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Armas de cualquier tipo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Objetos punzantes (navajas, tijeras, cortaúñas)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Bebidas alcohólicas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Drogas y sustancias ilegales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Bengalas, fuegos artificiales, petardos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Aerosoles grandes (desodorante OK si es pequeño)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-3 text-red-900">Equipamiento Prohibido:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Palos de selfie extensibles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Trípodes profesionales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Equipos de grabación profesional</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Drones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Megáfonos o bocinas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Banderas con astas rígidas (solo tela está OK)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-3 text-red-900">Tamaño y Dimensiones:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Bolsos/mochilas mayores a 40x30x20cm</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Maletas de ruedas o equipaje grande</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Neveras portátiles (coolers)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Paraguas {'>'} 1 metro de diámetro</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Sillas plegables o cojines grandes</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-3 text-red-900">Otros Artículos No Permitidos:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Mascotas (excepto perros guía)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Instrumentos musicales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Globos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Material publicitario o comercial</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Objetos de vidrio (botellas de vidrio)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <h3 className="font-bold mb-3">Zona Gris: Artículos que Dependen</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>Cámaras réflex:</strong> Permitidas sin uso de flash durante el juego</li>
                <li><strong>Tablets:</strong> Generalmente permitidas, pero úsalas con discreción</li>
                <li><strong>Comida casera:</strong> Permitida en cantidades razonables (no excesivas)</li>
                <li><strong>Líquidos:</strong> Máximo 1 litro en total, contenedores plásticos solamente</li>
                <li><strong>Paraguas pequeños:</strong> Permitidos si son compactos (&lt;1m diámetro)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Consejos Finales de Empaque */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Consejos Finales de Empaque
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-bold text-lg mb-3 text-green-600">Estrategia de Empaque Inteligente</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Usa bolsas Ziploc para organizar y proteger de lluvia</li>
                  <li>• Lleva artículos en tamaño mini/viaje para ahorrar espacio</li>
                  <li>• Distribuye el peso uniformemente en tu mochila</li>
                  <li>• Ten los esenciales (entrada, teléfono) en lugares accesibles</li>
                  <li>• Deja espacio para souvenirs que comprarás</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-bold text-lg mb-3 text-blue-600">El Día Antes</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Verifica el pronóstico del tiempo actualizado</li>
                  <li>• Carga todos tus dispositivos electrónicos</li>
                  <li>• Prepara tu mochila siguiendo esta lista</li>
                  <li>• Verifica que tu mochila cumple las dimensiones máximas</li>
                  <li>• Ten la entrada descargada y lista (digital + impresa)</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-bold text-lg mb-3 text-orange-600">Antes de Salir</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Checklist final: entrada, teléfono, protector solar, gorra</li>
                  <li>• Llena tu botella de agua en el hotel</li>
                  <li>• Aplica la primera capa de protector solar</li>
                  <li>• Revisa que no llevas artículos prohibidos</li>
                  <li>• Anota la dirección de tu hotel por si acaso</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-bold text-lg mb-3 text-purple-600">Durante el Día</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Reaplica protector solar cada 2 horas</li>
                  <li>• Mantente hidratado (rellena tu botella regularmente)</li>
                  <li>• Usa el power bank cuando tu batería baje del 50%</li>
                  <li>• Guarda todos tus recibos en un lugar específico</li>
                  <li>• Ten cuidado con tus pertenencias en áreas concurridas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist Descargable */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Checklist Completa para Imprimir</h2>
              <p className="mb-6 text-green-100">
                Guarda esta página o toma una captura de pantalla de las listas anteriores para tener tu checklist siempre a mano mientras preparas tu visita.
              </p>
              <div className="bg-white text-gray-900 rounded p-4 max-w-md mx-auto">
                <p className="font-bold mb-2">Elementos Críticos No Olvidar:</p>
                <div className="text-left text-sm space-y-1">
                  <p>✓ Entrada</p>
                  <p>✓ Protector solar + Gorra + Gafas</p>
                  <p>✓ Botella de agua vacía</p>
                  <p>✓ Teléfono + Power bank</p>
                  <p>✓ Chaqueta/chubasquero</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Continúa Preparando tu Visita
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/guia-completa" className="block p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow">
                <div className="text-2xl mb-2">📋</div>
                <h3 className="font-bold mb-1">Guía Completa</h3>
                <p className="text-sm text-gray-600">Volver al índice principal</p>
              </Link>
              <Link href="/guia-completa/clima-consejos" className="block p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow">
                <div className="text-2xl mb-2">☀️</div>
                <h3 className="font-bold mb-1">Clima y Consejos</h3>
                <p className="text-sm text-gray-600">Tiempo en París en mayo/junio</p>
              </Link>
              <Link href="/guia-completa/reglas-estadio" className="block p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow">
                <div className="text-2xl mb-2">📋</div>
                <h3 className="font-bold mb-1">Reglas del Estadio</h3>
                <p className="text-sm text-gray-600">Normativa y seguridad</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
