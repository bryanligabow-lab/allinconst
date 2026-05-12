export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "p1",
    title: "Edificio Corporativo Centro",
    category: "Edificación",
    location: "Guayas, Ecuador",
    year: "2024",
    description:
      "Construcción de edificio corporativo de 5 plantas con acabados premium, estructura sismo-resistente y áreas comunes modernas.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    tags: ["Edificación", "Comercial"]
  },
  {
    id: "p2",
    title: "Vialidad Urbana El Empalme",
    category: "Obra Civil",
    location: "El Empalme",
    year: "2024",
    description:
      "Pavimentación, aceras y sistema de drenaje pluvial para 1.5 km de vía urbana, integrando señalización y arborización.",
    image:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1600&q=80",
    tags: ["Obra Civil", "Pública"]
  },
  {
    id: "p3",
    title: "Galpón Industrial Logístico",
    category: "Infraestructura",
    location: "Velasco Ibarra",
    year: "2023",
    description:
      "Galpón industrial de 2,400 m² con estructura metálica, sistema contra incendios y oficinas administrativas integradas.",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1600&q=80",
    tags: ["Industrial", "Privado"]
  },
  {
    id: "p4",
    title: "Remodelación Oficinas Banca",
    category: "Remodelación",
    location: "Guayaquil",
    year: "2023",
    description:
      "Renovación integral de oficinas corporativas con diseño contemporáneo, climatización eficiente y mobiliario a medida.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    tags: ["Remodelación", "Corporativo"]
  },
  {
    id: "p5",
    title: "Mantenimiento Puente Vehicular",
    category: "Mantenimiento",
    location: "Guayas",
    year: "2024",
    description:
      "Rehabilitación estructural, pintura anticorrosiva y refuerzo de elementos críticos de puente vehicular en operación.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80",
    tags: ["Mantenimiento", "Infraestructura"]
  },
  {
    id: "p6",
    title: "Centro Educativo Fiscal",
    category: "Obra Pública",
    location: "El Empalme",
    year: "2022",
    description:
      "Construcción de bloque pedagógico de 3 plantas con aulas, laboratorios y áreas recreativas para institución educativa.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    tags: ["Pública", "Educación"]
  }
];
