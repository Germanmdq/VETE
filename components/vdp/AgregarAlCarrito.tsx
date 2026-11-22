"use client";
import { useState } from "react";
import { useCarrito } from "@/lib/carrito";
import s from "./vdp.module.css";

export default function AgregarAlCarrito({ slug, chico = false }: { slug: string; chico?: boolean }) {
  const { agregar } = useCarrito();
  const [ok, setOk] = useState(false);
  return (
    <button
      className={s.btn}
      style={chico ? { padding: "11px 20px", fontSize: ".9rem" } : undefined}
      onClick={() => { agregar(slug); setOk(true); setTimeout(() => setOk(false), 1400); }}
    >
      {ok ? "✓ Agregado" : "Agregar al carrito"}
    </button>
  );
}
