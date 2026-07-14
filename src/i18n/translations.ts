export type Language = 'ES' | 'EN' | 'PT'

export interface PillarTranslation {
  id: 'nutrition' | 'heart' | 'horse'
  title: string
  description: string
}

export interface ServiceTranslation {
  id: string
  title: string
  description: string
  modality: string
  highlight?: string
}

export interface MilestoneTranslation {
  id: string
  title: string
  location: string
  body: string
}

export interface PlaylistTrackTranslation {
  id: 'calm' | 'chaos'
  title: string
  artist: string
  vibe: string
  description: string
}

export interface HealthFocusTranslation {
  id: string
  question: string
  answer: string
}

export interface Translation {
  brand: {
    name: string
    shortName: string
    domain: string
    subtitle: string
  }
  navbar: {
    metodo: string
    sobreFran: string
    servicios: string
    galeria: string
    contacto: string
    conversar: string
  }
  hero: {
    kicker: string
    title: string
    subtitle: string
    cta: string
  }
  method: {
    eyebrow: string
    title: string
    subtitle: string
    pillars: PillarTranslation[]
    disclaimer: string
  }
  about: {
    label: string
    greeting: string
    intro: string
    milestones: MilestoneTranslation[]
    faithNote: string
    imageAlt: string
  }
  mission: {
    title: string
    missionLabel: string
    visionLabel: string
    mission: string
    vision: string
  }
  heartCoherence: {
    sectionLabel: string
    title: string
    subtitle: string
    paragraphs: string[]
    imageAlt: string
    playlist: {
      title: string
      intro: string
      tracks: PlaylistTrackTranslation[]
      closing: string
    }
  }
  healthFocuses: {
    sectionLabel: string
    title: string
    subtitle: string
    items: HealthFocusTranslation[]
  }
  services: {
    label: string
    title: string
    subtitle: string
    items: ServiceTranslation[]
  }
  gallery: {
    title: string
    tags: string[]
    imageAlts: string[]
  }
  purpose: {
    label: string
    statement: string
  }
  testimonials: {
    label: string
    placeholder: string
  }
  cta: {
    title: string
    description: string
    buttonLabel: string
  }
  footer: {
    copyright: string
  }
}

export const NAV_LINKS = [
  { key: 'metodo' as const, href: '#metodo' },
  { key: 'sobreFran' as const, href: '#sobre-mi' },
  { key: 'servicios' as const, href: '#servicios' },
  { key: 'galeria' as const, href: '#galeria' },
  { key: 'contacto' as const, href: '#contacto' },
]

const esServices: ServiceTranslation[] = [
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
]

