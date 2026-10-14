import type { Metadata } from "next";
import Image from "next/image";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import { stats } from "@/data/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce el equipo y la forma de trabajo de Emmplay Producciones en Colombia y Estados Unidos.",
};

const principles = [
  { title: "Planeación cercana", copy: "Conversamos, preguntamos y organizamos cada frente antes de llegar al montaje." },
  { title: "Criterio técnico", copy: "Cada decisión responde al espacio, al formato y a la experiencia que se quiere crear." },
  { title: "Trabajo coordinado", copy: "Unimos operación, equipos y tiempos para que la producción avance con claridad." },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero eyebrow="Nosotros" title="PERSONAS, TÉCNICA" highlight="Y EXPERIENCIA." description="Somos un equipo de producción que acompaña cada evento desde la planeación hasta el último minuto de operación." image="/images/emmplay/equipo.jpg" imageAlt="Equipo de Emmplay durante el montaje de un evento" imagePosition="center 38%" />

      <section className="bg-[var(--bg)] py-20 sm:py-24 lg:py-28">
        <div className="site-shell grid gap-4 lg:grid-cols-2">
          <div className="flex flex-col border border-white/10 bg-[var(--surface)] p-7 sm:p-10 lg:min-h-[560px] lg:p-12">
            <p className="eyebrow mb-5">Emmplay Producciones</p>
            <h2 className="section-title">HACEMOS QUE LO COMPLEJO SE SIENTA BIEN COORDINADO.</h2>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/65">Acompañamos conciertos, eventos corporativos, celebraciones y producciones especiales con una mirada integral. La tecnología importa, pero la diferencia está en cómo el equipo la planea y la opera.</p>
            <div className="mt-auto grid grid-cols-3 gap-4 border-t border-white/10 pt-8 lg:mt-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-[clamp(1.3rem,2.6vw,2.6rem)] text-white">{stat.value}</p>
                  <p className="mt-2 text-[10px] uppercase leading-5 tracking-[0.08em] text-white/55">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[430px] overflow-hidden border border-white/10 lg:min-h-[560px]">
            <Image src="/images/emmplay/consola.jpg" alt="Equipo y operación técnica durante un evento" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
            <p className="absolute inset-x-7 bottom-7 max-w-md border-t border-white/25 pt-5 text-sm leading-7 text-white/75 sm:inset-x-10 sm:bottom-10">Experiencia técnica, comunicación directa y una ejecución pensada para que el cliente pueda concentrarse en su evento.</p>
          </div>
        </div>
      </section>

      <section className="grid-fade border-y border-white/10 bg-[var(--surface)] py-20 sm:py-24">
        <div className="site-shell">
          <p className="eyebrow mb-5">Nuestra forma de trabajar</p>
          <h2 className="section-title max-w-3xl">UN EQUIPO PRESENTE ANTES, DURANTE Y DESPUÉS.</h2>
          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-3">
            {principles.map((item) => (
              <article key={item.title} className="bg-[var(--bg)] p-7 sm:p-9">
                <span className="block h-2 w-2 rounded-full bg-[var(--accent-soft)]" />
                <h3 className="mt-8 font-display text-2xl uppercase text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">{item.copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-4 flex flex-col justify-between gap-4 border border-white/10 bg-[var(--bg)] p-7 sm:flex-row sm:items-center sm:p-9">
            <p className="font-display text-2xl uppercase text-white">Colombia · Estados Unidos</p>
            <p className="max-w-xl text-sm leading-7 text-white/60">Cobertura para producciones que necesitan el mismo cuidado técnico en distintos escenarios.</p>
          </div>
        </div>
      </section>

      <PageCTA eyebrow="Conoce cómo podemos acompañarte" />
    </>
  );
}
