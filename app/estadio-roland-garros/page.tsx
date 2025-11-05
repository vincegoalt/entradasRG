import Link from 'next/link'
import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { SportsEventSchema } from '@/components/seo/SportsEventSchema'
import { FAQSchema } from '@/components/seo/FAQSchema'

export const metadata: Metadata = {
  title: 'Estadio Roland Garros: Pistas, Historia e Instalaciones | Guía Completa 2026',
  description: 'Descubre el estadio Roland Garros: pista Philippe-Chatrier con techo retráctil, Suzanne-Lenglen, Simonne-Mathieu, historia del complejo, instalaciones y mapa del recinto. Guía completa en español.',
  keywords: 'estadio roland garros, pistas roland garros, philippe chatrier, suzanne lenglen, simonne mathieu, instalaciones roland garros, historia roland garros',
  openGraph: {
    title: 'Estadio Roland Garros: Pistas, Historia e Instalaciones',
    description: 'Guía completa del estadio Roland Garros con todas las pistas, su historia y las instalaciones del complejo.',
    url: 'https://entradasrolandgarros.com/estadio-roland-garros',
    type: 'article',
  },
}

const faqs = [
  {
    question: '¿Cuántas pistas tiene el complejo de Roland Garros?',
    answer: 'Roland Garros cuenta con 3 pistas principales (Philippe-Chatrier, Suzanne-Lenglen y Simonne-Mathieu) y 15 pistas secundarias adicionales, sumando un total de 18 pistas de tierra batida para el torneo.'
  },
  {
    question: '¿Cuál es la capacidad de la pista Philippe-Chatrier?',
    answer: 'La pista Philippe-Chatrier tiene una capacidad de 15,225 espectadores. Es la pista central del complejo y cuenta con un techo retráctil instalado en 2020 que permite jugar bajo cualquier condición climática.'
  },
  {
    question: '¿Desde cuándo tiene techo retráctil Roland Garros?',
    answer: 'El techo retráctil de la pista Philippe-Chatrier se inauguró en 2020. Está compuesto por 11 vigas metálicas y puede cerrarse completamente en aproximadamente 15 minutos.'
  },
  {
    question: '¿Qué es especial de la pista Simonne-Mathieu?',
    answer: 'La pista Simonne-Mathieu, inaugurada en 2019, tiene un diseño arquitectónico único con cuatro invernaderos de vidrio que la rodean, integrándose perfectamente en el Jardín de las Serres d\'Auteuil. Tiene capacidad para 5,000 espectadores.'
  },
  {
    question: '¿Por qué se llama Roland Garros?',
    answer: 'El estadio lleva el nombre de Roland Garros, un pionero de la aviación francesa que fue el primer piloto en cruzar el mar Mediterráneo en 1913. Fue un héroe de la Primera Guerra Mundial y falleció en combate en 1918.'
  },
  {
    question: '¿Cuándo se inauguró el estadio Roland Garros?',
    answer: 'El estadio Roland Garros se inauguró en 1928, específicamente para albergar la defensa francesa de la Copa Davis contra Estados Unidos. El torneo de Roland Garros comenzó ese mismo año.'
  },
  {
    question: '¿Qué instalaciones tiene el complejo de Roland Garros?',
    answer: 'El complejo incluye un museo del tenis (Tenniseum), tiendas oficiales, restaurantes y bares, zona de prensa, instalaciones para jugadores, y el Village, una zona con actividades interactivas para los espectadores.'
  },
  {
    question: '¿Por qué la tierra batida es diferente de otras superficies?',
    answer: 'La tierra batida ralentiza el juego y produce botes más altos que otras superficies. Está compuesta principalmente de ladrillo triturado y polvo de roca. Requiere mantenimiento constante y favorece el juego defensivo y los peloteos largos.'
  }
]

