"use client";
import { Suspense } from "react";
import { CustomersAdmin } from "@/components/admin/CustomersAdmin";
import { RequirePermission } from "@/components/admin/AdminShell";

export default function Page() {
  return (
    <RequirePermission perm="customers.view">
      <Suspense>
        <CustomersAdmin />
      </Suspense>
    </RequirePermission>
  );
}
