import { Suspense } from "react";
import type { Metadata } from "next";
import { ProductsAdmin } from "@/components/admin/ProductsAdmin";
import { RequirePermission } from "@/components/admin/AdminShell";

export const metadata: Metadata = { title: "Productos" };

export default function Page() {
  return (
    <RequirePermission perm="stock.manage">
      <Suspense>
        <ProductsAdmin />
      </Suspense>
    </RequirePermission>
  );
}
