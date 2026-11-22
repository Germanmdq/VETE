import { Fraunces, Manrope } from "next/font/google";
import styles from "./HeroVidaDePerros.module.css";

// Las fuentes viven solo dentro de esta sección (no hay fuente global).
const display = Fraunces({ subsets: ["latin"], weight: ["800"], style: ["normal", "italic"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-body" });

const PAW = (
  <svg viewBox="0 0 64 64" fill="currentColor" aria-hidden>
    <ellipse cx="32" cy="42" rx="15" ry="12" />
    <ellipse cx="13" cy="26" rx="6" ry="8" transform="rotate(-20 13 26)" />
    <ellipse cx="25" cy="14" rx="6" ry="8.5" transform="rotate(-6 25 14)" />
    <ellipse cx="39" cy="14" rx="6" ry="8.5" transform="rotate(6 39 14)" />
    <ellipse cx="51" cy="26" rx="6" ry="8" transform="rotate(20 51 26)" />
  </svg>
);

const SERVICES = ["Veterinaria", "Peluquería canina", "Pet shop", "Vacunación", "Turnos online", "Guardería", "Alimento premium"];

export default function HeroVidaDePerros() {
  return (
    <section className={`${styles.hero} ${display.variable} ${body.variable}`}>
      <div className={`${styles.blob} ${styles.blobA}`} />
      <div className={`${styles.blob} ${styles.blobB}`} />
      <div className={styles.grain} />

      <header className={styles.nav}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoMark} style={{ color: "#ffc247" }}>
            <svg width="22" height="22" viewBox="0 0 64 64" fill="currentColor" aria-hidden>
              <ellipse cx="32" cy="42" rx="15" ry="12" /><ellipse cx="13" cy="26" rx="6" ry="8" /><ellipse cx="25" cy="14" rx="6" ry="8.5" /><ellipse cx="39" cy="14" rx="6" ry="8.5" /><ellipse cx="51" cy="26" rx="6" ry="8" />
            </svg>
          </span>
          Vida de Perros
        </a>
        <nav className={styles.links}>
          <a href="#">Servicios</a>
          <a href="#">Tienda</a>
          <a href="#">Promociones</a>
          <a href="#">Ubicación</a>
        </nav>
        <a href="#" className={styles.navBtn}>Sacar turno</a>
      </header>

      <div className={styles.content}>
        <div>
          <span className={styles.pill}><i className={styles.dot} /> Turnos disponibles hoy</span>
          <h1 className={`${styles.title} ${styles.display}`}>
            <span className={styles.line}><span>Cuidamos a tu</span></span>
            <span className={styles.line}>
              <span>
                <span className={styles.accent}>
                  perro
                  <svg viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden>
                    <path d="M2 8 Q 50 0 100 6 T 198 5" fill="none" stroke="#ffc247" strokeWidth="5" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                como
              </span>
            </span>
            <span className={styles.line}><span>de la familia.</span></span>
          </h1>
          <p className={styles.lead}>
            Veterinaria, peluquería y pet shop en un solo lugar. Reservá tu turno online, comprá lo que necesita y seguí el pedido sin vueltas.
          </p>
          <div className={styles.ctas}>
            <a href="#" className={`${styles.btn} ${styles.btnMain}`}>
              Reservar turno <span className={styles.arrow}>→</span>
            </a>
            <a href="#" className={`${styles.btn} ${styles.btnGhost}`}>Ver la tienda</a>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}><b className={styles.display}>+2.500</b><span>mascotas atendidas</span></div>
            <div className={styles.stat}><b className={styles.display}>4,9★</b><span>valoración de clientes</span></div>
            <div className={styles.stat}><b className={styles.display}>24 h</b><span>respuesta en turnos</span></div>
          </div>
        </div>

        <div className={styles.visual}>
          <svg className={styles.spin} viewBox="0 0 200 200" aria-hidden>
            <defs><path id="vdp-circle" d="M100,100 m-92,0 a92,92 0 1,1 184,0 a92,92 0 1,1 -184,0" /></defs>
            <text><textPath href="#vdp-circle">Veterinaria • Peluquería • Pet shop • Veterinaria • Peluquería • Pet shop •</textPath></text>
          </svg>

          <div className={styles.disc}>
            <svg className={styles.dog} viewBox="0 0 300 300" aria-label="Perro contento">
              <g className={styles.tail}><path d="M232 214c28-6 42-36 30-62-4-8-14-4-11 5 7 18-1 38-22 46z" fill="#ffc247" /></g>
              <ellipse cx="150" cy="238" rx="78" ry="56" fill="#ffc247" />
              <ellipse cx="108" cy="286" rx="22" ry="12" fill="#f2a92b" />
              <ellipse cx="192" cy="286" rx="22" ry="12" fill="#f2a92b" />
              <ellipse cx="150" cy="250" rx="42" ry="40" fill="#fff3d6" />
              <g className={styles.ear}><path d="M92 92c-30 6-46 40-34 74 22-6 40-26 44-52z" fill="#b9441b" /></g>
              <g className={styles.ear} style={{ animationDelay: ".4s" }}><path d="M208 92c30 6 46 40 34 74-22-6-40-26-44-52z" fill="#b9441b" /></g>
              <ellipse cx="150" cy="130" rx="66" ry="62" fill="#ffc247" />
              <ellipse cx="150" cy="156" rx="38" ry="30" fill="#fff3d6" />
              <circle cx="124" cy="120" r="9" fill="#12372a" /><circle cx="176" cy="120" r="9" fill="#12372a" />
              <circle cx="127" cy="117" r="3" fill="#fff" /><circle cx="179" cy="117" r="3" fill="#fff" />
              <ellipse cx="150" cy="144" rx="14" ry="10" fill="#12372a" />
              <path d="M150 154v10m-18 0c8 12 28 12 36 0" fill="none" stroke="#12372a" strokeWidth="5" strokeLinecap="round" />
              <path d="M138 170c4 18 20 18 24 0z" fill="#f26b3a" />
            </svg>
          </div>

          <div className={styles.badge}><div><small>desde</small><strong className={styles.display}>1er turno<br />sin cargo</strong></div></div>
          <div className={`${styles.card} ${styles.cardA}`}><i>💉</i><div>Vacunas al día<small>Recordatorio automático</small></div></div>
          <div className={`${styles.card} ${styles.cardB}`}><i>✂️</i><div>Baño y corte<small>Hoy 17:30 · libre</small></div></div>
          <span className={`${styles.paw} ${styles.paw1}`}>{PAW}</span>
          <span className={`${styles.paw} ${styles.paw2}`}>{PAW}</span>
        </div>
      </div>

      <div className={styles.marquee} aria-hidden>
        <div className={styles.track}>
          {[0, 1].map((k) => (
            <span key={k}>
              {SERVICES.map((s) => (<span key={s}>{s} <em>✦</em></span>))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
