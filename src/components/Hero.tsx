"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, Award, Hammer } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Video background */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
          className="h-full w-full object-cover"
        >
          <source
            src="https://cdn.pixabay.com/video/2020/09/08/49375-457817012_large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/70 to-ink-950" />
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      <div className="container-x relative grid w-full gap-12 pb-24 lg:grid-cols-12 lg:gap-10 lg:pb-32">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-200 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-brand-400" />
            </span>
            Constructora · Ecuador
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 font-display text-[clamp(2.5rem,6vw,5.25rem)] font-black leading-[0.95] tracking-tight text-white"
          >
            Construimos{" "}
            <span className="text-gradient-brand">confianza</span>,
            <br className="hidden sm:block" /> infraestructura
            <br className="hidden sm:block" /> y futuro.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg"
          >
            Soluciones profesionales en construcción, mantenimiento e
            infraestructura para proyectos públicos y privados en Ecuador.
            Calidad técnica, cumplimiento contractual y resultados que perduran.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#contacto">
              <Button size="lg" iconRight={<ArrowRight className="h-4 w-4" />}>
                Solicitar cotización
              </Button>
            </a>
            <a href="#servicios">
              <Button
                variant="outline"
                size="lg"
                icon={<Play className="h-4 w-4" />}
              >
                Ver servicios
              </Button>
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-14 grid max-w-xl grid-cols-3 gap-4"
          >
            {[
              { icon: Shield, label: "Garantía total" },
              { icon: Award, label: "Calidad certificada" },
              { icon: Hammer, label: "Equipo experto" }
            ].map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 backdrop-blur"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/20 text-brand-300">
                  <b.icon className="h-4 w-4" />
                </div>
                <span className="text-xs font-medium text-ink-100">
                  {b.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right floating stat card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:col-span-5 lg:block"
        >
          <div className="relative ml-auto max-w-md">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-brand-500/30 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-8 backdrop-blur-xl shadow-premium">
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-brand-500/30 blur-3xl" />
              <div className="relative">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
                  Resultados que respaldan
                </div>
                <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-8">
                  {[
                    { v: "+50", l: "Proyectos entregados" },
                    { v: "10+", l: "Años de experiencia" },
                    { v: "100%", l: "Cumplimiento" },
                    { v: "24/7", l: "Atención técnica" }
                  ].map((s) => (
                    <div key={s.l}>
                      <div className="font-display text-4xl font-black text-white">
                        {s.v}
                      </div>
                      <div className="mt-1 text-xs font-medium text-ink-300">
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-900/60 p-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-9 w-9 rounded-full border-2 border-ink-900 bg-gradient-to-br from-brand-400 to-brand-700"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">
                      Equipo técnico calificado
                    </div>
                    <div className="text-[11px] text-ink-300">
                      Ingenieros · Arquitectos · Maestros
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block">
        <div className="flex flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-300">
          <span>Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-brand-400 to-transparent" />
        </div>
      </div>
    </section>
  );
}
