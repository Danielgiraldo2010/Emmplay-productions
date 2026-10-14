import type { Metadata } from "next";
import Image from "next/image";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Proyectos y experiencias",
  description: "Conoce la experiencia de Emmplay en conciertos, pantallas LED, iluminación y producción de eventos.",
};

const gallery = [
  { title: "Conciertos y festivales", copy: "Escenarios, público y operación técnica trabajando al mismo ritmo.", image: "/images/emmplay/escenario.jpg", alt: "Concierto producido con soporte técnico de Emmplay", className: "lg:col-span-7 lg:row-span-2 lg:min-h-[760px]" },
  { title: "Pantallas LED", copy: "Contenido e imagen presentes en cada momento del espectáculo.", image: "/images/emmplay/pantallas.jpg", alt: "Pantalla LED durante una presentación musical", className: "lg:col-span-5" },
  { title: "Iluminación escénica", copy: "Luz, movimiento y atmósfera para transformar el espacio.", image: "/images/emmplay/iluminacion.jpg", alt: "Iluminación escénica y artistas aéreos", className: "lg:col-span-5" },
  { title: "Operación en vivo", copy: "Control técnico atento a lo que ocurre dentro y fuera del escenario.", image: "/images/emmplay/consola.jpg", alt: "Consola y operación técnica de un evento", className: "lg:col-span-5" },
  { title: "Montaje coordinado", copy: "Personas, estructuras y equipos preparados para una misma ejecución.", image: "/images/emmplay/equipo.jpg", alt: "Equipo Emmplay durante un montaje", className: "lg:col-span-7" },
];

export default function ProyectosPage() {
  return (
    <>
      <PageHero eyebrow="Proyectos" title="ESCENARIOS QUE" highlight="HABLAN POR NOSOTROS." description="Una mirada a los espacios, equipos y momentos que forman parte de nuestras producciones." image="/images/emmplay/escenario.jpg" imageAlt="Escenario y público en un evento Emmplay" />

      <section className="bg-[var(--surface)] py-20 sm:py-24 lg:py-28">
        <div className="site-shell">
          <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_.72fr] lg:items-end">
            <div>
              <p className="eyebrow mb-5">Galería Emmplay</p>
              <h2 className="section-title">LA TÉCNICA SE VE. LA EXPERIENCIA SE SIENTE.</h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-white/65 lg:justify-self-end">No mostramos decoraciones genéricas: aquí la imagen tiene la escala, la energía y el equipo de una producción real.</p>
          </div>

          <div className="grid gap-4 lg:grid-cols-12">
            {gallery.map((item) => (
              <article key={item.title} className={`group relative min-h-[420px] overflow-hidden ${item.className}`}>
                <Image src={item.image} alt={item.alt} fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover transition-transform duration-1000 group-hover:scale-[1.035]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--accent-soft)]">Experiencia Emmplay</p>
                  <h3 className="font-display text-2xl uppercase text-white sm:text-3xl">{item.title}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-white/70 sm:text-base">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg)] py-14 sm:py-16">
        <div className="site-shell grid gap-7 lg:grid-cols-[.55fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow mb-3">Formatos que producimos</p>
            <p className="text-sm leading-6 text-white/55">Una solución técnica adaptada a la naturaleza de cada experiencia.</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            {["Conciertos y festivales", "Eventos corporativos", "Bodas y celebraciones", "Producciones especiales"].map((market) => (
              <div key={market} className="inline-flex items-center gap-3 rounded-full bg-white/[.055] px-5 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-white/75"><span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-soft)]" />{market}</div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA eyebrow="¿Tienes un formato diferente?" title="DISEÑAMOS LA PRODUCCIÓN ALREDEDOR DE TU IDEA." />
    </>
  );
}
