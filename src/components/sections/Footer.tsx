"use client";

import { Separator } from "@/components/ui/separator";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-green-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-serif font-bold text-white text-lg">
                HM
              </div>
              <div>
                <p className="font-serif font-semibold text-white text-base">Héctor Miranda</p>
                <p className="text-xs text-white/50 tracking-wider uppercase">
                  Strategic Advisory
                </p>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-4">
              Consultoría estratégica de activos, capital y riesgo para directorios e inversionistas en América Latina.
            </p>
            {/* Contact */}
            <div className="space-y-2">
              <a
                href="mailto:hectormiranda536@gmail.com"
                className="flex items-center gap-2 text-white/40 text-sm hover:text-brand-gold transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span>hectormiranda536@gmail.com</span>
              </a>
              <a
                href="tel:+51942367037"
                className="flex items-center gap-2 text-white/40 text-sm hover:text-brand-gold transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0" />
                <span>+51 942 367 037</span>
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-white/80 font-semibold text-sm mb-4 uppercase tracking-wider">
              Servicios
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#servicios"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white/40 text-sm hover:text-brand-gold transition-colors"
                >
                  Due Diligence Verde
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white/40 text-sm hover:text-brand-gold transition-colors"
                >
                  Preparación para Financiamiento Verde
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white/40 text-sm hover:text-brand-gold transition-colors"
                >
                  Reformulación Estratégica
                </a>
              </li>
            </ul>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-white/80 font-semibold text-sm mb-4 uppercase tracking-wider">
              Navegación
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#contacto"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white/40 text-sm hover:text-brand-gold transition-colors"
                >
                  Solicitar conversación
                </a>
              </li>
              <li>
                <a
                  href="#sobre-hector"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#sobre-hector")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white/40 text-sm hover:text-brand-gold transition-colors"
                >
                  Sobre Héctor Miranda
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#faq")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white/40 text-sm hover:text-brand-gold transition-colors"
                >
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Héctor Miranda. Todos los derechos reservados.
          </p>
          <p className="text-white/30 text-xs">
            Consultoría estratégica independiente · América Latina
          </p>
        </div>
      </div>
    </footer>
  );
}
