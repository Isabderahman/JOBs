import React from 'react'
import StepByStep from './StepByStep'
import StepByStepControl from './StepByStepControl'
import '../../style/CreerCompte.css'

const CreerCompte = () => {
  return (
    <div className='container_steps'>
        <StepByStep/>
        <div className="type"></div>
        <StepByStepControl/>
    </div>
  )
}

export default CreerCompte;