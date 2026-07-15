import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { pathIntlLanguages, type PathIntlLang } from '../../i18n/pathIntl'
import LanguageFlag from './LanguageFlag'

export default function FloatingLanguageSwitcher() {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const currentCode = (i18n.resolvedLanguage ?? i18n.language).slice(0, 2) as PathIntlLang
  const current =
    pathIntlLanguages.find((lang) => lang.code === currentCode) ?? pathIntlLanguages[0]

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onEscape)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onEscape)
    }
  }, [])

  const changeLanguage = (code: PathIntlLang) => {
    void i18n.changeLanguage(code)
    setOpen(false)
  }

  return (
    <div ref={containerRef} className="fixed bottom-4 left-4 z-50">
      <div className="relative overflow-visible rounded-md border border-slate-200 bg-white shadow-md">
        {open && (
          <ul
            role="listbox"
            className="absolute bottom-full left-0 mb-0 max-h-56 w-full min-w-[11.5rem] overflow-y-auto rounded-t-md border border-b-0 border-slate-200 bg-[#f0f0f0] py-1 shadow-lg"
          >
            {pathIntlLanguages.map((lang) => (
              <li key={lang.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={lang.code === current.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm text-slate-700 transition-colors hover:bg-white ${
                    lang.code === current.code ? 'bg-white font-medium' : ''
                  }`}
                >
                  <LanguageFlag code={lang.code} />
                  <span>{lang.label}</span>
                </button>
              </li>
            ))}
          </ul>
        )}

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-haspopup="listbox"
          aria-expanded={open}
          className="flex w-full min-w-[11.5rem] cursor-pointer items-center gap-3 bg-white px-3 py-2 transition-colors hover:bg-slate-50"
        >
          <LanguageFlag code={current.code} />
          <span className="flex-1 text-left text-sm font-medium text-slate-700">
            {current.label}
          </span>
          <svg
            className={`h-3.5 w-3.5 shrink-0 text-slate-500 transition-transform ${open ? 'rotate-180' : ''}`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
