import React from 'react';
import '../../../style/steps/statut_options.css';

const StatutOptions = (props) => {

  const StatutOptions = ({ handleStatutOption }) => {
    const handleOptionChange = (event) => {
      handleStatutOption(event.target.value);
    };

  return (
    <div className='statut_options_container'>
      <span className='statut_text'>Vous êtes de quel statut professionnel?</span>
      <select name="select" onChange={handleChange}>
          <option value="">--séléctionner votre statut--</option>
          <option value="candidat">Candidat</option>
        <option value="recruteur">Recruteur</option>
      </select>
    </div>
  );
}

export default StatutOptions;
