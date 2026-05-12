"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CardSpotlight } from "@/components/ui/Card";

export function Services() {
  return (
    <section id="servicios" className="section relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -z-10 left-0 top-32 h-96 w-96 rounded-full bg-brand-700/20 blur-[120px]" />
      <div className="absolute -z-10 right-0 bottom-32 h-96 w-96 rounded-full bg-brand-900/30 blur-[120px]" />

      <div className="container-x">
        <SectionTitle
          eyebrow="Nuestros Servicios"
          title="Soluciones integrales en"
          highlight="construcción e infraestructura."
          description="Cubrimos todo el ciclo del proyecto: desde el diseño hasta la supervisión, con un equipo técnico que garantiza ejecución impecable."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
            >
              <CardSpotlight className="h-full p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/30 to-brand-700/10 ring-1 ring-brand-400/20 text-brand-200 transition-transform duration-500 group-hover:scale-110">
                  <service.icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 font-display text-lg font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-300">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-1.5">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-xs text-ink-200"
                    >
                      <span className="h-1 w-1 rounded-full bg-brand-400" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className="mt-7 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-300 transition-colors hover:text-brand-200"
                >
                  Solicitar info
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
