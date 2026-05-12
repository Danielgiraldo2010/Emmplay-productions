"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { clients, testimonials } from "@/data/site";

export default function Statement() {
  const quote = testimonials[1]; // el más impactante
  const doubled = [...clients, ...clients];

  return (
    <>
      {/* ── Fullscreen quote + image ── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=85&auto=format&fit=crop"
          alt="Live event"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        {/* Cyan glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.1] pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 100% at 50% 0%, #00aeef, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-8 md:px-16 pb-24 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-display text-[clamp(28px,4vw,60px)] leading-[1.08] text-white tracking-[0.01em] max-w-4xl mb-12">
              &ldquo;{quote.quote}&rdquo;
            </p>
            <div>
              <p className="text-[14px] font-medium text-white/70">{quote.author}</p>
              <p className="text-[11px] tracking-[0.2em] uppercase text-[var(--accent)] mt-1 opacity-70">{quote.role}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Clients marquee — integrado, sin sección separada ── */}
      <div className="py-20 bg-[var(--bg)] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-white/20 text-center"
          >
            Marcas que confían en nosotros
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--bg)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--bg)] to-transparent z-10 pointer-events-none" />
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="flex items-center whitespace-nowrap"
          >
            {doubled.map((client, i) => (
              <span key={i} className="inline-flex items-center">
                <span className="font-display text-[clamp(28px,3.5vw,44px)] tracking-[0.04em] text-white/10 hover:text-white/30 transition-colors duration-500 px-10">
                  {client}
                </span>
                <span className="text-[var(--accent)] opacity-20 text-xs">·</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
