import { Metadata } from 'next'
import Link from 'next/link'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { PageHero } from '@/components/ui/PageHero'
import { GoalTicketsCTA } from '@/components/ui/GoalTicketsCTA'

export const metadata: Metadata = {
  title: 'Entradas Premium Roland Garros 2026: Club des Loges, Hospitalidad y Paquetes Corporativos',
  description: 'Descubre los paquetes premium de Roland Garros 2026: Club des Loges, hospitalidad corporativa, Salon des Légendes y experiencias exclusivas. Precios, comparativa y cómo reservar.',
  keywords: [
    'entradas premium roland garros 2026',
    'club des loges roland garros',
    'hospitalidad corporativa roland garros',
    'paquetes premium roland garros',
    'salon des legendes roland garros',
    'corporate hospitality roland garros',
    'entradas corporativas roland garros',
    'experiencia premium roland garros'
  ],
  openGraph: {
    title: 'Entradas Premium Roland Garros 2026: Club des Loges y Hospitalidad Corporativa',
    description: 'Paquetes premium exclusivos para Roland Garros 2026: Club des Loges, hospitalidad, opciones corporativas y experiencias únicas.',
    type: 'article',
    url: 'https://entradasrolandgarros.com/entradas-roland-garros-2026/entradas-premium',
  },
  alternates: {
    canonical: 'https://entradasrolandgarros.com/entradas-roland-garros-2026/entradas-premium',
  },
}

const faqs = [
  {
    question: '¿Qué es el Club des Loges de Roland Garros?',
    answer: 'El Club des Loges es la experiencia más exclusiva de Roland Garros. Son palcos privados ubicados en la pista Philippe-Chatrier con capacidad para 8-12 personas, que incluyen catering gourmet preparado por chefs franceses de renombre, champán y vinos premium, terraza privada y un anfitrión dedicado. Es la opción preferida para eventos corporativos de alto nivel y celebraciones especiales.'
  },
  {
    question: '¿Cuánto cuesta un paquete premium para Roland Garros?',
    answer: 'Los precios varían según el nivel de experiencia. Los paquetes Village comienzan desde aproximadamente 500 EUR, los paquetes del Salon Roland Garros desde 800 EUR, el Salon des Légendes desde 1.200 EUR, y el Club des Loges desde 2.000 hasta más de 5.000 EUR por persona y día. Los paquetes corporativos para grupos oscilan entre 10.000 y 30.000+ EUR.'
  },
  {
    question: '¿Qué diferencia hay entre entradas VIP y premium?',
    answer: 'Las entradas VIP ofrecen acceso a lounges exclusivos y asientos de categoría 1-2. Los paquetes premium van más allá: incluyen experiencias gastronómicas completas con chefs privados, acceso a espacios como el Club des Loges o el Salon des Légendes, y servicios personalizados como anfitriones dedicados y terrazas privadas con vista a la pista.'
  },
  {
    question: '¿Se pueden reservar paquetes corporativos para grupos?',
    answer: 'Sí, Roland Garros ofrece paquetes corporativos diseñados para grupos de 8 a 20 personas o más. Incluyen palcos privados, experiencias de marca personalizadas, actividades de team building y menús a medida. Los precios comienzan desde 10.000 EUR para paquetes grupales básicos hasta más de 30.000 EUR para experiencias completas.'
  },
  {
    question: '¿Qué incluye un paquete de hospitalidad?',
    answer: 'Los paquetes de hospitalidad típicamente incluyen: entradas con asientos de categoría premium, almuerzo o cena gourmet con servicio de mesa, barra libre con champán y vinos seleccionados, acceso a espacios exclusivos de hospitalidad, y en paquetes superiores, encuentros con exjugadores legendarios y regalos conmemorativos.'
  },
  {
    question: '¿Cuándo debo reservar las entradas premium?',
    answer: 'Se recomienda reservar con 4 a 6 meses de antelación, especialmente para el Club des Loges y los días de semifinales y finales. Los paquetes corporativos para grupos grandes deben reservarse incluso antes, ya que la disponibilidad es muy limitada. Las jornadas entre semana suelen tener mayor disponibilidad.'
  },
  {
    question: '¿Los paquetes premium incluyen parking?',
    answer: 'Los paquetes del Club des Loges y algunos paquetes corporativos de alto nivel suelen incluir parking preferencial en las instalaciones de Roland Garros. Los paquetes de hospitalidad estándar (Salon Roland Garros, Village) generalmente no incluyen parking, aunque puede solicitarse como servicio adicional.'
  },
  {
    question: '¿Hay paquetes premium para la final de Roland Garros?',
    answer: 'Sí, existen paquetes premium para las finales, aunque son los más demandados y caros del torneo. Los precios del Club des Loges para la final pueden superar los 5.000 EUR por persona. Se recomienda reservar con la máxima antelación posible, ya que las plazas se agotan rápidamente.'
  }
]

