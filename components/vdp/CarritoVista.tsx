"use client";
import Link from "next/link";
import { useCarrito } from "@/lib/carrito";
import { PRODUCTOS, precio } from "@/lib/productos";
import s from "./vdp.module.css";

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP || "5491159772229"; // ej: 5492235551234

export default function CarritoVista() {
  const { lineas, cambiar, quitar, vaciar } = useCarrito();
  const items = lineas.map((l) => ({ ...l, p: PRODUCTOS.find((x) => x.slug === l.slug)! })).filter((x) => x.p);
  const total = items.reduce((a, x) => a + x.p.precio * x.cantidad, 0);
  const msg = encodeURIComponent(`Hola Vida de Perros! Quiero hacer este pedido:\n${items.map((x) => `• ${x.cantidad} × ${x.p.nombre} (${precio(x.p.precio * x.cantidad)})`).join("\n")}\nTotal: ${precio(total)}`);

  if (!items.length)
    return (
      <div className={s.card} style={{ textAlign: "center", padding: 56 }}>
        <div style={{ fontSize: "4rem" }}>🛒</div>
        <h3>Tu carrito está vacío</h3>
        <p style={{ margin: "8px 0 24px" }}>Sumá algo rico o divertido para tu mascota.</p>
        <Link href="/tienda" className={s.btn}>Ir a la tienda</Link>
      </div>
    );

  return (
    <div className={s.grid} style={{ gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", alignItems: "start" }}>
      <div className={s.card} style={{ gridColumn: "span 1" }}>
        {items.map(({ p, cantidad }) => (
          <div key={p.slug} className={s.row}>
            <div className={s.ico} style={{ background: p.color + "33" }}>{p.emoji}</div>
            <div style={{ flex: 1 }}>
              <b>{p.nombre}</b>
              <div style={{ color: "var(--body)", fontSize: ".9rem" }}>{precio(p.precio)} c/u</div>
            </div>
            <div className={s.qty}>
              <button onClick={() => cambiar(p.slug, cantidad - 1)} aria-label="Menos">−</button>
              <span style={{ minWidth: 20, textAlign: "center", fontWeight: 700 }}>{cantidad}</span>
              <button onClick={() => cambiar(p.slug, cantidad + 1)} aria-label="Más">+</button>
            </div>
            <b style={{ minWidth: 90, textAlign: "right" }}>{precio(p.precio * cantidad)}</b>
            <button onClick={() => quitar(p.slug)} aria-label="Quitar" style={{ border: 0, background: "none", cursor: "pointer", fontSize: "1.1rem" }}>✕</button>
          </div>
        ))}
        <button onClick={vaciar} style={{ border: 0, background: "none", marginTop: 16, cursor: "pointer", color: "var(--body)", fontFamily: "inherit" }}>Vaciar carrito</button>
      </div>
      <div className={s.card}>
        <h3 style={{ marginTop: 0 }}>Resumen</h3>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1.2rem", margin: "12px 0 20px" }}><span>Total</span><span className={s.price}>{precio(total)}</span></div>
                  <a className={s.btn} style={{ width: "100%", justifyContent: "center" }} href={`https://wa.me/${WHATSAPP}?text=${msg}`} target="_blank" rel="noopener noreferrer">Enviar pedido por WhatsApp</a>
        <p style={{ color: "var(--body)", fontSize: ".85rem", marginTop: 14 }}>Coordinamos el pago y la entrega con vos por mensaje.</p>
      </div>
    </div>
  );
}
