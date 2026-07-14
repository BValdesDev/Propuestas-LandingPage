import imgConfianza from '../assets/3.jpg'
import imgPresenciaCampo from '../assets/5.jpg'
import imgCaballosEquinos from '../assets/caballos_y_frecuencia_cardiaca.jpg'
import imgCaballosVfc from '../assets/caballos_frecuencia.PNG'
import imgCalmaRegulacion from '../assets/imagen5.jpg'
import imgEncuentroCampo from '../assets/Imagen_final.PNG'

export interface Pillar {
  id: string
  title: string
  description: string
  icon: 'nutrition' | 'heart' | 'horse'
}

export interface Service {
  id: string
  title: string
  description: string
  modality: string
  highlight?: string
}

export interface Certification {
  name: string
  issuer: string
}

export interface NavLink {
  label: string
  href: string
}

export interface BreathingPlaceExperience {
  id: string
  label: string
  src: string
  alt: string
}

export interface AboutMilestone {
  id: string
  title: string
  location: string
  body: string
}

export interface HealthFocus {
  id: string
  question: string
  answer: string
}

export interface PlaylistTrack {
  id: 'calm' | 'chaos'
  title: string
  artist: string
  vibe: string
  description: string
}

export interface SiteContent {
  brand: {
    name: string
    shortName: string
    domain: string
    tagline: string
    subtitle: string
  }
  nav: NavLink[]
  hero: {
    eyebrow: string
    headline: string
    subheadline: string
    ctaPrimary: string
    ctaSecondary: string
    image: string
    imageAlt: string
  }
  uvp: string
  method: {
    title: string
    subtitle: string
    pillars: Pillar[]
  }
  disclaimer: string
  about: {
    title: string
    greeting: string
    intro: string
    milestones: AboutMilestone[]
    faithNote: string
    image: string
    imageAlt: string
  }
  heartCoherence: {
    title: string
    subtitle: string
    paragraphs: string[]
    image: string
    imageAlt: string
    playlist: {
      title: string
      intro: string
      tracks: PlaylistTrack[]
      closing: string
    }
  }
  healthFocuses: {
    title: string
    subtitle: string
    items: HealthFocus[]
  }
  services: {
    title: string
    subtitle: string
    items: Service[]
  }
  mission: {
    title: string
    missionLabel: string
    visionLabel: string
    mission: string
    vision: string
  }
  purpose: {
    title: string
    statement: string
  }
  certifications: Certification[]
  testimonials: {
    title: string
    placeholder: string
  }
  cta: {
    title: string
    description: string
    buttonLabel: string
    whatsappUrl: string
    email: string
  }
  footer: {
    copyright: string
    links: NavLink[]
    social: { label: string; href: string }[]
  }
  breathingPlace: {
    title: string
    experiences: BreathingPlaceExperience[]
  }
  images: {
    gallery: { src: string; alt: string }[]
  }
}

