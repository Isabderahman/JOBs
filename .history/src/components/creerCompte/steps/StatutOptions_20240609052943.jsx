import React, { useState } from 'react';
import '../../../style/steps/statut_options.css';
import InfosPrsnlCandidat from './InfosPrsnlCandidat';
import InfosPrsnlRecruteur from './InfosPrsnlRecruteur';

const StatutOptions = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleSelect = (e) => {
    setSelectedOption(e.target.value);
    setButtonClicked(false); 
  };

  const handleButtonClick = () => {
    if (selectedOption) {
      setButtonClicked(true);
    } else {
      alert('Veuillez sélectionner une option avant de continuer.');
    }
  };

  return (
    <div className='statut_options_container'>
      {!buttonClicked ? (
        <>
          <select name="statut_options"  onChange={handleSelect}>
            <option value="">--sélectionner votre option--</option>
            <option value="candidat">Candidat</option>
            <option value="recruteur">Recruteur</option>
          </select>

          <div className="btnSuivant">
            <button onClick={handleButtonClick}>Suivant</button>
          </div>
        </>
      ) : (
        <>
          {selectedOption === 'candidat' && (
            
              <>
               <h2>veuillez saisir vos informations personnelles </h2>
              <InfosPrsnlCandidat/>
              </>
          )}

          {selectedOption === 'recruteur' && (
            <div className="option_details">
               <InfosPrsnlRecruteur/>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default StatutOptions;
