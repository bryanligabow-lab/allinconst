"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 50, suffix: "+", label: "Proyectos entregados" },
  { value: 10, suffix: "+", label: "Años de experiencia" },
  { value: 120, suffix: "K m²", label: "Construidos en obra" },
  { value: 98, suffix: "%", label: "Clientes satisfechos" }
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-brand-700/30 via-ink-900 to-ink-950 p-10 sm:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 grid-bg opacity-30"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-brand-500/40 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-brand-700/40 blur-3xl"
          />

          <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center sm:text-left"
              >
                <div className="font-display text-5xl font-black text-white sm:text-6xl lg:text-7xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-sm font-medium text-ink-200">
                  {s.label}
                </div>
                <div className="mt-4 h-px bg-gradient-to-r from-brand-400 via-brand-400/30 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
