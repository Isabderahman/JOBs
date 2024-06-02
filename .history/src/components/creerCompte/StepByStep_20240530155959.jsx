import React from 'react';
import '../../style/StepByStep.css';
import { useEffect } from 'react';

const StepByStep = (props) => {
  useEffect = (() => {
    const stepsState = props.steps.map((x) => {
      Object.assign({})
    })
  })
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
