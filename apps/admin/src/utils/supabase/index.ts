import { createClient } from '@pankod/refine-supabase';

import { SUPABASE_KEY, SUPABASE_URL } from '@react-pos/admin/constant';

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
