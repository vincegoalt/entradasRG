import Link from 'next/link'
import { Metadata } from 'next'
import { ArticleSchema } from '@/components/seo/ArticleSchema'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Guía Completa para Asistir a Roland Garros 2026 | Todo lo que Necesitas Saber',
  description: 'Guía práctica completa para tu visita a Roland Garros 2026: cómo llegar, qué llevar, reglas del estadio, clima, consejos para primerizos y mucho más.',
  keywords: 'guia roland garros, como llegar roland garros, que llevar roland garros, reglas roland garros, clima paris mayo junio, consejos roland garros',
  openGraph: {
    title: 'Guía Completa para Asistir a Roland Garros 2026',
    description: 'Todo lo que necesitas saber para disfrutar al máximo tu visita a Roland Garros',
    type: 'article',
  }
}

export default function GuiaCompletaPage() {
  const breadcrumbItems = [
    { name: 'Inicio', url: '/' },
    { name: 'Guía Completa', url: '/guia-completa' }
  ]

  return (
    <>
      <ArticleSchema
        headline="Guía Completa para Asistir a Roland Garros 2026"
        description="Guía práctica completa con toda la información necesaria para planificar y disfrutar tu visita a Roland Garros 2026"
        datePublished="2025-01-15"
        dateModified="2025-01-15"
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="min-h-screen bg-[#fcf9f8]">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-[#ead5cd] py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs would go here */}
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-white py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1d110c] mb-6">
                Guía Completa para Asistir a Roland Garros 2026
              </h1>
              <p className="text-xl text-[#a15d45] mb-8">
                Todo lo que necesitas saber para disfrutar al máximo tu experiencia en el torneo de tenis más prestigioso en tierra batida
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed mb-6 text-[#a15d45]">
                Asistir a Roland Garros es una experiencia única que requiere planificación. Ya sea que visites el torneo por primera vez o seas un veterano, esta guía completa te ayudará a preparar cada aspecto de tu visita al French Open 2026.
              </p>
              <p className="text-lg text-[#1d110c] leading-relaxed mb-6">
                Roland Garros no es solo un torneo de tenis; es una experiencia cultural parisina completa. Situado en el elegante distrito XVI de París, el complejo del Stade Roland Garros combina la tradición del tenis con la sofisticación francesa.
              </p>

              <div className="bg-white border-l-4 border-primary p-6 rounded-xl shadow-sm my-8">
                <h3 className="text-xl font-bold mb-3 text-[#1d110c]">Importante: Planifica con Anticipación</h3>
                <p className="text-[#1d110c] mb-2">
                  Roland Garros es uno de los eventos deportivos más concurridos del mundo, con más de 500,000 espectadores durante las dos semanas del torneo.
                </p>
                <p className="text-[#a15d45]">
                  Te recomendamos leer completamente esta guía al menos 2-3 semanas antes de tu visita para tener tiempo de preparar todo lo necesario.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Guide Cards */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#1d110c]">
              Guías Prácticas Detalladas
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Cómo Llegar */}
              <Link
                href="/guia-completa/como-llegar"
                className="bg-white p-6 rounded-xl shadow-sm border border-[#ead5cd] hover:shadow-md transition-shadow"
              >
                <span className="material-symbols-outlined text-primary block mb-3" style={{fontSize: '32px'}}>
                  directions_transit
                </span>
                <h3 className="text-xl font-bold mb-3 text-[#1d110c]">Cómo Llegar</h3>
                <p className="text-[#a15d45] mb-4">
                  Metro Línea 10, autobuses, rutas desde aeropuertos y opciones de parking
                </p>
              </Link>

              {/* Qué Llevar */}
              <Link
                href="/guia-completa/que-llevar"
                className="bg-white p-6 rounded-xl shadow-sm border border-[#ead5cd] hover:shadow-md transition-shadow"
              >
                <span className="material-symbols-outlined text-primary block mb-3" style={{fontSize: '32px'}}>
                  backpack
                </span>
                <h3 className="text-xl font-bold mb-3 text-[#1d110c]">Qué Llevar</h3>
                <p className="text-[#a15d45] mb-4">
                  Checklist completo de elementos esenciales, ropa adecuada y artículos prohibidos
                </p>
              </Link>

              {/* Reglas del Estadio */}
              <Link
                href="/guia-completa/reglas-estadio"
                className="bg-white p-6 rounded-xl shadow-sm border border-[#ead5cd] hover:shadow-md transition-shadow"
              >
                <span className="material-symbols-outlined text-primary block mb-3" style={{fontSize: '32px'}}>
                  rule
                </span>
                <h3 className="text-xl font-bold mb-3 text-[#1d110c]">Reglas y Seguridad</h3>
                <p className="text-[#a15d45] mb-4">
                  Normativa del recinto, controles de seguridad y etiqueta del espectador
                </p>
              </Link>

              {/* Clima */}
              <Link
                href="/guia-completa/clima-consejos"
                className="bg-white p-6 rounded-xl shadow-sm border border-[#ead5cd] hover:shadow-md transition-shadow"
              >
                <span className="material-symbols-outlined text-primary block mb-3" style={{fontSize: '32px'}}>
                  wb_sunny
                </span>
                <h3 className="text-xl font-bold mb-3 text-[#1d110c]">Clima y Vestimenta</h3>
                <p className="text-[#a15d45] mb-4">
                  Temperaturas en mayo-junio, probabilidad de lluvia y qué vestir
                </p>
              </Link>

              {/* Primera Vez */}
              <Link
                href="/guia-completa/primera-vez"
                className="bg-white p-6 rounded-xl shadow-sm border border-[#ead5cd] hover:shadow-md transition-shadow"
              >
                <span className="material-symbols-outlined text-primary block mb-3" style={{fontSize: '32px'}}>
                  stars
                </span>
                <h3 className="text-xl font-bold mb-3 text-[#1d110c]">Guía para Primerizos</h3>
                <p className="text-[#a15d45] mb-4">
                  Estrategias para ver más tenis, mejores lugares y errores a evitar
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Tips */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#1d110c]">
              Consejos Rápidos para tu Visita
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#fcf9f8] p-6 border border-[#ead5cd] rounded-xl">
                <span className="material-symbols-outlined text-primary block mb-3" style={{fontSize: '24px'}}>
                  train
                </span>
                <h3 className="font-bold text-lg mb-3 text-primary">Transporte</h3>
                <p className="text-[#1d110c]">
                  El metro Línea 10 hasta Porte d'Auteuil es la forma más rápida y confiable. Evita el coche.
                </p>
              </div>

              <div className="bg-[#fcf9f8] p-6 border border-[#ead5cd] rounded-xl">
                <span className="material-symbols-outlined text-primary block mb-3" style={{fontSize: '24px'}}>
                  schedule
                </span>
                <h3 className="font-bold text-lg mb-3 text-primary">Hora de Llegada</h3>
                <p className="text-[#1d110c]">
                  Llega 60-90 minutos antes del inicio para pasar seguridad sin prisas y encontrar buenos asientos.
                </p>
              </div>

              <div className="bg-[#fcf9f8] p-6 border border-[#ead5cd] rounded-xl">
                <span className="material-symbols-outlined text-primary block mb-3" style={{fontSize: '24px'}}>
                  wb_sunny
                </span>
                <h3 className="font-bold text-lg mb-3 text-primary">Protección Solar</h3>
                <p className="text-[#1d110c]">
                  Imprescindible: protector solar, gorra y gafas de sol. Muchos asientos están expuestos al sol.
                </p>
              </div>

              <div className="bg-[#fcf9f8] p-6 border border-[#ead5cd] rounded-xl">
                <span className="material-symbols-outlined text-primary block mb-3" style={{fontSize: '24px'}}>
                  restaurant
                </span>
                <h3 className="font-bold text-lg mb-3 text-primary">Comida y Bebida</h3>
                <p className="text-[#1d110c]">
                  Puedes llevar tu propia comida y agua. Hay fuentes de agua potable gratuitas en todo el recinto.
                </p>
              </div>

              <div className="bg-[#fcf9f8] p-6 border border-[#ead5cd] rounded-xl">
                <span className="material-symbols-outlined text-primary block mb-3" style={{fontSize: '24px'}}>
                  badge
                </span>
                <h3 className="font-bold text-lg mb-3 text-primary">Ground Pass</h3>
                <p className="text-[#1d110c]">
                  Si tienes ground pass, llega temprano para las pistas secundarias. Las colas se forman rápido.
                </p>
              </div>

              <div className="bg-[#fcf9f8] p-6 border border-[#ead5cd] rounded-xl">
                <span className="material-symbols-outlined text-primary block mb-3" style={{fontSize: '24px'}}>
                  smartphone
                </span>
                <h3 className="font-bold text-lg mb-3 text-primary">App Oficial</h3>
                <p className="text-[#1d110c]">
                  Descarga la app de Roland Garros para seguir resultados en vivo y orden de juego actualizado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#1d110c]">
              Recursos Adicionales
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/calendario-roland-garros-2026"
                className="bg-white p-6 rounded-xl shadow-sm border border-[#ead5cd] hover:shadow-md transition-shadow text-center"
              >
                <span className="material-symbols-outlined text-primary block mb-3 mx-auto" style={{fontSize: '32px'}}>
                  calendar_month
                </span>
                <h3 className="font-bold mb-2 text-[#1d110c]">Calendario 2026</h3>
                <p className="text-sm text-[#a15d45]">Fechas exactas de cada ronda</p>
              </Link>

              <Link
                href="/entradas-roland-garros-2026"
                className="bg-white p-6 rounded-xl shadow-sm border border-[#ead5cd] hover:shadow-md transition-shadow text-center"
              >
                <span className="material-symbols-outlined text-primary block mb-3 mx-auto" style={{fontSize: '32px'}}>
                  confirmation_number
                </span>
                <h3 className="font-bold mb-2 text-[#1d110c]">Entradas y Precios</h3>
                <p className="text-sm text-[#a15d45]">Tipos de entradas disponibles</p>
              </Link>

              <Link
                href="/estadio-roland-garros"
                className="bg-white p-6 rounded-xl shadow-sm border border-[#ead5cd] hover:shadow-md transition-shadow text-center"
              >
                <span className="material-symbols-outlined text-primary block mb-3 mx-auto" style={{fontSize: '32px'}}>
                  stadium
                </span>
                <h3 className="font-bold mb-2 text-[#1d110c]">El Estadio</h3>
                <p className="text-sm text-[#a15d45]">Pistas y sus características</p>
              </Link>

              <Link
                href="/alojamiento-paris"
                className="bg-white p-6 rounded-xl shadow-sm border border-[#ead5cd] hover:shadow-md transition-shadow text-center"
              >
                <span className="material-symbols-outlined text-primary block mb-3 mx-auto" style={{fontSize: '32px'}}>
                  hotel
                </span>
                <h3 className="font-bold mb-2 text-[#1d110c]">Alojamiento</h3>
                <p className="text-sm text-[#a15d45]">Dónde hospedarse en París</p>
              </Link>

              <Link
                href="/jugadores-favoritos-2026"
                className="bg-white p-6 rounded-xl shadow-sm border border-[#ead5cd] hover:shadow-md transition-shadow text-center"
              >
                <span className="material-symbols-outlined text-primary block mb-3 mx-auto" style={{fontSize: '32px'}}>
                  sports_tennis
                </span>
                <h3 className="font-bold mb-2 text-[#1d110c]">Favoritos 2026</h3>
                <p className="text-sm text-[#a15d45]">Candidatos al título</p>
              </Link>

              <Link
                href="/preguntas-frecuentes"
                className="bg-white p-6 rounded-xl shadow-sm border border-[#ead5cd] hover:shadow-md transition-shadow text-center"
              >
                <span className="material-symbols-outlined text-primary block mb-3 mx-auto" style={{fontSize: '32px'}}>
                  quiz
                </span>
                <h3 className="font-bold mb-2 text-[#1d110c]">Preguntas Frecuentes</h3>
                <p className="text-sm text-[#a15d45]">40+ respuestas detalladas</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-[#1d110c]">
              Una Experiencia Inolvidable te Espera
            </h2>
            <p className="text-lg text-[#1d110c] leading-relaxed mb-6 max-w-3xl mx-auto">
              Roland Garros es mucho más que un torneo de tenis. Es la combinación perfecta de deporte de élite, historia, tradición francesa y la vibrante atmósfera parisina. Con una buena planificación usando esta guía completa, estarás preparado para disfrutar cada momento de tu visita.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
