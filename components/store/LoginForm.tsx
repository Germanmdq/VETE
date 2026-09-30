"use client";
/**
 * Ingreso con enlace por email (Supabase Auth, sin contraseñas).
 * Lo usan clientes y personal; el acceso al panel depende de la tabla vet_staff.
 */
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Mail } from "lucide-react";
import { toast } from "sonner";
import { INTEGRATIONS } from "@/lib/vet/config/integrations";
import { Button, Card, Input } from "../ui/primitives";

export function LoginForm() {
  const next = useSearchParams().get("next") ?? "/cuenta";
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  if (INTEGRATIONS.dataSource !== "supabase") {
    return (
      <Card className="p-6 text-center">
        <p className="font-semibold">Modo de prueba</p>
        <p className="mt-1 text-sm text-neutral-600">El ingreso con email se activa al conectar la base de datos. Mientras tanto, entrá desde «Mi cuenta» con tu teléfono.</p>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-vet-tint text-vet-primary"><Mail className="size-7" /></span>
      <h1 className="mt-3 text-center font-vet-display text-2xl font-extrabold">Ingresar</h1>
      {sent ? (
        <p className="mt-3 text-center text-sm text-neutral-600">Te enviamos un enlace a <strong>{email}</strong>. Abrilo desde este dispositivo para entrar.</p>
      ) : (
        <form
          className="mt-5 space-y-3"
          onSubmit={async (e) => {
            e.preventDefault();
            if (!/^\S+@\S+\.\S+$/.test(email)) return toast.error("Revisá el email");
            setSending(true);
            try {
              const { createClient } = await import("@/lib/supabase/client");
              const { error } = await createClient().auth.signInWithOtp({ email, options: { emailRedirectTo: `${location.origin}/auth/callback?next=${encodeURIComponent(next)}` } });
              if (error) throw error;
              setSent(true);
            } catch (err) {
              toast.error(err instanceof Error ? err.message : "No pudimos enviar el enlace");
            } finally {
              setSending(false);
            }
          }}
        >
          <Input label="Email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <Button type="submit" size="lg" className="w-full" loading={sending}>Enviarme el enlace</Button>
        </form>
      )}
    </Card>
  );
}
