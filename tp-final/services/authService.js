const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const register = async (userData) => {
    // Je test si les creditentiels sont deja dans la base de donnee
    const { username,email, password,role,createdAt,updatedAt } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    return await User.create({ username,email,role,createdAt,updatedAt, password: hashedPassword });
};

const login = async (email, password) => {
    const user = await User.findOne({ where: { email } });
    if (!user) {
        throw new Error('Utilisateur non trouvé');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Mot de passe incorrect');
    }

    const token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.SECRET_KEY,
        { expiresIn: '1h' }
    );

    return { user, token };
};

module.exports = {
    register,
    login,
};