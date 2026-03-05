import Link from 'next/link'

interface PageHeroProps {
  title: string
  subtitle: string
  image: string
  badge?: { icon: string; text: string }
  primaryCta?: { text: string; href: string; icon?: string; external?: boolean }
  secondaryCta?: { text: string; href: string; icon?: string }
}

export function PageHero({ title, subtitle, image, badge, primaryCta, secondaryCta }: PageHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#1d110c] via-[#2a1a12] to-[#1d110c] py-16 md:py-20 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1d110c] via-transparent to-[#1d110c]/80" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {badge && (
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
              <span className="material-symbols-outlined text-primary" style={{fontSize: '16px', fontVariationSettings: "'FILL' 1"}}>{badge.icon}</span>
              <span className="text-primary text-sm font-semibold">{badge.text}</span>
            </div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryCta && (
                primaryCta.external ? (
                  <a
                    href={primaryCta.href}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-8 py-3.5 rounded-xl hover:bg-orange-600 transition-colors btn-shine text-lg"
                  >
                    {primaryCta.icon && <span className="material-symbols-outlined" style={{fontSize: '22px'}}>{primaryCta.icon}</span>}
                    {primaryCta.text}
                  </a>
                ) : (
                  <Link
                    href={primaryCta.href}
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-8 py-3.5 rounded-xl hover:bg-orange-600 transition-colors btn-shine text-lg"
                  >
                    {primaryCta.icon && <span className="material-symbols-outlined" style={{fontSize: '22px'}}>{primaryCta.icon}</span>}
                    {primaryCta.text}
                  </Link>
                )
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-bold px-8 py-3.5 rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
                >
                  {secondaryCta.text}
                  {secondaryCta.icon && <span className="material-symbols-outlined" style={{fontSize: '20px'}}>{secondaryCta.icon}</span>}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
