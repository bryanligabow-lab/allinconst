"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Users2,
  Clock4,
  BadgeDollarSign,
  ShieldCheck,
  Leaf
} from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const reasons = [
  {
    icon: Sparkles,
    title: "Calidad premium",
    text: "Acabados, materiales y procesos seleccionados para entregar obras superiores al estándar del mercado."
  },
  {
    icon: Users2,
    title: "Equipo certificado",
    text: "Ingenieros civiles, arquitectos y maestros especialistas con experiencia comprobada en obra."
  },
  {
    icon: Clock4,
    title: "Cumplimiento de plazos",
    text: "Cronogramas detallados, hitos verificables y comunicación proactiva durante toda la ejecución."
  },
  {
    icon: BadgeDollarSign,
    title: "Presupuestos transparentes",
    text: "Cotizaciones claras, sin sorpresas. Te explicamos cada partida con justificación técnica."
  },
  {
    icon: ShieldCheck,
    title: "Seguridad y normativas",
    text: "Cumplimos al 100% las normativas ecuatorianas de construcción, seguridad laboral y ambiental."
  },
  {
    icon: Leaf,
    title: "Compromiso sostenible",
    text: "Optimización de recursos, materiales responsables y prácticas que respetan el entorno."
  }
];

export function WhyChooseUs() {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute -z-10 top-0 left-1/2 h-96 w-[80%] -translate-x-1/2 rounded-full bg-brand-700/15 blur-[140px]" />

      <div className="container-x">
        <SectionTitle
          eyebrow="Por qué elegirnos"
          title="Razones para confiar"
          highlight="en nosotros."
          description="Más que construir, construimos relaciones a largo plazo basadas en resultados, transparencia y excelencia."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative bg-ink-950/80 p-8 transition-colors duration-300 hover:bg-ink-900/80"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-500/0 to-brand-500/0 opacity-0 transition-opacity duration-500 group-hover:from-brand-500/10 group-hover:to-transparent group-hover:opacity-100"
              />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-400/30 bg-brand-500/15 text-brand-200">
                  <r.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-white">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  {r.text}
                </p>
                <div className="mt-6 text-[10px] font-bold tracking-[0.25em] text-brand-300">
                  0{i + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
