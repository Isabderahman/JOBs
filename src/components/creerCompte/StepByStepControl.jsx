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
<<<<<<< HEAD
        <button onClick={() => props.handleClick('next')}>{props.currentStep === props.steps.length - 1 ? "confirmer" : "Suivant"}</button>
=======
        <button onClick={() => props.handleClick('next')}>{props.currentStep == props.steps.length - 1 ? "suivant" : "confirmer"}</button>
>>>>>>> 4b83d9ac7ed647089f0ce8075c6ef8c04d085998
      </div>
    </div>
  )
}

export default StepByStepControl