import React from "react";
import StepByStep from "./StepByStep";
import StepByStepControl from "./StepByStepControl";
import "../../style/CreerCompte.css";

const CreerCompte = () => {

  const steps = [
    'statut_pro_options', 
    'infos_prsnl',
    'infos_pro'
  ]

  const 
  return (
    <div className="container_steps">
      <StepByStep />
      <StepByStepControl />
    </div>
  );
};

export default CreerCompte;
