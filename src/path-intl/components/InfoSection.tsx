import { useTranslation } from 'react-i18next'
import { pathLinks, pathMedia } from '../content'

export default function InfoSection() {
  const { t } = useTranslation()

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-white to-[#faf8f5] px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <img
            src={pathMedia.aboutImage}
            alt={t('sobreMi.imageAlt')}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-[#1e6bb8] uppercase">
            {t('sobreMi.eyebrow')}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0b2c4a] sm:text-4xl">
            {t('sobreMi.title')}
          </h2>
          <div className="mt-6 space-y-4">
            <p className="text-base leading-relaxed text-slate-600">{t('sobreMi.paragraphs.p1')}</p>
            <p className="text-base leading-relaxed text-slate-600">{t('sobreMi.paragraphs.p2')}</p>
          </div>
          <a
            href={pathLinks.about}
            className="mt-8 inline-flex items-center justify-center rounded-md bg-[#1e6bb8] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0b2c4a]"
          >
            {t('sobreMi.cta')}
          </a>
        </div>
      </div>
    </section>
  )
}
