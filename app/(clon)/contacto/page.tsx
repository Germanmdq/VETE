import Pagina from "@/components/vdp/Pagina";
import FormContacto from "@/components/vdp/FormContacto";
import s from "@/components/vdp/vdp.module.css";

export default function Contacto() {
  return (
    <Pagina kicker="Contacto" titulo="Pedí tu turno" bajada="Contanos qué necesitás y te respondemos para coordinar el día y el horario.">
      <section className={s.sec}>
        <div className={`${s.wrap} ${s.grid} ${s.g2}`} style={{ gap: 40, alignItems: "start" }}>
          <div className={s.card}><FormContacto /></div>
          <div className={s.grid} style={{ gap: 24 }}>
            <div className={s.card}>
              <h3 style={{ marginTop: 0 }}>Datos</h3>
              <p>📍 Dirección a confirmar</p>
              <p style={{ marginTop: 8 }}>📞 +54 11 5977-2229</p>
              <p style={{ marginTop: 8 }}>📸 <a href="https://instagram.com/vdperros" target="_blank" rel="noopener noreferrer">@vdperros</a></p>
              <p style={{ marginTop: 8 }}>🕘 Horarios a confirmar</p>
            </div>
            <div className={s.mapbox}><iframe title="Mapa" loading="lazy" src="https://maps.google.com/maps?q=Argentina&t=m&z=5&output=embed" /></div>
          </div>
        </div>
      </section>
    </Pagina>
  );
}
