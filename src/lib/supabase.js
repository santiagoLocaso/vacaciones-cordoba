import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://njixzjkonbbeearewmaz.supabase.co";
const SUPABASE_KEY = "sb_publishable_xVCHnC2Ffn_8daBN8LVqpg_f8C-Shqp"; // Pegá acá la clave que empieza con sb_publishable_...

export const _supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
