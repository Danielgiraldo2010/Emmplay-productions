"use client";

import { ArrowRight } from "lucide-react";
import type { FormEvent } from "react";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/data/site";
import { buildQuoteUrl } from "@/lib/quote";

const fieldClass = "mt-2 w-full min-w-0 rounded-sm border border-white/20 bg-[#02070c] px-4 py-3 text-base text-white placeholder:text-white/55 focus:border-[var(--accent-soft)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-soft)] [color-scheme:dark]";
const labelClass = "block min-w-0 text-xs font-medium text-white/75";

export default function QuoteForm() {
  const dateInput = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const today = new Date();
    if (dateInput.current) dateInput.current.min = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) ?? "").trim();
    window.location.assign(buildQuoteUrl(siteConfig.links.whatsapp, {
      name: value("name"), eventType: value("eventType"), date: value("date"),
      city: value("city"), attendees: value("attendees"), details: value("details"),
    }));
  }

  return (
    <form onSubmit={handleSubmit} aria-labelledby="quote-title" aria-describedby="quote-note" className="min-w-0 rounded-sm border border-white/15 bg-[#061019]/95 p-6 sm:p-8">
      <h3 id="quote-title" className="font-display text-2xl leading-tight text-white">Cuéntanos sobre tu evento</h3>
      <p className="mt-2 text-sm leading-6 text-white/65">Con estos datos podemos orientarte mejor. Los campos con * son obligatorios.</p>
      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>Tu nombre *
          <input name="name" autoComplete="name" required pattern=".*\S.*" maxLength={80} placeholder="¿Cómo te llamas?" className={fieldClass} />
        </label>
        <label className={labelClass}>Tipo de evento *
          <select name="eventType" required defaultValue="" className={fieldClass}>
            <option value="" disabled>Selecciona una opción</option>
            <option>Concierto / festival</option><option>Evento corporativo</option>
            <option>Boda / evento social</option><option>Otro</option>
          </select>
        </label>
        <label className={labelClass}>Fecha (si la tienes)
          <input ref={dateInput} name="date" type="date" className={fieldClass} />
        </label>
        <label className={labelClass}>Ciudad / lugar *
          <input name="city" autoComplete="address-level2" required pattern=".*\S.*" maxLength={120} placeholder="Ej. Medellín, Antioquia" className={fieldClass} />
        </label>
        <label className={`${labelClass} sm:col-span-2`}>Asistentes aproximados (opcional)
          <input name="attendees" type="number" min="1" max="1000000" step="1" inputMode="numeric" placeholder="Ej. 200" className={fieldClass} />
        </label>
        <label className={`${labelClass} sm:col-span-2`}>¿Qué necesitas? (opcional)
          <textarea name="details" rows={3} maxLength={1000} placeholder="Sonido, iluminación, pantallas… Cuéntanos tu idea." className={`${fieldClass} resize-y`} />
        </label>
      </div>
      <button type="submit" className="group mt-6 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-sm bg-[var(--accent)] px-4 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[var(--accent-dark)]">
        Continuar por WhatsApp <ArrowRight size={16} aria-hidden="true" className="shrink-0 transition-transform group-hover:translate-x-1" />
      </button>
      <p id="quote-note" className="mt-4 text-xs leading-5 text-white/65">Se abrirá WhatsApp con tu mensaje preparado. Tú lo revisas y lo envías. Este formulario no guarda tus datos ni envía mensajes automáticamente.</p>
      <noscript><p className="mt-3 text-sm text-white/75">Activa JavaScript para preparar el mensaje o <a href={siteConfig.links.whatsapp} className="underline">escríbenos directamente por WhatsApp</a>.</p></noscript>
    </form>
  );
}
