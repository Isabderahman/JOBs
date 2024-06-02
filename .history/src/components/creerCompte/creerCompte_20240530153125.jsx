import React from "react";
import StepByStep from "./StepByStep";
import StepByStepControl from "./StepByStepControl";
import "../../style/CreerCompte.css";

const CreerCompte = () => {

  const steps = [
    'statut_pro_optin'
  ]
  return (
    <div className="container_steps">
      <StepByStep />
      <div className="type_user">
        <div className="text_question">
          <span>vous êtes de quel  statut professionnel ?</span>
        </div>
        <div className="select">
          <select name="select" id="">
            <option value="employe">Employé</option>
            <option value="entreprise">Entreprise</option>
          </select>
        </div>
      </div>
      <StepByStepControl />
    </div>
  );
};

export default CreerCompte;
