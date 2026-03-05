import { Metadata } from 'next'
import Link from 'next/link'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { PageHero } from '@/components/ui/PageHero'
import { GoalTicketsCTA } from '@/components/ui/GoalTicketsCTA'

export const metadata: Metadata = {
  title: 'Sesion Nocturna Roland Garros 2026: Horarios, Entradas y Experiencia',
  description: 'Todo sobre la sesion nocturna de Roland Garros 2026: horarios, precios de entradas, ambiente, consejos practicos y como combinar sesion diurna y nocturna.',
  keywords: 'sesion nocturna roland garros, night session roland garros, entradas sesion nocturna, horario sesion nocturna, philippe chatrier noche',
  openGraph: {
    title: 'Sesion Nocturna Roland Garros 2026: Horarios, Entradas y Experiencia',
    description: 'Guia completa de la sesion nocturna de Roland Garros: horarios, precios, ambiente y consejos',
    type: 'article',
  },
  alternates: {
    canonical: 'https://entradasrolandgarros.com/guia-completa/sesion-nocturna',
  },
}

const faqs = [
  {
    question: '¿Que es la sesion nocturna de Roland Garros?',
    answer: 'La sesion nocturna de Roland Garros es un evento introducido en 2021 que se celebra exclusivamente en la pista Philippe-Chatrier. Consiste en un partido individual que se disputa bajo las luces del estadio, ofreciendo una experiencia mas intima y exclusiva que las sesiones diurnas. La sesion nocturna se ha convertido en uno de los momentos mas esperados del torneo.'
  },
  {
    question: '¿A que hora empieza la sesion nocturna?',
    answer: 'La sesion nocturna comienza a las 20:00 horas (8:00 PM). Las puertas suelen abrirse aproximadamente una hora antes, permitiendo a los espectadores acomodarse y disfrutar del ambiente previo al partido. La hora de finalizacion depende de la duracion del partido, pudiendo extenderse hasta pasada la medianoche en encuentros largos.'
  },
  {
    question: '¿Cuanto cuestan las entradas para la sesion nocturna?',
    answer: 'Las entradas para la sesion nocturna oscilan entre aproximadamente 70 EUR para las categorias mas altas hasta 250 EUR o mas para los mejores asientos cercanos a la pista. Los precios varian segun la ronda del torneo y la demanda del partido programado. En comparacion, las sesiones diurnas comienzan desde 35 EUR pero incluyen acceso a multiples partidos durante todo el dia.'
  },
  {
    question: '¿Puedo asistir a la sesion diurna y nocturna el mismo dia?',
    answer: 'Si, puedes asistir a ambas sesiones el mismo dia, pero necesitas entradas separadas para cada una. Al finalizar la sesion diurna deberas salir del recinto y volver a entrar con tu entrada de sesion nocturna. Te recomendamos aprovechar el tiempo intermedio para cenar en los alrededores del estadio o descansar en tu hotel.'
  },
  {
    question: '¿Que partidos se juegan en la sesion nocturna?',
    answer: 'En la sesion nocturna se programa un unico partido por noche, generalmente un enfrentamiento destacado del cuadro individual masculino o femenino. La organizacion selecciona los partidos mas atractivos de cada ronda, por lo que es habitual ver a los favoritos y las principales estrellas del tenis mundial bajo las luces de Philippe-Chatrier.'
  },
  {
    question: '¿Hay transporte publico despues de la sesion nocturna?',
    answer: 'Si, el metro de Paris funciona hasta aproximadamente la 1:15 AM, lo que permite regresar comodamente al centro de la ciudad incluso si el partido se extiende. Las estaciones mas cercanas son Porte d\'Auteuil (linea 10) y Michel-Ange Auteuil (lineas 9 y 10). Tambien puedes utilizar taxis, VTC o servicios como Uber que operan toda la noche.'
  },
  {
    question: '¿Hace frio en la sesion nocturna de Roland Garros?',
    answer: 'Las temperaturas en Paris durante mayo y junio bajan considerablemente al caer la noche, pudiendo descender hasta 12-15°C. Es muy recomendable llevar una chaqueta ligera o jersey, incluso si durante el dia ha hecho calor. El techo retractil de Philippe-Chatrier puede cerrarse en caso de lluvia, pero no elimina completamente el frio nocturno.'
  },
  {
    question: '¿Merece la pena la sesion nocturna?',
    answer: 'Absolutamente. La sesion nocturna ofrece una experiencia unica e irrepetible: un ambiente mas intimo con aproximadamente 15,000 espectadores, iluminacion espectacular, y la emocion de ver un partido estelar en un entorno exclusivo. Muchos aficionados consideran la sesion nocturna como el momento mas memorable de su visita a Roland Garros.'
  }
]

