import React from 'react'
import '../../style/StepByStep.css'

const StepByStep = () => {
  return (
    <div className='container_step_by_step'>
      <span>vous êtes de quelle type d'utilisateur?</span>
      <select name="type_utilisateur" id="">
        <option value=""></option>
      </select>
    </div>
  )
}

export default StepByStep