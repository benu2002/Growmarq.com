import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wuwhzpxqzebdounudttv.supabase.co';
const supabaseKey = 'sb_publishable_ZxsZP4-fr0PMR2QEgo1EJQ_TovD11tj';

export const supabase = createClient(supabaseUrl, supabaseKey);
