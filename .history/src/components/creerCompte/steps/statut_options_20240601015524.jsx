import React from 'react'
import '../../../style/steps/statut_options.css'

const StatutOptions = () => {
  return (
    <div className='statut_options_container'>
      <span>vous êtes de quel statut </span>
      <select name="select" id="">
        <option value="candidat">Candidat</option>
        <option value="recruteur">Recruteur</option>
      </select>
    </div>
  )
}

export default StatutOptions