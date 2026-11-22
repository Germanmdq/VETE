import Link from "next/link";
import Pagina from "@/components/vdp/Pagina";
import AgregarAlCarrito from "@/components/vdp/AgregarAlCarrito";
import s from "@/components/vdp/vdp.module.css";
import { CATEGORIAS, PRODUCTOS, precio } from "@/lib/productos";

export default async function Tienda({ searchParams }: { searchParams: Promise<{ cat?: string }> }) {
  const { cat } = await searchParams;
  const lista = cat ? PRODUCTOS.filter((p) => p.categoria === cat) : PRODUCTOS;
  return (
    <Pagina kicker="Pet shop" titulo="La tienda de Vida de Perros" bajada="Alimento, juguetes, higiene y accesorios elegidos por nuestro equipo.">
      <section className={s.sec} style={{ paddingTop: 0 }}>
        <div className={s.wrap}>
          <div className={s.chips}>
            <Link className={`${s.chip} ${!cat ? s.chipOn : ""}`} href="/tienda">Todo</Link>
            {CATEGORIAS.map((c) => (<Link key={c} className={`${s.chip} ${cat === c ? s.chipOn : ""}`} href={`/tienda?cat=${c}`}>{c}</Link>))}
          </div>
          <div className={`${s.grid} ${s.g4}`}>
            {lista.map((p) => (
              <div key={p.slug} className={s.card} style={{ padding: 18 }}>
                <Link href={`/tienda/${p.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <div className={s.tile} style={{ background: p.color + "33" }}><span>{p.emoji}</span></div>
                  <div className={s.tag}>{p.categoria}</div>
                  <h3 style={{ fontSize: "1.2rem", margin: "6px 0 8px" }}>{p.nombre}</h3>
                </Link>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
                  <span className={s.price}>{precio(p.precio)}</span>
                  <AgregarAlCarrito slug={p.slug} chico />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Pagina>
  );
}
