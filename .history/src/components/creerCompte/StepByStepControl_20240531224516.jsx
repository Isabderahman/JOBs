import React from 'react'
import '../../style/StepByStepControl.css';

const StepByStepControl = (props) => {
  return (
    <div className='container_step_by_step_control'>
        <div className="back">
        {props.currentStep == 1}
      </div>
      <div className="next">
        <button onClick={() => props.handleClick('next')}>{props.currentStep == props.steps.length - 1 ? "Confirm" : "Next"}</button>
      </div>
    </div>
  )
}

export default StepByStepControl