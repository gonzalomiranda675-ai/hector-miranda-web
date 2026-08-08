"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

function ContactDialog() {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      organization: formData.get("organization") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSent(true);
        setTimeout(() => {
          setOpen(false);
          setSent(false);
        }, 2000);
      }
    } catch (err) {
      console.error("Error sending contact form:", err);
    } finally {
      setSending(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button
        onClick={() => setOpen(true)}
        size="lg"
        className="bg-brand-gold hover:bg-brand-gold-light text-white rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-brand-gold/20 transition-all hover:shadow-xl hover:shadow-brand-gold/30"
      >
        Solicitar conversación
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>

      <DialogContent className="sm:max-w-lg p-0 gap-0 overflow-hidden">
        <div className="bg-brand-green-dark p-6 sm:p-8">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl font-bold text-white">
              Solicitar conversación
            </DialogTitle>
            <DialogDescription className="text-white/70 mt-2">
              Comparta información sobre su necesidad. Héctor responderá de manera confidencial.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="p-6 sm:p-8">
          {sent ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-serif text-xl font-semibold text-foreground mb-2">Mensaje enviado</p>
              <p className="text-muted-foreground">Gracias por su interés. Se le contactará pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-foreground">
                  Nombre completo
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Su nombre"
                  className="rounded-xl border-border/60 focus:border-brand-green"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  Correo electrónico
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="correo@empresa.com"
                  className="rounded-xl border-border/60 focus:border-brand-green"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="organization" className="text-sm font-medium text-foreground">
                  Organización
                </Label>
                <Input
                  id="organization"
                  name="organization"
                  placeholder="Nombre de su organización"
                  className="rounded-xl border-border/60 focus:border-brand-green"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-foreground">
                  Mensaje
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Describa brevemente su necesidad o la situación que desea evaluar..."
                  className="rounded-xl border-border/60 focus:border-brand-green resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={sending}
                className="w-full bg-brand-green hover:bg-brand-green-dark text-white rounded-xl py-5 font-semibold text-base"
              >
                {sending ? "Enviando..." : "Enviar solicitud"}
              </Button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function CTASection() {
  return (
    <section id="contacto" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/cta-bg.png"
          alt="Skyline corporativa al atardecer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-green-dark/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="w-8 h-px bg-brand-gold/60" />
          <span className="text-brand-gold-light text-sm font-medium tracking-widest uppercase">
            Iniciar conversación
          </span>
          <div className="w-8 h-px bg-brand-gold/60" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Si su organización está evaluando una adquisición, un financiamiento o una decisión estratégica sobre activos reales, conversemos.
        </h2>

        <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          La primera conversación es confidencial y sin compromiso. Permítame entender su contexto
          y explorar cómo puedo aportar valor a su decisión.
        </p>

        <ContactDialog />
      </div>
    </section>
  );
}
