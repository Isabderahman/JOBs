import React from 'react'
import '../../../style/steps/statut_options.css'

const StatutOptions = (props) => {

  return (
    <div className='statut_options_container'>
      <span className='statut_text'>vous êtes de quel statut professionnel?</span>
      <select name="select" onChange={props.handleStatutOption}>
        <option value="candidat">Candidat</option>
        <option value="recruteur">Recruteur</option>
      </select>
    </div>
  )
}

export default StatutOptions