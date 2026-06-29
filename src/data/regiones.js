// ============================================================
//  DArlet — Datos centralizados de menús por región
//  Para agregar o editar experiencias, solo modifica este archivo
// ============================================================

export const regionesData = {
  costa: {
    titulo: 'Costa',
    experiencias: [
      {
        id: 'costa-1',
        categoria: 'EXPERIENCIA MARINA',
        titulo: 'BRISA DEL PACÍFICO',
        descripcion:
          'Una degustación de 5 momentos inspirada en la riqueza del océano peruano. Ceviche premium de pesca del día, leche de tigre cítrica y delicados tiraditos bañados en ají amarillo y maracuyá, creando una experiencia fresca, elegante y profundamente costera.',
        precio: 'S/ 185.00',
        videoUrl: 'videos/costa1.mp4',
        invertida: false,
      },
      {
        id: 'costa-2',
        categoria: 'EXPERIENCIA CRIOLLA',
        titulo: 'SABOR DE BARRIO Y FUEGO',
        descripcion:
          'Una celebración de la cocina criolla limeña con sabores intensos y técnicas contemporáneas. Lomo saltado flameado al wok, reducción de sillao artesanal, papas crocantes y aromas ahumados que evocan las tradicionales cocinas del Perú.',
        precio: 'S/ 145.00',
        videoUrl: 'videos/costa2.mp4',
        invertida: true,
      },
      {
        id: 'costa-3',
        categoria: 'EXPERIENCIA DULCE COSTERA',
        titulo: 'SUSPIRO DE LIMA NOCTURNA',
        descripcion:
          'Una experiencia de postres inspirada en la elegancia limeña. Suspiro a la limeña infusionado con vainilla natural, crujientes de canela y reducción de oporto, acompañado de helado artesanal de lúcuma para cerrar el recorrido gastronómico frente al mar.',
        precio: 'S/ 125.00',
        videoUrl: 'videos/costa3.mp4',
        invertida: false,
      },
    ],
  },

  sierra: {
    titulo: 'Sierra',
    experiencias: [
      {
        id: 'sierra-1',
        categoria: 'EXPERIENCIA DE SOPAS',
        titulo: 'SINFONÍA DE ALTURA LÍQUIDA',
        descripcion:
          'Una degustación de 5 momentos a base de cocción lenta de 12 horas que extrae la esencia de los pastizales andinos y sales volcánicas. Servido con papas nativas seleccionadas, morallas y el aroma inconfundible de la muña fresca para reconfortar el espíritu.',
        precio: 'S/ 185.00',
        videoUrl: 'videos/1experiencia.mp4',
        invertida: false,
      },
      {
        id: 'sierra-2',
        categoria: 'EXPERIENCIA DE GRANOS Y TEXTURAS',
        titulo: 'TRILOGÍA DE MAÍZ Y CRUJIENTES',
        descripcion:
          'Una degustación de 5 momentos que celebra la versatilidad del grano andino. Desde el crujiente de quinua negra hasta la suavidad de una humita de choclo tierno hecha a mano. Finalizando con una panceta premium glaseada en reducción de chicha de jora, conectando técnicas ancestrales con la elegancia contemporánea.',
        precio: 'S/ 145.00',
        videoUrl: 'videos/2experiencia.mp4',
        invertida: true,
      },
      {
        id: 'sierra-3',
        categoria: 'EXPERIENCIA DE ESENCIAS',
        titulo: 'LEGADO DE LA TIERRA Y FUEGO',
        descripcion:
          'Una inmersión de 5 momentos en el alma de los valles interandinos. Desde la suavidad de un guiso de setas silvestres hasta la intensidad de una carne macerada por 24 horas en vinagre de chicha de jora y especias secretas. Cada preparación captura el jugo y la esencia de los ingredientes que han alimentado generaciones, servido con el aroma del horno de piedra.',
        precio: 'S/ 125.00',
        videoUrl: 'videos/3experiencia.mp4',
        invertida: false,
      },
    ],
  },

  selva: {
    titulo: 'Selva',
    experiencias: [
      {
        id: 'selva-1',
        categoria: 'EXPERIENCIA DE RÍO AMAZÓNICO',
        titulo: 'ESENCIA DEL PAICHE DORADO',
        descripcion:
          'Una degustación de 5 momentos inspirada en los grandes ríos amazónicos. El paiche premium es cocinado lentamente sobre hojas de bijao y acompañado por cremas de cocona ahumada y yuca crocante, resaltando el equilibrio entre frescura, humo y tradición ancestral.',
        precio: 'S/ 185.00',
        videoUrl: 'videos/selva1.mp4',
        invertida: false,
      },
      {
        id: 'selva-2',
        categoria: 'EXPERIENCIA DE FRUTOS AMAZÓNICOS',
        titulo: 'JARDÍN DE CAMU Y COCONA',
        descripcion:
          'Una propuesta de sabores cítricos y tropicales que combina camu camu, copoazú y cocona en distintas texturas. Desde emulsiones ligeras hasta glaseados artesanales, cada plato transmite la energía viva y exótica de la Amazonía peruana.',
        precio: 'S/ 145.00',
        videoUrl: 'videos/selva2.mp4',
        invertida: true,
      },
      {
        id: 'selva-3',
        categoria: 'EXPERIENCIA DE FUEGO Y HOJAS',
        titulo: 'MEMORIA DEL BIJAO ANCESTRAL',
        descripcion:
          'Una inmersión gastronómica en las técnicas tradicionales de la selva. Carnes maceradas en especias amazónicas y cocidas en hojas de bijao sobre fuego lento, acompañadas de plátano bellaco caramelizado y reducción de sachaculantro.',
        precio: 'S/ 125.00',
        videoUrl: 'videos/selva3.mp4',
        invertida: false,
      },
    ],
  },
};
