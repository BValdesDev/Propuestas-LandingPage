import type { PathIntlLang } from '../../i18n/pathIntl'

type FlagProps = {
  code: PathIntlLang
  className?: string
}

export default function LanguageFlag({ code, className = 'h-4 w-6' }: FlagProps) {
  const common = `${className} shrink-0 overflow-hidden rounded-[2px] border border-black/10 shadow-sm`

  if (code === 'es') {
    return (
      <svg viewBox="0 0 640 480" className={common} aria-hidden="true">
        <path fill="#c60b1e" d="M0 0h640v480H0z" />
        <path fill="#ffc400" d="M0 120h640v240H0z" />
      </svg>
    )
  }

  if (code === 'en') {
    return (
      <svg viewBox="0 0 7410 3900" className={common} aria-hidden="true">
        <path fill="#b22234" d="M0 0h7410v3900H0z" />
        <path
          stroke="#fff"
          strokeWidth="300"
          d="M0 450h7410M0 1050h7410M0 1650h7410M0 2250h7410M0 2850h7410M0 3450h7410"
        />
        <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
      </svg>
    )
  }

  if (code === 'pt') {
    return (
      <svg viewBox="0 0 600 400" className={common} aria-hidden="true">
        <path fill="#006600" d="M0 0h240v400H0z" />
        <path fill="#ff0000" d="M240 0h360v400H240z" />
        <circle cx="240" cy="200" r="70" fill="#ffcc00" />
        <circle cx="240" cy="200" r="48" fill="#fff" />
        <circle cx="240" cy="200" r="36" fill="#003399" />
      </svg>
    )
  }

  if (code === 'de') {
    return (
      <svg viewBox="0 0 5 3" className={common} aria-hidden="true">
        <path fill="#000" d="M0 0h5v1H0z" />
        <path fill="#D00" d="M0 1h5v1H0z" />
        <path fill="#FFCE00" d="M0 2h5v1H0z" />
      </svg>
    )
  }

  if (code === 'it') {
    return (
      <svg viewBox="0 0 3 2" className={common} aria-hidden="true">
        <path fill="#009246" d="M0 0h1v2H0z" />
        <path fill="#fff" d="M1 0h1v2H1z" />
        <path fill="#ce2b37" d="M2 0h1v2H2z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 900 600" className={common} aria-hidden="true">
      <path fill="#002395" d="M0 0h300v600H0z" />
      <path fill="#fff" d="M300 0h300v600H300z" />
      <path fill="#ed2939" d="M600 0h300v600H600z" />
    </svg>
  )
}
