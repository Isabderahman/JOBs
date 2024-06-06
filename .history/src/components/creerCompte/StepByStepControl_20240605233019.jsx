import React from 'react'
import '../../style/StepByStepControl.css';
import { Link } from 'react-router-dom';

const StepByStepControl = (props) => {



  return (
    <div className='container_step_by_step_control'>
        <div className="back">
        <Link to={`${props.currentStep === 1 ? "/" : ""}`}><button onClick={() => props.handleClick()} className={`${props.currentStep === 1 ? "back_not_allowed" : ""}`}>Retour</button></Link>
      </div>
      <div className="next">
        <button type='submit' onClick={() => props.handleClick('next')}>{props.currentStep === props.steps.length - 1 ? "suivant" : "confirmer"}</button>
      </div>
    </div>
  )
}

export default StepByStepControl