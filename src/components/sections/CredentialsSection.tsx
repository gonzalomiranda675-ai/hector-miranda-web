"use client";

import { Mail, Phone } from "lucide-react";

export default function CredentialsSection() {
  return (
    <section id="credenciales" className="py-20 sm:py-28 bg-brand-green-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-brand-gold/60" />
            <span className="text-brand-gold-light text-sm font-medium tracking-widest uppercase">
              Credenciales
            </span>
            <div className="w-8 h-px bg-brand-gold/60" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Por qué trabajar con Héctor Miranda
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Trayectoria comprobada que combina criterio técnico con visión de negocio
            para proteger y potenciar inversiones inmobiliarias.
          </p>
        </div>

        {/* Credentials grid — 5 columns: photo + 4 metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Photo card */}
          <div className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-brand-gold/40 mb-4 shadow-lg shadow-brand-gold/10">
              <img
                src="/images/hector-photo-card.jpg"
                alt="Héctor Miranda - Asesor estratégico inmobiliario"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-serif text-white font-semibold text-base sm:text-lg text-center">
              Héctor Miranda
            </p>
            <p className="text-white/50 text-xs sm:text-sm text-center mt-1">
              Advisor estratégico independiente
            </p>
          </div>

          {/* Metric cards — flex grow to match photo card height */}
          {[
            { number: "~20", label: "Años de experiencia", detail: "en América Latina" },
            { number: "200+", label: "Proyectos LEED", detail: "participación directa" },
            { number: "1°", label: "GRESB AP del Perú", detail: "primer profesional certificado" },
            { number: "CEO", label: "Fundador Peru GBC", detail: "ex CEO del council" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 backdrop-blur-sm"
            >
              <div className="font-serif text-4xl sm:text-5xl font-bold text-brand-gold mb-3">
                {item.number}
              </div>
              <div className="text-white font-semibold text-base sm:text-lg mb-1 text-center">
                {item.label}
              </div>
              <div className="text-white/50 text-sm text-center">
                {item.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Contact info bar */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          <a
            href="mailto:gonzalomiranda675@gmail.com"
            className="inline-flex items-center gap-2 text-white/60 hover:text-brand-gold transition-colors text-sm"
          >
            <Mail className="h-4 w-4" />
            <span>gonzalomiranda675@gmail.com</span>
          </a>
          <a
            href="tel:+51942367037"
            className="inline-flex items-center gap-2 text-white/60 hover:text-brand-gold transition-colors text-sm"
          >
            <Phone className="h-4 w-4" />
            <span>+51 942 367 037</span>
          </a>
        </div>
      </div>
    </section>
  );
}
