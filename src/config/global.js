export const global = {
  componenteFormativo: 'Entendiendo la empresa',
  descripcionCurso:
    'Este componente formativo le permite al aprendiz reconocer la importancia de la planeación en el emprendimiento, actividad básica de la administración y visualizar en el corto, mediano y largo plazo, el negocio y las actividades de mercadeo, necesarias para impulsar el emprendimiento. Así mismo, reconocer los elementos estratégicos de toda organización, con el fin de adoptar estos elementos para la planificación de su emprendimiento.',
  imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
  fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
}

export const menuPrincipal = {
  menu: [
    {
      nombreRuta: 'inicio',
      icono: 'fas fa-home',
      titulo: 'Volver al inicio',
    },
    {
      nombreRuta: 'introduccion',
      icono: 'fas fa-info',
      titulo: 'Introducción',
      desarrolloContenidos: true,
    },
    {
      nombreRuta: 'tema1',
      icono: 'far fa-file-alt',
      numero: '1',
      titulo: 'Plan de negocios',
      desarrolloContenidos: true,
    },
    {
      nombreRuta: 'tema2',
      icono: 'far fa-file-alt',
      numero: '2',
      titulo: 'Elementos organizacionales de la empresa',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '2.1',
          titulo: 'Características de una empresa',
          hash: 't_2_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.2',
          titulo: 'Áreas funcionales',
          hash: 't_2_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.3',
          titulo: 'Estructura organizacional',
          hash: 't_2_3',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.4',
          titulo: 'Tipología de la organización',
          hash: 't_2_4',
        },
      ],
    },
    {
      nombreRuta: 'tema3',
      icono: 'far fa-file-alt',
      numero: '3',
      titulo: 'Elementos estratégicos de la empresa',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '3.1',
          titulo: 'Misión organizacional',
          hash: 't_3_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '3.2',
          titulo: 'Visión organizacional',
          hash: 't_3_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '3.3',
          titulo: 'Filosofía organizacional',
          hash: 't_3_3',
        },
        {
          icono: 'far fa-file-alt',
          numero: '3.4',
          titulo: 'Objetivos organizacionales',
          hash: 't_3_4',
        },
        {
          icono: 'far fa-file-alt',
          numero: '3.5',
          titulo: 'Estrategias organizacionales',
          hash: 't_3_5',
        },
      ],
    },
    {
      nombreRuta: 'tema4',
      icono: 'far fa-file-alt',
      numero: '4',
      titulo: 'Elementos del marketing',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '4.1',
          titulo: 'Plan de marketing',
          hash: 't_4_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '4.2',
          titulo: 'Etapas del plan de marketing',
          hash: 't_4_2',
        },
      ],
    },
  ],
  subMenu: [
    // {
    //   nombreRuta: 'actividad',
    //   icono: 'far fa-question-circle',
    //   titulo: 'Actividad didáctica',
    //   desarrolloContenidos: true,
    // },
    {
      nombreRuta: 'glosario',
      icono: 'fas fa-sort-alpha-down',
      titulo: 'Glosario',
    },
    {
      nombreRuta: 'complementario',
      icono: 'far fa-folder-open',
      titulo: 'Material complementario',
    },
    {
      icono: 'fas fa-book',
      titulo: 'Referencias bibliográficas',
      nombreRuta: 'referencias',
    },
    {
      icono: 'fas fa-download',
      titulo: 'Descargar material',
      download: 'downloads/material.zip',
    },
    {
      icono: 'far fa-registered',
      titulo: 'Créditos',
      nombreRuta: 'creditos',
    },
  ],
}

