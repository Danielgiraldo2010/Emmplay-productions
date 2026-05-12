export const siteConfig = {
  name: "Emmplay",
  tagline: "Live Production. Global Scale.",
  description:
    "Emmplay es una empresa de producción audiovisual y eventos de gran escala. Diseñamos, producimos y ejecutamos experiencias en vivo para artistas, marcas y audiencias internacionales.",
  url: "https://emmplay.com",
  ogImage: "/og-image.jpg",
  links: {
    instagram: "https://instagram.com/emmplay",
    linkedin: "https://linkedin.com/company/emmplay",
    youtube: "https://youtube.com/@emmplay",
  },
};

export const navLinks = [
  { label: "Servicios", href: "#services" },
  { label: "Proyectos", href: "#portfolio" },
  { label: "Nosotros", href: "#about" },
  { label: "Clientes", href: "#clients" },
  { label: "Contacto", href: "#contact" },
];

export const services = [
  {
    id: "01",
    title: "Live Event Production",
    subtitle: "Producción en vivo",
    description:
      "Diseño técnico y ejecución de eventos masivos: conciertos, festivales, lanzamientos y experiencias corporativas de gran escala con infraestructura de nivel internacional.",
  },
  {
    id: "02",
    title: "Touring & Logistics",
    subtitle: "Touring y logística",
    description:
      "Gestión integral de giras nacionales e internacionales. Coordinación técnica, riders, avance de producción y operación en múltiples ciudades simultáneas.",
  },
  {
    id: "03",
    title: "Stage & Set Design",
    subtitle: "Diseño de escenarios",
    description:
      "Concepto, diseño y construcción de escenarios de alto impacto. Estructuras custom, LED walls, sistemas de iluminación y arquitectura efímera de primer nivel.",
  },
  {
    id: "04",
    title: "Broadcast & Streaming",
    subtitle: "Transmisión y broadcast",
    description:
      "Producción multicámara, dirección de señal en vivo y distribución broadcast para audiencias globales. Calidad cinematográfica en tiempo real.",
  },
  {
    id: "05",
    title: "Brand Experiences",
    subtitle: "Experiencias de marca",
    description:
      "Activaciones inmersivas y experiencias de marca que generan impacto emocional duradero. Del concepto creativo a la ejecución técnica impecable.",
  },
  {
    id: "06",
    title: "Content & Post",
    subtitle: "Contenido y postproducción",
    description:
      "Captura cinematográfica de eventos, edición, color grading y entrega de contenido premium para distribución multiplataforma.",
  },
];

export const clients = [
  "Bancolombia",
  "Movistar Arena",
  "Postobón",
  "Avianca",
  "Claro",
  "Rock al Parque",
  "Alpina",
  "Festival Estéreo Picnic",
  "Tigo",
  "Medellín Music Week",
];

export const testimonials = [
  {
    quote:
      "La capacidad técnica y creativa de Emmplay es de otro nivel. Ejecutaron nuestra gira de 12 ciudades con una precisión que no habíamos visto antes.",
    author: "Rodrigo Vásquez",
    role: "Tour Manager — Gira Latinoamérica 2024",
  },
  {
    quote:
      "Transformaron un espacio vacío en una experiencia que 40,000 personas no van a olvidar. Eso es lo que hace Emmplay.",
    author: "Carolina Mejía",
    role: "Directora de Eventos, Bancolombia",
  },
  {
    quote:
      "Desde el diseño del escenario hasta el último frame del broadcast, todo fue impecable. Son el estándar de la industria en Colombia.",
    author: "Felipe Arango",
    role: "Productor Ejecutivo, Festival Estéreo Picnic",
  },
];

export const portfolioItems = [
  {
    id: 1,
    title: "Estéreo Picnic 2024",
    client: "Festival Estéreo Picnic",
    category: "Festival Production",
    year: "2024",
    size: "large", // span 2 cols
  },
  {
    id: 2,
    title: "Gira Nacional",
    client: "Artista Internacional",
    category: "Touring",
    year: "2024",
    size: "small",
  },
  {
    id: 3,
    title: "Lanzamiento Global",
    client: "Bancolombia",
    category: "Brand Experience",
    year: "2024",
    size: "small",
  },
  {
    id: 4,
    title: "Rock al Parque",
    client: "IDARTES",
    category: "Live Production",
    year: "2023",
    size: "small",
  },
  {
    id: 5,
    title: "Broadcast en Vivo",
    client: "Claro",
    category: "Broadcast",
    year: "2024",
    size: "large",
  },
  {
    id: 6,
    title: "Medellín Music Week",
    client: "Alcaldía de Medellín",
    category: "Event Design",
    year: "2023",
    size: "small",
  },
];

export const stats = [
  { value: "500+", label: "Eventos producidos" },
  { value: "12", label: "Países de operación" },
  { value: "2M+", label: "Asistentes impactados" },
  { value: "10", label: "Años de trayectoria" },
];
