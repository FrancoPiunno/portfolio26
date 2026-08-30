import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const neueBerlin = localFont({
  src: [
    {
      path: "../public/fonts/neue-berlin/AFNEUEBERLIN-THIN.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-berlin/AFNEUEBERLIN-THINITALIC.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/neue-berlin/AFNEUEBERLIN-EXTRALIGHT.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-berlin/AFNEUEBERLIN-EXTRALIGHTITALIC.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/fonts/neue-berlin/AFNEUEBERLIN-LIGHT.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-berlin/AFNEUEBERLIN-LIGHTITALIC.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/neue-berlin/AFNEUEBERLIN-REGULAR.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-berlin/AFNEUEBERLIN-ITALIC.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/neue-berlin/AFNEUEBERLIN-MEDIUM.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-berlin/AFNEUEBERLIN-MEDIUMITALIC.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/neue-berlin/AFNEUEBERLIN-SEMIBOLD.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-berlin/AFNEUEBERLIN-SEMIBOLDITALIC.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/neue-berlin/AFNEUEBERLIN-BOLD.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-berlin/AFNEUEBERLIN-BOLDITALIC.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/neue-berlin/AFNEUEBERLIN-EXTRABOLD.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-berlin/AFNEUEBERLIN-EXTRABOLDITALIC.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/neue-berlin/AFNEUEBERLIN-BLACK.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-berlin/AFNEUEBERLIN-BLACKITALIC.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-neue-berlin",
  display: "swap",
});

import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://francopiunno.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "fran.",
  description:
    "Franco Piunno — Arquitecto Digital. Centralizo diseño UI/UX, código full-stack, producción audiovisual y estrategias de adquisición bajo una sola visión de negocio de alto impacto.",
  keywords: [
    "Franco Piunno",
    "Arquitecto Digital",
    "Diseñador Web Argentina",
    "Desarrollador Web",
    "Full Stack Developer",
    "Diseño UI UX",
    "Dirección de Arte",
    "Branding",
    "Marketing Digital",
    "Producción Audiovisual",
    "Portafolio Digital",
  ],
  authors: [{ name: "Franco Piunno", url: baseUrl }],
  creator: "Franco Piunno",
  publisher: "Franco Piunno",
  applicationName: "Franco Piunno Portfolio",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: baseUrl,
    siteName: "Franco Piunno — Arquitecto Digital",
    title: "Franco Piunno | Arquitecto Digital",
    description:
      "Diseño, código, video y estrategia de adquisición centralizados bajo una sola visión estratégica.",
    images: [
      {
        url: "/webicon.png",
        width: 512,
        height: 512,
        alt: "Franco Piunno — Arquitecto Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Franco Piunno | Arquitecto Digital",
    description:
      "Diseño, código, video y estrategia de adquisición centralizados bajo una sola visión estratégica.",
    images: ["/webicon.png"],
    creator: "@francopiunno",
  },
  icons: {
    icon: [
      { url: "/webicon.png" },
      { url: "/icon.png" },
    ],
    shortcut: "/webicon.png",
    apple: "/webicon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        name: "Franco Piunno",
        alternateName: "fran.",
        jobTitle: "Arquitecto Digital",
        description:
          "Especialista en integración de diseño UI/UX, arquitectura de software, video y adquisición digital orientada a conversión de negocio.",
        url: baseUrl,
        image: `${baseUrl}/images/hero-franco.jpg`,
        sameAs: [
          "https://www.instagram.com/franpi1_/",
          "https://www.behance.net/francopiunno",
          "https://www.linkedin.com/in/franco-piunno/",
        ],
        knowsAbout: [
          "Diseño UI/UX",
          "Desarrollo Web Full-Stack",
          "Arquitectura de Software",
          "Estrategia de Adquisición",
          "Dirección Creativa",
          "Branding",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${baseUrl}/#service`,
        name: "Franco Piunno — Servicios Digitales",
        url: baseUrl,
        provider: {
          "@id": `${baseUrl}/#person`,
        },
        description:
          "Servicios profesionales integrales de estrategia, dirección técnica, ejecución y optimización para productos digitales.",
        areaServed: {
          "@type": "Country",
          name: "Worldwide",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios Digitales",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Estrategia y Diagnóstico Digital",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Diseño de Interfaces y UI/UX",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Desarrollo y Programación Web",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Marketing y Optimización de Conversión",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Franco Piunno | Arquitecto Digital",
        description: "Portafolio y servicios de Franco Piunno — Arquitecto Digital.",
        inLanguage: "es-AR",
        publisher: {
          "@id": `${baseUrl}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="es" className={`${neueBerlin.variable} ${neueBerlin.className}`}>
      <head>
        <link rel="icon" href="/webicon.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/webicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/webicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="subpixel-antialiased relative">
        <CustomCursor />
        <div className="grain-overlay" aria-hidden="true" />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
