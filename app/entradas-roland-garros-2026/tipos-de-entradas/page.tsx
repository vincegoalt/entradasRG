import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { FAQSchema } from '@/components/seo/FAQSchema'

export const metadata: Metadata = {
  title: 'Tipos de Entradas Roland Garros 2026: Ground Pass, Individuales y Paquetes',
  description: 'Guía completa de todos los tipos de entradas para Roland Garros 2026: ground pass, entradas individuales, sesiones nocturnas, paquetes premium y más.',
  keywords: [
    'tipos entradas roland garros',
    'roland garros ground pass',
    'entradas individuales roland garros',
    'paquetes roland garros',
    'sesiones nocturnas roland garros',
    'entradas vip roland garros'
  ],
  openGraph: {
    title: 'Tipos de Entradas Roland Garros 2026: Guía Completa',
    description: 'Ground pass, entradas individuales, sesiones nocturnas y paquetes premium explicados en detalle.',
    type: 'article',
    url: 'https://entradasrolandgarros.com/entradas-roland-garros-2026/tipos-de-entradas',
  },
  alternates: {
    canonical: 'https://entradasrolandgarros.com/entradas-roland-garros-2026/tipos-de-entradas',
  },
}

const faqs = [
  {
    question: '¿Cuál es la diferencia entre ground pass y entrada individual?',
    answer: 'El ground pass te da acceso a todas las pistas exteriores pero no a las tres principales (Philippe-Chatrier, Suzanne-Lenglen, Simonne-Mathieu). Una entrada individual te asigna un asiento específico en una pista principal e incluye acceso ground pass el mismo día.'
  },
  {
    question: '¿Puedo entrar a Philippe-Chatrier con un ground pass?',
    answer: 'No, el ground pass no da acceso a las tres pistas principales: Philippe-Chatrier, Suzanne-Lenglen y Simonne-Mathieu. Necesitas una entrada individual específica para esas pistas.'
  },
  {
    question: '¿Las sesiones nocturnas son más caras?',
    answer: 'Las sesiones nocturnas tienen precios similares o ligeramente superiores a las sesiones diurnas del mismo día. Sin embargo, ofrecen una experiencia única bajo las luces con el techo retráctil si es necesario.'
  },
  {
    question: '¿Qué incluyen los paquetes de hospitalidad?',
    answer: 'Los paquetes de hospitalidad típicamente incluyen asientos premium, acceso a salones VIP, comida y bebida gourmet, servicio de catering, y en algunos casos estacionamiento exclusivo. Los precios comienzan desde €500 por persona.'
  }
]

