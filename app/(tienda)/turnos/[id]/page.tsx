import type { Metadata } from "next";
import { AppointmentConfirmation } from "@/components/store/AppointmentConfirmation";

export const metadata: Metadata = { title: "Turno solicitado", robots: { index: false } };

export default async function TurnoPage({ params }: { params: Promise<{ id: string }> }) {
  return <AppointmentConfirmation id={(await params).id} />;
}
