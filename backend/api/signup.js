import express from 'express';
import { supabaseAdmin } from '../db/supabaseClient.js'; 

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    const { data, error } = await supabaseAdmin.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: 'https://lagged-chlorine-tiger.ngrok-free.dev',
      },
      email_confirm: true
    });

    if (error) throw error;

    return res.status(200).json({ user: data.user, session: data.session });
    
  } catch (err) {
    console.error("Signup error:", err);
    res.status(400).json({ error: err.message });
  }
});

export { router as signup };
// export default rounter;