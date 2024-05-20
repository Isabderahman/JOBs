// config/mongodb.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/jobs', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => {
    console.log('Connexion à la base de données MongoDB établie avec succès');
}).catch((err) => {
    console.error('Erreur de connexion à la base de données MongoDB:', err);
});
