"use client";

import { Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";
import { SITE } from "@/lib/utils";

const cols = [
  {
    title: "Empresa",
    links: [
      { label: "Sobre nosotros", href: "#nosotros" },
      { label: "Proyectos", href: "#proyectos" },
      { label: "Testimonios", href: "#testimonios" },
      { label: "Contacto", href: "#contacto" }
    ]
  },
  {
    title: "Servicios",
    links: [
      { label: "Edificaciones", href: "#servicios" },
      { label: "Obras civiles", href: "#servicios" },
      { label: "Mantenimiento", href: "#servicios" },
      { label: "Remodelaciones", href: "#servicios" }
    ]
  },
  {
    title: "Contacto",
    links: [
      { label: SITE.location, href: "#contacto" },
      { label: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, "")}` },
      { label: SITE.email, href: `mailto:${SITE.email}` },
      { label: SITE.hours, href: "#" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-950 pt-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />

      <div className="container-x">
        <div className="grid gap-12 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-800 shadow-glow ring-1 ring-white/10">
                <span className="font-display text-lg font-black tracking-tight text-white">
                  AC
                </span>
              </div>
              <div>
                <div className="font-display text-base font-bold text-white">
                  ALL-IN-CONSTRUCTIONS
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-300">
                  S.A.S. · Ecuador
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-300">
              Constructora ecuatoriana especializada en obras civiles,
              edificaciones, mantenimiento e infraestructura. Servicio
              profesional y resultados garantizados.
            </p>

            <div className="mt-7 flex items-center gap-3">
              {[
                { icon: Facebook, href: SITE.socials.facebook },
                { icon: Instagram, href: SITE.socials.instagram },
                { icon: Linkedin, href: SITE.socials.linkedin }
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink-300 transition-colors hover:border-brand-400 hover:bg-brand-500/10 hover:text-white"
                  aria-label="social"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-ink-300 transition-colors hover:text-brand-300"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1 flex lg:justify-end">
            <a
              href="#inicio"
              className="group flex h-12 w-12 items-center justify-center self-start rounded-full border border-white/10 bg-white/5 text-white transition-all hover:border-brand-400 hover:bg-brand-500/20"
              aria-label="Subir"
            >
              <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} {SITE.name}. Todos los derechos
            reservados.
          </p>
          <p className="text-xs text-ink-400">
            Diseñado con precisión en Ecuador 🇪🇨
          </p>
        </div>
      </div>
    </footer>
  );
}
