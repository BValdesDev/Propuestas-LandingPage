import type { ReactNode } from 'react'
import { content } from '../data/content'
import fondoFinal from '../assets/fondo_final.PNG'
import caballoNube from '../assets/caballo_nube.jpg'

const pillarIcons = {
  nutrition: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
    </svg>
  ),
  heart: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  horse: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  ),
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
      {children}
    </p>
  )
}

function PremiumCard({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-2xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-slate-200/60 ${className}`}
    >
      {children}
    </div>
  )
}

export default function DisenoDos() {
  return (
    <div className="relative min-h-screen bg-slate-100/40 font-sans text-slate-700 antialiased">
      {/* Fondo — caballo nube horizontal, cover + máscara radial */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full overflow-hidden bg-[#0a52be]"
        aria-hidden="true"
      >
        <img
          src={caballoNube}
          alt="Fondo Caballo de Nube Premium"
          className="h-full w-full object-cover object-center opacity-40 contrast-[1.1] brightness-105"
          style={{
            maskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
          }}
        />
      </div>

      <div className="relative z-10">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-100/80 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-80">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-950 font-serif text-sm font-medium text-white shadow-lg shadow-blue-950/20">
              FP
            </span>
            <div>
              <p className="font-serif text-lg font-light tracking-wide text-blue-950">
                {content.brand.shortName}
              </p>
              <p className="text-xs tracking-wide text-slate-500">{content.brand.subtitle}</p>
            </div>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {content.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-all duration-300 hover:text-blue-950"
              >
                {link.label}
              </a>
            ))}
            <a
              href={content.cta.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-blue-950 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-950/15 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-900"
            >
              {content.hero.ctaPrimary}
            </a>
          </nav>
        </div>
      </header>

      {/* Hero — clínica premium luminosa sobre acuarela sutil */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white/50 via-white/35 to-teal-50/25">
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-teal-100/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-blue-100/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-28">
          <div className="lg:col-span-6">
            <SectionLabel>{content.brand.tagline}</SectionLabel>
            <p className="mt-4 text-xs font-medium uppercase tracking-widest text-teal-600">
              {content.hero.eyebrow}
            </p>
            <h1 className="mt-6 font-serif text-4xl font-light leading-tight tracking-tight text-blue-950 md:text-5xl lg:text-6xl">
              {content.hero.headline}
            </h1>
            <p className="mt-6 max-w-lg text-lg font-light leading-relaxed tracking-wide text-slate-600">
              {content.hero.subheadline}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={content.cta.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-blue-950 px-8 py-3.5 text-sm font-medium text-white shadow-xl shadow-blue-950/20 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-900"
              >
                {content.hero.ctaPrimary}
              </a>
              <a
                href="#metodo"
                className="rounded-2xl border border-slate-200 bg-white px-8 py-3.5 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-teal-200 hover:text-blue-950"
              >
                {content.hero.ctaSecondary}
              </a>
            </div>
            <p className="mt-8 max-w-md text-sm font-light italic leading-relaxed text-slate-500">
              &ldquo;{content.uvp}&rdquo;
            </p>
          </div>

          <div className="relative lg:col-span-5 lg:col-start-8">
            <div className="overflow-hidden rounded-2xl shadow-xl shadow-slate-200/60 ring-1 ring-slate-100">
              <img
                src={content.about.image}
                alt={content.about.imageAlt}
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-xl shadow-slate-200/50 lg:block">
              <p className="font-serif text-2xl font-light text-blue-950">3</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-emerald-600">
                Caminos integrados
              </p>
            </div>
          </div>
        </div>

        {/* Certificaciones */}
        <div className="relative border-t border-slate-100 bg-white/60 backdrop-blur-sm">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 sm:grid-cols-3 lg:px-8">
            {content.certifications.map((cert) => (
              <div key={cert.name} className="text-center sm:text-left">
                <p className="font-serif text-base font-light text-blue-950">{cert.name}</p>
                <p className="mt-1 text-xs tracking-wide text-teal-600">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Método — layout asimétrico */}
      <section id="metodo" className="bg-white/40 px-6 py-24 backdrop-blur-[2px] lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <SectionLabel>Metodología</SectionLabel>
              <h2 className="mt-4 font-serif text-3xl font-light tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                {content.method.title}
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-base leading-relaxed tracking-wide text-slate-600">
                {content.method.subtitle}
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {content.method.pillars.map((pillar, index) => (
              <PremiumCard
                key={pillar.id}
                className={index === 1 ? 'md:-mt-4' : index === 2 ? 'md:mt-4' : ''}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                  {pillarIcons[pillar.icon]}
                </div>
                <h3 className="mt-6 font-serif text-xl font-light text-slate-900">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{pillar.description}</p>
              </PremiumCard>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-teal-100 bg-teal-50/50 px-6 py-5 text-center text-sm leading-relaxed text-teal-800">
            {content.disclaimer}
          </div>
        </div>
      </section>

      {/* Sobre mí — timeline clínico */}
      <section id="sobre-mi" className="bg-white px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="overflow-hidden rounded-2xl shadow-xl shadow-slate-200/50 ring-1 ring-slate-100 lg:sticky lg:top-28">
                <img
                  src={content.about.image}
                  alt={content.about.imageAlt}
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-8">
              <SectionLabel>{content.about.title}</SectionLabel>
              <h2 className="mt-4 font-serif text-3xl font-light tracking-tight text-slate-900 md:text-4xl">
                {content.about.greeting}
              </h2>
              <p className="mt-5 text-left text-base leading-loose tracking-wide text-slate-600 md:text-justify md:text-lg">
                {content.about.intro}
              </p>

              <ol className="relative mt-12 space-y-0 border-l border-slate-200 pl-8">
                {content.about.milestones.map((milestone, index) => (
                  <li key={milestone.id} className="relative pb-12 last:pb-0">
                    <span className="absolute -left-[2.4rem] top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-teal-500 bg-white text-xs font-semibold text-teal-700">
                      {index + 1}
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
                      {milestone.location}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl font-light text-slate-900">
                      {milestone.title}
                    </h3>
                    <p className="mt-4 text-left text-base leading-loose tracking-wide text-slate-600 md:text-justify">
                      {milestone.body}
                    </p>
                  </li>
                ))}
              </ol>

              <blockquote className="mt-10 rounded-2xl border border-slate-100 bg-slate-50 p-6 font-serif text-base font-light italic leading-relaxed text-blue-950">
                {content.about.faithNote}
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y visión — doble columna clínica */}
      <section className="bg-slate-50/80 px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>{content.mission.title}</SectionLabel>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <PremiumCard>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
              </div>
              <h3 className="mt-6 text-xs font-semibold uppercase tracking-widest text-emerald-600">
                {content.mission.visionLabel}
              </h3>
              <p className="mt-4 text-left text-base leading-loose text-slate-700 md:text-justify">
                {content.mission.vision}
              </p>
            </PremiumCard>
            <PremiumCard>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-800">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xs font-semibold uppercase tracking-widest text-emerald-600">
                {content.mission.missionLabel}
              </h3>
              <p className="mt-4 text-left text-base leading-loose text-slate-700 md:text-justify">
                {content.mission.mission}
              </p>
            </PremiumCard>
          </div>
        </div>
      </section>

      {/* Coherencia — caso de estudio clínico */}
      <section id="coherencia" className="bg-white px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-6">
              <SectionLabel>Caso clínico · Fisiología</SectionLabel>
              <h2 className="mt-4 font-serif text-3xl font-light tracking-tight text-slate-900 md:text-4xl">
                {content.heartCoherence.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {content.heartCoherence.subtitle}
              </p>
              <div className="mt-8 space-y-5">
                {content.heartCoherence.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-left text-base leading-loose tracking-wide text-slate-600 md:text-justify"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="space-y-5 lg:col-span-6">
              <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/50">
                <div className="aspect-[4/3] w-full">
                  <img
                    src={content.heartCoherence.image}
                    alt={content.heartCoherence.imageAlt}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-teal-100 bg-teal-50/60 p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">
                  Dato científico · VFC
                </p>
                <p className="mt-3 text-sm leading-relaxed text-teal-900 md:text-justify">
                  La variabilidad de la frecuencia cardíaca (VFC) refleja la flexibilidad del sistema nervioso autónomo.
                  Una VFC más coherente suele asociarse a mayor regulación, presencia y capacidad de respuesta ante el estrés.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-950">
                  Estudio de analogía · Playlist
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {content.heartCoherence.playlist.intro}
                </p>
                <div className="mt-5 grid gap-3">
                  {content.heartCoherence.playlist.tracks.map((track) => (
                    <div
                      key={track.id}
                      className={`rounded-xl border bg-white p-4 ${
                        track.id === 'calm' ? 'border-teal-200' : 'border-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-semibold text-slate-900">{track.title}</p>
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider ${
                            track.id === 'calm'
                              ? 'bg-teal-50 text-teal-700'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {track.vibe}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-slate-500">{track.artist}</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{track.description}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-slate-600 md:text-justify">
                  {content.heartCoherence.playlist.closing}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enfoques de salud */}
      <section className="bg-slate-50/80 px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <SectionLabel>Enfoques clínicos</SectionLabel>
            <h2 className="mt-4 font-serif text-3xl font-light tracking-tight text-slate-900 md:text-4xl">
              {content.healthFocuses.title}
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">{content.healthFocuses.subtitle}</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {content.healthFocuses.items.map((item) => (
              <PremiumCard key={item.id}>
                <h3 className="font-serif text-lg font-light leading-snug text-slate-900">
                  {item.question}
                </h3>
                <p className="mt-4 text-sm leading-loose text-slate-600 md:text-justify">{item.answer}</p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="bg-white/40 px-6 py-24 backdrop-blur-[2px] lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <SectionLabel>Servicios</SectionLabel>
              <h2 className="mt-4 font-serif text-3xl font-light tracking-tight text-slate-900 md:text-4xl">
                {content.services.title}
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">{content.services.subtitle}</p>
            </div>
            <a
              href={content.cta.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 self-start rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-3 text-sm font-medium text-emerald-700 transition-all duration-300 hover:scale-[1.02] hover:bg-emerald-100"
            >
              Consultar disponibilidad
            </a>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.services.items.map((service) => (
              <PremiumCard key={service.id} className="group">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-xl font-light text-slate-900">{service.title}</h3>
                  {service.highlight && (
                    <span className="shrink-0 rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                      {service.highlight}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-justify">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    {service.modality}
                  </span>
                  <a
                    href={content.cta.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-950 opacity-70 transition-all duration-300 group-hover:opacity-100"
                  >
                    Más info →
                  </a>
                </div>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      {/* Galería de Experiencias — Un lugar para respirar */}
      <section id="galeria" className="bg-white px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Experiencias</SectionLabel>
            <h2 className="mt-4 font-sans text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              {content.breathingPlace.title}
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {content.breathingPlace.experiences.map((experience) => (
              <article key={experience.id} className="group">
                <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-100/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-slate-200/60">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={experience.src}
                      alt={experience.alt}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="px-5 py-4 text-center text-sm font-semibold tracking-wide text-slate-900">
                    {experience.label}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Misión + Propósito */}
      <section className="bg-white/40 px-6 py-24 backdrop-blur-[2px] lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>{content.purpose.title}</SectionLabel>
          <p className="mt-8 font-serif text-2xl font-light italic leading-relaxed text-slate-700 md:text-3xl">
            {content.purpose.statement}
          </p>
        </div>
      </section>

      {/* Testimonios */}
      <section className="bg-white px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>{content.testimonials.title}</SectionLabel>
          <p className="mt-8 font-serif text-2xl font-light italic leading-relaxed text-slate-600">
            {content.testimonials.placeholder}
          </p>
        </div>
      </section>

      {/* Contacto — bloque único, sin solaparse con el header sticky */}
      <section id="contacto" className="relative z-0 scroll-mt-28 px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-blue-950 text-center text-white shadow-2xl shadow-blue-950/25">
          <div className="relative px-8 py-16 md:px-16 md:py-20">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl" />
            <h2 className="relative font-serif text-3xl font-light md:text-4xl lg:text-5xl">
              {content.cta.title}
            </h2>
            <p className="relative mx-auto mt-5 max-w-lg font-light leading-relaxed text-blue-100/90">
              {content.cta.description}
            </p>
            <a
              href={content.cta.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-10 inline-flex items-center gap-2 rounded-2xl bg-white px-10 py-4 text-sm font-medium text-blue-950 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-teal-50"
            >
              {content.cta.buttonLabel}
            </a>
            <a
              href={`mailto:${content.cta.email}`}
              className="relative mt-5 block text-sm text-blue-200/80 transition-colors hover:text-white"
            >
              {content.cta.email}
            </a>
          </div>
        </div>
      </section>

      {/* Footer minimal + cierre panorámico */}
      <footer className="relative z-0">
        <div className="border-t border-slate-100 bg-white px-6 py-8 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 text-center">
            <p className="font-serif text-lg font-light text-blue-950">{content.brand.name}</p>
            <a
              href={`mailto:${content.cta.email}`}
              className="text-sm text-slate-500 transition-colors hover:text-blue-950"
            >
              {content.cta.email}
            </a>
          </div>
        </div>

        <div className="relative w-full overflow-hidden bg-slate-50">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-10 h-36 bg-gradient-to-b from-white via-slate-50/80 to-transparent sm:h-44"
            aria-hidden="true"
          />
          <img
            src={fondoFinal}
            alt="Cierre Fran Pino Vielma — paisaje con caballos"
            className="h-auto max-h-[420px] w-full object-cover object-bottom sm:max-h-[500px] lg:max-h-[560px]"
          />
          <p className="pointer-events-none absolute inset-x-0 bottom-4 z-20 px-4 text-center text-[0.7rem] font-light tracking-wide text-white drop-shadow-md sm:bottom-6 sm:text-xs">
            {content.footer.copyright}
          </p>
        </div>
      </footer>
      </div>
    </div>
  )
}
