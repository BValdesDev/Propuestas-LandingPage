import { useState } from 'react'
import type { ReactNode } from 'react'
import { content } from '../data/content'

const riverStone = 'rounded-[30%_70%_70%_30%/_30%_30%_70%_70%]'

const pillarIcons = {
  nutrition: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
      />
    </svg>
  ),
  heart: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  ),
  horse: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      />
    </svg>
  ),
}

function SoftNatureGlow() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full overflow-hidden bg-gradient-to-b from-[#faf9f6] via-[#f4f7f5] to-[#faf9f6]"
      aria-hidden="true"
    >
      {/* Nube CSS 1 - Esquina superior izquierda */}
      <div className="absolute top-[10%] left-[-5%] h-[200px] w-[350px] rounded-full bg-white/70 opacity-80 blur-3xl" />
      <div className="absolute top-[8%] left-[5%] h-[150px] w-[250px] rounded-full bg-stone-100/40 opacity-70 blur-2xl" />

      {/* Nube CSS 2 - Lateral derecho medio */}
      <div className="absolute top-[40%] right-[-10%] h-[300px] w-[500px] rounded-full bg-white/80 opacity-90 blur-3xl" />

      {/* Nube CSS 3 - Esquina inferior izquierda */}
      <div className="absolute bottom-[15%] left-[-10%] h-[250px] w-[450px] rounded-full bg-white/60 opacity-80 blur-3xl" />
      <div className="absolute bottom-[12%] left-[-2%] h-[180px] w-[300px] rounded-full bg-stone-100/50 opacity-60 blur-2xl" />

      {/* Nube CSS 4 - Centro inferior */}
      <div className="absolute right-[20%] bottom-[5%] h-[200px] w-[400px] rounded-full bg-white/50 opacity-70 blur-3xl" />

      {/* Toques organicos salvia / arena muy suaves */}
      <div className="absolute top-[55%] left-[30%] h-64 w-64 rounded-full bg-[#c8d9cf]/20 opacity-50 blur-3xl" />
      <div className="absolute top-[20%] right-[25%] h-52 w-52 rounded-full bg-[#e8dcc8]/25 opacity-40 blur-3xl" />
    </div>
  )
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="h-px w-8 bg-[#4a7c68]/40" aria-hidden="true" />
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4a7c68]">{children}</p>
    </div>
  )
}

function SoftCard({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-3xl border border-transparent bg-white/85 p-8 shadow-md shadow-stone-200/50 backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-emerald-800/10 hover:shadow-lg hover:shadow-stone-200/80 ${className}`}
    >
      {children}
    </div>
  )
}

function PrimaryCta({
  href,
  children,
  className = '',
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2 rounded-full bg-[#1e3f35] px-10 py-4 text-sm font-medium text-white shadow-md shadow-[#1e3f35]/20 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#2a5346] hover:shadow-lg hover:shadow-[#1e3f35]/25 ${className}`}
    >
      <span>{children}</span>
      <span
        className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-1"
        aria-hidden="true"
      >
        →
      </span>
    </a>
  )
}

