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
    
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------
    // Ajouter des utilisateurs
    const users = [
      {
        username: "Abdelaziz",
        email: "abdelaziz@example.com",
        password: await hashPassword("password"),
        type_user: "candidat",
      },
      {
        username: "Fatima",
        email: "fatima@example.com",
        password: await hashPassword("password"),
        type_user: "recruteur",
      },
      {
        username: "Youssef",
        email: "youssef@example.com",
        password: await hashPassword("password"),
        type_user: "candidat",
      },
      {
        username: "Khadija",
        email: "khadija@example.com",
        password: await hashPassword("password"),
        type_user: "recruteur",
      },
      {
        username: "Hassan",
        email: "hassan@example.com",
        password: await hashPassword("password"),
        type_user: "candidat",
      },
      {
        username: "Amina",
        email: "amina@example.com",
        password: await hashPassword("password"),
        type_user: "recruteur",
      },
      {
        username: "Mohammed",
        email: "mohammed@example.com",
        password: await hashPassword("password"),
        type_user: "candidat",
      },
      {
        username: "Nadia",
        email: "nadia@example.com",
        password: await hashPassword("password"),
        type_user: "recruteur",
      },
      {
        username: "Zineb",
        email: "zineb@example.com",
        password: await hashPassword("password"),
        type_user: "candidat",
      },
      {
        username: "Said",
        email: "said@example.com",
        password: await hashPassword("password"),
        type_user: "recruteur",
      },
      {
        username: "Loubna",
        email: "loubna@example.com",
        password: await hashPassword("password"),
        type_user: "candidat",
      },
      {
        username: "Mehdi",
        email: "mehdi@example.com",
        password: await hashPassword("password"),
        type_user: "recruteur",
      },
      {
        username: "Najat",
        email: "najat@example.com",
        password: await hashPassword("password"),
        type_user: "candidat",
      },
      {
        username: "Karim",
        email: "karim@example.com",
        password: await hashPassword("password"),
        type_user: "recruteur",
      },
      {
        username: "Sanaa",
        email: "sanaa@example.com",
        password: await hashPassword("password"),
        type_user: "candidat",
      },
      {
        username: "Abdellah",
        email: "abdellah@example.com",
        password: await hashPassword("password"),
        type_user: "recruteur",
      },
      {
        username: "Aicha",
        email: "aicha@example.com",
        password: await hashPassword("password"),
        type_user: "candidat",
      },
      {
        username: "Hicham",
        email: "hicham@example.com",
        password: await hashPassword("password"),
        type_user: "recruteur",
      },
      {
        username: "Samira",
        email: "samira@example.com",
        password: await hashPassword("password"),
        type_user: "candidat",
      },
      {
        username: "Fouad",
        email: "fouad@example.com",
        password: await hashPassword("password"),
        type_user: "recruteur",
      }
    ];
    // Ajoutez plus d'utilisateurs ici
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------














    const insertedUsers = await User.insertMany(users);
    console.log("Users ajoutés avec succès");

    // Ajouter des publications
    const publications = [
      {
        titre: "Les nouvelles tendances en matière de développement web",
        contenu: "La technologie évolue rapidement, et avec elle, les tendances en matière de développement web. Découvrez les dernières avancées et comment elles peuvent impacter votre projet.",
        auteur: insertedUsers[0]._id,
        imagePath: "https://picsum.photos/600/400",
      },
      {
        titre: "L'avenir de l'intelligence artificielle dans l'industrie automobile",
        contenu: "L'intelligence artificielle révolutionne l'industrie automobile. De la conduite autonome à la maintenance prédictive, découvrez comment les innovations IA transforment ce secteur.",
        auteur: insertedUsers[1]._id,
        imagePath: "https://picsum.photos/600/400",
      },
      {
        titre: "Les bienfaits du yoga pour la santé mentale",
        contenu: "Pratiquer le yoga régulièrement peut avoir des effets bénéfiques sur la santé mentale. Découvrez comment cette pratique millénaire peut vous aider à réduire le stress et l'anxiété.",
        auteur: insertedUsers[2]._id,
        imagePath: "https://picsum.photos/600/400",
      },
      {
        titre: "Les meilleures destinations pour un voyage écologique",
        contenu: "Envie de voyager tout en respectant l'environnement ? Découvrez les destinations éco-responsables qui vous permettront de vivre une expérience de voyage unique tout en préservant la planète.",
        auteur: insertedUsers[3]._id,
        imagePath: "https://picsum.photos/600/400",
      },
      {
        titre: "Comment améliorer sa productivité au travail",
        contenu: "Être productif au travail est essentiel pour accomplir ses tâches efficacement. Découvrez des astuces et des outils pour booster votre productivité et atteindre vos objectifs professionnels.",
        auteur: insertedUsers[4]._id,
        imagePath: "https://picsum.photos/600/400",
      },
      {
        titre: "Les secrets d'une alimentation saine et équilibrée",
        contenu: "Une alimentation saine est la clé d'une vie en bonne santé. Découvrez les principes de base d'une alimentation équilibrée et des conseils pour adopter de bonnes habitudes alimentaires.",
        auteur: insertedUsers[5]._id,
        imagePath: "https://picsum.photos/600/400",
      },
      {
        titre: "Les dernières tendances en matière de mode pour cet été",
        contenu: "Envie de rafraîchir votre garde-robe pour l'été ? Découvrez les dernières tendances en matière de mode, des couleurs vives aux motifs floraux, et adoptez un look tendance cet été.",
        auteur: insertedUsers[6]._id,
        imagePath: "https://picsum.photos/600/400",
      },
      {
        titre: "Les bienfaits de la méditation pour la santé",
        contenu: "La méditation est une pratique ancienne qui peut avoir des effets positifs sur la santé mentale et physique. Découvrez comment la méditation peut vous aider à réduire le stress et à améliorer votre bien-être.",
        auteur: insertedUsers[7]._id,
        imagePath: "https://picsum.photos/600/400",
      },
      {
        titre: "Les dernières innovations technologiques dans le domaine de la santé",
        contenu: "La technologie transforme le domaine de la santé à une vitesse impressionnante. Découvrez les dernières innovations, des applications de suivi de la santé aux dispositifs médicaux intelligents, qui révolutionnent les soins de santé.",
        auteur: insertedUsers[8]._id,
        imagePath: "https://picsum.photos/600/400",
      },
      {
        titre: "Les meilleures pratiques pour améliorer votre référencement SEO",
        contenu: "Un bon référencement SEO est essentiel pour améliorer la visibilité de votre site web sur les moteurs de recherche. Découvrez les meilleures pratiques et les outils pour optimiser votre stratégie SEO et augmenter votre trafic organique.",
        auteur: insertedUsers[9]._id,
        imagePath: "https://picsum.photos/600/400",
      },
    ];








        // ----------------------------------------------------------------------------------------------------------------------------------------------------------








    

    await Publication.insertMany(publications);
    console.log("Publications ajoutées avec succès");

    const entreprises = [
  {
    nom: "Société Marocaine de Développement",
    adresse: "123 Avenue Mohammed V, Casablanca, Maroc",
    activite: "Informatique",
    site_web: "http://www.smd.ma",
    logo: "https://picsum.photos/200/200",
  },
  {
    nom: "Construction Atlas",
    adresse: "456 Rue Ibn Khaldoun, Rabat, Maroc",
    activite: "Construction",
    site_web: "http://www.atlasconstruction.ma",
    logo: "https://picsum.photos/200/200",
  },
  {
    nom: "Consulting Maghreb",
    adresse: "789 Avenue Hassan II, Marrakech, Maroc",
    activite: "Consulting",
    site_web: "http://www.consulting-maghreb.ma",
    logo: "https://picsum.photos/200/200",
  },
  {
    nom: "TechMaroc",
    adresse: "101 Boulevard Mohammed VI, Tanger, Maroc",
    activite: "Informatique",
    site_web: "http://www.techmaroc.ma",
    logo: "https://picsum.photos/200/200",
  },
  {
    nom: "BTP Casablanca",
    adresse: "32 Avenue des FAR, Casablanca, Maroc",
    activite: "Construction",
    site_web: "http://www.btp-casablanca.ma",
    logo: "https://picsum.photos/200/200",
  },
  {
    nom: "Gestion Maroc",
    adresse: "55 Rue Moulay Rachid, Fès, Maroc",
    activite: "Consulting",
    site_web: "http://www.gestion-maroc.ma",
    logo: "https://picsum.photos/200/200",
  },
  {
    nom: "TechMaroc",
    adresse: "23 Avenue Mohammed V, Agadir, Maroc",
    activite: "Informatique",
    site_web: "http://www.techmaroc.ma",
    logo: "https://picsum.photos/200/200",
  },
  {
    nom: "BTP Marrakech",
    adresse: "89 Rue Ahmed El Mokri, Marrakech, Maroc",
    activite: "Construction",
    site_web: "http://www.btp-marrakech.ma",
    logo: "https://picsum.photos/200/200",
  },
  {
    nom: "Consulting Rabat",
    adresse: "11 Rue Oued Ziz, Rabat, Maroc",
    activite: "Consulting",
    site_web: "http://www.consulting-rabat.ma",
    logo: "https://picsum.photos/200/200",
  },
  {
    nom: "Développement Tanger",
    adresse: "15 Avenue Pasteur, Tanger, Maroc",
    activite: "Informatique",
    site_web: "http://www.dev-tanger.ma",
    logo: "https://picsum.photos/200/200",
  },
];

    const insertedEntreprise = await Entreprise.insertMany(entreprises);
    console.log("Entreprises ajoutées avec succès" , insertedEntreprise.length);





    



        // ----------------------------------------------------------------------------------------------------------------------------------------------------------










        const recruteurs = [
          {
            idEntreprise: insertedEntreprise[0]._id,
            id_user: insertedUsers[1]._id,
            prenom: "Youssef",
            nom: "El Amrani",
            adresse: "123 Avenue Hassan II, Casablanca, Maroc",
            date_naissance: new Date("1990-01-01"),
            telephone: "0788456789",
            profilePath: "http://www.example.com/profile/youssefelamrani",
          },
          {
            idEntreprise: insertedEntreprise[1]._id,
            id_user: insertedUsers[3]._id,
            prenom: "Mohammed",
            nom: "Ahmed",
            adresse: "456 Rue Mohammed V, Rabat, Maroc",
            date_naissance: new Date("1985-02-15"),
            telephone: "0755654321",
          },
          {
            idEntreprise: insertedEntreprise[2]._id,
            id_user: insertedUsers[15]._id,
            prenom: "Fatima",
            nom: "Zahra",
            adresse: "789 Avenue Mohammed VI, Marrakech, Maroc",
            date_naissance: new Date("1990-01-01"),
            telephone: "0566456789",
            profilePath: "http://www.example.com/profile/fatimazahra",
          },
          {
            idEntreprise: insertedEntreprise[3]._id,
            id_user: insertedUsers[5]._id,
            prenom: "Hicham",
            nom: "El Kaddouri",
            adresse: "456 Rue Ibn Khaldoun, Fès, Maroc",
            date_naissance: new Date("1985-02-15"),
            telephone: "0544654321",
          },
          {
            idEntreprise: insertedEntreprise[4]._id,
            id_user: insertedUsers[7]._id,
            prenom: "Nadia",
            nom: "Bouzid",
            adresse: "123 Boulevard Mohammed V, Tanger, Maroc",
            date_naissance: new Date("1990-01-01"),
            telephone: "0723459989",
            profilePath: "http://www.example.com/profile/nadiabouzid",
          },
          {
            idEntreprise: insertedEntreprise[5]._id,
            id_user: insertedUsers[9]._id,
            prenom: "Fatima",
            nom: "Zahra",
            adresse: "456 Avenue des FAR, Agadir, Maroc",
            date_naissance: new Date("1985-02-15"),
            telephone: "0687994321",
          },
          {
            idEntreprise: insertedEntreprise[6]._id,
            id_user: insertedUsers[13]._id,
            prenom: "Ahmed",
            nom: "El Ghazouani",
            adresse: "123 Rue Mohammed V, Casablanca, Maroc",
            date_naissance: new Date("1990-01-01"),
            telephone: "0523776789",
            profilePath: "http://www.example.com/profile/ahmedelghazouani",
          },
          {
            idEntreprise: insertedEntreprise[7]._id,
            id_user: insertedUsers[11]._id,
            prenom: "Samira",
            nom: "Kouadri",
            adresse: "456 Avenue Hassan II, Marrakech, Maroc",
            date_naissance: new Date("1985-02-15"),
            telephone: "078454321",
          },
          {
            idEntreprise: insertedEntreprise[8]._id,
            id_user: insertedUsers[17]._id,
            prenom: "Omar",
            nom: "Chami",
            adresse: "123 Rue Ibn Sina, Rabat, Maroc",
            date_naissance: new Date("1990-01-01"),
            telephone: "0662456789",
            profilePath: "http://www.example.com/profile/omarchami",
          },
          {
            idEntreprise: insertedEntreprise[9]._id,
            id_user: insertedUsers[5]._id,
            prenom: "Khadija",
            nom: "Zerouali",
            adresse: "456 Rue Mohamed Diouri, Casablanca, Maroc",
            date_naissance: new Date("1985-02-15"),
            telephone: "0787654321",
            profilePath: "http://www.example.com/profile/khadijazerouali",
          },
        ];

    insertedRecruteur = await Recruteur.insertMany(recruteurs);
    console.log("les recruteur ajouté avec success");












    const candidats = [
  {
    id_user: insertedUsers[0]._id,
    prenom: "Fatima",
    nom: "El Alaoui",
    adresse: "123 Rue Mohammed V, Casablanca, Maroc",
    date_naissance: new Date("1990-01-01"),
    telephone: "0123456789",
    profilePath: "http://www.example.com/profile/fatimaelalaoui",
    education: [
      {
        diplome: "Master en Informatique",
        institut: "Université Hassan II",
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
    prenom: "Ahmed",
    nom: "Zerhouni",
    adresse: "456 Avenue Mohammed VI, Marrakech, Maroc",
    date_naissance: new Date("1985-05-15"),
    telephone: "0987654321",
    education: [
      {
        diplome: "Licence en Mathématiques",
        institut: "Université Cadi Ayyad",
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
const offres = [
  {
    titre: "Développeur Full Stack",
    description: "Description de l'offre pour un Développeur Full Stack",
    date_publication: new Date(),
    typeContrat: "CDI",
    salaire: "50000",
    lieu: "Casablanca",
    idEntreprises: insertedEntreprise[0]._id,
    competences: ["JavaScript", "Node.js", "React"],
    experiences: ["Développement web", "Développement mobile"],
    autres_informations: "Autres informations pertinentes",
    logo: "https://via.placeholder.com/150",
    date_debut: new Date(),
    date_fin: new Date(),
  },
  {
    titre: "Analyste de Données",
    description: "Description de l'offre pour un Analyste de Données",
    date_publication: new Date(),
    typeContrat: "CDI",
    salaire: "60000",
    lieu: "Rabat",
    idEntreprises: insertedEntreprise[1]._id,
    competences: ["Python", "R", "SQL"],
    experiences: ["Analyse de données", "Reporting"],
    autres_informations: "Autres informations pertinentes",
    logo: "https://via.placeholder.com/150",
    date_debut: new Date(),
    date_fin: new Date(),
  },
];


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