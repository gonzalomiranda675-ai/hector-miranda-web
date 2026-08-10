"use client";

import { Shield, TrendingUp, Eye, Target } from "lucide-react";

const valueProps = [
  {
    icon: Shield,
    title: "Proteger decisiones de inversión",
    description:
      "Identificar riesgos ocultos de desempeño, obsolescencia y CAPEX futuro antes de comprometer capital.",
  },
  {
    icon: TrendingUp,
    title: "Mejorar preparación para capital",
    description:
      "Evaluar y fortalecer la elegibilidad de activos frente a criterios de financiamiento verde disponibles.",
  },
  {
    icon: Eye,
    title: "Reducir incertidumbre",
    description:
      "Traducir complejidad técnica y regulatoria en información clara para decisiones de negocio.",
  },
  {
    icon: Target,
    title: "Fortalecer el valor estratégico",
    description:
      "Posicionar activos con una narrativa sólida de desempeño, sostenibilidad y retorno de capital.",
  },
];

export default function ValuePropSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            ¿Por qué contar con un advisor estratégico?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            En un entorno donde el capital busca activos con desempeño demostrable,
            la evaluación independiente marca la diferencia entre una decisión acertada
            y una exposición no identificada.
          </p>
        </div>

        {/* Value props grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {valueProps.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-8 rounded-2xl border border-border/60 hover:border-brand-green/20 bg-background hover:bg-brand-cream transition-all duration-500 hover:shadow-lg hover:shadow-brand-green/5"
            >
              {/* Gold accent line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-brand-gold/0 group-hover:bg-brand-gold/60 transition-all duration-500" />

              <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center mb-5 group-hover:bg-brand-green/15 transition-colors">
                <item.icon className="h-6 w-6 text-brand-green" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
