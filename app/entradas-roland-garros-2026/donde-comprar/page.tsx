import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { FAQSchema } from '@/components/seo/FAQSchema'

export const metadata: Metadata = {
  title: 'Dónde Comprar Entradas Roland Garros 2026: Guía Completa de Opciones',
  description: 'Guía completa sobre dónde comprar entradas para Roland Garros 2026. Canal oficial FFT, opciones para compradores internacionales, plataformas verificadas y cómo evitar estafas.',
  keywords: [
    'donde comprar entradas roland garros',
    'entradas oficiales roland garros',
    'comprar tickets roland garros',
    'roland garros entradas fft',
    'comprar entradas roland garros internacional',
    'entradas garantizadas roland garros'
  ],
  openGraph: {
    title: 'Dónde Comprar Entradas Roland Garros 2026: Todas las Opciones',
    description: 'Canal oficial, plataformas internacionales verificadas y cómo evitar estafas al comprar entradas para Roland Garros.',
    type: 'article',
    url: 'https://entradasrolandgarros.com/entradas-roland-garros-2026/donde-comprar',
  },
  alternates: {
    canonical: 'https://entradasrolandgarros.com/entradas-roland-garros-2026/donde-comprar',
  },
}

const faqs = [
  {
    question: '¿Cuál es el sitio oficial para comprar entradas de Roland Garros?',
    answer: 'El sitio oficial autorizado es rolandgarros.com, operado por la Fédération Française de Tennis (FFT). Es la primera opción para comprar entradas a precio facial, aunque el sistema de lotería y la alta demanda hacen que no siempre sea posible conseguir entradas por este canal.'
  },
  {
    question: '¿Puedo comprar entradas en persona en Roland Garros?',
    answer: 'Sí, durante el torneo hay taquillas en las puertas del estadio donde puedes comprar entradas disponibles, especialmente ground passes. Sin embargo, para rondas finales y partidos importantes, es poco probable encontrar entradas el mismo día.'
  },
  {
    question: '¿Qué hago si no conseguí entradas en la lotería oficial?',
    answer: 'Si no obtuviste entradas en la lotería de la FFT, puedes recurrir a plataformas internacionales especializadas en eventos deportivos como GoalTickets, que ofrecen entradas verificadas con transferencia oficial por app. También puedes intentar la reventa oficial de la FFT o comprar ground passes el mismo día en taquillas.'
  },
  {
    question: '¿Es seguro comprar entradas fuera de la web oficial?',
    answer: 'Depende del canal. Plataformas especializadas en eventos deportivos como GoalTickets ofrecen garantías de autenticidad y transferencia oficial. Sin embargo, debes evitar vendedores en redes sociales, callejeros y agencias no verificadas, donde el riesgo de fraude es extremadamente alto.'
  },
  {
    question: '¿Qué pasa si me vendieron una entrada falsa?',
    answer: 'Si compraste en el sitio oficial, contacta inmediatamente a la FFT. Si compraste de un revendedor no autorizado, presenta denuncia policial y contacta a tu banco para intentar un contracargo. Por eso es fundamental comprar solo en canales oficiales o plataformas verificadas con garantía de reembolso.'
  }
]

