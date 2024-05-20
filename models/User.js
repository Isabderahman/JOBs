const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  email_verified_at: {
    type: Date,
    default: null
  },
  password: {
    type: String,
    required: true
  },
  type_user: {
    type: String,
    required: true,
    enum: ['candidat', 'recruteur']
  },
  remember_token: {
    type: String,
    default: null
  }
}, {
  timestamps: true // Ajoute automatiquement createdAt et updatedAt
});

module.exports = mongoose.model('User', userSchema);
