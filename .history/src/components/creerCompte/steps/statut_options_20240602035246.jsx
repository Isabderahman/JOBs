import React from 'react';
import '../../../style/steps/statut_options.css';

const StatutOptions = (props) => {

  const handleChange = (event) => {
    props.handleStatutOption(event.target.value);
  };

  return (
    <div className='statut_options_container'>
      <span className='statut_text'>Vous êtes de quel statut professionnel?</span>
      <select name="select" onChange={handleChange}>
          
      </select>
    </div>
  );
}

export default StatutOptions;
