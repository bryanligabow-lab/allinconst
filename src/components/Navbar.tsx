"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn, SITE, whatsappLink } from "@/lib/utils";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/10 bg-ink-950/80 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <div className="container-x flex h-20 items-center justify-between">
          <a
            href="#inicio"
            className="group flex items-center gap-3"
            aria-label={SITE.name}
          >
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-800 shadow-glow ring-1 ring-white/10">
              <span className="font-display text-lg font-black tracking-tight text-white">
                AC
              </span>
              <span className="absolute inset-0 rounded-xl border border-white/10" />
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-[15px] font-bold leading-tight tracking-tight text-white">
                ALL-IN-CONSTRUCTIONS
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-300">
                S.A.S. · Ecuador
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink-200 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-ink-200 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4 text-brand-400" />
              {SITE.phone}
            </a>
            <a
              href={whatsappLink(
                "Hola, me gustaría solicitar una cotización para mi proyecto."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm">Cotizar Ahora</Button>
            </a>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label="Abrir menú"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-ink-950/80 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm border-l border-white/10 bg-ink-900 p-6"
            >
              <div className="mt-16 flex flex-col gap-1">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx }}
                    className="rounded-xl px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-white/5"
                  >
                    {item.label}
                  </motion.a>
                ))}
                <div className="mt-6 border-t border-white/10 pt-6">
                  <a
                    href={whatsappLink(
                      "Hola, me gustaría solicitar una cotización."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full" size="md">
                      Cotizar Ahora
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
