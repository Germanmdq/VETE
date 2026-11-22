"use client";
import { useState } from "react";
import s from "./vdp.module.css";

export default function FormContacto() {
  const [enviado, setEnviado] = useState(false);
  return (
    <form
      className={s.form}
      onSubmit={(e) => {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        const cuerpo = `Nombre: ${f.get("nombre")}\nTeléfono: ${f.get("tel")}\nMascota: ${f.get("mascota")}\nServicio: ${f.get("servicio")}\n\n${f.get("msg")}`;
        window.location.href = `https://wa.me/5491159772229?text=${encodeURIComponent(cuerpo)}`;
        setEnviado(true);
      }}
    >
      <label>Tu nombre<input name="nombre" required placeholder="María" /></label>
      <label>Teléfono<input name="tel" required placeholder="11 5555 5555" /></label>
      <label>Nombre de tu mascota<input name="mascota" placeholder="Rocky" /></label>
      <label>Servicio
        <select name="servicio" defaultValue="Consulta veterinaria">
          <option>Consulta veterinaria</option><option>Vacunación</option><option>Peluquería</option><option>Estudios / cirugía</option><option>Pet shop</option><option>Otro</option>
        </select>
      </label>
      <label>Mensaje<textarea name="msg" rows={4} placeholder="Contanos qué necesitás y qué días te quedan bien." /></label>
      <button className={s.btn} type="submit" style={{ justifySelf: "start" }}>{enviado ? "✓ Listo, revisá tu mail" : "Pedir turno"}</button>
    </form>
  );
}
