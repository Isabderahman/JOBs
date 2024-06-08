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
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [adresse, setAdresse] = useState("");
  const [telephone, setTelephone] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");

  const steps = [
    "statut professionnel",
    "infos personnelles",
    "infos professionnelles",
  ];

  const validateCurrentStep = () => {
    let validationErrors = {};
    switch (currentStep) {
      case 1:
        if (!selectedOption) {
          validationErrors.selectedOption = "Veuillez sélectionner une option.";
        }
        break;
      case 2:
        if (!nom.trim()) {
          validationErrors.nom = "Le nom est requis.";
        }
        if (!prenom.trim()) {
          validationErrors.prenom = "Le prénom est requis.";
        }
        if (!email.trim()) {
          validationErrors.email = "L'email est requis.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          validationErrors.email = "L'email est invalide.";
        }
        if (!motDePasse.trim()) {
          validationErrors.motDePasse = "Le mot de passe est requis.";
        } else if (motDePasse.length < 6) {
          validationErrors.motDePasse =
            "Le mot de passe doit contenir au moins 6 caractères.";
        }
        if (!adresse.trim()) {
          validationErrors.adresse = "L'adresse est requise.";
        }
        if (!telephone.trim()) {
          validationErrors.telephone = "Le numéro de téléphone est requis.";
        } else if (isNaN(telephone)) {
          validationErrors.telephone =
            "Le numéro de téléphone doit être numérique.";
        }
        if (!dateNaissance) {
          validationErrors.dateNaissance = "La date de naissance est requise.";
        }
        break;
      case 3:
        // Ajoutez la logique de validation pour les champs d'informations professionnelles
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
      } else {
        setErrors(validationErrors); // Mettre à jour les erreurs
        return; // Empêcher la progression si des erreurs sont présentes
      }
    } else {
      newStep--;
    }
    if (newStep > 0 && newStep <= steps.length) {
      setCurrentStep(newStep);
      setErrors({}); // Réinitialiser les erreurs lors du passage à l'étape suivante
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "nom":
        setNom(value);
        if (value.trim()) {
          setErrors((prevErrors) => ({ ...prevErrors, nom: "" }));
        }
        break;
      case "prenom":
        setPrenom(value);
        if (value.trim()) {
          setErrors((prevErrors) => ({ ...prevErrors, prenom: "" }));
        }
        break;
      case "email":
        setEmail(value);
        if (/\S+@\S+\.\S+/.test(value)) {
          setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
        }
        break;
      case "motDePasse":
        setMotDePasse(value);
        if (value.trim() && value.length >= 6) {
          setErrors((prevErrors) => ({ ...prevErrors, motDePasse: "" }));
        }
        break;
      case "adresse":
        setAdresse(value);
        if (value.trim()) {
          setErrors((prevErrors) => ({ ...prevErrors, adresse: "" }));
        }
        break;
      case "telephone":
        setTelephone(value);
        if (!isNaN(value)) {
          setErrors((prevErrors) => ({ ...prevErrors, telephone: "" }));
        }
        break;
      case "dateNaissance":
        setDateNaissance(value);
        if (value) {
          setErrors((prevErrors) => ({ ...prevErrors, dateNaissance: "" }));
        }
        break;
      default:
        break;
    }
  };

  const displaySteps = (step, errors) => {
    switch (step) {
      case 1:
        return <StatutOptions handleStatutOption={setSelectedOption} />;
      case 2:
        return (
          <InfosPrsnl
            selectedOption={selectedOption}
            errors={errors}
            handleChange={handleChange}
            nom={nom}
            prenom={prenom}
            email={email}
            motDePasse={motDePasse}
            adresse={adresse}
            telephone={telephone}
            dateNaissance={dateNaissance}
          />
        );
      case 3:
        return selectedOption === "candidat" ? (
          <InfosPro selectedOption={selectedOption} errors={errors} />
        ) : null;
      default:
        return null;
    }
  };

  return (
    <div className="container_steps">
      <div className="StepByStep">
        <StepByStep steps={steps} currentStep={currentStep} />
      </div>
      {displaySteps(currentStep, errors)}
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
