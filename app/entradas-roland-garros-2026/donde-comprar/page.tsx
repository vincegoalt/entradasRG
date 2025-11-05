import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { FAQSchema } from '@/components/seo/FAQSchema'

export const metadata: Metadata = {
  title: 'Dónde Comprar Entradas Roland Garros 2026: Oficial, Seguro y Sin Estafas',
  description: 'Guía completa sobre dónde comprar entradas oficiales para Roland Garros 2026. Sitio oficial FFT, proceso de compra paso a paso, advertencias sobre estafas y mercado secundario.',
  keywords: [
    'donde comprar entradas roland garros',
    'entradas oficiales roland garros',
    'comprar tickets roland garros',
    'roland garros entradas fft',
    'evitar estafas roland garros',
    'reventa entradas roland garros'
  ],
  openGraph: {
    title: 'Dónde Comprar Entradas Roland Garros 2026 de Forma Segura',
    description: 'Sitio oficial, proceso de compra y cómo evitar estafas al comprar entradas para Roland Garros.',
    type: 'article',
    url: 'https://entradasrolandgarros.com/entradas-roland-garros-2026/donde-comprar',
  },
  alternates: {
    canonical: 'https://entradasrolandgarros.com/entradas-roland-garros-2026/donde-comprar',
  },
}

const faqs = [
  {
    question: '¿Cuál es el único sitio oficial para comprar entradas de Roland Garros?',
    answer: 'El único sitio oficial autorizado es rolandgarros.com, operado por la Fédération Française de Tennis (FFT). Cualquier otro sitio que venda entradas es un revendedor secundario no oficial.'
  },
  {
    question: '¿Es seguro comprar entradas en StubHub o Viagogo?',
    answer: 'Aunque estos sitios son plataformas legítimas de reventa, no son vendedores autorizados por la FFT. Los riesgos incluyen: precios inflados (200-400% sobrecargo), entradas potencialmente falsas o duplicadas, y dificultad con transferencias ya que las entradas son nominativas. No recomendamos estos sitios.'
  },
  {
    question: '¿Puedo comprar entradas en persona en Roland Garros?',
    answer: 'Sí, durante el torneo hay taquillas en las puertas del estadio donde puedes comprar entradas disponibles, especialmente ground passes. Sin embargo, para rondas finales y partidos importantes, es poco probable encontrar entradas el mismo día.'
  },
  {
    question: '¿Qué hago si me vendieron una entrada falsa?',
    answer: 'Si compraste en el sitio oficial, contacta inmediatamente a la FFT. Si compraste de un revendedor no autorizado, lamentablemente tendrás pocas opciones de recurso. Presenta denuncia policial y contacta a tu banco/tarjeta de crédito para intentar reembolso. Esta es la razón principal para comprar solo en canales oficiales.'
  }
]

