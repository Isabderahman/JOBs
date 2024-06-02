import React from "react";
import StepByStep from "./StepByStep";
import StepByStepControl from "./StepByStepControl";
import "../../style/CreerCompte.css";

const CreerCompte = () => {
  return (
    <div className="container_steps">
      <StepByStep />
      <div className="type_user">
        <div className="text_question">
          <span>vous êtes de quelle type d'utilisateur?</span>
        </div>
        .select
      </div>
      <StepByStepControl />
    </div>
  );
};

export default CreerCompte;
