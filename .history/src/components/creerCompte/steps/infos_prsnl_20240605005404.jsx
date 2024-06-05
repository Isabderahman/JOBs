import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import '../'

const InfosPrsnl = (props) => {
  const [entreprises, setEntreprises] = useState([]);
  const [selectedEntreprise, setSelectedEntreprise] = useState('');
  
  useEffect(() => {
    // Effectuer une requête HTTP pour récupérer la liste des entreprises
    axios.get('/api/entreprises')
      .then(response => {
        setEntreprises(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des entreprises : ', error);
      });
  }, []);

  const handleEntrepriseChange = (event) => {
    setSelectedEntreprise(event.target.value);
  };
  return (
    <div className='infos_prsnl_container'>
      {props.selectedOption === "candidat" && (
        <div className="candidat">
          <input type="file" className="profile-input" id="profile-input-candidat" />
          <label htmlFor="profile-input-candidat">Télécharger la photo de profil</label>
          <input type="text" placeholder='Nom'/>
          <input type="text" placeholder='Prénom'/>
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Mot de passe'/>
          <input type="text" placeholder='Adresse'/>
          <input type="number" placeholder='Téléphone'/>
          <input type="date" placeholder='Date de naissance'/>
        </div>
      )}

      {props.selectedOption === "recruteur" && (
        <div className="recruteur">
          <input type="file" className="profile-input" id="profile-input-recruteur" />
          <label htmlFor="profile-input-recruteur">Télécharger la photo de profil</label>

          <select value={selectedEntreprise} onChange={handleEntrepriseChange}>
            <option value="">Sélectionnez une entreprise</option>
            {entreprises.map(entreprise => (
              <option key={entreprise.id} value={entreprise.id}>{entreprise.nom}</option>
            ))}
          </select>

          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Mot de passe'/>
          <input type="text" placeholder='Adresse'/>
          <input type="number" placeholder='Téléphone'/>
        </div>
      )}
    </div>
  );
};

export default InfosPrsnl;