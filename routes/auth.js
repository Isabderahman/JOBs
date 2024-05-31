// routes/auth.js

const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Clé secrète pour signer les tokens JWT
const JWT_SECRET = 'votre_clé_secrète';

// Route d'inscription
router.post('/signup', async (req, res) => {
  const { email, password, type_user } = req.body;
  try {
    const user = new User({ email, password, type_user });
    await user.save();
    res.status(201).json({ message: 'Utilisateur créé avec succès' });
  } catch (error) {
    res.status(400).json({ error: 'Erreur lors de la création de l\'utilisateur' });
  }
});

// Route de connexion
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Utilisateur non trouvé' });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Mot de passe incorrect' });
    }
    const token = jwt.sign({ id: user._id, type_user: user.type_user }, JWT_SECRET, { expiresIn: '3h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la connexion' });
  }
});

// Middleware pour vérifier le token JWT
const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ error: 'Accès refusé' });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token invalide' });
  }
};

// Route protégée (exemple)
router.get('/profile', authMiddleware, (req, res) => {
  res.json({ message: 'Accès autorisé', user: req.user });
});

module.exports = router;