export default function DondeComprarPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8">
          <div className="container mx-auto px-4">
            <Breadcrumbs
              items={[
                { name: 'Entradas Roland Garros 2026', url: 'https://entradasrolandgarros.com/entradas-roland-garros-2026' },
                { name: 'Dónde Comprar', url: 'https://entradasrolandgarros.com/entradas-roland-garros-2026/donde-comprar' }
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Dónde Comprar Entradas Roland Garros 2026
              </h1>
              <p className="text-xl md:text-2xl text-blue-100">
                Sitio oficial, proceso de compra seguro y cómo evitar estafas en el mercado secundario
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
                <div className="bg-red-50 border-2 border-red-500 rounded-lg p-8 mb-8">
                  <div className="flex items-start">
                    <div className="text-red-600 text-5xl mr-4">⚠️</div>
                    <div>
                      <h2 className="text-2xl font-bold text-red-900 mb-3 mt-0">Advertencia Importante</h2>
                      <p className="text-gray-900 font-semibold mb-3">
                        Cada año, cientos de personas pierden dinero comprando entradas falsas o siendo víctimas de estafas
                        para Roland Garros. Esta guía te protegerá.
                      </p>
                      <p className="text-gray-800 mb-0">
                        <strong>Regla de oro:</strong> Compra SOLO en el sitio oficial <strong>rolandgarros.com</strong> o
                        en puntos de venta autorizados por la FFT. Cualquier otra fuente conlleva riesgos significativos.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Saber dónde comprar tus entradas de forma segura es tan importante como elegir qué entradas comprar.
                  Esta guía te mostrará los únicos canales oficiales autorizados, el proceso de compra paso a paso, y
                  cómo identificar y evitar estafas comunes en el mercado secundario.
                </p>
              </section>

              {/* Canal Oficial */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Sitio Web Oficial: rolandgarros.com
                </h2>

                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 mb-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl mr-4">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-0">Canal 100% Seguro</h3>
                      <p className="text-gray-600 mb-0">Operado por la Fédération Française de Tennis</p>
                    </div>
                  </div>

                  <div className="bg-white rounded p-6 mb-4">
                    <div className="text-center mb-3">
                      <div className="text-sm text-gray-600 mb-2">Sitio Web Oficial</div>
                      <div className="text-3xl font-bold text-green-600">rolandgarros.com</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900">Por Qué es la Mejor Opción:</h3>
                  <ul className="space-y-2 text-gray-700 mb-0">
                    <li>• <strong>Garantía total:</strong> Entradas 100% auténticas y válidas</li>
                    <li>• <strong>Precios oficiales:</strong> Sin sobrecargos ni comisiones ocultas</li>
                    <li>• <strong>Soporte al cliente:</strong> Asistencia oficial en caso de problemas</li>
                    <li>• <strong>Acceso prioritario:</strong> A lanzamientos y ofertas especiales</li>
                    <li>• <strong>Sistema de lotería:</strong> Única vía para entradas de finales</li>
                    <li>• <strong>Política de reembolso:</strong> Protección oficial si el evento se cancela</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900">Características del Sitio Oficial</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-lg mb-3 text-gray-900">Seguridad</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Conexión HTTPS encriptada</li>
                      <li>• Certificado SSL verificado</li>
                      <li>• Métodos de pago seguros</li>
                      <li>• Autenticación de dos factores</li>
                      <li>• Protección de datos personales</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-lg mb-3 text-gray-900">Funcionalidades</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Mapa interactivo de asientos</li>
                      <li>• Vista previa desde el asiento</li>
                      <li>• Calendario de partidos actualizado</li>
                      <li>• Confirmación instantánea por email</li>
                      <li>• Entradas digitales en app móvil</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Proceso de Compra */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Proceso de Compra Paso a Paso
                </h2>

                <div className="space-y-6">
                  {/* Paso 1 */}
                  <div className="bg-white border-l-4 border-blue-500 p-6 rounded-r-lg shadow">
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        1
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3 text-gray-900">Crea tu Cuenta (Antes de la Venta)</h3>
                        <p className="text-gray-700 mb-3">
                          Registrarse con anticipación es crucial para no perder tiempo cuando se abra la venta:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Ve a rolandgarros.com y selecciona "Crear cuenta"</li>
                          <li>• Completa todos los datos: nombre, dirección, email, teléfono</li>
                          <li>• Verifica tu email haciendo clic en el enlace de confirmación</li>
                          <li>• Configura autenticación de dos factores para mayor seguridad</li>
                          <li>• Guarda tu información de pago de forma segura</li>
                        </ul>
                        <div className="bg-blue-50 p-4 rounded mt-3">
                          <p className="text-sm text-gray-700 mb-0">
                            <strong>Consejo:</strong> Crea tu cuenta en diciembre-enero 2026, mucho antes de que abra la
                            venta oficial. Tendrás ventaja sobre quienes se registren el mismo día.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Paso 2 */}
                  <div className="bg-white border-l-4 border-blue-500 p-6 rounded-r-lg shadow">
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        2
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3 text-gray-900">Inscríbete en la Lotería (Para Finales)</h3>
                        <p className="text-gray-700 mb-3">
                          Si quieres entradas para semifinales o finales, debes participar en la lotería:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Periodo de inscripción: típicamente enero-febrero 2026</li>
                          <li>• Selecciona qué partidos te interesan (hasta 4 opciones)</li>
                          <li>• Elige tu categoría de asiento preferida</li>
                          <li>• Indica número de entradas (máximo 4 por persona)</li>
                          <li>• Espera resultados del sorteo (notificación por email)</li>
                        </ul>
                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-3">
                          <p className="text-sm text-gray-700 mb-0">
                            <strong>Importante:</strong> No hay garantía de conseguir entradas en la lotería. Las entradas
                            para finales tienen demanda extremadamente alta. Solicita también días alternativos como respaldo.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Paso 3 */}
                  <div className="bg-white border-l-4 border-blue-500 p-6 rounded-r-lg shadow">
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        3
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3 text-gray-900">Compra en la Venta General (Primera Semana)</h3>
                        <p className="text-gray-700 mb-3">
                          Para entradas de primera semana, la venta es por orden de llegada:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Apertura de venta: típicamente marzo 2026</li>
                          <li>• Inicia sesión 15-30 minutos antes de la hora de apertura</li>
                          <li>• Prepara tu método de pago con anticipación</li>
                          <li>• Sé flexible con tus opciones (fecha, pista, categoría)</li>
                          <li>• Actúa rápido - las mejores entradas se agotan en minutos</li>
                        </ul>
                        <div className="bg-blue-50 p-4 rounded mt-3">
                          <p className="text-sm text-gray-700 mb-2">
                            <strong>Estrategia de compra:</strong>
                          </p>
                          <ol className="text-sm text-gray-700 space-y-1 mb-0 ml-4">
                            <li>1. Ten una lista priorizada de opciones (Plan A, B, C)</li>
                            <li>2. Si tu primera opción no está disponible, pasa rápido a la siguiente</li>
                            <li>3. No pierdas tiempo decidiendo - prepárate mentalmente antes</li>
                            <li>4. Completa la compra inmediatamente - no dejes entradas en el carrito</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Paso 4 */}
                  <div className="bg-white border-l-4 border-blue-500 p-6 rounded-r-lg shadow">
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        4
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3 text-gray-900">Pago y Confirmación</h3>
                        <p className="text-gray-700 mb-3">
                          Finaliza tu compra de forma segura:
                        </p>
                        <ul className="space-y-2 text-gray-700 mb-4">
                          <li>• Revisa tu selección de entradas cuidadosamente</li>
                          <li>• Verifica fecha, hora, pista y número de asientos</li>
                          <li>• Acepta términos y condiciones</li>
                          <li>• Completa el pago (tarjeta de crédito/débito recomendado)</li>
                          <li>• Guarda el email de confirmación</li>
                        </ul>
                        <div className="bg-white border border-gray-200 rounded p-4">
                          <h4 className="font-bold mb-2 text-gray-900">Métodos de Pago Aceptados:</h4>
                          <ul className="text-sm text-gray-700 space-y-1 mb-0">
                            <li>• Visa, Mastercard, American Express</li>
                            <li>• PayPal (según disponibilidad)</li>
                            <li>• Tarjetas de débito internacionales</li>
                            <li>• NO se aceptan: transferencias bancarias, efectivo, cheques</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Paso 5 */}
                  <div className="bg-white border-l-4 border-blue-500 p-6 rounded-r-lg shadow">
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        5
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3 text-gray-900">Recibe tus Entradas Digitales</h3>
                        <p className="text-gray-700 mb-3">
                          Las entradas se entregan digitalmente:
                        </p>
                        <ul className="space-y-2 text-gray-700 mb-4">
                          <li>• Descarga la app oficial de Roland Garros</li>
                          <li>• Inicia sesión con tu cuenta</li>
                          <li>• Tus entradas aparecerán en la sección "Mis entradas"</li>
                          <li>• Cada entrada tiene un código QR único</li>
                          <li>• Descarga las entradas para acceso offline</li>
                        </ul>
                        <div className="bg-green-50 p-4 rounded">
                          <p className="text-sm text-gray-700 mb-0">
                            <strong>En el día del evento:</strong> Presenta el código QR de tu entrada en las puertas de
                            acceso. El código será escaneado y validado. NO imprimas capturas de pantalla - usa la app oficial.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Compra en Taquilla */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Compra el Mismo Día en Taquillas
                </h2>

                <p className="text-gray-700 mb-6">
                  Durante el torneo, es posible comprar entradas el mismo día en las taquillas físicas del estadio,
                  especialmente ground passes para la primera semana.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-green-800">Ventajas</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Compra sin planificación previa</li>
                      <li>• Ideal para decisiones de último minuto</li>
                      <li>• Sin necesidad de registro online</li>
                      <li>• Pago en efectivo aceptado</li>
                      <li>• Personal de ayuda disponible</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-red-800">Limitaciones</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Solo entradas disponibles (limitado)</li>
                      <li>• Ground pass principalmente</li>
                      <li>• Colas largas en días populares</li>
                      <li>• No disponible para finales</li>
                      <li>• Riesgo de vender out</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Ubicaciones de Taquillas</h3>
                  <p className="text-gray-700 mb-3">
                    Las taquillas oficiales están ubicadas en:
                  </p>
                  <ul className="text-gray-700 space-y-1 mb-3">
                    <li>• Puerta de Porte d'Auteuil (principal)</li>
                    <li>• Puerta de Porte Molitor</li>
                    <li>• Entrada de Mousquetaires</li>
                  </ul>
                  <p className="text-gray-700 mb-0">
                    <strong>Horario:</strong> Abren 1 hora antes del inicio de los partidos del día. Prepárate para
                    colas especialmente en fines de semana y durante la primera semana.
                  </p>
                </div>
              </section>

              {/* ADVERTENCIAS SOBRE ESTAFAS */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Advertencias Importantes: Evita Estas Estafas
                </h2>

                <div className="bg-red-100 border-2 border-red-600 rounded-lg p-8 mb-8">
                  <div className="flex items-start mb-6">
                    <div className="text-red-600 text-6xl mr-6">🚫</div>
                    <div>
                      <h3 className="text-2xl font-bold text-red-900 mb-3 mt-0">Mercado Secundario No Autorizado</h3>
                      <p className="text-gray-800 text-lg mb-0">
                        Comprar entradas de fuentes no oficiales es extremadamente arriesgado. Miles de personas pierden
                        dinero cada año en estafas relacionadas con Roland Garros.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-bold text-xl mb-4 text-gray-900">Sitios y Vendedores a EVITAR:</h4>
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-500 pl-4">
                        <h5 className="font-bold text-red-700 mb-2">StubHub, Viagogo, SeatGeek</h5>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>Problemas:</strong> Sobrecargos de 200-400%, entradas potencialmente duplicadas o falsas,
                          dificultad con transferencias nominativas, sin garantía de acceso.
                        </p>
                        <p className="text-gray-700 text-sm mb-0">
                          <strong>Riesgo:</strong> Alto - Aunque son plataformas "legítimas", no están autorizadas por la FFT.
                        </p>
                      </div>

                      <div className="border-l-4 border-red-500 pl-4">
                        <h5 className="font-bold text-red-700 mb-2">Vendedores en Redes Sociales</h5>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>Problemas:</strong> Altísima tasa de fraude, entradas falsificadas, perfiles falsos,
                          imposible verificar autenticidad, cero protección al consumidor.
                        </p>
                        <p className="text-gray-700 text-sm mb-0">
                          <strong>Riesgo:</strong> Extremo - La mayoría son estafadores. NUNCA compres así.
                        </p>
                      </div>

                      <div className="border-l-4 border-red-500 pl-4">
                        <h5 className="font-bold text-red-700 mb-2">"Agencias de Viaje" No Verificadas</h5>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>Problemas:</strong> Precios inflados, paquetes sin entradas garantizadas, empresas fantasma,
                          desaparecen después de recibir pago.
                        </p>
                        <p className="text-gray-700 text-sm mb-0">
                          <strong>Riesgo:</strong> Muy Alto - Solo usa agencias oficialmente autorizadas por la FFT.
                        </p>
                      </div>

                      <div className="border-l-4 border-red-500 pl-4">
                        <h5 className="font-bold text-red-700 mb-2">Vendedores Ambulantes Cerca del Estadio</h5>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>Problemas:</strong> Entradas falsificadas, códigos QR duplicados, estafas clásicas,
                          imposible recuperar dinero.
                        </p>
                        <p className="text-gray-700 text-sm mb-0">
                          <strong>Riesgo:</strong> Extremo - 99% son estafas. Te negarán entrada en la puerta.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900">Señales de Alerta de Estafas</h3>
                <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-6 mb-6">
                  <ul className="space-y-3 text-gray-700 mb-0">
                    <li className="flex items-start">
                      <span className="text-yellow-600 text-xl mr-3">⚠️</span>
                      <span><strong>Precios "demasiado buenos":</strong> Si el precio está significativamente por debajo del mercado oficial, es una estafa.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 text-xl mr-3">⚠️</span>
                      <span><strong>Urgencia artificial:</strong> "Solo quedan 2 entradas", "oferta expira en 1 hora" - tácticas de presión.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 text-xl mr-3">⚠️</span>
                      <span><strong>Métodos de pago no rastreables:</strong> Transferencias Western Union, criptomonedas, efectivo anticipado.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 text-xl mr-3">⚠️</span>
                      <span><strong>Vendedor no identificable:</strong> Sin información de contacto real, dirección física, o registro empresarial.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 text-xl mr-3">⚠️</span>
                      <span><strong>Entradas "garantizadas" para finales:</strong> Nadie puede garantizar entradas fuera de la lotería oficial.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 text-xl mr-3">⚠️</span>
                      <span><strong>Sitio web mal diseñado:</strong> Errores ortográficos, diseño amateur, sin certificado SSL (https).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 text-xl mr-3">⚠️</span>
                      <span><strong>Contacto solo por WhatsApp/Telegram:</strong> Vendedores legítimos tienen canales oficiales.</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900">Por Qué las Entradas Falsas son un Problema</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    Las entradas para Roland Garros tienen características de seguridad específicas:
                  </p>
                  <ul className="space-y-3 text-gray-700 mb-4">
                    <li>• <strong>Códigos QR únicos:</strong> Cada entrada tiene un código que solo funciona una vez</li>
                    <li>• <strong>Nominativas:</strong> Las entradas llevan el nombre del comprador original</li>
                    <li>• <strong>Verificación en tiempo real:</strong> El sistema detecta entradas duplicadas o falsas</li>
                    <li>• <strong>Hologramas de seguridad:</strong> En entradas físicas (cada vez más raras)</li>
                    <li>• <strong>Base de datos centralizada:</strong> Todas las entradas válidas están registradas</li>
                  </ul>
                  <p className="text-gray-700 mb-0">
                    Si tu entrada es falsa o duplicada, el sistema lo detectará en la puerta y <strong>te negarán la entrada</strong>.
                    No habrá reembolso ni segunda oportunidad. Tu dinero y tu oportunidad de ver Roland Garros se habrán perdido.
                  </p>
                </div>
              </section>

              {/* Alternativas Legítimas */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Alternativas Legítimas si se Agotan las Entradas
                </h2>

                <p className="text-gray-700 mb-6">
                  Si no conseguiste entradas en la venta oficial, estas son tus opciones seguras:
                </p>

                <div className="space-y-6">
                  <div className="bg-white border-2 border-green-300 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">1. Plataforma Oficial de Reventa FFT</h3>
                    <p className="text-gray-700 mb-3">
                      La FFT ocasionalmente habilita una plataforma oficial de reventa donde titulares originales pueden
                      vender sus entradas a precio facial (sin sobrecargo).
                    </p>
                    <div className="bg-green-50 p-4 rounded">
                      <ul className="space-y-2 text-gray-700 mb-0">
                        <li>• <strong>Seguridad:</strong> 100% garantizada</li>
                        <li>• <strong>Precio:</strong> Facial + pequeña comisión de gestión</li>
                        <li>• <strong>Disponibilidad:</strong> Limitada, monitorea regularmente</li>
                        <li>• <strong>Acceso:</strong> A través de tu cuenta en rolandgarros.com</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-blue-300 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">2. Espera Hasta el Día del Evento</h3>
                    <p className="text-gray-700 mb-3">
                      Durante la primera semana, suelen liberarse entradas adicionales el mismo día:
                    </p>
                    <ul className="space-y-2 text-gray-700 mb-0">
                      <li>• <strong>Ground passes:</strong> Generalmente disponibles en taquilla</li>
                      <li>• <strong>Mejores días:</strong> Lunes a jueves de primera semana</li>
                      <li>• <strong>Llega temprano:</strong> Las taquillas abren 1 hora antes</li>
                      <li>• <strong>Ten paciencia:</strong> Puede haber colas de 30-60 minutos</li>
                    </ul>
                  </div>

                  <div className="bg-white border-2 border-purple-300 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">3. Agencias de Viaje Autorizadas</h3>
                    <p className="text-gray-700 mb-3">
                      Algunas agencias tienen acuerdos oficiales con la FFT para paquetes turísticos:
                    </p>
                    <div className="bg-purple-50 p-4 rounded mb-3">
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Importante:</strong> Verifica que la agencia sea partner oficial de la FFT. Busca:
                      </p>
                      <ul className="text-sm text-gray-700 space-y-1 mb-0">
                        <li>• Logo oficial "Partner FFT" o "Roland Garros Official"</li>
                        <li>• Listado en el sitio web de la FFT como partner autorizado</li>
                        <li>• Registro empresarial verificable</li>
                        <li>• Reseñas y trayectoria demostrable</li>
                      </ul>
                    </div>
                    <ul className="space-y-2 text-gray-700 mb-0">
                      <li>• <strong>Ventaja:</strong> Paquetes completos (hotel + entradas + transporte)</li>
                      <li>• <strong>Desventaja:</strong> Precio premium sobre entradas individuales</li>
                      <li>• <strong>Ideal para:</strong> Visitantes internacionales que prefieren todo organizado</li>
                    </ul>
                  </div>

                  <div className="bg-white border-2 border-orange-300 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">4. Considera Días Alternativos</h3>
                    <p className="text-gray-700 mb-3">
                      Flexibilidad aumenta tus posibilidades:
                    </p>
                    <ul className="space-y-2 text-gray-700 mb-0">
                      <li>• Si tu primera opción se agotó, prueba otros días de la semana</li>
                      <li>• Tercera ronda ofrece gran tenis a precios moderados</li>
                      <li>• Suzanne-Lenglen tiene mejor disponibilidad que Philippe-Chatrier</li>
                      <li>• Días entre semana son más fáciles de conseguir que fines de semana</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Protección al Consumidor */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Protección al Consumidor: Tus Derechos
                </h2>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Si Compraste en el Sitio Oficial</h3>
                  <ul className="space-y-2 text-gray-700 mb-0">
                    <li>• <strong>Reembolso completo</strong> si el evento se cancela o pospone</li>
                    <li>• <strong>Soporte al cliente</strong> oficial para resolver problemas técnicos</li>
                    <li>• <strong>Protección de datos</strong> bajo regulaciones europeas GDPR</li>
                    <li>• <strong>Garantía de entrada</strong> - tu entrada será válida sin excepciones</li>
                    <li>• <strong>Derecho de reclamación</strong> formal ante la FFT si hay problemas</li>
                  </ul>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Si Compraste de Revendedores No Autorizados</h3>
                  <p className="text-gray-700 mb-3">
                    Lamentablemente, tendrás muy pocas opciones de recurso:
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>• La FFT no se hace responsable de entradas no compradas en canales oficiales</li>
                    <li>• Plataformas de reventa tienen políticas muy limitadas de reembolso</li>
                    <li>• Si la entrada es falsa, pierdes tanto el dinero como la entrada</li>
                    <li>• Procesos legales suelen ser costosos y poco efectivos transfronterizos</li>
                  </ul>
                  <div className="bg-white rounded p-4">
                    <p className="font-bold text-red-900 mb-2">Qué Puedes Hacer:</p>
                    <ol className="text-sm text-gray-700 space-y-1 mb-0 ml-4">
                      <li>1. Presenta denuncia policial inmediatamente</li>
                      <li>2. Contacta a tu banco/tarjeta para solicitar contracargo (chargeback)</li>
                      <li>3. Reporta al vendedor en la plataforma donde compraste</li>
                      <li>4. Documenta toda la evidencia (emails, capturas, recibos)</li>
                      <li>5. Comparte tu experiencia para advertir a otros</li>
                    </ol>
                  </div>
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

              {/* Conclusión */}
              <section className="mb-12">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-500 rounded-lg p-8">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">
                    Resumen: Compra Inteligente y Segura
                  </h2>

                  <div className="space-y-4 text-gray-700">
                    <p className="text-lg">
                      <strong>La regla de oro es simple:</strong> Compra SOLO en rolandgarros.com o en taquillas oficiales
                      del estadio durante el torneo. Cualquier otra fuente conlleva riesgos significativos que simplemente
                      no valen la pena.
                    </p>

                    <div className="bg-white rounded-lg p-6">
                      <h3 className="font-bold text-xl mb-3 text-gray-900">Checklist de Compra Segura:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>Crea tu cuenta en rolandgarros.com con anticipación</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>Inscríbete en la lotería para finales (enero-febrero)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>Prepárate para la venta general (marzo)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>Ten opciones alternativas preparadas</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>NUNCA compres de revendedores no autorizados</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>Descarga tus entradas en la app oficial</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>Guarda tu confirmación como respaldo</span>
                        </li>
                      </ul>
                    </div>

                    <p className="text-lg font-semibold text-green-800">
                      La paciencia y la planificación son tus mejores aliados. Es mejor esperar y comprar oficialmente
                      que arriesgar cientos de euros en el mercado secundario no autorizado.
                    </p>
                  </div>
                </div>
              </section>

              {/* Related Links */}
              <section className="mb-12">
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
                      Elige qué tipo de entrada comprar antes de ir al sitio oficial.
                    </p>
                    <span className="text-orange-600 font-semibold">Leer más →</span>
                  </Link>

                  <Link
                    href="/entradas-roland-garros-2026/precios"
                    className="block bg-orange-50 border border-orange-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Precios Oficiales</h3>
                    <p className="text-gray-700 mb-3">
                      Conoce los precios reales para identificar ofertas sospechosas.
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

                  <Link
                    href="/calendario-roland-garros-2026"
                    className="block bg-orange-50 border border-orange-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Calendario 2026</h3>
                    <p className="text-gray-700 mb-3">
                      Planifica qué días comprar entradas según el calendario oficial.
                    </p>
                    <span className="text-orange-600 font-semibold">Leer más →</span>
                  </Link>
                </div>
              </section>

            </div>
          </div>
        </article>

        {/* CTA */}
        <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Compra Seguro, Disfruta Tranquilo
            </h2>
            <p className="text-xl mb-6 text-blue-100">
              Recuerda: Solo rolandgarros.com es 100% seguro
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/entradas-roland-garros-2026"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
              >
                Volver a Guía de Entradas
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
