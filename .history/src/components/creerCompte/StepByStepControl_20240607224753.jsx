import React from 'react'
import '../../style/StepByStepControl.css';
import { Link } from 'react-router-dom';

const StepByStepControl = ({ handleClick, currentStep, steps }) => {
  return (
    <div className='container_step_by_step_control'>
      <div className="back">
        <Link to={`${currentStep === 1 ? "/" : ""}`}>
          <button onClick={() => handleClick('back')} className={`${currentStep === 1 ? "back_not_allowed" : ""}`}>Retour</button>
        </Link>
      </div>
      <div className="next">
        <button type='submit' onClick={() => handleClick('next')}>
          {currentStep === steps.length - 1 ? "suivant" : "confirmer"}
        </button>
      </div>
    </div>
  );
};

export default StepByStepControl;