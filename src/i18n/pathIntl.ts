import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export const pathIntlLanguages = [
  { code: 'es', label: 'Español', shortLabel: 'Español' },
  { code: 'en', label: 'English', shortLabel: 'English' },
  { code: 'pt', label: 'Português', shortLabel: 'Português' },
  { code: 'fr', label: 'French', shortLabel: 'French' },
  { code: 'de', label: 'German', shortLabel: 'German' },
  { code: 'it', label: 'Italian', shortLabel: 'Italian' },
] as const

export type PathIntlLang = (typeof pathIntlLanguages)[number]['code']

const es = {
  topBar: {
    escribem: 'Escríbeme',
  },
  header: {
    logoText: 'Nutrición & Coherencia Cardíaca',
    logoSub: 'Nutrición Integrativa y Autorregulación Emocional',
    logoBadge: 'FPV',
    nav: {
      about: 'Sobre Mí',
      services: 'Servicios',
      resources: 'Recursos',
      contact: 'Contacto',
    },
    cta: 'Agenda una sesión',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },
  hero: {
    imageAlt: 'Caballos en un entorno natural de acompañamiento terapéutico',
    title: 'Sintoniza tu bienestar',
    subtitle: '¿Nutrición, emociones y la sabiduría del caballo?',
    description:
      'Un modelo innovador de autorregulación emocional diseñado para transformar la conducta alimentaria y el TDAH a través de la coherencia cardíaca y el vínculo profundo con los caballos.',
    primaryCta: 'Conóceme',
    secondaryCta: 'Saber más',
  },
  tarjetas: {
    items: {
      heart: {
        title: 'Coherencia Cardíaca con Caballos',
        description:
          'Aprende técnicas de respiración para regular tu sistema nervioso autónomo. Sintoniza tu ritmo cardíaco para que el caballo lo perciba y actúe como un biofeedback natural de tu calma.',
        cta: 'Descubre la técnica',
      },
      focus: {
        title: 'Enfoque en TCA y TDAH',
        description:
          'Intervenimos en los instantes previos al impulso desadaptativo o la hiperfijación, entrenando a tu fisiología para sustituir el estado de amenaza por el autocontrol.',
        cta: 'Conoce el modelo',
      },
      education: {
        title: 'Charlas y Educación',
        description:
          'Llevamos la salud y la gestión emocional a la comunidad a través de radioemisoras en Ñuble, colegios, empresas y talleres especializados para niños y adultos.',
        cta: 'Agenda una charla',
      },
    },
  },
  sobreMi: {
    eyebrow: 'Sobre mí',
    title: 'Nutrición, neurociencia y la sabiduría del caballo al servicio de tu bienestar.',
    paragraphs: {
      p1: 'Soy Nutricionista y Dietista (Universidad San Sebastián), especializada en Programación Neurolingüística (PNL), Mindfulness y Gestión del Estrés en la Universitat de Barcelona, España, con actualizaciones en Microbiota e Inmunología en la Academia Nacional de Medicina de Buenos Aires.',
      p2: 'Guiada por el deseo de unificar la salud clínica con mi pasión por los caballos, me formé en la Asociación Argentina de Equinoterapia. Junto a mi mentora Hilda Castelli (certificada por el Instituto HeartMath), co-desarrollamos un modelo de autorregulación emocional diseñado para tratar la raíz fisiológica de la conducta alimentaria desadaptativa en pacientes con TCA y TDAH.',
    },
    cta: 'Conoce mi trayectoria',
    imageAlt: 'Sesión terapéutica con caballos y acompañamiento profesional',
  },
  recursos: {
    eyebrow: 'Autorregulación emocional',
    titleBefore: 'Conecta con tu ',
    titleAccent: 'fisiología',
    titleAfter: '.',
    description:
      'Descubre cómo las técnicas de coherencia cardíaca te permiten tomar el control de tu sistema nervioso en tiempo real. Aprende a modular tus emociones junto al caballo, tu mejor biofeedback natural.',
    cta: 'Ver metodología',
    imageAlt: 'Sesión de equinoterapia y coherencia cardíaca con caballos',
  },
  consultas: {
    eyebrow: 'Consultas y talleres',
    titleBefore: 'Abordaje integral y ',
    titleAccent: 'personalizado',
    titleAfter: '.',
    description:
      'Combinamos la nutrición clínica con herramientas de neurociencia, mindfulness y coherencia cardíaca para tratar la raíz fisiológica de la conducta alimentaria y potenciar la concentración en el TDAH, tanto en niños como en adultos.',
    cta: 'Más información',
    imageAlt: 'Momento de calma y regulación en el trabajo con caballos',
  },
  seccionCita: {
    badge: '• COHERENCIA CARDÍACA EQUINA · NUTRICIÓN CON EVIDENCIA',
    title: 'Nadie sana siendo tratado como un número.',
    description:
      'Nutrición basada en evidencia, coherencia de tu corazón y la calma de los caballos — para que tu cuerpo y tu paz vuelvan a estar de acuerdo.',
    primaryCta: 'Conversemos →',
    secondaryCta: 'Conocer el método',
    quote:
      'Acompañamiento integral que honra tu historia: sin dietas restrictivas, sin promesas vacías y sin reducirte a una métrica en una balanza.',
    imageAlt: 'Cielo sereno al amanecer sobre montañas',
  },
  neurodivergente: {
    eyebrow: 'Nutrición Infantil Neurodivergente',
    title: 'La alimentación como pilar de su desarrollo.',
    description:
      'En niños con TEA, TDAH o Síndrome de Down, la comida puede convertirse en un desafío diario: hiperselectividad, rechazo, estreñimiento o ansiedad en la mesa. Mi objetivo es entregarte estrategias prácticas basadas en evidencia para que la alimentación deje de ser una preocupación y se transforme en una herramienta que favorezca su bienestar y calidad de vida familiar.',
    commitment:
      '“Ningún niño debería sentirse obligado a comer y ninguna familia debería enfrentar sola estos desafíos. Juntos construiremos un plan respetuoso, personalizado y sostenible.”',
    benefits: {
      regulation: {
        title: 'Estabilidad y Regulación Emocional',
        description:
          'Una nutrición adecuada y una microbiota saludable favorecen el sistema nervioso. Ayuda a lograr una energía estable durante el día, menor irritabilidad asociada al hambre o déficit de nutrientes, y mayor tolerancia a la frustración.',
      },
      focus: {
        title: 'Atención y Rendimiento Cognitivo',
        description:
          'Al corregir sutiles deficiencias de vitaminas y minerales esenciales, optimizamos el aporte de energía cerebral, favoreciendo una mejor concentración, memoria de trabajo y procesamiento cognitivo eficiente.',
      },
      physiology: {
        title: 'Bienestar Digestivo y Conducta',
        description:
          'Al disminuir las molestias digestivas y el malestar físico, las familias observan una mejor calidad de sueño, mayor disposición al aprendizaje y una aceptación gradual y respetuosa de nuevos alimentos.',
      },
    },
  },
  contacto: {
    eyebrow: 'Contáctanos',
    title: 'Comencemos a trabajar en tu bienestar.',
    description: 'Completa el formulario a continuación y me pondré en contacto contigo a la brevedad.',
    submitLabel: 'Enviar mensaje',
    required: 'Este campo es obligatorio',
    success: 'Gracias. Tu mensaje quedó registrado (demo local).',
    fields: {
      firstName: 'Nombre',
      lastName: 'Apellido',
      email: 'Correo electrónico',
      subject: 'Motivo de consulta',
      message: 'Mensaje',
    },
    subjects: {
      placeholder: 'Selecciona un tema',
      heart: 'Terapia de Coherencia Cardíaca con Caballos',
      nutrition: 'Consulta de Nutrición Integrativa (TCA / TDAH)',
      talks: 'Charlas y Talleres Educativos',
      other: 'Otras consultas',
    },
  },
  footer: {
    columns: {
      about: {
        title: 'Sobre mí',
        links: {
          story: 'Mi Historia',
          method: 'Metodología',
          research: 'Investigación',
          collab: 'Colaboraciones',
        },
      },
      services: {
        title: 'Servicios',
        links: {
          heart: 'Coherencia Cardíaca',
          nutrition: 'Nutrición Clínica',
          therapy: 'Terapia TCA / TDAH',
          talks: 'Charlas y Talleres',
        },
      },
      resources: {
        title: 'Recursos',
        links: {
          portal: 'Portal de Pacientes',
          articles: 'Artículos y Guías',
          faq: 'Preguntas Frecuentes',
          contact: 'Contacto Directo',
        },
      },
    },
    contact: {
      title: 'Contacto',
      address: 'Ñuble, Chile',
      phone: '+56 9 1234 5678',
      email: 'hola@franciscapinovielma.com',
    },
    legal: {
      copyright: '© 2026. Todos los derechos reservados.',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Uso',
      accessibility: 'Accesibilidad',
    },
  },
}

