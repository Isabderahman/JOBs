import React from 'react'
import '../../style/StepByStepControl.css';

const StepByStepControl = (props) => {
  return (
    <div className='container_step_by_step_control'>
        <div className="back">
        {props.curentStep == 1 ? <button onClick={() => props.handleClick()}>Back</button> : <button onClick={() => props.handleClick()}>Back</button>}
      </div>
      <div className="next">
        <button>Next</button>
      </div>
    </div>
  )
}

export default StepByStepControl