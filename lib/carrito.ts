"use client";
import { useSyncExternalStore } from "react";

type Linea = { slug: string; cantidad: number };
const KEY = "vdp-carrito";
let cache: Linea[] | null = null;
const subs = new Set<() => void>();

function leer(): Linea[] {
  if (cache) return cache;
  try { cache = JSON.parse(localStorage.getItem(KEY) || "[]"); } catch { cache = []; }
  return cache!;
}
function guardar(l: Linea[]) {
  cache = l;
  try { localStorage.setItem(KEY, JSON.stringify(l)); } catch {}
  subs.forEach((f) => f());
}
const EMPTY: Linea[] = [];
export function useCarrito() {
  const lineas = useSyncExternalStore(
    (cb) => { subs.add(cb); const on = () => { cache = null; cb(); }; window.addEventListener("storage", on); return () => { subs.delete(cb); window.removeEventListener("storage", on); }; },
    leer,
    () => EMPTY,
  );
  return {
    lineas,
    total: lineas.reduce((a, l) => a + l.cantidad, 0),
    agregar: (slug: string, n = 1) => { const l = leer(); const i = l.findIndex((x) => x.slug === slug); guardar(i >= 0 ? l.map((x, k) => (k === i ? { ...x, cantidad: x.cantidad + n } : x)) : [...l, { slug, cantidad: n }]); },
    cambiar: (slug: string, n: number) => guardar(leer().map((x) => (x.slug === slug ? { ...x, cantidad: Math.max(1, n) } : x))),
    quitar: (slug: string) => guardar(leer().filter((x) => x.slug !== slug)),
    vaciar: () => guardar([]),
  };
}
