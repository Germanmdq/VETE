import Link from "next/link";
import { notFound } from "next/navigation";
import Pagina from "@/components/vdp/Pagina";
import AgregarAlCarrito from "@/components/vdp/AgregarAlCarrito";
import s from "@/components/vdp/vdp.module.css";
import { PRODUCTOS, precio } from "@/lib/productos";

export function generateStaticParams() { return PRODUCTOS.map((p) => ({ slug: p.slug })); }

export default async function Producto({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = PRODUCTOS.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <Pagina kicker={p.categoria} titulo={p.nombre}>
      <section className={s.sec} style={{ paddingTop: 0 }}>
        <div className={`${s.wrap} ${s.grid} ${s.g2}`} style={{ alignItems: "center", gap: 48 }}>
          <div className={s.tile} style={{ background: p.color + "33", borderRadius: 36 }}><span>{p.emoji}</span></div>
          <div>
            <div className={s.price} style={{ fontSize: "2.6rem" }}>{precio(p.precio)}</div>
            <p className={s.lead}>{p.descripcion}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
              <AgregarAlCarrito slug={p.slug} />
              <Link className={`${s.btn} ${s.btnLine}`} href="/tienda">Seguir mirando</Link>
            </div>
          </div>
        </div>
      </section>
    </Pagina>
  );
}
