import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://oyxhncwfkecfsakdnlwo.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY as string;

const supabase = createClient(supabaseUrl, supabaseKey);

export const createJoinListRecord = (value: { email_address: string }) =>
	supabase.from('LanderWaitList').insert([value]);
