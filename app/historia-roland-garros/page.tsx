import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { PageHero } from '@/components/ui/PageHero'
import { GoalTicketsCTA } from '@/components/ui/GoalTicketsCTA'

export const metadata: Metadata = {
  title: 'Historia de Roland Garros: Origen, el Aviador y el Torneo',
  description: 'La historia completa de Roland Garros: quién fue Roland Garros (aviador francés 1888-1918), cómo nació el torneo en 1928, momentos clave y evolución hasta 2026.',
  keywords: [
    'historia roland garros',
    'historia de roland garros',
    'quien fue roland garros',
    'roland garros aviador',
    'origen roland garros',
    'historia french open',
    'historia torneo roland garros'
  ],
  openGraph: {
    title: 'Historia de Roland Garros: Del Aviador al Grand Slam',
    description: 'La fascinante historia de Roland Garros: el aviador, el torneo y sus momentos más memorables.',
    type: 'article',
    url: 'https://entradasrolandgarros.com/historia-roland-garros',
  },
  alternates: {
    canonical: 'https://entradasrolandgarros.com/historia-roland-garros',
  },
}

const faqs = [
  {
    question: '¿Quién fue Roland Garros?',
    answer: 'Roland Garros (1888-1918) fue un aviador y héroe de guerra francés. Realizó la primera travesía aérea del Mar Mediterráneo en 1913 y desarrolló un sistema para disparar ametralladoras a través de hélices. Murió en combate el 5 de octubre de 1918, un mes antes del fin de la Primera Guerra Mundial.'
  },
  {
    question: '¿Por qué el torneo se llama Roland Garros?',
    answer: 'El torneo lleva el nombre del estadio donde se celebra, inaugurado en 1928. El nombre honra al aviador Roland Garros porque era miembro del Stade Français, el club que cedió el terreno para construir la pista donde Francia defendería su título de la Copa Davis.'
  },
  {
    question: '¿Cuándo se fundó el torneo de Roland Garros?',
    answer: 'El French Open (Internacionales de Francia) comenzó en 1891, pero solo se abrió a jugadores internacionales en 1925. El estadio actual, Stade Roland Garros, se inauguró en 1928 cuando Francia necesitó un recinto más grande para defender su Copa Davis.'
  },
  {
    question: '¿Quién ha ganado más veces Roland Garros?',
    answer: 'Rafael Nadal ostenta el récord absoluto con 14 títulos masculinos (2005-2022). En categoría femenina, Chris Evert ganó 7 títulos (1974-1986). En la era moderna, Iga Swiątek acumula 4 títulos (2020-2024).'
  },
  {
    question: '¿Cuántos títulos de Roland Garros tiene Rafael Nadal?',
    answer: 'Rafael Nadal ganó 14 títulos de Roland Garros entre 2005 y 2022, un récord que muchos consideran el logro deportivo más dominante en la historia del tenis. Su récord en el torneo es de aproximadamente 112 victorias y solo 4 derrotas, un porcentaje de victoria superior al 96%. Es conocido como "El Rey de la Tierra Batida" y Roland Garros es considerado "su casa".'
  }
]

export default function HistoriaRolandGarrosPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-[#fcf9f8]">
        <PageHero
          title="Historia de Roland Garros"
          subtitle="Del aviador francés al Grand Slam más icónico del tenis mundial"
          image="/images/heroes/clay-court.jpg"
          badge={{ icon: 'history', text: 'Desde 1891' }}
          primaryCta={{ text: 'Comprar Entradas', href: 'https://goaltickets.com/es/collections/entradas-roland-garros-2026', icon: 'confirmation_number', external: true }}
          secondaryCta={{ text: 'Leer Historia', href: '#historia', icon: 'arrow_downward' }}
        />

        <div className="bg-white/80 border-b border-[#ead5cd] py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: 'Historia de Roland Garros', url: 'https://entradasrolandgarros.com/historia-roland-garros' }
              ]}
            />
          </div>
        </div>

        <article className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">

              {/* Capsule */}
              <div className="rounded-xl border border-[#ead5cd] bg-gradient-to-r from-orange-50/50 to-[#fcf9f8] p-6 shadow-sm mb-10">
                <p className="text-[#1d110c] text-base leading-relaxed">
                  <strong>Roland Garros</strong> lleva el nombre del aviador francés <strong>Roland Garros (1888-1918)</strong>, héroe de la Primera Guerra Mundial que realizó la primera travesía aérea del Mediterráneo en 1913. El estadio se inauguró en <strong>1928</strong> para defender la Copa Davis, y el torneo se convirtió en uno de los 4 Grand Slams. Con <strong>14 títulos de Rafael Nadal</strong>, es el torneo más dominado por un solo jugador en la historia.
                </p>
              </div>

              {/* Roland Garros the Aviator */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Quién Fue Roland Garros: El Aviador
                </h2>

                <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 mb-6">
                  <div className="space-y-4 text-[#1d110c]">
                    <p><strong>Nombre completo:</strong> Eugène Adrien Roland Georges Garros</p>
                    <p><strong>Nacimiento:</strong> 6 de octubre de 1888, Saint-Denis, Reunión (Francia)</p>
                    <p><strong>Fallecimiento:</strong> 5 de octubre de 1918, Vouziers, Francia (en combate)</p>
                  </div>
                </div>

                <p className="text-lg text-[#1d110c] leading-relaxed mb-4">
                  Roland Garros fue un pionero de la aviación francesa cuya breve pero extraordinaria vida dejó una huella imborrable. El 23 de septiembre de 1913, realizó la <strong>primera travesía aérea del Mar Mediterráneo</strong>, volando 730 km desde Fréjus (Francia) hasta Bizerta (Túnez) en 7 horas y 53 minutos, un logro considerado imposible en su época.
                </p>

                <p className="text-lg text-[#1d110c] leading-relaxed mb-4">
                  Durante la Primera Guerra Mundial, Garros desarrolló un sistema revolucionario que permitía <strong>disparar ametralladoras a través de las hélices</strong> de los aviones, cambiando para siempre la guerra aérea. Fue capturado por los alemanes en 1915 y pasó tres años como prisionero antes de escapar en 1918.
                </p>

                <p className="text-lg text-[#1d110c] leading-relaxed">
                  Tragicamente, Roland Garros murió en combate el 5 de octubre de 1918, apenas un mes antes del armisticio que puso fin a la guerra, y un día antes de cumplir 30 años.
                </p>
              </section>

              {/* Tournament Timeline */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Momentos Clave en la Historia del Torneo
                </h2>

                <div className="space-y-4">
                  <div className="bg-white border-l-4 border-primary p-6 rounded-r-xl">
                    <p className="font-bold text-primary text-lg">1891</p>
                    <p className="text-[#1d110c]">Se celebran los primeros Campeonatos de Francia de tenis, abiertos solo a jugadores franceses y miembros de clubes franceses.</p>
                  </div>

                  <div className="bg-white border-l-4 border-primary p-6 rounded-r-xl">
                    <p className="font-bold text-primary text-lg">1925</p>
                    <p className="text-[#1d110c]">El torneo se abre por primera vez a jugadores internacionales, convirtiéndose en los "Internacionales de Francia".</p>
                  </div>

                  <div className="bg-white border-l-4 border-primary p-6 rounded-r-xl">
                    <p className="font-bold text-primary text-lg">1928</p>
                    <p className="text-[#1d110c]">Se inaugura el Stade Roland Garros para que Francia defienda su título de Copa Davis. El nombre honra al aviador, miembro del Stade Français.</p>
                  </div>

                  <div className="bg-white border-l-4 border-primary p-6 rounded-r-xl">
                    <p className="font-bold text-primary text-lg">1968</p>
                    <p className="text-[#1d110c]">Roland Garros se convierte en el primer Grand Slam de la Era Abierta, permitiendo la participación de jugadores profesionales.</p>
                  </div>

                  <div className="bg-white border-l-4 border-primary p-6 rounded-r-xl">
                    <p className="font-bold text-primary text-lg">2005</p>
                    <p className="text-[#1d110c]">Rafael Nadal gana su primer Roland Garros con 19 años, inaugurando una dinastía de 14 títulos que redefinirá el torneo.</p>
                  </div>

                  <div className="bg-white border-l-4 border-primary p-6 rounded-r-xl">
                    <p className="font-bold text-primary text-lg">2020</p>
                    <p className="text-[#1d110c]">Se inaugura el techo retráctil de la pista Philippe-Chatrier. El torneo se pospone al otoño por primera vez debido a la pandemia.</p>
                  </div>

                  <div className="bg-white border-l-4 border-primary p-6 rounded-r-xl">
                    <p className="font-bold text-primary text-lg">2022</p>
                    <p className="text-[#1d110c]">Nadal gana su título número 14, cifra que probablemente nunca será igualada. Iga Swiątek domina el cuadro femenino con su segundo título.</p>
                  </div>
                </div>
              </section>

              <GoalTicketsCTA />

              {/* FAQ */}
              <section className="mb-12">
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

              {/* Deep Dive Link */}
              <section className="mb-12">
                <div className="bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 text-center">
                  <p className="text-[#1d110c] mb-4">
                    Para una historia más detallada del estadio, sus pistas y renovaciones:
                  </p>
                  <Link
                    href="/estadio-roland-garros/historia"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    Historia Completa del Estadio
                    <span className="material-symbols-outlined" style={{fontSize: '20px'}}>arrow_forward</span>
                  </Link>
                </div>
              </section>

              {/* Related */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  Contenido Relacionado
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <Link
                    href="/donde-se-juega-roland-garros"
                    className="block bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow card-hover"
                  >
                    <h3 className="text-lg font-bold mb-2 text-[#1d110c]">Dónde Se Juega</h3>
                    <p className="text-sm text-[#a15d45]">
                      Ubicación, superficie y cómo llegar al Stade Roland Garros.
                    </p>
                  </Link>

                  <Link
                    href="/jugadores-favoritos-2026/records-historicos"
                    className="block bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow card-hover"
                  >
                    <h3 className="text-lg font-bold mb-2 text-[#1d110c]">Récords Históricos</h3>
                    <p className="text-sm text-[#a15d45]">
                      Los récords y datos más impresionantes del torneo.
                    </p>
                  </Link>

                  <Link
                    href="/entradas-roland-garros-2026"
                    className="block bg-white border border-[#ead5cd] rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow card-hover"
                  >
                    <h3 className="text-lg font-bold mb-2 text-[#1d110c]">Entradas 2026</h3>
                    <p className="text-sm text-[#a15d45]">
                      Comprar entradas para Roland Garros 2026 desde 35 EUR.
                    </p>
                  </Link>
                </div>
              </section>

            </div>
          </div>
        </article>

        <section className="relative py-16 bg-gradient-to-br from-[#1d110c] via-[#2a1a12] to-[#1d110c] overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: "url('/images/heroes/clay-court.jpg')" }} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">¿Listo para Roland Garros 2026?</h2>
            <p className="text-lg mb-8 text-white/70 max-w-xl mx-auto">Asegura tus entradas y vive el torneo más emocionante del tenis</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://goaltickets.com/es/collections/entradas-roland-garros-2026" target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl font-bold hover:bg-orange-600 transition-colors btn-shine">
                <span className="material-symbols-outlined" style={{fontSize: '20px'}}>confirmation_number</span>
                Comprar Entradas
              </a>
              <a href="/" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-3.5 rounded-xl font-bold border border-white/20 hover:bg-white/20 transition-colors">
                Explorar la Guía
                <span className="material-symbols-outlined" style={{fontSize: '20px'}}>arrow_forward</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