export default function SesionNocturnaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <PageHero
        title="Sesion Nocturna de Roland Garros"
        subtitle="Vive el tenis bajo las luces de Philippe-Chatrier"
        image="/images/heroes/tennis-stadium.jpg"
        badge={{ icon: 'nights_stay', text: 'Night Session' }}
        primaryCta={{ text: 'Comprar Entradas', href: 'https://goaltickets.com/es/collections/entradas-roland-garros-2026', icon: 'confirmation_number', external: true }}
      />

      {/* Introduccion */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">¿Que es la Sesion Nocturna de Roland Garros?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              La sesion nocturna de Roland Garros fue introducida en 2021, convirtiendo al torneo en el ultimo Grand Slam en ofrecer partidos nocturnos. Se disputa exclusivamente en la pista Philippe-Chatrier, la central del complejo, que cuenta con un techo retractil e iluminacion artificial de ultima generacion.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Cada noche se programa un unico partido que comienza a las 20:00 horas, creando una atmosfera completamente diferente a la que se vive durante el dia. La sesion nocturna se ha convertido en uno de los eventos mas codiciados del calendario tenistico, atrayendo a aficionados que buscan una experiencia premium e inolvidable en la arcilla parisina.
            </p>
          </div>
        </div>
      </section>

      {/* Horarios y Formato */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Horario y Formato de la Sesion Nocturna</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Horario</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-purple-600">Apertura de puertas:</span>
                    <span>Aproximadamente a las 19:00</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-purple-600">Inicio del partido:</span>
                    <span>20:00 (8:00 PM)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-purple-600">Duracion estimada:</span>
                    <span>2-4 horas segun el partido</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-purple-600">Finalizacion:</span>
                    <span>Entre las 22:00 y la medianoche</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Formato</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Un unico partido por noche</strong> en Philippe-Chatrier</li>
                  <li>Generalmente partidos de <strong>cuadro individual</strong> masculino o femenino</li>
                  <li>Las sesiones nocturnas se programan desde la <strong>primera ronda hasta las semifinales</strong></li>
                  <li>La organizacion elige los <strong>enfrentamientos mas atractivos</strong> de cada jornada</li>
                  <li>El techo retractil garantiza que el partido <strong>no se suspenda por lluvia</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Precios */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Precios: Sesion Nocturna vs. Sesion Diurna</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-200">
                <h3 className="text-xl font-bold mb-4 text-indigo-800">Sesion Nocturna</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between items-center border-b border-indigo-100 pb-2">
                    <span>Categorias altas</span>
                    <span className="font-bold">~70 EUR</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-indigo-100 pb-2">
                    <span>Categorias medias</span>
                    <span className="font-bold">~120-180 EUR</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-indigo-100 pb-2">
                    <span>Mejores asientos</span>
                    <span className="font-bold">250+ EUR</span>
                  </div>
                  <p className="text-sm text-indigo-600 mt-4">1 partido garantizado en Philippe-Chatrier</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-200">
                <h3 className="text-xl font-bold mb-4 text-green-800">Sesion Diurna</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between items-center border-b border-green-100 pb-2">
                    <span>Ground pass</span>
                    <span className="font-bold">desde 35 EUR</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-green-100 pb-2">
                    <span>Pistas principales</span>
                    <span className="font-bold">~55-150 EUR</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-green-100 pb-2">
                    <span>Primeras filas Chatrier</span>
                    <span className="font-bold">200+ EUR</span>
                  </div>
                  <p className="text-sm text-green-600 mt-4">Multiples partidos durante todo el dia</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <h3 className="font-bold mb-3">Consejo de Precio</h3>
              <p className="text-gray-700 text-sm">
                Aunque la sesion nocturna puede parecer mas cara por partido, ofrece la garantia de ver un enfrentamiento estelar en un ambiente exclusivo. Si buscas maximizar la cantidad de tenis, la sesion diurna es mas economica. Muchos aficionados combinan ambas para vivir la experiencia completa de Roland Garros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Atmosfera y Experiencia */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Atmosfera y Experiencia Nocturna</h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Un Ambiente Unico</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La sesion nocturna transforma Philippe-Chatrier en un escenario espectacular. Con aproximadamente 15,000 espectadores bajo la iluminacion artificial, la atmosfera es mas intima y electrica que durante el dia. Los focos crean un contraste dramatico con la arcilla naranja, y el publico, al estar concentrado en un solo partido, genera una energia incomparable.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  A diferencia de las sesiones diurnas donde los espectadores se reparten entre multiples pistas, la sesion nocturna concentra toda la atencion en un unico enfrentamiento. Esto crea un ambiente de evento especial, similar al de un concierto o una final deportiva, que resulta inolvidable para quienes asisten por primera vez.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">~15,000</div>
                  <p className="font-bold text-gray-900">Espectadores</p>
                  <p className="text-sm text-gray-600">Ambiente intimo y exclusivo</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">1</div>
                  <p className="font-bold text-gray-900">Partido por Noche</p>
                  <p className="text-sm text-gray-600">Toda la atencion en un enfrentamiento</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">20:00</div>
                  <p className="font-bold text-gray-900">Hora de Inicio</p>
                  <p className="text-sm text-gray-600">Bajo las luces de la central</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combinar Dia y Noche */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Como Combinar Sesion Diurna y Nocturna</h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Lo que Debes Saber</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="border-l-4 border-purple-500 pl-4">
                    <strong>Entradas separadas:</strong> Necesitas una entrada para la sesion diurna y otra diferente para la sesion nocturna. No existe un billete combinado.
                  </li>
                  <li className="border-l-4 border-purple-500 pl-4">
                    <strong>Salir y re-entrar:</strong> Al finalizar la sesion diurna (alrededor de las 19:00-19:30), debes abandonar el recinto. Podras volver a entrar con tu entrada nocturna aproximadamente a las 19:00.
                  </li>
                  <li className="border-l-4 border-purple-500 pl-4">
                    <strong>Tiempo intermedio:</strong> Aprovecha el intervalo entre sesiones para cenar en alguno de los restaurantes cercanos al estadio o descansar brevemente.
                  </li>
                  <li className="border-l-4 border-purple-500 pl-4">
                    <strong>Planifica tu energia:</strong> Un dia completo de tenis (11:00-24:00) es agotador. Lleva snacks, agua y considera un descanso real entre sesiones.
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h3 className="font-bold mb-3">Tip para Maximizar tu Dia</h3>
                <p className="text-gray-700 text-sm">
                  Si tienes entradas para ambas sesiones, empieza el dia explorando las pistas exteriores con un ground pass o una entrada para Suzanne-Lenglen o Simonne-Mathieu. Asi veras multiples partidos durante el dia y reservaras la experiencia premium de Philippe-Chatrier para la noche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurantes y Cena */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Cenar Cerca de la Sesion Nocturna</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Dentro del Recinto</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Roland Garros cuenta con varios puntos de restauracion dentro del complejo, incluyendo opciones gastro y bares que sirven comida rapida y platos preparados. Si llegas temprano a la sesion nocturna, puedes cenar algo ligero antes de que comience el partido.
                </p>
                <p className="text-sm text-gray-600">
                  Los precios dentro del recinto son elevados. Espera pagar entre 12-25 EUR por un plato y 6-10 EUR por una bebida.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">En los Alrededores</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  El barrio de Auteuil y la cercana Porte d'Auteuil ofrecen una buena seleccion de restaurantes y brasseries. Si combinas sesion diurna y nocturna, el intervalo entre ambas es perfecto para disfrutar de una cena tranquila fuera del estadio.
                </p>
                <p className="text-sm text-gray-600">
                  Reserva con antelacion durante las semanas del torneo, ya que los restaurantes cercanos se llenan rapidamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consejos Practicos */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Consejos Practicos para la Sesion Nocturna</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3 text-purple-600">Vestimenta</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Lleva una chaqueta ligera o jersey: las noches refrescan hasta 12-15°C</li>
                  <li>Pantalones largos son mas recomendables que shorts para la noche</li>
                  <li>Una bufanda fina puede ser util si eres friolero/a</li>
                  <li>Calzado comodo, especialmente si vienes de la sesion diurna</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3 text-blue-600">Transporte de Vuelta</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>El metro de Paris opera hasta aproximadamente la 1:15 AM</li>
                  <li>Estaciones cercanas: Porte d'Auteuil (L10) y Michel-Ange Auteuil (L9/L10)</li>
                  <li>Taxis y VTC (Uber, Bolt) disponibles toda la noche</li>
                  <li>Sal un poco antes del final si quieres evitar aglomeraciones en el metro</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3 text-green-600">Dentro del Estadio</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Llega al menos 30 minutos antes del inicio para acomodarte</li>
                  <li>Disfruta del ambiente previo: el estadio iluminado es espectacular</li>
                  <li>Compra bebidas y snacks antes del inicio para no perderte el comienzo</li>
                  <li>Respeta el silencio durante los puntos: el ambiente nocturno lo amplifica</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3 text-orange-600">Alojamiento</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Si asistes a la sesion nocturna, alojate cerca del estadio o bien comunicado por metro</li>
                  <li>El distrito 16 (Auteuil/Passy) es ideal por proximidad</li>
                  <li>Hoteles en el centro de Paris tambien son practicos gracias al metro</li>
                  <li>Reserva con antelacion: las fechas del torneo tienen alta demanda hotelera</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Preguntas Frecuentes sobre la Sesion Nocturna</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GoalTickets CTA */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <GoalTicketsCTA />
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Guias Relacionadas
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/entradas-roland-garros-2026" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="font-bold mb-1">Entradas Roland Garros 2026</h3>
                <p className="text-sm text-gray-600">Toda la informacion sobre entradas y precios</p>
              </Link>
              <Link href="/calendario-roland-garros-2026" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="font-bold mb-1">Calendario Roland Garros 2026</h3>
                <p className="text-sm text-gray-600">Fechas, rondas y horarios del torneo</p>
              </Link>
              <Link href="/guia-completa" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="font-bold mb-1">Guia Completa</h3>
                <p className="text-sm text-gray-600">Volver al indice principal de guias</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
