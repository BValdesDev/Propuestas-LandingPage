import { useTranslation } from 'react-i18next'
import { pathLinks } from '../content'

const icons = {
  heart: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  ),
  focus: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
      />
    </svg>
  ),
  education: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 018.835-2.535m0 0A23.74 23.74 0 0121.75 12c0 .974-.058 1.938-.168 2.89m0 0a23.84 23.84 0 01-2.535 8.835m0 0A23.74 23.74 0 0112 21.75c-1.946 0-3.85-.244-5.682-.697"
      />
    </svg>
  ),
} as const

const pillarIds = ['heart', 'focus', 'education'] as const

export default function FeatureCards() {
  const { t } = useTranslation()

  return (
    <section
      id="programs"
      className="border-t border-[#e8e4de]/80 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        {pillarIds.map((id) => (
          <article
            key={id}
            className="flex h-full flex-col rounded-lg border border-[#e8e4de]/60 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition hover:-translate-y-1 hover:shadow-[0_12px_36px_rgb(0,0,0,0.05)]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0b2c4a]/10 text-[#0b2c4a]">
              {icons[id]}
            </div>
            <h3 className="mt-6 text-xl font-bold text-[#0b2c4a]">
              {t(`tarjetas.items.${id}.title`)}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
              {t(`tarjetas.items.${id}.description`)}
            </p>
            <a
              href={id === 'education' ? pathLinks.contact : pathLinks.programs}
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[#1e6bb8] transition hover:text-[#0b2c4a]"
            >
              {t(`tarjetas.items.${id}.cta`)}
              <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
