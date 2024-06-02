import React from 'react'
import '../../../style/steps/statut_options.css'

const StatutOptions = () => {
  return (
    <div className='statut_options_container'>
      <span className='statut'>vous êtes de quel statut professionnel?</span>
      <select name="select" >
        <option value="candidat">Candidat</option>
        <option value="recruteur">Recruteur</option>
      </select>
    </div>
  )
}

export default StatutOptions