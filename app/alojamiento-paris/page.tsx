import Link from 'next/link'
import { Metadata } from 'next'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { PageHero } from '@/components/ui/PageHero'
import { GoalTicketsCTA } from '@/components/ui/GoalTicketsCTA'

export const metadata: Metadata = {
  title: 'Dónde Alojarse para Roland Garros 2026: Hoteles y Barrios',
  description: 'Guía completa de alojamiento para Roland Garros 2026. Descubre los mejores hoteles cerca del estadio, barrios recomendados y consejos para reservar en París.',
  keywords: [
    'hoteles cerca roland garros',
    'donde alojarse roland garros',
    'alojamiento paris roland garros',
    'mejores barrios paris',
    'hoteles roland garros 2026',
    'donde dormir roland garros',
    'alojamiento cerca estadio roland garros'
  ],
  openGraph: {
    title: 'Dónde Alojarse para Roland Garros 2026: Hoteles y Barrios',
    description: 'Guía completa de alojamiento para Roland Garros 2026. Hoteles, barrios y consejos de reserva.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://entradasrolandgarros.com/alojamiento-paris',
  },
}

const faqs = [
  {
    question: '¿Cuál es el mejor barrio para alojarse durante Roland Garros?',
    answer: 'El distrito 16 de París es el más cercano al estadio, permitiendo llegar a pie en 15-25 minutos. Sin embargo, para combinar turismo y tenis, los barrios con acceso directo a la Línea 9 o 10 del metro son ideales: Trocadéro, Passy o Saint-Germain-des-Prés. El distrito 15 ofrece buen equilibrio entre precio y proximidad. Para mejor ambiente parisino, Le Marais o Saint-Germain están a 30-40 minutos en metro.'
  },
  {
    question: '¿Cuánto cuesta un hotel en París durante Roland Garros?',
    answer: 'Los precios suben un 30-50% durante el torneo. Un hotel económico (2 estrellas) cuesta entre 70-120 EUR/noche, un hotel de gama media (3 estrellas) entre 120-250 EUR/noche, hoteles premium (4 estrellas) entre 250-400 EUR/noche, y hoteles de lujo (5 estrellas) más de 400 EUR/noche. Los hoteles más cercanos al estadio (distrito 16) son generalmente más caros. Reservar con 4-6 meses de anticipación es clave para encontrar buenos precios.'
  },
  {
    question: '¿Es mejor alojarse cerca del estadio o en el centro de París?',
    answer: 'Depende de tu prioridad. Si vas principalmente al tenis y planeas estar todo el día en el estadio, alojarte en el distrito 16 te ahorra tiempo y evita el metro abarrotado después de los partidos. Si quieres explorar París por las tardes, un barrio céntrico (Le Marais, Saint-Germain) ofrece mejor ambiente y restaurantes, aunque necesitarás 30-45 minutos de metro para llegar al estadio.'
  },
  {
    question: '¿Cuándo debo reservar el hotel para Roland Garros?',
    answer: 'Lo ideal es reservar entre 4 y 6 meses antes del torneo (noviembre-enero). Los hoteles más cercanos al estadio y con mejor relación calidad-precio se agotan primero. Busca opciones con cancelación gratuita para asegurar tu reserva mientras sigues buscando. Durante el fin de semana de semifinales y finales la demanda es máxima, así que para esas fechas reserva con aún más anticipación.'
  },
  {
    question: '¿Merece la pena un Airbnb para Roland Garros?',
    answer: 'Los apartamentos de Airbnb pueden ser excelentes para estancias de 3+ noches o grupos, ya que ofrecen más espacio y cocina para ahorrar en comidas. Los precios suelen ser competitivos comparados con hoteles equivalentes. Asegúrate de que el apartamento esté cerca de una estación de metro (idealmente Línea 9 o 10) y verifica las reseñas recientes sobre limpieza y comunicación con el anfitrión. Compara siempre con hoteles que ofrezcan cancelación flexible.'
  }
]

