import React, { useState } from "react";
import StepByStep from "./StepByStep";
import StepByStepControl from "./StepByStepControl";
import "../../style/CreerCompte.css";
import StatutOptions from "./steps/statut_options";
import InfosPrsnl from "./steps/infos_prsnl";
import InfosPro from "./steps/infos_pro";

const CreerCompte = ({displaySteps(currentStep, errors)} // Passer les erreurs au composant InfosPrsnl
) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});

  const steps = ["statut professionnel", "infos personnelles", "infos professionnelles"];

  const handleClick = (direction) => {
    let newStep = currentStep;
    const validationErrors = validateCurrentStep();
    if (Object.keys(validationErrors).length === 0) {
      if (direction === "next") {
        newStep++;
      } else {
        newStep--;
      }

      if (newStep > 0 && newStep <= steps.length) {
        setCurrentStep(newStep);
        setErrors({}); // Réinitialiser les erreurs lors du passage à l'étape suivante
      }
    } else {
      setErrors(validationErrors);
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

  const displaySteps = (step) => {
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
        <StepByStepControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
      </div>
    </div>
  );
};

export default CreerCompte;