export default function DondeComprarPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-[#fcf9f8]">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-[#ead5cd] py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: 'Entradas Roland Garros 2026', url: 'https://entradasrolandgarros.com/entradas-roland-garros-2026' },
                { name: 'Dónde Comprar', url: 'https://entradasrolandgarros.com/entradas-roland-garros-2026/donde-comprar' }
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-[#1d110c] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Dónde Comprar Entradas Roland Garros 2026
              </h1>
              <p className="text-xl md:text-2xl text-[#ead5cd]">
                Guía completa: canal oficial, opciones para compradores internacionales y cómo evitar estafas
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">

              {/* Introduction */}
              <section>
                <p className="text-lg text-[#1d110c] leading-relaxed mb-6">
                  Conseguir entradas para Roland Garros puede ser un desafío, especialmente para compradores internacionales
                  que no están familiarizados con el sistema francés de venta. Esta guía te presenta todas las opciones
                  disponibles, desde el canal oficial de la FFT hasta plataformas especializadas para quienes no lograron
                  obtener entradas en la lotería oficial.
                </p>
                <p className="text-lg text-[#1d110c] leading-relaxed">
                  Hemos organizado las opciones en tres niveles para que puedas tomar la mejor decisión según tu situación:
                  el canal oficial, las estafas que debes evitar, y las alternativas verificadas para compradores internacionales.
                </p>
              </section>

              {/* ===== TIER 1: Canal Oficial FFT ===== */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Canal Oficial: rolandgarros.com (FFT)
                </h2>

                <div className="bg-white border-2 border-green-500 rounded-xl shadow-sm p-6 mb-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl mr-4 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#1d110c]">Primera Opción Recomendada</h3>
                      <p className="text-[#a15d45]">Operado por la Fédération Française de Tennis</p>
                    </div>
                  </div>

                  <div className="bg-[#fcf9f8] rounded-lg p-4 mb-4 text-center">
                    <div className="text-sm text-[#a15d45] mb-1">Sitio Web Oficial</div>
                    <div className="text-2xl font-bold text-green-600">rolandgarros.com</div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-[#1d110c]">Ventajas del Canal Oficial:</h3>
                  <ul className="space-y-2 text-[#1d110c]">
                    <li>• <strong>Precios faciales:</strong> Sin sobrecargos ni comisiones ocultas</li>
                    <li>• <strong>Garantía total:</strong> Entradas 100% auténticas y válidas</li>
                    <li>• <strong>Soporte oficial:</strong> Asistencia directa de la FFT en caso de problemas</li>
                    <li>• <strong>Reembolso:</strong> Protección oficial si el evento se cancela</li>
                    <li>• <strong>Sistema de lotería:</strong> Única vía para entradas de finales a precio oficial</li>
                  </ul>
                </div>

                <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4 text-[#1d110c]">Limitaciones del Canal Oficial</h3>
                  <p className="text-[#1d110c] mb-4">
                    Aunque es la primera opción, el canal oficial tiene limitaciones importantes que afectan
                    especialmente a compradores internacionales:
                  </p>
                  <ul className="space-y-2 text-[#1d110c]">
                    <li>• <strong>Sistema de lotería sin garantía:</strong> Para finales y semifinales, la asignación es aleatoria y la mayoría no obtiene entradas</li>
                    <li>• <strong>Sitio centrado en Francia:</strong> La interfaz y soporte principal están en francés</li>
                    <li>• <strong>Horarios de venta en zona horaria europea:</strong> Difícil para compradores en Latinoamérica o EE.UU.</li>
                    <li>• <strong>Métodos de pago limitados:</strong> Algunas tarjetas internacionales pueden ser rechazadas</li>
                    <li>• <strong>Agotamiento rápido:</strong> Las entradas de primera semana se agotan en minutos</li>
                  </ul>
                </div>

                {/* Paso a paso */}
                <h3 className="text-2xl font-bold mb-4 text-[#1d110c]">Proceso de Compra Paso a Paso</h3>

                <div className="space-y-4">
                  <div className="bg-white border-l-4 border-primary p-5 rounded-r-xl shadow-sm">
                    <div className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-9 h-9 flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm">1</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-[#1d110c]">Crea tu Cuenta (Diciembre-Enero)</h4>
                        <p className="text-[#1d110c]">
                          Registrarse con anticipación es crucial. Ve a rolandgarros.com, crea tu cuenta con todos los
                          datos y verifica tu email. Configura tu información de pago con anticipación.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-l-4 border-primary p-5 rounded-r-xl shadow-sm">
                    <div className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-9 h-9 flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm">2</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-[#1d110c]">Inscríbete en la Lotería (Enero-Febrero)</h4>
                        <p className="text-[#1d110c]">
                          Para semifinales y finales, participa en la lotería. Selecciona partidos de interés (hasta 4 opciones),
                          elige categoría de asiento e indica número de entradas (máximo 4). La asignación no está garantizada.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-l-4 border-primary p-5 rounded-r-xl shadow-sm">
                    <div className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-9 h-9 flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm">3</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-[#1d110c]">Venta General (Marzo)</h4>
                        <p className="text-[#1d110c]">
                          Para primera semana, la venta es por orden de llegada. Inicia sesión 15-30 minutos antes
                          de la apertura, ten opciones alternativas preparadas y actúa rápido.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-l-4 border-primary p-5 rounded-r-xl shadow-sm">
                    <div className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-9 h-9 flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm">4</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-[#1d110c]">Pago y Entradas Digitales</h4>
                        <p className="text-[#1d110c]">
                          Completa el pago con tarjeta de crédito/débito. Descarga la app oficial de Roland Garros
                          para recibir tus entradas digitales con código QR.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Taquillas */}
                <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 mt-6">
                  <h3 className="text-xl font-bold mb-3 text-[#1d110c]">Compra el Mismo Día en Taquillas</h3>
                  <p className="text-[#1d110c] mb-3">
                    Durante el torneo, es posible comprar ground passes y algunas entradas el mismo día en las
                    taquillas de Porte d'Auteuil, Porte Molitor y la entrada de Mousquetaires.
                    Abren 1 hora antes del inicio de los partidos.
                  </p>
                  <p className="text-[#a15d45] text-sm">
                    Disponibilidad limitada, especialmente en fines de semana y rondas finales.
                  </p>
                </div>
              </section>

              {/* ===== TIER 2: Estafas y vendedores no verificados ===== */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Estafas y Vendedores No Verificados: Qué Evitar
                </h2>

                <p className="text-[#1d110c] mb-6">
                  Cada año, cientos de personas pierden dinero comprando entradas falsas o siendo víctimas de fraude.
                  Es fundamental saber identificar los canales que debes evitar a toda costa.
                </p>

                <div className="bg-white border-2 border-red-400 rounded-xl shadow-sm p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4 text-red-800">Vendedores de Alto Riesgo — EVITAR</h3>

                  <div className="space-y-4">
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-bold text-red-700 mb-1">Vendedores en Redes Sociales</h4>
                      <p className="text-[#1d110c] text-sm">
                        Altísima tasa de fraude. Perfiles falsos, entradas falsificadas, cero protección al consumidor.
                        <strong> NUNCA compres entradas por Instagram, Facebook, Twitter o Telegram.</strong>
                      </p>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-bold text-red-700 mb-1">Vendedores Ambulantes Cerca del Estadio</h4>
                      <p className="text-[#1d110c] text-sm">
                        Entradas falsificadas, códigos QR duplicados, estafas clásicas.
                        La gran mayoría son fraudes. Te negarán entrada en la puerta.
                      </p>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-bold text-red-700 mb-1">&quot;Agencias de Viaje&quot; No Verificadas</h4>
                      <p className="text-[#1d110c] text-sm">
                        Precios inflados, paquetes sin entradas garantizadas, empresas fantasma que
                        desaparecen después de recibir pago. Solo usa agencias con trayectoria verificable.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4 text-[#1d110c]">Plataformas de Reventa Generalistas</h3>
                  <p className="text-[#1d110c] mb-4">
                    Plataformas como StubHub, Viagogo o SeatGeek son plataformas de reventa generalistas
                    sin especialización en eventos deportivos específicos. Si bien son empresas que operan legalmente,
                    presentan riesgos asociados:
                  </p>
                  <ul className="space-y-2 text-[#1d110c]">
                    <li>• <strong>Sobrecargos significativos:</strong> Comisiones de 30-60% sobre el precio facial</li>
                    <li>• <strong>Sin especialización:</strong> No tienen experiencia específica en el sistema de entradas de Roland Garros</li>
                    <li>• <strong>Transferencia incierta:</strong> Las entradas son nominativas, lo que complica la transferencia</li>
                    <li>• <strong>Sin garantía FFT:</strong> No están autorizadas por la Fédération Française de Tennis</li>
                  </ul>
                </div>

                <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-4 text-[#1d110c]">Señales de Alerta de Estafas</h3>
                  <ul className="space-y-3 text-[#1d110c]">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1 flex-shrink-0">•</span>
                      <span><strong>Precios demasiado buenos:</strong> Si el precio está muy por debajo del mercado, es una estafa</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1 flex-shrink-0">•</span>
                      <span><strong>Urgencia artificial:</strong> &quot;Solo quedan 2 entradas&quot;, &quot;oferta expira en 1 hora&quot;</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1 flex-shrink-0">•</span>
                      <span><strong>Métodos de pago no rastreables:</strong> Transferencias Western Union, criptomonedas, efectivo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1 flex-shrink-0">•</span>
                      <span><strong>Vendedor no identificable:</strong> Sin información de contacto real o registro empresarial</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1 flex-shrink-0">•</span>
                      <span><strong>Contacto solo por WhatsApp/Telegram:</strong> Vendedores legítimos tienen canales oficiales</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* ===== TIER 3: Plataformas Internacionales Especializadas ===== */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Plataformas Internacionales Especializadas
                </h2>

                <p className="text-lg text-[#1d110c] mb-6">
                  Si no obtuviste entradas en la lotería oficial o la venta general se agotó antes de que pudieras comprar,
                  existen plataformas internacionales especializadas en eventos deportivos que ofrecen una alternativa
                  verificada para compradores internacionales.
                </p>

                <div className="bg-white border-2 border-primary rounded-xl shadow-sm p-6 mb-6">
                  <div className="flex items-center mb-4">
                    <span className="material-symbols-outlined text-primary mr-3" style={{fontSize: '28px'}}>verified</span>
                    <h3 className="text-2xl font-bold text-[#1d110c]">Para Compradores Internacionales</h3>
                  </div>

                  <p className="text-[#1d110c] mb-4">
                    Para compradores internacionales que necesitan garantías adicionales, una plataforma internacional
                    especializada como{' '}
                    <a
                      href="https://goaltickets.com/es/collections/entradas-abierto-francia-2026"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold hover:underline"
                    >
                      GoalTickets
                    </a>
                    {' '}ofrece:
                  </p>

                  <ul className="space-y-3 text-[#1d110c] mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1 flex-shrink-0">✓</span>
                      <span><strong>Entradas garantizadas:</strong> Con transferencia oficial a través de la app del torneo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1 flex-shrink-0">✓</span>
                      <span><strong>Especialización deportiva:</strong> Experiencia específica en Grand Slams y eventos deportivos internacionales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1 flex-shrink-0">✓</span>
                      <span><strong>Interfaz en español:</strong> Proceso de compra completamente en tu idioma</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1 flex-shrink-0">✓</span>
                      <span><strong>Disponibilidad extendida:</strong> Acceso a entradas incluso cuando el canal oficial está agotado</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1 flex-shrink-0">✓</span>
                      <span><strong>Garantía de reembolso:</strong> Protección si el evento se cancela o las entradas no son válidas</span>
                    </li>
                  </ul>

                  <div className="bg-[#fcf9f8] border border-[#ead5cd] rounded-lg p-4">
                    <p className="text-[#1d110c] text-sm">
                      <strong>Nota:</strong> Los precios en plataformas de reventa especializada son superiores al precio facial
                      oficial, ya que incluyen el servicio de garantía y disponibilidad. Siempre intenta primero el canal oficial.
                    </p>
                  </div>
                </div>

                {/* Otras alternativas legítimas */}
                <h3 className="text-2xl font-bold mb-4 text-[#1d110c]">Otras Alternativas Legítimas</h3>

                <div className="space-y-4">
                  <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6">
                    <h4 className="text-lg font-bold mb-2 text-[#1d110c]">Plataforma Oficial de Reventa FFT</h4>
                    <p className="text-[#1d110c]">
                      La FFT ocasionalmente habilita una plataforma de reventa donde titulares originales pueden
                      vender entradas a precio facial. Disponibilidad limitada — monitorea regularmente tu cuenta
                      en rolandgarros.com.
                    </p>
                  </div>

                  <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6">
                    <h4 className="text-lg font-bold mb-2 text-[#1d110c]">Agencias de Viaje Autorizadas por la FFT</h4>
                    <p className="text-[#1d110c]">
                      Algunas agencias tienen acuerdos oficiales con la FFT para paquetes turísticos. Verifica que la
                      agencia sea partner oficial buscando su listado en el sitio web de la FFT. Ofrecen paquetes
                      completos (hotel + entradas + transporte) a precio premium.
                    </p>
                  </div>

                  <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6">
                    <h4 className="text-lg font-bold mb-2 text-[#1d110c]">Flexibilidad de Fechas</h4>
                    <p className="text-[#1d110c]">
                      Si tu primera opción se agotó, considera días alternativos. Tercera ronda ofrece gran tenis a
                      precios moderados. Suzanne-Lenglen tiene mejor disponibilidad que Philippe-Chatrier.
                      Días entre semana son más fáciles de conseguir que fines de semana.
                    </p>
                  </div>
                </div>
              </section>

              {/* Protección al Consumidor */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Protección al Consumidor: Tus Derechos
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border-l-4 border-green-500 rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-bold mb-3 text-[#1d110c]">Compra en Canal Oficial</h3>
                    <ul className="space-y-2 text-[#1d110c] text-sm">
                      <li>• Reembolso completo si el evento se cancela</li>
                      <li>• Soporte oficial de la FFT</li>
                      <li>• Protección de datos bajo GDPR</li>
                      <li>• Garantía de entrada válida</li>
                    </ul>
                  </div>

                  <div className="bg-white border-l-4 border-primary rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-bold mb-3 text-[#1d110c]">Compra en Plataforma Verificada</h3>
                    <ul className="space-y-2 text-[#1d110c] text-sm">
                      <li>• Garantía de autenticidad de la plataforma</li>
                      <li>• Transferencia oficial por app</li>
                      <li>• Reembolso según política de la plataforma</li>
                      <li>• Soporte al cliente en tu idioma</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Preguntas Frecuentes
                </h2>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6">
                      <h3 className="text-lg font-bold mb-2 text-[#1d110c]">{faq.question}</h3>
                      <p className="text-[#1d110c]">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Resumen */}
              <section>
                <div className="bg-white border-2 border-[#ead5cd] rounded-xl shadow-sm p-8">
                  <h2 className="text-3xl font-bold mb-4 text-[#1d110c]">
                    Resumen: Tu Estrategia de Compra
                  </h2>

                  <div className="space-y-4 text-[#1d110c]">
                    <div className="bg-[#fcf9f8] rounded-lg p-4">
                      <div className="flex items-start">
                        <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm">1</span>
                        <div>
                          <p className="font-bold">Intenta primero en rolandgarros.com</p>
                          <p className="text-sm text-[#a15d45]">Crea tu cuenta, participa en la lotería y prepárate para la venta general</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#fcf9f8] rounded-lg p-4">
                      <div className="flex items-start">
                        <span className="bg-primary text-white rounded-full w-7 h-7 flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm">2</span>
                        <div>
                          <p className="font-bold">Si no consigues entradas, usa plataformas especializadas</p>
                          <p className="text-sm text-[#a15d45]">Recurre a plataformas verificadas con garantía de autenticidad</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#fcf9f8] rounded-lg p-4">
                      <div className="flex items-start">
                        <span className="bg-red-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm">3</span>
                        <div>
                          <p className="font-bold">NUNCA compres de vendedores no verificados</p>
                          <p className="text-sm text-[#a15d45]">Evita redes sociales, vendedores callejeros y agencias sin trayectoria</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Related Links */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Guías Relacionadas
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <Link
                    href="/entradas-roland-garros-2026/tipos-de-entradas"
                    className="block bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2 text-[#1d110c]">Tipos de Entradas</h3>
                    <p className="text-[#1d110c] mb-3">
                      Elige qué tipo de entrada comprar antes de buscar dónde comprar.
                    </p>
                    <span className="text-primary font-semibold inline-flex items-center gap-1">
                      Leer más
                      <span className="material-symbols-outlined" style={{fontSize: '18px'}}>arrow_forward</span>
                    </span>
                  </Link>

                  <Link
                    href="/entradas-roland-garros-2026/precios"
                    className="block bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2 text-[#1d110c]">Precios Oficiales</h3>
                    <p className="text-[#1d110c] mb-3">
                      Conoce los precios reales para identificar ofertas sospechosas.
                    </p>
                    <span className="text-primary font-semibold inline-flex items-center gap-1">
                      Leer más
                      <span className="material-symbols-outlined" style={{fontSize: '18px'}}>arrow_forward</span>
                    </span>
                  </Link>

                  <Link
                    href="/entradas-roland-garros-2026"
                    className="block bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2 text-[#1d110c]">Guía Principal</h3>
                    <p className="text-[#1d110c] mb-3">
                      Volver a la guía completa de entradas Roland Garros 2026.
                    </p>
                    <span className="text-primary font-semibold inline-flex items-center gap-1">
                      Leer más
                      <span className="material-symbols-outlined" style={{fontSize: '18px'}}>arrow_forward</span>
                    </span>
                  </Link>

                  <Link
                    href="/calendario-roland-garros-2026"
                    className="block bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2 text-[#1d110c]">Calendario 2026</h3>
                    <p className="text-[#1d110c] mb-3">
                      Planifica qué días comprar entradas según el calendario oficial.
                    </p>
                    <span className="text-primary font-semibold inline-flex items-center gap-1">
                      Leer más
                      <span className="material-symbols-outlined" style={{fontSize: '18px'}}>arrow_forward</span>
                    </span>
                  </Link>
                </div>
              </section>

            </div>
          </div>
        </article>

        {/* CTA */}
        <section className="py-10 bg-[#1d110c] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Planifica tu Compra con Confianza
            </h2>
            <p className="text-xl mb-6 text-[#ead5cd]">
              Empieza por el canal oficial y usa plataformas verificadas como respaldo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/entradas-roland-garros-2026"
                className="bg-white text-[#1d110c] px-8 py-3 rounded-lg font-bold hover:bg-[#fcf9f8] transition-colors"
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
