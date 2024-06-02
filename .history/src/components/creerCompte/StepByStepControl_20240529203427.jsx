import React from 'react'
import '../../style/StepByStepControl.css';

const StepByStepControl = () => {
  return (
    <div>
      <div className="next">
        <button>Next</button>
      </div>
      <button className="back">Back</button>
    </div>
  )
}

export default StepByStepControl