// app.js

const express = require('express');
const connectDB=require('./config/mongodb')
const apiRoutes = require('./routes/auth');
// const sequelize = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
// Routes API
app.use('/api',apiRoutes);

// Synchroniser les modèles avec la base de données
connectDB();


// Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});