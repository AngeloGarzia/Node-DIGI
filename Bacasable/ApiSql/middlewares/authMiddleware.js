const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {

    // Récupérer le token depuis la requête
    const authHeader = req.headers['authorization'];
    // "Barear-Token 1g3fd5g1sd63f5g1s6d5gf1d.fdsf5dsf14d.d651f65s1f"
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Accès refusé. Token manquant.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Token invalide ou expiré.' });
    }
};

module.exports = authMiddleware;