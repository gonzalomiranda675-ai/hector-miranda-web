"use client";

import { Building2, Banknote, RefreshCw } from "lucide-react";

const situations = [
  {
    icon: Building2,
    title: "Antes de adquirir un inmueble",
    description:
      "Cuando se necesita evaluar el desempeño real del activo, identificar riesgos de obsolescencia y determinar el CAPEX futuro antes de comprometer capital.",
    trigger: "Pre-adquisición",
  },
  {
    icon: Banknote,
    title: "Antes de solicitar financiamiento verde",
    description:
      "Cuando el activo o proyecto requiere demostrar elegibilidad para financiamiento verde y se necesita evaluar brechas, preparar evidencia y fortalecer la presentación.",
    trigger: "Pre-financiamiento",
  },
  {
    icon: RefreshCw,
    title: "Cuando un proyecto debe reformularse",
    description:
      "Cuando la tesis de capital no está alineada con criterios de financiamiento verde y se requiere replantear la lógica técnica, ambiental y económica del proyecto.",
    trigger: "Reformulación",
  },
];

export default function SituationsSection() {
  return (
    <section className="py-20 sm:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-brand-gold" />
            <span className="text-brand-green text-sm font-medium tracking-widest uppercase">
              Intervención
            </span>
            <div className="w-8 h-px bg-brand-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Situaciones en las que puede intervenir
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            La consultoría de Héctor Miranda se activa en tres momentos clave del ciclo
            de decisión sobre activos inmobiliarios.
          </p>
        </div>

        {/* Situations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {situations.map((situation, index) => (
            <article
              key={index}
              className="relative group bg-white rounded-2xl p-8 sm:p-10 border border-border/40 hover:border-brand-green/20 hover:shadow-xl transition-all duration-500"
            >
              {/* Step number */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center font-serif font-bold text-lg shadow-lg shadow-brand-green/20">
                {index + 1}
              </div>

              <div className="w-14 h-14 rounded-2xl bg-brand-green/8 flex items-center justify-center mb-6 group-hover:bg-brand-green/12 transition-colors">
                <situation.icon className="h-7 w-7 text-brand-green" />
              </div>

              <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                {situation.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {situation.description}
              </p>

              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-brand-green/8 text-brand-green text-xs font-medium tracking-wide uppercase">
                {situation.trigger}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
