"use client";

const credentials = [
  {
    number: "~20",
    label: "Años de experiencia",
    detail: "en América Latina",
  },
  {
    number: "200+",
    label: "Proyectos LEED",
    detail: "participación directa",
  },
  {
    number: "1°",
    label: "GRESB AP del Perú",
    detail: "primer profesional certificado",
  },
  {
    number: "CEO",
    label: "Fundador Peru GBC",
    detail: "ex CEO del council",
  },
];

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

        {/* Credentials grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {credentials.map((item, index) => (
            <div
              key={index}
              className="group text-center p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 backdrop-blur-sm"
            >
              <div className="font-serif text-4xl sm:text-5xl font-bold text-brand-gold mb-3">
                {item.number}
              </div>
              <div className="text-white font-semibold text-base sm:text-lg mb-1">
                {item.label}
              </div>
              <div className="text-white/50 text-sm">
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
