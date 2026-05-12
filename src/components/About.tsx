"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Target, Compass, Heart } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";

const pillars = [
  {
    icon: Target,
    title: "Misión",
    text: "Ejecutar proyectos de construcción con los más altos estándares técnicos, generando valor real para nuestros clientes y comunidades."
  },
  {
    icon: Compass,
    title: "Visión",
    text: "Ser la constructora referente del Ecuador por la calidad, innovación y compromiso en cada obra que entregamos."
  },
  {
    icon: Heart,
    title: "Valores",
    text: "Integridad, excelencia técnica, responsabilidad social, seguridad laboral y mejora continua en todos nuestros procesos."
  }
];

const highlights = [
  "Equipo multidisciplinario de ingenieros y arquitectos",
  "Cumplimiento estricto de normativas ecuatorianas",
  "Maquinaria propia y proveedores certificados",
  "Cronogramas y presupuestos transparentes"
];

export function About() {
  return (
    <section id="nosotros" className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-700/15 blur-[120px]" />

      <div className="container-x">
        <SectionTitle
          eyebrow="Sobre Nosotros"
          title="Construimos con propósito,"
          highlight="entregamos con orgullo."
          description="ALL-IN-CONSTRUCTIONS S.A.S. es una empresa ecuatoriana con base en Velasco Ibarra (El Empalme – Guayas), dedicada a transformar ideas en obras sólidas, eficientes y duraderas."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
                alt="Obra de construcción ALL-IN-CONSTRUCTIONS"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />

              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-900/80 p-4 backdrop-blur-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-glow">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    Certificados y avalados
                  </div>
                  <div className="text-xs text-ink-300">
                    Empresa registrada · SRI · IESS
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative corner */}
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-3xl border-2 border-brand-500/30 lg:block" />
            <div className="absolute -top-6 -left-6 hidden h-32 w-32 rounded-3xl border-2 border-brand-500/30 lg:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Más de una década consolidando proyectos en Ecuador
            </h3>
            <p className="mt-4 text-base leading-relaxed text-ink-300">
              Combinamos experiencia, talento técnico y maquinaria especializada
              para entregar obras públicas y privadas que cumplen con los plazos,
              presupuestos y estándares de calidad exigidos por nuestros clientes.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((h, i) => (
                <motion.li
                  key={h}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/20">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-300" />
                  </span>
                  <span className="text-sm text-ink-100">{h}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {pillars.map((p) => (
                <Card key={p.title} className="p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 font-display text-sm font-bold text-white">
                    {p.title}
                  </div>
                  <div className="mt-1.5 text-xs leading-relaxed text-ink-300">
                    {p.text}
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