function NaturePlaylist() {
  const [activeTrack, setActiveTrack] = useState<'calm' | 'chaos'>('calm')
  const [isPlaying, setIsPlaying] = useState(false)
  const track = content.heartCoherence.playlist.tracks.find((item) => item.id === activeTrack)!

  return (
    <div className="mx-auto mt-16 max-w-xl overflow-hidden rounded-3xl border border-[#e5ebe7]/80 bg-white/90 shadow-lg shadow-stone-200/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-200/60">
      <div className="border-b border-[#eef2ef] px-6 py-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4a7c68]">
          {content.heartCoherence.playlist.title}
        </p>
        <p className="mt-2 text-sm font-light leading-relaxed text-stone-600">
          {content.heartCoherence.playlist.intro}
        </p>
      </div>

      <div className="px-6 py-6">
        <div className="flex items-center gap-4">
          <div
            className={`flex h-16 w-16 shrink-0 items-center justify-center ${riverStone} ${
              activeTrack === 'calm'
                ? 'bg-gradient-to-br from-[#d4e8de] to-[#e8e2d6]'
                : 'bg-gradient-to-br from-[#f0e4d8] to-[#e8d5d0]'
            }`}
          >
            <span className="font-serif text-2xl text-[#1e3f35]">♪</span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate font-serif text-xl font-light text-[#1e3f35]">{track.title}</p>
            <p className="truncate text-sm text-stone-500">{track.artist}</p>
          </div>
          <button
            type="button"
            onClick={() => setIsPlaying((value) => !value)}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1e3f35] text-white transition duration-300 hover:scale-105 hover:bg-[#2a5346]"
            aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
          >
            {isPlaying ? (
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" />
              </svg>
            ) : (
              <svg className="ml-0.5 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
            )}
          </button>
        </div>

        <div className="mt-5 flex items-center gap-3">
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-[#eef2ef]">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                activeTrack === 'calm' ? 'w-3/4 bg-[#4a7c68]' : 'w-1/4 bg-[#b08968]'
              } ${isPlaying ? 'animate-pulse' : ''}`}
            />
          </div>
          <span className="text-xs text-stone-500">{activeTrack === 'calm' ? '2:18' : '0:41'}</span>
        </div>

        <div className="mt-6 grid gap-2">
          {content.heartCoherence.playlist.tracks.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setActiveTrack(item.id)
                setIsPlaying(true)
              }}
              className={`rounded-2xl border px-4 py-3 text-left transition-all duration-300 ${
                activeTrack === item.id
                  ? 'border-[#4a7c68]/35 bg-[#eef6f2]'
                  : 'border-[#eef2ef] bg-[#faf9f6]/80 hover:border-[#d4e4dc]'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium text-[#1e3f35]">{item.title}</p>
                <span
                  className={`text-[0.65rem] font-semibold uppercase tracking-wider ${
                    item.id === 'calm' ? 'text-[#4a7c68]' : 'text-[#b08968]'
                  }`}
                >
                  {item.vibe}
                </span>
              </div>
              <p className="mt-2 text-sm font-light leading-relaxed text-stone-600">{item.description}</p>
            </button>
          ))}
        </div>

        <p className="mt-6 text-left text-sm font-light leading-loose text-stone-600 md:text-justify">
          {content.heartCoherence.playlist.closing}
        </p>
      </div>
    </div>
  )
}

