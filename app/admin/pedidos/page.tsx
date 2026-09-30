import { Suspense } from "react";
import type { Metadata } from "next";
import { OrdersAdmin } from "@/components/admin/OrdersAdmin";
import { RequirePermission } from "@/components/admin/AdminShell";

export const metadata: Metadata = { title: "Pedidos" };

export default function Page() {
  return (
    <RequirePermission perm="orders.manage">
      <Suspense>
        <OrdersAdmin />
      </Suspense>
    </RequirePermission>
  );
}
