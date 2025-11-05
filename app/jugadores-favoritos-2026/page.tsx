import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jugadores Favoritos Roland Garros 2026: Candidatos al Título | Guía Completa',
  description: 'Descubre los favoritos para Roland Garros 2026. Análisis completo de candidatos masculinos y femeninos, el legado de Nadal y los records históricos del torneo.',
  keywords: 'jugadores favoritos roland garros 2026, nadal roland garros, favoritos roland garros, records roland garros, tenistas roland garros 2026',
  openGraph: {
    title: 'Jugadores Favoritos Roland Garros 2026: Candidatos al Título',
    description: 'Guía completa de los favoritos para Roland Garros 2026, análisis de los mejores tenistas y records históricos del torneo',
    type: 'article',
  },
}

export default function JugadoresFavoritosPage() {
  return (
    <>
      <div className="min-h-screen bg-[#fcf9f8]">
        {/* Hero Section */}
        <section className="bg-white py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1d110c] mb-6">
                Jugadores Favoritos Roland Garros 2026
              </h1>
              <p className="text-xl text-[#a15d45] mb-8">
                Análisis completo de los principales candidatos masculinos y femeninos para conquistar París en 2026
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg leading-relaxed text-[#1d110c]">
                Roland Garros 2026 promete ser una edición histórica del torneo más prestigioso en tierra batida.
                Con una nueva generación de tenistas consolidándose en el circuito y varios campeones experimentados
                aún compitiendo al más alto nivel, la competencia será feroz tanto en el cuadro masculino como en el femenino.
              </p>

              <p className="text-lg leading-relaxed text-[#1d110c]">
                La tierra batida de París siempre ha sido un terreno especial que requiere una combinación única de
                resistencia física, paciencia táctica y habilidad técnica. Los jugadores que dominan en Roland Garros
                son aquellos que pueden mantener su nivel durante largos rallies, adaptarse a las condiciones
                cambiantes de la arcilla y gestionar la presión de competir en uno de los escenarios más exigentes del tenis mundial.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Navigation Cards */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-10 text-[#1d110c]">
              Explora por Categoría
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/jugadores-favoritos-2026/favoritos-masculinos"
                className="bg-white p-6 rounded-xl shadow-sm border border-[#ead5cd] hover:shadow-md transition-shadow"
              >
                <span className="material-symbols-outlined text-primary block mb-3" style={{fontSize: '32px'}}>
                  sports_tennis
                </span>
                <h3 className="text-xl font-bold mb-3 text-[#1d110c]">Favoritos Masculinos</h3>
                <p className="text-[#a15d45] mb-4">
                  Análisis detallado de los principales candidatos al título masculino en Roland Garros 2026
                </p>
                <span className="text-primary font-semibold inline-flex items-center gap-1">
                  Leer más
                  <span className="material-symbols-outlined" style={{fontSize: '18px'}}>arrow_forward</span>
                </span>
              </Link>

              <Link
                href="/jugadores-favoritos-2026/favoritas-femeninas"
                className="bg-white p-6 rounded-xl shadow-sm border border-[#ead5cd] hover:shadow-md transition-shadow"
              >
                <span className="material-symbols-outlined text-primary block mb-3" style={{fontSize: '32px'}}>
                  emoji_events
                </span>
                <h3 className="text-xl font-bold mb-3 text-[#1d110c]">Favoritas Femeninas</h3>
                <p className="text-[#a15d45] mb-4">
                  Las principales contendientes para el título femenino en el Grand Slam parisino
                </p>
                <span className="text-primary font-semibold inline-flex items-center gap-1">
                  Leer más
                  <span className="material-symbols-outlined" style={{fontSize: '18px'}}>arrow_forward</span>
                </span>
              </Link>

              <Link
                href="/jugadores-favoritos-2026/records-historicos"
                className="bg-white p-6 rounded-xl shadow-sm border border-[#ead5cd] hover:shadow-md transition-shadow"
              >
                <span className="material-symbols-outlined text-primary block mb-3" style={{fontSize: '32px'}}>
                  analytics
                </span>
                <h3 className="text-xl font-bold mb-3 text-[#1d110c]">Records Históricos</h3>
                <p className="text-[#a15d45] mb-4">
                  El dominio de Nadal, victorias legendarias y los números que definen Roland Garros
                </p>
                <span className="text-primary font-semibold inline-flex items-center gap-1">
                  Leer más
                  <span className="material-symbols-outlined" style={{fontSize: '18px'}}>arrow_forward</span>
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">

              <article>
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  El Panorama del Tenis en Tierra Batida para 2026
                </h2>

                <p className="text-lg leading-relaxed text-[#1d110c] mb-6">
                  El circuito de tierra batida ha experimentado cambios significativos en los últimos años. Mientras
                  que la era de dominio absoluto de Rafael Nadal en Roland Garros representó un capítulo extraordinario
                  en la historia del deporte, el tenis actual en arcilla muestra una competitividad más equilibrada y
                  diversa que nunca.
                </p>

                <div className="bg-white border-l-4 border-primary p-6 rounded-xl shadow-sm my-8">
                  <h3 className="text-xl font-bold mb-4 text-[#1d110c]">Habilidades Clave en Tierra Batida</h3>
                  <ul className="space-y-3 text-[#1d110c]">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1" style={{fontSize: '20px'}}>check_circle</span>
                      <div>
                        <strong>Resistencia excepcional:</strong> La capacidad de mantener un alto nivel durante
                        partidos que pueden extenderse más de cuatro horas
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1" style={{fontSize: '20px'}}>check_circle</span>
                      <div>
                        <strong>Juego de defensa sólido:</strong> La habilidad de recuperar bolas aparentemente
                        imposibles y convertir la defensa en ataque
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1" style={{fontSize: '20px'}}>check_circle</span>
                      <div>
                        <strong>Top spin pesado:</strong> Golpes con mucho efecto que aprovechan el rebote alto
                        característico de la arcilla
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1" style={{fontSize: '20px'}}>check_circle</span>
                      <div>
                        <strong>Paciencia táctica:</strong> La inteligencia para construir puntos y no apresurarse
                        en buscar el golpe ganador
                      </div>
                    </li>
                  </ul>
                </div>
              </article>

              <article>
                <h2 className="text-3xl font-bold mb-6 text-[#1d110c]">
                  El Legado de Rafael Nadal
                </h2>

                <p className="text-lg leading-relaxed text-[#1d110c] mb-4">
                  Aunque miramos hacia Roland Garros 2026, es imposible hablar de este torneo sin mencionar a Rafael
                  Nadal. Con 14 títulos en París, Nadal ha establecido un estándar de excelencia en tierra batida que
                  probablemente nunca será igualado. Su dominio absoluto en la Philippe-Chatrier ha inspirado a toda
                  una generación de jugadores que crecieron estudiando su juego.
                </p>

                <p className="text-lg leading-relaxed text-[#1d110c]">
                  El impacto de Nadal trasciende sus victorias. Ha demostrado que el éxito en tierra batida requiere
                  no solo talento técnico, sino también una intensidad mental, una capacidad de sufrimiento y una
                  determinación que pocos atletas poseen. Los favoritos de 2026 buscarán emular no solo su técnica,
                  sino también su mentalidad guerrera en la cancha.
                </p>
              </article>

            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6 text-[#1d110c] text-center">
              Explora Más Sobre Roland Garros 2026
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <Link
                href="/calendario-roland-garros-2026"
                className="bg-white p-6 rounded-xl shadow-sm border border-[#ead5cd] hover:shadow-md transition-shadow"
              >
                <span className="material-symbols-outlined text-primary block mb-3" style={{fontSize: '24px'}}>
                  calendar_month
                </span>
                <h3 className="font-bold text-lg mb-2 text-[#1d110c]">Calendario y Fechas</h3>
                <p className="text-[#a15d45] text-sm">Fechas exactas de todas las rondas del torneo 2026</p>
              </Link>
              <Link
                href="/entradas-roland-garros-2026"
                className="bg-white p-6 rounded-xl shadow-sm border border-[#ead5cd] hover:shadow-md transition-shadow"
              >
                <span className="material-symbols-outlined text-primary block mb-3" style={{fontSize: '24px'}}>
                  confirmation_number
                </span>
                <h3 className="font-bold text-lg mb-2 text-[#1d110c]">Entradas y Precios</h3>
                <p className="text-[#a15d45] text-sm">Toda la información sobre tipos de entradas y precios</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#1d110c]">
              ¿Listo para Seguir a tus Favoritos en Roland Garros 2026?
            </h2>
            <p className="text-xl mb-8 text-[#a15d45] max-w-2xl mx-auto">
              Descubre análisis detallados de los principales candidatos masculinos y femeninos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/jugadores-favoritos-2026/favoritos-masculinos"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                Ver Favoritos Masculinos
                <span className="material-symbols-outlined" style={{fontSize: '20px'}}>arrow_forward</span>
              </Link>
              <Link
                href="/jugadores-favoritos-2026/favoritas-femeninas"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-bold border-2 border-primary hover:bg-[#fcf9f8] transition-colors"
              >
                Ver Favoritas Femeninas
                <span className="material-symbols-outlined" style={{fontSize: '20px'}}>arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
