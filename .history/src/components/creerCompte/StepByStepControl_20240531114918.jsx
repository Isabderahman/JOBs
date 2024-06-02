import React from 'react'
import '../../style/StepByStepControl.css';
import { Link } from 'react-router-dom';

const StepByStepControl = () => {
  return (
    <div className='container_step_by_step_control'>
        <div className="back">
        <Link to='/'><button >Back</button></Link>
      </div>
      <div className="next">
        <button>Next</button>
      </div>
    </div>
  )
}

export default StepByStepControl