"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setProgress(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 300);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950"
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 grid-bg opacity-40"
          />
          <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-700/30 blur-[120px]" />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-800 shadow-glow-lg ring-1 ring-white/10">
              <motion.div
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="font-display text-3xl font-black tracking-tight text-white"
              >
                AC
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -inset-2 rounded-2xl border-2 border-dashed border-brand-400/40"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-center"
          >
            <div className="font-display text-base font-bold tracking-tight text-white">
              ALL-IN-CONSTRUCTIONS
            </div>
            <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-300">
              S.A.S. · Ecuador
            </div>
          </motion.div>

          {/* Progress bar */}
          <div className="mt-8 w-64">
            <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-400 to-brand-600"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <div className="mt-2 flex justify-between text-[10px] font-semibold tracking-[0.2em] text-ink-400">
              <span>CARGANDO</span>
              <span>{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
