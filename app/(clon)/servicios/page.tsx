import Pagina from "@/components/vdp/Pagina";
import s from "@/components/vdp/vdp.module.css";

const IMG = "/pawshy/wp-content/uploads/sites/163/2026/02/";
const SERVICIOS = [
  { i: "🩺", c: "#8FD6E5", t: "Consultas y control", d: "Revisión completa, diagnóstico y seguimiento de la salud de tu mascota, con veterinarios que la conocen." },
  { i: "💉", c: "#FA8930", t: "Vacunación", d: "Plan de vacunas y desparasitación al día, con recordatorios para que no se te pase ninguna fecha." },
  { i: "🛁", c: "#17B461", t: "Baño y secado suave", d: "Baño con shampoo seguro para mascotas y secado con secadores silenciosos." },
  { i: "✂️", c: "#EB5BA0", t: "Corte y peinado", d: "Cortes profesionales con el estilo de la raza o a medida, siempre con paciencia." },
  { i: "🔬", c: "#8FD6E5", t: "Estudios y cirugía", d: "Análisis, ecografías y cirugías programadas con seguimiento cercano." },
  { i: "🏠", c: "#FA8930", t: "Guardería y urgencias", d: "Un lugar seguro cuando no estás y atención rápida cuando algo no está bien." },
];

export default function Servicios() {
  return (
    <Pagina kicker="Nuestros servicios" titulo="Todo lo que tu mascota necesita" bajada="Veterinaria, peluquería y pet shop en un solo lugar. Elegí el servicio y reservá tu turno.">
      <section className={s.sec}>
        <div className={`${s.wrap} ${s.grid} ${s.g3}`}>
          {SERVICIOS.map((x) => (
            <div key={x.t} className={s.card}>
              <div className={s.ico} style={{ background: x.c + "44" }}>{x.i}</div>
              <h3>{x.t}</h3>
              <p>{x.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className={s.sec}>
        <div className={`${s.wrap} ${s.grid} ${s.g3}`}>
          {[1, 2, 3].map((n) => (<img key={n} className={s.img} alt="" src={`${IMG}Pawshy-Care-Image-${n}.webp`} />))}
        </div>
      </section>
      <section className={s.sec}>
        <div className={s.wrap}>
          <div className={s.band}>
            <h2>¿Listo para sacar turno?</h2>
            <a className={s.btn} href="/contacto">Reservar turno</a>
          </div>
        </div>
      </section>
    </Pagina>
  );
}
