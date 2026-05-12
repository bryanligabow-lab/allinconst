"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SITE, whatsappLink } from "@/lib/utils";

const projectTypes = [
  "Construcción de edificación",
  "Obra civil",
  "Mantenimiento",
  "Remodelación",
  "Diseño y planificación",
  "Supervisión técnica",
  "Otro"
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    type: projectTypes[0],
    message: ""
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Hola, soy ${form.name}. Quiero solicitar info sobre: ${form.type}. ${form.message ? "Detalles: " + form.message : ""} Tel: ${form.phone} | Email: ${form.email}`;
    window.open(whatsappLink(text), "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const update = (k: keyof typeof form) => (e: any) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section id="contacto" className="section relative overflow-hidden">
      <div className="absolute -z-10 left-0 top-0 h-full w-1/2 bg-gradient-to-br from-brand-900/30 to-transparent" />

      <div className="container-x">
        <SectionTitle
          eyebrow="Contacto"
          title="Conversemos sobre"
          highlight="tu próximo proyecto."
          description="Cuéntanos qué necesitas. Te responderemos con una propuesta clara, técnica y a tiempo."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-700 via-brand-800 to-ink-900 p-8 sm:p-10">
              <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-brand-400/30 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-brand-500/20 blur-3xl" />
              <div className="relative">
                <h3 className="font-display text-2xl font-bold text-white">
                  Información de contacto
                </h3>
                <p className="mt-2 text-sm text-ink-200">
                  Atendemos cotizaciones para proyectos públicos y privados en
                  todo el Ecuador.
                </p>

                <div className="mt-8 space-y-5">
                  {[
                    {
                      icon: MapPin,
                      label: "Ubicación",
                      value: SITE.location
                    },
                    {
                      icon: Phone,
                      label: "Teléfono",
                      value: SITE.phone,
                      href: `tel:${SITE.phone.replace(/\s/g, "")}`
                    },
                    {
                      icon: Mail,
                      label: "Correo",
                      value: SITE.email,
                      href: `mailto:${SITE.email}`
                    },
                    {
                      icon: Clock,
                      label: "Horarios",
                      value: SITE.hours
                    }
                  ].map((it) => (
                    <div key={it.label} className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
                        <it.icon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-200">
                          {it.label}
                        </div>
                        {it.href ? (
                          <a
                            href={it.href}
                            className="mt-0.5 block text-sm font-medium text-white hover:text-brand-200"
                          >
                            {it.value}
                          </a>
                        ) : (
                          <div className="mt-0.5 text-sm font-medium text-white">
                            {it.value}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href={whatsappLink("Hola, quiero solicitar una cotización.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white hover:text-brand-700"
                >
                  <MessageCircle className="h-4 w-4" />
                  Escríbenos por WhatsApp
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="mt-6 overflow-hidden rounded-3xl border border-white/10">
              <iframe
                src="https://www.google.com/maps?q=El+Empalme,+Guayas,+Ecuador&output=embed"
                width="100%"
                height="240"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación ALL-IN-CONSTRUCTIONS"
                className="grayscale contrast-125 brightness-75 hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* Form column */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl border border-white/10 bg-ink-900/50 p-8 sm:p-10 backdrop-blur-xl">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nombre completo" required>
                  <input
                    required
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Tu nombre"
                    className="input"
                  />
                </Field>
                <Field label="Teléfono" required>
                  <input
                    required
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="+593 ..."
                    className="input"
                  />
                </Field>
                <Field label="Correo electrónico" required>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="tu@correo.com"
                    className="input"
                  />
                </Field>
                <Field label="Tipo de proyecto" required>
                  <select
                    required
                    value={form.type}
                    onChange={update("type")}
                    className="input appearance-none"
                  >
                    {projectTypes.map((p) => (
                      <option key={p} value={p} className="bg-ink-900">
                        {p}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Cuéntanos sobre tu proyecto">
                  <textarea
                    value={form.message}
                    onChange={update("message")}
                    rows={5}
                    placeholder="Ubicación, dimensiones, plazos…"
                    className="input resize-none"
                  />
                </Field>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-ink-300">
                  Al enviar aceptas que te contactemos sobre tu proyecto.
                </p>
                <Button
                  type="submit"
                  size="lg"
                  iconRight={<Send className="h-4 w-4" />}
                >
                  {sent ? "Enviado ✓" : "Enviar solicitud"}
                </Button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>

      <style jsx>{`
        :global(.input) {
          width: 100%;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.04);
          padding: 12px 16px;
          color: #fff;
          font-size: 14px;
          outline: none;
          transition: all 0.2s;
        }
        :global(.input:focus) {
          border-color: rgba(93, 128, 255, 0.6);
          background: rgba(255, 255, 255, 0.06);
          box-shadow: 0 0 0 4px rgba(47, 87, 245, 0.15);
        }
        :global(.input::placeholder) {
          color: rgba(255, 255, 255, 0.35);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  required,
  children
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-ink-300">
        {label} {required && <span className="text-brand-400">*</span>}
      </span>
      {children}
    </label>
  );
}