export default function AlojamientoParisPage() {
  return (
    <div className="min-h-screen bg-[#fcf9f8]">
      <FAQSchema faqs={faqs} />
      <PageHero
        title="Alojamiento para Roland Garros 2026"
        subtitle="Hoteles, barrios y consejos de reserva para tu viaje a París"
        image="/images/heroes/paris-hotel.jpg"
        badge={{ icon: 'hotel', text: 'Guía de Alojamiento' }}
        primaryCta={{ text: 'Comprar Entradas', href: 'https://goaltickets.com/es/collections/entradas-roland-garros-2026', icon: 'confirmation_number', external: true }}
        secondaryCta={{ text: 'Ver Hoteles', href: '#hoteles', icon: 'arrow_downward' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Key Info Capsule */}
        <section className="w-full py-10">
          <div className="rounded-xl border border-[#ead5cd] bg-gradient-to-r from-orange-50/50 to-[#fcf9f8] p-6 shadow-sm">
            <p className="text-[#1d110c] text-base leading-relaxed">
              <strong>El estadio Roland Garros está en el distrito 16 de París.</strong> Los hoteles más cercanos (distrito 16) están a <strong>5-15 minutos a pie</strong>. Los barrios céntricos (Saint-Germain, Marais) están a <strong>25-35 minutos en metro</strong>. Reserva con <strong>3-4 meses de anticipación</strong> para las mejores opciones y precios.
            </p>
          </div>
        </section>

        {/* Quick Navigation Cards */}
        <section className="w-full py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/alojamiento-paris/hoteles-cerca"
              className="card-hover flex flex-col gap-4 rounded-xl border border-[#ead5cd] bg-white p-6"
            >
              <span className="material-symbols-outlined text-primary" style={{fontSize: '32px'}}>hotel</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#1d110c] text-base font-bold">Hoteles Cerca del Estadio</h3>
                <p className="text-[#a15d45] text-sm font-normal">Opciones de alojamiento a diferentes distancias del Roland Garros, precios y características</p>
              </div>
            </Link>

            <Link
              href="/alojamiento-paris/mejores-barrios"
              className="card-hover flex flex-col gap-4 rounded-xl border border-[#ead5cd] bg-white p-6"
            >
              <span className="material-symbols-outlined text-primary" style={{fontSize: '32px'}}>map</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#1d110c] text-base font-bold">Mejores Barrios</h3>
                <p className="text-[#a15d45] text-sm font-normal">Descubre los distritos más convenientes para alojarte durante Roland Garros</p>
              </div>
            </Link>

            <Link
              href="/alojamiento-paris/consejos-reserva"
              className="card-hover flex flex-col gap-4 rounded-xl border border-[#ead5cd] bg-white p-6"
            >
              <span className="material-symbols-outlined text-primary" style={{fontSize: '32px'}}>lightbulb</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#1d110c] text-base font-bold">Consejos de Reserva</h3>
                <p className="text-[#a15d45] text-sm font-normal">Cuándo reservar, qué buscar y cómo conseguir las mejores ofertas</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Main Content */}
        <article className="w-full py-10">
          <div className="flex flex-col gap-6">

            <h2 className="text-3xl font-bold mb-6 text-gray-900">Por Qué la Ubicación es Crucial para Roland Garros</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Elegir el alojamiento adecuado puede marcar la diferencia entre una experiencia inolvidable y días agotadores durante Roland Garros. El torneo se celebra en el oeste de París, en el distrito 16, y aunque la ciudad cuenta con un excelente sistema de transporte público, la ubicación estratégica de tu hotel puede ahorrarte tiempo valioso y energía.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              París experimenta un aumento significativo en la demanda hotelera durante Roland Garros, con los precios subiendo entre un 30% y 50% respecto a otras fechas. Los hoteles más cercanos al estadio se agotan con meses de anticipación, especialmente aquellos con buena relación calidad-precio. Por eso, planificar tu alojamiento es tan importante como conseguir las entradas al torneo.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Consejo Esencial</h3>
              <p className="text-gray-700">
                Reserve su alojamiento entre 4 y 6 meses antes del torneo para obtener las mejores opciones y precios. Los hoteles en el distrito 16 suelen agotarse primero, seguidos por aquellos con acceso directo al Metro Línea 9 o 10.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Factores Clave al Elegir tu Alojamiento</h2>

            <h3 className="text-2xl font-bold mb-4 text-gray-900 mt-8">1. Proximidad al Estadio Roland Garros</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              El Estadio Roland Garros está ubicado en el Bois de Boulogne, en el extremo oeste del distrito 16 de París. La proximidad es importante, pero no siempre es el factor decisivo. Hay tres círculos concéntricos de ubicaciones a considerar:
            </p>

            <div className="bg-white border border-gray-200 rounded-lg p-6 my-6">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 font-bold mr-3">•</span>
                  <div>
                    <strong className="text-gray-900">A pie (menos de 2 km):</strong> Los hoteles en Boulogne-Billancourt y el extremo oeste del distrito 16 permiten llegar caminando en 15-25 minutos. Ideal para evitar el metro abarrotado después de los partidos.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 font-bold mr-3">•</span>
                  <div>
                    <strong className="text-gray-900">Cerca en metro (2-4 estaciones):</strong> Hoteles en el centro del distrito 16, distrito 15, o cerca de las estaciones de la Línea 9 o 10. Tiempo de desplazamiento de 15-30 minutos.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 font-bold mr-3">•</span>
                  <div>
                    <strong className="text-gray-900">Más lejos pero bien comunicado (30-45 minutos):</strong> Barrios céntricos como Le Marais, Saint-Germain o cerca de la Torre Eiffel. Requieren más tiempo pero ofrecen mejor ambiente parisino.
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-gray-900 mt-8">2. Acceso al Transporte Público</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Las líneas de metro más importantes para Roland Garros son:
            </p>

            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-orange-600 font-bold mr-3">→</span>
                <div>
                  <strong className="text-gray-900">Línea 9:</strong> La más directa. Estación Porte d'Auteuil (justo en el estadio) conecta con el centro de París. Puede estar muy llena durante el torneo.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 font-bold mr-3">→</span>
                <div>
                  <strong className="text-gray-900">Línea 10:</strong> También llega a Boulogne y conecta con varias áreas importantes de París.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 font-bold mr-3">→</span>
                <div>
                  <strong className="text-gray-900">RER C:</strong> Útil si vienes desde áreas más alejadas o desde ciertas zonas del sur de París.
                </div>
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              Un hotel cerca de una estación de metro con conexión directa a la Línea 9 puede ser más conveniente que uno más cerca pero sin acceso al metro, especialmente después de un largo día viendo partidos.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-gray-900 mt-8">3. Presupuesto y Rangos de Precio</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Los precios de alojamiento durante Roland Garros varían considerablemente según la ubicación, categoría y momento de reserva:
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
              <ul className="space-y-4 text-gray-700">
                <li>
                  <strong className="text-gray-900">Económico (70-120€/noche):</strong> Hostales, hoteles 2 estrellas o Airbnb en barrios periféricos pero bien comunicados. Requiere reserva muy anticipada.
                </li>
                <li>
                  <strong className="text-gray-900">Medio (120-250€/noche):</strong> Hoteles 3 estrellas en distritos 15, 16, o 17. La mayoría de los visitantes se encuentran en este rango.
                </li>
                <li>
                  <strong className="text-gray-900">Premium (250-400€/noche):</strong> Hoteles 4 estrellas cerca del estadio o en áreas prestigiosas del centro de París.
                </li>
                <li>
                  <strong className="text-gray-900">Lujo (400€+/noche):</strong> Hoteles 5 estrellas en ubicaciones privilegiadas, algunos con paquetes especiales para Roland Garros.
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-gray-900 mt-8">4. Duración de la Estancia</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              La mayoría de los visitantes se quedan entre 2 y 5 noches. Los fines de semana durante el torneo son los más solicitados, especialmente el fin de semana de las semifinales y finales. Si tu presupuesto es limitado, considera alojarte durante los días de semana de la primera semana, cuando los precios suelen ser ligeramente más bajos y hay más disponibilidad.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Tipos de Alojamiento Disponibles</h2>

            <h3 className="text-2xl font-bold mb-4 text-gray-900 mt-8">Hoteles Tradicionales</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Los hoteles ofrecen la mayor comodidad y servicios, especialmente importantes después de largos días en el torneo:
            </p>

            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">✓</span>
                <div><strong>Ventajas:</strong> Servicio diario, desayuno incluido en muchos casos, ubicaciones convenientes, posibilidad de guardar equipaje.</div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-3">✗</span>
                <div><strong>Desventajas:</strong> Precios más altos durante el torneo, habitaciones a veces pequeñas en París.</div>
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              Plataformas como Booking.com ofrecen una amplia selección de hoteles con filtros útiles por ubicación, precio y servicios. Muchos hoteles también ofrecen cancelación gratuita, lo que te permite asegurar tu reserva mientras sigues buscando mejores opciones.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-gray-900 mt-8">Apartamentos y Airbnb</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Los apartamentos pueden ser una excelente opción, especialmente para grupos o estancias más largas. Tener una cocina permite ahorrar en comidas y proporciona más espacio que una habitación de hotel típica. Sin embargo, asegúrate de que esté bien ubicado respecto al transporte público, ya que caminar con maletas por París puede ser complicado.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-gray-900 mt-8">Hostales y Albergues</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Para viajeros con presupuesto limitado, los hostales modernos en París ofrecen habitaciones privadas además de dormitorios compartidos. Aunque generalmente están más lejos del estadio, la compensación en precio puede valer la pena si no te importa un trayecto más largo en metro.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Servicios y Comodidades Importantes</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Al evaluar opciones de alojamiento para Roland Garros, considera estos servicios clave:
            </p>

            <div className="bg-white border border-gray-200 rounded-lg p-6 my-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 font-bold mr-3">•</span>
                  <div><strong className="text-gray-900">Aire acondicionado:</strong> Mayo-junio en París puede ser caluroso. Esencial si hay una ola de calor.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 font-bold mr-3">•</span>
                  <div><strong className="text-gray-900">WiFi fiable:</strong> Para consultar horarios, resultados y planificar tus días.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 font-bold mr-3">•</span>
                  <div><strong className="text-gray-900">Desayuno:</strong> Un buen desayuno te prepara para un largo día en el estadio.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 font-bold mr-3">•</span>
                  <div><strong className="text-gray-900">Ascensor:</strong> Importante en edificios parisinos antiguos, especialmente después de caminar todo el día.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 font-bold mr-3">•</span>
                  <div><strong className="text-gray-900">Horario flexible de check-in/out:</strong> Los partidos pueden terminar tarde y tu vuelo puede ser temprano.</div>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Equilibrando Ubicación y Experiencia Parisina</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Una consideración importante es cuánto tiempo planeas pasar explorando París más allá de Roland Garros. Si tu visita es principalmente para el tenis y planeas estar en el estadio todo el día, prioriza la proximidad al Roland Garros. Sin embargo, si quieres experimentar la vida parisina por las tardes y noches, considera alojarte en un barrio más céntrico y atmosférico.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              El distrito 16, aunque conveniente para el torneo, es principalmente residencial y carece del encanto bohemio de barrios como Le Marais o Saint-Germain. Un compromiso inteligente es alojarse en un área bien comunicada por la Línea 9 del metro, que te permite llegar rápidamente al estadio pero también acceder fácilmente al centro de París.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Planificación Inteligente</h3>
              <p className="text-gray-700">
                Considera reservar dos alojamientos diferentes: uno cerca del estadio para los días cuando tengas entradas de día completo, y otro en el centro de París para cuando no asistas al torneo o tengas entradas solo para sesiones nocturnas. Esto puede optimizar tanto tu experiencia en el torneo como tu experiencia en París.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Errores Comunes al Reservar Alojamiento</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Evita estos errores frecuentes que cometen los visitantes de Roland Garros:
            </p>

            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-3">✗</span>
                <div><strong className="text-gray-900">Esperar demasiado para reservar:</strong> Los mejores hoteles se agotan 4-6 meses antes del torneo.</div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-3">✗</span>
                <div><strong className="text-gray-900">Enfocarse solo en el precio:</strong> Un hotel barato pero mal ubicado puede costar más en tiempo y transporte.</div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-3">✗</span>
                <div><strong className="text-gray-900">Ignorar las reseñas:</strong> Las fotos pueden ser engañosas; lee comentarios recientes sobre limpieza, ruido y calidad real.</div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-3">✗</span>
                <div><strong className="text-gray-900">No verificar el acceso al transporte:</strong> "Cerca del metro" puede significar 15 minutos caminando en algunas áreas.</div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-3">✗</span>
                <div><strong className="text-gray-900">No considerar políticas de cancelación:</strong> Las circunstancias pueden cambiar; la flexibilidad vale la pena.</div>
              </li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Alternativas Creativas de Alojamiento</h2>

            <h3 className="text-2xl font-bold mb-4 text-gray-900 mt-8">Intercambio de Casas</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Plataformas de intercambio de casas como HomeExchange pueden ofrecer opciones únicas y económicas, especialmente si tienes una propiedad para intercambiar. Algunos parisinos que viajan durante Roland Garros están dispuestos a intercambiar sus apartamentos.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-gray-900 mt-8">Hoteles en las Afueras con Buen Transporte</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Ciudades periféricas como Boulogne-Billancourt, Issy-les-Moulineaux o Neuilly-sur-Seine ofrecen hoteles más asequibles con excelente conexión al estadio. Algunas incluso están más cerca del Roland Garros que muchos hoteles del centro de París.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Recursos para Encontrar el Alojamiento Perfecto</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Para encontrar y comparar alojamientos eficientemente:
            </p>

            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-orange-600 font-bold mr-3">→</span>
                <div><strong className="text-gray-900">Booking.com:</strong> Excelente variedad de hoteles con mapas interactivos y filtros detallados.</div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 font-bold mr-3">→</span>
                <div><strong className="text-gray-900">Google Maps:</strong> Usa la función de medir distancia para calcular exactamente qué tan lejos está un hotel del estadio o del metro.</div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 font-bold mr-3">→</span>
                <div><strong className="text-gray-900">Foros de Roland Garros:</strong> Otros aficionados comparten sus experiencias y recomendaciones de alojamiento.</div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 font-bold mr-3">→</span>
                <div><strong className="text-gray-900">Comparadores de precios:</strong> Trivago o Kayak pueden ayudarte a encontrar las mejores tarifas.</div>
              </li>
            </ul>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Recomendación Final</h3>
              <p className="text-gray-700 mb-4">
                El alojamiento perfecto para Roland Garros equilibra tres factores: proximidad al estadio, acceso al transporte público y precio. No existe una respuesta única para todos; depende de tu presupuesto, prioridades y estilo de viaje.
              </p>
              <p className="text-gray-700">
                Nuestra recomendación general: busca hoteles en el distrito 15 o 16 cerca de la Línea 9 del metro, reserva con 4-6 meses de anticipación, y prioriza hoteles con buenas reseñas sobre limpieza y ubicación real.
              </p>
            </div>

          </div>
        </article>

        {/* Call to Action - Subpages */}
        <section className="w-full py-10">
          <div className="flex flex-col gap-6 text-center">
            <h2 className="text-[#1d110c] text-3xl font-bold">
              Explora Nuestras Guías Detalladas
            </h2>
            <p className="text-[#1d110c] text-lg">
              Profundiza en aspectos específicos del alojamiento para Roland Garros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <Link
              href="/alojamiento-paris/hoteles-cerca"
              className="card-hover flex flex-col gap-4 rounded-xl border border-[#ead5cd] bg-white p-6"
            >
              <span className="material-symbols-outlined text-primary" style={{fontSize: '32px'}}>hotel</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#1d110c] text-base font-bold">Hoteles Cerca del Estadio</h3>
                <p className="text-[#a15d45] text-sm font-normal">
                  Análisis detallado de hoteles por zonas, con rangos de precio y distancias exactas
                </p>
              </div>
            </Link>

            <Link
              href="/alojamiento-paris/mejores-barrios"
              className="card-hover flex flex-col gap-4 rounded-xl border border-[#ead5cd] bg-white p-6"
            >
              <span className="material-symbols-outlined text-primary" style={{fontSize: '32px'}}>map</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#1d110c] text-base font-bold">Mejores Barrios para Alojarse</h3>
                <p className="text-[#a15d45] text-sm font-normal">
                  Guía completa de los distritos de París más convenientes para tu estancia
                </p>
              </div>
            </Link>

            <Link
              href="/alojamiento-paris/consejos-reserva"
              className="card-hover flex flex-col gap-4 rounded-xl border border-[#ead5cd] bg-white p-6"
            >
              <span className="material-symbols-outlined text-primary" style={{fontSize: '32px'}}>lightbulb</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#1d110c] text-base font-bold">Consejos de Reserva</h3>
                <p className="text-[#a15d45] text-sm font-normal">
                  Estrategias para reservar en el momento adecuado y conseguir el mejor precio
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="w-full py-10">
          <h2 className="text-[#1d110c] text-3xl font-bold mb-8 text-center">
            Otras Guías Útiles para tu Visita
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/guia-completa/como-llegar"
              className="card-hover flex gap-4 rounded-xl border border-[#ead5cd] bg-white p-4"
            >
              <span className="material-symbols-outlined text-primary" style={{fontSize: '32px'}}>train</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#1d110c] text-base font-bold">Cómo Llegar a Roland Garros</h3>
                <p className="text-[#a15d45] text-sm font-normal">Transporte desde tu hotel al estadio</p>
              </div>
            </Link>

            <Link
              href="/entradas-roland-garros-2026"
              className="card-hover flex gap-4 rounded-xl border border-[#ead5cd] bg-white p-4"
            >
              <span className="material-symbols-outlined text-primary" style={{fontSize: '32px'}}>confirmation_number</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#1d110c] text-base font-bold">Entradas y Precios</h3>
                <p className="text-[#a15d45] text-sm font-normal">Tipos de entradas disponibles</p>
              </div>
            </Link>

            <Link
              href="/calendario-roland-garros-2026"
              className="card-hover flex gap-4 rounded-xl border border-[#ead5cd] bg-white p-4"
            >
              <span className="material-symbols-outlined text-primary" style={{fontSize: '32px'}}>calendar_month</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#1d110c] text-base font-bold">Calendario 2026</h3>
                <p className="text-[#a15d45] text-sm font-normal">Fechas de cada ronda</p>
              </div>
            </Link>

            <Link
              href="/preguntas-frecuentes"
              className="card-hover flex gap-4 rounded-xl border border-[#ead5cd] bg-white p-4"
            >
              <span className="material-symbols-outlined text-primary" style={{fontSize: '32px'}}>quiz</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#1d110c] text-base font-bold">Preguntas Frecuentes</h3>
                <p className="text-[#a15d45] text-sm font-normal">Respuestas a todas tus dudas</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Preguntas Frecuentes */}
        <section className="w-full py-10">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Preguntas Frecuentes sobre Alojamiento</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <GoalTicketsCTA />
      </div>
    </div>
  )
}
