import { Suspense } from "react";
import type { Metadata } from "next";
import { AppointmentsAdmin } from "@/components/admin/AppointmentsAdmin";
import { RequirePermission } from "@/components/admin/AdminShell";

export const metadata: Metadata = { title: "Turnos" };

export default function Page() {
  return (
    <RequirePermission perm="appointments.manage">
      <Suspense>
        <AppointmentsAdmin />
      </Suspense>
    </RequirePermission>
  );
}
