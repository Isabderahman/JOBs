import React from "react";
import StepByStep from "./StepByStep";
import StepByStepControl from "./StepByStepControl";
import "../../style/CreerCompte.css";
import StatutOptions from "./steps/statut_options";

const CreerCompte = () => {

  const steps = [
    'statut_pro_options', 
    'infos_prsnl',
    'infos_pro'
  ]

  const displaySteps = (step) => {
    switch(step){
      case 1 : 
        return <StatutOptions/>

      case 2: 
      return 
        <In/>
    }
  }
  return (
    <div className="container_steps">
      <StepByStep />
      <StepByStepControl />
    </div>
  );
};

export default CreerCompte;