export const translations: Record<Language, Translation> = {
  ES: {
    brand: {
      name: 'Francisca Pino Vielma',
      shortName: 'Fran Pino Vielma',
      domain: 'franciscapinovielma.com',
      subtitle: 'Nutrición, corazón y caballos',
    },
    navbar: {
      metodo: 'Método',
      sobreFran: 'Sobre Fran',
      servicios: 'Servicios',
      galeria: 'Galería',
      contacto: 'Contacto',
      conversar: 'Conversemos',
    },
    hero: {
      kicker: 'COMO EL ARCOÍRIS DESPUÉS DE LA TORMENTA',
      title: 'Nadie sana siendo un número.',
      subtitle:
        'Nutrición basada en evidencia, la coherencia de tu corazón y la calma de los caballos — para que tu cuerpo y tu paz vuelvan a estar de acuerdo.',
      cta: 'Conversemos',
    },
    method: {
      eyebrow: 'Coherencia cardíaca equina · Nutrición con evidencia',
      title: 'Un método que integra tres caminos',
      subtitle:
        'No trabajo con dietas restrictivas ni promesas rápidas. Reúno tres caminos para cuidar tu bienestar, con honestidad.',
      pillars: [
        {
          id: 'nutrition',
          title: 'Nutrición basada en evidencia',
          description:
            'Reeducación de tu relación con la comida desde la compasión: planes personalizados, sin culpa y sin restricciones extremas.',
        },
        {
          id: 'heart',
          title: 'Coherencia cardíaca',
          description:
            'Entrenamiento de la respiración y la regulación del sistema nervioso para bajar el estrés y recuperar un ritmo de calma.',
        },
        {
          id: 'horse',
          title: 'Acompañamiento con caballos',
          description:
            'El encuentro con los caballos como espacio de calma, presencia y autorregulación emocional. Un enfoque de evidencia emergente.',
        },
      ],
      disclaimer:
        'Solo comparto lo que la evidencia respalda: acompaño procesos — no prometo curas ni resultados de peso.',
    },
    about: {
      label: 'Sobre mí',
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
      imageAlt: 'Retrato profesional de Fran Pino Vielma',
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
    heartCoherence: {
      sectionLabel: 'El método en el cuerpo',
      title: '¿Qué es la coherencia cardíaca con caballos?',
      subtitle:
        'Una forma concreta de entrenar tu sistema nervioso —y de sentir, en el cuerpo, cuándo vuelves a la calma.',
      paragraphs: [
        'La coherencia cardíaca es un estado fisiológico en el que la respiración, el ritmo cardíaco y el sistema nervioso autónomo se alinean. Cuando logramos ese equilibrio, la variabilidad de la frecuencia cardíaca (VFC) se vuelve más fluida y predecible: el cuerpo deja de pelear contra una amenaza imaginaria y entra en un modo de regulación, presencia y disponibilidad emocional.',
        'Los caballos, por su naturaleza de presa, son extraordinariamente sensibles a la coherencia (o a la incoherencia) de quienes los rodean. Perciben en segundos si tu ritmo interno transmite calma o amenaza. Trabajar junto a ellos no es un adorno poético: es un feedback vivo, inmediato y honesto sobre el estado de tu sistema nervioso.',
        'Entrenar la coherencia cardíaca con caballos permite traducir la teoría en una experiencia corporal. Aprendemos a respirar, a sentir y a elegir —de forma consciente— el tono interno con el que nos relacionamos con la comida, el estrés y la vida diaria.',
      ],
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
      sectionLabel: 'Salud real',
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
      label: 'Servicios',
      title: 'Cómo podemos trabajar juntos',
      subtitle:
        'Cada proceso es único. Estas son las formas en que puedo acompañarte, de manera individual, grupal o educativa.',
      items: esServices,
    },
    gallery: {
      title: 'Un lugar para respirar',
      tags: [
        'Coherencia cardíaca',
        'Presencia en el campo',
        'Coaching con caballos',
        'Confianza',
        'Calma y regulación',
        'Encuentro en el campo',
      ],
      imageAlts: [
        'Caballos y coherencia cardíaca · VFC',
        'Presencia y conexión en el campo abierto',
        'Sesión de coaching con caballos',
        'Momento de confianza y acompañamiento',
        'Calma y regulación del sistema nervioso',
        'Encuentro en el campo con naturaleza y equinos',
      ],
    },
    purpose: {
      label: 'Mi propósito',
      statement:
        'Que cada persona vuelva a mirarse con calma y descubra que su bienestar no es un número, sino una historia que merece cuidado.',
    },
    testimonials: {
      label: 'Historias reales',
      placeholder:
        'Pronto compartiré, con su permiso, las historias de quienes han caminado conmigo.',
    },
    cta: {
      title: '¿Conversamos?',
      description: 'Escríbeme y con gusto te cuento cómo podríamos trabajar contigo.',
      buttonLabel: 'Escríbeme por WhatsApp',
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Francisca Pino Vielma. Todos los derechos reservados.`,
    },
  },

  EN: {
    brand: {
      name: 'Francisca Pino Vielma',
      shortName: 'Fran Pino Vielma',
      domain: 'franciscapinovielma.com',
      subtitle: 'Nutrition, heart, and horses',
    },
    navbar: {
      metodo: 'Method',
      sobreFran: 'About Fran',
      servicios: 'Services',
      galeria: 'Gallery',
      contacto: 'Contact',
      conversar: "Let's talk",
    },
    hero: {
      kicker: 'LIKE THE RAINBOW AFTER THE STORM',
      title: 'No one heals by being a number.',
      subtitle:
        'Evidence-based nutrition, the coherence of your heart, and the calm of horses — so your body and peace can align again.',
      cta: "Let's talk",
    },
    method: {
      eyebrow: 'Equine heart coherence · Evidence-based nutrition',
      title: 'A method that weaves three paths',
      subtitle:
        "I don't work with restrictive diets or quick promises. I bring together three ways to care for your wellbeing, honestly.",
      pillars: [
        {
          id: 'nutrition',
          title: 'Evidence-based nutrition',
          description:
            'Rebuilding your relationship with food through compassion: personalized plans, without guilt and without extreme restrictions.',
        },
        {
          id: 'heart',
          title: 'Heart coherence',
          description:
            'Breathing training and nervous-system regulation to lower stress and recover an inner rhythm of calm.',
        },
        {
          id: 'horse',
          title: 'Alongside horses',
          description:
            'Time with horses as a space for calm, presence, and emotional self-regulation. An approach with emerging evidence.',
        },
      ],
      disclaimer:
        "I only share what the evidence backs up: I walk alongside your process — I don't promise cures or weight-loss results.",
    },
    about: {
      label: 'About me',
      greeting: "Hi, I'm Fran",
      intro:
        'Nutritionist and dietitian, communicator, and heart-coherence trainer. My path brings together the science of the body, the calm of the heart, and the intuitive wisdom of horses.',
      milestones: [
        {
          id: 'raices',
          title: 'Roots and a human approach',
          location: 'Chile · Barcelona · Buenos Aires',
          body: 'I am a nutritionist and dietitian, a graduate of Universidad San Sebastián. In the course of my career I deepened my training at the Universitat de Barcelona, specializing in Neuro-Linguistic Programming (NLP), mindfulness, and stress management. I also completed studies in microbiota at the National Academy of Medicine in Buenos Aires. That journey taught me that wellbeing does not fit on a scale: it is a conversation between body, emotion, and context.',
        },
        {
          id: 'comunicacion',
          title: 'Communication and public speaking',
          location: 'Buenos Aires · Ñuble Region',
          body: 'My passion for teaching launched my career in communication. I trained at the ÉTER school in Buenos Aires and have since hosted ongoing health conversations on radio stations in Chile’s Ñuble Region — including La Discusión, Popular, and El Sembrador. I also deliver educational talks for adults, children, and caregivers, because I believe warm information is a form of care.',
        },
        {
          id: 'caballos',
          title: 'The encounter with horses',
          location: 'Argentina · HeartMath · Clinical practice',
          body: 'During a period of personal and professional growth I discovered the therapeutic power of the equine bond. I trained with the Argentine Association of Equine Therapy and received mentorship from Hilda Castelli, certified by the HeartMath Institute. From that experience I developed an emotional self-regulation model for people with eating disorders and ADHD: practical tools to intervene in the physiology of stress before crisis takes the wheel.',
        },
      ],
      faithNote:
        'The rainbow reminds me of the promise of calm after the storm — a hope I share with those who walk with me, from faith and respect.',
      imageAlt: 'Professional portrait of Fran Pino Vielma',
    },
    mission: {
      title: 'Mission and vision',
      missionLabel: 'Mission',
      visionLabel: 'Vision',
      mission:
        'To accompany patients — especially those with eating disorders and ADHD — and communities in reconnecting with their bodies through nutrition education, heart-coherence training, and equine-assisted therapies, offering practical tools that transform the physiology of stress into a state of calm, self-compassion, and real health.',
      vision:
        'To create a space of integral healing where the science of nutrition, the physiology of heart coherence, and the intuitive wisdom of horses come together to guide people toward conscious self-regulation and sustainable wellbeing.',
    },
    heartCoherence: {
      sectionLabel: 'The method in the body',
      title: 'What is heart coherence with horses?',
      subtitle:
        'A concrete way to train your nervous system — and to feel, in the body, when calm returns.',
      paragraphs: [
        'Heart coherence is a physiological state in which breathing, heart rhythm, and the autonomic nervous system align. When we reach that balance, heart-rate variability (HRV) becomes more fluid and predictable: the body stops fighting an imagined threat and enters a mode of regulation, presence, and emotional availability.',
        'Horses, by their prey nature, are extraordinarily sensitive to the coherence (or incoherence) of those around them. Within seconds they sense whether your inner rhythm signals calm or threat. Working with them is not a poetic flourish: it is living, immediate, honest feedback on the state of your nervous system.',
        'Training heart coherence with horses turns theory into a bodily experience. We learn to breathe, to feel, and to consciously choose the inner tone with which we relate to food, stress, and everyday life.',
      ],
      imageAlt: 'Illustration of horses and heart-rate variability (HRV)',
      playlist: {
        title: 'The heart’s playlist',
        intro:
          'Imagine your heart is a wind instrument… and also the remote control of your inner playlist. You can choose which song you play — and which song the horse “hears.”',
        tracks: [
          {
            id: 'calm',
            title: 'Hotel California',
            artist: 'Eagles · predictable rhythms',
            vibe: 'Coherence',
            description:
              'A clear melody, a steady tempo, harmony that invites you to stay. That is how a coherent nervous system feels: the horse approaches, trusts, and stays present.',
          },
          {
            id: 'chaos',
            title: 'Bleed',
            artist: 'Meshuggah · rhythmic chaos',
            vibe: 'Incoherence',
            description:
              'Abrupt polyrhythm, constant tension, perceptual threat. That is how the body lives in emotional arrhythmia: the horse — as a prey animal — steps away or goes on alert.',
          },
        ],
        closing:
          'The good news: we can train our heart like a wind instrument. With practice, we learn to “press play” on our inner playlist and switch to a soundtrack of calm, safety, or love — even in the seconds before a trigger.',
      },
    },
    healthFocuses: {
      sectionLabel: 'Real health',
      title: 'Key questions about health',
      subtitle:
        'How heart coherence and work with horses support real processes in eating disorders, ADHD, and everyday life.',
      items: [
        {
          id: 'tca',
          question: 'Why does it help with eating disorders (ED)?',
          answer:
            'In moments of crisis, the problem is no longer only cognitive — it becomes physiological: the nervous system is already in threat mode. Coherence techniques help intervene in those seconds before the trigger, recovering room to choose before the impulse outruns reflection. They do not replace comprehensive care; they support it from the body.',
        },
        {
          id: 'tdah',
          question: 'ADHD, eating, and hyperfixation',
          answer:
            'Work with horses helps regulate the nervous system and balance cycles of eating and hyperfixation — in both childhood and adulthood. When the body feels safer, the relationship with food stops being a battlefield and can become more flexible, conscious, and sustainable.',
        },
        {
          id: 'yoga',
          question: 'How does it differ from other practices, like yoga?',
          answer:
            'Both practices can be beautiful and complementary. The difference is emphasis: the techniques learned with horses aim for a direct, rapid physiological application in daily life. They are portable tools — breath, rhythm, presence — you can use at the office, in the kitchen, or in an emotional emergency, without needing a mat or a full class.',
        },
      ],
    },
    services: {
      label: 'Services',
      title: 'How we can work together',
      subtitle:
        'Every process is unique. These are the ways I can accompany you — individually, in groups, or through education.',
      items: [
        {
          id: 'consulta',
          title: 'Nutrition consultation',
          description:
            'A comprehensive assessment, personalized plan, and follow-up to rebuild your relationship with food without guilt or extreme restriction.',
          modality: 'In person or online',
          highlight: 'Great place to start',
        },
        {
          id: 'caballos',
          title: 'Sessions with horses',
          description:
            'Field encounters to work on presence, emotional regulation, and connection through the equine bond.',
          modality: 'In person',
        },
        {
          id: 'programa',
          title: 'Integrated program',
          description:
            'Nutrition, heart coherence, and equine sessions in an 8-to-12-week accompaniment, with emphasis on ED and ADHD when needed.',
          modality: 'Hybrid',
          highlight: 'Most requested',
        },
        {
          id: 'charlas',
          title: 'Educational talks',
          description:
            'Learning spaces for adults, children, and caregivers on conscious nutrition, emotional regulation, and real health.',
          modality: 'In person or online',
        },
        {
          id: 'colegios',
          title: 'Nutrition education for schools and companies',
          description:
            'Food and nutrition education programs for school communities and workplace teams, with a human and practical approach.',
          modality: 'In person',
        },
        {
          id: 'tdah',
          title: 'Nutrition for ADHD',
          description:
            'Specialized nutritional support for ADHD in childhood and adulthood: rhythm, hyperfixation, energy, and a kinder relationship with food.',
          modality: 'In person or online',
        },
      ],
    },
    gallery: {
      title: 'A place to breathe',
      tags: [
        'Heart coherence',
        'Presence in the field',
        'Coaching with horses',
        'Trust',
        'Calm & regulation',
        'Meeting in the field',
      ],
      imageAlts: [
        'Horses and heart coherence · HRV',
        'Presence and connection in the open field',
        'Coaching session with horses',
        'A moment of trust and accompaniment',
        'Calm and nervous-system regulation',
        'Meeting in the field with nature and equines',
      ],
    },
    purpose: {
      label: 'My purpose',
      statement:
        'That each person may look at themselves with calm again and discover that wellbeing is not a number, but a story worth caring for.',
    },
    testimonials: {
      label: 'Real stories',
      placeholder:
        "Soon I'll share, with their permission, the stories of those who have walked with me.",
    },
    cta: {
      title: 'Shall we talk?',
      description: "Write to me and I'll gladly tell you how we could work together.",
      buttonLabel: 'Message me on WhatsApp',
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Francisca Pino Vielma. All rights reserved.`,
    },
  },

  PT: {
    brand: {
      name: 'Francisca Pino Vielma',
      shortName: 'Fran Pino Vielma',
      domain: 'franciscapinovielma.com',
      subtitle: 'Nutrição, coração e cavalos',
    },
    navbar: {
      metodo: 'Método',
      sobreFran: 'Sobre Fran',
      servicios: 'Serviços',
      galeria: 'Galeria',
      contacto: 'Contato',
      conversar: 'Vamos conversar',
    },
    hero: {
      kicker: 'COMO O ARCO-ÍRIS DEPOIS DA TEMPESTADE',
      title: 'Ninguém cura sendo um número.',
      subtitle:
        'Nutrição baseada em evidências, a coerência do seu coração e a calma dos cavalos — para que seu corpo e sua paz voltem a concordar.',
      cta: 'Vamos conversar',
    },
    method: {
      eyebrow: 'Coerência cardíaca equina · Nutrição com evidências',
      title: 'Um método que integra três caminhos',
      subtitle:
        'Não trabalho com dietas restritivas nem promessas rápidas. Reúno três caminhos para cuidar do seu bem-estar, com honestidade.',
      pillars: [
        {
          id: 'nutrition',
          title: 'Nutrição baseada em evidências',
          description:
            'Reeducação da sua relação com a comida a partir da compaixão: planos personalizados, sem culpa e sem restrições extremas.',
        },
        {
          id: 'heart',
          title: 'Coerência cardíaca',
          description:
            'Treinamento da respiração e regulação do sistema nervoso para reduzir o estresse e recuperar um ritmo interno de calma.',
        },
        {
          id: 'horse',
          title: 'Junto aos cavalos',
          description:
            'O encontro com os cavalos como espaço de calma, presença e autorregulação emocional. Uma abordagem de evidência emergente.',
        },
      ],
      disclaimer:
        'Compartilho apenas o que a evidência sustenta: acompanho processos — não prometo curas nem resultados de peso.',
    },
    about: {
      label: 'Sobre mim',
      greeting: 'Olá, sou Fran',
      intro:
        'Nutricionista e dietista, comunicadora e formadora em coerência cardíaca. Meu caminho une a ciência do corpo, a calma do coração e a sabedoria intuitiva dos cavalos.',
      milestones: [
        {
          id: 'raices',
          title: 'Raízes e abordagem humana',
          location: 'Chile · Barcelona · Buenos Aires',
          body: 'Sou nutricionista e dietista, formada pela Universidad San Sebastián. No desenvolvimento da minha carreira aprofundei a formação na Universitat de Barcelona, especializando-me em Programação Neurolinguística (PNL), mindfulness e gestão do estresse. Completei também estudos em microbiota na Academia Nacional de Medicina de Buenos Aires. Esse percurso me mostrou que o bem-estar não cabe numa balança: é um diálogo entre corpo, emoção e contexto.',
        },
        {
          id: 'comunicacion',
          title: 'Comunicação e oratória',
          location: 'Buenos Aires · Região de Ñuble',
          body: 'Minha paixão pelo ensino foi o pontapé da minha carreira em comunicação. Formei-me na escola ÉTER de Buenos Aires e desde então acompanho conversas de saúde em espaços permanentes de rádios da Região de Ñuble — como La Discusión, Popular e El Sembrador. Também ofereço palestras educativas para adultos, crianças e responsáveis, porque acredito que informar com calor humano é uma forma de cuidar.',
        },
        {
          id: 'caballos',
          title: 'O encontro com os cavalos',
          location: 'Argentina · HeartMath · Prática clínica',
          body: 'Em um período de crescimento pessoal e profissional descobri o poder terapêutico do vínculo com os equinos. Formei-me na Associação Argentina de Equinoterapia e recebi mentoria de Hilda Castelli, certificada pelo Instituto HeartMath. A partir dessa experiência desenvolvi um modelo de autorregulação emocional voltado a pessoas com TCA e TDAH: ferramentas práticas para intervir na fisiologia do estresse antes que a crise tome o volante.',
        },
      ],
      faithNote:
        'O arco-íris me lembra a promessa de calma depois da tempestade — uma esperança que compartilho com quem caminha comigo, a partir da fé e do respeito.',
      imageAlt: 'Retrato profissional de Fran Pino Vielma',
    },
    mission: {
      title: 'Missão e visão',
      missionLabel: 'Missão',
      visionLabel: 'Visão',
      mission:
        'Acompanhar pacientes — especialmente com TCA e TDAH — e comunidades a reconectar-se com o corpo por meio da educação nutricional, do treinamento da coerência cardíaca e de terapias assistidas com cavalos, oferecendo ferramentas práticas que transformem a fisiologia do estresse em um estado de calma, autocompaixão e saúde real.',
      vision:
        'Facilitar um espaço de cura integral onde a ciência da nutrição, a fisiologia da coerência cardíaca e a sabedoria intuitiva dos cavalos se unam para guiar as pessoas rumo a uma autorregulação consciente e a um bem-estar sustentável.',
    },
    heartCoherence: {
      sectionLabel: 'O método no corpo',
      title: 'O que é a coerência cardíaca com cavalos?',
      subtitle:
        'Uma forma concreta de treinar o seu sistema nervoso — e de sentir, no corpo, quando a calma retorna.',
      paragraphs: [
        'A coerência cardíaca é um estado fisiológico em que a respiração, o ritmo cardíaco e o sistema nervoso autônomo se alinham. Quando alcançamos esse equilíbrio, a variabilidade da frequência cardíaca (VFC) torna-se mais fluida e previsível: o corpo deixa de lutar contra uma ameaça imaginária e entra em um modo de regulação, presença e disponibilidade emocional.',
        'Os cavalos, por sua natureza de presa, são extraordinariamente sensíveis à coerência (ou incoerência) de quem os rodeia. Em segundos perceberem se o seu ritmo interno transmite calma ou ameaça. Trabalhar com eles não é um adorno poético: é um feedback vivo, imediato e honesto sobre o estado do seu sistema nervoso.',
        'Treinar a coerência cardíaca com cavalos permite traduzir a teoria em uma experiência corporal. Aprendemos a respirar, a sentir e a escolher — de forma consciente — o tom interno com o qual nos relacionamos com a comida, o estresse e a vida cotidiana.',
      ],
      imageAlt: 'Ilustração de cavalos e variabilidade da frequência cardíaca (VFC)',
      playlist: {
        title: 'A playlist do coração',
        intro:
          'Imagine que o seu coração é um instrumento de sopro… e também o controle da sua playlist interna. Você pode escolher qual música escuta — e qual música o cavalo “ouve”.',
        tracks: [
          {
            id: 'calm',
            title: 'Hotel California',
            artist: 'Eagles · ritmos previsíveis',
            vibe: 'Coerência',
            description:
              'Melodia clara, tempo estável, harmonia que convida a ficar. Assim se sente um sistema nervoso em coerência: o cavalo se aproxima, confia e permanece presente.',
          },
          {
            id: 'chaos',
            title: 'Bleed',
            artist: 'Meshuggah · caos rítmico',
            vibe: 'Incoerência',
            description:
              'Polirritmia abrupta, tensão constante, ameaça perceptiva. Assim vive o corpo em arritmia emocional: o cavalo — como animal de presa — se afasta ou entra em alerta.',
          },
        ],
        closing:
          'A boa notícia: podemos treinar o nosso coração como um instrumento de sopro. Com prática, aprendemos a “apertar o botão” da nossa playlist interna e mudar para uma sintonia de calma, segurança ou amor — inclusive nos segundos anteriores a um gatilho.',
      },
    },
    healthFocuses: {
      sectionLabel: 'Saúde real',
      title: 'Perguntas-chave sobre saúde',
      subtitle:
        'Como a coerência cardíaca e o trabalho com cavalos apoiam processos reais em TCA, TDAH e na vida cotidiana.',
      items: [
        {
          id: 'tca',
          question: 'Por que ajuda nos transtornos alimentares (TCA)?',
          answer:
            'Em momentos de crise, o problema deixa de ser apenas cognitivo e passa a ser fisiológico: o sistema nervoso já está em modo ameaça. As técnicas de coerência permitem intervir nesses segundos anteriores ao gatilho, recuperando margem de escolha antes que o impulso se antecipe à reflexão. Não substituem o tratamento integral; o apoiam a partir do corpo.',
        },
        {
          id: 'tdah',
          question: 'TDAH, alimentação e hiperfoco',
          answer:
            'O trabalho com cavalos ajuda a regular o sistema nervoso e a equilibrar os ciclos de alimentação e hiperfoco — tanto na infância quanto na vida adulta. Quando o corpo se sente mais seguro, a relação com a comida deixa de ser um campo de batalha e pode tornar-se mais flexível, consciente e sustentada.',
        },
        {
          id: 'yoga',
          question: 'Como se diferencia de outras técnicas, como o yoga?',
          answer:
            'Ambas as práticas podem ser belas e complementares. A diferença está no ênfase: as técnicas aprendidas com cavalos buscam uma aplicação fisiológica direta e rápida no dia a dia. São ferramentas portáteis — respiração, ritmo, presença — que você pode usar no escritório, na cozinha ou num momento de urgência emocional, sem precisar de um tapete nem de uma aula completa.',
        },
      ],
    },
    services: {
      label: 'Serviços',
      title: 'Como podemos trabalhar juntos',
      subtitle:
        'Cada processo é único. Estas são as formas em que posso acompanhá-lo — individualmente, em grupo ou por meio da educação.',
      items: [
        {
          id: 'consulta',
          title: 'Consulta de nutrição',
          description:
            'Avaliação integral, plano personalizado e acompanhamento para reconstruir sua relação com a alimentação sem culpa nem restrições extremas.',
          modality: 'Presencial ou online',
          highlight: 'Ideal para começar',
        },
        {
          id: 'caballos',
          title: 'Sessões com cavalos',
          description:
            'Encontros no campo para trabalhar presença, regulação emocional e conexão por meio do vínculo com os equinos.',
          modality: 'Presencial',
        },
        {
          id: 'programa',
          title: 'Programa integrado',
          description:
            'Nutrição, coerência cardíaca e sessões equestres em um acompanhamento de 8 a 12 semanas, com ênfase em TCA e TDAH quando necessário.',
          modality: 'Híbrido',
          highlight: 'Mais solicitado',
        },
        {
          id: 'charlas',
          title: 'Palestras educativas',
          description:
            'Espaços de formação para adultos, crianças e responsáveis sobre nutrição consciente, regulação emocional e saúde real.',
          modality: 'Presencial ou online',
        },
        {
          id: 'colegios',
          title: 'Educação nutricional em escolas e empresas',
          description:
            'Programas de educação alimentar nutricional para comunidades escolares e equipes de trabalho, com abordagem humana e prática.',
          modality: 'Presencial',
        },
        {
          id: 'tdah',
          title: 'Alimentação para TDAH',
          description:
            'Acompanhamento nutricional especializado em TDAH na infância e na vida adulta: ritmo, hiperfoco, energia e relações mais amáveis com a comida.',
          modality: 'Presencial ou online',
        },
      ],
    },
    gallery: {
      title: 'Um lugar para respirar',
      tags: [
        'Coerência cardíaca',
        'Presença no campo',
        'Coaching com cavalos',
        'Confiança',
        'Calma e regulação',
        'Encontro no campo',
      ],
      imageAlts: [
        'Cavalos e coerência cardíaca · VFC',
        'Presença e conexão no campo aberto',
        'Sessão de coaching com cavalos',
        'Momento de confiança e acompanhamento',
        'Calma e regulação do sistema nervoso',
        'Encontro no campo com natureza e equinos',
      ],
    },
    purpose: {
      label: 'Meu propósito',
      statement:
        'Que cada pessoa volte a se olhar com calma e descubra que seu bem-estar não é um número, mas uma história que merece cuidado.',
    },
    testimonials: {
      label: 'Histórias reais',
      placeholder:
        'Em breve compartilharei, com permissão, as histórias de quem caminhou comigo.',
    },
    cta: {
      title: 'Vamos conversar?',
      description: 'Escreva-me e terei prazer em contar como poderíamos trabalhar juntos.',
      buttonLabel: 'Escreva-me no WhatsApp',
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Francisca Pino Vielma. Todos os direitos reservados.`,
    },
  },
}
