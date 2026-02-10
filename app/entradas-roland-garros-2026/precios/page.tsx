import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { FAQSchema } from '@/components/seo/FAQSchema'

export const metadata: Metadata = {
  title: 'Precios Entradas Roland Garros 2026: Guía Completa por Ronda y Asiento',
  description: 'Precios actualizados de entradas para Roland Garros 2026. Desglose completo por ronda, pista, categoría de asiento y consejos para encontrar la mejor opción según tu presupuesto.',
  keywords: [
    'precios entradas roland garros 2026',
    'precio ground pass roland garros',
    'cuanto cuesta entrada roland garros',
    'roland garros entradas precios',
    'tickets roland garros precio',
    'precio final roland garros'
  ],
  openGraph: {
    title: 'Precios Entradas Roland Garros 2026: Guía Completa',
    description: 'Desglose detallado de precios de entradas para Roland Garros 2026 por ronda, pista y categoría.',
    type: 'article',
    url: 'https://entradasrolandgarros.com/entradas-roland-garros-2026/precios',
  },
  alternates: {
    canonical: 'https://entradasrolandgarros.com/entradas-roland-garros-2026/precios',
  },
}

const faqs = [
  {
    question: '¿Cuánto cuesta la entrada más barata para Roland Garros?',
    answer: 'La entrada más económica es el ground pass para primera ronda, que cuesta aproximadamente €35-40. Esta entrada te da acceso a todas las pistas exteriores durante todo el día.'
  },
  {
    question: '¿Cuánto cuestan las entradas para la final de Roland Garros?',
    answer: 'Las entradas para las finales en Philippe-Chatrier van desde €150 para asientos en categoría 3 (alta y lateral) hasta €540 para asientos categoría 1 (centrales bajos). Las entradas para finales se asignan principalmente por lotería.'
  },
  {
    question: '¿Los precios incluyen impuestos y comisiones?',
    answer: 'Los precios oficiales de la FFT generalmente incluyen todos los impuestos. No hay comisiones adicionales cuando compras directamente en rolandgarros.com. Desconfía de revendedores que añaden comisiones excesivas.'
  },
  {
    question: '¿Hay descuentos para niños o estudiantes?',
    answer: 'Los niños menores de 12 años pueden beneficiarse de precios reducidos (típicamente 30-50% de descuento) en algunas categorías. Los niños menores de 4 años entran gratis si no ocupan asiento. No suelen existir descuentos específicos para estudiantes.'
  }
]