const en: typeof es = {
  topBar: {
    escribem: 'Write to me',
  },
  header: {
    logoText: 'Nutrition & Heart Coherence',
    logoSub: 'Integrative Nutrition and Emotional Self-Regulation',
    logoBadge: 'FPV',
    nav: {
      about: 'About Me',
      services: 'Services',
      resources: 'Resources',
      contact: 'Contact',
    },
    cta: 'Book a session',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    imageAlt: 'Horses in a natural setting for therapeutic accompaniment',
    title: 'Tune into your wellbeing',
    subtitle: 'Nutrition, emotions, and the wisdom of the horse?',
    description:
      'An innovative emotional self-regulation model designed to transform eating behaviour and ADHD through heart coherence and a deep bond with horses.',
    primaryCta: 'Meet me',
    secondaryCta: 'Learn more',
  },
  tarjetas: {
    items: {
      heart: {
        title: 'Heart Coherence with Horses',
        description:
          'Learn breathing techniques to regulate your autonomic nervous system. Synchronise your heart rhythm so the horse can sense it and act as natural biofeedback for your calm.',
        cta: 'Discover the technique',
      },
      focus: {
        title: 'Focus on Eating Disorders & ADHD',
        description:
          'We intervene in the moments before maladaptive impulses or hyperfixation, training your physiology to replace a threat state with self-control.',
        cta: 'Explore the model',
      },
      education: {
        title: 'Talks & Education',
        description:
          'We bring health and emotional regulation to the community through radio stations in Ñuble, schools, companies, and specialised workshops for children and adults.',
        cta: 'Book a talk',
      },
    },
  },
  sobreMi: {
    eyebrow: 'About me',
    title: 'Nutrition, neuroscience, and the wisdom of the horse at the service of your wellbeing.',
    paragraphs: {
      p1: 'I am a Nutritionist and Dietitian (Universidad San Sebastián), specialised in Neurolinguistic Programming (NLP), Mindfulness and Stress Management at the Universitat de Barcelona, Spain, with further training in Microbiota and Immunology at the National Academy of Medicine of Buenos Aires.',
      p2: 'Driven by the desire to unite clinical health with my passion for horses, I trained at the Argentine Association of Equine Therapy. Together with my mentor Hilda Castelli (certified by the HeartMath Institute), we co-developed an emotional self-regulation model designed to address the physiological root of maladaptive eating behaviour in patients with eating disorders and ADHD.',
    },
    cta: 'Discover my journey',
    imageAlt: 'Therapeutic session with horses and professional accompaniment',
  },
  recursos: {
    eyebrow: 'Emotional self-regulation',
    titleBefore: 'Connect with your ',
    titleAccent: 'physiology',
    titleAfter: '.',
    description:
      'Discover how heart coherence techniques let you take control of your nervous system in real time. Learn to modulate your emotions alongside the horse — your best natural biofeedback.',
    cta: 'See the methodology',
    imageAlt: 'Equine therapy and heart coherence session with horses',
  },
  consultas: {
    eyebrow: 'Consultations & workshops',
    titleBefore: 'An integral and ',
    titleAccent: 'personalised',
    titleAfter: ' approach.',
    description:
      'We combine clinical nutrition with neuroscience tools, mindfulness and heart coherence to address the physiological root of eating behaviour and support concentration in ADHD, in both children and adults.',
    cta: 'More information',
    imageAlt: 'A calm, regulating moment in the work with horses',
  },
  seccionCita: {
    badge: '• EQUINE HEART COHERENCE · EVIDENCE-BASED NUTRITION',
    title: 'No one heals by being treated as a number.',
    description:
      'Evidence-based nutrition, the coherence of your heart, and the calm of horses — so your body and your peace can come back into agreement.',
    primaryCta: "Let's talk →",
    secondaryCta: 'Discover the method',
    quote:
      'Integral accompaniment that honours your story: without restrictive diets, empty promises, or reducing you to a metric on a scale.',
    imageAlt: 'Serene dawn sky over mountains',
  },
  neurodivergente: {
    eyebrow: 'Neurodivergent Paediatric Nutrition',
    title: 'Nutrition as a pillar of their development.',
    description:
      'In children with ASD, ADHD or Down syndrome, food can become a daily challenge: hyperselectivity, refusal, constipation or anxiety at the table. My goal is to give you practical, evidence-based strategies so feeding stops being a worry and becomes a tool that supports wellbeing and family quality of life.',
    commitment:
      '“No child should feel forced to eat, and no family should face these challenges alone. Together we will build a respectful, personalised and sustainable plan.”',
    benefits: {
      regulation: {
        title: 'Stability & Emotional Regulation',
        description:
          'Adequate nutrition and a healthy microbiota support the nervous system. They help achieve stable energy through the day, less irritability linked to hunger or nutrient deficits, and greater tolerance to frustration.',
      },
      focus: {
        title: 'Attention & Cognitive Performance',
        description:
          'By gently correcting subtle vitamin and mineral deficiencies, we optimise brain energy supply, supporting better concentration, working memory and efficient cognitive processing.',
      },
      physiology: {
        title: 'Digestive Wellbeing & Behaviour',
        description:
          'As digestive discomfort and physical unease decrease, families often notice better sleep quality, greater readiness to learn, and a gradual, respectful acceptance of new foods.',
      },
    },
  },
  contacto: {
    eyebrow: 'Contact us',
    title: "Let's start working on your wellbeing.",
    description: 'Fill in the form below and I will get back to you shortly.',
    submitLabel: 'Send message',
    required: 'This field is required',
    success: 'Thank you. Your message has been recorded (local demo).',
    fields: {
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      subject: 'Reason for enquiry',
      message: 'Message',
    },
    subjects: {
      placeholder: 'Select a topic',
      heart: 'Heart Coherence Therapy with Horses',
      nutrition: 'Integrative Nutrition Consultation (ED / ADHD)',
      talks: 'Talks and Educational Workshops',
      other: 'Other enquiries',
    },
  },
  footer: {
    columns: {
      about: {
        title: 'About me',
        links: {
          story: 'My Story',
          method: 'Methodology',
          research: 'Research',
          collab: 'Collaborations',
        },
      },
      services: {
        title: 'Services',
        links: {
          heart: 'Heart Coherence',
          nutrition: 'Clinical Nutrition',
          therapy: 'ED / ADHD Therapy',
          talks: 'Talks & Workshops',
        },
      },
      resources: {
        title: 'Resources',
        links: {
          portal: 'Patient Portal',
          articles: 'Articles & Guides',
          faq: 'FAQ',
          contact: 'Direct Contact',
        },
      },
    },
    contact: {
      title: 'Contact',
      address: 'Ñuble, Chile',
      phone: '+56 9 1234 5678',
      email: 'hola@franciscapinovielma.com',
    },
    legal: {
      copyright: '© 2026. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      accessibility: 'Accessibility',
    },
  },
}

