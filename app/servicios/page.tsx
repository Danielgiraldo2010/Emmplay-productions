import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Servicios de producción técnica",
  description: "Audio, iluminación, pantallas LED, transmisiones y estructuras para eventos en Colombia y Estados Unidos.",
};

const process = [
  { title: "Escuchamos", copy: "Entendemos el formato, el público, el espacio y la intención del evento." },
  { title: "Diseñamos", copy: "Integramos sonido, luz, video y estructura en una propuesta técnica coherente." },
  { title: "Ejecutamos", copy: "Coordinamos montaje y operación para que cada parte trabaje como una sola." },
];

export default function ServiciosPage() {
  return (
    <>
      <PageHero eyebrow="Servicios" title="PRODUCCIÓN TÉCNICA" highlight="SIN PUNTOS CIEGOS." description="Un solo equipo para integrar sonido, iluminación, video, transmisión y estructuras en eventos de cualquier escala." image="/images/emmplay/consola.jpg" imageAlt="Operación técnica de un evento Emmplay" />

      <section className="bg-[var(--bg)] py-20 sm:py-24 lg:py-28">
        <div className="site-shell">
          <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_.75fr] lg:items-end">
            <div>
              <p className="eyebrow mb-5">Soluciones integrales</p>
              <h2 className="section-title">TODO LO NECESARIO PARA QUE LA EXPERIENCIA FUNCIONE.</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-white/65 lg:justify-self-end">Puedes contratar una solución específica o construir con nosotros la producción técnica completa de tu evento.</p>
          </div>

          <div className="grid border-l border-t border-white/10 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.id} className="group flex min-h-[330px] flex-col border-b border-r border-white/10 bg-[var(--surface)] p-7 transition-colors hover:bg-[var(--surface-2)] sm:p-9">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--accent-soft)]">Servicio Emmplay</span>
                  <Link href={`https://wa.me/573116081380?text=${encodeURIComponent(`Hola Emmplay, quiero cotizar ${service.title.toLowerCase()} para un evento.`)}`} target="_blank" rel="noopener noreferrer" aria-label={`Cotizar ${service.title}`} className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-colors group-hover:border-[var(--accent-soft)] group-hover:text-[var(--accent-soft)]"><ArrowUpRight size={17} /></Link>
                </div>
                <div className="mt-auto pt-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.13em] text-white/45">{service.tag}</p>
                  <h3 className="mt-3 font-display text-2xl uppercase text-white sm:text-3xl">{service.title}</h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-white/65">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid-fade border-y border-white/10 bg-[var(--surface)] py-20 sm:py-24">
        <div className="site-shell">
          <p className="eyebrow mb-5">Cómo trabajamos</p>
          <h2 className="section-title max-w-3xl">DE LA IDEA A LA OPERACIÓN, SIN PERDER EL HILO.</h2>
          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-3">
            {process.map((step) => (
              <article key={step.title} className="bg-[var(--bg)] p-7 sm:p-9">
                <span className="block h-2 w-2 rounded-full bg-[var(--accent-soft)]" />
                <h3 className="mt-8 font-display text-2xl uppercase text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
    </>
  );
}
