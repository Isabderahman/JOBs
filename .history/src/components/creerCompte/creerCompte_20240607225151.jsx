import React, { useState } from "react";
import StepByStep from "./StepByStep";
import StepByStepControl from "./StepByStepControl";
import "../../style/CreerCompte.css";
import StatutOptions from "./steps/statut_options";
import InfosPrsnl from "./steps/infos_prsnl";
import { StepByStepContext } from "../../contexts/StepByStepContext";
import InfosPro from "./steps/infos_pro";

const CreerCompte = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [selectedEntreprise, setSelectedEntreprise] = useState('');

  const steps = ["statut professionnel", "infos personnelles", "infos professionnelles"];

  const handleStatutOption = (option) => {
    setSelectedOption(option);
  }

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

  const validateFields = (name, value) => {
    let fieldErrors = { ...errors };

    switch (name) {
      case 'email':
        fieldErrors.email = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? '' : 'Email invalide';
        break;
      case 'password':
        fieldErrors.password = value.length >= 6 ? '' : 'Mot de passe doit contenir au moins 6 caractères';
        break;
      case 'telephone':
        fieldErrors.telephone = value.match(/^\d{10}$/) ? '' : 'Téléphone doit contenir 10 chiffres';
        break;
      case 'numEntreprise':
        fieldErrors.numEntreprise = value.match(/^\d+$/) ? '' : 'Numéro Entreprise doit être un nombre';
        break;
      default:
        fieldErrors[name] = value ? '' : 'Ce champ est requis';
        break;
    }

    setErrors(fieldErrors);
  };

  const handleSubmit = () => {
    const formErrors = {};
    const allFields = {}; // Populate this object with all fields' values

    Object.keys(allFields).forEach((field) => {
      validateFields(field, allFields[field]);
      if (!allFields[field]) {
        formErrors[field] = 'Ce champ est requis';
      }
    });

    if (Object.values(formErrors).every((error) => error === '')) {
      // All fields are valid, proceed with submission
      handleClick('next');
    } else {
      setErrors(formErrors);
    }
  };

  const displaySteps = (step) => {
    switch (step) {
      case 1:
        return <StatutOptions handleStatutOption={handleStatutOption}/>;
      case 2:
        return <InfosPrsnl
                 selectedOption={selectedOption}
                 entreprises={entreprises}
                 selectedEntreprise={selectedEntreprise}
                 handleEntrepriseChange={(e) => setSelectedEntreprise(e.target.value)}
                 validateFields={validateFields}
                 errors={errors}
               />;
      case 3:
        return selectedOption === "candidat" ? <InfosPro selectedOption={selectedOption}/> : null;
      default:
        return null;
    }
  };

  return (
    <div className="container_steps">
      <div className="StepByStep">
        <StepByStep steps={steps} currentStep={currentStep} />
      </div>
      <StepByStepContext.Provider value={{}}>
        {displaySteps(currentStep)}
      </StepByStepContext.Provider>
      <div className="StepByStepControl">
        <StepByStepControl handleClick={handleSubmit} currentStep={currentStep} steps={steps} />
      </div>
    </div>
  );
};

export default CreerCompte;
