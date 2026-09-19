export const supabaseConfig = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
};

export function hasSupabaseConfig() {
  return Boolean(supabaseConfig.url && supabaseConfig.anonKey);
}

export function getSupabaseClient() {
  if (!hasSupabaseConfig()) {
    return null;
  }

  return {
    url: supabaseConfig.url,
    anonKey: supabaseConfig.anonKey,
  };
}
