import React from 'react'
import '../../../style/steps/statut_options.css'

const StatutOptions = () => {
  return (
    <div className='statut_options_container'>
      <select name="select" id="">
        <option value="candidat">Candidat</option>
        <option value="rec">Recruteur</option>
      </select>
    </div>
  )
}

export default StatutOptions