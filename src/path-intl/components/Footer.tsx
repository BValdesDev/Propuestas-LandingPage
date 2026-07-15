import { useTranslation } from 'react-i18next'
import { pathLinks } from '../content'

export default function Footer() {
  const { t } = useTranslation()

  const columns = [
    {
      titleKey: 'footer.columns.about.title',
      links: [
        { labelKey: 'footer.columns.about.links.story', href: pathLinks.about },
        { labelKey: 'footer.columns.about.links.method', href: pathLinks.programs },
        { labelKey: 'footer.columns.about.links.research', href: '#' },
        { labelKey: 'footer.columns.about.links.collab', href: '#' },
      ],
    },
    {
      titleKey: 'footer.columns.services.title',
      links: [
        { labelKey: 'footer.columns.services.links.heart', href: pathLinks.programs },
        { labelKey: 'footer.columns.services.links.nutrition', href: pathLinks.programs },
        { labelKey: 'footer.columns.services.links.therapy', href: pathLinks.programs },
        { labelKey: 'footer.columns.services.links.talks', href: pathLinks.programs },
      ],
    },
    {
      titleKey: 'footer.columns.resources.title',
      links: [
        { labelKey: 'footer.columns.resources.links.portal', href: '#' },
        { labelKey: 'footer.columns.resources.links.articles', href: pathLinks.resources },
        { labelKey: 'footer.columns.resources.links.faq', href: '#' },
        { labelKey: 'footer.columns.resources.links.contact', href: pathLinks.contact },
      ],
    },
  ] as const

  const social = ['Facebook', 'Instagram', 'LinkedIn'] as const
  const legalLinks = [
    { labelKey: 'footer.legal.privacy', href: '#' },
    { labelKey: 'footer.legal.terms', href: '#' },
    { labelKey: 'footer.legal.accessibility', href: '#' },
  ] as const

  return (
    <footer className="border-t border-[#0a2438] bg-[#0b2c4a] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8 lg:py-16">
        {columns.map((column) => (
          <div key={column.titleKey}>
            <h3 className="text-sm font-bold tracking-wide text-white uppercase">
              {t(column.titleKey)}
            </h3>
            <ul className="mt-4 space-y-2">
              {column.links.map((link) => (
                <li key={link.labelKey}>
                  <a
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-sm font-bold tracking-wide text-white uppercase">
            {t('footer.contact.title')}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            {t('footer.contact.address')}
          </p>
          <p className="mt-2 text-sm text-white/75">{t('footer.contact.phone')}</p>
          <a
            href={`mailto:${t('footer.contact.email')}`}
            className="mt-1 block text-sm text-[#93c5fd] transition-colors hover:text-white"
          >
            {t('footer.contact.email')}
          </a>
          <div className="mt-5 flex flex-wrap gap-3">
            {social.map((label) => (
              <a
                key={label}
                href="#"
                className="rounded border border-white/20 px-2.5 py-1 text-xs text-white/80 transition hover:border-white/40 hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>{t('footer.legal.copyright')}</p>
          <nav className="flex flex-wrap gap-4">
            {legalLinks.map((link) => (
              <a key={link.labelKey} href={link.href} className="transition-colors hover:text-white">
                {t(link.labelKey)}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
