import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

const benefitMeta: { id: 'regulation' | 'focus' | 'physiology'; icon: ReactNode }[] = [
  {
    id: 'regulation',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  },
  {
    id: 'focus',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.785 16.5 21.75l-.394-.965a1.5 1.5 0 0 0-1.052-1.052l-.965-.394.965-.394a1.5 1.5 0 0 0 1.052-1.052l.394-.965.394.965a1.5 1.5 0 0 0 1.052 1.052l.965.394-.965.394a1.5 1.5 0 0 0-1.052 1.052Z"
        />
      </svg>
    ),
  },
  {
    id: 'physiology',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18.75a6 6 0 0 0 6-6c0-1.195-.437-2.328-1.07-3.544C15.982 7.158 14.493 5.25 12 2.25c-2.493 3-3.982 4.908-4.93 6.956A6.978 6.978 0 0 0 6 12.75a6 6 0 0 0 6 6Z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 15.75c.75.75 1.5 1.125 2.25 1.125s1.5-.375 2.25-1.125" />
      </svg>
    ),
  },
]

export default function PediatricNutritionSection() {
  const { t } = useTranslation()

  return (
    <section
      id="pediatric-nutrition"
      className="bg-gradient-to-b from-white via-white to-[#faf8f5]"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-bold tracking-[0.2em] text-[#e08b46] uppercase">
              {t('neurodivergente.eyebrow')}
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#0f3d30] md:text-4xl lg:text-5xl">
              {t('neurodivergente.title')}
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">
              {t('neurodivergente.description')}
            </p>

            <div className="mt-6 rounded-2xl border-l-4 border-[#0f3d30] bg-[#0f3d30]/5 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
              <p className="font-serif text-base font-semibold italic leading-relaxed text-[#0f3d30] md:text-lg">
                {t('neurodivergente.commitment')}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-7">
            {benefitMeta.map((benefit) => (
              <article
                key={benefit.id}
                className="rounded-2xl border border-[#e8e4de]/50 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_12px_36px_rgb(0,0,0,0.05)]"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0f3d30]/10 text-[#0f3d30]">
                    {benefit.icon}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0f3d30]">
                      {t(`neurodivergente.benefits.${benefit.id}.title`)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">
                      {t(`neurodivergente.benefits.${benefit.id}.description`)}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
