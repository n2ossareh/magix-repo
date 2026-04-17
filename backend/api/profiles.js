import { supabaseAdmin } from '../db/supabaseClient.js';

export async function addProfile(userId, name) {
  const { data, error } = await supabaseAdmin
    .from('profiles')
    .insert([{ user_id: userId, name }]);

  if (error) throw error;
  return data;
}

export async function getProfile(userId) {
  const { data, error } = await supabaseAdmin
    .from('profiles')
    .select('*')
    .eq('user_id', userId);

  if (error) throw error;
  return data;
}