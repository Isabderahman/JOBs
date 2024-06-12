// seed.js

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const Publication = require("../models/Publication");
const Entreprise = require("../models/Entreprise");
const Recruteur = require("../models/Recruteur");
const Candidat = require("../models/Candidat");
const Offre = require('../models/Offre')
// Connexion à MongoDB
mongoose
  .connect("mongodb://localhost:27017/jobs01", {})
  .then(() => {
    console.log("Connexion à MongoDB établie avec succès");
    seedDatabase();
  })
  .catch((err) => {
    console.error("Erreur de connexion à MongoDB:", err);
  });

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
// Fonction de seeding
async function seedDatabase() {
  try {
    // Supprimer les anciennes données si nécessaire
    await User.deleteMany({});
    await Publication.deleteMany({});
    await Entreprise.deleteMany({});
    await Recruteur.deleteMany({});
    await Candidat.deleteMany({});
    await Offre.deleteMany({});
    

    // Ajouter des utilisateurs
    const users = [
      {
        username: "user1",
        email: "user1@example.com",
        password: await hashPassword("password"),
        type_user: "candidat",
      },
      {
        username: "user2",
        email: "user2@example.com",
        password: await hashPassword("password"),
        type_user: "recruteur",
      },
      {
        username: "user3",
        email: "user39@example.com",
        password: await hashPassword("password"),
        type_user: "candidat",
      },
      {
        username: "user4",
        email: "user44@example.com",
        password: await hashPassword("password"),
        type_user: "recruteur",
      },
      {
        username: "user5",
        email: "ahmad66@example.com",
        password: await hashPassword("password"),
        type_user: "candidat",
      },
      {
        username: "user6",
        email: "youssef26@example.com",
        password: await hashPassword("password"),
        type_user: "recruteur",
      },
      {
        username: "user7",
        email: "Amire333@example.com",
        password: await hashPassword("password"),
        type_user: "candidat",
      },
      {
        username: "user8",
        email: "asame444@example.com",
        password: await hashPassword("password"),
        type_user: "recruteur",
      },
      {
        username: "user9",
        email: "lamia111@example.com",
        password: await hashPassword("password"),
        type_user: "candidat",
      },
      {
        username: "user10",
        email: "ferdaous22@example.com",
        password: await hashPassword("password"),
        type_user: "recruteur",
      },
      {
        username: "user11",
        email: "laila37@example.com",
        password: await hashPassword("password"),
        type_user: "candidat",
      },
      {
        username: "user12",
        email: "jaalal46@example.com",
        password: await hashPassword("password"),
        type_user: "recruteur",
      },
      {
        username: "user13",
        email: "chams166@example.com",
        password: await hashPassword("password"),
        type_user: "candidat",
      },
      {
        username: "user14",
        email: "Nour22@example.com",
        password: await hashPassword("password"),
        type_user: "recruteur",
      },
      {
        username: "user15",
        email: "riad33@example.com",
        password: await hashPassword("password"),
        type_user: "candidat",
      },
      {
        username: "user16",
        email: "brahim4@example.com",
        password: await hashPassword("password"),
        type_user: "recruteur",
      },
      {
        username: "user17",
        email: "Messi10@example.com",
        password: await hashPassword("password"),
        type_user: "candidat",
      },
      {
        username: "user18",
        email: "ronaldo0@example.com",
        password: await hashPassword("password"),
        type_user: "recruteur",
      },
      {
        username: "user19",
        email: "Xavi5@example.com",
        password: await hashPassword("password"),
        type_user: "candidat",
      },
      {
        username: "user20",
        email: "Alonso14@example.com",
        password: await hashPassword("password"),
        type_user: "recruteur",
      },
      {
        username: "user21",
        email: "Yamal123@example.com",
        password: await hashPassword("password"),
        type_user: "candidat",
      },
      {
        username: "user22",
        email: "hamid342@example.com",
        password: await hashPassword("password"),
        type_user: "recruteur",
      },
      {
        username: "user23",
        email: "samir53@example.com",
        password: await hashPassword("password"),
        type_user: "candidat",
      },
      {
        username: "user24",
        email: "Kadiri49@example.com",
        password: await hashPassword("password"),
        type_user: "recruteur",
      },
      // Ajoutez plus d'utilisateurs ici
    ];

    const insertedUsers = await User.insertMany(users);
    console.log("Users ajoutés avec succès");

    // Ajouter des publications
    const publications = [
      {
        titre: "Publication 1",
        contenu: "Contenu de la publication 1",
        auteur: insertedUsers[0]._id,
        imagePath:"sqjflkjdsqlkfjd",
      },
      {
        titre: "Publication 2",
        contenu: "Contenu de la publication 2",
        auteur: insertedUsers[1]._id,
      },
      {
        titre: "Publication 3",
        contenu: "Contenu de la publication 3",
        auteur: insertedUsers[3]._id,
      },
      {
        titre: "Publication 4",
        contenu: "Contenu de la publication 4",
        auteur: insertedUsers[4]._id,
      },
      {
        titre: "Publication 5",
        contenu: "Contenu de la publication 5",
        auteur: insertedUsers[5]._id,
      },
      {
        titre: "Publication 6",
        contenu: "Contenu de la publication 6",
        auteur: insertedUsers[6]._id,
      },
      {
        titre: "Publication 7",
        contenu: "Contenu de la publication 7",
        auteur: insertedUsers[7]._id,
      },
      {
        titre: "Publication 8",
        contenu: "Contenu de la publication 8",
        auteur: insertedUsers[8]._id,
      },
      {
        titre: "Publication 9",
        contenu: "Contenu de la publication 9",
        auteur: insertedUsers[9]._id,
      },
      {
        titre: "Publication 10",
        contenu: "Contenu de la publication 10",
        auteur: insertedUsers[10]._id,
      },
      {
        titre: "Publication 11",
        contenu: "Contenu de la publication 11",
        auteur: insertedUsers[11]._id,
      },
      {
        titre: "Publication 12",
        contenu: "Contenu de la publication 12",
        auteur: insertedUsers[12]._id,
      },
      {
        titre: "Publication 13",
        contenu: "Contenu de la publication 13",
        auteur: insertedUsers[13]._id,
      },
      {
        titre: "Publication 14",
        contenu: "Contenu de la publication 14",
        auteur: insertedUsers[14]._id,
      },
      {
        titre: "Publication 15",
        contenu: "Contenu de la publication 15",
        auteur: insertedUsers[15]._id,
      },
      {
        titre: "Publication 16",
        contenu: "Contenu de la publication 16",
        auteur: insertedUsers[16]._id,
      },
      {
        titre: "Publication 17",
        contenu: "Contenu de la publication 17",
        auteur: insertedUsers[17]._id,
      },
      {
        titre: "Publication 18",
        contenu: "Contenu de la publication 18",
        auteur: insertedUsers[18]._id,
      },
      {
        titre: "Publication 19",
        contenu: "Contenu de la publication 19",
        auteur: insertedUsers[19]._id,
      },
      {
        titre: "Publication 20",
        contenu: "Contenu de la publication 20",
        auteur: insertedUsers[20]._id,
      },
      {
        titre: "Publication 21",
        contenu: "Contenu de la publication 21",
        auteur: insertedUsers[21]._id,
      },
      {
        titre: "Publication 22",
        contenu: "Contenu de la publication 21",
        auteur: insertedUsers[22]._id,
      },
      {
        titre: "Publication 23",
        contenu: "Contenu de la publication 22",
        auteur: insertedUsers[23]._id,
      },
      {
        titre: "Publication 24",
        contenu: "Contenu de la publication 23",
        auteur: insertedUsers[1]._id,
      },
      {
        titre: "Publication 25",
        contenu: "Contenu de la publication 24",
        auteur: insertedUsers[14]._id,
      },
      {
        titre: "Publication 26",
        contenu: "Contenu de la publication 25",
        auteur: insertedUsers[16]._id,
      },
      {
        titre: "Publication 27",
        contenu: "Contenu de la publication 26",
        auteur: insertedUsers[0]._id,
      },
      {
        titre: "Publication 28",
        contenu: "Contenu de la publication 27",
        auteur: insertedUsers[1]._id,
      },
      {
        titre: "Publication 29",
        contenu: "Contenu de la publication 28",
        auteur: insertedUsers[0]._id,
      },
      {
        titre: "Publication 30",
        contenu: "Contenu de la publication 29",
        auteur: insertedUsers[1]._id,
      },
      {
        titre: "Publication 31",
        contenu: "Contenu de la publication 30",
        auteur: insertedUsers[0]._id,
      },
      {
        titre: "Publication 32",
        contenu: "Contenu de la publication 31",
        auteur: insertedUsers[1]._id,
      },
      {
        titre: "Publication 33",
        contenu: "Contenu de la publication 32",
        auteur: insertedUsers[0]._id,
      },
      {
        titre: "Publication 34",
        contenu: "Contenu de la publication 34",
        auteur: insertedUsers[1]._id,
      },
      {
        titre: "Publication 35",
        contenu: "Contenu de la publication 35",
        auteur: insertedUsers[10]._id,
      },
      {
        titre: "Publication 36",
        contenu: "Contenu de la publication 36",
        auteur: insertedUsers[11]._id,
      },
      {
        titre: "Publication 37",
        contenu: "Contenu de la publication 37",
        auteur: insertedUsers[12]._id,
      },
      {
        titre: "Publication 38",
        contenu: "Contenu de la publication 38",
        auteur: insertedUsers[13]._id,
      },
      {
        titre: "Publication 39",
        contenu: "Contenu de la publication 39",
        auteur: insertedUsers[14]._id,
      },
      {
        titre: "Publication 40",
        contenu: "Contenu de la publication 40",
        auteur: insertedUsers[15]._id,
      },
      {
        titre: "Publication 41",
        contenu: "Contenu de la publication 41",
        auteur: insertedUsers[16]._id,
      },
      {
        titre: "Publication 42",
        contenu: "Contenu de la publication 42",
        auteur: insertedUsers[17]._id,
      },
      {
        titre: "Publication 43",
        contenu: "Contenu de la publication 43",
        auteur: insertedUsers[18]._id,
      },
      {
        titre: "Publication 44",
        contenu: "Contenu de la publication 44",
        auteur: insertedUsers[19]._id,
      },
      {
        titre: "Publication 45",
        contenu: "Contenu de la publication 45",
        auteur: insertedUsers[20]._id,
      },
      {
        titre: "Publication 46",
        contenu: "Contenu de la publication 46",
        auteur: insertedUsers[21]._id,
      },
      {
        titre: "Publication 47",
        contenu: "Contenu de la publication 47",
        auteur: insertedUsers[10]._id,
      },
      {
        titre: "Publication 48",
        contenu: "Contenu de la publication 48",
        auteur: insertedUsers[11]._id,
      },
      {
        titre: "Publication 49",
        contenu: "Contenu de la publication 49",
        auteur: insertedUsers[12]._id,
      },
      {
        titre: "Publication 50 ",
        contenu: "Contenu de la publication 50",
        auteur: insertedUsers[13]._id,
      },
      {
        titre: "Publication 51",
        contenu: "Contenu de la publication 51",
        auteur: insertedUsers[14]._id,
      },
      {
        titre: "Publication 52",
        contenu: "Contenu de la publication 52",
        auteur: insertedUsers[15]._id,
      },
      {
        titre: "Publication 53",
        contenu: "Contenu de la publication 53",
        auteur: insertedUsers[16]._id,
      },
      {
        titre: "Publication 54",
        contenu: "Contenu de la publication 54",
        auteur: insertedUsers[17]._id,
      },
      {
        titre: "Publication 55",
        contenu: "Contenu de la publication 55",
        auteur: insertedUsers[18]._id,
      },
      {
        titre: "Publication 56",
        contenu: "Contenu de la publication 56",
        auteur: insertedUsers[19]._id,
      },
      {
        titre: "Publication 57",
        contenu: "Contenu de la publication 57",
        auteur: insertedUsers[20]._id,
      },
      {
        titre: "Publication 58",
        contenu: "Contenu de la publication 58",
        auteur: insertedUsers[21]._id,
      },
      {
        titre: "Publication 59",
        contenu: "Contenu de la publication 59",
        auteur: insertedUsers[20]._id,
      },
      {
        titre: "Publication 60",
        contenu: "Contenu de la publication 60",
        auteur: insertedUsers[21]._id,
      },
      // Ajoutez plus de publications ici
    ];

    await Publication.insertMany(publications);
    console.log("Publications ajoutées avec succès");

    const entreprises = [
      {
        nom: "Entreprise Ajax",
        siret: "12345601234",
        adresse: "123 Rue de Exemple, 75000 Paris, France",
        activite: "Informatique",
        site_web: "http://www.entreprise-a.com",
        logo: "https://picsum.photos/200/300",
      },
      {
        nom: "Entreprise gttp",
        siret: "6789012345",
        adresse: "456 Avenue de Exemple, 69000 Lyon, France",
        activite: "Construction",
        site_web: "http://www.entreprise-b.com",
        logo: "https://picsum.photos/200/300",
      },
      {
        nom: "Entreprise C++",
        adresse: "789 Boulevard de Exemple, 13000 Marseille, France",
        activite: "Consulting",
      },
      {
        nom: "Entreprise apple",
        siret: "78901234",
        adresse: "123 Rue de Exemple, 75000 Paris, France",
        activite: "Informatique",
        site_web: "http://www.entreprise-a.com",
        logo: "https://picsum.photos/200/300",
      },
      {
        nom: "Entreprise Bilalex",
        siret: "23456",
        adresse: "456 Avenue de Exemple, 69000 Lyon, France",
        activite: "Construction",
        site_web: "http://www.entreprise-b.com",
        logo: "https://picsum.photos/200/300",
      },
      {
        nom: "Entreprise Cilio",
        adresse: "78944 Boulevard de Exemple, 13000 Marseille, France",
        activite: "Consulting",
      },
      {
        nom: "Entreprise aminoux",
        siret: "12901234",
        adresse: "123 Rue de Exemple, 75000 Paris, France",
        activite: "Informatique",
        site_web: "http://www.entreprise-a.com",
        logo: "https://picsum.photos/200/300",
      },
      {
        nom: "Entreprise Boua",
        siret: "23456789012345",
        adresse: "456 Avenue de Exemple, 69000 Lyon, France",
        activite: "Construction",
        site_web: "http://www.entreprise-b.com",
        logo: "https://picsum.photos/200/300",
      },
      {
        nom: "Entreprise Chamse",
        adresse: "789 Boulevard de Exemple, 13000 Marseille, France",
        activite: "Consulting",
      },
      {
        nom: "Entreprise Serve",
        siret: "12345678901234",
        adresse: "123 Rue de Exemple, 75000 Paris, France",
        activite: "Informatique",
        site_web: "http://www.entreprise-a.com",
        logo: "https://picsum.photos/200/300",
      },
      {
        nom: "Entreprise windo",
        siret: "23455",
        adresse: "456 Avenue de Exemple, 69000 Lyon, France",
        activite: "Construction",
        site_web: "http://www.entreprise-b.com",
        logo: "https://picsum.photos/200/300",
      },
      {
        nom: "Entreprise samar",
        siret: "12347887",
        adresse: "123 Rue de Exemple, 75000 Paris, France",
        activite: "Informatique",
        site_web: "http://www.entreprise-a.com",
        logo: "https://picsum.photos/200/300",
      },
      {
        nom: "Entreprise rita",
        siret: "2345666012345",
        adresse: "456 Avenue de Exemple, 69000 Lyon, France",
        activite: "Construction",
        site_web: "http://www.entreprise-b.com",
        logo: "https://picsum.photos/200/300",
      },
      {
        nom: "Entreprise inteel",
        adresse: "13424 Boulevard de Exemple, 13000 Marseille, France",
        activite: "Consulting",
      },
    ];
    const insertedEntreprise = await Entreprise.insertMany(entreprises);
    console.log("Entreprises ajoutées avec succès");

    const recruteurs = [
      {
        idEntreprise: insertedEntreprise[0]._id,
        id_user: insertedUsers[1]._id,
        prenom: "fadi",
        nom: "Doe",
        adresse: "123 Rue de Exemple, 75000 Paris, France",
        date_naissance: new Date("1990-01-01"),
        telephone: "0788456789",
        profilePath: "http://www.example.com/profile/johndoe",
      },
      {
        idEntreprise: insertedEntreprise[1]._id,
        id_user: insertedUsers[3]._id,
        prenom: "alex",
        nom: "rit",
        adresse: "456 Avenue de Exemple, 69000 Lyon, France",
        date_naissance: new Date("1985-02-15"),
        telephone: "0755654321",
      },
      {
        idEntreprise: insertedEntreprise[13]._id,
        id_user: insertedUsers[15]._id,
        prenom: "alberet",
        nom: "diaz",
        adresse: "123 Rue de Exemple, 75000 Paris, France",
        date_naissance: new Date("1990-01-01"),
        telephone: "0566456789",
        profilePath: "http://www.example.com/profile/johndoe",
      },
      {
        idEntreprise: insertedEntreprise[2]._id,
        id_user: insertedUsers[5]._id,
        prenom: "halid",
        nom: "hafed",
        adresse: "456 Avenue de Exemple, 69000 Lyon, France",
        date_naissance: new Date("1985-02-15"),
        telephone: "0544654321",
      },
      {
        idEntreprise: insertedEntreprise[0]._id,
        id_user: insertedUsers[7]._id,
        prenom: "aeron",
        nom: "max",
        adresse: "123 Rue de Exemple, 75000 Paris, France",
        date_naissance: new Date("1990-01-01"),
        telephone: "0723459989",
        profilePath: "http://www.example.com/profile/johndoe",
      },
      {
        idEntreprise: insertedEntreprise[9]._id,
        id_user: insertedUsers[9]._id,
        prenom: "laila",
        nom: "Najl",
        adresse: "456 Avenue de Exemple, 69000 Lyon, France",
        date_naissance: new Date("1985-02-15"),
        telephone: "0687994321",
      },
      {
        idEntreprise: insertedEntreprise[13]._id,
        id_user: insertedUsers[13]._id,
        prenom: "hassan",
        nom: "lkerd",
        adresse: "123 Rue de Exemple, 75000 Paris, France",
        date_naissance: new Date("1990-01-01"),
        telephone: "0523776789",
        profilePath: "http://www.example.com/profile/johndoe",
      },
      {
        idEntreprise: insertedEntreprise[12]._id,
        id_user: insertedUsers[11]._id,
        prenom: "tach",
        nom: "matach",
        adresse: "456 Avenue de Exemple, 69000 Lyon, France",
        date_naissance: new Date("1985-02-15"),
        telephone: "078454321",
      },
      {
        idEntreprise: insertedEntreprise[7]._id,
        id_user: insertedUsers[17]._id,
        prenom: "fahd",
        nom: "nasser",
        adresse: "123 Rue de Exemple, 75000 Paris, France",
        date_naissance: new Date("1990-01-01"),
        telephone: "0662456789",
        profilePath: "http://www.example.com/profile/johndoe",
      },
      {
        idEntreprise: insertedEntreprise[5]._id,
        id_user: insertedUsers[5]._id,
        prenom: "kzabri",
        nom: "youssef",
        adresse: "456 Avenue de Exemple, 69000 Lyon, France",
        date_naissance: new Date("1985-02-15"),
        telephone: "0787654321",
        profilepath:"kjfsdlkjlkdsjlk"
      },
    ];

    insertedRecruteur = await Recruteur.insertMany(recruteurs);
    console.log("les recruteur ajouté avec success");

    const candidats = [
      {
        id_user: insertedUsers[0]._id,
        prenom: "Alice",
        nom: "Smith",
        adresse: "123 Rue de Exemple, 75000 Paris, France",
        date_naissance: new Date("1990-01-01"),
        telephone: "0123456789",
        profilepath: "http://www.example.com/profile/alicesmith",
        education: [
          {
            diplome: "Master en Informatique",
            institut: "Université de Paris",
            date_debut: new Date("2010-09-01"),
            date_fin: new Date("2012-06-30"),
            description: "Spécialisation en intelligence artificielle",
          },
        ],
        experiences: [
          {
            poste: "Développeur Full Stack",
            entreprise: "TechCorp",
            date_debut: new Date("2012-09-01"),
            date_fin: new Date("2016-12-31"),
            description: "Développement de solutions web et mobiles",
          },
        ],
        competences: [{ competence: ["JavaScript", "Node.js", "React"] }],
      },
      {
        id_user: insertedUsers[2]._id,
        prenom: "Bob",
        nom: "Johnson",
        adresse: "456 Avenue de Exemple, 69000 Lyon, France",
        date_naissance: new Date("1985-05-15"),
        telephone: "0987654321",
        education: [
          {
            diplome: "Licence en Mathématiques",
            institut: "Université de Lyon",
            date_debut: new Date("2005-09-01"),
            date_fin: new Date("2008-06-30"),
            description: "Mathématiques appliquées et statistiques",
          },
        ],
        experiences: [
          {
            poste: "Analyste de données",
            entreprise: "DataCorp",
            date_debut: new Date("2008-09-01"),
            date_fin: new Date("2012-12-31"),
            description: "Analyse de données et création de rapports",
          },
        ],
        competences: [{ competence: ["Python", "R", "SQL"] }],
      },
    ];
    insertedCnadidat = await Candidat.insertMany(candidats);
    console.log("les candidat ajouté avec success");


    const entreprisess = await Entreprise.find(); // Assurez-vous d'avoir quelques entreprises dans votre collection
    if (entreprises.length === 0) {
      console.log('Veuillez ajouter quelques entreprises avant d\'exécuter le seeder.');
      return;
    }

    const offres = Array.from({ length: 20 }).map((_, index) => ({
      titre: `Offre ${index + 1}`,
      description: `Description de l'offre ${index + 1}`,
      date_publication: new Date(),
      typeContrat: 'CDI',
      salaire: '50000',
      lieu: 'Paris',
      idEntreprises: insertedEntreprise[0]._id,
      competences: ['Compétence 1', 'Compétence 2'],
      experiences: ['Experience 1', 'Experience 2'],
      autres_informations: 'Autres informations pertinentes',
      logo: 'https://via.placeholder.com/150',
      date_debut: new Date(),
      date_fin: new Date(),
    }));

    await Offre.insertMany(offres);
    console.log('Seeder exécuté avec succès.');
    // Fermer la connexion à MongoDB
    mongoose.connection.close();
    console.log("Connexion à MongoDB fermée");
  } catch (error) {
    console.error("Erreur lors du seeding de la base de données:", error);
  }

}

//pour exucuter le seeder saisi la commande suivant :
//npm run seed
