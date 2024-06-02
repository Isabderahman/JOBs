import {React, useState, useEffect, useRef} from 'react';
import '../../style/StepByStep.css';


const StepByStep = (props) => {

  const [newStep, setNewStep] = useState([]); 
  const stepRef = useRef();

  const updateStep = (stepNbr, steps) => {

  }




useEffect(() => {
  const stepsState = props.steps.map((x, index) => {
    Object.assign({}, {
      description: x, 
      completed: false, 
      highlited: index == 0 ? true : false,
      selected: index == 0 ? true : false,
    })
  });



  stepRef.current = stepsState; 
  const current = updateStep(currentStep - 1, stepRef.current);
  setNewStep(current);

}, [props.steps, props.currentStep])




const displaySteps = newStep.map((x) => {
  
})
  
}

export default StepByStep;
