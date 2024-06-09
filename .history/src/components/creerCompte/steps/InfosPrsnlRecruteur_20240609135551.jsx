import React from "react";
import "../../../style/steps/infos_prsnl_recruteur.css";

const InfosPrsnlRecruteur = () => {
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
          <select>
        </div>
        <div className="btn">
          <button id="retour">Retour</button>
          <button type="submit" id="suivant"> Confirmer </button>
        </div>
      </form>
    </div>
  );
};

export default InfosPrsnlRecruteur;