const pt: typeof es = {
  topBar: {
    escribem: 'Escreva-me',
  },
  header: {
    logoText: 'Nutrição & Coerência Cardíaca',
    logoSub: 'Nutrição Integrativa e Autorregulação Emocional',
    logoBadge: 'FPV',
    nav: {
      about: 'Sobre Mim',
      services: 'Serviços',
      resources: 'Recursos',
      contact: 'Contato',
    },
    cta: 'Agende uma sessão',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
  },
  hero: {
    imageAlt: 'Cavalos em um ambiente natural de acompanhamento terapêutico',
    title: 'Sintonize o seu bem-estar',
    subtitle: 'Nutrição, emoções e a sabedoria do cavalo?',
    description:
      'Um modelo inovador de autorregulação emocional criado para transformar o comportamento alimentar e o TDAH por meio da coerência cardíaca e do vínculo profundo com os cavalos.',
    primaryCta: 'Conheça-me',
    secondaryCta: 'Saiba mais',
  },
  tarjetas: {
    items: {
      heart: {
        title: 'Coerência Cardíaca com Cavalos',
        description:
          'Aprenda técnicas de respiração para regular o seu sistema nervoso autônomo. Sincronize o ritmo cardíaco para que o cavalo o perceba e atue como biofeedback natural da sua calma.',
        cta: 'Descubra a técnica',
      },
      focus: {
        title: 'Foco em TCA e TDAH',
        description:
          'Intervimos nos momentos anteriores ao impulso desadaptativo ou à hiperfocagem, treinando a fisiologia para substituir o estado de ameaça pelo autocontrole.',
        cta: 'Conheça o modelo',
      },
      education: {
        title: 'Palestras e Educação',
        description:
          'Levamos saúde e gestão emocional à comunidade por meio de rádios em Ñuble, escolas, empresas e oficinas especializadas para crianças e adultos.',
        cta: 'Agende uma palestra',
      },
    },
  },
  sobreMi: {
    eyebrow: 'Sobre mim',
    title: 'Nutrição, neurociência e a sabedoria do cavalo a serviço do seu bem-estar.',
    paragraphs: {
      p1: 'Sou Nutricionista e Dietista (Universidad San Sebastián), especializada em Programação Neurolinguística (PNL), Mindfulness e Gestão do Stress na Universitat de Barcelona, Espanha, com atualizações em Microbiota e Imunologia na Academia Nacional de Medicina de Buenos Aires.',
      p2: 'Guiada pelo desejo de unir a saúde clínica à minha paixão pelos cavalos, formei-me na Associação Argentina de Equinoterapia. Junto à minha mentora Hilda Castelli (certificada pelo Instituto HeartMath), co-desenvolvemos um modelo de autorregulação emocional pensado para tratar a raiz fisiológica do comportamento alimentar desadaptativo em pacientes com TCA e TDAH.',
    },
    cta: 'Conheça a minha trajetória',
    imageAlt: 'Sessão terapêutica com cavalos e acompanhamento profissional',
  },
  recursos: {
    eyebrow: 'Autorregulação emocional',
    titleBefore: 'Conecte-se com a sua ',
    titleAccent: 'fisiologia',
    titleAfter: '.',
    description:
      'Descubra como as técnicas de coerência cardíaca permitem controlar o sistema nervoso em tempo real. Aprenda a modular as emoções junto ao cavalo, o seu melhor biofeedback natural.',
    cta: 'Ver metodologia',
    imageAlt: 'Sessão de equinoterapia e coerência cardíaca com cavalos',
  },
  consultas: {
    eyebrow: 'Consultas e workshops',
    titleBefore: 'Abordagem integral e ',
    titleAccent: 'personalizada',
    titleAfter: '.',
    description:
      'Combinamos nutrição clínica com ferramentas de neurociência, mindfulness e coerência cardíaca para tratar a raiz fisiológica do comportamento alimentar e potenciar a concentração no TDAH, tanto em crianças como em adultos.',
    cta: 'Mais informações',
    imageAlt: 'Momento de calma e regulação no trabalho com cavalos',
  },
  seccionCita: {
    badge: '• COERÊNCIA CARDÍACA EQUINA · NUTRIÇÃO COM EVIDÊNCIA',
    title: 'Ninguém sara sendo tratado como um número.',
    description:
      'Nutrição baseada em evidência, coerência do seu coração e a calma dos cavalos — para que o corpo e a paz voltem a estar de acordo.',
    primaryCta: 'Vamos conversar →',
    secondaryCta: 'Conhecer o método',
    quote:
      'Acompanhamento integral que honra a sua história: sem dietas restritivas, sem promessas vazias e sem reduzir você a uma métrica na balança.',
    imageAlt: 'Céu sereno ao amanhecer sobre montanhas',
  },
  neurodivergente: {
    eyebrow: 'Nutrição Infantil Neurodivergente',
    title: 'A alimentação como pilar do seu desenvolvimento.',
    description:
      'Em crianças com TEA, TDAH ou Síndrome de Down, a comida pode tornar-se um desafio diário: hiperseletividade, recusa, prisão de ventre ou ansiedade à mesa. O meu objetivo é entregar estratégias práticas baseadas em evidência para que a alimentação deixe de ser uma preocupação e se transforme numa ferramenta que favoreça o bem-estar e a qualidade de vida familiar.',
    commitment:
      '“Nenhuma criança deveria sentir-se obrigada a comer e nenhuma família deveria enfrentar sozinha estes desafios. Juntos construiremos um plano respeitoso, personalizado e sustentável.”',
    benefits: {
      regulation: {
        title: 'Estabilidade e Regulação Emocional',
        description:
          'Uma nutrição adequada e uma microbiota saudável favorecem o sistema nervoso. Ajudam a alcançar energia estável durante o dia, menor irritabilidade associada à fome ou déficit de nutrientes, e maior tolerância à frustração.',
      },
      focus: {
        title: 'Atenção e Desempenho Cognitivo',
        description:
          'Ao corrigir subtis deficiências de vitaminas e minerais essenciais, otimizamos o aporte de energia cerebral, favorecendo melhor concentração, memória de trabalho e processamento cognitivo eficiente.',
      },
      physiology: {
        title: 'Bem-estar Digestivo e Conduta',
        description:
          'Ao diminuir o desconforto digestivo e o mal-estar físico, as famílias observam melhor qualidade de sono, maior disposição para aprender e uma aceitação gradual e respeitosa de novos alimentos.',
      },
    },
  },
  contacto: {
    eyebrow: 'Contacte-nos',
    title: 'Comecemos a trabalhar o seu bem-estar.',
    description: 'Preencha o formulário abaixo e entrarei em contato consigo em breve.',
    submitLabel: 'Enviar mensagem',
    required: 'Este campo é obrigatório',
    success: 'Obrigada. A sua mensagem ficou registada (demo local).',
    fields: {
      firstName: 'Nome',
      lastName: 'Apelido',
      email: 'E-mail',
      subject: 'Motivo da consulta',
      message: 'Mensagem',
    },
    subjects: {
      placeholder: 'Selecione um tema',
      heart: 'Terapia de Coerência Cardíaca com Cavalos',
      nutrition: 'Consulta de Nutrição Integrativa (TCA / TDAH)',
      talks: 'Palestras e Workshops Educativos',
      other: 'Outras consultas',
    },
  },
  footer: {
    columns: {
      about: {
        title: 'Sobre mim',
        links: {
          story: 'A Minha História',
          method: 'Metodologia',
          research: 'Investigação',
          collab: 'Colaborações',
        },
      },
      services: {
        title: 'Serviços',
        links: {
          heart: 'Coerência Cardíaca',
          nutrition: 'Nutrição Clínica',
          therapy: 'Terapia TCA / TDAH',
          talks: 'Palestras e Workshops',
        },
      },
      resources: {
        title: 'Recursos',
        links: {
          portal: 'Portal de Pacientes',
          articles: 'Artigos e Guias',
          faq: 'Perguntas Frequentes',
          contact: 'Contacto Direto',
        },
      },
    },
    contact: {
      title: 'Contato',
      address: 'Ñuble, Chile',
      phone: '+56 9 1234 5678',
      email: 'hola@franciscapinovielma.com',
    },
    legal: {
      copyright: '© 2026. Todos os direitos reservados.',
      privacy: 'Política de Privacidade',
      terms: 'Termos de Uso',
      accessibility: 'Acessibilidade',
    },
  },
}

