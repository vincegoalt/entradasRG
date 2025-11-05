import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [
    { name: 'Inicio', url: 'https://entradasrolandgarros.com' },
    ...items
  ]

  return (
    <>
      <BreadcrumbSchema items={allItems} />
      <nav aria-label="Breadcrumb" className="py-3 px-4">
        <ol className="flex items-center space-x-2 text-sm">
          {allItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index < allItems.length - 1 ? (
                <>
                  <Link
                    href={item.url}
                    className="text-gray-600 hover:text-orange-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                  <span className="mx-2 text-gray-400">/</span>
                </>
              ) : (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
