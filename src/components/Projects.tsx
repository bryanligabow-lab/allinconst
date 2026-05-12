"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { SectionTitle } from "@/components/ui/SectionTitle";

const categories = [
  "Todos",
  "Edificación",
  "Obra Civil",
  "Infraestructura",
  "Remodelación",
  "Mantenimiento",
  "Obra Pública"
];

export function Projects() {
  const [active, setActive] = useState("Todos");
  const filtered: Project[] =
    active === "Todos"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="proyectos" className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />

      <div className="container-x">
        <SectionTitle
          eyebrow="Proyectos"
          title="Obras que hablan"
          highlight="por nosotros."
          description="Una selección de proyectos ejecutados en Ecuador, donde combinamos ingeniería, diseño y compromiso."
        />

        {/* Filter */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                active === c
                  ? "border-brand-400 bg-brand-500/20 text-white shadow-glow"
                  : "border-white/10 bg-white/[0.03] text-ink-300 hover:border-white/20 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900/50"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />

                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/20 bg-ink-950/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-ink-950/60 text-white backdrop-blur transition-all duration-300 group-hover:bg-brand-500 group-hover:border-brand-400">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-300 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4 text-[11px] font-medium text-ink-300">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-brand-400" />
                      {project.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-brand-400" />
                      {project.year}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
