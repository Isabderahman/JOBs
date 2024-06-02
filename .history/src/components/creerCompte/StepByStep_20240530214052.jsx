import React, { useState, useEffect, useRef } from 'react';
import '../../style/StepByStep.css';

const StepByStep = (props) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNbr, steps) => {
    const newSteps = [...steps];
    let count = 0;
    while (count < newSteps.length) {
      if (count === stepNbr) {
        newSteps[count] = {
          ...newSteps[count],
          highlited: true,
          selected: true,
          completed: true,
        };
      } else if (count < stepNbr) {
        newSteps[count] = {
          ...newSteps[count],
          highlited: false,
          selected: true,
          completed: true,
        };
      } else {
        newSteps[count] = {
          ...newSteps[count],
          highlited: false,
          selected: false,
          completed: false,
        };
      }
      count++;
    }
    return newSteps;
  };

  useEffect(() => {
    const stepsState = props.steps.map((x, index) =>
      Object.assign({}, {
        description: x,
        completed: false,
        highlited: index === 0,
        selected: index === 0,
      })
    );

    stepRef.current = stepsState;
    const current = updateStep(props.currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [props.steps, props.currentStep]);

  return (
    <div className="step-by-step">
      {newStep.map((x, index) => (
        <div key={index} className={`${index === newStep.length - 1 ? 'container_step_by_step' : ''}`}>
          <div className="content">
            <div className="top">
            <div className={`${"display_number"}`}>{index +1 }</div>
            <div className="display_line"></div>
            </div>
            <div className="display_description">{x.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepByStep;
