import Link from "next/link";
import AgregarAlCarrito from "./AgregarAlCarrito";
import s from "./vdp.module.css";
import { CATEGORIAS, PRODUCTOS, precio } from "@/lib/productos";

// Dos productos por categoría (sin farmacia) para mostrar variedad en la portada.
const DESTACADOS = (["Paseo", "Juguetes", "Higiene", "Ropa"] as const).flatMap((c) => PRODUCTOS.filter((p) => p.categoria === c).slice(0, 2));

export default function TiendaDestacados() {
  return (
    <section className={s.sec}>
      <div className={s.wrap}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div className={s.tag}>Pet shop</div>
          <h2 style={{ margin: "8px 0 10px" }}>Todo para tu perro, en la tienda</h2>
          <p style={{ color: "var(--body)" }}>Paseo, juguetes, higiene, ropa y farmacia veterinaria. Pedí desde acá y coordinamos por WhatsApp.</p>
        </div>
        <div className={s.chips} style={{ justifyContent: "center" }}>
          {CATEGORIAS.map((c) => (<Link key={c} className={s.chip} href={`/tienda?cat=${c}`}>{c}</Link>))}
        </div>
        <div className={`${s.grid} ${s.g4}`}>
          {DESTACADOS.map((p) => (
            <div key={p.slug} className={s.card} style={{ padding: 18 }}>
              <Link href={`/tienda/${p.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div className={s.tile} style={{ background: p.color + "33" }}><span>{p.emoji}</span></div>
                <div className={s.tag}>{p.categoria}</div>
                <h3 style={{ fontSize: "1.1rem", margin: "6px 0 8px" }}>{p.nombre}</h3>
              </Link>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
                <span className={s.price}>{precio(p.precio)}</span>
                <AgregarAlCarrito slug={p.slug} chico />
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 32 }}><Link className={s.btn} href="/tienda">Ver toda la tienda</Link></div>
      </div>
    </section>
  );
}
