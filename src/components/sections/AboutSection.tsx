"use client";

import { Award, Globe, Leaf, Zap } from "lucide-react";

const highlights = [
  {
    icon: Globe,
    text: "Experiencia regional en América Latina",
  },
  {
    icon: Award,
    text: "Liderazgo de Regenerativa",
  },
  {
    icon: Leaf,
    text: "Participación en APEC, World Green Building Council e ISCN",
  },
  {
    icon: Zap,
    text: "Experiencia en LEED, GRESB, Net Zero y transformación de portafolios",
  },
];

export default function AboutSection() {
  return (
    <section id="sobre-hector" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="lg:w-5/12 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/about-bg.png"
                alt="Oficina ejecutiva con vista a la ciudad"
                className="w-full h-[400px] sm:h-[480px] lg:h-[560px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/20 via-transparent to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-brand-gold/30 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-green/5 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="lg:w-7/12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-brand-gold" />
              <span className="text-brand-green text-sm font-medium tracking-widest uppercase">
                Sobre Héctor Miranda
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              Criterio senior que conecta real estate, desempeño de activos, ESG, capital y riesgo
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Héctor Miranda</strong> es estratega en activos inmobiliarios,
                sostenibilidad y descarbonización con cerca de <strong className="text-foreground">20 años de experiencia
                en América Latina</strong> y participación en más de <strong className="text-foreground">200 proyectos LEED</strong>.
                Es fundador y ex CEO del Peru Green Building Council y primer GRESB AP del Perú.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Su experiencia conecta real estate, desempeño de activos, ESG, capital y riesgo
                para apoyar decisiones de propietarios, inversionistas y directorios. Con capacidad
                de traducir complejidad técnica en decisiones de negocio, ha participado en foros
                internacionales como APEC, World Green Building Council e ISCN, y lidera iniciativas
                en descarbonización de portafolios y transformación hacia Net Zero.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-brand-cream/60">
                  <div className="w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="h-4 w-4 text-brand-green" />
                  </div>
                  <span className="text-sm text-foreground/80 leading-snug">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