const fr: typeof es = {
  topBar: {
    escribem: 'Écrivez-moi',
  },
  header: {
    logoText: 'Nutrition & Cohérence Cardiaque',
    logoSub: 'Nutrition Intégrative et Autorégulation Émotionnelle',
    logoBadge: 'FPV',
    nav: {
      about: 'À propos',
      services: 'Services',
      resources: 'Ressources',
      contact: 'Contact',
    },
    cta: 'Réserver une séance',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
  },
  hero: {
    imageAlt: 'Chevaux dans un cadre naturel d’accompagnement thérapeutique',
    title: 'Accordez-vous à votre bien-être',
    subtitle: 'Nutrition, émotions et sagesse du cheval ?',
    description:
      'Un modèle innovant d’autorégulation émotionnelle conçu pour transformer les comportements alimentaires et le TDAH grâce à la cohérence cardiaque et au lien profond avec les chevaux.',
    primaryCta: 'Me connaître',
    secondaryCta: 'En savoir plus',
  },
  tarjetas: {
    items: {
      heart: {
        title: 'Cohérence Cardiaque avec les Chevaux',
        description:
          'Apprenez des techniques de respiration pour réguler votre système nerveux autonome. Synchronisez votre rythme cardiaque pour que le cheval le perçoive et agisse comme biofeedback naturel de votre calme.',
        cta: 'Découvrir la technique',
      },
      focus: {
        title: 'Focus TCA et TDAH',
        description:
          'Nous intervenons dans les instants précédant l’impulsion inadaptée ou l’hyperfixation, en entraînant votre physiologie à remplacer l’état de menace par l’autocontrôle.',
        cta: 'Connaître le modèle',
      },
      education: {
        title: 'Conférences et Éducation',
        description:
          'Nous apportons la santé et la régulation émotionnelle à la communauté via des radios à Ñuble, des écoles, des entreprises et des ateliers spécialisés pour enfants et adultes.',
        cta: 'Réserver une conférence',
      },
    },
  },
  sobreMi: {
    eyebrow: 'À propos de moi',
    title: 'Nutrition, neurosciences et sagesse du cheval au service de votre bien-être.',
    paragraphs: {
      p1: 'Je suis Nutritionniste et Diététicienne (Universidad San Sebastián), spécialisée en Programmation Neurolinguistique (PNL), Mindfulness et Gestion du Stress à l’Universitat de Barcelona, Espagne, avec des actualisations en Microbiote et Immunologie à l’Académie Nationale de Médecine de Buenos Aires.',
      p2: 'Guidée par le désir d’unir la santé clinique à ma passion pour les chevaux, je me suis formée à l’Association Argentine d’Équinothérapie. Avec ma mentore Hilda Castelli (certifiée par l’Institut HeartMath), nous avons co-développé un modèle d’autorégulation émotionnelle destiné à traiter la racine physiologique des comportements alimentaires inadaptés chez les patients atteints de TCA et de TDAH.',
    },
    cta: 'Découvrir mon parcours',
    imageAlt: 'Séance thérapeutique avec des chevaux et accompagnement professionnel',
  },
  recursos: {
    eyebrow: 'Autorégulation émotionnelle',
    titleBefore: 'Connectez-vous à votre ',
    titleAccent: 'physiologie',
    titleAfter: '.',
    description:
      'Découvrez comment les techniques de cohérence cardiaque vous permettent de prendre le contrôle de votre système nerveux en temps réel. Apprenez à moduler vos émotions avec le cheval, votre meilleur biofeedback naturel.',
    cta: 'Voir la méthodologie',
    imageAlt: 'Séance d’équinothérapie et de cohérence cardiaque avec des chevaux',
  },
  consultas: {
    eyebrow: 'Consultations et ateliers',
    titleBefore: 'Une approche intégrale et ',
    titleAccent: 'personnalisée',
    titleAfter: '.',
    description:
      'Nous combinons nutrition clinique, outils de neurosciences, mindfulness et cohérence cardiaque pour traiter la racine physiologique du comportement alimentaire et soutenir la concentration dans le TDAH, chez les enfants comme chez les adultes.',
    cta: 'Plus d’informations',
    imageAlt: 'Moment de calme et de régulation dans le travail avec les chevaux',
  },
  seccionCita: {
    badge: '• COHÉRENCE CARDIAQUE ÉQUINE · NUTRITION FONDÉE SUR LES PREUVES',
    title: 'Personne ne guérit en étant traité comme un numéro.',
    description:
      'Une nutrition fondée sur les preuves, la cohérence de votre cœur et le calme des chevaux — pour que votre corps et votre paix se remettent d’accord.',
    primaryCta: 'Parlons-en →',
    secondaryCta: 'Découvrir la méthode',
    quote:
      'Un accompagnement intégral qui honore votre histoire : sans régimes restrictifs, sans promesses vides et sans vous réduire à une métrique sur une balance.',
    imageAlt: 'Ciel serein à l’aube au-dessus des montagnes',
  },
  neurodivergente: {
    eyebrow: 'Nutrition Infantile Neurodivergente',
    title: 'L’alimentation comme pilier de leur développement.',
    description:
      'Chez les enfants avec TSA, TDAH ou syndrome de Down, la nourriture peut devenir un défi quotidien : hyperselectivité, refus, constipation ou anxiété à table. Mon objectif est de vous offrir des stratégies pratiques fondées sur les preuves pour que l’alimentation cesse d’être une préoccupation et devienne un outil favorisant le bien-être et la qualité de vie familiale.',
    commitment:
      '« Aucun enfant ne devrait se sentir obligé de manger et aucune famille ne devrait affronter seule ces défis. Ensemble, nous construirons un plan respectueux, personnalisé et durable. »',
    benefits: {
      regulation: {
        title: 'Stabilité et Régulation Émotionnelle',
        description:
          'Une nutrition adaptée et un microbiote sain soutiennent le système nerveux. Cela aide à obtenir une énergie stable dans la journée, moins d’irritabilité liée à la faim ou aux déficits nutritionnels, et une meilleure tolérance à la frustration.',
      },
      focus: {
        title: 'Attention et Performance Cognitive',
        description:
          'En corrigeant de subtiles carences en vitamines et minéraux essentiels, nous optimisons l’apport énergétique cérébral, favorisant une meilleure concentration, mémoire de travail et traitement cognitif efficace.',
      },
      physiology: {
        title: 'Bien-être Digestif et Comportement',
        description:
          'En diminuant l’inconfort digestif et le malaise physique, les familles observent une meilleure qualité de sommeil, une plus grande disposition à apprendre et une acceptation progressive et respectueuse de nouveaux aliments.',
      },
    },
  },
  contacto: {
    eyebrow: 'Contactez-nous',
    title: 'Commençons à travailler votre bien-être.',
    description: 'Remplissez le formulaire ci-dessous et je vous recontacterai bientôt.',
    submitLabel: 'Envoyer le message',
    required: 'Ce champ est obligatoire',
    success: 'Merci. Votre message a été enregistré (démo locale).',
    fields: {
      firstName: 'Prénom',
      lastName: 'Nom',
      email: 'E-mail',
      subject: 'Motif de la demande',
      message: 'Message',
    },
    subjects: {
      placeholder: 'Sélectionnez un thème',
      heart: 'Thérapie de Cohérence Cardiaque avec les Chevaux',
      nutrition: 'Consultation de Nutrition Intégrative (TCA / TDAH)',
      talks: 'Conférences et Ateliers Éducatifs',
      other: 'Autres demandes',
    },
  },
  footer: {
    columns: {
      about: {
        title: 'À propos',
        links: {
          story: 'Mon Histoire',
          method: 'Méthodologie',
          research: 'Recherche',
          collab: 'Collaborations',
        },
      },
      services: {
        title: 'Services',
        links: {
          heart: 'Cohérence Cardiaque',
          nutrition: 'Nutrition Clinique',
          therapy: 'Thérapie TCA / TDAH',
          talks: 'Conférences et Ateliers',
        },
      },
      resources: {
        title: 'Ressources',
        links: {
          portal: 'Portail Patients',
          articles: 'Articles et Guides',
          faq: 'FAQ',
          contact: 'Contact Direct',
        },
      },
    },
    contact: {
      title: 'Contact',
      address: 'Ñuble, Chili',
      phone: '+56 9 1234 5678',
      email: 'hola@franciscapinovielma.com',
    },
    legal: {
      copyright: '© 2026. Tous droits réservés.',
      privacy: 'Politique de Confidentialité',
      terms: 'Conditions d’Utilisation',
      accessibility: 'Accessibilité',
    },
  },
}

