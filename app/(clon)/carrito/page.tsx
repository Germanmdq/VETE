import Pagina from "@/components/vdp/Pagina";
import CarritoVista from "@/components/vdp/CarritoVista";
import s from "@/components/vdp/vdp.module.css";

export default function Carrito() {
  return (
    <Pagina kicker="Tu pedido" titulo="Carrito">
      <section className={s.sec} style={{ paddingTop: 0 }}>
        <div className={s.wrap}><CarritoVista /></div>
      </section>
    </Pagina>
  );
}
