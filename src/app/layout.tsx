import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Héctor Miranda | Consultoría Estratégica de Activos, Capital y Riesgo",
  description:
    "Advisor senior para decisiones vinculadas a inversión inmobiliaria, activos reales, financiamiento verde y reformulación estratégica de proyectos. Due diligence verde, preparación de activos y consultoría ESG para directorios e inversionistas en América Latina.",
  keywords: [
    "consultoría estratégica inmobiliaria",
    "due diligence verde",
    "financiamiento verde inmobiliario",
    "activos reales",
    "inversión inmobiliaria",
    "CAPEX",
    "ESG real estate",
    "asesor inmobiliario estratégico",
    "sostenibilidad para inversionistas",
    "green finance Perú",
    "Héctor Miranda",
    "LEED",
    "GRESB",
    "Net Zero",
    "descarbonización inmobiliaria",
  ],
  authors: [{ name: "Héctor Miranda" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Héctor Miranda | Consultoría Estratégica de Activos, Capital y Riesgo",
    description:
      "Advisor senior para decisiones vinculadas a inversión inmobiliaria, activos reales, financiamiento verde y reformulación estratégica de proyectos en América Latina.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Héctor Miranda | Consultoría Estratégica de Activos, Capital y Riesgo",
    description:
      "Advisor senior para decisiones vinculadas a inversión inmobiliaria, activos reales, financiamiento verde y reformulación estratégica de proyectos.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://hectormiranda.com/#person",
        name: "Héctor Miranda",
        jobTitle: "Estratega en Activos Inmobiliarios, Sostenibilidad y Descarbonización",
        description:
          "Estratega en activos inmobiliarios, sostenibilidad y descarbonización con cerca de 20 años de experiencia en América Latina y participación en más de 200 proyectos LEED.",
        knowsAbout: [
          "Due Diligence Verde",
          "Financiamiento Verde",
          "Activos Inmobiliarios",
          "ESG Real Estate",
          "LEED",
          "GRESB",
          "Net Zero",
          "CAPEX",
          "Descarbonización",
        ],
        worksFor: {
          "@type": "Organization",
          name: "Héctor Miranda - Advisory Independiente",
        },
        founderOf: {
          "@type": "Organization",
          name: "Peru Green Building Council",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://hectormiranda.com/#service",
        name: "Héctor Miranda - Consultoría Estratégica de Activos, Capital y Riesgo",
        description:
          "Consultoría estratégica enfocada en due diligence verde, preparación de activos para financiamiento verde y reformulación estratégica de proyectos para directorios e inversionistas.",
        serviceType: [
          "Due Diligence Verde para Adquisiciones Inmobiliarias",
          "Preparación de Activos para Financiamiento Verde",
          "Reformulación Estratégica de Proyectos para Financiamiento Verde",
        ],
        areaServed: "América Latina",
        provider: {
          "@type": "Person",
          name: "Héctor Miranda",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://hectormiranda.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Qué es una Due Diligence Verde?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Es una evaluación estratégica previa a la adquisición de un activo inmobiliario que identifica riesgos de desempeño, obsolescencia, sostenibilidad y CAPEX futuro que puedan afectar la tesis de inversión. Va más allá de la revisión técnica convencional al incorporar criterios de desempeño ambiental, regulatorio y de mercado.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cómo saber si un activo está preparado para financiamiento verde?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Un activo está preparado cuando cuenta con evidencia documentada de desempeño ambiental, cumple con criterios de elegibilidad de los financiadores, ha identificado y mitigado brechas de sostenibilidad, y presenta una narrativa técnica y económica coherente alineada con estándares de financiamiento verde.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuándo conviene reformular un proyecto para financiamiento verde?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Conviene reformular un proyecto cuando la tesis de capital no está alineada con los criterios de financiamiento verde disponibles, cuando se requiere fortalecer la lógica técnica, ambiental o económica del proyecto, o cuando se busca acceder a mejores condiciones de financiamiento vinculadas a desempeño sostenible.",
            },
          },
          {
            "@type": "Question",
            name: "¿Qué aporta un advisor estratégico a un directorio o inversionista?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Un advisor estratégico aporta criterio independiente, análisis de riesgo especializado, traducción de complejidad técnica en decisiones de negocio, y una perspectiva senior que conecta desempeño de activos, ESG, capital y riesgo. Ayuda a proteger decisiones de inversión, reducir incertidumbre y fortalecer el valor estratégico de los activos.",
            },
          },
          {
            "@type": "Question",
            name: "¿Quién es Héctor Miranda?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Héctor Miranda es estratega en activos inmobiliarios, sostenibilidad y descarbonización con cerca de 20 años de experiencia en América Latina y participación en más de 200 proyectos LEED. Es fundador y ex CEO del Peru Green Building Council, primer GRESB AP del Perú, y ha participado en foros como APEC, World Green Building Council e ISCN.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