export default function EntradasPremiumPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <PageHero
        title="Entradas Premium Roland Garros 2026"
        subtitle="Club des Loges, hospitalidad y paquetes corporativos exclusivos"
        image="/images/heroes/tennis-stadium.jpg"
        badge={{ icon: 'diamond', text: 'Experiencia Premium' }}
        primaryCta={{ text: 'Comprar Entradas Premium', href: 'https://goaltickets.com/es/collections/entradas-roland-garros-2026', icon: 'confirmation_number', external: true }}
      />

      <div className="min-h-screen bg-white">
        {/* Cross-link to VIP page */}
        <section className="bg-amber-50 border-b border-amber-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <p className="text-amber-900 text-sm sm:text-base">
              ¿Buscas información general sobre entradas VIP? Visita nuestra{' '}
              <Link href="/entradas-vip-roland-garros" className="font-semibold underline hover:text-amber-700">
                guía de entradas VIP
              </Link>.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Experiencias Premium en Roland Garros 2026
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Más allá de las entradas convencionales, Roland Garros ofrece una gama de experiencias premium
              diseñadas para quienes buscan lo mejor: desde el exclusivo Club des Loges hasta paquetes
              de hospitalidad corporativa a medida. Estas opciones combinan el mejor tenis del mundo con
              gastronomía francesa de primer nivel y servicios personalizados.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              En esta guía detallamos cada nivel de experiencia premium, sus precios, qué incluyen
              y cómo reservar para el torneo de 2026.
            </p>
          </div>
        </section>

        {/* Club des Loges */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Club des Loges: La Experiencia Más Exclusiva
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              El Club des Loges representa el pináculo de la exclusividad en Roland Garros. Ubicado en la
              icónica pista Philippe-Chatrier, ofrece palcos privados con las mejores vistas del torneo
              y un servicio absolutamente impecable.
            </p>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">¿Qué incluye?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700"><strong>Palcos privados</strong> con capacidad para 8-12 personas en Philippe-Chatrier</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700"><strong>Catering gourmet</strong> preparado por chefs franceses de renombre</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700"><strong>Champán y vinos premium</strong> seleccionados durante toda la jornada</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700"><strong>Asientos centrales premium</strong> con vista inmejorable a la pista</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700"><strong>Terraza privada</strong> con vistas panorámicas al recinto</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700"><strong>Anfitrión dedicado</strong> para atender todas las necesidades del grupo</span>
                </li>
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h4 className="font-bold text-gray-900 mb-2">Precio</h4>
                <p className="text-2xl font-bold text-green-700 mb-2">Desde 2.000 - 5.000+ EUR</p>
                <p className="text-gray-600 text-sm">Por persona y día. El precio varía según la ronda y la ubicación del palco.</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h4 className="font-bold text-gray-900 mb-2">Ideal para</h4>
                <p className="text-gray-700">Entretenimiento corporativo de alto nivel, celebraciones especiales, eventos de marca y clientes VIP.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Paquetes de Hospitalidad */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Paquetes de Hospitalidad
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Roland Garros ofrece varios niveles de paquetes de hospitalidad estructurados, cada uno
              diseñado para ofrecer una experiencia única combinando tenis y gastronomía francesa.
            </p>

            <div className="space-y-6">
              {/* Salon Roland Garros */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Salon Roland Garros</h3>
                  <span className="text-green-700 font-bold text-lg mt-2 sm:mt-0">Desde ~800 EUR</span>
                </div>
                <p className="text-gray-700 mb-4">
                  El paquete de hospitalidad clásico de Roland Garros. Incluye almuerzo o cena con servicio
                  de mesa en un salón elegante, junto con asientos de categoría 1-2 en las pistas principales.
                  Una excelente opción para quienes buscan una experiencia premium sin el coste del Club des Loges.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">Almuerzo/cena gourmet</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">Asientos Cat 1-2</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">Barra libre</span>
                </div>
              </div>

              {/* Salon des Légendes */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Salon des Légendes</h3>
                  <span className="text-green-700 font-bold text-lg mt-2 sm:mt-0">Desde ~1.200 EUR</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Una experiencia única que combina hospitalidad premium con la oportunidad de conocer a
                  excampeones de Roland Garros. Incluye una comida premium en un entorno exclusivo, encuentro
                  con leyendas del tenis y asientos de máxima categoría.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">Meet & Greet con leyendas</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">Cena premium</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">Asientos premium</span>
                </div>
              </div>

              {/* Village */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Paquetes Village</h3>
                  <span className="text-green-700 font-bold text-lg mt-2 sm:mt-0">Desde ~500 EUR</span>
                </div>
                <p className="text-gray-700 mb-4">
                  La opción más accesible dentro de las experiencias premium. Incluye acceso al Village de
                  Roland Garros, una zona exclusiva con catering ligero, bebidas y un ambiente social único.
                  Ideal como primer acercamiento a la hospitalidad del torneo.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">Acceso Village</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">Catering ligero</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">Ambiente exclusivo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Opciones Corporativas */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Opciones Corporativas
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Roland Garros es uno de los escenarios más prestigiosos del mundo para eventos corporativos.
              Los paquetes corporativos están diseñados para empresas que desean impresionar a clientes,
              premiar a empleados o fortalecer relaciones comerciales en un entorno incomparable.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Palcos Corporativos</h3>
                <p className="text-gray-700">Palcos privados para jornadas completas con capacidad de 8 a 20 personas. Incluyen catering, bebidas y servicio personalizado.</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Experiencias de Marca</h3>
                <p className="text-gray-700">Posibilidad de personalizar el espacio con branding corporativo, creando una experiencia única alineada con la imagen de tu empresa.</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Team Building</h3>
                <p className="text-gray-700">Actividades de team building durante el torneo: clínicas de tenis, tours privados por las instalaciones y encuentros con jugadores.</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Paquetes a Medida</h3>
                <p className="text-gray-700">Paquetes personalizados para grupos grandes con servicios adaptados a las necesidades específicas de cada empresa.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Precios Corporativos</h3>
              <p className="text-gray-700 mb-2">
                Los paquetes corporativos para grupos oscilan entre <strong>10.000 y 30.000+ EUR</strong> dependiendo
                del tamaño del grupo, el nivel de servicio y las jornadas seleccionadas.
              </p>
              <p className="text-gray-600 text-sm">
                Los precios incluyen palco privado, catering completo, bebidas premium y servicios de coordinación.
                Las finales y semifinales tienen un suplemento adicional.
              </p>
            </div>
          </div>
        </section>

        {/* Comparativa de niveles */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Comparativa de Niveles Premium
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Para ayudarte a elegir la experiencia adecuada, aquí tienes una comparativa detallada
              de los diferentes niveles de entradas premium disponibles en Roland Garros 2026.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="px-6 py-4 font-semibold text-sm">Característica</th>
                    <th className="px-6 py-4 font-semibold text-sm">Entrada VIP</th>
                    <th className="px-6 py-4 font-semibold text-sm">Club des Loges</th>
                    <th className="px-6 py-4 font-semibold text-sm">Hospitalidad Corporativa</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-medium text-gray-900">Asiento</td>
                    <td className="px-6 py-4 text-gray-700">Cat 1-2</td>
                    <td className="px-6 py-4 text-gray-700">Central Premium</td>
                    <td className="px-6 py-4 text-gray-700">Cat 1</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Catering</td>
                    <td className="px-6 py-4 text-gray-700">Lounge access</td>
                    <td className="px-6 py-4 text-gray-700">Chef privado</td>
                    <td className="px-6 py-4 text-gray-700">Menú gourmet</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-medium text-gray-900">Bebidas</td>
                    <td className="px-6 py-4 text-gray-700">Barra libre</td>
                    <td className="px-6 py-4 text-gray-700">Champán premium</td>
                    <td className="px-6 py-4 text-gray-700">Barra libre</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Acceso exclusivo</td>
                    <td className="px-6 py-4 text-gray-700">Lounge VIP</td>
                    <td className="px-6 py-4 text-gray-700">Terraza privada</td>
                    <td className="px-6 py-4 text-gray-700">Espacio privado</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-medium text-gray-900">Precio desde</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">~500 EUR</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">~2.000 EUR</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">~800 EUR/persona</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Cómo reservar */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Cómo Reservar Entradas Premium
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Las entradas premium para Roland Garros se pueden adquirir a través de varios canales oficiales
              y autorizados. Es importante elegir proveedores de confianza para garantizar la autenticidad.
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Proveedores Oficiales de la FFT</h3>
                <p className="text-gray-700">
                  La Federación Francesa de Tenis (FFT) gestiona directamente algunos paquetes de hospitalidad
                  a través de su web oficial. Es la opción más directa, aunque la disponibilidad puede ser limitada.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Revendedores Autorizados</h3>
                <p className="text-gray-700">
                  Existen agencias de hospitalidad deportiva autorizadas que ofrecen paquetes premium con
                  servicios adicionales como transfers, alojamiento y coordinación de eventos.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">GoalTickets para Compradores Internacionales</h3>
                <p className="text-gray-700">
                  Para compradores fuera de Francia, plataformas como GoalTickets ofrecen entradas premium
                  verificadas con garantía de autenticidad, atención en español y opciones de pago internacionales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Consejos para elegir */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Consejos para Elegir tu Experiencia Premium
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Reserva con antelación</h3>
                <p className="text-gray-700">
                  Reserva con 4-6 meses de antelación para asegurar disponibilidad, especialmente para
                  el Club des Loges y las jornadas de finales.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Elige la ronda adecuada</h3>
                <p className="text-gray-700">
                  Considera qué ronda del torneo se ajusta mejor a tus necesidades. Las primeras rondas
                  ofrecen más partidos por día y precios más accesibles.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Las finales son las más caras</h3>
                <p className="text-gray-700">
                  Las semifinales y finales tienen los precios más altos y menor disponibilidad.
                  Si el presupuesto es importante, considera cuartos de final como alternativa premium.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Entre semana, mejor valor</h3>
                <p className="text-gray-700">
                  Los paquetes premium entre semana suelen ofrecer mejor relación calidad-precio
                  y mayor disponibilidad que los fines de semana.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Preguntas Frecuentes sobre Entradas Premium
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GoalTickets CTA */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <GoalTicketsCTA />
          </div>
        </section>

        {/* Related Links */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Enlaces Relacionados
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/entradas-vip-roland-garros"
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-gray-900 mb-2">Entradas VIP</h3>
                <p className="text-gray-600 text-sm">Guía completa de entradas VIP y experiencias exclusivas.</p>
              </Link>
              <Link
                href="/entradas-roland-garros-2026"
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-gray-900 mb-2">Entradas 2026</h3>
                <p className="text-gray-600 text-sm">Toda la información sobre entradas para Roland Garros 2026.</p>
              </Link>
              <Link
                href="/entradas-roland-garros-2026/precios"
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-gray-900 mb-2">Precios</h3>
                <p className="text-gray-600 text-sm">Tabla completa de precios por ronda, pista y categoría.</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
