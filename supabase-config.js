
/* CONEXIÓN PÚBLICA A SUPABASE - VERDEZA */

const SUPABASE_URL =
  "https://fuiyiijjzaelgpmspzpz.supabase.co";

const SUPABASE_PUBLIC_KEY =
  "sb_publishable_52Kkfp92vFNmIOdfjBBLbQ_TSgEOUuT";

const verdezaDB = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLIC_KEY
);
