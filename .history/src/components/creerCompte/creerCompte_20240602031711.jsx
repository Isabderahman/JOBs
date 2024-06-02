import React from "react";
import StepByStep from "./StepByStep";
import StepByStepControl from "./StepByStepControl";
import "../../style/CreerCompte.css";
import StatutOptions from "./steps/statut_options";
import InfosPrsnl from "./steps/infos_prsnl";
import InfosPro from "./steps/infos_pro";
import { useState } from "react";
import { StepByStepContext } from "../../contexts/StepByStepContext";

const CreerCompte = () => {
  const [sele]
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["statut professionnel", "infos personnelles", "infos professionnelles"];

  const handleClick = (direction) => {
    let newStep = currentStep; 
    if (direction === "next") {
      newStep++;
    } else {
      newStep--;
    }
    
    if (newStep > 0 && newStep <= steps.length) {
      setCurrentStep(newStep); 
    }
  };
  const displaySteps = (step) => {
    switch (step) {
      case 1:
        return <StatutOptions handleStautChange={handleStautChange}/>;

      case 2:
        return <InfosPrsnl selectedOption={selectedOption}/>;

      case 3:
        return <InfosPro />;
    }
  };

  return (
    <div className="container_steps">
      <div className="StepByStep">
        <StepByStep steps={steps} currentStep={currentStep} />
      </div>
      <StepByStepContext.Provider value={{}} > {displaySteps(currentStep)} </StepByStepContext.Provider>
      <div className="StepByStepControl">
        <StepByStepControl handleClick={handleClick} currentStep={currentStep} steps={steps}/>
      </div>
    </div>
  );
};

export default CreerCompte;
