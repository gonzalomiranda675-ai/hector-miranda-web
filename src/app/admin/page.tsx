"use client";

import { useEffect, useState, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  Building2,
  Clock,
  Check,
  Trash2,
  RefreshCw,
  ArrowLeft,
  Inbox,
} from "lucide-react";

interface Submission {
  id: string;
  name: string;
  email: string;
  organization: string | null;
  message: string;
  read: boolean;
  createdAt: string;
}

export default function AdminPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSubmissions = useCallback(async () => {
    try {
      const res = await fetch("/api/contact");
      if (res.ok) {
        const data = await res.json();
        setSubmissions(data);
      }
    } catch (err) {
      console.error("Error fetching submissions:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

  const markAsRead = async (id: string) => {
    try {
      await fetch(`/api/contact/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ read: true }),
      });
      fetchSubmissions();
    } catch (err) {
      console.error("Error marking as read:", err);
    }
  };

  const deleteSubmission = async (id: string) => {
    try {
      await fetch(`/api/contact/${id}`, {
        method: "DELETE",
      });
      fetchSubmissions();
    } catch (err) {
      console.error("Error deleting:", err);
    }
  };

  const unreadCount = submissions.filter((s) => !s.read).length;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("es-PE", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Volver al sitio</span>
            </a>
            <Separator orientation="vertical" className="h-6" />
            <div>
              <p className="font-serif font-semibold text-foreground text-sm">Panel de contactos</p>
              <p className="text-xs text-muted-foreground">Héctor Miranda</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {unreadCount > 0 && (
              <Badge className="bg-brand-green text-white border-none text-xs">
                {unreadCount} sin leer
              </Badge>
            )}
            <Button
              onClick={fetchSubmissions}
              variant="outline"
              size="sm"
              className="rounded-full"
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats bar */}
        <div className="flex items-center gap-6 mb-8 p-4 rounded-xl bg-brand-cream border border-border/60">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Inbox className="h-4 w-4" />
            <span>
              <strong className="text-foreground">{submissions.length}</strong> solicitudes totales
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4 text-brand-green" />
            <span>
              <strong className="text-foreground">{unreadCount}</strong> sin leer
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="h-4 w-4" />
            <span>
              <strong className="text-foreground">{submissions.length - unreadCount}</strong> leídas
            </span>
          </div>
        </div>

        {/* Submissions list */}
        {loading ? (
          <div className="text-center py-16">
            <RefreshCw className="h-6 w-6 animate-spin mx-auto text-muted-foreground mb-3" />
            <p className="text-muted-foreground text-sm">Cargando solicitudes...</p>
          </div>
        ) : submissions.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <Inbox className="h-8 w-8 text-muted-foreground" />
            </div>
            <p className="font-serif text-xl font-semibold text-foreground mb-2">
              Sin solicitudes aún
            </p>
            <p className="text-muted-foreground text-sm">
              Las solicitudes de contacto aparecerán aquí cuando los visitantes envíen el formulario.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {submissions.map((item) => (
              <Card
                key={item.id}
                className={`p-5 sm:p-6 transition-all duration-300 ${
                  item.read
                    ? "bg-background border-border/60"
                    : "bg-brand-cream/60 border-brand-green/20 shadow-sm"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-foreground text-base">
                        {item.name}
                      </h3>
                      {!item.read && (
                        <Badge className="bg-brand-green text-white border-none text-[10px] px-1.5 py-0">
                          Nuevo
                        </Badge>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="inline-flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        {item.email}
                      </span>
                      {item.organization && (
                        <span className="inline-flex items-center gap-1">
                          <Building2 className="h-3 w-3" />
                          {item.organization}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {formatDate(item.createdAt)}
                      </span>
                    </div>

                    <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-wrap">
                      {item.message}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex sm:flex-col gap-2 shrink-0">
                    {!item.read && (
                      <Button
                        onClick={() => markAsRead(item.id)}
                        variant="outline"
                        size="sm"
                        className="rounded-full text-xs"
                      >
                        <Check className="h-3 w-3 mr-1" />
                        Marcar leído
                      </Button>
                    )}
                    <Button
                      onClick={() => deleteSubmission(item.id)}
                      variant="ghost"
                      size="sm"
                      className="rounded-full text-xs text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="h-3 w-3 mr-1" />
                      Eliminar
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-background mt-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>Panel de administración · Héctor Miranda Strategic Advisory</p>
          <div className="flex items-center gap-4">
            <a href="mailto:hectormiranda536@gmail.com" className="hover:text-foreground transition-colors">
              hectormiranda536@gmail.com
            </a>
            <a href="tel:+51942367037" className="hover:text-foreground transition-colors">
              +51 942 367 037
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
