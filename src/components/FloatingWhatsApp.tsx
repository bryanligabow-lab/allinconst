"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/utils";

export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setShow(true);
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 6000);
    }, 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="fixed bottom-6 left-6 z-40"
        >
          <div className="relative">
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, x: -10, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="absolute bottom-1 left-16 flex w-64 items-start gap-3 rounded-2xl border border-white/10 bg-ink-900/95 p-4 shadow-premium backdrop-blur-xl"
                >
                  <div className="text-xs leading-relaxed text-white">
                    <div className="font-bold">¿Necesitas asesoría?</div>
                    <div className="mt-1 text-ink-300">
                      Conversemos por WhatsApp y te ayudamos.
                    </div>
                  </div>
                  <button
                    onClick={() => setShowTooltip(false)}
                    className="text-ink-400 hover:text-white"
                    aria-label="Cerrar"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <a
              href={whatsappLink(
                `Hola ${SITE.shortName}, me interesa solicitar información.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] transition-transform hover:scale-110"
            >
              <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
              <MessageCircle className="relative h-6 w-6 fill-white text-white" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
