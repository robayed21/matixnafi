import { createClient } from '@supabase/supabase-js';
const url = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://wbqozbnupwjaggqxbyax.supabase.co';
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_XaXYdREj8chG9rzVI7_ZIA_4V9RTLkJ';
export const supabase = createClient(url, key, { auth: { persistSession: true } });
