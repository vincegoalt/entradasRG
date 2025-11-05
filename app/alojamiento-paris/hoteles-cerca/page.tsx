import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hoteles Cerca de Roland Garros 2026: Guía por Zonas y Precios',
  description: 'Descubre los mejores hoteles cerca del estadio Roland Garros. Análisis por zonas, rangos de precio y distancias exactas para elegir tu alojamiento perfecto.',
  keywords: [
    'hoteles cerca roland garros',
    'hoteles roland garros 2026',
    'alojamiento cerca estadio roland garros',
    'hoteles distrito 16 paris',
    'hoteles boulogne billancourt',
    'donde dormir roland garros'
  ],
  openGraph: {
    title: 'Hoteles Cerca de Roland Garros 2026: Guía por Zonas y Precios',
    description: 'Guía completa de hoteles cerca de Roland Garros con precios, distancias y recomendaciones.',
    type: 'article',
  },
}

export default function HotelesCercaPage() {
  return (
    <>
      <div className="mx-auto max-w-[960px] px-4 py-5 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="w-full py-10">
          <div className="flex flex-col gap-4">
            <nav className="text-[#a15d45] text-sm">
              <Link href="/alojamiento-paris" className="hover:text-primary">Alojamiento</Link>
              <span className="mx-2">/</span>
              <span>Hoteles Cerca del Estadio</span>
            </nav>
            <h1 className="text-[#1d110c] text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
              Hoteles Cerca de Roland Garros: Guía por Zonas y Precios
            </h1>
            <p className="text-[#1d110c] text-xl md:text-2xl leading-normal">
              Análisis detallado de las mejores opciones de alojamiento según tu presupuesto y proximidad al estadio
            </p>
          </div>
        </section>

        {/* Main Content */}
        <article className="w-full py-10">
          <div className="flex flex-col gap-6">

            <p className="text-gray-700 leading-relaxed mb-6">
              La proximidad al Estadio Roland Garros puede transformar completamente tu experiencia durante el torneo. Poder volver caminando al hotel después de un maratónico partido de cinco sets, evitar el metro abarrotado, o incluso regresar para una siesta entre sesiones son ventajas invaluables que solo obtienes alojándote cerca del estadio.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Esta guía organiza los hoteles en círculos concéntricos desde el estadio, proporcionando información detallada sobre precios esperados, calidad del alojamiento y factores prácticos para cada zona. Los precios mencionados son para el período de Roland Garros 2026 y pueden variar según la demanda específica.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Nota Importante sobre Precios</h3>
              <p className="text-gray-700">
                Durante Roland Garros, los precios hoteleros en las zonas cercanas al estadio aumentan típicamente entre 30-60% respecto a otras fechas. Los precios indicados en esta guía son estimaciones para el período del torneo. Reservar con 4-6 meses de anticipación puede resultar en ahorros significativos.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Zona 1: A Pie del Estadio (Menos de 1.5 km)</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Esta zona privilegiada incluye el extremo oeste del distrito 16 y parte de Boulogne-Billancourt. Son las ubicaciones más codiciadas y las primeras en agotarse. La capacidad de caminar al estadio en 10-20 minutos es un lujo que vale cada euro durante el torneo.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-gray-900 mt-8">Características de la Zona 1</h3>

            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">✓</span>
                <div><strong className="text-gray-900">Tiempo al estadio:</strong> 10-20 minutos caminando</div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">✓</span>
                <div><strong className="text-gray-900">Transporte público:</strong> Estaciones Porte d'Auteuil, Michel-Ange Auteuil, Exelmans</div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">✓</span>
                <div><strong className="text-gray-900">Ambiente:</strong> Residencial tranquilo, cerca del Bois de Boulogne</div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 font-bold mr-3">•</span>
                <div><strong className="text-gray-900">Rango de precio:</strong> 180-450€/noche durante Roland Garros</div>
              </li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-gray-900 mt-8">Tipos de Hoteles en Zona 1</h3>

            <div className="bg-white border border-gray-200 rounded-lg p-6 my-6">
              <h4 className="text-xl font-bold mb-4 text-gray-900">Hoteles de Cadena Media (3 estrellas)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Precio estimado:</strong> 180-280€/noche
              </p>
              <p className="text-gray-700 mb-3">
                Cadenas como Ibis, Novotel o Mercure tienen presencia en la zona. Ofrecen fiabilidad y estándares consistentes, aunque sin el encanto de hoteles boutique. Perfecto si priorizas la ubicación sobre la experiencia del hotel en sí.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Ventajas:</strong> Ubicación excelente, precios relativamente razonables, servicios básicos garantizados</li>
                <li><strong>Consideraciones:</strong> Pueden carecer de carácter, habitaciones funcionales pero pequeñas</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 my-6">
              <h4 className="text-xl font-bold mb-4 text-gray-900">Hoteles Boutique y 4 Estrellas</h4>
              <p className="text-gray-700 mb-3">
                <strong>Precio estimado:</strong> 280-400€/noche
              </p>
              <p className="text-gray-700 mb-3">
                Estos hoteles combinan ubicación privilegiada con mayor comodidad. Habitaciones más amplias, mejor desayuno, y a menudo pequeños extras como minibar premium o servicio de té/café en la habitación.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Ventajas:</strong> Mayor confort después de largos días, mejor servicio al cliente, desayunos de calidad</li>
                <li><strong>Consideraciones:</strong> Precio significativamente más alto, se agotan muy rápido</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 my-6">
              <h4 className="text-xl font-bold mb-4 text-gray-900">Hoteles de Lujo (5 estrellas)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Precio estimado:</strong> 400-700€+/noche
              </p>
              <p className="text-gray-700 mb-3">
                Para quienes buscan una experiencia completa sin compromisos. Algunos hoteles de lujo cerca del Bois de Boulogne ofrecen paquetes especiales Roland Garros con transporte al estadio, desayuno premium y late check-out.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Ventajas:</strong> Experiencia completa, servicios exclusivos, máximo confort</li>
                <li><strong>Consideraciones:</strong> Precio muy elevado, puede estar fuera del presupuesto de la mayoría</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-gray-900 mt-8">Consejos para la Zona 1</h3>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">→</span>
                  <div>Reserva con 5-6 meses de anticipación; esta zona se agota primero</div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">→</span>
                  <div>Verifica la distancia exacta usando Google Maps; "cerca del estadio" puede ser interpretado libremente</div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">→</span>
                  <div>Lee reseñas sobre niveles de ruido; algunas calles cerca del estadio pueden ser ruidosas durante el torneo</div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">→</span>
                  <div>Considera hoteles en calles residenciales en lugar de avenidas principales para mejor descanso</div>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Recomendación Final</h3>
              <p className="text-gray-700 mb-4">
                Para la mayoría de los visitantes, la Zona 2 ofrece el mejor equilibrio entre proximidad, precio y experiencia general. Específicamente, busca hoteles en el distrito 16 cerca de las estaciones Exelmans, Michel-Ange Auteuil, o en el distrito 15 cerca de Charles Michels.
              </p>
              <p className="text-gray-700">
                Reserva lo antes posible (idealmente 5-6 meses antes), lee reseñas cuidadosamente, y prioriza hoteles con cancelación flexible por si encuentras mejores opciones o tus planes cambian.
              </p>
            </div>

          </div>
        </article>

        {/* Navigation to Other Guides */}
        <section className="w-full py-10">
          <h2 className="text-[#1d110c] text-2xl font-bold mb-6 text-center">
            Continúa Explorando
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/alojamiento-paris/mejores-barrios"
              className="flex flex-col gap-4 rounded-lg border border-[#ead5cd] bg-background-light p-6 hover:shadow-lg transition-shadow"
            >
              <span className="material-symbols-outlined text-primary" style={{fontSize: '32px'}}>map</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#1d110c] text-base font-bold">Mejores Barrios para Alojarse</h3>
                <p className="text-[#a15d45] text-sm font-normal">Descubre los distritos de París más convenientes</p>
              </div>
            </Link>

            <Link
              href="/alojamiento-paris/consejos-reserva"
              className="flex flex-col gap-4 rounded-lg border border-[#ead5cd] bg-background-light p-6 hover:shadow-lg transition-shadow"
            >
              <span className="material-symbols-outlined text-primary" style={{fontSize: '32px'}}>lightbulb</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#1d110c] text-base font-bold">Consejos de Reserva</h3>
                <p className="text-[#a15d45] text-sm font-normal">Estrategias para conseguir el mejor precio</p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
