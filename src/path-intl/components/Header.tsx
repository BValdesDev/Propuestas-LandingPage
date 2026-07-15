import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { pathLinks } from '../content'

const navItems = [
  { key: 'about', href: pathLinks.about },
  { key: 'services', href: pathLinks.programs },
  { key: 'resources', href: pathLinks.resources },
  { key: 'contact', href: pathLinks.contact },
] as const

export default function Header() {
  const { t } = useTranslation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-[#e8e4de]/80 bg-[#faf8f5]/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href={pathLinks.home} className="flex min-w-0 items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#0b2c4a] text-xs font-bold tracking-wide text-white">
            {t('header.logoBadge')}
          </span>
          <span className="min-w-0">
            <span className="block truncate text-lg font-bold text-[#0b2c4a]">
              {t('header.logoText')}
            </span>
            <span className="hidden truncate text-[0.65rem] leading-tight text-slate-500 sm:block">
              {t('header.logoSub')}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-[#1e6bb8]"
            >
              {t(`header.nav.${item.key}`)}
            </a>
          ))}
          <a
            href={pathLinks.contact}
            className="rounded-md bg-[#d97706] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#c2410c]"
          >
            {t('header.cta')}
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-slate-200 p-2 text-[#0b2c4a] lg:hidden"
          aria-label={mobileOpen ? t('header.closeMenu') : t('header.openMenu')}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[#e8e4de]/80 bg-[#faf8f5] px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-white/70 hover:text-[#1e6bb8]"
              >
                {t(`header.nav.${item.key}`)}
              </a>
            ))}
            <a
              href={pathLinks.contact}
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-md bg-[#d97706] px-3 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[#c2410c]"
            >
              {t('header.cta')}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
