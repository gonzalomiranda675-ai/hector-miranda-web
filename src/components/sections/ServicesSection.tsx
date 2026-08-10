"use client";

import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "due-diligence",
    title: "Due Diligence Verde para Adquisiciones Inmobiliarias",
    description:
      "Evaluación estratégica previa a la adquisición para identificar riesgos de desempeño, obsolescencia, sostenibilidad y CAPEX futuro que puedan afectar la tesis de inversión.",
    features: [
      "Análisis de riesgos de desempeño ambiental y regulatorio",
      "Evaluación de obsolescencia técnica y de mercado",
      "Estimación de CAPEX futuro vinculado a sostenibilidad",
      "Identificación de oportunidades de valor",
    ],
    image: "/images/service-due-diligence.png",
    tag: "Pre-adquisición",
  },
  {
    id: "preparacion",
    title: "Preparación de Activos para Financiamiento Verde",
    description:
      "Evaluación de elegibilidad potencial, evidencia disponible, brechas y condiciones necesarias antes de presentar un activo o proyecto a un financiador.",
    features: [
      "Diagnóstico de elegibilidad para financiamiento verde",
      "Mapeo de brechas y plan de cierre",
      "Preparación de evidencia técnica y documental",
      "Alineación con estándares internacionales",
    ],
    image: "/images/service-financing.png",
    tag: "Pre-financiamiento",
  },
  {
    id: "reformulacion",
    title: "Reformulación Estratégica de Proyectos para Financiamiento Verde",
    description:
      "Replanteamiento de proyectos y CAPEX para fortalecer su lógica técnica, ambiental y económica frente a criterios de financiamiento verde.",
    features: [
      "Revisión y fortalecimiento de la tesis de capital",
      "Replanteamiento de CAPEX con enfoque sostenible",
      "Construcción de narrativa técnica y económica",
      "Preparación para presentación a financiadores",
    ],
    image: "/images/service-reformulation.png",
    tag: "Reformulación",
  },
  {
    id: "niif-readiness",
    title: "NIIF S1/S2 — Asset & CAPEX Readiness",
    description:
      "Diagnóstico ejecutivo independiente que conecta activos físicos, riesgo climático, desempeño operacional, evidencia disponible y decisiones de capital antes de la divulgación NIIF S1/S2. No sustituye la preparación contable ni legal del reporte — su función es responder, antes de llegar al reporte, qué puede demostrar realmente el portafolio.",
    quote: "Nosotros no elaboramos su reporte NIIF S1/S2. Determinamos si sus edificios pueden sostenerlo y qué decisiones de CAPEX debería conocer antes de llegar al reporte.",
    features: [
      "Mapeo de exposición climática por activo — Asset Climate Exposure Map",
      "Evaluación de evidencia operacional y brechas críticas — Evidence Sufficiency Matrix",
      "Hoja de ruta de CAPEX para preparación climática — Climate & Performance CAPEX Roadmap",
      "Sesión ejecutiva de 60–90 minutos con CEO, CFO y Comité de Inversiones",
    ],
    deliverables: [
      "Asset & Climate Exposure Map",
      "Evidence Sufficiency Matrix",
      "CAPEX Readiness Roadmap",
      "Disclosure Evidence Gap Register",
      "Executive Decision Memo",
      "Sesión ejecutiva con C-suite",
    ],
    image: "/images/service-niif-readiness.png",
    tag: "Pre-divulgación",
    cta: "Solicitar una conversación ejecutiva",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 sm:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-brand-gold" />
            <span className="text-brand-green text-sm font-medium tracking-widest uppercase">
              Servicios
            </span>
            <div className="w-8 h-px bg-brand-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Cuatro formas de proteger y potenciar su inversión
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Cada servicio está diseñado para intervenir en un momento específico
            del ciclo de decisión, aportando criterio senior e independencia.
          </p>
        </div>

        {/* Service cards */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <article
              key={service.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border/40 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`flex flex-col lg:flex-row ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Image */}
                <div className="lg:w-5/12 relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/30 via-transparent to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-brand-gold/90 text-white border-none font-medium text-xs tracking-wide uppercase">
                    {service.tag}
                  </Badge>
                </div>

                {/* Content */}
                <div className="lg:w-7/12 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-4 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Differentiator quote (NIIF service only) */}
                  {service.quote && (
                    <div className="relative mb-6 pl-5 py-1">
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-brand-gold rounded-full" />
                      <blockquote className="font-serif text-base sm:text-lg text-foreground italic leading-relaxed">
                        &ldquo;{service.quote}&rdquo;
                      </blockquote>
                    </div>
                  )}

                  {/* Features list */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0" />
                        <span className="text-sm text-foreground/80 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Deliverables (NIIF service only) */}
                  {service.deliverables && (
                    <div className="mb-8">
                      <p className="text-xs font-semibold text-brand-green tracking-widest uppercase mb-3">
                        Entregables
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.deliverables.map((deliverable, dIndex) => (
                          <span
                            key={dIndex}
                            className="inline-flex items-center px-3 py-1.5 rounded-full bg-brand-green/5 border border-brand-green/15 text-xs font-medium text-brand-green"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <button
                      onClick={() => {
                        const el = document.querySelector("#contacto");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="inline-flex items-center gap-2 text-brand-green font-medium text-sm hover:gap-3 transition-all duration-300 group/link"
                    >
                      {service.cta || "Consultar sobre este servicio"}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
