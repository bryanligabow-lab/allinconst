import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE = {
  name: "ALL-IN-CONSTRUCTIONS S.A.S.",
  shortName: "ALL-IN-CONSTRUCTIONS",
  tagline: "Construimos confianza, infraestructura y futuro",
  description:
    "Soluciones profesionales en construcción, mantenimiento e infraestructura para proyectos públicos y privados en Ecuador.",
  location: "Velasco Ibarra, El Empalme - Guayas, Ecuador",
  phone: "+593 99 000 0000",
  whatsapp: "593990000000",
  email: "contacto@allinconstructions.com",
  hours: "Lun – Sáb · 8:00 a.m. – 6:00 p.m.",
  socials: {
    facebook: "#",
    instagram: "#",
    linkedin: "#"
  }
};

export function whatsappLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE.whatsapp}?text=${encoded}`;
}
