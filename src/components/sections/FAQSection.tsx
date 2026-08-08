"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "faq-1",
    question: "¿Qué es una Due Diligence Verde?",
    answer:
      "Es una evaluación estratégica previa a la adquisición de un activo inmobiliario que identifica riesgos de desempeño, obsolescencia, sostenibilidad y CAPEX futuro que puedan afectar la tesis de inversión. Va más allá de la revisión técnica convencional al incorporar criterios de desempeño ambiental, regulatorio y de mercado que impactan directamente en el valor y la liquidez del activo.",
  },
  {
    id: "faq-2",
    question: "¿Cómo saber si un activo está preparado para financiamiento verde?",
    answer:
      "Un activo está preparado cuando cuenta con evidencia documentada de desempeño ambiental, cumple con criterios de elegibilidad de los financiadores, ha identificado y mitigado brechas de sostenibilidad, y presenta una narrativa técnica y económica coherente alineada con estándares de financiamiento verde. La preparación requiere evaluar certificaciones, métricas de desempeño energético, gestión de agua, materiales y gobernanza ESG del activo.",
  },
  {
    id: "faq-3",
    question: "¿Cuándo conviene reformular un proyecto para financiamiento verde?",
    answer:
      "Conviene reformular un proyecto cuando la tesis de capital no está alineada con los criterios de financiamiento verde disponibles, cuando se requiere fortalecer la lógica técnica, ambiental o económica del proyecto, o cuando se busca acceder a mejores condiciones de financiamiento vinculadas a desempeño sostenible. Es especialmente relevante en etapas tempranas de diseño o cuando hay cambios en el mercado de capitales que favorecen activos con perfil sostenible.",
  },
  {
    id: "faq-4",
    question: "¿Qué aporta un advisor estratégico a un directorio o inversionista?",
    answer:
      "Un advisor estratégico aporta criterio independiente, análisis de riesgo especializado, traducción de complejidad técnica en decisiones de negocio, y una perspectiva senior que conecta desempeño de activos, ESG, capital y riesgo. Ayuda a proteger decisiones de inversión, reducir incertidumbre, mejorar la preparación para acceso a capital y fortalecer el valor estratégico de los activos frente a sus stakeholders.",
  },
  {
    id: "faq-5",
    question: "¿Quién es Héctor Miranda?",
    answer:
      "Héctor Miranda es estratega en activos inmobiliarios, sostenibilidad y descarbonización con cerca de 20 años de experiencia en América Latina y participación en más de 200 proyectos LEED. Es fundador y ex CEO del Peru Green Building Council, primer GRESB AP del Perú, y ha participado en foros internacionales como APEC, World Green Building Council e ISCN. Su experiencia combina real estate, desempeño de activos, ESG, capital y riesgo para apoyar decisiones de propietarios, inversionistas y directorios.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-brand-gold" />
            <span className="text-brand-green text-sm font-medium tracking-widest uppercase">
              Preguntas frecuentes
            </span>
            <div className="w-8 h-px bg-brand-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Resolución de dudas para directorios e inversionistas
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Respuestas concisas a las preguntas más frecuentes sobre los servicios
            de consultoría estratégica y el perfil de Héctor Miranda.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="bg-background border border-border/60 rounded-xl px-6 sm:px-8 data-[state=open]:bg-brand-cream/60 data-[state=open]:border-brand-green/20 transition-all duration-300 overflow-hidden"
            >
              <AccordionTrigger className="py-5 sm:py-6 text-left font-serif text-base sm:text-lg font-semibold text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 sm:pb-6 text-muted-foreground leading-relaxed text-sm sm:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
