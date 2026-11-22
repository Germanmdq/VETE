"use client";
import Link from "next/link";
import { useCarrito } from "@/lib/carrito";
import s from "./vdp.module.css";

export default function CarritoFab() {
  const { total } = useCarrito();
  if (!total) return null;
  return (
    <Link href="/carrito" className={s.fab} aria-label="Ver carrito">
      🛒 Carrito <b>{total}</b>
    </Link>
  );
}
