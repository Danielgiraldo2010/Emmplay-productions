export type EquipmentItem = {
  name: string;
  brand?: string;
  description: string;
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  reference?: boolean;
};

export type EquipmentCategory = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  items: EquipmentItem[];
};

export const equipmentCategories: EquipmentCategory[] = [
  {
    slug: "audio",
    title: "Audio",
    shortDescription: "Sonido profesional",
    description:
      "Sistemas de refuerzo sonoro, monitoreo, mezcla digital y microfonía para producciones de diferentes escalas.",
    items: [
      {
        name: "RCF HDL 20-A",
        brand: "RCF · Line array",
        description: "Módulo activo de arreglo lineal para cobertura uniforme en conciertos y eventos.",
        image: "/images/equipment/rcf-hdl20-array.png",
        imageAlt: "Sistema line array RCF HDL 20-A",
        imageFit: "contain",
      },
      {
        name: "RCF ART 310",
        brand: "RCF · Monitoreo",
        description: "Cabina activa compacta para monitoreo, refuerzo y aplicaciones de proximidad.",
        image: "/images/equipment/rcf-art-310.png",
        imageAlt: "Cabina activa RCF ART 310",
        imageFit: "contain",
      },
      {
        name: "SRX828SP",
        brand: "JBL · Subwoofer doble 18\"",
        description: "Sistema activo de bajas frecuencias para producciones que requieren mayor presión y profundidad.",
        image: "/images/equipment/jbl-srx828sp.png",
        imageAlt: "Subwoofer activo JBL SRX828SP",
        imageFit: "contain",
      },
      {
        name: "PRX915XLF",
        brand: "JBL · Subwoofer activo",
        description: "Subwoofer activo de 15 pulgadas para sistemas portátiles y configuraciones de evento.",
        image: "/images/equipment/jbl-prx915xlf.jpg",
        imageAlt: "Subwoofer activo JBL PRX915XLF",
        imageFit: "contain",
      },
      {
        name: "Qu-32",
        brand: "Allen & Heath · Consola digital",
        description: "Consola digital para mezclas de mayor formato y operación integral de producción.",
        image: "/images/equipment/allen-heath-qu32.jpg",
        imageAlt: "Consola digital Allen & Heath Qu-32",
        imageFit: "contain",
      },
      {
        name: "Qu-16",
        brand: "Allen & Heath · Consola digital",
        description: "Consola compacta para producciones que necesitan control profesional en menor espacio.",
        image: "/images/equipment/allen-heath-qu16.jpg",
        imageAlt: "Consola digital Allen & Heath Qu-16",
        imageFit: "contain",
      },
      {
        name: "Shure SM80",
        brand: "Shure · Microfonía",
        description: "Micrófono de condensador omnidireccional para aplicaciones profesionales de audio.",
        image: "/images/emmplay/consola.jpg",
        imageAlt: "Operación profesional de audio y microfonía",
        reference: true,
      },
    ],
  },
  {
    slug: "iluminacion",
    title: "Iluminación",
    shortDescription: "Diseño y movimiento escénico",
    description:
      "Equipos para construir atmósferas, acentos y movimientos de luz sincronizados con cada momento del evento.",
    items: [
      {
        name: "Beam 230",
        brand: "Cabeza móvil",
        description: "Haz definido y movimiento dinámico para conciertos, fiestas y escenarios de gran formato.",
        image: "/images/equipment/beam-230.png",
        imageAlt: "Cabeza móvil Beam 230",
        imageFit: "contain",
      },
      {
        name: "Pares LED · 007 · 009",
        brand: "Iluminación LED tipo PAR",
        description: "Baños de color para escenografía, arquitectura, tarimas y ambientación de espacios.",
        image: "/images/equipment/par-led-007-009.png",
        imageAlt: "Luminaria PAR LED modelo PC007",
        imageFit: "contain",
      },
      {
        name: "Bee Eye",
        brand: "Cabeza móvil multihaz",
        description: "Efectos de luz, color y movimiento para momentos de alto impacto visual.",
        image: "/images/equipment/bee-eye.png",
        imageAlt: "Cabeza móvil multihaz Bee Eye",
        imageFit: "contain",
      },
      {
        name: "Iluminación para escenarios",
        brand: "Montaje Emmplay",
        description: "Integración de iluminación, video y ambientación para presentaciones en vivo.",
        image: "/images/equipment/emmplay-escenario-iluminacion.jpg",
        imageAlt: "Escenario con iluminación y pantallas instalado por Emmplay",
      },
    ],
  },
  {
    slug: "pantallas",
    title: "Pantallas LED",
    shortDescription: "Soluciones indoor y outdoor",
    description:
      "Módulos configurables para contenidos, cámaras, presentaciones y escenografías visuales dentro o fuera del recinto.",
    items: [
      {
        name: "Pantalla LED indoor",
        brand: "Montaje Emmplay · Interior",
        description: "Configuraciones modulares para escenarios, eventos corporativos y espacios cerrados.",
        image: "/images/equipment/emmplay-pantallas-pasarela.jpg",
        imageAlt: "Pantallas LED y pasarela instaladas por Emmplay",
      },
      {
        name: "Pantallas para eventos sociales",
        brand: "Montaje Emmplay · Formato creativo",
        description: "Composiciones horizontales y modulares integradas con sonido, iluminación y escenografía.",
        image: "/images/equipment/emmplay-pantallas-boda.jpg",
        imageAlt: "Composición de pantallas LED instalada por Emmplay para un evento social",
      },
      {
        name: "Composición LED escenográfica",
        brand: "Montaje Emmplay · Diseño modular",
        description: "Módulos distribuidos como parte de la escenografía para crear formatos visuales distintos a una pantalla tradicional.",
        image: "/images/equipment/emmplay-montaje-social.jpg",
        imageAlt: "Pantallas LED modulares en una composición escenográfica de Emmplay",
      },
      {
        name: "Pantallas LED modulares",
        brand: "Video · Indoor y outdoor",
        description: "Módulos combinables para adaptar tamaño, proporción y distribución al diseño de cada evento.",
        image: "/images/equipment/pantalla-led.png",
        imageAlt: "Módulos de pantalla LED vistos por delante y por detrás",
        imageFit: "contain",
      },
    ],
  },
  {
    slug: "tarimas",
    title: "Tarimas",
    shortDescription: "Plataformas modulares",
    description:
      "Superficies configurables para escenarios, pasarelas, presentaciones y zonas técnicas.",
    items: [
      {
        name: "Tarima modular 1 × 1 m",
        brand: "Escenario modular",
        description: "Módulos combinables para adaptar altura, área y geometría a cada montaje.",
        image: "/images/equipment/tarima-modular.png",
        imageAlt: "Módulo individual de tarima plegable",
        imageFit: "contain",
      },
      {
        name: "Tarimas para producciones",
        brand: "Montaje Emmplay",
        description: "Configuraciones de tarima integradas con estructuras, video y operación técnica.",
        image: "/images/equipment/emmplay-montaje-truss.jpg",
        imageAlt: "Equipo de Emmplay instalando tarima, pantallas y estructura de truss",
      },
    ],
  },
  {
    slug: "efectos",
    title: "Efectos",
    shortDescription: "Impacto para momentos clave",
    description:
      "Recursos atmosféricos y efectos especiales coordinados con la operación técnica del evento.",
    items: [
      {
        name: "Lanzallamas",
        brand: "Efecto especial",
        description: "Impacto visual para momentos puntuales, sujeto a condiciones técnicas y de seguridad.",
        image: "/images/emmplay/escenario.jpg",
        imageAlt: "Efectos especiales durante una producción en vivo",
        reference: true,
      },
      {
        name: "Máquinas de humo",
        brand: "Efecto atmosférico",
        description: "Volumen ambiental para reforzar haces de luz y transiciones escénicas.",
        image: "/images/emmplay/iluminacion.jpg",
        imageAlt: "Humo e iluminación durante un evento",
        reference: true,
      },
      {
        name: "Lanzadores de CO₂",
        brand: "Efecto especial",
        description: "Columnas de CO₂ para acentos de energía en conciertos, fiestas y activaciones.",
        image: "/images/emmplay/pantallas.jpg",
        imageAlt: "Producción visual de un espectáculo en vivo",
        reference: true,
      },
      {
        name: "Pirotecnia",
        brand: "Efecto controlado",
        description: "Soluciones visuales sujetas a permisos, evaluación del recinto y protocolos de seguridad.",
        image: "/images/emmplay/escenario.jpg",
        imageAlt: "Escenario preparado para efectos de una producción",
        reference: true,
      },
      {
        name: "Máquinas de niebla",
        brand: "Efecto atmosférico",
        description: "Niebla fina para dar profundidad a la iluminación sin ocultar la escena.",
        image: "/images/emmplay/iluminacion.jpg",
        imageAlt: "Atmósfera de niebla e iluminación escénica",
        reference: true,
      },
    ],
  },
  {
    slug: "estructuras",
    title: "Estructuras",
    shortDescription: "Soporte para el montaje",
    description:
      "Sistemas modulares para soportar iluminación, video, cubiertas y componentes escénicos.",
    items: [
      {
        name: "Estructura en truss",
        brand: "Montaje Emmplay · Estructura modular",
        description: "Configuraciones para pórticos, parrillas, soportes y arquitectura temporal.",
        image: "/images/equipment/emmplay-estructuras-truss.jpg",
        imageAlt: "Estructuras de truss de Emmplay durante el montaje de un evento",
      },
      {
        name: "Techo Ground Support",
        brand: "Montaje Emmplay · Cubierta escénica",
        description: "Sistema de soporte para escenarios, iluminación y video en montajes de mayor escala.",
        image: "/images/equipment/emmplay-ground-support.jpg",
        imageAlt: "Techo Ground Support instalado por Emmplay en un evento exterior",
      },
    ],
  },
];
