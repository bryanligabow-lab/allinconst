import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap"
});

export const metadata: Metadata = {
  title:
    "ALL-IN-CONSTRUCTIONS S.A.S. | Construcción, Obras Civiles e Infraestructura en Ecuador",
  description:
    "Empresa constructora ecuatoriana especializada en obras civiles, edificaciones, mantenimiento e infraestructura para proyectos públicos y privados. Velasco Ibarra, El Empalme - Guayas.",
  keywords: [
    "constructora ecuador",
    "obras civiles guayas",
    "all in constructions",
    "construcción el empalme",
    "infraestructura ecuador",
    "remodelaciones",
    "mantenimiento infraestructura"
  ],
  authors: [{ name: "ALL-IN-CONSTRUCTIONS S.A.S." }],
  openGraph: {
    title: "ALL-IN-CONSTRUCTIONS S.A.S.",
    description:
      "Construimos confianza, infraestructura y futuro. Soluciones profesionales en construcción para Ecuador.",
    type: "website",
    locale: "es_EC"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-ink-950 text-white selection:bg-brand-500/40">
        {children}
      </body>
    </html>
  );
}
