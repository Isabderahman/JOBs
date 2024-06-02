// routes/publication.js

const express = require('express');
const router = express.Router();
const Publication = require('../models/Publication');
const { authenticateUser } = require('../middleware/authMiddleware');

// Create a new publication
router.post('/', authenticateUser, async (req, res) => {
  const { titre, contenu, auteur, imagePath } = req.body;
  try {
    const publication = new Publication({ titre, contenu, auteur, imagePath });
    await publication.save();
    res.status(201).json(publication);
  } catch (error) {
    res.status(400).json({ error: `Erreur lors de la création de la publication: ${error.message}` });
  }
});

// Get all publications
router.get('/', async (req, res) => {
  try {
    const publications = await Publication.find().populate('auteur').populate('commentaires.idCommentateur');
    res.status(200).json(publications);
  } catch (error) {
    res.status(500).json({ error: `Erreur lors de la récupération des publications: ${error.message}` });
  }
});

// Get a specific publication by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const publication = await Publication.findById(id).populate('auteur').populate('commentaires.idCommentateur');
    if (!publication) {
      return res.status(404).json({ error: 'Publication non trouvée' });
    }
    res.status(200).json(publication);
  } catch (error) {
    res.status(500).json({ error: `Erreur lors de la récupération de la publication: ${error.message}` });
  }
});

// Update a publication
router.put('/:id', authenticateUser, async (req, res) => {
  const { id } = req.params;
  const { titre, contenu, imagePath } = req.body;
  try {
    const publication = await Publication.findByIdAndUpdate(
      id,
      { titre, contenu, imagePath },
      { new: true, runValidators: true }
    );
    if (!publication) {
      return res.status(404).json({ error: 'Publication non trouvée' });
    }
    res.status(200).json(publication);
  } catch (error) {
    res.status(400).json({ error: `Erreur lors de la mise à jour de la publication: ${error.message}` });
  }
});

// Delete a publication
router.delete('/:id', authenticateUser, async (req, res) => {
  const { id } = req.params;
  try {
    const publication = await Publication.findByIdAndDelete(id);
    if (!publication) {
      return res.status(404).json({ error: 'Publication non trouvée' });
    }
    res.status(200).json({ message: 'Publication supprimée avec succès' });
  } catch (error) {
    res.status(500).json({ error: `Erreur lors de la suppression de la publication: ${error.message}` });
  }
});

// Add a comment to a publication
router.post('/:id/commentaires', authenticateUser, async (req, res) => {
  const { id } = req.params;
  const { idCommentateur, contenu } = req.body;
  try {
    const publication = await Publication.findById(id);
    if (!publication) {
      return res.status(404).json({ error: 'Publication non trouvée' });
    }
    publication.commentaires.push({ idCommentateur, contenu });
    await publication.save();
    res.status(201).json(publication);
  } catch (error) {
    res.status(400).json({ error: `Erreur lors de l'ajout du commentaire: ${error.message}` });
  }
});

module.exports = router;
