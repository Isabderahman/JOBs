const express = require('express');
const router = express.Router();
const Publication = require('../models/Publication');
const authMiddleware = require("../middleware/authMiddleware");


// Route GET pour récupérer toutes les publications
router.get('/publications', authMiddleware,async (req, res) => {
    try {
      const publications = await Publication.find();
      res.status(200).json(publications);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Route GET pour récupérer une publication par son identifiant
router.get('/publications/:id', authMiddleware,async (req, res) => {
    try {
      const publication = await Publication.findById(req.params.id);
      if (!publication) {
        return res.status(404).json({ error: 'Publication non trouvée' });
      }
      res.status(200).json(publication);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Route POST pour créer une nouvelle publication
  router.post('/publications', authMiddleware,async (req, res) => {
    try {
      const publication = new Publication(req.body);
      await publication.save();
      res.status(201).json(publication);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  module.exports = router;
      
// Route PUT pour mettre à jour une publication
router.put('/publications/:id', authMiddleware,async (req, res) => {
    try {
      const publication = await Publication.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!publication) {
        return res.status(404).json({ error: 'Publication non trouvée' });
      }
      res.status(200).json(publication);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  // Route DELETE pour supprimer une publication
router.delete('/publications/:id', authMiddleware,async (req, res) => {
    try {
      const publication = await Publication.findByIdAndDelete(req.params.id);
      if (!publication) {
        return res.status(404).json({ error: 'Publication non trouvée' });
      }
      res.status(200).json({ message: 'Publication supprimée avec succès' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  