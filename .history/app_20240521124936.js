// app.js

const express = require('express');
const mongoose = require('mongoose');
// const apiRoutes = require('./routes/api');
// const sequelize = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());k

// Routes API
// app.use('/api', apiRoutes);

// Synchroniser les modèles avec la base de données
mongoose.connect('mongodb://localhost:27017/jobs01', {
}).then(() => {
  console.log('Connexion à la base de données MongoDB établie avec succès');
}).catch((err) => {
  console.error('Erreur de connexion à la base de données MongoDB:', err);
});


// Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});