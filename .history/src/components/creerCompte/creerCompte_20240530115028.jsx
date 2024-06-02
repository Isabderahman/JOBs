import React from 'react'
import StepByStep from './StepByStep'
import StepByStepControl from './StepByStepControl'
import '../../style/CreerCompte.css'

const CreerCompte = () => {
  return (
    <div className='container_steps'>
        <StepByStep/>
        <div className="type_user">
        text_
      <select name="type_utilisateur" id="">
        <option value="emplyeur">Chercher un emploi</option>
        <option value="entreprise">Une entreprise</option>
      </select>
        </div>
        <StepByStepControl/>
    </div>
  )
}

export default CreerCompte;