export default function DisenoTres() {
  const [activePillar, setActivePillar] = useState(0)

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-tr from-[#f4f7f5] via-[#faf9f6] to-[#fbf7f0] font-sans text-stone-700 antialiased">
      <SoftNatureGlow />

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-stone-200/60 bg-[#faf9f6]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#" className="transition-opacity duration-300 hover:opacity-80">
            <p className="font-serif text-xl font-light tracking-wide text-[#1e3f35]">
              {content.brand.shortName}
            </p>
            <p className="mt-0.5 text-[0.65rem] uppercase tracking-[0.22em] text-[#6b857a]">
              {content.brand.tagline}
            </p>
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {content.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-stone-600 transition-all duration-300 hover:text-[#1e3f35]"
              >
                {link.label}
              </a>
            ))}
            <PrimaryCta href={content.cta.whatsappUrl} className="px-5 py-2.5 shadow-sm">
              {content.hero.ctaPrimary}
            </PrimaryCta>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-6 pb-28 pt-20 lg:px-8 lg:pb-36 lg:pt-28">
        <div className="pointer-events-none absolute right-10 top-24 h-64 w-64 rounded-full bg-[#c8d9cf]/25 blur-3xl" aria-hidden="true" />
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-12">
            <div className="text-center lg:col-span-7 lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d4e4dc] bg-white/70 px-4 py-2 shadow-sm shadow-stone-200/40 backdrop-blur-md">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#4a7c68]" />
                <span className="text-xs uppercase tracking-widest text-[#6b857a]">
                  {content.hero.eyebrow}
                </span>
              </div>
              <h1 className="mt-10 font-serif text-5xl font-light leading-[1.1] tracking-tight text-[#1e3f35] md:text-6xl lg:text-7xl">
                {content.hero.headline.split(' ').map((word, i, arr) => (
                  <span key={i} className={i >= arr.length - 3 ? 'text-[#4a7c68]' : undefined}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
              <p className="mx-auto mt-8 max-w-xl text-lg font-light leading-relaxed tracking-wide text-stone-600 lg:mx-0">
                {content.hero.subheadline}
              </p>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <PrimaryCta href={content.cta.whatsappUrl}>{content.hero.ctaPrimary}</PrimaryCta>
                <a
                  href="#metodo"
                  className="rounded-full border border-[#d4e4dc] bg-white/80 px-10 py-4 text-sm font-medium text-[#1e3f35] backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-[#4a7c68]/40 hover:shadow-md hover:shadow-stone-200/50"
                >
                  {content.hero.ctaSecondary}
                </a>
              </div>
            </div>

            <div className="relative lg:col-span-5 lg:translate-y-4">
              <div className="overflow-hidden rounded-[2rem] border border-[#e5ebe7] shadow-xl shadow-stone-200/60">
                <img
                  src={content.hero.image}
                  alt={content.hero.imageAlt}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              <SoftCard className="absolute -bottom-10 -left-4 max-w-xs hover:translate-y-0 lg:-left-8">
                <p className="font-serif text-4xl leading-none text-[#4a7c68]/25" aria-hidden="true">
                  “
                </p>
                <p className="-mt-4 font-serif text-sm italic leading-relaxed text-[#1e3f35]">
                  {content.uvp}
                </p>
              </SoftCard>
            </div>
          </div>
        </div>
      </section>

      {/* Método */}
      <section
        id="metodo"
        className="relative border-y border-stone-200/60 bg-white/35 px-6 py-24 backdrop-blur-[2px] lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl text-center lg:text-left">
              <SectionLabel>El método</SectionLabel>
              <h2 className="mt-4 font-serif text-4xl font-light tracking-tight text-[#1e3f35] md:text-5xl">
                {content.method.title}
              </h2>
              <p className="mt-6 font-light leading-relaxed text-stone-600">{content.method.subtitle}</p>
            </div>
            <p className="hidden font-serif text-7xl font-light leading-none text-stone-300/70 lg:block">
              01
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-12">
            <div className="flex flex-col gap-3 lg:col-span-4">
              {content.method.pillars.map((pillar, index) => (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActivePillar(index)}
                  className={`rounded-2xl border p-5 text-left transition-all duration-300 ease-in-out ${
                    activePillar === index
                      ? 'border-emerald-800/15 bg-white shadow-lg shadow-stone-200/70'
                      : 'border-transparent bg-white/50 hover:-translate-y-1 hover:border-emerald-800/10 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex h-12 w-12 items-center justify-center ${riverStone} ${
                        activePillar === index
                          ? 'bg-[#eef6f2] text-[#1e3f35]'
                          : 'bg-[#f0ebe3] text-[#6b857a]'
                      }`}
                    >
                      {pillarIcons[pillar.icon]}
                    </span>
                    <div>
                      <span className="font-serif text-lg font-light text-stone-300">
                        0{index + 1}
                      </span>
                      <p className="font-medium text-[#1e3f35]">{pillar.title}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <SoftCard className="lg:col-span-8 lg:translate-y-2 lg:p-12">
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center ${riverStone} bg-[#eef6f2] text-[#1e3f35]`}
              >
                {pillarIcons[content.method.pillars[activePillar].icon]}
              </div>
              <h3 className="font-serif text-2xl font-light text-[#1e3f35]">
                {content.method.pillars[activePillar].title}
              </h3>
              <p className="mt-6 text-lg font-light leading-relaxed text-stone-600">
                {content.method.pillars[activePillar].description}
              </p>
              <div className="mt-10 h-px w-full overflow-hidden rounded-full bg-stone-200/60">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#1e3f35] to-[#4a7c68] transition-all duration-500"
                  style={{ width: `${((activePillar + 1) / 3) * 100}%` }}
                />
              </div>
            </SoftCard>
          </div>

          <p className="mt-12 text-center text-sm font-light italic text-stone-500">
            {content.disclaimer}
          </p>
        </div>
      </section>

      {/* Misión y visión — editorial asimétrico de revista */}
      <section className="relative px-6 py-24 lg:px-8 lg:py-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute left-1/4 top-10 h-80 w-80 rounded-full bg-[#c8d9cf]/30 blur-3xl" />
          <div className="absolute right-1/5 bottom-0 h-64 w-64 rounded-full bg-[#e8dcc8]/35 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-5xl items-center gap-8 px-0 md:grid-cols-2 md:gap-12">
          {/* Visión */}
          <div className="relative rounded-2xl border border-emerald-800/10 border-l-4 border-l-emerald-800/60 bg-[#f4f7f5] p-10 shadow-md shadow-stone-100 transition-transform duration-300 hover:scale-[1.01] md:-translate-y-4 md:p-12">
            <span
              className="pointer-events-none absolute top-4 right-6 select-none font-serif text-8xl text-emerald-800/10"
              aria-hidden="true"
            >
              “
            </span>
            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-800" aria-hidden="true" />
                <span className="text-xs font-bold tracking-widest text-emerald-800 uppercase">
                  {content.mission.visionLabel}
                </span>
              </div>
              <p className="font-serif text-lg font-semibold leading-relaxed text-stone-800 antialiased md:text-xl md:text-justify">
                {content.mission.vision}
              </p>
            </div>
          </div>

          {/* Misión */}
          <div className="relative rounded-2xl border border-amber-900/10 border-l-4 border-l-amber-800/50 bg-[#faf6f0] p-10 shadow-md shadow-stone-100 transition-transform duration-300 hover:scale-[1.01] md:translate-y-4 md:p-12">
            <span
              className="pointer-events-none absolute top-4 right-6 select-none font-serif text-8xl text-amber-800/10"
              aria-hidden="true"
            >
              “
            </span>
            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-800" aria-hidden="true" />
                <span className="text-xs font-bold tracking-widest text-amber-800 uppercase">
                  {content.mission.missionLabel}
                </span>
              </div>
              <p className="font-serif text-lg font-semibold leading-relaxed text-stone-800 antialiased md:text-xl md:text-justify">
                {content.mission.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <section
        id="sobre-mi"
        className="border-t border-stone-200/60 bg-white/40 px-6 py-24 backdrop-blur-[2px] lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
            <div className="max-w-2xl">
              <SectionLabel>Historia de transformación</SectionLabel>
              <h2 className="mt-4 font-serif text-4xl font-light tracking-tight text-[#1e3f35] md:text-5xl">
                {content.about.greeting}
              </h2>
              <p className="mt-6 text-left text-base font-light leading-loose text-stone-600 md:text-lg lg:text-left">
                {content.about.intro}
              </p>
            </div>
            <p className="font-serif text-7xl font-light leading-none text-stone-300/70">02</p>
          </div>

          <div className="mt-16 grid items-start gap-10 lg:grid-cols-12">
            <div className="overflow-hidden rounded-[2rem] border border-[#e5ebe7] shadow-xl shadow-stone-200/50 lg:col-span-4 lg:-translate-y-2">
              <img
                src={content.about.image}
                alt={content.about.imageAlt}
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
            <div className="space-y-8 lg:col-span-8">
              {content.about.milestones.map((milestone, index) => (
                <SoftCard
                  key={milestone.id}
                  className={`hover:translate-y-[-0.5rem] ${
                    index === 1 ? 'md:translate-x-4' : index === 2 ? 'md:-translate-x-2' : ''
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4a7c68]">
                      {milestone.location}
                    </p>
                    <span className="font-serif text-3xl font-light text-stone-300/70">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-3 font-serif text-2xl font-light text-[#1e3f35]">
                    {milestone.title}
                  </h3>
                  <p className="mt-4 text-left text-base font-light leading-loose text-stone-600 md:text-justify">
                    {milestone.body}
                  </p>
                </SoftCard>
              ))}
              <blockquote className="rounded-3xl border border-stone-200/60 bg-[#faf9f6]/80 px-8 py-10 text-center shadow-sm">
                <p className="font-serif text-5xl leading-none text-[#4a7c68]/25" aria-hidden="true">
                  “
                </p>
                <p className="-mt-4 font-serif text-lg font-light italic leading-relaxed text-[#1e3f35] md:text-xl">
                  {content.about.faithNote}
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Coherencia */}
      <section id="coherencia" className="relative border-t border-stone-200/60 px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>Fisiología viva</SectionLabel>
          <h2 className="mt-4 font-serif text-4xl font-light tracking-tight text-[#1e3f35] md:text-5xl">
            {content.heartCoherence.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-light leading-relaxed text-stone-600">
            {content.heartCoherence.subtitle}
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-6">
          {content.heartCoherence.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-left text-base font-light leading-loose tracking-wide text-stone-600 md:text-justify md:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-[2rem] border border-[#e5ebe7] shadow-xl shadow-stone-200/50">
          <div className="aspect-[4/3] w-full">
            <img
              src={content.heartCoherence.image}
              alt={content.heartCoherence.imageAlt}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <NaturePlaylist />
      </section>

      {/* Enfoques de salud — asimétricos */}
      <section className="bg-white/35 px-6 py-24 backdrop-blur-[2px] lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
            <div>
              <SectionLabel>Preguntas que importan</SectionLabel>
              <h2 className="mt-4 font-serif text-4xl font-light tracking-tight text-[#1e3f35]">
                {content.healthFocuses.title}
              </h2>
            </div>
            <p className="font-serif text-7xl font-light leading-none text-stone-300/70">03</p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {content.healthFocuses.items.map((item, index) => (
              <div
                key={item.id}
                className={`rounded-3xl border border-stone-200/40 bg-white/90 p-8 shadow-md shadow-stone-200/30 backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-emerald-800/10 hover:shadow-lg hover:shadow-stone-200/50 md:p-10 ${
                  index === 0
                    ? 'md:-translate-y-4'
                    : index === 1
                      ? 'md:translate-y-4'
                      : 'md:-translate-y-2'
                }`}
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center ${riverStone} bg-[#f0ebe3] text-[#1e3f35]`}
                >
                  <span className="font-serif text-lg">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold leading-snug tracking-tight text-emerald-950 md:text-2xl">
                  {item.question}
                </h3>
                <p className="mt-5 font-sans text-[15.5px] font-light leading-relaxed text-stone-600/90 antialiased md:text-[16.5px] md:text-justify">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="relative px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <SectionLabel>Servicios</SectionLabel>
            <h2 className="mt-4 font-serif text-4xl font-light tracking-tight text-[#1e3f35] md:text-5xl">
              {content.services.title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-light leading-relaxed text-stone-600">
              {content.services.subtitle}
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.services.items.map((service, index) => (
              <SoftCard
                key={service.id}
                className={`group ${
                  index % 3 === 1 ? 'md:translate-y-5' : index % 3 === 2 ? 'md:-translate-y-3' : ''
                }`}
              >
                {service.highlight && (
                  <span className="inline-block rounded-full border border-[#d4e4dc] bg-[#eef6f2] px-3 py-1 text-xs font-medium text-[#4a7c68]">
                    {service.highlight}
                  </span>
                )}
                <div
                  className={`mt-4 flex h-12 w-12 items-center justify-center ${riverStone} bg-[#eef6f2] text-[#1e3f35]`}
                >
                  <span className="font-serif text-lg text-[#4a7c68]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-xl font-light text-[#1e3f35]">{service.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-stone-600 md:text-justify">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-stone-200/60 pt-5">
                  <span className="text-xs uppercase tracking-widest text-stone-400">
                    {service.modality}
                  </span>
                  <a
                    href={content.cta.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1 text-sm font-medium text-[#4a7c68] transition-all duration-300 hover:text-[#1e3f35]"
                  >
                    Reservar
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </SoftCard>
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section
        id="galeria"
        className="relative border-t border-stone-200/60 bg-white/30 px-6 py-24 backdrop-blur-[2px] lg:px-8 lg:py-28"
      >
        <div
          className="pointer-events-none absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-[#c8d9cf]/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-1/4 right-1/5 h-64 w-64 rounded-full bg-[#e8dcc8]/30 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl text-center">
          <SectionLabel>Experiencias</SectionLabel>
          <h2 className="mt-4 font-serif text-4xl font-light tracking-tight text-[#1e3f35] md:text-5xl">
            {content.breathingPlace.title}
          </h2>
        </div>

        <div className="relative mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {content.breathingPlace.experiences.map((experience, index) => {
            const mosaicClass =
              index === 0
                ? 'lg:col-span-6 lg:row-span-2'
                : index === 1
                  ? 'lg:col-span-3'
                  : index === 2
                    ? 'lg:col-span-3'
                    : index === 3
                      ? 'lg:col-span-4'
                      : index === 4
                        ? 'lg:col-span-4'
                        : 'lg:col-span-4'

            return (
              <article key={experience.id} className={`group relative ${mosaicClass}`}>
                <div className="relative overflow-hidden rounded-[1.75rem] border border-transparent bg-white shadow-md shadow-stone-200/50 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-emerald-800/10 hover:shadow-lg hover:shadow-stone-200/80">
                  <div
                    className={`relative w-full overflow-hidden ${
                      index === 0
                        ? 'aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[320px]'
                        : 'aspect-[4/3]'
                    }`}
                  >
                    <img
                      src={experience.src}
                      alt={experience.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1e3f35]/30 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="relative px-5 py-4 text-center font-medium tracking-wide text-[#1e3f35]">
                    {experience.label}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* Propósito — cita editorial */}
      <section className="relative px-6 py-28 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>{content.purpose.title}</SectionLabel>
          <div className="mt-12">
            <p className="font-serif text-8xl leading-none text-[#4a7c68]/15" aria-hidden="true">
              “
            </p>
            <p className="-mt-10 font-serif text-3xl font-light italic leading-relaxed tracking-wide text-[#1e3f35] md:text-4xl lg:text-5xl">
              {content.purpose.statement}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="border-y border-stone-200/60 bg-white/40 px-6 py-24 backdrop-blur-[2px] lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <SoftCard className="text-center">
            <SectionLabel>{content.testimonials.title}</SectionLabel>
            <p className="mt-8 font-serif text-xl font-light italic leading-relaxed text-stone-600 md:text-2xl">
              “{content.testimonials.placeholder}”
            </p>
          </SoftCard>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="relative px-6 py-24 lg:px-8 lg:py-28">
        <div
          className="pointer-events-none absolute inset-x-0 top-1/2 h-64 -translate-y-1/2 bg-[#c8d9cf]/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-[2rem] border border-[#d4e4dc] bg-gradient-to-br from-[#1e3f35] via-[#254a3f] to-[#2f5a4c] px-8 py-16 text-center shadow-xl shadow-[#1e3f35]/20 md:px-16 md:py-20">
            <h2 className="font-serif text-4xl font-light tracking-tight text-[#faf9f6] md:text-5xl">
              {content.cta.title}
            </h2>
            <p className="mx-auto mt-6 max-w-lg font-light leading-relaxed text-[#c8d9cf]">
              {content.cta.description}
            </p>
            <a
              href={content.cta.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-12 py-4 text-base font-medium text-[#1e3f35] shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#eef6f2] hover:shadow-lg"
            >
              <span>{content.cta.buttonLabel}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </a>
            <p className="mt-6 text-sm text-[#a3beb2]">{content.cta.email}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200/60 bg-[#faf9f6]/90 px-6 py-14 backdrop-blur-md lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-serif text-lg font-light text-[#1e3f35]">{content.brand.name}</p>
            <p className="mt-2 text-sm text-stone-500">{content.footer.copyright}</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            {content.footer.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-stone-500 transition-all duration-300 hover:text-[#1e3f35]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-3">
            {content.footer.social.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#d4e4dc] px-4 py-2 text-xs font-medium text-stone-500 transition-all duration-300 hover:border-[#4a7c68]/40 hover:text-[#1e3f35]"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
