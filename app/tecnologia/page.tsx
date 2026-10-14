import type { Metadata } from "next";
import Image from "next/image";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import Statement from "@/sections/Statement";

export const metadata: Metadata = {
  title: "Tecnología para eventos",
  description: "Tecnología profesional de audio, iluminación, video, broadcast y estructuras para producción de eventos.",
};

const capabilities = [
  { title: "Audio", copy: "Sistemas, consolas y monitoreo para una cobertura clara y controlada." },
  { title: "Iluminación", copy: "Equipos y control para construir ritmo, atmósfera y lectura escénica." },
  { title: "Video LED", copy: "Pantallas y distribución de imagen para escenarios y contenidos en vivo." },
  { title: "Control", copy: "Operación técnica centralizada para responder a cada momento del evento." },
  { title: "Broadcast", copy: "Captura multicámara y transmisión para ampliar la experiencia más allá del lugar." },
  { title: "Estructuras y energía", copy: "Soporte técnico para integrar tarimas, estructuras y alimentación eléctrica." },
];

export default function TecnologiaPage() {
  return (
    <>
      <PageHero eyebrow="Tecnología" title="EQUIPOS QUE" highlight="RESPONDEN EN VIVO." description="Seleccionamos e integramos la tecnología según la escala del espacio, el formato del evento y la experiencia que necesita el público." image="/images/emmplay/pantallas.jpg" imageAlt="Pantallas LED y tecnología visual durante una presentación" imagePosition="center 55%" />

      <Statement />

      <section className="bg-[var(--bg)] py-20 sm:py-24 lg:py-28">
        <div className="site-shell">
          <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_.72fr] lg:items-end">
            <div>
              <p className="eyebrow mb-5">Sistema completo</p>
              <h2 className="section-title">LA HERRAMIENTA CORRECTA PARA CADA PARTE DEL EVENTO.</h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-white/65 lg:justify-self-end">No se trata de sumar equipos: se trata de hacer que todos respondan como una sola producción.</p>
          </div>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <article key={item.title} className="min-h-[270px] bg-[var(--surface)] p-7 sm:p-9">
                <span className="block h-2 w-2 rounded-full bg-[var(--accent-soft)]" />
                <h3 className="mt-10 font-display text-2xl uppercase text-white">{item.title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-white/65">{item.copy}</p>
              </article>
            ))}
          </div>

          <div className="relative mt-4 min-h-[440px] overflow-hidden border border-white/10 sm:min-h-[560px]">
            <Image src="/images/emmplay/consola.jpg" alt="Control técnico durante una producción en vivo" fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-transparent" />
            <div className="absolute inset-x-7 bottom-8 max-w-xl sm:inset-x-10 sm:bottom-10">
              <p className="eyebrow mb-4">Tecnología + equipo humano</p>
              <p className="font-display text-2xl uppercase leading-tight text-white sm:text-4xl">EL EQUIPO ES IMPORTANTE. QUIEN LO PLANEA Y LO OPERA TAMBIÉN.</p>
            </div>
          </div>
        </div>
      </section>

      <PageCTA eyebrow="Cuéntanos qué necesita tu producción" />
    </>
  );
}
