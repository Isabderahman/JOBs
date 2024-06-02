import React from 'react'
import '../../style/StepByStepControl.css';

const StepByStepControl = (props) => {
  return (
    <div className='container_step_by_step_control'>
        <div className="back">
        <button onClick={() => props.handleClick()} className={`${props.currentStep == 1 ? "btn_back" : ""}`}>Back</button>
      </div>
      <div className="next">
        <button onClick={() => props.handleClick('next')}>{props.currentStep == props.steps.length - 1 ? "Confirm" : }</button>
      </div>
    </div>
  )
}

export default StepByStepControl