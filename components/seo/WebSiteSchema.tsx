import React from 'react'

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Roland Garros Guia 2026',
    url: 'https://entradasrolandgarros.com',
    inLanguage: 'es',
    description: 'Guia completa en espanol sobre Roland Garros 2026: fechas, entradas, calendario, estadio y consejos practicos.',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
