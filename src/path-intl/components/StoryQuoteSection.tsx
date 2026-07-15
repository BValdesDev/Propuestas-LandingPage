import { useTranslation } from 'react-i18next'
import paisajeCalmaImg from '../../assets/paisaje_calma.jpg'
import { pathLinks } from '../content'

export default function StoryQuoteSection() {
  const { t } = useTranslation()

  return (
    <section className="bg-[#faf8f5] bg-gradient-to-b from-[#faf8f5] via-[#faf8f5] to-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 md:pb-32">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium tracking-wide text-[#0f3d30]">
              {t('seccionCita.badge')}
            </span>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-[#0f3d30] md:text-6xl">
              {t('seccionCita.title')}
            </h2>

            <p className="mt-6 max-w-lg text-lg text-slate-600 md:text-xl">
              {t('seccionCita.description')}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={pathLinks.contact}
                className="inline-flex items-center justify-center rounded-full bg-[#0f3d30] px-8 py-3.5 text-sm font-medium text-white transition hover:bg-[#0a2e24]"
              >
                {t('seccionCita.primaryCta')}
              </a>
              <a
                href={pathLinks.programs}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                {t('seccionCita.secondaryCta')}
              </a>
            </div>
          </div>

          <div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3]">
            <img
              src={paisajeCalmaImg}
              alt={t('seccionCita.imageAlt')}
              className="h-full w-full rounded-[2.5rem] object-cover shadow-sm"
            />

            <div className="relative mx-4 mt-4 rounded-[2rem] bg-white/95 p-6 shadow-xl backdrop-blur-sm md:absolute md:mx-0 md:mt-0 md:-bottom-8 md:-left-12 md:max-w-md md:p-8">
              <p className="text-4xl leading-none text-[#0f3d30]/20" aria-hidden="true">
                “
              </p>
              <p className="font-serif text-sm italic leading-relaxed text-slate-700 md:text-base">
                {t('seccionCita.quote')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
