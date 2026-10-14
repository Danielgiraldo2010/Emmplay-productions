import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, MessageCircle } from "lucide-react";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import { equipmentCategories } from "@/data/equipment";

export const metadata: Metadata = {
  title: "Equipos para eventos",
  description:
    "Explora el equipo de audio, iluminación, pantallas LED, tarimas, efectos y estructuras disponible para producciones Emmplay.",
};

export default function EquiposPage() {
  return (
    <>
      <PageHero
        eyebrow="Equipos"
        title="TECNOLOGÍA PARA"
        highlight="HACERLO REALIDAD."
        description="Una selección inicial de los sistemas que integramos en conciertos, eventos corporativos y producciones especiales. El montaje final se define según el lugar, la escala y la experiencia."
        image="/images/emmplay/consola.jpg"
        imageAlt="Control técnico de audio durante una producción de Emmplay"
        imagePosition="center 52%"
      />

      <nav aria-label="Categorías de equipos" className="border-y border-white/10 bg-[var(--surface)]">
        <div className="site-shell grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {equipmentCategories.map((category) => (
            <Link
              key={category.slug}
              href={`#${category.slug}`}
              className="group flex min-h-24 items-center justify-between gap-4 border-b border-white/10 py-5 transition-colors hover:bg-white/[.035] sm:px-5 sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(odd)]:border-r-0 lg:[&:not(:nth-child(3n))]:border-r xl:border-b-0 xl:[&:not(:last-child)]:border-r"
            >
              <span>
                <span className="block font-display text-sm uppercase text-white">{category.title}</span>
                <span className="mt-1 block text-xs text-white/45">{category.shortDescription}</span>
              </span>
              <ArrowDownRight size={17} className="shrink-0 text-[var(--accent-soft)] transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </Link>
          ))}
        </div>
      </nav>

      <main className="bg-[var(--bg)]">
        {equipmentCategories.map((category, categoryIndex) => (
          <section
            key={category.slug}
            id={category.slug}
            className={`py-20 sm:py-24 lg:py-28 ${categoryIndex % 2 === 1 ? "bg-[var(--surface)]" : "bg-[var(--bg)]"}`}
          >
            <div className="site-shell">
              <header className="mb-10 grid gap-5 lg:mb-14 lg:grid-cols-[1fr_.72fr] lg:items-end">
                <div>
                  <p className="eyebrow mb-4">{category.shortDescription}</p>
                  <h2 className="section-title">{category.title}</h2>
                </div>
                <p className="max-w-xl text-base leading-7 text-white/62 lg:justify-self-end">{category.description}</p>
              </header>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {category.items.map((item) => (
                  <article key={`${category.slug}-${item.name}`} className="group overflow-hidden border border-white/10 bg-[#050c12] transition-colors hover:border-[color:rgba(45,162,198,.4)]">
                    <div className={`relative aspect-[4/3] overflow-hidden ${item.imageFit === "contain" ? "bg-[#edf0f2]" : "bg-[#07121b]"}`}>
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className={`${item.imageFit === "contain" ? "object-contain p-5" : "object-cover"} transition-transform duration-700 group-hover:scale-[1.025]`}
                      />
                      {item.imageFit !== "contain" && <div className="absolute inset-0 bg-gradient-to-t from-[#03080c]/70 via-transparent to-transparent" />}
                      {item.reference && (
                        <span className="absolute bottom-4 left-4 bg-black/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.14em] text-white/70 backdrop-blur-sm">
                          Imagen de referencia
                        </span>
                      )}
                    </div>
                    <div className="p-6 sm:p-7">
                      {item.brand && <p className="text-xs font-semibold uppercase tracking-[.15em] text-[var(--accent-soft)]">{item.brand}</p>}
                      <h3 className="mt-3 font-display text-xl uppercase leading-tight text-white sm:text-2xl">{item.name}</h3>
                      <p className="mt-4 text-sm leading-6 text-white/58">{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-2xl text-sm leading-6 text-white/48">La disponibilidad y la configuración se confirman para la fecha, el recinto y las condiciones técnicas de cada producción.</p>
                <Link href={`https://wa.me/573116081380?text=${encodeURIComponent(`Hola Emmplay, quiero consultar disponibilidad de equipos de ${category.title.toLowerCase()}.`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-[.12em] text-white transition-colors hover:text-[var(--accent-soft)]">
                  <MessageCircle size={17} /> Consultar esta categoría
                </Link>
              </div>
            </div>
          </section>
        ))}
      </main>

      <PageCTA eyebrow="¿Qué necesita tu producción?" />
    </>
  );
}
