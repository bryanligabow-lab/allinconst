import {
  Building2,
  HardHat,
  Wrench,
  Hammer,
  PencilRuler,
  ShieldCheck,
  Construction,
  type LucideIcon
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export const services: Service[] = [
  {
    id: "edificaciones",
    title: "Construcción de Edificaciones",
    description:
      "Diseño y construcción de edificios residenciales, comerciales e industriales con altos estándares técnicos.",
    icon: Building2,
    features: [
      "Edificios multi-pisos",
      "Galpones industriales",
      "Locales comerciales"
    ]
  },
  {
    id: "obras-civiles",
    title: "Obras Civiles",
    description:
      "Ejecución de obras civiles para infraestructura pública y privada, cumpliendo normativas vigentes.",
    icon: HardHat,
    features: ["Vialidad y aceras", "Drenajes y alcantarillado", "Estructuras"]
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento de Infraestructura",
    description:
      "Mantenimiento preventivo y correctivo para preservar el valor y la funcionalidad de tu infraestructura.",
    icon: Wrench,
    features: [
      "Mantenimiento preventivo",
      "Reparaciones estructurales",
      "Atención 24/7"
    ]
  },
  {
    id: "remodelaciones",
    title: "Remodelaciones",
    description:
      "Renovamos espacios con propuestas arquitectónicas modernas, funcionales y de alto valor estético.",
    icon: Hammer,
    features: ["Interiores y exteriores", "Acabados premium", "Ampliaciones"]
  },
  {
    id: "diseno",
    title: "Diseño y Planificación",
    description:
      "Equipo técnico para diseñar, planificar y presupuestar tu proyecto desde el primer trazo.",
    icon: PencilRuler,
    features: ["Planos arquitectónicos", "Modelado 3D", "Presupuestos"]
  },
  {
    id: "supervision",
    title: "Supervisión Técnica",
    description:
      "Fiscalización profesional de obras para asegurar calidad, plazos y cumplimiento contractual.",
    icon: ShieldCheck,
    features: [
      "Control de calidad",
      "Informes técnicos",
      "Gestión de cronogramas"
    ]
  },
  {
    id: "infraestructura",
    title: "Infraestructura Pública y Privada",
    description:
      "Ejecutamos proyectos no residenciales de infraestructura para sectores público y privado.",
    icon: Construction,
    features: ["Contratos GAD", "Proyectos corporativos", "Obras llave en mano"]
  }
];
