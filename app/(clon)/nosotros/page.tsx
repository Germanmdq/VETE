import Pagina from "@/components/vdp/Pagina";
import s from "@/components/vdp/vdp.module.css";

const IMG = "/pawshy/wp-content/uploads/sites/163/2026/02/";

export default function Nosotros() {
  return (
    <Pagina kicker="Sobre nosotros" titulo="Cuidamos como en familia" bajada="En Vida de Perros creemos que cada visita tiene que ser tranquila, cálida y sin miedo, para tu mascota y para vos.">
      <section className={s.sec}>
        <div className={`${s.wrap} ${s.grid} ${s.g2}`} style={{ alignItems: "center", gap: 48 }}>
          <img className={s.img} alt="" src={`${IMG}Pawshy-Grooming-Image-1.webp`} style={{ aspectRatio: "1" }} />
          <div>
            <h2 className={s.h2}>Una veterinaria que se siente como casa</h2>
            <p className={s.lead} style={{ marginTop: 0 }}>Somos un equipo de veterinarios, peluqueros y amantes de los animales. Trabajamos con paciencia, técnicas tranquilas y productos seguros, y le dedicamos a cada mascota el tiempo que necesita.</p>
            <p className={s.lead}>Desde el primer control hasta el baño del sábado, acompañamos a tu mascota en cada etapa.</p>
            <div className={s.stats}>
              <div><b>+2.500</b><span>mascotas atendidas</span></div>
              <div><b>4,9★</b><span>valoración</span></div>
            </div>
          </div>
        </div>
      </section>
      <section className={s.sec}>
        <div className={s.wrap}>
          <h2 className={s.h2}>Lo que nos mueve</h2>
          <div className={`${s.grid} ${s.g3}`} style={{ marginTop: 28 }}>
            {[
              ["💚", "Cariño primero", "Cada mascota es única y la tratamos con respeto, mimos y paciencia."],
              ["🧼", "Cuidado seguro", "Productos aptos para mascotas y protocolos de higiene en cada servicio."],
              ["🤝", "Confianza", "Te explicamos todo con claridad y con precios honestos."],
            ].map(([i, t, d]) => (
              <div key={t} className={s.card}><div className={s.ico} style={{ background: "#17B46133" }}>{i}</div><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>
      <section className={s.sec}><div className={s.wrap}><div className={s.band}><h2>Vení a conocernos</h2><a className={s.btn} href="/contacto">Contacto</a></div></div></section>
    </Pagina>
  );
}
