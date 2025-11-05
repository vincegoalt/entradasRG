import React from 'react'

interface ArticleSchemaProps {
  headline: string
  description: string
  image?: string
  datePublished: string
  dateModified: string
  authorName?: string
}

export function ArticleSchema({
  headline,
  description,
  image = 'https://entradasrolandgarros.com/images/default-og-image.jpg',
  datePublished,
  dateModified,
  authorName = 'Roland Garros Guía'
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image,
    author: {
      '@type': 'Organization',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Roland Garros Guía',
      logo: {
        '@type': 'ImageObject',
        url: 'https://entradasrolandgarros.com/logo.png',
      },
    },
    datePublished,
    dateModified,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
