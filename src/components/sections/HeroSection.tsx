"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const handleCTA = () => {
    const el = document.querySelector("#contacto");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.png"
          alt="Edificio corporativo Clase A"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green-dark/85 via-brand-green-dark/70 to-brand-green-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6 animate-fade-up opacity-0">
            <div className="w-8 h-px bg-brand-gold" />
            <span className="text-brand-gold-light text-sm font-medium tracking-widest uppercase">
              Para Directorios e Inversionistas
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-up opacity-0 animation-delay-200">
            Consultoría Estratégica de{" "}
            <span className="text-brand-gold-light">Activos, Capital</span> y Riesgo
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed mb-10 animate-fade-up opacity-0 animation-delay-400">
            Evaluación independiente y criterio senior para proteger decisiones de inversión,
            fortalecer activos reales y acceder a financiamiento verde en América Latina.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 animation-delay-600">
            <Button
              onClick={handleCTA}
              size="lg"
              className="bg-brand-gold hover:bg-brand-gold-light text-white rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-brand-gold/20 transition-all hover:shadow-xl hover:shadow-brand-gold/30"
            >
              Solicitar conversación
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => {
                const el = document.querySelector("#servicios");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white rounded-full px-8 py-6 text-base font-medium backdrop-blur-sm"
            >
              Conocer servicios
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