export const creditos = {
  liderEquipo: {
    nombre: 'Maria Camila Garcia Santamaria',
    cargo: 'Líder del equipo',
  },
  contenidoInstruccional: [
    {
      nombre: 'Rafael Neftalí Lizcano Reyes',
      cargo: 'Asesor metodológico y pedagógico',
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Vilma Lucía Perilla Méndez',
      cargo: 'Experta y Diseñadora Instruccional',
      centro: 'Centro de Gestión Industrial',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'Ana Catalina Córdoba Sus',
      cargo: 'Diseñadora Instruccional',
      centro: 'Centro para la Industria de la Comunicación Gráfica',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'María Isabel Román Rueda',
      cargo: 'Revisora de estilo',
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
  ],
  desarrolloProducto: [
    {
      nombre: 'Francisco José Lizcano Reyes',
      cargo: 'Responsable del equipo',
    },
    {
      nombre: 'Leyson Fabian Castaño Perez',
      cargo: 'Soporte organizacional',
      centro: 'Centro de Comercio y Servicios',
      regional: 'Regional Tolimma',
    },
    {
      nombre: [
        'Camilo Andrés Villamizar Lizcano',
        'Carlos Julian Ramirez Benitez',
        'Maria Camila Ovalle Ospina',
        'Nelson Iván Vera Briceño',
        'Lady Adriana Ariza Luque',
        'Victor Raúl Cárdenas Cáceres',
        'Wilson Andres Arenales Cáceres',
        'Zuleidy Maria Ruiz Torres',
      ],
      cargo: 'Diseño web y Producción Audiovisual',
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: ['Zuleidy Maria Ruiz Torres'],
      cargo: 'Diseño web y Producción Audiovisual',
      centro: 'Centro de Comercio y Servicios',
      regional: 'Regional Tolimma',
    },
    {
      nombre: [
        'Edward Leonardo Pico Cabra',
        'Daniel Ricardo Mutis Gómez',
        'Luis Gabriel Urueta Alvarez',
        'Ricardo Alfonso Gonzalez Vargas',
      ],
      cargo: 'Desarrollo Front-End',
    },
    {
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
  ],
  gestoresRepositorio: [
    {
      nombre: 'Milady Tatiana Villamil Castellanos',
      cargo: ['Validación de recursos'],
      centro: 'Centro de comercio y servicios',
      regional: 'Regional Tolima',
    },
  ],
}

export const referencias = [
  {
    referencia:
      'Chiavenato, I., & Sapiro, A. (2017). Planeación estratégica: fundamentos y aplicaciones. McGraw-Hill. ',
    link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5345',
  },
  {
    referencia:
      'Cravens, D. & Piercy, N. (2017). Marketing Estratégico. Mc Graw Hill Interamericana.',
  },
  {
    referencia:
      'Fischer, L. & Espejo, J.  (2008). Casos de Mercadotecnia. McGraw Hill Interamericana. ',
  },
  {
    referencia:
      'Rosillo, J., Cruz, J. & Villarreal, J. (2002). Finanzas Corporativas. Valoración, Política de Financiamiento y Riesgo. Thomson. ',
  },
  {
    referencia:
      'Sainz de Vicuña, J. (2012). El plan de marketing en la práctica. ESIC, Business & Marketing School. ',
  },
  {
    referencia: 'Strauss, J. & Frost, R. (2012). E-marketing. Pearson. ',
  },
]

export const glosario = [
  {
    termino: 'Estrategia',
    significado:
      'programas generales de acción y despliegue de recursos para alcanzar los objetivos establecidos de tal forma que definan lo que es o debe ser el negocio de la compañía; forma concreta y específica de solucionar la situación, problema o necesidad del grupo con el cual se está trabajando.',
  },
  {
    termino: 'Marca',
    significado:
      'identificación de un producto o servicio, mediante la forma del nombre. Símbolo, diseño o combinación de estos para diferenciarlo de la competencia.',
  },
  {
    termino: 'Mercado meta',
    significado:
      'conjunto de compradores que tienen necesidades o características comunes y a los que se desea atender.',
  },
  {
    termino: 'Segmentación de mercado',
    significado:
      'separación del mercado de un artículo, en las categorías de localización, personalidad u otras características para cada división.',
  },
]

export const complementario = [
  {
    texto:
      'Centro de Estudios ADAMS. (2018). Marketing y plan de negocio de la microempresa: planificación e iniciativa emprendedora en pequeños negocios o microempresas. Ediciones de la U.',
    tipo: 'Biblioteca SENA',
    link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=8017',
  },
  {
    texto:
      'Rojas López, M. D. y Medina Marín, L. J. (2011). Planeación estratégica: fundamentos y casos. Ediciones de la U.',
    tipo: 'Biblioteca SENA',
    link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5525',
  },
]
