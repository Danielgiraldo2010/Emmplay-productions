import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Contact from "@/sections/Contact";

export const metadata: Metadata = {
  title: "Contacto y cotización",
  description: "Cotiza tu evento con Emmplay por formulario, WhatsApp o correo electrónico.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHero eyebrow="Contacto" title="HABLEMOS DE" highlight="TU PRÓXIMO EVENTO." description="Cuéntanos el formato, la ciudad y lo que tienes en mente. Te ayudaremos a organizar la solución técnica que necesitas." image="/images/emmplay/equipo.jpg" imageAlt="Equipo Emmplay preparado para una producción" imagePosition="center 38%" />
      <Contact />
    </>
  );
}
