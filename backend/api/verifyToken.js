import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET;

export function verifyToken(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).send('No token provided');

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();

    } catch (err){
        res.status(401).send('Invalid token');
    }
}

// Attach to any route you want to protect
// Uses the same JWT_SECRET set up in .env
