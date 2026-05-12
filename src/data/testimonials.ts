export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Ing. Carlos Mendoza",
    role: "Director de Proyectos",
    company: "Grupo Inmobiliario Pacífico",
    quote:
      "ALL-IN-CONSTRUCTIONS entregó nuestro edificio corporativo dentro del plazo y con una calidad excepcional. Su equipo técnico es altamente profesional.",
    rating: 5
  },
  {
    id: "t2",
    name: "Arq. María Fernanda Bravo",
    role: "Gerente General",
    company: "Estudio Arquitectura BV",
    quote:
      "Trabajamos juntos en varias remodelaciones. Su atención al detalle, comunicación constante y cumplimiento contractual los hacen únicos.",
    rating: 5
  },
  {
    id: "t3",
    name: "Sr. Luis Andrade",
    role: "Administrador",
    company: "GAD Cantonal",
    quote:
      "Para la rehabilitación de la vía urbana confiamos en ellos. Trabajo serio, transparente y con resultados que mejoran la calidad de vida.",
    rating: 5
  },
  {
    id: "t4",
    name: "Sra. Patricia Vélez",
    role: "Propietaria",
    company: "Industrias del Litoral",
    quote:
      "Construyeron nuestro galpón industrial superando expectativas. Procesos claros, presupuesto respetado y postventa impecable.",
    rating: 5
  }
];
