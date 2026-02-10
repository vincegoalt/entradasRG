import Link from 'next/link'
import Image from 'next/image'
import { SportsEventSchema } from '@/components/seo/SportsEventSchema'

export default function HomePage() {
  return (
    <>
      <SportsEventSchema
        name="Roland Garros 2026"
        startDate="2026-05-24"
        endDate="2026-06-07"
        description="French Open 2026 - Grand Slam de tenis en tierra batida"
      />

      <div className="mx-auto max-w-[960px] px-4 py-5 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="w-full">
          <div className="p-0 sm:p-4">
            <div
              className="relative flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat sm:gap-8 sm:rounded-lg items-center justify-center p-4 text-center overflow-hidden"
            >
              {/* Background Image with Overlay */}
              <Image
                src="/images/hero/rolandgarros2026.jpg"
                alt="Roland Garros stadium with clay court in view"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50" />

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-2">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl drop-shadow-lg">
                  Guía Completa Roland Garros 2026
                </h1>
                <p className="text-white text-base font-normal leading-normal max-w-xl mx-auto drop-shadow-md">
                  Tu guía esencial en español para planificar y disfrutar al máximo del Grand Slam parisino.
                </p>
              </div>
              <Link
                href="/calendario-roland-garros-2026"
                className="relative z-10 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 sm:h-12 sm:px-5 bg-primary text-white text-sm font-bold tracking-wide sm:text-base hover:bg-opacity-90 transition-colors shadow-lg"
              >
                <span className="truncate">Explorar la Guía</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="w-full py-10">
          <div className="flex flex-wrap gap-4">
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-[#ead5cd] bg-background-light hover:shadow-lg transition-shadow">
              <p className="text-[#1d110c] text-base font-medium">Fechas</p>
              <p className="text-[#1d110c] tracking-tight text-2xl font-bold">24 May - 7 Jun</p>
            </div>
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-[#ead5cd] bg-background-light hover:shadow-lg transition-shadow">
              <p className="text-[#1d110c] text-base font-medium">Ubicación</p>
              <p className="text-[#1d110c] tracking-tight text-2xl font-bold">París, Francia</p>
            </div>
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-[#ead5cd] bg-background-light hover:shadow-lg transition-shadow">
              <p className="text-[#1d110c] text-base font-medium">Superficie</p>
              <p className="text-[#1d110c] tracking-tight text-2xl font-bold">Tierra Batida</p>
            </div>
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-[#ead5cd] bg-background-light hover:shadow-lg transition-shadow">
              <p className="text-[#1d110c] text-base font-medium">Capacidad</p>
              <p className="text-[#1d110c] tracking-tight text-2xl font-bold">15,225</p>
            </div>
          </div>
        </section>

        {/* Icon Grid */}
        <section className="w-full py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-1 flex-col gap-4 rounded-lg border border-[#ead5cd] bg-background-light p-6 hover:shadow-lg transition-shadow">
              <Link href="/calendario-roland-garros-2026" className="flex flex-col gap-4">
                <span className="material-symbols-outlined text-primary" style={{fontSize: '32px'}}>calendar_month</span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#1d110c] text-base font-bold">Calendario</h3>
                  <p className="text-[#a15d45] text-sm font-normal">Consulta las fechas y horarios de todos los partidos.</p>
                </div>
              </Link>
            </div>

            <div className="flex flex-1 flex-col gap-4 rounded-lg border border-[#ead5cd] bg-background-light p-6 hover:shadow-lg transition-shadow">
              <Link href="/entradas-roland-garros-2026" className="flex flex-col gap-4">
                <span className="material-symbols-outlined text-primary" style={{fontSize: '32px'}}>confirmation_number</span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#1d110c] text-base font-bold">Entradas</h3>
                  <p className="text-[#a15d45] text-sm font-normal">Información sobre cómo y dónde comprar tus boletos.</p>
                </div>
              </Link>
            </div>

            <div className="flex flex-1 flex-col gap-4 rounded-lg border border-[#ead5cd] bg-background-light p-6 hover:shadow-lg transition-shadow">
              <Link href="/estadio-roland-garros" className="flex flex-col gap-4">
                <span className="material-symbols-outlined text-primary" style={{fontSize: '32px'}}>stadium</span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#1d110c] text-base font-bold">El Estadio</h3>
                  <p className="text-[#a15d45] text-sm font-normal">Explora el mapa del complejo y sus canchas.</p>
                </div>
              </Link>
            </div>

            <div className="flex flex-1 flex-col gap-4 rounded-lg border border-[#ead5cd] bg-background-light p-6 hover:shadow-lg transition-shadow">
              <Link href="/guia-completa/como-llegar" className="flex flex-col gap-4">
                <span className="material-symbols-outlined text-primary" style={{fontSize: '32px'}}>pin_drop</span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#1d110c] text-base font-bold">Cómo Llegar</h3>
                  <p className="text-[#a15d45] text-sm font-normal">Las mejores rutas y transporte público para llegar.</p>
                </div>
              </Link>
            </div>

            <div className="flex flex-1 flex-col gap-4 rounded-lg border border-[#ead5cd] bg-background-light p-6 hover:shadow-lg transition-shadow">
              <Link href="/alojamiento-paris" className="flex flex-col gap-4">
                <span className="material-symbols-outlined text-primary" style={{fontSize: '32px'}}>hotel</span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#1d110c] text-base font-bold">Alojamiento</h3>
                  <p className="text-[#a15d45] text-sm font-normal">Recomendaciones de hoteles y zonas para hospedarse.</p>
                </div>
              </Link>
            </div>

            <div className="flex flex-1 flex-col gap-4 rounded-lg border border-[#ead5cd] bg-background-light p-6 hover:shadow-lg transition-shadow">
              <Link href="/preguntas-frecuentes" className="flex flex-col gap-4">
                <span className="material-symbols-outlined text-primary" style={{fontSize: '32px'}}>quiz</span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#1d110c] text-base font-bold">Preguntas Frecuentes</h3>
                  <p className="text-[#a15d45] text-sm font-normal">Respuestas a las dudas más comunes de los visitantes.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Section - Historia */}
        <section className="w-full py-10">
          <div className="flex flex-col-reverse md:flex-row items-center gap-10">
            <div className="flex-1">
              <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg overflow-hidden">
                <Image
                  src="/images/hero/rolandgarros2026.jpg"
                  alt="Historia de Roland Garros"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h2 className="text-[#1d110c] tracking-tight text-3xl font-bold sm:text-4xl">
                  Historia y Tradición
                </h2>
                <p className="text-[#1d110c] text-base font-normal">
                  Descubre la rica historia de uno de los torneos de tenis más prestigiosos del mundo. Desde sus inicios hasta los momentos más icónicos, sumérgete en la leyenda de Roland Garros.
                </p>
              </div>
              <Link
                href="/estadio-roland-garros/historia"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 sm:h-12 sm:px-5 bg-primary text-white text-sm font-bold tracking-wide sm:text-base w-fit hover:bg-opacity-90 transition-colors"
              >
                <span className="truncate">Leer más sobre la historia</span>
              </Link>
            </div>
          </div>
        </section>

        {/* GoalTickets CTA */}
        <section className="w-full py-10">
          <div className="rounded-lg border border-[#ead5cd] bg-background-light p-8 text-center">
            <span className="material-symbols-outlined text-primary mb-4 block" style={{fontSize: '40px'}}>confirmation_number</span>
            <h2 className="text-[#1d110c] text-2xl font-bold mb-2">
              ¿Buscas entradas garantizadas para Roland Garros 2026?
            </h2>
            <p className="text-[#a15d45] text-base mb-6 max-w-lg mx-auto">
              Compra entradas verificadas a través de plataformas especializadas como GoalTickets, con transferencia oficial por app y garantía de autenticidad.
            </p>
            <a
              href="https://goaltickets.com/es/collections/entradas-roland-garros-2026"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-[#c75033] text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
            >
              Ver disponibilidad en GoalTickets
              <span className="material-symbols-outlined" style={{fontSize: '20px'}}>open_in_new</span>
            </a>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="w-full py-10">
          <div className="rounded-lg bg-gradient-to-r from-primary to-orange-400 p-8 text-center text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-2">¡No te pierdas nada!</h2>
            <p className="mb-6 max-w-lg mx-auto">
              Suscríbete a nuestro boletín para recibir las últimas noticias, consejos y ofertas exclusivas directamente en tu correo.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                className="flex-grow rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 px-4 py-2.5"
                placeholder="Tu correo electrónico"
                type="email"
              />
              <button
                className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-primary transition-colors"
                type="submit"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}
