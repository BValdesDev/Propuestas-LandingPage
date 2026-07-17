import retratoFranImg from '../assets/retrato_fran.jpg'

export const pathMedia = {
  heroImage:
    'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=2000&q=80',
  /** Retrato profesional de Fran (mismo criterio visual que /diseno-1–3) */
  aboutImage: retratoFranImg,
} as const

/** Non-translated hrefs shared across languages */
export const pathLinks = {
  about: '#about',
  programs: '#programs',
  resources: '#resources',
  contact: '#contact',
  home: '#',
} as const
