import { useTranslation } from 'react-i18next'
import equinoterapiaImg from '../../assets/equinoterapia.PNG'
import { pathLinks } from '../content'

export default function AlternateBlockA() {
  const { t } = useTranslation()

  return (
    <section id="resources" className="bg-[#f5f2ed]">
      <div className="grid md:grid-cols-2">
        <div className="flex flex-col justify-center p-12 md:p-24">
          <p className="text-xs font-bold tracking-[0.2em] text-[#e08b46] uppercase">
            {t('recursos.eyebrow')}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0b2c4a] sm:text-4xl lg:text-5xl">
            {t('recursos.titleBefore')}
            <span className="text-[#1e6bb8]">{t('recursos.titleAccent')}</span>
            {t('recursos.titleAfter')}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600">
            {t('recursos.description')}
          </p>
          <a
            href={pathLinks.programs}
            className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-[#e08b46] px-8 py-3 text-sm font-bold tracking-wide text-white uppercase transition hover:bg-[#c97a3b]"
          >
            {t('recursos.cta')}
          </a>
        </div>
        <div className="min-h-[400px]">
          <img
            src={equinoterapiaImg}
            alt={t('recursos.imageAlt')}
            className="h-full min-h-[400px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
