export default {
  global: {
    componenteFormativo: 'La hidroterapia y sus beneficios',
    descripcionCurso:
      'La hidroterapia utiliza el agua para tratar afecciones físicas y emocionales. Sus propiedades estimulan la circulación, alivian el dolor muscular y promueven la relajación. El agua caliente relaja y mejora la circulación, mientras que el agua fría reduce la inflamación y fortalece el sistema inmunológico, proporcionando múltiples beneficios según la temperatura.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Historia y evolución de la hidroterapia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Terminología asociada a las técnicas de hidroterapia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Definición de agua',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Clasificación general del agua',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Principios físicos de la hidroterapia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Efectos fisiológicos de la hidroterapia',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  },
  complementario: [
    {
      tema: 'Terminología asociada a las técnicas de hidroterapia.',
      referencia:
        'Técnico en cosmetología y estética integral (2022). SENA [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=J7AasnDTEW4',
    },
    {
      tema: 'Efectos fisiológicos de la hidroterapia.',
      referencia:
        'Chávez Diaz, M. A. (2018). Beneficios de la hidroterapia como parte de los servicios estéticos de un spa.',
      tipo: 'Página web',
      descarga: '/downloads/2017-T-lacs-010-chavez_diaz_maria_andrea.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Balneoterapia',
      significado:
        'se refiere al baño terapéutico en aguas ricas en minerales, a menudo en fuentes termales naturales. En cosmetología, esta práctica es conocida por sus propiedades calmantes para la piel, ayudando a limpiar y desintoxicar la piel, reducir la inflamación.',
    },
    {
      termino: 'Bienestar',
      significado:
        'estado general de una persona, caracterizado por la satisfacción con su vida, la frecuente experimentación de emociones positivas y el disfrute de una salud física y mental acorde a sus expectativas.',
    },
    {
      termino: 'Crioterapia',
      significado: 'terapia basada en el empleo de bajas temperaturas.',
    },
    {
      termino: 'Hidroterapia',
      significado: 'utilización del agua como elemento terapéutico.',
    },
    {
      termino: 'Terapia de vapor',
      significado:
        'se utiliza calor húmedo para abrir los poros, limpiar la piel y mejorar la circulación. En cosmetología, el vapor es un componente común de los tratamientos faciales, ya que suaviza la piel, lo que facilita la extracción de impurezas y mejora la absorción.',
    },
    {
      termino: 'Térmico',
      significado: 'perteneciente o relativo al calor o la temperatura.',
    },
    {
      termino: 'Tópico',
      significado:
        'dicho de un medicamento o de su modo de aplicación: de uso externo y local.',
    },
    {
      termino: 'Vasodilatación',
      significado: 'aumento del calibre o dilatación de los vasos sanguíneos.',
    },
    {
      termino: 'Vasoconstricción',
      significado:
        'constricción o estrechamiento de un vaso sanguíneo que se manifiesta en una disminución de su volumen.',
    },
  ],
  referencias: [
    {
      referencia: 'Abengoa. (2015). Abengoa.',
      link: '',
    },
    {
      referencia: 'Bernal, L. (2016). Hidroterapia.',
      link:
        'http://www.sld.cu/galerias/pdf/sitios/rehabilitacion-bal/hidroterapia.pdf ',
    },
    {
      referencia: 'Derecho en red. (2014). Infobiología. ',
      link:
        'http://www.infobiologia.net/2014/01/agua-concepto-propiedad-funciones.html ',
    },
    {
      referencia:
        'Diccionario etimológico. (2001). Etimología de Crenoterapia. ',
      link: 'http://etimologias.dechile.net/?crenoterapia ',
    },
    {
      referencia: 'Garcia Calleja, J. (2009). La guía. ',
      link:
        'http://biologia.laguia2000.com/bioquimica/composicion-quimica-del-agua',
    },
    {
      referencia: 'Súarez, H. (2016). Historia del Spa.',
      link: 'https://www.youtube.com/watch?v=1K98xQ59tGo ',
    },
    {
      referencia:
        'Ley nº 1333 del medio ambiente (27 de abril de 1992) Publicada en la Gaceta Oficial de Bolivia, 1992, 15 de junio.',
      link: '',
    },
    {
      referencia:
        'López, B. (2007). Aproximación al estudio de la helioterapia. ',
      link: 'https://dialnet.unirioja.es/descarga/articulo/2328577.pdf',
    },
    {
      referencia: 'Méndez, E. (2016). Saludterapia.',
      link: 'http://www.saludterapia.com/glosario/d/40-hidroterapia.html',
    },
    {
      referencia:
        'Mourelle, M. Meijide, R. Freire, A. Maraver, F. (2009). Técnicas hidrotermales y estética del bienestar. Madrid: Paraninfo.',
      link: '',
    },
    {
      referencia:
        'OMS. (2009). Relación del agua, el saneamiento y la higiene con la salud.',
      link:
        'https://iris.who.int/bitstream/handle/10665/330043/9789243515519-spa.pdf;jsessionid=43E198DEF518D39D40A27D163BE8BBD8?sequence=1',
    },
    {
      referencia:
        'Programa de Transformación Productiva. (2013). Colombia avanza para ser un destino internacional de termalismo.',
      link:
        'https://www.colombiaproductiva.com/ptp-comunica/noticias/colombia-avanza-para-ser-un-destino-internacional ',
    },
    {
      referencia:
        'Rocha, J. (2004). Orígenes y fundamentos de la talasoterapia. Revista biociencias. Separata, 2.',
      link: 'https://revistas.uax.es/index.php/biociencia/article/view/632 ',
    },
    {
      referencia:
        'Rodríguez, R, Cabrera, J. González. Machado, M y González, J. (2004). Peloido terapia de las heridas quirúrgicas infectadas. ',
      link: '',
    },
    {
      referencia:
        'Villavicencio, O. (2000). Manual de hidroterapia. (págs. 48 - 54). Lima: Panamericana de salud.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Diana Cristina Muñoz Urrea',
          cargo: 'Experta temática',
          centro: 'Centro agroindustrial - Regional Quindío.',
        },
        {
          nombre: 'Kennia Andrea Peña Barrera',
          cargo: 'Asesora pedagógica',
          centro: 'N/A',
        },
        {
          nombre: 'Janet Lucia Villalba Triana',
          cargo: 'Asesora pedagógica',
          centro: 'N/A',
        },
        {
          nombre: 'Gilberto Herrera Delgans',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Diseñador <em>web</em>',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Rafael Bladimir Pérez Meriño',
          cargo: 'Desarrollador <em>fullstack</em>',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
