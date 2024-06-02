import React from 'react'
import '../../style/StepByStepControl.css';

const StepByStepControl = () => {
  return (
    <div className='container'>
      <div className="content">
      <div className="next">
        <button>Next</button>
      </div>
      <div className="back">
        <button>Back</button>
      </div>
      </div>
    </div>
  )
}

export default StepByStepControl