export default function EstadioRolandGarrosPage() {
  return (
    <>
      <SportsEventSchema
        name="Roland Garros 2026 - Estadio"
        startDate="2026-05-24"
        endDate="2026-06-07"
        description="El estadio Roland Garros es el hogar del torneo de tenis más prestigioso en tierra batida, con pistas icónicas como Philippe-Chatrier, Suzanne-Lenglen y Simonne-Mathieu"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-[#fcf9f8]">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-[#ead5cd] py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: 'Estadio Roland Garros', url: 'https://entradasrolandgarros.com/estadio-roland-garros' }
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-white py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1d110c] mb-6">
                Estadio Roland Garros: El Templo de la Tierra Batida
              </h1>
              <p className="text-xl text-[#a15d45] mb-8">
                Descubre las pistas legendarias, la historia única y las instalaciones del complejo más emblemático del tenis mundial
              </p>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">18</div>
                <div className="text-sm text-[#a15d45]">Pistas Totales</div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">15,225</div>
                <div className="text-sm text-[#a15d45]">Capacidad Central</div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">1928</div>
                <div className="text-sm text-[#a15d45]">Año Inauguración</div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-[#ead5cd] p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">21 acres</div>
                <div className="text-sm text-[#a15d45]">Superficie Total</div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links to Subpages */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-8 text-[#1d110c]">
              Explora las Pistas e Instalaciones
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/estadio-roland-garros/pista-philippe-chatrier"
                className="bg-white p-6 rounded-xl shadow-sm border border-[#ead5cd] hover:shadow-md transition-shadow"
              >
                <span className="material-symbols-outlined text-primary block mb-3" style={{fontSize: '32px'}}>
                  stadium
                </span>
                <h3 className="font-bold text-lg mb-2 text-[#1d110c]">Pista Philippe-Chatrier</h3>
                <p className="text-[#a15d45] text-sm">La pista central con techo retráctil y 15,225 asientos</p>
              </Link>

              <Link
                href="/estadio-roland-garros/pista-suzanne-lenglen"
                className="bg-white p-6 rounded-xl shadow-sm border border-[#ead5cd] hover:shadow-md transition-shadow"
              >
                <span className="material-symbols-outlined text-primary block mb-3" style={{fontSize: '32px'}}>
                  sports_tennis
                </span>
                <h3 className="font-bold text-lg mb-2 text-[#1d110c]">Pista Suzanne-Lenglen</h3>
                <p className="text-[#a15d45] text-sm">La segunda pista más grande con 10,068 espectadores</p>
              </Link>

              <Link
                href="/estadio-roland-garros/pista-simonne-mathieu"
                className="bg-white p-6 rounded-xl shadow-sm border border-[#ead5cd] hover:shadow-md transition-shadow"
              >
                <span className="material-symbols-outlined text-primary block mb-3" style={{fontSize: '32px'}}>
                  yard
                </span>
                <h3 className="font-bold text-lg mb-2 text-[#1d110c]">Pista Simonne-Mathieu</h3>
                <p className="text-[#a15d45] text-sm">Diseño único rodeado de invernaderos históricos</p>
              </Link>

              <Link
                href="/estadio-roland-garros/historia"
                className="bg-white p-6 rounded-xl shadow-sm border border-[#ead5cd] hover:shadow-md transition-shadow"
              >
                <span className="material-symbols-outlined text-primary block mb-3" style={{fontSize: '32px'}}>
                  history_edu
                </span>
                <h3 className="font-bold text-lg mb-2 text-[#1d110c]">Historia de Roland Garros</h3>
                <p className="text-[#a15d45] text-sm">Del aviador pionero al estadio legendario desde 1928</p>
              </Link>

              <Link
                href="/estadio-roland-garros/mapa-instalaciones"
                className="bg-white p-6 rounded-xl shadow-sm border border-[#ead5cd] hover:shadow-md transition-shadow md:col-span-2"
              >
                <span className="material-symbols-outlined text-primary block mb-3" style={{fontSize: '32px'}}>
                  map
                </span>
                <h3 className="font-bold text-lg mb-2 text-[#1d110c]">Mapa e Instalaciones</h3>
                <p className="text-[#a15d45] text-sm">Guía completa de tiendas, restaurantes, museo y cómo moverte por el complejo</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">

              {/* Introduction */}
              <section>
                <p className="text-lg text-[#1d110c] leading-relaxed mb-6">
                  El <strong>estadio Roland Garros</strong> es mucho más que un simple complejo deportivo: es el templo mundial de la tierra batida y el escenario donde se han escrito las páginas más gloriosas del tenis. Ubicado en el distrito 16 de París, en el corazón del barrio de Auteuil, este recinto histórico alberga cada primavera el único Grand Slam que se disputa sobre la superficie más exigente del tenis profesional.
                </p>
                <p className="text-lg text-[#1d110c] leading-relaxed">
                  Desde su inauguración en 1928, Roland Garros ha evolucionado continuamente para mantener su estatus como uno de los estadios deportivos más prestigiosos del mundo. La modernización más significativa llegó con el techo retráctil de la pista central Philippe-Chatrier en 2020 y la construcción de la innovadora pista Simonne-Mathieu en 2019, que se integra magistralmente con los invernaderos históricos del Jardín Botánico de Auteuil.
                </p>
              </section>

              {/* Facilities Overview */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Instalaciones y Servicios del Complejo
                </h2>

                <p className="text-lg text-[#1d110c] leading-relaxed mb-6">
                  Roland Garros es más que pistas de tenis. El complejo ofrece una experiencia completa con restaurantes, tiendas, museo, y zonas de entretenimiento que hacen de cada visita algo memorable.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white border border-[#ead5cd] rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <span className="material-symbols-outlined text-primary block mb-3 mx-auto" style={{fontSize: '40px'}}>
                      restaurant
                    </span>
                    <h3 className="font-bold text-lg mb-2 text-[#1d110c]">Restauración</h3>
                    <p className="text-[#a15d45] text-sm">
                      Más de 40 puntos de comida y bebida, desde comida rápida hasta restaurantes gourmet
                    </p>
                  </div>

                  <div className="bg-white border border-[#ead5cd] rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <span className="material-symbols-outlined text-primary block mb-3 mx-auto" style={{fontSize: '40px'}}>
                      museum
                    </span>
                    <h3 className="font-bold text-lg mb-2 text-[#1d110c]">Tenniseum</h3>
                    <p className="text-[#a15d45] text-sm">
                      Museo del tenis con exhibiciones históricas y trofeos legendarios
                    </p>
                  </div>

                  <div className="bg-white border border-[#ead5cd] rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <span className="material-symbols-outlined text-primary block mb-3 mx-auto" style={{fontSize: '40px'}}>
                      shopping_bag
                    </span>
                    <h3 className="font-bold text-lg mb-2 text-[#1d110c]">Tiendas Oficiales</h3>
                    <p className="text-[#a15d45] text-sm">
                      Boutiques con merchandising oficial del torneo y equipamiento de tenis
                    </p>
                  </div>

                  <div className="bg-white border border-[#ead5cd] rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <span className="material-symbols-outlined text-primary block mb-3 mx-auto" style={{fontSize: '40px'}}>
                      videogame_asset
                    </span>
                    <h3 className="font-bold text-lg mb-2 text-[#1d110c]">The Village</h3>
                    <p className="text-[#a15d45] text-sm">
                      Zona interactiva con juegos, actividades y experiencias para toda la familia
                    </p>
                  </div>

                  <div className="bg-white border border-[#ead5cd] rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <span className="material-symbols-outlined text-primary block mb-3 mx-auto" style={{fontSize: '40px'}}>
                      tv
                    </span>
                    <h3 className="font-bold text-lg mb-2 text-[#1d110c]">Pantallas Gigantes</h3>
                    <p className="text-[#a15d45] text-sm">
                      Múltiples pantallas por todo el recinto para no perderte ningún partido
                    </p>
                  </div>

                  <div className="bg-white border border-[#ead5cd] rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <span className="material-symbols-outlined text-primary block mb-3 mx-auto" style={{fontSize: '40px'}}>
                      accessible
                    </span>
                    <h3 className="font-bold text-lg mb-2 text-[#1d110c]">Accesibilidad</h3>
                    <p className="text-[#a15d45] text-sm">
                      Instalaciones completamente accesibles para personas con movilidad reducida
                    </p>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section>
                <h2 className="text-3xl font-bold mb-8 text-[#1d110c]">
                  Preguntas Frecuentes sobre el Estadio
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

            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#1d110c]">
              Planifica tu Visita a Roland Garros 2026
            </h2>
            <p className="text-xl mb-8 text-[#a15d45]">
              Explora nuestras guías detalladas para cada pista e instalación
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/entradas-roland-garros-2026"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                Ver Tipos de Entradas
                <span className="material-symbols-outlined" style={{fontSize: '20px'}}>arrow_forward</span>
              </Link>
              <Link
                href="/calendario-roland-garros-2026"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-bold border-2 border-primary hover:bg-[#fcf9f8] transition-colors"
              >
                Calendario 2026
                <span className="material-symbols-outlined" style={{fontSize: '20px'}}>arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
