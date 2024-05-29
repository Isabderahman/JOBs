// seed.js

const mongoose = require('mongoose');
const User = require('../models/User'); 
const Publication = require('../models/Publication'); 

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/jobs01', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connexion à MongoDB établie avec succès');
  seedDatabase();
}).catch((err) => {
  console.error('Erreur de connexion à MongoDB:', err);
});

// Fonction de seeding
async function seedDatabase() {
  try {
    // Supprimer les anciennes données si nécessaire
    await User.deleteMany({});
    await Publication.deleteMany({});

    // Ajouter des utilisateurs
    const users = [
      { username: 'user1', email: 'user1@example.com', password: 'password1',type_user:"candidat" },
      { username: 'user2', email: 'user2@example.com', password: 'password2',type_user:"recruteur" },
      // Ajoutez plus d'utilisateurs ici
    ];

    const insertedUsers = await User.insertMany(users);
    console.log('Users ajoutés avec succès');

    // Ajouter des publications
    const publications = [
      { titre: 'Publication 1', contenu: 'Contenu de la publication 1', auteur: insertedUsers[0]._id },
      { titre: 'Publication 2', contenu: 'Contenu de la publication 2', auteur: insertedUsers[1]._id },
      // Ajoutez plus de publications ici
    ];

    await Publication.insertMany(publications);
    console.log('Publications ajoutées avec succès');

    // Fermer la connexion à MongoDB
    mongoose.connection.close();
    console.log('Connexion à MongoDB fermée');
  } catch (error) {
    console.error('Erreur lors du seeding de la base de données:', error);
  }
}

// pour exucuter le seeders saisi la commande suivant : 
//npm run seed