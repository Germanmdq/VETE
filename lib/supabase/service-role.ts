import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { getSupabaseUrl } from "./env";

/** Cliente con service role: SOLO en rutas de servidor, nunca en el navegador. */
export function createServiceRoleClient(): SupabaseClient {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  if (!key) throw new Error("Falta SUPABASE_SERVICE_ROLE_KEY en el servidor");
  return createClient(getSupabaseUrl(), key, { auth: { autoRefreshToken: false, persistSession: false } });
}
