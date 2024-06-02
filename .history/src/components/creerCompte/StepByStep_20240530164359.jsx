import {React, useState, useEffect, useRef} from 'react';
import '../../style/StepByStep.css';


const StepByStep = (props) => {
useEffect(() => {
  const stepsState = props.steps.map((x, index) => {
    Object.assign({}, {
      description: x, 
      completed: false, 
      hted: index == 0 ? true : false,
      highlited: index == 0 ? true : false,
    })
  })
}, [props.steps, props.currentStep])

  return (
    <div className='container_step_by_step'>
      <div className="content">
        <div className="display_number">1</div>
        <div className="display_line"></div>
        <div className="display_description">Description</div>
      </div>
    </div>
  );
}

export default StepByStep;
