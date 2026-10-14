import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionPreferences from "@/components/MotionPreferences";

export const metadata: Metadata = {
  metadataBase: new URL("https://emmplay.com"),
  title: {
    default: "Emmplay Producciones — Eventos inolvidables",
    template: "%s | Emmplay",
  },
  description:
    "Emmplay ofrece producción técnica de eventos, conciertos, corporativos y bodas con operación en Colombia y Estados Unidos.",
  keywords: [
    "producción de eventos",
    "live production",
    "touring",
    "festivales",
    "conciertos",
    "producción audiovisual",
    "stage design",
    "broadcast",
    "Colombia",
    "Medellín",
    "Latinoamérica",
  ],
  authors: [{ name: "Emmplay", url: "https://emmplay.com" }],
  creator: "Emmplay",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://emmplay.com",
    siteName: "Emmplay",
    title: "Emmplay Producciones — Eventos inolvidables",
    description:
      "Producción técnica de eventos, conciertos, corporativos y bodas en Colombia y Estados Unidos.",
    images: [{ url: "/logoemmplay.png", width: 372, height: 286, alt: "Emmplay Producciones" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmplay Producciones — Eventos inolvidables",
    description: "Eventos que crean experiencias inolvidables.",
    images: ["/logoemmplay.png"],
  },
  icons: {
    icon: "/logoemmplay.png",
    apple: "/logoemmplay.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full" data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--fg)] antialiased">
        <a href="#main-content" className="skip-link">Ir al contenido</a>
        <MotionPreferences>
          <Navbar />
          <main id="main-content" tabIndex={-1} className="flex-1">{children}</main>
          <Footer />
        </MotionPreferences>
      </body>
    </html>
  );
}
