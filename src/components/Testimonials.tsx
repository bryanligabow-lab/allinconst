"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const current = testimonials[idx];

  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section relative overflow-hidden">
      <div className="absolute -z-10 inset-0 grid-bg opacity-20" />

      <div className="container-x">
        <SectionTitle
          eyebrow="Testimonios"
          title="Lo que dicen"
          highlight="nuestros clientes."
          description="Historias reales de clientes que confiaron en ALL-IN-CONSTRUCTIONS para hacer realidad sus proyectos."
        />

        <div className="mx-auto mt-14 max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-8 sm:p-12 backdrop-blur-xl">
            <Quote
              aria-hidden
              className="absolute top-6 right-6 h-20 w-20 text-brand-500/15"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div className="flex items-center gap-1">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-brand-300 text-brand-300"
                    />
                  ))}
                </div>

                <blockquote className="mt-6 font-display text-xl font-medium leading-relaxed text-white sm:text-2xl">
                  “{current.quote}”
                </blockquote>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 font-display text-base font-bold text-white shadow-glow">
                    {current.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <div className="font-display text-sm font-bold text-white">
                      {current.name}
                    </div>
                    <div className="text-xs text-ink-300">
                      {current.role} · {current.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center justify-between border-t border-white/5 pt-6">
              <div className="flex gap-2">
                {testimonials.map((t, i) => (
                  <button
                    key={t.id}
                    onClick={() => setIdx(i)}
                    aria-label={`Testimonio ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === idx
                        ? "w-8 bg-brand-400"
                        : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={next}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-400/40 bg-brand-500/20 text-white transition-colors hover:bg-brand-500/30"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
