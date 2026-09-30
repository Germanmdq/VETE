import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { getSupabaseAnonKey, getSupabaseUrl } from "@/lib/supabase/env";
import { supabaseSessionCookieOptions } from "@/lib/supabase/cookie-options";

/**
 * Protege /admin cuando se usa la base real (NEXT_PUBLIC_VET_DATA_SOURCE=supabase):
 * exige sesión de Supabase Auth y que el usuario esté en la tabla vet_staff.
 * En modo demo el panel pide elegir rol en pantalla (solo para probar).
 */
export async function proxy(request: NextRequest) {
  if (process.env.NEXT_PUBLIC_VET_DATA_SOURCE !== "supabase") return NextResponse.next();

  let response = NextResponse.next({ request });
  const supabase = createServerClient(getSupabaseUrl(), getSupabaseAnonKey(), {
    cookieOptions: supabaseSessionCookieOptions,
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
      },
    },
  });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { pathname } = request.nextUrl;
  if (!user) return NextResponse.redirect(new URL(`/ingresar?next=${encodeURIComponent(pathname)}`, request.url));
  const { data: staff } = await supabase.from("vet_staff").select("role").eq("user_id", user.id).maybeSingle();
  if (!staff) return NextResponse.redirect(new URL("/", request.url));
  return response;
}

export const config = { matcher: ["/admin/:path*"] };