export default function PreciosPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-8">
          <div className="container mx-auto px-4">
            <Breadcrumbs
              items={[
                { name: 'Entradas Roland Garros 2026', url: 'https://entradasrolandgarros.com/entradas-roland-garros-2026' },
                { name: 'Precios', url: 'https://entradasrolandgarros.com/entradas-roland-garros-2026/precios' }
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Precios Entradas Roland Garros 2026
              </h1>
              <p className="text-xl md:text-2xl text-orange-100">
                Desglose completo de precios por ronda, pista y categoría de asiento
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">

              {/* Introduction */}
              <section className="mb-12 max-w-4xl mx-auto">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Los precios de las entradas para Roland Garros varían significativamente según la ronda del torneo,
                  la pista, y la categoría del asiento. Esta guía te proporciona un desglose completo y actualizado de
                  todos los rangos de precios para ayudarte a planificar tu presupuesto y elegir la mejor opción para
                  tu visita al torneo 2026.
                </p>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Importante: Precios Aproximados</h3>
                  <p className="text-gray-700">
                    Los precios mostrados en esta guía son aproximados basados en ediciones anteriores de Roland Garros.
                    Los precios oficiales para 2026 se anunciarán cuando se abra la venta de entradas (típicamente en
                    febrero-marzo 2026). Los precios reales pueden variar ligeramente, pero estas estimaciones te dan
                    una excelente referencia para la planificación presupuestaria.
                  </p>
                </div>
              </section>

              {/* GoalTickets CTA */}
              <section className="mb-12 max-w-4xl mx-auto">
                <div className="bg-[#fcf9f8] border border-[#ead5cd] rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary mt-1" style={{fontSize: '28px'}}>price_check</span>
                    <div>
                      <p className="text-[#1d110c] text-sm mb-2">
                        Los precios oficiales son orientativos y dependen de disponibilidad. Puedes consultar precios reales y asientos disponibles en{' '}
                        <a
                          href="https://goaltickets.com/es/collections/entradas-abierto-francia-2026"
                          target="_blank"
                          rel="noopener"
                          className="text-primary font-semibold hover:underline"
                        >
                          GoalTickets
                        </a>, una plataforma internacional especializada en entradas deportivas con garantía de autenticidad.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Resumen Rápido */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
                  Resumen Rápido de Rangos de Precio
                </h2>

                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center">
                    <div className="text-green-600 text-4xl mb-2">💰</div>
                    <div className="font-bold text-lg mb-2">Económico</div>
                    <div className="text-3xl font-bold text-green-600 mb-1">€35-55</div>
                    <div className="text-sm text-gray-600">Ground Pass Primera Semana</div>
                  </div>

                  <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-6 text-center">
                    <div className="text-blue-600 text-4xl mb-2">💵</div>
                    <div className="font-bold text-lg mb-2">Moderado</div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">€50-150</div>
                    <div className="text-sm text-gray-600">Pistas Principales Primera Semana</div>
                  </div>

                  <div className="bg-orange-50 border-2 border-orange-500 rounded-lg p-6 text-center">
                    <div className="text-orange-600 text-4xl mb-2">💳</div>
                    <div className="font-bold text-lg mb-2">Premium</div>
                    <div className="text-3xl font-bold text-orange-600 mb-1">€150-350</div>
                    <div className="text-sm text-gray-600">Rondas Finales Buenos Asientos</div>
                  </div>

                  <div className="bg-purple-50 border-2 border-purple-500 rounded-lg p-6 text-center">
                    <div className="text-purple-600 text-4xl mb-2">💎</div>
                    <div className="font-bold text-lg mb-2">Lujo</div>
                    <div className="text-3xl font-bold text-purple-600 mb-1">€350-540+</div>
                    <div className="text-sm text-gray-600">Finales Asientos Premium</div>
                  </div>
                </div>
              </section>

              {/* Ground Pass Prices */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Precios Ground Pass por Ronda
                </h2>

                <p className="text-gray-700 mb-6 max-w-4xl">
                  El ground pass ofrece el mejor valor, especialmente durante la primera semana. Los precios aumentan
                  progresivamente a medida que avanza el torneo, pero el número de partidos en pistas exteriores disminuye.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border-2 border-green-300 rounded-lg overflow-hidden">
                    <thead className="bg-green-600 text-white">
                      <tr>
                        <th className="py-4 px-6 text-left">Ronda</th>
                        <th className="py-4 px-6 text-left">Días Típicos</th>
                        <th className="py-4 px-6 text-left">Precio</th>
                        <th className="py-4 px-6 text-left">Valor</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-green-50">
                        <td className="py-4 px-6">
                          <div className="font-bold">Primera Ronda</div>
                          <div className="text-sm text-gray-600">Día 1-3</div>
                        </td>
                        <td className="py-4 px-6">Dom-Mar</td>
                        <td className="py-4 px-6">
                          <div className="text-2xl font-bold text-green-600">€35-40</div>
                        </td>
                        <td className="py-4 px-6">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                            Excelente
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-green-50">
                        <td className="py-4 px-6">
                          <div className="font-bold">Segunda Ronda</div>
                          <div className="text-sm text-gray-600">Día 4-6</div>
                        </td>
                        <td className="py-4 px-6">Mié-Vie</td>
                        <td className="py-4 px-6">
                          <div className="text-2xl font-bold text-green-600">€40-50</div>
                        </td>
                        <td className="py-4 px-6">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                            Muy Bueno
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-green-50">
                        <td className="py-4 px-6">
                          <div className="font-bold">Tercera Ronda</div>
                          <div className="text-sm text-gray-600">Día 7-8</div>
                        </td>
                        <td className="py-4 px-6">Sáb-Lun</td>
                        <td className="py-4 px-6">
                          <div className="text-2xl font-bold text-green-600">€45-55</div>
                        </td>
                        <td className="py-4 px-6">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                            Bueno
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-green-50">
                        <td className="py-4 px-6">
                          <div className="font-bold">Octavos de Final</div>
                          <div className="text-sm text-gray-600">Día 9-11</div>
                        </td>
                        <td className="py-4 px-6">Lun-Mié</td>
                        <td className="py-4 px-6">
                          <div className="text-2xl font-bold text-green-600">€55-65</div>
                        </td>
                        <td className="py-4 px-6">
                          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                            Moderado
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-green-50">
                        <td className="py-4 px-6">
                          <div className="font-bold">Cuartos de Final</div>
                          <div className="text-sm text-gray-600">Día 12-13</div>
                        </td>
                        <td className="py-4 px-6">Mié-Jue</td>
                        <td className="py-4 px-6">
                          <div className="text-2xl font-bold text-green-600">€65-75</div>
                        </td>
                        <td className="py-4 px-6">
                          <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                            Limitado
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-green-50">
                        <td className="py-4 px-6">
                          <div className="font-bold">Semifinales/Finales</div>
                          <div className="text-sm text-gray-600">Día 14-15</div>
                        </td>
                        <td className="py-4 px-6">Jue-Dom</td>
                        <td className="py-4 px-6">
                          <div className="text-2xl font-bold text-green-600">€75-85</div>
                        </td>
                        <td className="py-4 px-6">
                          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                            Bajo
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Recomendación de Valor</h3>
                  <p className="text-gray-700">
                    El ground pass ofrece el mejor retorno de inversión durante las <strong>primeras dos rondas</strong> (días 1-6),
                    cuando puedes ver 30-50+ partidos por día. A partir de octavos de final, considera invertir en una entrada
                    individual para pista principal en lugar de ground pass.
                  </p>
                </div>
              </section>

              {/* Philippe-Chatrier Prices */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Philippe-Chatrier (Pista Central): Precios por Categoría
                </h2>

                <p className="text-gray-700 mb-6 max-w-4xl">
                  Philippe-Chatrier es la pista central de Roland Garros. Los precios varían significativamente según
                  la categoría del asiento (oro, plata, bronce) y la ronda del torneo.
                </p>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Categoría 1 (Oro) - Asientos Centrales Bajos</h3>
                  <p className="text-gray-600 mb-4">Mejores asientos del estadio: central, filas bajas, vistas perfectas.</p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border-2 border-orange-300 rounded-lg overflow-hidden">
                      <thead className="bg-orange-600 text-white">
                        <tr>
                          <th className="py-3 px-6 text-left">Ronda</th>
                          <th className="py-3 px-6 text-left">Sesión Diurna</th>
                          <th className="py-3 px-6 text-left">Sesión Nocturna</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="py-3 px-6 font-semibold">Primera/Segunda Ronda</td>
                          <td className="py-3 px-6 text-orange-600 font-bold">€190-250</td>
                          <td className="py-3 px-6 text-purple-600 font-bold">€220-300</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="py-3 px-6 font-semibold">Tercera Ronda</td>
                          <td className="py-3 px-6 text-orange-600 font-bold">€220-280</td>
                          <td className="py-3 px-6 text-purple-600 font-bold">€250-320</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-6 font-semibold">Octavos de Final</td>
                          <td className="py-3 px-6 text-orange-600 font-bold">€280-360</td>
                          <td className="py-3 px-6 text-purple-600 font-bold">N/A</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="py-3 px-6 font-semibold">Cuartos de Final</td>
                          <td className="py-3 px-6 text-orange-600 font-bold">€350-420</td>
                          <td className="py-3 px-6 text-purple-600 font-bold">N/A</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-6 font-semibold">Semifinales</td>
                          <td className="py-3 px-6 text-orange-600 font-bold">€420-480</td>
                          <td className="py-3 px-6 text-purple-600 font-bold">N/A</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="py-3 px-6 font-semibold">Final</td>
                          <td className="py-3 px-6 text-orange-600 font-bold">€480-540</td>
                          <td className="py-3 px-6 text-purple-600 font-bold">N/A</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Categoría 2 (Plata) - Laterales Bajos o Centrales Altos</h3>
                  <p className="text-gray-600 mb-4">Excelente compromiso entre precio y vista. La opción más popular.</p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border-2 border-blue-300 rounded-lg overflow-hidden">
                      <thead className="bg-blue-600 text-white">
                        <tr>
                          <th className="py-3 px-6 text-left">Ronda</th>
                          <th className="py-3 px-6 text-left">Sesión Diurna</th>
                          <th className="py-3 px-6 text-left">Sesión Nocturna</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="py-3 px-6 font-semibold">Primera/Segunda Ronda</td>
                          <td className="py-3 px-6 text-blue-600 font-bold">€120-180</td>
                          <td className="py-3 px-6 text-purple-600 font-bold">€150-210</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="py-3 px-6 font-semibold">Tercera Ronda</td>
                          <td className="py-3 px-6 text-blue-600 font-bold">€150-200</td>
                          <td className="py-3 px-6 text-purple-600 font-bold">€180-230</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-6 font-semibold">Octavos de Final</td>
                          <td className="py-3 px-6 text-blue-600 font-bold">€190-260</td>
                          <td className="py-3 px-6 text-purple-600 font-bold">N/A</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="py-3 px-6 font-semibold">Cuartos de Final</td>
                          <td className="py-3 px-6 text-blue-600 font-bold">€250-320</td>
                          <td className="py-3 px-6 text-purple-600 font-bold">N/A</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-6 font-semibold">Semifinales</td>
                          <td className="py-3 px-6 text-blue-600 font-bold">€320-380</td>
                          <td className="py-3 px-6 text-purple-600 font-bold">N/A</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="py-3 px-6 font-semibold">Final</td>
                          <td className="py-3 px-6 text-blue-600 font-bold">€360-420</td>
                          <td className="py-3 px-6 text-purple-600 font-bold">N/A</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Categoría 3 (Bronce) - Laterales Altos o Detrás de Líneas</h3>
                  <p className="text-gray-600 mb-4">Opción más económica para pista central. Vistas completas aunque más alejadas.</p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
                      <thead className="bg-gray-600 text-white">
                        <tr>
                          <th className="py-3 px-6 text-left">Ronda</th>
                          <th className="py-3 px-6 text-left">Sesión Diurna</th>
                          <th className="py-3 px-6 text-left">Sesión Nocturna</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="py-3 px-6 font-semibold">Primera/Segunda Ronda</td>
                          <td className="py-3 px-6 text-gray-600 font-bold">€65-120</td>
                          <td className="py-3 px-6 text-purple-600 font-bold">€75-140</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="py-3 px-6 font-semibold">Tercera Ronda</td>
                          <td className="py-3 px-6 text-gray-600 font-bold">€85-140</td>
                          <td className="py-3 px-6 text-purple-600 font-bold">€95-160</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-6 font-semibold">Octavos de Final</td>
                          <td className="py-3 px-6 text-gray-600 font-bold">€120-190</td>
                          <td className="py-3 px-6 text-purple-600 font-bold">N/A</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="py-3 px-6 font-semibold">Cuartos de Final</td>
                          <td className="py-3 px-6 text-gray-600 font-bold">€170-240</td>
                          <td className="py-3 px-6 text-purple-600 font-bold">N/A</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-6 font-semibold">Semifinales</td>
                          <td className="py-3 px-6 text-gray-600 font-bold">€230-300</td>
                          <td className="py-3 px-6 text-purple-600 font-bold">N/A</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="py-3 px-6 font-semibold">Final</td>
                          <td className="py-3 px-6 text-gray-600 font-bold">€280-350</td>
                          <td className="py-3 px-6 text-purple-600 font-bold">N/A</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Otras Pistas */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Suzanne-Lenglen y Simonne-Mathieu: Precios
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Suzanne-Lenglen */}
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Suzanne-Lenglen</h3>
                    <p className="text-gray-600 mb-4">Segunda pista más grande (10,068 espectadores). Excelente valor.</p>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden text-sm">
                        <thead className="bg-blue-500 text-white">
                          <tr>
                            <th className="py-2 px-3 text-left">Ronda</th>
                            <th className="py-2 px-3 text-left">Precio</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="py-2 px-3 font-semibold">Primeras Rondas</td>
                            <td className="py-2 px-3 text-blue-600 font-bold">€50-180</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-2 px-3 font-semibold">Tercera Ronda</td>
                            <td className="py-2 px-3 text-blue-600 font-bold">€70-200</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3 font-semibold">Octavos/Cuartos</td>
                            <td className="py-2 px-3 text-blue-600 font-bold">€90-280</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-2 px-3 font-semibold">Semifinales</td>
                            <td className="py-2 px-3 text-blue-600 font-bold">€110-320</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Simonne-Mathieu */}
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Simonne-Mathieu</h3>
                    <p className="text-gray-600 mb-4">Tercera pista principal (5,000 espectadores). Diseño único.</p>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden text-sm">
                        <thead className="bg-green-500 text-white">
                          <tr>
                            <th className="py-2 px-3 text-left">Ronda</th>
                            <th className="py-2 px-3 text-left">Precio</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="py-2 px-3 font-semibold">Primeras Rondas</td>
                            <td className="py-2 px-3 text-green-600 font-bold">€45-150</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-2 px-3 font-semibold">Tercera Ronda</td>
                            <td className="py-2 px-3 text-green-600 font-bold">€60-170</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3 font-semibold">Octavos</td>
                            <td className="py-2 px-3 text-green-600 font-bold">€75-200</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-2 px-3 font-semibold">Cuartos</td>
                            <td className="py-2 px-3 text-green-600 font-bold">€85-220</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Consejo de Valor</h3>
                  <p className="text-gray-700">
                    <strong>Suzanne-Lenglen</strong> ofrece posiblemente el mejor valor en Roland Garros: verás partidos
                    de jugadores top 20, en un estadio impresionante, a precios 20-30% más bajos que Philippe-Chatrier
                    para rondas equivalentes. El ambiente suele ser más animado y las vistas son excelentes desde casi
                    cualquier asiento.
                  </p>
                </div>
              </section>

              {/* Consejos para Ahorrar */}
              <section className="mb-12 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Estrategias para Optimizar tu Presupuesto
                </h2>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">1. Elige la Primera Semana</h3>
                    <p className="text-gray-700 mb-3">
                      Los precios son 40-60% más bajos en las primeras dos rondas comparado con las finales:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Ground pass por solo €35-40 con acceso a 50+ partidos</li>
                      <li>• Entradas Philippe-Chatrier desde €65 vs. €540 en finales</li>
                      <li>• Verás a todos los top players garantizado</li>
                      <li>• Menos aglomeraciones y mejor disponibilidad</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">2. Considera Días Entre Semana</h3>
                    <p className="text-gray-700 mb-3">
                      Los lunes a jueves suelen tener precios ligeramente más bajos y mejor disponibilidad:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Evita fines de semana cuando los precios suben 10-20%</li>
                      <li>• Menos turistas = más espacio y mejor experiencia</li>
                      <li>• Más fácil conseguir entradas de última hora</li>
                      <li>• Transporte público menos saturado</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">3. Opta por Categorías Inferiores</h3>
                    <p className="text-gray-700 mb-3">
                      Los asientos categoría 3 (bronce) ofrecen vistas completas a precio muy reducido:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Ahorras 50-60% vs. categoría oro</li>
                      <li>• Las vistas panorámicas pueden ser mejores para seguir el juego</li>
                      <li>• Menos sol directo en asientos altos (importante en días calurosos)</li>
                      <li>• La experiencia de estar en el estadio es similar</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">4. Prioriza Suzanne-Lenglen sobre Chatrier</h3>
                    <p className="text-gray-700 mb-3">
                      Suzanne-Lenglen ofrece experiencia similar a menor precio:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Partidos de jugadores top 20 garantizados</li>
                      <li>• Precios 20-30% más bajos que Philippe-Chatrier</li>
                      <li>• Ambiente más íntimo y animado</li>
                      <li>• Incluye ground pass el mismo día</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">5. Combina Ground Pass + Pantallas Gigantes</h3>
                    <p className="text-gray-700 mb-3">
                      Para ver partidos de pista central sin pagar el premium:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Compra ground pass (€35-55)</li>
                      <li>• Ve partidos en vivo en pistas exteriores</li>
                      <li>• Sigue Philippe-Chatrier en pantallas gigantes</li>
                      <li>• Ahorras €100-400 vs. entrada individual</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">6. Evita el Mercado Secundario No Oficial</h3>
                    <p className="text-gray-700 mb-3">
                      Las entradas revendidas suelen tener sobreprecio de 100-300%:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Compra solo en rolandgarros.com (sitio oficial)</li>
                      <li>• Evita StubHub, Viagogo y similares con comisiones excesivas</li>
                      <li>• Alto riesgo de entradas falsas o duplicadas</li>
                      <li>• Las entradas son nominativas y difíciles de transferir</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Comparativa Valor */}
              <section className="mb-12 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Análisis de Valor: ¿Qué Entrada Ofrece Mejor ROI?
                </h2>

                <div className="space-y-4">
                  <div className="bg-green-100 border-2 border-green-500 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">Ground Pass Primera Semana</h3>
                      <span className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-sm">
                        MEJOR VALOR
                      </span>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 mb-3">
                      <div>
                        <div className="text-sm text-gray-600">Precio</div>
                        <div className="text-2xl font-bold text-green-600">€35-40</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Partidos</div>
                        <div className="text-2xl font-bold text-green-600">50+</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">€ por partido</div>
                        <div className="text-2xl font-bold text-green-600">~€0.70</div>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      <strong>Veredicto:</strong> Valor excepcional. Perfecto para fanáticos verdaderos del tenis que
                      quieren maximizar cantidad de tenis visto. Mejor opción para presupuestos ajustados.
                    </p>
                  </div>

                  <div className="bg-blue-100 border-2 border-blue-500 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">Suzanne-Lenglen Categoría 2</h3>
                      <span className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm">
                        BUEN EQUILIBRIO
                      </span>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 mb-3">
                      <div>
                        <div className="text-sm text-gray-600">Precio</div>
                        <div className="text-2xl font-bold text-blue-600">€90-180</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Calidad</div>
                        <div className="text-2xl font-bold text-blue-600">Top 20</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">+ Ground Pass</div>
                        <div className="text-2xl font-bold text-blue-600">Incluido</div>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      <strong>Veredicto:</strong> Excelente compromiso entre precio y calidad. Buenos asientos para
                      partidos importantes sin pagar el premium de Philippe-Chatrier.
                    </p>
                  </div>

                  <div className="bg-orange-100 border-2 border-orange-500 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">Philippe-Chatrier Cuartos Cat 3</h3>
                      <span className="bg-orange-600 text-white px-4 py-2 rounded-lg font-bold text-sm">
                        VALE LA PENA
                      </span>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 mb-3">
                      <div>
                        <div className="text-sm text-gray-600">Precio</div>
                        <div className="text-2xl font-bold text-orange-600">€170-240</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Calidad</div>
                        <div className="text-2xl font-bold text-orange-600">Top 8</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Experiencia</div>
                        <div className="text-2xl font-bold text-orange-600">Pista Central</div>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      <strong>Veredicto:</strong> Buen equilibrio si quieres experimentar Philippe-Chatrier con tenis
                      de alta calidad sin pagar precios de final. Cuartos ofrece mejor valor que semifinales/final.
                    </p>
                  </div>

                  <div className="bg-red-100 border-2 border-red-500 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">Final Philippe-Chatrier Cat 1</h3>
                      <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm">
                        EXPERIENCIA ÚNICA
                      </span>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 mb-3">
                      <div>
                        <div className="text-sm text-gray-600">Precio</div>
                        <div className="text-2xl font-bold text-red-600">€480-540</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Partido</div>
                        <div className="text-2xl font-bold text-red-600">Final</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Disponibilidad</div>
                        <div className="text-2xl font-bold text-red-600">Lotería</div>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      <strong>Veredicto:</strong> Precio muy alto pero experiencia irrepetible. Solo justificable si
                      es un sueño de vida o celebración especial. Difícil conseguir (sistema de lotería).
                    </p>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Preguntas Frecuentes sobre Precios
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
              <section className="mb-12 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Guías Relacionadas
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <Link
                    href="/entradas-roland-garros-2026/tipos-de-entradas"
                    className="block bg-orange-50 border border-orange-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Tipos de Entradas</h3>
                    <p className="text-gray-700 mb-3">
                      Entiende las diferencias entre ground pass, individuales y paquetes.
                    </p>
                    <span className="text-orange-600 font-semibold">Leer más →</span>
                  </Link>

                  <Link
                    href="/entradas-roland-garros-2026/donde-comprar"
                    className="block bg-orange-50 border border-orange-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Dónde Comprar</h3>
                    <p className="text-gray-700 mb-3">
                      Cómo comprar al mejor precio de forma oficial y segura.
                    </p>
                    <span className="text-orange-600 font-semibold">Leer más →</span>
                  </Link>

                  <Link
                    href="/entradas-roland-garros-2026/mejores-asientos"
                    className="block bg-orange-50 border border-orange-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Mejores Asientos</h3>
                    <p className="text-gray-700 mb-3">
                      Qué categoría elegir según tu presupuesto y preferencias.
                    </p>
                    <span className="text-orange-600 font-semibold">Leer más →</span>
                  </Link>

                  <Link
                    href="/entradas-roland-garros-2026"
                    className="block bg-orange-50 border border-orange-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Guía Principal</h3>
                    <p className="text-gray-700 mb-3">
                      Volver a la guía completa de entradas Roland Garros 2026.
                    </p>
                    <span className="text-orange-600 font-semibold">Leer más →</span>
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
              ¿Listo para Planificar tu Presupuesto?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link
                href="/entradas-roland-garros-2026"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-orange-50 transition-colors"
              >
                Volver a Guía de Entradas
              </Link>
              <Link
                href="/calendario-roland-garros-2026"
                className="bg-orange-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-800 transition-colors border-2 border-white"
              >
                Ver Calendario 2026
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
