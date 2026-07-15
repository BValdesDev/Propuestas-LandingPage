import { useTranslation } from 'react-i18next'
import { pathLinks } from '../content'

export default function TopBar() {
  const { t } = useTranslation()

  return (
    <div className="bg-[#0b2c4a] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 px-4 py-2 text-xs sm:px-6 lg:px-8">
        <nav className="flex items-center gap-5">
          <a
            href={pathLinks.contact}
            className="text-white/80 transition-colors hover:text-white"
          >
            {t('topBar.escribem')}
          </a>
        </nav>
      </div>
    </div>
  )
}
