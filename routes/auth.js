const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { Recruteur, Candidat } = require("../models");
const bcrypt = require("bcryptjs");
const multer = require('multer');
const path = require('path');

// Clé secrète pour signer les tokens JWT
const JWT_SECRET = "votre_clé_secrète";

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/profiles/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// Configure Multer to use the storage
const upload = multer({ storage });

// fonction pour hacher le mot de passe
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Route d'inscription
router.post("/signup", upload.single('profileImage'), async (req, res) => {
  const type_user = req.body.type_user;
  const profilepath = req.file ? req.file.path : null;

  if (type_user === "recruteur") {
    const {
      email,
      password,
      prenom,
      nom,
      adresse,
      telephone,
      date_naissance,
      id_entreprise,
    } = req.body;

    try {
      const hashedPassword = await hashPassword(password);
      const user = new User({ email, password: hashedPassword, type_user });
      await user.save();
      const recruteur = new Recruteur({
        id_user: user._id,
        prenom,
        nom,
        adresse,
        date_naissance,
        id_entreprise,
        telephone,
        profilepath
      });
      await recruteur.save();
      res.status(201).json({ message: `Recruteur ${nom} créé avec succès` });
    } catch (error) {
      res
        .status(400)
        .json({ error: `Erreur lors de la création de ce recruteur ${error}` });
    }
  } else {
    const {
      email,
      password,
      prenom,
      nom,
      adresse,
      telephone,
      date_naissance,
      education,
      experiences,
      competences,
    } = req.body;

    try {
      const hashedPassword = await hashPassword(password);
      const user = new User({ email, password: hashedPassword, type_user });
      await user.save();
      const candidat = new Candidat({
        id_user: user._id,
        prenom,
        nom,
        adresse,
        telephone,
        date_naissance,
        education,
        experiences,
        competences,
        profilepath
      });
      await candidat.save();
      res.status(201).json({ message: `Candidat ${nom} créé avec succès` });
    } catch (error) {
      res
        .status(400)
        .json({ error: `Erreur lors de la création de ce candidat ${error}` });
    }
  }
});

// Route de connexion
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Utilisateur non trouvé" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ error: "Mot de passe incorrect" });
    }
    const token = jwt.sign(
      { id: user._id, type_user: user.type_user },
      JWT_SECRET,
      { expiresIn: "3h" }
    );
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la connexion" });
  }
});

// Route protégée (exemple)
router.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "Accès autorisé", user: req.user });
});

module.exports = router;
