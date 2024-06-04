import React, { useState, useEffect, useRef } from "react";
import "../../style/StepByStep.css";

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
      Object.assign(
        {},
        {
          description: x,
          completed: false,
          highlited: index === 0,
          selected: index === 0,
        }
      )
    );

    stepRef.current = stepsState;
    const current = updateStep(props.currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [props.steps, props.currentStep]);

  .step-by-step {
    display: flex;
    align-items: center;
    background-color: #0d1117; /* Couleur de fond */
    padding: 20px;
    border-radius: 10px;
  }
  
  .container_step_by_step {
    display: flex;
    align-items: center;
  }
  
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .top {
    display: flex;
    align-items: center;
  }
  
  .circle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #30363d; /* Couleur des cercles non actifs */
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: bold;
  }
  
  .circle.active {
    background-color: #1976d2; /* Couleur du cercle actif */
  }
  
  .line {
    height: 2px;
    width: 50px;
    background-color: #30363d;
    margin: 0 10px;
  }
  
  .line.active {
    background-color: #1976d2; /* Couleur de la ligne active */
  }
  
  .label {
    color: #fff;
    margin-top: 5px;
    font-size: 14px;
  }
  
  .label.active {
    color: #1976d2; /* Couleur du texte actif */
  }
  
  .checkmark {
    font-size: 18px;
  }
  
  .next_button {
    background-color: #1976d2;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 20px;
  }
  
  .next_button:hover {
    background-color: #1565c0;
  }
  
};

export default StepByStep;
