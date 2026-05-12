export interface QuickReply {
  id: string;
  label: string;
  action:
    | "services"
    | "projects"
    | "quote"
    | "whatsapp"
    | "about"
    | "contact"
    | "restart";
}

export const chatbotGreeting =
  "¡Hola! 👋 Soy el asistente virtual de ALL-IN-CONSTRUCTIONS S.A.S. ¿En qué tipo de proyecto podemos ayudarte hoy?";

export const initialQuickReplies: QuickReply[] = [
  { id: "qr1", label: "💼 Solicitar cotización", action: "quote" },
  { id: "qr2", label: "🏗️ Conocer servicios", action: "services" },
  { id: "qr3", label: "📐 Ver proyectos", action: "projects" },
  { id: "qr4", label: "💬 Hablar por WhatsApp", action: "whatsapp" }
];

export const knowledge: Record<string, string> = {
  services:
    "Ofrecemos: 🏢 Construcción de edificaciones, 🛣️ Obras civiles, 🔧 Mantenimiento de infraestructura, 🔨 Remodelaciones, 📐 Diseño y planificación, ✅ Supervisión técnica e infraestructura pública/privada.",
  projects:
    "Hemos ejecutado proyectos como edificios corporativos, galpones industriales, vialidad urbana, centros educativos y remodelaciones. ¿Quieres ver alguno en particular?",
  about:
    "Somos ALL-IN-CONSTRUCTIONS S.A.S., una empresa constructora ecuatoriana con sede en Velasco Ibarra, El Empalme (Guayas). Nos especializamos en construcción, obras civiles y mantenimiento.",
  contact:
    "📍 Velasco Ibarra, El Empalme - Guayas\n📞 +593 99 000 0000\n📧 contacto@allinconstructions.com\n🕒 Lun–Sáb 8am–6pm",
  default:
    "Disculpa, no entendí del todo. ¿Puedes elegir una de las opciones de abajo o describir tu proyecto?"
};

export const quoteFlow = {
  askName: "Perfecto. Para preparar una cotización, dime tu nombre completo:",
  askPhone: "Gracias. Ahora compárteme un número de teléfono donde contactarte:",
  askProjectType: "¿Qué tipo de proyecto necesitas? (Ej: edificación, remodelación, obra civil, mantenimiento)",
  askMessage:
    "Cuéntame brevemente detalles del proyecto (ubicación, dimensiones aproximadas, plazos):",
  summary:
    "✅ ¡Excelente! Aquí está el resumen de tu solicitud. Puedes enviarla directamente por WhatsApp para una atención más rápida."
};
