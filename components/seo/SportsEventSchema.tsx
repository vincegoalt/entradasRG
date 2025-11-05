import React from 'react'

interface SportsEventSchemaProps {
  name: string
  startDate: string
  endDate: string
  description: string
}

export function SportsEventSchema({
  name,
  startDate,
  endDate,
  description
}: SportsEventSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name,
    description,
    startDate,
    endDate,
    location: {
      '@type': 'Place',
      name: 'Stade Roland Garros',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2 Avenue Gordon Bennett',
        addressLocality: 'Paris',
        postalCode: '75016',
        addressCountry: 'FR',
      },
    },
    image: 'https://entradasrolandgarros.com/images/roland-garros-stadium.jpg',
    offers: {
      '@type': 'AggregateOffer',
      url: 'https://entradasrolandgarros.com/entradas-roland-garros-2026/',
      priceCurrency: 'EUR',
      lowPrice: '35',
      highPrice: '500',
      availability: 'https://schema.org/PreOrder',
    },
    organizer: {
      '@type': 'Organization',
      name: 'Fédération Française de Tennis',
      url: 'https://www.fft.fr',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
