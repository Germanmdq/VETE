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
              <p>📍 Manuela Pedraza 5376 · Villa Urquiza, CABA</p>
              <p style={{ marginTop: 8 }}>📞 +54 11 5977-2229</p>
              <p style={{ marginTop: 8 }}>📸 <a href="https://instagram.com/vdperros" target="_blank" rel="noopener noreferrer">@vdperros</a></p>
              <p style={{ marginTop: 8 }}>🩺 Veterinaria: lun, mar y jue 16 a 19 · mié y vie 11 a 13 · sáb por medio 11 a 13</p>
              <p style={{ marginTop: 8 }}>✂️ Peluquería: lun a vie 10 a 13 y 15 a 19 · sáb 10 a 18</p>
            </div>
            <div className={s.mapbox}><iframe title="Mapa" loading="lazy" src="https://maps.google.com/maps?q=Manuela%20Pedraza%205376%2C%20Villa%20Urquiza%2C%20CABA&t=m&z=16&output=embed" /></div>
          </div>
        </div>
      </section>
    </Pagina>
  );
}
