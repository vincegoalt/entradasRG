import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://entradasrolandgarros.com'

  // Static pages with their priorities
  const routes = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },

    // Calendar pages
    { url: '/calendario-roland-garros-2026', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/calendario-roland-garros-2026/fechas-importantes', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/calendario-roland-garros-2026/horarios-por-ronda', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/calendario-roland-garros-2026/orden-de-juego', priority: 0.8, changeFrequency: 'weekly' as const },

    // Stadium pages
    { url: '/estadio-roland-garros', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/estadio-roland-garros/pista-philippe-chatrier', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/estadio-roland-garros/pista-suzanne-lenglen', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/estadio-roland-garros/pista-simonne-mathieu', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/estadio-roland-garros/historia', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/estadio-roland-garros/mapa-instalaciones', priority: 0.7, changeFrequency: 'monthly' as const },

    // Ticket pages
    { url: '/entradas-roland-garros-2026', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/entradas-roland-garros-2026/tipos-de-entradas', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/entradas-roland-garros-2026/ground-pass', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/entradas-roland-garros-2026/precios', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/entradas-roland-garros-2026/donde-comprar', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/entradas-roland-garros-2026/mejores-asientos', priority: 0.8, changeFrequency: 'monthly' as const },

    // Practical guide pages
    { url: '/guia-completa', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/guia-completa/como-llegar', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/guia-completa/que-llevar', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/guia-completa/reglas-estadio', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/guia-completa/clima-consejos', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/guia-completa/primera-vez', priority: 0.8, changeFrequency: 'monthly' as const },

    // Accommodation pages
    { url: '/alojamiento-paris', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/alojamiento-paris/hoteles-cerca', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/alojamiento-paris/mejores-barrios', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/alojamiento-paris/consejos-reserva', priority: 0.7, changeFrequency: 'monthly' as const },

    // Players pages
    { url: '/jugadores-favoritos-2026', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/jugadores-favoritos-2026/favoritos-masculinos', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/jugadores-favoritos-2026/favoritas-femeninas', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/jugadores-favoritos-2026/records-historicos', priority: 0.7, changeFrequency: 'monthly' as const },

    // FAQ
    { url: '/preguntas-frecuentes', priority: 0.9, changeFrequency: 'monthly' as const },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
