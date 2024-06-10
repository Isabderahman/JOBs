const express =require('express');
const router = express.Router();
const Candidat = require('../models/Candidat');
const Recruteur = require('../models/Recruteur');
const authMiddleware = require('../middleware/authMiddleware')


//get all user data if the user is candidat or recruteur

router.get('/dataUser/:id',async(req,res)=>{
    const {id} = req.params;
    try{
        const recruteurData = await Recruteur.findOne({ id_user: id });
        const candidatData = await Candidat.findOne({ id_user: id});
        if (!recruteurData && !candidatData) {
            return res.status(404).json({ message: "Aucun utilisateur trouvé avec cet ID." });
        }
        const userData = candidatData?candidatData:recruteurData;
        res.status(200).json(userData); 
    }catch(error){
        res.status(500).json({error:`error lors la recuperation des donnés de user :${error.message}`});
    }
})

module.exports = router;