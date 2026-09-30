import type { Metadata } from "next";
import { CheckoutView } from "@/components/store/CheckoutView";

export const metadata: Metadata = { title: "Finalizar compra", robots: { index: false } };

export default function CheckoutPage() {
  return <CheckoutView />;
}
