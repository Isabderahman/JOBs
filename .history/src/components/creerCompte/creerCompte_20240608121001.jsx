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
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    motDePasse: "",
    adresse: "",
    telephone: "",
    dateNaissance: "",
    nomEntreprise: "",
    numEntreprise: "",
    emailEntreprise: "",
    passwordEntreprise: "",
    adresseEntreprise: "",
    telephoneEntreprise: "",
  });

  const steps = [
    "statut professionnel",
    "infos personnelles",
    "infos professionnelles",
  ];

  const validateCurrentStep = () => {
    let validationErrors = {};
    const { nom, prenom, email, motDePasse, adresse, telephone, dateNaissance, nomEntreprise, numEntreprise, emailEntreprise, passwordEntreprise, adresseEntreprise, telephoneEntreprise } = formData;

    switch (currentStep) {
      case 1:
        if (!selectedOption) {
          validationErrors.selectedOption = "Veuillez sélectionner une option.";
        }
        break;
      case 2:
        if (selectedOption === "candidat") {
          if (!nom.trim()) {
            validationErrors.nom = "Le nom est requis.";
          }
          if (!prenom.trim()) {
            validationErrors.prenom = "Le prénom est requis.";
          }
          if (!email.trim()) {
            validationErrors.email = "L'email est requis.";
          } 
          if (!motDePasse.trim()) {
            validationErrors.motDePasse = "Le mot de passe est requis.";
          } 
          if (!adresse.trim()) {
            validationErrors.adresse = "L'adresse est requise.";
          }
          if (!telephone.trim()) {
            validationErrors.telephone = "Le numéro de téléphone est requis.";
          } else if (isNaN(telephone)) {
            validationErrors.telephone = "Le numéro de téléphone doit être numérique.";
          }
          if (!dateNaissance) {
            validationErrors.dateNaissance = "La date de naissance est requise.";
          }
        }

        if (selectedOption === "recruteur") {
          if (!nomEntreprise.trim()) {
            validationErrors.nomEntreprise = "Le nom de l'entreprise est requis.";
          }
          if (!numEntreprise.trim()) {
            validationErrors.numEntreprise = "Le numéro de l'entreprise est requis.";
          }
          if (!emailEntreprise.trim()) {
            validationErrors.emailEntreprise = "L'email de l'entreprise est requis.";
          }
          if (!passwordEntreprise.trim()) {
            validationErrors.passwordEntreprise = "Le mot de passe de l'entreprise est requis.";
          }
          if (!adresseEntreprise.trim()) {
            validationErrors.adresseEntreprise = "L'adresse de l'entreprise est requise.";
          }
          if (!telephoneEntreprise.trim()) {
            validationErrors.telephoneEntreprise = "Le numéro de téléphone de l'entreprise est requis.";
          } else if (isNaN(telephoneEntreprise)) {
            validationErrors.telephoneEntreprise = "Le numéro de téléphone doit être numérique.";
          }
        }
        break;
      case 3:
        // Ajoutez la logique de validation pour les champs d'informations professionnelles des candidats si nécessaire
        break;
      default:
        break;
    }

    return validationErrors;
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    if (direction === "next") {
      const validationErrors = validateCurrentStep();
      if (Object.keys(validationErrors).length === 0) {
        newStep++;
        setErrors({});
      } else {
        setErrors(validationErrors);
        return;
      }
    } else {
      newStep--;
    }
    if (newStep > 0 && newStep <= steps.length) {
      setCurrentStep(newStep);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const displaySteps = (step) => {
    switch (step) {
      case 1:
        return <StatutOptions handleStatutOption={setSelectedOption} />;
      case 2:
        return <InfosPrsnl selectedOption={selectedOption} errors={errors} handleInputChange={handleInputChange} formData={formData} />;
      case 3:
        return selectedOption === "candidat" ? (
          <InfosPro selectedOption={selectedOption} errors={errors} />
        ) : (
          <InfosPrsnl selectedOption={selectedOption} errors={errors} handleInputChange={handleInputChange} formData={formData} />
        );
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
        <StepByStepControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
          validateCurrentStep={validateCurrentStep}
          setErrors={setErrors}
        />
      </div>
    </div>
  );
};

export default CreerCompte;