export default function TiposEntradasPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-8">
          <div className="container mx-auto px-4">
            <Breadcrumbs
              items={[
                { name: 'Entradas Roland Garros 2026', url: 'https://entradasrolandgarros.com/entradas-roland-garros-2026' },
                { name: 'Tipos de Entradas', url: 'https://entradasrolandgarros.com/entradas-roland-garros-2026/tipos-de-entradas' }
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Tipos de Entradas Roland Garros 2026
              </h1>
              <p className="text-xl md:text-2xl text-orange-100">
                Ground pass, entradas individuales, sesiones nocturnas y paquetes premium explicados en detalle
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">

              {/* Introduction */}
              <section className="mb-12">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Roland Garros ofrece diversos tipos de entradas diseñadas para adaptarse a diferentes presupuestos y
                  preferencias. Desde el económico ground pass que te permite explorar múltiples pistas, hasta paquetes
                  premium con experiencias VIP, entender cada opción te ayudará a elegir la entrada perfecta para tu visita.
                </p>
              </section>

              {/* Ground Pass */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  1. Ground Pass (Entrada General)
                </h2>

                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">La Opción con Mejor Valor</h3>
                    <span className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold">
                      €35-85
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    El ground pass es la forma más popular y económica de experimentar Roland Garros, especialmente durante
                    la primera semana del torneo cuando hay más partidos programados en las pistas exteriores.
                  </p>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900">¿Qué Incluye el Ground Pass?</h3>
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-lg mb-3 text-green-700">Acceso Incluido</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Todas las pistas exteriores (6-18)</li>
                        <li>• Zonas de calentamiento de jugadores</li>
                        <li>• Área de práctica</li>
                        <li>• Village (zona de entretenimiento)</li>
                        <li>• Tiendas y restaurantes</li>
                        <li>• Pantallas gigantes</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-3 text-red-700">No Incluye</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Philippe-Chatrier (Pista Central)</li>
                        <li>• Suzanne-Lenglen (Pista 2)</li>
                        <li>• Simonne-Mathieu (Pista 3)</li>
                        <li>• Palcos VIP</li>
                        <li>• Áreas premium</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900">Precios del Ground Pass por Semana</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-gray-300">
                    <thead className="bg-green-600 text-white">
                      <tr>
                        <th className="py-3 px-4 text-left">Periodo</th>
                        <th className="py-3 px-4 text-left">Precio</th>
                        <th className="py-3 px-4 text-left">Mejor Para</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 px-4 font-semibold">Primera Semana (Rondas 1-3)</td>
                        <td className="py-3 px-4">€35-55</td>
                        <td className="py-3 px-4">Máxima cantidad de partidos</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-4 font-semibold">Segunda Semana (Octavos/Cuartos)</td>
                        <td className="py-3 px-4">€55-75</td>
                        <td className="py-3 px-4">Mejor calidad de tenis</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold">Finales (Semifinales/Finales)</td>
                        <td className="py-3 px-4">€75-85</td>
                        <td className="py-3 px-4">Ambiente de finales</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                  <h4 className="font-bold text-lg mb-2 text-gray-900">Consejo Pro</h4>
                  <p className="text-gray-700">
                    El ground pass ofrece el mejor valor durante la primera semana cuando puedes ver hasta 50+ partidos en
                    un solo día en las pistas exteriores. Es ideal para verdaderos fanáticos del tenis que quieren maximizar
                    la cantidad de tenis que ven por euro gastado.
                  </p>
                </div>

                <Link
                  href="/entradas-roland-garros-2026/ground-pass"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Guía Completa del Ground Pass →
                </Link>
              </section>

              {/* Entradas Individuales */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  2. Entradas Individuales para Pistas Principales
                </h2>

                <p className="text-gray-700 mb-6">
                  Las entradas individuales te aseguran un asiento asignado en una de las tres pistas principales del torneo.
                  Cada entrada también incluye acceso ground pass el mismo día, permitiéndote explorar el resto del complejo.
                </p>

                {/* Philippe-Chatrier */}
                <div className="bg-white border-2 border-orange-300 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Philippe-Chatrier (Pista Central)</h3>
                  <p className="text-gray-700 mb-4">
                    La pista más emblemática de Roland Garros con capacidad para 15,225 espectadores. Equipada con techo
                    retráctil desde 2020, alberga los partidos más importantes incluyendo todas las finales de Grand Slam.
                  </p>

                  <h4 className="font-bold text-lg mb-3 text-gray-900">Categorías de Asientos</h4>
                  <div className="space-y-3 mb-4">
                    <div className="bg-orange-50 p-4 rounded">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold">Categoría 1 (Oro)</span>
                        <span className="text-orange-600 font-bold">€150-540</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Asientos centrales, filas bajas, vistas perfectas. Los más demandados y caros.
                      </p>
                    </div>

                    <div className="bg-orange-50 p-4 rounded">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold">Categoría 2 (Plata)</span>
                        <span className="text-orange-600 font-bold">€100-350</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Laterales bajos o centrales altos. Excelente compromiso calidad-precio.
                      </p>
                    </div>

                    <div className="bg-orange-50 p-4 rounded">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold">Categoría 3 (Bronce)</span>
                        <span className="text-orange-600 font-bold">€65-250</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Laterales altos o detrás de las líneas de fondo. Vistas completas a precio más accesible.
                      </p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                    <p className="text-gray-700">
                      <strong>Nota:</strong> Los precios varían significativamente según la ronda. Las finales pueden costar
                      más del triple que las primeras rondas para asientos equivalentes.
                    </p>
                  </div>
                </div>

                {/* Suzanne-Lenglen */}
                <div className="bg-white border-2 border-blue-300 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Suzanne-Lenglen (Pista 2)</h3>
                  <p className="text-gray-700 mb-4">
                    Segunda pista más grande con capacidad para 10,068 espectadores. Alberga partidos de alto nivel y
                    semifinales ocasionales. Ambiente más íntimo que Philippe-Chatrier.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-blue-50 p-4 rounded">
                      <div className="font-bold mb-2">Primera Semana</div>
                      <div className="text-2xl text-blue-600 font-bold">€50-180</div>
                      <div className="text-sm text-gray-600 mt-1">Rondas 1-3</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded">
                      <div className="font-bold mb-2">Rondas Finales</div>
                      <div className="text-2xl text-blue-600 font-bold">€90-320</div>
                      <div className="text-sm text-gray-600 mt-1">Cuartos y Semifinales</div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded">
                    <p className="text-gray-700">
                      <strong>Ventaja:</strong> Suzanne-Lenglen ofrece una excelente relación calidad-precio. Verás partidos
                      de top 20 a precios 20-30% más bajos que Philippe-Chatrier, y el ambiente suele ser más animado.
                    </p>
                  </div>
                </div>

                {/* Simonne-Mathieu */}
                <div className="bg-white border-2 border-green-300 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Simonne-Mathieu (Pista 3)</h3>
                  <p className="text-gray-700 mb-4">
                    La pista más reciente (inaugurada en 2019) con diseño único semi-enterrado y rodeado de invernaderos
                    botánicos. Capacidad para 5,000 espectadores en ambiente más íntimo.
                  </p>

                  <div className="bg-green-50 p-4 rounded mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold">Rango de Precios</span>
                      <span className="text-green-600 font-bold text-2xl">€45-200</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Dependiendo de la ronda y categoría de asiento
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded">
                    <p className="text-gray-700">
                      <strong>Experiencia Única:</strong> La arquitectura especial de Simonne-Mathieu la convierte en una de
                      las pistas más fotogénicas del circuito. Excelente opción para primeras visitas a precio moderado.
                    </p>
                  </div>
                </div>
              </section>

              {/* Sesiones Nocturnas */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  3. Sesiones Nocturnas
                </h2>

                <div className="bg-purple-50 border-2 border-purple-500 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">Partidos Bajo las Luces</h3>
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-lg font-bold">
                      €75-300
                    </span>
                  </div>
                  <p className="text-gray-700">
                    Introducidas en 2021, las sesiones nocturnas en Philippe-Chatrier ofrecen una experiencia completamente
                    diferente del tenis diurno tradicional. El partido comienza típicamente a las 21:00 horas.
                  </p>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900">Características Especiales</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-lg mb-3 text-purple-700">Ventajas</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Ambiente único e íntimo</li>
                      <li>• Temperaturas más frescas</li>
                      <li>• Iluminación espectacular</li>
                      <li>• Público más apasionado</li>
                      <li>• Menos multitudes en el complejo</li>
                      <li>• Experiencia cinematográfica</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-lg mb-3 text-gray-700">Consideraciones</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Solo un partido por sesión</li>
                      <li>• Puede terminar muy tarde</li>
                      <li>• Transporte nocturno limitado</li>
                      <li>• No incluye tenis diurno</li>
                      <li>• Mayor precio relativo</li>
                      <li>• Disponibilidad muy limitada</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
                  <h4 className="font-bold text-lg mb-2 text-gray-900">¿Vale la Pena?</h4>
                  <p className="text-gray-700">
                    Las sesiones nocturnas ofrecen una experiencia mágica e irrepetible. Si es tu primera vez en Roland Garros,
                    considera asistir a una sesión diurna para ver más tenis. Pero si ya has estado o eres un gran fanático,
                    una sesión nocturna es una experiencia que recordarás para siempre.
                  </p>
                </div>
              </section>

              {/* Paquetes y Hospitalidad */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  4. Paquetes de Hospitalidad y Experiencias Premium
                </h2>

                <p className="text-gray-700 mb-6">
                  Para quienes buscan una experiencia de lujo completa, Roland Garros ofrece diversos paquetes de hospitalidad
                  con servicios premium y acceso exclusivo. Estos paquetes son ideales para clientes corporativos o para
                  celebraciones especiales.
                </p>

                <div className="space-y-6">
                  {/* Premium Hospitality */}
                  <div className="bg-white border-2 border-amber-300 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">Hospitalidad Premium</h3>
                      <span className="bg-amber-600 text-white px-4 py-2 rounded-lg font-bold">
                        €500-2000+
                      </span>
                    </div>
                    <h4 className="font-bold mb-3 text-gray-900">Incluye:</h4>
                    <ul className="space-y-2 text-gray-700 mb-4">
                      <li>• Asientos premium en pistas principales</li>
                      <li>• Acceso a salones VIP con aire acondicionado</li>
                      <li>• Menú gastronómico de 3-5 platos</li>
                      <li>• Barra libre (champán, vinos, bebidas)</li>
                      <li>• Servicio de catering durante todo el día</li>
                      <li>• Recepción privada con otros invitados VIP</li>
                      <li>• Estacionamiento preferencial (según paquete)</li>
                    </ul>
                    <p className="text-gray-700 italic">
                      Disponible para días individuales o paquetes de múltiples días con descuento. Puedes{' '}
                      <a
                        href="https://goaltickets.com/es/collections/entradas-roland-garros-2026"
                        target="_blank"
                        rel="noopener"
                        className="text-orange-600 font-semibold hover:underline"
                      >
                        consultar precios en plataformas especializadas
                      </a>{' '}
                      para opciones de hospitalidad verificadas.
                    </p>
                  </div>

                  {/* Palcos Privados */}
                  <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">Palcos Privados (Loges)</h3>
                      <span className="bg-gray-700 text-white px-4 py-2 rounded-lg font-bold">
                        €5000-20000+
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Los palcos privados son la opción más exclusiva, generalmente reservados para patrocinadores corporativos
                      y VIPs. Ofrecen privacidad total, servicios personalizados y las mejores vistas del estadio.
                    </p>
                    <h4 className="font-bold mb-3 text-gray-900">Capacidad y Servicios:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Capacidad: 6-20 personas según el palco</li>
                      <li>• Mobiliario de lujo y pantallas privadas</li>
                      <li>• Chef privado y servicio de mayordomo</li>
                      <li>• Menú personalizable</li>
                      <li>• Asientos en terraza exterior del palco</li>
                    </ul>
                  </div>

                  {/* Paquetes Multi-Día */}
                  <div className="bg-white border-2 border-indigo-300 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Paquetes de Múltiples Días</h3>
                    <p className="text-gray-700 mb-4">
                      Paquetes diseñados para ver varias rondas del torneo con descuentos por volumen. Ideales para planificar
                      una semana completa en París.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-indigo-50 p-4 rounded">
                        <div className="font-bold mb-2">Paquete Primera Semana</div>
                        <div className="text-sm text-gray-600 mb-2">3-5 días consecutivos</div>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Ground pass o asientos asignados</li>
                          <li>• Descuento 10-15% vs. días individuales</li>
                          <li>• Ve el desarrollo del torneo</li>
                        </ul>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded">
                        <div className="font-bold mb-2">Paquete de Finales</div>
                        <div className="text-sm text-gray-600 mb-2">Últimos 3-4 días</div>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Incluye semifinales y finales</li>
                          <li>• Sujeto a lotería</li>
                          <li>• Premium pricing</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Entradas Especiales */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  5. Entradas Especiales y Descuentos
                </h2>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Entradas para Jóvenes</h3>
                    <p className="text-gray-700 mb-3">
                      Menores de 12 años pueden beneficiarse de precios reducidos en algunas categorías de entradas,
                      típicamente con descuentos del 30-50% sobre el precio adulto.
                    </p>
                    <div className="bg-blue-50 p-4 rounded">
                      <p className="text-sm text-gray-700">
                        <strong>Nota:</strong> Los niños menores de 4 años entran gratis si no ocupan asiento propio.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Entradas Accesibles (PMR)</h3>
                    <p className="text-gray-700 mb-3">
                      Espacios adaptados disponibles en todas las pistas principales para personas con movilidad reducida.
                      Un acompañante puede comprar entrada al mismo precio en el asiento contiguo.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Reserva anticipada recomendada</li>
                      <li>• Accesos facilitados en todo el recinto</li>
                      <li>• Baños adaptados cerca de cada pista</li>
                      <li>• Personal de asistencia disponible</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Grupos y Corporativos</h3>
                    <p className="text-gray-700">
                      Descuentos especiales disponibles para grupos de 10+ personas. Contacta directamente con el departamento
                      de ventas corporativas de la FFT para cotizaciones personalizadas y opciones de hospitalidad grupal.
                    </p>
                  </div>
                </div>
              </section>

              {/* Tabla Comparativa */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Comparación Rápida de Tipos de Entradas
                </h2>

                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-300">
                    <thead className="bg-orange-600 text-white">
                      <tr>
                        <th className="py-3 px-4 text-left">Tipo</th>
                        <th className="py-3 px-4 text-left">Precio</th>
                        <th className="py-3 px-4 text-left">Mejor Para</th>
                        <th className="py-3 px-4 text-left">Disponibilidad</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 px-4 font-semibold">Ground Pass</td>
                        <td className="py-3 px-4">€35-85</td>
                        <td className="py-3 px-4">Presupuesto, múltiples partidos</td>
                        <td className="py-3 px-4 text-green-600">Alta</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-4 font-semibold">Simonne-Mathieu</td>
                        <td className="py-3 px-4">€45-200</td>
                        <td className="py-3 px-4">Primera vez, precio moderado</td>
                        <td className="py-3 px-4 text-green-600">Media-Alta</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold">Suzanne-Lenglen</td>
                        <td className="py-3 px-4">€50-320</td>
                        <td className="py-3 px-4">Buen equilibrio calidad-precio</td>
                        <td className="py-3 px-4 text-yellow-600">Media</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-4 font-semibold">Philippe-Chatrier</td>
                        <td className="py-3 px-4">€65-540</td>
                        <td className="py-3 px-4">Experiencia completa Grand Slam</td>
                        <td className="py-3 px-4 text-orange-600">Baja</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold">Sesión Nocturna</td>
                        <td className="py-3 px-4">€75-300</td>
                        <td className="py-3 px-4">Experiencia única, fans dedicados</td>
                        <td className="py-3 px-4 text-red-600">Muy Baja</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-4 font-semibold">Hospitalidad Premium</td>
                        <td className="py-3 px-4">€500-2000+</td>
                        <td className="py-3 px-4">Lujo, clientes corporativos</td>
                        <td className="py-3 px-4 text-orange-600">Limitada</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Preguntas Frecuentes
                </h2>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-bold mb-2 text-gray-900">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Related Links */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Guías Relacionadas
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <Link
                    href="/entradas-roland-garros-2026/ground-pass"
                    className="block bg-green-50 border border-green-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Guía del Ground Pass</h3>
                    <p className="text-gray-700 mb-3">
                      Todo sobre cómo maximizar tu experiencia con el ground pass.
                    </p>
                    <span className="text-green-600 font-semibold">Leer más →</span>
                  </Link>

                  <Link
                    href="/entradas-roland-garros-2026/precios"
                    className="block bg-orange-50 border border-orange-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Precios Detallados</h3>
                    <p className="text-gray-700 mb-3">
                      Desglose completo de precios por ronda, pista y categoría.
                    </p>
                    <span className="text-orange-600 font-semibold">Leer más →</span>
                  </Link>

                  <Link
                    href="/entradas-roland-garros-2026/donde-comprar"
                    className="block bg-blue-50 border border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Dónde Comprar</h3>
                    <p className="text-gray-700 mb-3">
                      Canales oficiales y cómo evitar estafas en la compra.
                    </p>
                    <span className="text-blue-600 font-semibold">Leer más →</span>
                  </Link>

                  <Link
                    href="/entradas-roland-garros-2026/mejores-asientos"
                    className="block bg-purple-50 border border-purple-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Mejores Asientos</h3>
                    <p className="text-gray-700 mb-3">
                      Guía de asientos por pista y consideraciones de sol/sombra.
                    </p>
                    <span className="text-purple-600 font-semibold">Leer más →</span>
                  </Link>
                </div>
              </section>

            </div>
          </div>
        </article>

        {/* CTA */}
        <section className="py-12 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para Elegir tus Entradas?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link
                href="/entradas-roland-garros-2026"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-orange-50 transition-colors"
              >
                Volver a Guía Principal
              </Link>
              <Link
                href="/entradas-roland-garros-2026/donde-comprar"
                className="bg-orange-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-800 transition-colors border-2 border-white"
              >
                Ver Dónde Comprar
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