const de: typeof es = {
  topBar: {
    escribem: 'Schreiben Sie mir',
  },
  header: {
    logoText: 'Ernährung & Herz Kohärenz',
    logoSub: 'Integrative Ernährung und Emotionale Selbstregulation',
    logoBadge: 'FPV',
    nav: {
      about: 'Über mich',
      services: 'Leistungen',
      resources: 'Ressourcen',
      contact: 'Kontakt',
    },
    cta: 'Sitzung vereinbaren',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
  },
  hero: {
    imageAlt: 'Pferde in einer natürlichen Umgebung therapeutischer Begleitung',
    title: 'Stimme dich auf dein Wohlbefinden ein',
    subtitle: 'Ernährung, Emotionen und die Weisheit des Pferdes?',
    description:
      'Ein innovatives Modell emotionaler Selbstregulation, das Essverhalten und ADHS durch Herzkohärenz und eine tiefe Verbindung mit Pferden transformieren soll.',
    primaryCta: 'Lernen Sie mich kennen',
    secondaryCta: 'Mehr erfahren',
  },
  tarjetas: {
    items: {
      heart: {
        title: 'Herzkohärenz mit Pferden',
        description:
          'Lernen Sie Atemtechniken zur Regulation Ihres autonomen Nervensystems. Synchronisieren Sie Ihren Herzrhythmus, damit das Pferd ihn wahrnimmt und als natürliches Biofeedback Ihrer Ruhe wirkt.',
        cta: 'Technik entdecken',
      },
      focus: {
        title: 'Fokus auf Essstörungen & ADHS',
        description:
          'Wir intervenieren in den Momenten vor dem maladaptiven Impuls oder der Hyperfixation und trainieren Ihre Physiologie darauf, den Bedrohungszustand durch Selbstkontrolle zu ersetzen.',
        cta: 'Modell kennenlernen',
      },
      education: {
        title: 'Vorträge & Bildung',
        description:
          'Wir bringen Gesundheit und emotionale Regulation in die Community – über Radiosender in Ñuble, Schulen, Unternehmen und spezialisierte Workshops für Kinder und Erwachsene.',
        cta: 'Vortrag vereinbaren',
      },
    },
  },
  sobreMi: {
    eyebrow: 'Über mich',
    title: 'Ernährung, Neurowissenschaft und die Weisheit des Pferdes im Dienst Ihres Wohlbefindens.',
    paragraphs: {
      p1: 'Ich bin Ernährungsberaterin und Diätassistentin (Universidad San Sebastián), spezialisiert auf Neurolinguistisches Programmieren (NLP), Achtsamkeit und Stressmanagement an der Universitat de Barcelona, Spanien, mit Weiterbildungen in Mikrobiota und Immunologie an der Nationalen Akademie der Medizin von Buenos Aires.',
      p2: 'Geleitet vom Wunsch, klinische Gesundheit mit meiner Leidenschaft für Pferde zu verbinden, habe ich mich bei der Argentinischen Vereinigung für Equine Therapie ausgebildet. Gemeinsam mit meiner Mentorin Hilda Castelli (zertifiziert vom HeartMath Institute) haben wir ein Modell emotionaler Selbstregulation entwickelt, das die physiologische Wurzel maladaptiven Essverhaltens bei Patientinnen und Patienten mit Essstörungen und ADHS adressiert.',
    },
    cta: 'Meinen Werdegang entdecken',
    imageAlt: 'Therapeutische Sitzung mit Pferden und professioneller Begleitung',
  },
  recursos: {
    eyebrow: 'Emotionale Selbstregulation',
    titleBefore: 'Verbinde dich mit deiner ',
    titleAccent: 'Physiologie',
    titleAfter: '.',
    description:
      'Entdecken Sie, wie Techniken der Herzkohärenz Ihnen helfen, Ihr Nervensystem in Echtzeit zu steuern. Lernen Sie, Ihre Emotionen gemeinsam mit dem Pferd zu modulieren – Ihrem besten natürlichen Biofeedback.',
    cta: 'Methodik ansehen',
    imageAlt: 'Equine Therapie und Herzkohärenz-Sitzung mit Pferden',
  },
  consultas: {
    eyebrow: 'Beratung & Workshops',
    titleBefore: 'Ein ganzheitlicher und ',
    titleAccent: 'personalisierter',
    titleAfter: ' Ansatz.',
    description:
      'Wir verbinden klinische Ernährung mit Werkzeugen aus Neurowissenschaft, Achtsamkeit und Herzkohärenz, um die physiologische Wurzel des Essverhaltens zu behandeln und die Konzentration bei ADHS zu fördern – bei Kindern und Erwachsenen.',
    cta: 'Mehr Informationen',
    imageAlt: 'Ein ruhiger, regulierender Moment in der Arbeit mit Pferden',
  },
  seccionCita: {
    badge: '• EQUINE HERZKOHÄRENZ · EVIDENZBASIERTE ERNÄHRUNG',
    title: 'Niemand heilt, wenn er wie eine Nummer behandelt wird.',
    description:
      'Evidenzbasierte Ernährung, die Kohärenz Ihres Herzens und die Ruhe der Pferde — damit Körper und innerer Frieden wieder übereinstimmen.',
    primaryCta: 'Lass uns sprechen →',
    secondaryCta: 'Methode kennenlernen',
    quote:
      'Ganzheitliche Begleitung, die Ihre Geschichte ehrt: ohne restriktive Diäten, ohne leere Versprechen und ohne Sie auf eine Zahl auf der Waage zu reduzieren.',
    imageAlt: 'Ruhiger Morgenhimmel über Bergen',
  },
  neurodivergente: {
    eyebrow: 'Neurodivergente Kinderernährung',
    title: 'Ernährung als Säule ihrer Entwicklung.',
    description:
      'Bei Kindern mit ASS, ADHS oder Down-Syndrom kann Essen zur täglichen Herausforderung werden: Hyperselektivität, Verweigerung, Verstopfung oder Angst am Tisch. Mein Ziel ist es, Ihnen praxisnahe, evidenzbasierte Strategien zu geben, damit Ernährung keine Sorge mehr ist, sondern ein Werkzeug für Wohlbefinden und familiäre Lebensqualität.',
    commitment:
      '„Kein Kind sollte sich gezwungen fühlen zu essen, und keine Familie sollte diese Herausforderungen allein bewältigen. Gemeinsam bauen wir einen respektvollen, personalisierten und nachhaltigen Plan.“',
    benefits: {
      regulation: {
        title: 'Stabilität & Emotionale Regulation',
        description:
          'Eine angemessene Ernährung und eine gesunde Mikrobiota unterstützen das Nervensystem. Sie helfen zu stabiler Energie über den Tag, weniger Reizbarkeit durch Hunger oder Nährstoffmangel und größerer Frustrationstoleranz.',
      },
      focus: {
        title: 'Aufmerksamkeit & Kognitive Leistung',
        description:
          'Durch behutsame Korrektur subtiler Vitamin- und Mineralstoffmängel optimieren wir die zerebrale Energiezufuhr und fördern bessere Konzentration, Arbeitsgedächtnis und effiziente kognitive Verarbeitung.',
      },
      physiology: {
        title: 'Verdauungswohlbefinden & Verhalten',
        description:
          'Wenn Verdauungsbeschwerden und körperliches Unwohlsein nachlassen, beobachten Familien oft bessere Schlafqualität, mehr Lernbereitschaft und eine schrittweise, respektvolle Annahme neuer Lebensmittel.',
      },
    },
  },
  contacto: {
    eyebrow: 'Kontaktieren Sie uns',
    title: 'Lassen Sie uns an Ihrem Wohlbefinden arbeiten.',
    description: 'Füllen Sie das Formular aus – ich melde mich in Kürze bei Ihnen.',
    submitLabel: 'Nachricht senden',
    required: 'Dieses Feld ist erforderlich',
    success: 'Danke. Ihre Nachricht wurde gespeichert (lokale Demo).',
    fields: {
      firstName: 'Vorname',
      lastName: 'Nachname',
      email: 'E-Mail',
      subject: 'Anfragegrund',
      message: 'Nachricht',
    },
    subjects: {
      placeholder: 'Thema auswählen',
      heart: 'Herzkohärenz-Therapie mit Pferden',
      nutrition: 'Beratung Integrative Ernährung (Essstörung / ADHS)',
      talks: 'Vorträge und Bildungsworkshops',
      other: 'Andere Anfragen',
    },
  },
  footer: {
    columns: {
      about: {
        title: 'Über mich',
        links: {
          story: 'Meine Geschichte',
          method: 'Methodik',
          research: 'Forschung',
          collab: 'Kooperationen',
        },
      },
      services: {
        title: 'Leistungen',
        links: {
          heart: 'Herzkohärenz',
          nutrition: 'Klinische Ernährung',
          therapy: 'Therapie Essstörung / ADHS',
          talks: 'Vorträge & Workshops',
        },
      },
      resources: {
        title: 'Ressourcen',
        links: {
          portal: 'Patientenportal',
          articles: 'Artikel & Leitfäden',
          faq: 'FAQ',
          contact: 'Direkter Kontakt',
        },
      },
    },
    contact: {
      title: 'Kontakt',
      address: 'Ñuble, Chile',
      phone: '+56 9 1234 5678',
      email: 'hola@franciscapinovielma.com',
    },
    legal: {
      copyright: '© 2026. Alle Rechte vorbehalten.',
      privacy: 'Datenschutzrichtlinie',
      terms: 'Nutzungsbedingungen',
      accessibility: 'Barrierefreiheit',
    },
  },
}

