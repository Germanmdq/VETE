import type { Metadata } from "next";
import { CartView } from "@/components/store/CartView";

export const metadata: Metadata = { title: "Carrito", robots: { index: false } };

export default function CarritoPage() {
  return <CartView />;
}
