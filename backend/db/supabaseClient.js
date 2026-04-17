import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv'

dotenv.config()

export const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,                 // from Supabase project
  process.env.SUPABASE_SERVICE_ROLE_KEY     // backend-only key
);