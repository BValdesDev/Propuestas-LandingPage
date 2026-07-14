import { useState } from 'react'
import type { ReactNode } from 'react'
import { content } from '../data/content'
import { LanguageProvider, useLanguage } from '../context/LanguageContext'
import { NAV_LINKS, type Language } from '../i18n/translations'
import heroWatercolorSky from '../assets/hero-watercolor-sky.png'
import fondoFinal from '../assets/fondo_final.PNG'

const LANGUAGES: Language[] = ['ES', 'EN', 'PT']

const pillarIcons = {
  nutrition: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
      />
    </svg>
  ),
  heart: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  ),
  horse: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      />
    </svg>
  ),
}

/** Lienzo acuarela continuo */
function WatercolorCanvas() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: `url('${heroWatercolorSky}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-sky-200/10 via-sky-50/55 to-[#EAF6FC]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/15 to-[#F0F9FF]/80" />
    </div>
  )
}

function RainbowGlow() {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-[46%] z-[1] -translate-x-1/2 -translate-y-1/2"
      aria-hidden="true"
    >
      <div className="h-52 w-[min(92vw,640px)] rounded-full bg-gradient-to-b from-rose-200/30 via-amber-100/25 to-sky-200/20 blur-3xl sm:h-60 md:h-72" />
    </div>
  )
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-sky-100/90 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-blue-950">
      {children}
    </span>
  )
}

function GlassCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[1.75rem] border border-white/55 bg-white/50 p-8 shadow-sm shadow-sky-100/30 backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  )
}

function HeroNavbar() {
  const { lang, setLang, t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/45 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/50 font-serif text-xs font-medium tracking-wide text-slate-800 shadow-sm ring-1 ring-white/60">
            FPV
          </span>
          <span className="hidden font-serif text-lg font-light tracking-wide text-slate-900 sm:block">
            {t.brand.shortName}
          </span>
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-light tracking-wide text-slate-800 transition-colors hover:text-black"
            >
              {t.navbar[link.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-full border border-white/50 bg-white/35 px-1 py-1 backdrop-blur-md">
            {LANGUAGES.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={`rounded-full px-3 py-1 text-xs tracking-wide transition-colors ${
                  lang === code
                    ? 'bg-white/95 font-medium text-neutral-800 shadow-sm'
                    : 'font-normal text-slate-600 hover:text-slate-900'
                }`}
              >
                {code}
              </button>
            ))}
          </div>
          <a
            href="#contacto"
            className="hidden rounded-full border border-white/60 bg-white/40 px-5 py-2 text-sm font-medium tracking-wide text-slate-900 backdrop-blur-md transition hover:bg-white/70 sm:inline-flex"
          >
            {t.navbar.conversar}
          </a>
        </div>
      </div>
    </header>
  )
}

function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0 bg-white/5" aria-hidden="true" />
      <RainbowGlow />

      <div className="relative z-10 flex min-h-[92vh] flex-col items-center justify-center px-4 pb-24 pt-10 text-center text-black">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-slate-800">
          {t.hero.kicker}
        </p>

        <h1 className="my-5 max-w-3xl font-serif text-5xl font-extralight leading-tight md:text-6xl lg:text-7xl">
          {t.hero.title}
        </h1>

        <p className="max-w-2xl text-balance text-lg font-light leading-relaxed tracking-wide text-neutral-900">
          {t.hero.subtitle}
        </p>

        <a
          href="#contacto"
          className="mt-10 rounded-full bg-white/90 px-8 py-3 text-sm font-medium tracking-wide text-slate-800 shadow-md shadow-sky-200/40 transition hover:bg-white hover:shadow-lg"
        >
          {t.hero.cta}
        </a>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent to-[#EAF6FC]/90"
        aria-hidden="true"
      />
    </section>
  )
}

function WatercolorPlaylist() {
  const { t } = useLanguage()
  const [activeTrack, setActiveTrack] = useState<'calm' | 'chaos'>('calm')
  const [isPlaying, setIsPlaying] = useState(false)
  const track = t.heartCoherence.playlist.tracks.find((item) => item.id === activeTrack)!

  return (
    <div className="mx-auto mt-16 max-w-2xl rounded-[2rem] border border-white/60 bg-white/65 p-6 shadow-lg shadow-sky-100/40 backdrop-blur-md sm:p-8">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-blue-950">
        {t.heartCoherence.playlist.title}
      </p>
      <p className="mx-auto mt-4 max-w-lg text-center text-sm font-light leading-relaxed text-neutral-900 md:text-base">
        {t.heartCoherence.playlist.intro}
      </p>

      <div className="mt-8 flex items-center gap-5 rounded-[1.5rem] border border-white/70 bg-gradient-to-br from-sky-50/90 to-rose-50/60 p-5">
        <button
          type="button"
          onClick={() => setIsPlaying((value) => !value)}
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white shadow-md transition hover:scale-105"
          aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
        >
          {isPlaying ? (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" />
            </svg>
          ) : (
            <svg className="ml-0.5 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
          )}
        </button>
        <div className="min-w-0 flex-1 text-left">
          <p className="truncate font-serif text-xl font-light text-black">{track.title}</p>
          <p className="truncate text-sm text-neutral-800">{track.artist}</p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/80">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                activeTrack === 'calm' ? 'w-2/3 bg-sky-500' : 'w-1/3 bg-rose-500'
              } ${isPlaying ? 'animate-pulse' : ''}`}
            />
          </div>
        </div>
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${
            activeTrack === 'calm' ? 'bg-sky-100 text-blue-950' : 'bg-rose-100 text-rose-950'
          }`}
        >
          {track.vibe}
        </span>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {t.heartCoherence.playlist.tracks.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              setActiveTrack(item.id)
              setIsPlaying(true)
            }}
            className={`rounded-[1.25rem] border p-4 text-left transition-all duration-300 ${
              activeTrack === item.id
                ? 'border-sky-300 bg-white shadow-sm'
                : 'border-white/70 bg-white/45 hover:bg-white/80'
            }`}
          >
            <p className="font-serif text-lg font-light text-black">{item.title}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-950">
              {item.vibe}
            </p>
            <p className="mt-3 text-sm font-light leading-relaxed text-neutral-900">
              {item.description}
            </p>
          </button>
        ))}
      </div>

      <p className="mt-6 text-left text-sm font-light leading-loose tracking-wide text-neutral-900 md:text-justify">
        {t.heartCoherence.playlist.closing}
      </p>
    </div>
  )
}

function DisenoUnoContent() {
  const { t } = useLanguage()

  return (
    <div className="relative min-h-screen font-sans text-neutral-800 antialiased">
      <WatercolorCanvas />
      <HeroNavbar />
      <HeroSection />

      {/* Método */}
      <section id="metodo" className="relative scroll-mt-24 bg-transparent px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <SectionLabel>{t.method.eyebrow}</SectionLabel>
              <h2 className="mt-5 font-serif text-3xl font-extralight leading-snug text-black sm:text-4xl lg:text-[2.75rem]">
                {t.method.title}
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-base font-light leading-relaxed tracking-wide text-neutral-900">
                {t.method.subtitle}
              </p>
            </div>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {t.method.pillars.map((pillar) => (
              <GlassCard key={pillar.id}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/50 text-slate-950">
                  {pillarIcons[pillar.id]}
                </div>
                <h3 className="mt-7 font-serif text-xl font-light text-black">{pillar.title}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed tracking-wide text-neutral-900">
                  {pillar.description}
                </p>
              </GlassCard>
            ))}
          </div>

          <p className="mx-auto mt-16 max-w-2xl text-center text-sm font-light italic leading-relaxed tracking-wide text-neutral-900">
            {t.method.disclaimer}
          </p>
        </div>
      </section>

      {/* Sobre mí */}
      <section
        id="sobre-mi"
        className="relative scroll-mt-24 bg-white/20 px-6 py-24 backdrop-blur-[2px] lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>{t.about.label}</SectionLabel>
          <h2 className="mt-5 font-serif text-3xl font-extralight text-black sm:text-4xl lg:text-5xl">
            {t.about.greeting}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-left text-base font-light leading-loose tracking-wide text-neutral-900 md:text-justify md:text-lg">
            {t.about.intro}
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl items-start gap-12 lg:grid-cols-12">
          <div className="overflow-hidden rounded-[2rem] shadow-lg shadow-sky-100/30 ring-1 ring-white/50 lg:col-span-4">
            <img
              src={content.about.image}
              alt={t.about.imageAlt}
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
          <div className="space-y-10 lg:col-span-8">
            {t.about.milestones.map((milestone) => (
              <article key={milestone.id}>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-950">
                  {milestone.location}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-light text-black">{milestone.title}</h3>
                <p className="mt-4 text-left text-base font-light leading-loose tracking-wide text-neutral-900 md:text-justify md:text-lg">
                  {milestone.body}
                </p>
              </article>
            ))}
            <blockquote className="border-l-2 border-sky-300/80 pl-6 font-serif text-lg font-light italic leading-relaxed text-slate-950">
              {t.about.faithNote}
            </blockquote>
          </div>
        </div>
      </section>

      {/* Misión y visión */}
      <section className="relative bg-transparent px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <SectionLabel>{t.mission.title}</SectionLabel>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/50 bg-white/60 p-8 shadow-sm backdrop-blur-md md:p-10">
              <h3 className="font-serif text-2xl font-light text-black">{t.mission.visionLabel}</h3>
              <p className="mt-5 text-left text-base font-light leading-loose tracking-wide text-neutral-900 md:text-justify">
                {t.mission.vision}
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/50 bg-white/60 p-8 shadow-sm backdrop-blur-md md:p-10">
              <h3 className="font-serif text-2xl font-light text-black">{t.mission.missionLabel}</h3>
              <p className="mt-5 text-left text-base font-light leading-loose tracking-wide text-neutral-900 md:text-justify">
                {t.mission.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coherencia cardíaca */}
      <section
        id="coherencia"
        className="relative scroll-mt-24 bg-white/25 px-6 py-24 backdrop-blur-[2px] lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>{t.heartCoherence.sectionLabel}</SectionLabel>
          <h2 className="mt-5 font-serif text-3xl font-extralight text-black sm:text-4xl">
            {t.heartCoherence.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-light leading-relaxed text-neutral-900">
            {t.heartCoherence.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-6">
          {t.heartCoherence.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-left text-base font-light leading-loose tracking-wide text-neutral-900 md:text-justify md:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-[2rem] rounded-br-md shadow-lg shadow-sky-200/30 ring-1 ring-white/60">
          <div className="aspect-[4/3] w-full">
            <img
              src={content.heartCoherence.image}
              alt={t.heartCoherence.imageAlt}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <WatercolorPlaylist />
      </section>

      {/* Enfoques de salud */}
      <section className="relative bg-transparent px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>{t.healthFocuses.sectionLabel}</SectionLabel>
            <h2 className="mt-4 font-serif text-3xl font-extralight text-black sm:text-4xl">
              {t.healthFocuses.title}
            </h2>
            <p className="mt-4 text-base font-light leading-relaxed text-neutral-900">
              {t.healthFocuses.subtitle}
            </p>
          </div>
          <div className="mt-12 space-y-6">
            {t.healthFocuses.items.map((item) => (
              <article
                key={item.id}
                className="rounded-[2rem] border border-white/50 bg-white/55 p-8 backdrop-blur-md"
              >
                <h3 className="font-serif text-xl font-light text-black">{item.question}</h3>
                <p className="mt-4 text-left text-base font-light leading-loose tracking-wide text-neutral-900 md:text-justify">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="relative scroll-mt-24 bg-transparent px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-xl text-center">
            <SectionLabel>{t.services.label}</SectionLabel>
            <h2 className="mt-5 font-serif text-3xl font-extralight text-black sm:text-4xl">
              {t.services.title}
            </h2>
            <p className="mt-5 text-base font-light leading-relaxed tracking-wide text-neutral-900">
              {t.services.subtitle}
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map((service) => (
              <GlassCard key={service.id}>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-xl font-light text-black">{service.title}</h3>
                  {service.highlight && (
                    <span className="shrink-0 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-blue-950">
                      {service.highlight}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm font-light leading-relaxed tracking-wide text-neutral-900 md:text-justify">
                  {service.description}
                </p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950">
                  {service.modality}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Galería orgánica */}
      <section
        id="galeria"
        className="relative scroll-mt-24 bg-white/25 px-6 py-24 backdrop-blur-[2px] lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-serif text-3xl font-extralight text-black sm:text-4xl lg:text-5xl">
            {t.gallery.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm font-light tracking-wide text-neutral-900">
            {t.brand.subtitle}
          </p>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {content.breathingPlace.experiences.map((experience, index) => (
              <article key={experience.id} className="group text-center">
                <div
                  className={`relative overflow-hidden shadow-lg shadow-sky-200/30 ring-1 ring-white/60 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-sky-200/40 ${
                    index % 2 === 0 ? 'rounded-[2rem] rounded-br-md' : 'rounded-[2rem] rounded-bl-md'
                  }`}
                >
                  <div className="aspect-[4/3] w-full">
                    <img
                      src={experience.src}
                      alt={t.gallery.imageAlts[index] ?? experience.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sky-100/30 via-transparent to-white/10"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-4 font-serif text-lg font-light tracking-wide text-black">
                  {t.gallery.tags[index]}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Propósito */}
      <section className="relative bg-transparent px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>{t.purpose.label}</SectionLabel>
          <p className="mt-8 font-serif text-2xl font-extralight leading-relaxed tracking-wide text-black sm:text-3xl lg:text-4xl">
            {t.purpose.statement}
          </p>
        </div>
      </section>

      {/* Testimonios */}
      <section className="relative bg-white/20 px-6 py-24 backdrop-blur-[2px] lg:px-10 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>{t.testimonials.label}</SectionLabel>
          <p className="mt-8 font-serif text-xl font-light italic leading-relaxed tracking-wide text-neutral-900">
            {t.testimonials.placeholder}
          </p>
        </div>
      </section>

      {/* Contacto — un solo bloque, sin solapes con el header */}
      <section id="contacto" className="relative z-0 scroll-mt-28 bg-transparent px-6 pb-10 pt-24 lg:px-10 lg:pb-12 lg:pt-28">
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-white/60 bg-white/65 px-8 py-14 text-center shadow-lg shadow-sky-100/40 backdrop-blur-md sm:px-12">
          <h2 className="font-serif text-3xl font-extralight text-black sm:text-4xl lg:text-5xl">
            {t.cta.title}
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base font-light leading-relaxed tracking-wide text-neutral-900">
            {t.cta.description}
          </p>
          <a
            href={content.cta.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex min-w-[240px] items-center justify-center rounded-full bg-neutral-900/90 px-8 py-3.5 text-sm font-normal tracking-wide text-white shadow-sm transition-colors duration-300 hover:bg-neutral-800"
          >
            {t.cta.buttonLabel}
          </a>
          <a
            href={`mailto:${content.cta.email}`}
            className="mt-5 block text-sm font-semibold tracking-wide text-slate-950 transition-colors hover:text-black"
          >
            {content.cta.email}
          </a>
        </div>
      </section>

      {/* Cierre panorámico continuo — sin franja intermedia */}
      <footer className="relative z-0 -mt-2">
        <div className="relative w-full overflow-hidden">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-[#EAF6FC]/80 via-[#EAF6FC]/25 to-transparent sm:h-32"
            aria-hidden="true"
          />
          <img
            src={fondoFinal}
            alt="Cierre Fran Pino Vielma — paisaje con caballos"
            className="h-auto max-h-[460px] w-full object-cover object-bottom sm:max-h-[540px] lg:max-h-[600px]"
          />
          <p className="pointer-events-none absolute inset-x-0 bottom-4 z-20 px-4 text-center text-[0.7rem] font-light tracking-wide text-white drop-shadow-md sm:bottom-6 sm:text-xs">
            {t.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default function DisenoUno() {
  return (
    <LanguageProvider>
      <DisenoUnoContent />
    </LanguageProvider>
  )
}
