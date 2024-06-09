import React, { useState } from 'react';
import '../../../style/steps/infos_prsnl_candidat.css';
import InfosProsCandidat from './InfosProsCandidat';
import StatutOptions from './StatutOptions';

const InfosPrsnlCandidat = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [retour, setRetour] = useState(false);

  const handleSuivant = (event) => {
    event.preventDefault();
    setButtonClicked(true);
  };
  if (buttonClicked) {
    return <InfosProsCandidat />;
  }


  const handleRetour = () => {
    setRetour(true);
  }
  if(retour){
    return <StatutOptions/>
  }

  return (
    <div className='infos_prsnl_candidat_container'>
      <form onSubmit={handleSuivant}>
        <div className="file_download">
        <input type="file" placeholder='télécharger votre phote de profile'/><i className='fas fa-download'></i>
        </div>
        <div className="file_download">
        <input type="file" placeholder='télécharger votre phote de profile'/><i className='fas fa-download'></i>
        </div>
        <input type="text" placeholder='Nom' required />
        <input type="text" placeholder='Prénom' required />
        <input type="email" placeholder='Email' required />
        <input type="password" placeholder='Mot de passe' required />
        <input type="text" placeholder='Adresse' required />
        <input type="number" placeholder='Téléphone' required />
        <div className="input_date">
          <label>Date de naissance</label>
          <input type="date" required />
        </div>
        <div className="btn">
          <button type='button' id='retour' onClick={handleRetour}>Retour</button>
          <button type='submit' id='suivant'>Suivant</button>
        </div>
      </form>
    </div>
  );
};

export default InfosPrsnlCandidat;
