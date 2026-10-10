"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  { title: "Conciertos", subtitle: "Sonido, escenario y público", image: "/images/emmplay/escenario.jpg", alt: "Concierto con escenario cubierto y pantallas laterales", position: "center" },
  { title: "Pantallas LED", subtitle: "Imagen que acompaña cada presentación", image: "/images/emmplay/pantallas.jpg", alt: "Presentación musical frente a una pantalla LED curva", position: "center 55%" },
  { title: "Iluminación", subtitle: "Luz y atmósfera para el espectáculo", image: "/images/emmplay/iluminacion.jpg", alt: "Espectáculo con artistas aéreos e iluminación escénica", position: "center" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[var(--surface)] pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28">
      <div className="site-shell">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-[700px]">
            <p className="eyebrow mb-5">Galería Emmplay</p>
            <h2 className="section-title">PRODUCIMOS MOMENTOS QUE CONECTAN.</h2>
          </div>
          <p className="max-w-xs text-base leading-7 text-white/65">Escenarios reales. Experiencias que hablan por nuestro trabajo.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article key={project.title} initial={{ y: 16 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} className="group flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-sm">
                <Image src={project.image} alt={project.alt} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectPosition: project.position }} className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              </div>
              <div className="flex-1 border-x border-b border-white/10 px-5 py-5">
                <h3 className="font-display text-2xl leading-tight text-white sm:text-[1.75rem]">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/65 sm:text-base">{project.subtitle}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
