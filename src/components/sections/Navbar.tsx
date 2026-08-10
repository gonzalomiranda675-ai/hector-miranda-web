"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre Héctor", href: "#sobre-hector" },
  { label: "Credenciales", href: "#credenciales" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3"
        >
          <div
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-serif font-bold text-lg sm:text-xl transition-all duration-500 ${
              scrolled
                ? "bg-brand-green text-white"
                : "bg-white/20 backdrop-blur-sm text-white border border-white/30"
            }`}
          >
            HM
          </div>
          <div className="hidden sm:block">
            <p
              className={`font-serif font-semibold text-base leading-tight transition-colors duration-500 ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              Héctor Miranda
            </p>
            <p
              className={`text-xs tracking-wider uppercase transition-colors duration-500 ${
                scrolled ? "text-muted-foreground" : "text-white/70"
              }`}
            >
              Strategic Advisory
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:opacity-80 ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button
            onClick={() => {
              const el = document.querySelector("#contacto");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            variant="default"
            size="sm"
            className={`rounded-full px-6 font-medium transition-all duration-300 ${
              scrolled
                ? "bg-brand-green hover:bg-brand-green-dark text-white"
                : "bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white border border-white/30"
            }`}
          >
            Solicitar conversación
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <button
              className={`p-2 rounded-lg transition-colors ${
                scrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
              }`}
              aria-label="Abrir menú"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-white p-8">
            <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-lg font-medium text-foreground hover:text-brand-green transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={() => {
                  setMobileOpen(false);
                  setTimeout(() => {
                    const el = document.querySelector("#contacto");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }, 200);
                }}
                className="mt-4 bg-brand-green hover:bg-brand-green-dark text-white rounded-full"
                size="lg"
              >
                Solicitar conversación
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
