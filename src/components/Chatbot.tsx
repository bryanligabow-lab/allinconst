"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, X, MessageSquare, RotateCcw, Sparkles } from "lucide-react";
import {
  chatbotGreeting,
  initialQuickReplies,
  knowledge,
  quoteFlow,
  type QuickReply
} from "@/data/chatbotKnowledge";
import { SITE, whatsappLink } from "@/lib/utils";

type Msg = {
  id: string;
  role: "bot" | "user";
  content: string;
  quickReplies?: QuickReply[];
};

type QuoteStage =
  | "idle"
  | "name"
  | "phone"
  | "project"
  | "message"
  | "summary";

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [hasNew, setHasNew] = useState(true);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [stage, setStage] = useState<QuoteStage>("idle");
  const [quote, setQuote] = useState({
    name: "",
    phone: "",
    project: "",
    message: ""
  });
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: "m0",
      role: "bot",
      content: chatbotGreeting,
      quickReplies: initialQuickReplies
    }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, [messages, typing, open]);

  const pushBot = (content: string, quickReplies?: QuickReply[]) =>
    new Promise<void>((resolve) => {
      setTyping(true);
      const delay = Math.min(1200, 400 + content.length * 12);
      setTimeout(() => {
        setMessages((m) => [
          ...m,
          {
            id: `b-${Date.now()}-${Math.random()}`,
            role: "bot",
            content,
            quickReplies
          }
        ]);
        setTyping(false);
        resolve();
      }, delay);
    });

  const pushUser = (content: string) => {
    setMessages((m) => [
      ...m,
      { id: `u-${Date.now()}-${Math.random()}`, role: "user", content }
    ]);
  };

  const handleQuickReply = async (qr: QuickReply) => {
    pushUser(qr.label);
    setHasNew(false);

    switch (qr.action) {
      case "services":
        await pushBot(knowledge.services, [
          { id: "back", label: "🏠 Volver al menú", action: "restart" },
          { id: "quote", label: "💼 Cotizar ahora", action: "quote" }
        ]);
        break;
      case "projects":
        await pushBot(knowledge.projects, [
          { id: "see", label: "👀 Ver en la web", action: "restart" },
          { id: "quote", label: "💼 Cotizar similar", action: "quote" }
        ]);
        break;
      case "contact":
        await pushBot(knowledge.contact, [
          { id: "wa", label: "💬 WhatsApp", action: "whatsapp" },
          { id: "back", label: "🏠 Menú", action: "restart" }
        ]);
        break;
      case "about":
        await pushBot(knowledge.about, [
          { id: "back", label: "🏠 Menú", action: "restart" }
        ]);
        break;
      case "quote":
        setStage("name");
        await pushBot(quoteFlow.askName);
        break;
      case "whatsapp":
        window.open(
          whatsappLink(
            `Hola ${SITE.shortName}, me interesa solicitar información.`
          ),
          "_blank"
        );
        await pushBot(
          "Te he abierto WhatsApp en una nueva pestaña. ¿En qué más puedo ayudarte?",
          initialQuickReplies
        );
        break;
      case "restart":
        setStage("idle");
        setQuote({ name: "", phone: "", project: "", message: "" });
        await pushBot(
          "Perfecto, volvamos al inicio. ¿En qué puedo ayudarte?",
          initialQuickReplies
        );
        break;
    }
  };

  const handleSend = async () => {
    const text = input.trim();
    if (!text) return;
    pushUser(text);
    setInput("");

    if (stage === "name") {
      setQuote((q) => ({ ...q, name: text }));
      setStage("phone");
      await pushBot(quoteFlow.askPhone);
    } else if (stage === "phone") {
      setQuote((q) => ({ ...q, phone: text }));
      setStage("project");
      await pushBot(quoteFlow.askProjectType);
    } else if (stage === "project") {
      setQuote((q) => ({ ...q, project: text }));
      setStage("message");
      await pushBot(quoteFlow.askMessage);
    } else if (stage === "message") {
      const updated = { ...quote, message: text };
      setQuote(updated);
      setStage("summary");
      await pushBot(
        `${quoteFlow.summary}\n\n👤 ${updated.name}\n📞 ${updated.phone}\n🏗️ ${updated.project}\n📝 ${updated.message}`,
        [
          { id: "wa", label: "💬 Enviar por WhatsApp", action: "whatsapp" },
          { id: "back", label: "🏠 Volver al menú", action: "restart" }
        ]
      );
      // build whatsapp message
      setTimeout(() => {
        const wa = whatsappLink(
          `Nueva solicitud desde la web:\n\n👤 Nombre: ${updated.name}\n📞 Teléfono: ${updated.phone}\n🏗️ Proyecto: ${updated.project}\n📝 Detalles: ${updated.message}`
        );
        // delegate to whatsapp button: store on quote summary action handler
        // we override the whatsapp click handler below via stage check
        (window as any).__chatbotWA = wa;
      }, 100);
    } else {
      // free chat - keyword detection
      const lower = text.toLowerCase();
      if (/(servicio|qué hacen|que hacen)/.test(lower))
        await pushBot(knowledge.services, initialQuickReplies);
      else if (/(proyecto|obra|trabajo)/.test(lower))
        await pushBot(knowledge.projects, initialQuickReplies);
      else if (/(contact|telefono|teléfono|correo|email|dirección)/.test(lower))
        await pushBot(knowledge.contact, initialQuickReplies);
      else if (/(quienes|quiénes|empresa|nosotros|sobre)/.test(lower))
        await pushBot(knowledge.about, initialQuickReplies);
      else if (/(cotiza|presupuesto|precio)/.test(lower)) {
        setStage("name");
        await pushBot(quoteFlow.askName);
      } else {
        await pushBot(knowledge.default, initialQuickReplies);
      }
    }
  };

  // Custom WA handler for summary stage
  const handleQuickReplyWrapper = (qr: QuickReply) => {
    if (qr.action === "whatsapp" && stage === "summary") {
      const wa = (window as any).__chatbotWA;
      if (wa) window.open(wa, "_blank");
      pushUser(qr.label);
      pushBot(
        "¡Listo! Solicitud enviada. Te contactaremos a la brevedad. 🚀",
        [{ id: "back", label: "🏠 Volver al menú", action: "restart" }]
      );
      setStage("idle");
      return;
    }
    handleQuickReply(qr);
  };

  return (
    <>
      {/* Trigger Button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            onClick={() => {
              setOpen(true);
              setHasNew(false);
            }}
            initial={{ scale: 0, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Abrir chat"
            className="group fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-brand-500 to-brand-800 shadow-glow-lg ring-1 ring-white/10"
          >
            <span className="absolute inset-0 animate-pulse-slow rounded-full bg-brand-400/40" />
            <Bot className="relative h-7 w-7 text-white" />
            {hasNew && (
              <span className="absolute right-2 top-2 flex h-3 w-3">
                <span className="absolute inset-0 animate-ping rounded-full bg-red-400" />
                <span className="relative h-3 w-3 rounded-full bg-red-500 ring-2 ring-ink-950" />
              </span>
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed bottom-6 right-6 z-50 flex h-[600px] max-h-[85vh] w-[calc(100vw-3rem)] max-w-[420px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-900/95 shadow-premium backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-brand-700 via-brand-800 to-ink-900 p-5">
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-brand-400/30 blur-3xl" />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 backdrop-blur ring-1 ring-white/20">
                    <Bot className="h-5 w-5 text-white" />
                    <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-brand-800" />
                  </div>
                  <div>
                    <div className="font-display text-sm font-bold text-white">
                      Asistente Virtual
                    </div>
                    <div className="text-[11px] text-brand-100">
                      <span className="inline-flex items-center gap-1">
                        <Sparkles className="h-2.5 w-2.5" />
                        En línea · Responde al instante
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => {
                      setMessages([
                        {
                          id: "m0",
                          role: "bot",
                          content: chatbotGreeting,
                          quickReplies: initialQuickReplies
                        }
                      ]);
                      setStage("idle");
                      setQuote({ name: "", phone: "", project: "", message: "" });
                    }}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                    aria-label="Reiniciar chat"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setOpen(false)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                    aria-label="Cerrar"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 space-y-4 overflow-y-auto bg-gradient-to-b from-ink-900 to-ink-950 p-5"
            >
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={
                      m.role === "user"
                        ? "max-w-[80%] rounded-2xl rounded-tr-sm bg-gradient-to-br from-brand-500 to-brand-700 px-4 py-2.5 text-sm text-white shadow-glow"
                        : "max-w-[85%] space-y-3"
                    }
                  >
                    {m.role === "bot" ? (
                      <>
                        <div className="rounded-2xl rounded-tl-sm border border-white/5 bg-white/[0.04] px-4 py-2.5 text-sm text-white whitespace-pre-line">
                          {m.content}
                        </div>
                        {m.quickReplies && (
                          <div className="flex flex-wrap gap-2">
                            {m.quickReplies.map((qr) => (
                              <button
                                key={qr.id}
                                onClick={() => handleQuickReplyWrapper(qr)}
                                className="rounded-full border border-brand-400/40 bg-brand-500/15 px-3.5 py-1.5 text-xs font-medium text-brand-100 transition-all hover:bg-brand-500/30 hover:text-white"
                              >
                                {qr.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <span>{m.content}</span>
                    )}
                  </div>
                </motion.div>
              ))}

              {typing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex"
                >
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm border border-white/5 bg-white/[0.04] px-4 py-3">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        animate={{ y: [0, -4, 0] }}
                        transition={{
                          duration: 0.7,
                          repeat: Infinity,
                          delay: i * 0.15
                        }}
                        className="h-1.5 w-1.5 rounded-full bg-brand-400"
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-white/10 bg-ink-900/80 p-4 backdrop-blur">
              <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-1.5 focus-within:border-brand-400/60 focus-within:bg-white/[0.06]">
                <MessageSquare className="h-4 w-4 shrink-0 text-ink-400" />
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Escribe tu mensaje…"
                  className="flex-1 bg-transparent py-2 text-sm text-white outline-none placeholder:text-ink-400"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  aria-label="Enviar"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow transition-all hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
              <p className="mt-2 text-center text-[10px] text-ink-400">
                Asistente virtual de {SITE.shortName}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
