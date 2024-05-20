// models/Offre.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentaireSchema = new Schema({
  idCommentateur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  contenu: {
    type: String,
    required: true
  },
  date_creation: {
    type: Date,
    required: true
  }
}, { _id: false });

const offreSchema = new Schema({
  titre: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date_publication: {
    type: Date,
    required: true
  },
  typeContrat: {
    type: String,
    required: true
  },
  salaire: {
    type: String,
    required: true
  },
  lieu: {
    type: String,
    required: true
  },
  idEntreprises: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Entreprise',
    required: true
  },
  competences: {
    type: [String],
    required: true
  },
  experiences: {
    type: [String],
    required: true
  },
  'autres-informations': {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: false
  },
  date_debut: {
    type: Date,
    required: false
  },
  date_fin: {
    type: Date,
    required: false
  },
  commentaires: [commentaireSchema],
  candidature: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Candidat'
  }]
}, { timestamps: true });

module.exports = mongoose.model('Offre', offreSchema);
