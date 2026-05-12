import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://emmplay.com"),
  title: {
    default: "Emmplay — Live Production. Global Scale.",
    template: "%s | Emmplay",
  },
  description:
    "Emmplay es una empresa de producción de eventos masivos, touring y contenido audiovisual de escala internacional. Festivales, conciertos, giras y experiencias de marca desde Colombia para el mundo.",
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
    title: "Emmplay — Live Production. Global Scale.",
    description:
      "Producción de eventos masivos, touring y experiencias audiovisuales de escala internacional.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Emmplay" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmplay — Live Production. Global Scale.",
    description: "We build the moment.",
    images: ["/og-image.jpg"],
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
    <html lang="es" className="h-full">
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--fg)] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
