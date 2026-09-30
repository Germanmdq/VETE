import type { Metadata } from "next";
import { Suspense } from "react";
import { LoginForm } from "@/components/store/LoginForm";

export const metadata: Metadata = { title: "Ingresar", robots: { index: false } };

export default function IngresarPage() {
  return (
    <div className="mx-auto max-w-md px-4 pt-10">
      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  );
}
