import { Fraunces, Manrope } from "next/font/google";
import styles from "./ServiciosVidaDePerros.module.css";

// Fuentes propias de esta sección (no hay fuente global).
const display = Fraunces({ subsets: ["latin"], weight: ["800"], style: ["normal", "italic"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-body" });

const SERVICIOS = [
  { n: "01", icon: "🩺", name: "Consultas y control", desc: "Revisión completa, diagnóstico y seguimiento con veterinarios que conocen a tu perro por su nombre.", cls: "sun c1" },
  { n: "02", icon: "💉", name: "Vacunación", desc: "Plan de vacunas y desparasitación al día, con recordatorios para que nunca se te pase una fecha.", cls: "org c2" },
  { n: "03", icon: "✂️", name: "Peluquería canina", desc: "Baño, corte y cuidado de la piel, con calma y sin estrés.", cls: "pk c3" },
  { n: "04", icon: "🔬", name: "Estudios y cirugía", desc: "Análisis, ecografías y cirugías programadas con seguimiento cercano.", cls: "mt c4" },
  { n: "05", icon: "🦴", name: "Pet shop", desc: "Alimento premium, juguetes y accesorios, con envío a domicilio.", cls: "cr c5" },
] as const;

export default function ServiciosVidaDePerros() {
  return (
    <section className={`${styles.sec} ${display.variable} ${body.variable}`} id="servicios">
      <div className={styles.glow} />
      <div className={styles.wrap}>
        <div className={styles.head}>
          <div>
            <span className={styles.kicker}>Nuestros servicios</span>
            <h2 className={`${styles.title} ${styles.display}`}>
              Todo lo que tu perro <em>necesita</em>, en un solo lugar.
            </h2>
          </div>
          <p className={styles.sub}>
            Desde el primer control hasta el baño del sábado. Elegí el servicio, reservá tu turno online y listo.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICIOS.map((s) => {
            const [color, pos] = s.cls.split(" ");
            return (
              <a href="#" key={s.n} className={`${styles.card} ${styles[color]} ${styles[pos]}`}>
                <span className={`${styles.num} ${styles.display}`} aria-hidden>{s.n}</span>
                <div>
                  <div className={styles.icon} aria-hidden>{s.icon}</div>
                  <h3 className={`${styles.name} ${styles.display}`}>{s.name}</h3>
                  <p className={styles.desc}>{s.desc}</p>
                </div>
                <div className={styles.foot}>
                  <span>Reservar turno</span>
                  <span className={styles.go} aria-hidden>→</span>
                </div>
              </a>
            );
          })}

          <a href="#" className={`${styles.card} ${styles.dk} ${styles.c6} ${styles.wide}`}>
            <div className={styles.left}>
              <h3 className={`${styles.name} ${styles.display}`} style={{ marginTop: 0 }}>Y además…</h3>
              <p className={styles.desc}>Servicios extra para que no tengas que ir a otro lado.</p>
            </div>
            <div className={styles.tags}>
              <span>Guardería</span><span>Microchip</span><span>Certificados de viaje</span><span>Urgencias</span><span>Plan de salud</span>
            </div>
            <span className={styles.go} aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
