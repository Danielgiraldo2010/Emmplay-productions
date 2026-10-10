import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import QuoteForm from "@/components/QuoteForm";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <Image src="/images/emmplay/escenario.jpg" alt="Escenario con pantallas y público, publicado en la web de Emmplay" fill sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,7,12,.94),rgba(2,7,12,.7),rgba(2,7,12,.38))]" />
      <div className="site-shell relative z-10 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
        <div className="max-w-[640px]">
          <p className="eyebrow mb-5">Tu próximo evento empieza aquí</p>
          <h2 className="section-title">HAGAMOS ALGO INOLVIDABLE.</h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-white/70">Cuéntanos qué tienes en mente y nuestro equipo te ayudará a convertirlo en una experiencia real.</p>
          <div className="mt-8 flex max-w-sm flex-col gap-3">
            <p className="text-sm font-medium text-white/80">¿Prefieres hablar directamente?</p>
            <Link href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer" className="group flex min-h-12 items-center gap-3 rounded-sm border border-[var(--accent-soft)]/45 bg-[#061019]/85 px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-[var(--accent-soft)] hover:bg-[#091722]">
              <MessageCircle size={19} aria-hidden="true" className="shrink-0 text-[var(--accent-soft)]" /> Escríbenos por WhatsApp <ArrowUpRight size={16} aria-hidden="true" className="ml-auto shrink-0 text-[var(--accent-soft)]" />
            </Link>
            <Link href={`mailto:${siteConfig.contact.email}`} className="flex min-h-12 items-center gap-3 rounded-sm border border-white/20 bg-[#061019]/85 px-4 py-3 text-sm font-medium text-white/90 transition-colors hover:border-[var(--accent-soft)] hover:text-white"><Mail size={18} aria-hidden="true" className="shrink-0 text-[var(--accent-soft)]" /> {siteConfig.contact.email}</Link>
          </div>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}
