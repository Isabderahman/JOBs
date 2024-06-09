import React, { useState, useEffect } from "react";
import "../../../style/steps/infos_prsnl_recruteur.css";

const InfosPrsnlRecruteur = () => {
  const [entreprises, setEntreprises] = useState([]);
  const [newCompany, setNewCompany] = useState(false);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchEntreprises = async () => {
      // Replace with your API call
      const response = await fetch("api.example/entreprises");
      const data = await response.json();
      setEntreprises(data);
    };

    fetchEntreprises();
  }, []);

  return (
    <div className="infos_prsnl_candidat_container">
      <form action="">
        <div className="recruteur">
          <input type="file" className="profile-input" id="profile-input-recruteur" />
          <label htmlFor="profile-input-recruteur">Télécharger la photo de profil <i className='fas fa-download'></i>
          </label>
        </div>
        <input type="text" placeholder="Nom" required />
        <input type="text" placeholder="Prénom" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Mot de passe" required />
        <input type="text" placeholder="Adresse" required />
        <input type="number" placeholder="Téléphone" required />
        <div className="input_date">
          <label>Date de naissance</label>
          <input type="date" required />
        </div>
        <div className="entreprise_select">
          <select name="entreprise" id="entrepriseSelect">
            <option value="">--seléctionnez votre entreprise--</option>
            {entreprises.map((x) => (
              <option key={x.id} value={x.nom}>{x.nom}</option>
            ))}
          </select>
          <div className="new_company">
            <input 
              type="checkbox" 
              id="newCompanyCheckbox" 
              checked={newCompany} 
              onChange={(e) => setNewCompany(e.target.checked)} 
            />
            <label htmlFor="newCompanyCheckbox">Mon entreprise n'est pas affichée</label>
          </div>
          {newCompany && (
            <button type="button" onClick={handleNewEn}>
              Ajouter une nouvelle entreprise
            </button>
          )}
        </div>
        <div className="btn">
          <button type="button" id="retour">Retour</button>
          <button type="submit" id="suivant"> Confirmer </button>
        </div>
      </form>
    </div>
  );
};

export default InfosPrsnlRecruteur;
