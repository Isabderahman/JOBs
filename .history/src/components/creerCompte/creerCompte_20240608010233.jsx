import React, { useState } from "react";
import StepByStep from "./StepByStep";
import StepByStepControl from "./StepByStepControl";
import "../../style/CreerCompte.css";
import StatutOptions from "./steps/statut_options";
import InfosPrsnl from "./steps/infos_prsnl";
import InfosPro from "./steps/infos_pro";

const CreerCompte = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});

  const steps = ["statut professionnel", "infos personnelles", "infos professionnelles"];






  const handleClick = (direction) => {
    let newStep = currentStep;
    if (direction === "next") {
      const validationErrors = validateCurrentStep();
      if (Object.keys(validationErrors).length === 0) {
        newStep++;
      } else {
        setErrors(validationErrors); // Assurez-vous que les erreurs sont correctement définies ici
        return;
      }
    } else {
      newStep--;
    }
    if (newStep > 0 && newStep <= steps.length) {
      setCurrentStep(newStep);
      setErrors({}); // Réinitialisez les erreurs lors du passage à l'étape suivante
    }
  };
  

  




  const validateCurrentStep = () => {
    let validationErrors = {};
    switch (currentStep) {
      case 1:
        if (!selectedOption) {
          validationErrors.selectedOption = "Veuillez sélectionner une option.";
        }
        break;
      case 2:
        // Ajoutez la logique de validation pour les champs d'informations personnelles
        break;
      case 3:
        // Ajoutez la logique de validation pour les champs d'informations professionnelles
        break;
      default:
        break;
    }
    return validationErrors;
  };

  const displaySteps = (step, errors) => {
    switch (step) {
      case 1:
        return <StatutOptions handleStatutOption={setSelectedOption} />;
      case 2:
        return <InfosPrsnl selectedOption={selectedOption} errors={errors} />;
      case 3:
        return selectedOption === "candidat" ? <InfosPro selectedOption={selectedOption} errors={errors} /> : null;
      default:
        return null;
    }
  };
  

  return (
    <div className="container_steps">
      <div className="StepByStep">
        <StepByStep steps={steps} currentStep={currentStep} />
      </div>
      {displaySteps(currentStep)}
      <div className="StepByStepControl">
      <StepByStepControl handleClick={handleClick} currentStep={currentStep} steps={steps} validateCurrentStep={validateCurrentStep} setErrors={setErrors} />      </div>
    </div>
  );
};

export default CreerCompte;
