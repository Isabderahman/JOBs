import React from 'react'
import '../../style/StepByStepControl.css';

const StepByStepControl = () => {
  return (
    <div className='container_step_by_step'>
            <div className="back">
        <button>Back</button>
      </div>
      <div className="next">
        <button>Next</button>
      </div>
    </div>
  )
}

export default StepByStepControl