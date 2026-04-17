import express from 'express';
import {  supabaseAdmin  } from '../db/supabaseClient.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { email, password} = req.body;

        const { data, error } = await supabaseAdmin.auth.signInWithPassword({
            email,
            password,
        });
        
        if (error) throw error;

        return res.status(200).json({user: data.user, session: data.session});

        

    } catch(err) {
        console.log("Login error:", err.message);
        res.status(500).json({ error: err.message});
    }
});

export { router as login };