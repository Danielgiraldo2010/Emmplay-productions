"use client";

import { motion } from "framer-motion";
import { clients } from "@/data/site";

export default function Clients() {
  const doubled = [...clients, ...clients];

  return (
    <section id="clients" className="py-36 bg-[var(--surface)] overflow-hidden">

      <div className="max-w-[1440px] mx-auto px-8 md:px-16 mb-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-[11px] font-medium tracking-[0.3em] uppercase text-white/25 text-center"
        >
          Marcas que confían en nosotros
        </motion.p>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[var(--surface)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[var(--surface)] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex items-center whitespace-nowrap"
        >
          {doubled.map((client, i) => (
            <span key={i} className="inline-flex items-center">
              <span className="font-display text-[clamp(32px,4vw,52px)] tracking-[0.04em] text-white/15 hover:text-white/40 transition-colors duration-500 px-10">
                {client}
              </span>
              <span className="text-[var(--accent)] opacity-30 text-sm">·</span>
            </span>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
