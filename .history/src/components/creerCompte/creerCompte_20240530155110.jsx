import React from "react";
import StepByStep from "./StepByStep";
import StepByStepControl from "./StepByStepControl";
import "../../style/CreerCompte.css";
import StatutOptions from "./steps/statut_options";
import InfosPrsnl from "./steps/infos_prsnl";
import InfosPro from "./steps/infos_pro";
import { useState } from "react";

const CreerCompte = () => {

  const [currentStep, setCurrentStep] = useState(1);

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
        <InfosPrsnl/>

      case 3: 
      return 
        <InfosPro/>
    }
  }
  return (
    <div className="container_steps">
      <div className="StepByStep">
      <StepByStep />
      </div>
      <div className="StepByStepControl">
      <StepByStepControl />
      </div>
    </div>
  );
};

export default CreerCompte;