const it: typeof es = {
  topBar: {
    escribem: 'Scrivimi',
  },
  header: {
    logoText: 'Nutrizione & Coerenza Cardiaca',
    logoSub: 'Nutrizione Integrativa e Autoregolazione Emotiva',
    logoBadge: 'FPV',
    nav: {
      about: 'Chi sono',
      services: 'Servizi',
      resources: 'Risorse',
      contact: 'Contatto',
    },
    cta: 'Prenota una sessione',
    openMenu: 'Apri menu',
    closeMenu: 'Chiudi menu',
  },
  hero: {
    imageAlt: 'Cavalli in un ambiente naturale di accompagnamento terapeutico',
    title: 'Sintonizzati con il tuo benessere',
    subtitle: 'Nutrizione, emozioni e la saggezza del cavallo?',
    description:
      'Un modello innovativo di autoregolazione emotiva pensato per trasformare il comportamento alimentare e l’ADHD attraverso la coerenza cardiaca e il legame profondo con i cavalli.',
    primaryCta: 'Conoscimi',
    secondaryCta: 'Scopri di più',
  },
  tarjetas: {
    items: {
      heart: {
        title: 'Coerenza Cardiaca con i Cavalli',
        description:
          'Impara tecniche di respirazione per regolare il sistema nervoso autonomo. Sincronizza il ritmo cardiaco affinché il cavallo lo percepisca e agisca come biofeedback naturale della tua calma.',
        cta: 'Scopri la tecnica',
      },
      focus: {
        title: 'Focus su Disturbi Alimentari e ADHD',
        description:
          'Interveniamo negli istanti precedenti all’impulso disadattivo o all’iperfissazione, allenando la fisiologia a sostituire lo stato di minaccia con l’autocontrollo.',
        cta: 'Conosci il modello',
      },
      education: {
        title: 'Conferenze e Formazione',
        description:
          'Portiamo salute e regolazione emotiva nella comunità attraverso radio a Ñuble, scuole, aziende e workshop specializzati per bambini e adulti.',
        cta: 'Prenota una conferenza',
      },
    },
  },
  sobreMi: {
    eyebrow: 'Chi sono',
    title: 'Nutrizione, neuroscienze e la saggezza del cavallo al servizio del tuo benessere.',
    paragraphs: {
      p1: 'Sono Nutrizionista e Dietista (Universidad San Sebastián), specializzata in Programmazione Neuro-Linguistica (PNL), Mindfulness e Gestione dello Stress presso l’Universitat de Barcelona, Spagna, con aggiornamenti in Microbiota e Immunologia presso l’Accademia Nazionale di Medicina di Buenos Aires.',
      p2: 'Guidata dal desiderio di unire la salute clinica alla mia passione per i cavalli, mi sono formata presso l’Associazione Argentina di Equinoterapia. Insieme alla mia mentore Hilda Castelli (certificata dall’Istituto HeartMath), abbiamo co-sviluppato un modello di autoregolazione emotiva pensato per trattare la radice fisiologica del comportamento alimentare disadattivo in pazienti con disturbi alimentari e ADHD.',
    },
    cta: 'Scopri il mio percorso',
    imageAlt: 'Sessione terapeutica con cavalli e accompagnamento professionale',
  },
  recursos: {
    eyebrow: 'Autoregolazione emotiva',
    titleBefore: 'Connettiti con la tua ',
    titleAccent: 'fisiologia',
    titleAfter: '.',
    description:
      'Scopri come le tecniche di coerenza cardiaca ti permettono di prendere il controllo del sistema nervoso in tempo reale. Impara a modulare le emozioni insieme al cavallo, il tuo miglior biofeedback naturale.',
    cta: 'Vedi la metodologia',
    imageAlt: 'Sessione di equinoterapia e coerenza cardiaca con i cavalli',
  },
  consultas: {
    eyebrow: 'Consulenze e workshop',
    titleBefore: 'Un approccio integrale e ',
    titleAccent: 'personalizzato',
    titleAfter: '.',
    description:
      'Combiniamo nutrizione clinica con strumenti di neuroscienze, mindfulness e coerenza cardiaca per trattare la radice fisiologica del comportamento alimentare e potenziare la concentrazione nell’ADHD, nei bambini e negli adulti.',
    cta: 'Maggiori informazioni',
    imageAlt: 'Momento di calma e regolazione nel lavoro con i cavalli',
  },
  seccionCita: {
    badge: '• COERENZA CARDIACA EQUINA · NUTRIZIONE BASATA SULL’EVIDENZA',
    title: 'Nessuno guarisce se viene trattato come un numero.',
    description:
      'Nutrizione basata sull’evidenza, la coerenza del tuo cuore e la calma dei cavalli — perché corpo e pace interiori tornino a essere d’accordo.',
    primaryCta: 'Parliamone →',
    secondaryCta: 'Conosci il metodo',
    quote:
      'Un accompagnamento integrale che onora la tua storia: senza diete restrittive, senza promesse vuote e senza ridurti a una metrica sulla bilancia.',
    imageAlt: 'Cielo sereno all’alba sulle montagne',
  },
  neurodivergente: {
    eyebrow: 'Nutrizione Infantile Neurodivergente',
    title: 'L’alimentazione come pilastro del loro sviluppo.',
    description:
      'Nei bambini con ASD, ADHD o sindrome di Down, il cibo può diventare una sfida quotidiana: iperselettività, rifiuto, stitichezza o ansia a tavola. Il mio obiettivo è offrirti strategie pratiche basate sull’evidenza perché l’alimentazione smetta di essere una preoccupazione e diventi uno strumento di benessere e qualità della vita familiare.',
    commitment:
      '“Nessun bambino dovrebbe sentirsi obbligato a mangiare e nessuna famiglia dovrebbe affrontare da sola queste sfide. Insieme costruiremo un piano rispettoso, personalizzato e sostenibile.”',
    benefits: {
      regulation: {
        title: 'Stabilità e Regolazione Emotiva',
        description:
          'Una nutrizione adeguata e un microbiota sano favoriscono il sistema nervoso. Aiutano a ottenere energia stabile durante il giorno, minore irritabilità legata alla fame o ai deficit nutrizionali e una maggiore tolleranza alla frustrazione.',
      },
      focus: {
        title: 'Attenzione e Prestazione Cognitiva',
        description:
          'Correggendo sottili carenze di vitamine e minerali essenziali, ottimizziamo l’apporto energetico cerebrale, favorendo migliore concentrazione, memoria di lavoro ed elaborazione cognitiva efficiente.',
      },
      physiology: {
        title: 'Benessere Digestivo e Comportamento',
        description:
          'Riducendo il disagio digestivo e il malessere fisico, le famiglie osservano una migliore qualità del sonno, maggiore disposizione all’apprendimento e un’accettazione graduale e rispettosa di nuovi alimenti.',
      },
    },
  },
  contacto: {
    eyebrow: 'Contattaci',
    title: 'Iniziamo a lavorare sul tuo benessere.',
    description: 'Compila il modulo qui sotto e ti ricontatterò a breve.',
    submitLabel: 'Invia messaggio',
    required: 'Questo campo è obbligatorio',
    success: 'Grazie. Il tuo messaggio è stato registrato (demo locale).',
    fields: {
      firstName: 'Nome',
      lastName: 'Cognome',
      email: 'E-mail',
      subject: 'Motivo della richiesta',
      message: 'Messaggio',
    },
    subjects: {
      placeholder: 'Seleziona un tema',
      heart: 'Terapia di Coerenza Cardiaca con i Cavalli',
      nutrition: 'Consulenza di Nutrizione Integrativa (DA / ADHD)',
      talks: 'Conferenze e Workshop Educativi',
      other: 'Altre richieste',
    },
  },
  footer: {
    columns: {
      about: {
        title: 'Chi sono',
        links: {
          story: 'La mia storia',
          method: 'Metodologia',
          research: 'Ricerca',
          collab: 'Collaborazioni',
        },
      },
      services: {
        title: 'Servizi',
        links: {
          heart: 'Coerenza Cardiaca',
          nutrition: 'Nutrizione Clinica',
          therapy: 'Terapia DA / ADHD',
          talks: 'Conferenze e Workshop',
        },
      },
      resources: {
        title: 'Risorse',
        links: {
          portal: 'Portale Pazienti',
          articles: 'Articoli e Guide',
          faq: 'FAQ',
          contact: 'Contatto Diretto',
        },
      },
    },
    contact: {
      title: 'Contatto',
      address: 'Ñuble, Cile',
      phone: '+56 9 1234 5678',
      email: 'hola@franciscapinovielma.com',
    },
    legal: {
      copyright: '© 2026. Tutti i diritti riservati.',
      privacy: 'Informativa sulla Privacy',
      terms: 'Termini di Utilizzo',
      accessibility: 'Accessibilità',
    },
  },
}

void i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
    pt: { translation: pt },
    fr: { translation: fr },
    de: { translation: de },
    it: { translation: it },
  },
  lng: 'es',
  fallbackLng: 'es',
  interpolation: { escapeValue: false },
})

export default i18n
