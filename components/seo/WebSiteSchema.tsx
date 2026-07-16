import React from 'react'

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Roland Garros Guia 2027',
    url: 'https://www.entradasrolandgarros.com/',
    inLanguage: 'es',
    description: 'Guia completa en espanol sobre Roland Garros 2027: fechas, entradas, calendario, estadio y consejos practicos.',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
