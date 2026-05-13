"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { clients, testimonials } from "@/data/site";

export default function Statement() {
  const quote = testimonials[0]; // Presidencia de la República
  const doubled = [...clients, ...clients];

  return (
    <>
      {/* Fullscreen quote */}
      <section className="relative min-h-[65vh] sm:min-h-screen flex flex-col justify-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=90&auto=format&fit=crop"
          alt="Emmplay live event"
          fill
          className="object-cover object-center brightness-[0.5]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-black/15" />

        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[40vh] opacity-[0.08] pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 100% at 50% 0%, #00aeef, transparent 65%)" }}
        />

        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-8 sm:px-12 md:px-20 pb-14 sm:pb-24 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-display text-[clamp(22px,3.8vw,56px)] leading-[1.1] text-white tracking-[0.01em] max-w-4xl mb-8 sm:mb-12">
              &ldquo;{quote.quote}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-5 h-px bg-[var(--accent)] opacity-50" />
              <div>
                <p className="text-[12px] sm:text-[13px] font-medium text-white/55">{quote.author}</p>
                <p className="text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[var(--accent)] mt-0.5 opacity-55">{quote.role}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted by — clientes reales */}
      <div className="py-14 sm:py-20 bg-[var(--bg)] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8 sm:px-12 md:px-20 mb-8 sm:mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-[10px] sm:text-[11px] font-medium tracking-[0.38em] uppercase text-white/18 text-center"
          >
            Trusted by
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[var(--bg)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[var(--bg)] to-transparent z-10 pointer-events-none" />
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
            className="flex items-center whitespace-nowrap"
          >
            {doubled.map((client, i) => (
              <span key={i} className="inline-flex items-center">
                <span className="font-display text-[clamp(18px,2.8vw,36px)] tracking-[0.05em] text-white/[0.09] hover:text-white/28 transition-colors duration-500 px-6 sm:px-10">
                  {client}
                </span>
                <span className="text-[var(--accent)] opacity-15 text-xs">·</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