export const content: SiteContent = {
  brand: {
    name: 'Francisca Pino Vielma',
    shortName: 'Fran Pino Vielma',
    domain: 'franciscapinovielma.com',
    tagline: 'Como el arcoíris después de la tormenta',
    subtitle: 'Nutrición, corazón y caballos',
  },

  nav: [
    { label: 'Método', href: '#metodo' },
    { label: 'Coherencia', href: '#coherencia' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Contacto', href: '#contacto' },
  ],

  hero: {
    eyebrow: 'Coherencia cardíaca equina · Nutrición con evidencia',
    headline: 'Nadie sana siendo tratado como un número.',
    subheadline:
      'Nutrición basada en evidencia, coherencia de tu corazón y la calma de los caballos — para que tu cuerpo y tu paz vuelvan a estar de acuerdo.',
    ctaPrimary: 'Conversemos',
    ctaSecondary: 'Conocer el método',
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Cielo sereno al amanecer sobre montañas',
  },

  uvp:
    'Acompañamiento integral que honra tu historia: sin dietas restrictivas, sin promesas vacías y sin reducirte a una métrica en una balanza.',

  method: {
    title: 'Un método que integra tres caminos',
    subtitle:
      'No trabajo con dietas milagro ni soluciones rápidas. Integro tres formas honestas de cuidar tu bienestar, respaldadas por lo que la ciencia respalda hoy.',
    pillars: [
      {
        id: 'nutrition',
        title: 'Nutrición basada en evidencia',
        description:
          'Reeducación de tu relación con la comida desde la compasión: planes personalizados, sin culpa y sin restricciones extremas que no puedas sostener.',
        icon: 'nutrition',
      },
      {
        id: 'heart',
        title: 'Coherencia cardíaca',
        description:
          'Entrenamiento de la respiración y la regulación del sistema nervioso para bajar el estrés, la ansiedad y recuperar un ritmo interno de calma.',
        icon: 'heart',
      },
      {
        id: 'horse',
        title: 'Acompañamiento con caballos',
        description:
          'El contacto con los equinos como espacio de presencia, conexión y autorregulación emocional. Un enfoque con evidencia emergente que complementa el proceso.',
        icon: 'horse',
      },
    ],
  },

  disclaimer:
    'Solo comparto lo que la evidencia respalda: acompaño procesos — no prometo curas ni resultados de pérdida de peso.',

  about: {
    title: 'Sobre mí',
    greeting: 'Hola, soy Fran',
    intro:
      'Nutricionista y dietista, comunicadora y formadora en coherencia cardíaca. Mi camino integra la ciencia del cuerpo con la calma del corazón y la sabiduría intuitiva de los caballos.',
    milestones: [
      {
        id: 'raices',
        title: 'Raíces y enfoque humano',
        location: 'Chile · Barcelona · Buenos Aires',
        body: 'Soy nutricionista y dietista, egresada de la Universidad San Sebastián. En el desarrollo de mi carrera profundicé mi formación en la Universitat de Barcelona, especializándome en Programación Neurolingüística (PNL), mindfulness y gestión del estrés. Completé, además, estudios en microbiota en la Academia Nacional de Medicina de Buenos Aires. Todo ese recorrido me permitió entender que el bienestar no cabe en una balanza: es un diálogo entre cuerpo, emoción y contexto.',
      },
      {
        id: 'comunicacion',
        title: 'Comunicación y oratoria',
        location: 'Buenos Aires · Región de Ñuble',
        body: 'Mi pasión por la enseñanza fue el puntapié de mi carrera en comunicación. Me formé en la escuela ÉTER de Buenos Aires y desde entonces he acompañado conversaciones de salud en espacios permanentes de radios de la Región de Ñuble —como La Discusión, Popular y El Sembrador—. También imparto charlas educativas para adultos, niños y apoderados, porque creo que informar con calidez es una forma de cuidar.',
      },
      {
        id: 'caballos',
        title: 'El encuentro con los caballos',
        location: 'Argentina · HeartMath · Práctica clínica',
        body: 'En un período de crecimiento personal y profesional descubrí el poder terapéutico del vínculo con los equinos. Me formé en la Asociación Argentina de Equinoterapia y recibí mentoría de Hilda Castelli, certificada por el Instituto HeartMath. A partir de esa experiencia desarrollé un modelo de autorregulación emocional orientado a personas con TCA y TDAH: herramientas prácticas para intervenir en la fisiología del estrés antes de que la crisis tome el volante.',
      },
    ],
    faithNote:
      'El arcoíris me recuerda las promesas de calma después de la tormenta — una esperanza que comparto con quienes caminan conmigo, desde la fe y el respeto.',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Retrato profesional de Francisca Pino Vielma',
  },

  heartCoherence: {
    title: '¿Qué es la coherencia cardíaca con caballos?',
    subtitle:
      'Una forma concreta de entrenar tu sistema nervioso —y de sentir, en el cuerpo, cuándo vuelves a la calma.',
    paragraphs: [
      'La coherencia cardíaca es un estado fisiológico en el que la respiración, el ritmo cardíaco y el sistema nervioso autónomo se alinean. Cuando logramos ese equilibrio, la variabilidad de la frecuencia cardíaca (VFC) se vuelve más fluida y predecible: el cuerpo deja de pelear contra una amenaza imaginaria y entra en un modo de regulación, presencia y disponibilidad emocional.',
      'Los caballos, por su naturaleza de presa, son extraordinariamente sensibles a la coherencia (o a la incoherencia) de quienes los rodean. Perciben en segundos si tu ritmo interno transmite calma o amenaza. Trabajar junto a ellos no es un adorno poético: es un feedback vivo, inmediato y honesto sobre el estado de tu sistema nervioso.',
      'Entrenar la coherencia cardíaca con caballos permite traducir la teoría en una experiencia corporal. Aprendemos a respirar, a sentir y a elegir —de forma consciente— el tono interno con el que nos relacionamos con la comida, el estrés y la vida diaria.',
    ],
    image: imgCaballosVfc,
    imageAlt: 'Ilustración de caballos y variabilidad de la frecuencia cardíaca (VFC)',
    playlist: {
      title: 'La playlist del corazón',
      intro:
        'Imagina que tu corazón es un instrumento de viento… y también el control de tu playlist interna. Tú puedes elegir qué canción escuchas —y qué canción “escucha” el caballo.',
      tracks: [
        {
          id: 'calm',
          title: 'Hotel California',
          artist: 'Eagles · ritmos predecibles',
          vibe: 'Coherencia',
          description:
            'Melodía clara, tempo estable, armonía que invita a quedarse. Así se siente un sistema nervioso en coherencia: el caballo se acerca, confía y se queda presente.',
        },
        {
          id: 'chaos',
          title: 'Bleed',
          artist: 'Meshuggah · caos rítmico',
          vibe: 'Incoherencia',
          description:
            'Polirritmia abrupta, tensión constante, amenaza perceptiva. Así vive el cuerpo en arritmia emocional: el caballo —como animal de presa— se aleja o se pone en alerta.',
        },
      ],
      closing:
        'La buena noticia: podemos entrenar nuestro corazón como un instrumento de viento. Con práctica, aprendemos a “presionar el botón” de nuestra playlist interna y cambiar a una sintonía de calma, seguridad o amor —incluso en segundos previos a un desencadenante.',
    },
  },

  healthFocuses: {
    title: 'Preguntas clave sobre salud',
    subtitle:
      'Cómo la coherencia cardíaca y el trabajo con caballos apoyan procesos reales en TCA, TDAH y la vida cotidiana.',
    items: [
      {
        id: 'tca',
        question: '¿Por qué ayuda en trastornos de la conducta alimentaria (TCA)?',
        answer:
          'En momentos de crisis, el problema deja de ser solo cognitivo y pasa a ser fisiológico: el sistema nervioso ya está en modo amenaza. Las técnicas de coherencia permiten intervenir en esos segundos previos al desencadenante, recuperando margen de elección antes de que el impulso se adelante a la reflexión. No reemplazan el tratamiento integral; lo respaldan desde el cuerpo.',
      },
      {
        id: 'tdah',
        question: 'TDAH, alimentación e hiperfijación',
        answer:
          'El trabajo con caballos ayuda a regular el sistema nervioso y a equilibrar los ciclos de alimentación e hiperfijación —tanto en la niñez como en la adultez—. Cuando el cuerpo se siente más seguro, la relación con la comida deja de ser un campo de batalla y puede volverse más flexible, consciente y sostenida.',
      },
      {
        id: 'yoga',
        question: '¿Cómo se diferencia de otras técnicas, como el yoga?',
        answer:
          'Ambas prácticas pueden ser hermosas y complementarias. La diferencia es de énfasis: las técnicas aprendidas con caballos buscan una aplicación fisiológica directa y rápida en el día a día. Son herramientas portátiles —respiración, ritmo, presencia— que puedes usar en la oficina, en la cocina o en un momento de urgencia emocional, sin necesitar una mat ni una clase completa.',
      },
    ],
  },

  services: {
    title: 'Cómo podemos trabajar juntos',
    subtitle:
      'Cada proceso es único. Estas son las formas en que puedo acompañarte, de manera individual, grupal o educativa.',
    items: [
      {
        id: 'consulta',
        title: 'Consulta de nutrición',
        description:
          'Evaluación integral, plan personalizado y seguimiento para reconstruir tu relación con la alimentación sin culpa ni restricciones extremas.',
        modality: 'Presencial u online',
        highlight: 'Ideal para empezar',
      },
      {
        id: 'caballos',
        title: 'Sesiones con caballos',
        description:
          'Encuentros en el campo para trabajar presencia, regulación emocional y conexión a través del vínculo con los equinos.',
        modality: 'Presencial',
      },
      {
        id: 'programa',
        title: 'Programa integrado',
        description:
          'Nutrición, coherencia cardíaca y sesiones ecuestres en un acompañamiento de 8 a 12 semanas, con énfasis en TCA y TDAH cuando el caso lo requiera.',
        modality: 'Híbrido',
        highlight: 'Más solicitado',
      },
      {
        id: 'charlas',
        title: 'Charlas educativas',
        description:
          'Espacios de formación para adultos, niños y apoderados sobre nutrición consciente, regulación emocional y salud real.',
        modality: 'Presencial u online',
      },
      {
        id: 'colegios',
        title: 'Educación nutricional en colegios y empresas',
        description:
          'Programas de educación alimentaria nutricional para comunidades escolares y equipos laborales, con un enfoque humano y práctico.',
        modality: 'Presencial',
      },
      {
        id: 'tdah',
        title: 'Alimentación para TDAH',
        description:
          'Acompañamiento nutricional especializado en TDAH en la niñez y la adultez: ritmo, hiperfijación, energía y relaciones más amables con la comida.',
        modality: 'Presencial u online',
      },
    ],
  },

  mission: {
    title: 'Misión y visión',
    missionLabel: 'Misión',
    visionLabel: 'Visión',
    mission:
      'Acompañar a pacientes —especialmente con TCA y TDAH— y a comunidades a reconectar con su cuerpo a través de la educación nutricional, el entrenamiento de la coherencia cardíaca y terapias asistidas con caballos, entregando herramientas prácticas que transformen la fisiología del estrés en un estado de calma, autocompasión y salud real.',
    vision:
      'Facilitar un espacio de sanación integral donde la ciencia de la nutrición, la fisiología de la coherencia cardíaca y la sabiduría intuitiva de los caballos se unan para guiar a las personas hacia una autorregulación consciente y un bienestar sostenible.',
  },

  purpose: {
    title: 'Mi propósito',
    statement:
      'Que cada persona pueda verse de nuevo con calma y descubrir que su bienestar no es un número, sino una historia que merece ser cuidada.',
  },

  certifications: [
    { name: 'Nutricionista y Dietista', issuer: 'Universidad San Sebastián' },
    { name: 'PNL, mindfulness y gestión del estrés', issuer: 'Universitat de Barcelona' },
    { name: 'Microbiota', issuer: 'Academia Nacional de Medicina · Buenos Aires' },
    { name: 'Equinoterapia', issuer: 'Asociación Argentina de Equinoterapia' },
    { name: 'Coherencia cardíaca · Mentoría HeartMath', issuer: 'Hilda Castelli · Instituto HeartMath' },
  ],

  testimonials: {
    title: 'Historias reales',
    placeholder:
      'Pronto compartiré, con su permiso, las historias de quienes han caminado conmigo.',
  },

  cta: {
    title: '¿Hablamos?',
    description:
      'Escríbeme y con gusto te cuento cómo podríamos trabajar juntas. La primera conversación es para conocernos, sin compromiso.',
    buttonLabel: 'Escribir por WhatsApp',
    whatsappUrl:
      'https://wa.me/56900000000?text=Hola%20Fran%2C%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20tus%20servicios.',
    email: 'hola@franciscapinovielma.com',
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Francisca Pino Vielma. Todos los derechos reservados.`,
    links: [
      { label: 'Método', href: '#metodo' },
      { label: 'Coherencia', href: '#coherencia' },
      { label: 'Servicios', href: '#servicios' },
      { label: 'Sobre mí', href: '#sobre-mi' },
      { label: 'Contacto', href: '#contacto' },
    ],
    social: [
      { label: 'Instagram', href: 'https://instagram.com' },
      { label: 'LinkedIn', href: 'https://linkedin.com' },
    ],
  },

  breathingPlace: {
    title: 'Un lugar para respirar',
    experiences: [
      {
        id: 'coherencia',
        label: 'Coherencia cardíaca',
        src: imgCaballosVfc,
        alt: 'Caballos y coherencia cardíaca · VFC',
      },
      {
        id: 'presencia',
        label: 'Presencia en el campo',
        src: imgPresenciaCampo,
        alt: 'Presencia y conexión en el campo abierto',
      },
      {
        id: 'coaching',
        label: 'Coaching con caballos',
        src: imgCaballosEquinos,
        alt: 'Sesión de coaching con caballos',
      },
      {
        id: 'confianza',
        label: 'Confianza',
        src: imgConfianza,
        alt: 'Momento de confianza y acompañamiento',
      },
      {
        id: 'calma',
        label: 'Calma y regulación',
        src: imgCalmaRegulacion,
        alt: 'Calma y regulación del sistema nervioso',
      },
      {
        id: 'encuentro',
        label: 'Encuentro en el campo',
        src: imgEncuentroCampo,
        alt: 'Encuentro en el campo con naturaleza y equinos',
      },
    ],
  },

  images: {
    gallery: [
      { src: imgCaballosVfc, alt: 'Caballos y coherencia cardíaca · VFC' },
      { src: imgPresenciaCampo, alt: 'Presencia en el campo' },
      { src: imgCaballosEquinos, alt: 'Coaching con caballos' },
      { src: imgConfianza, alt: 'Confianza' },
      { src: imgCalmaRegulacion, alt: 'Calma y regulación' },
      { src: imgEncuentroCampo, alt: 'Encuentro en el campo' },
    ],
  },
}

export default content
