import { useTranslation } from 'react-i18next'
import { pathLinks, pathMedia } from '../content'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      <img
        src={pathMedia.heroImage}
        alt={t('hero.imageAlt')}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#0b2c4a]/65" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-left text-white">
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {t('hero.title')}
          </h1>
          <h2 className="mt-4 text-2xl font-semibold text-[#fbbf24] sm:text-3xl">
            {t('hero.subtitle')}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            {t('hero.description')}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={pathLinks.about}
              className="inline-flex items-center justify-center rounded-md bg-[#d97706] px-6 py-3 text-sm font-bold tracking-wide text-white uppercase transition hover:bg-[#c2410c]"
            >
              {t('hero.primaryCta')}
            </a>
            <a
              href={pathLinks.programs}
              className="inline-flex items-center justify-center rounded-md border-2 border-white bg-transparent px-6 py-3 text-sm font-bold tracking-wide text-white uppercase transition hover:bg-white/10"
            >
              {t('hero.secondaryCta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
