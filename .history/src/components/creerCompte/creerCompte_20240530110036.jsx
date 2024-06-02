import React from 'react'
import StepByStep from './StepByStep'
import StepByStepControl from './StepByStepControl'
import '../../style'

const CreerCompte = () => {
  return (
    <div className='container_steps'>
        <StepByStep/>
        <StepByStepControl/>
    </div>
  )
}

export default CreerCompte;