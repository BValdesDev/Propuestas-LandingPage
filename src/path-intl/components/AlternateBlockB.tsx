import { useTranslation } from 'react-i18next'
import imagenCalmaImg from '../../assets/imagen_calma.PNG'
import { pathLinks } from '../content'

export default function AlternateBlockB() {
  const { t } = useTranslation()

  return (
    <section className="bg-gradient-to-b from-white to-[#faf8f5]">
      <div className="grid md:grid-cols-2">
        <div className="order-2 min-h-[400px] md:order-1">
          <img
            src={imagenCalmaImg}
            alt={t('consultas.imageAlt')}
            className="h-full min-h-[400px] w-full object-cover"
          />
        </div>
        <div className="order-1 flex flex-col justify-center p-12 md:order-2 md:p-24">
          <p className="text-xs font-bold tracking-[0.2em] text-[#e08b46] uppercase">
            {t('consultas.eyebrow')}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0b2c4a] sm:text-4xl lg:text-5xl">
            {t('consultas.titleBefore')}
            <span className="text-[#1e6bb8]">{t('consultas.titleAccent')}</span>
            {t('consultas.titleAfter')}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600">
            {t('consultas.description')}
          </p>
          <a
            href={pathLinks.contact}
            className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-[#e08b46] px-8 py-3 text-sm font-bold tracking-wide text-white uppercase transition hover:bg-[#c97a3b]"
          >
            {t('consultas.cta')}
          </a>
        </div>
      </div>
    </section>
  )
}
