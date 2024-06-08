import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../style/steps/infos_prsnl.css";

const InfosPrsnl = (props) => {
  const [entreprises, setEntreprises] = useState([]);
  const [selectedEntreprise, setSelectedEntreprise] = useState("");
  const [newEntrepriseFormVisible, setNewEntrepriseFormVisible] =
    useState(false);
  const [newEntreprise, setNewEntreprise] = useState({
    nom: "",
    numEntreprise: "",
    email: "",
    password: "",
    adresse: "",
    telephone: "",
  });

  useEffect(() => {
    // Effectuer une requête HTTP pour récupérer la liste des entreprises
    axios
      .get("/api/entreprises")
      .then((response) => {
        setEntreprises(response.data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des entreprises : ",
          error
        );
      });
  }, []);

  const handleEntrepriseChange = (event) => {
    setSelectedEntreprise(event.target.value);
  };

  const handleNewEntrepriseInputChange = (event) => {
    const { name, value } = event.target;
    setNewEntreprise((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNewEntrepriseSubmit = (event) => {
    event.preventDefault();
    // Envoyer une requête HTTP pour ajouter la nouvelle entreprise
    axios
      .post("/api/ajouter-entreprise", newEntreprise)
      .then((response) => {
        setEntreprises((prevState) => [...prevState, response.data]);
        setNewEntrepriseFormVisible(false);
        setNewEntreprise({
          nom: "",
          numEntreprise: "",
          email: "",
          password: "",
          adresse: "",
          telephone: "",
        });
      })
      .catch((error) => {
        console.error(
          "Erreur lors de l'ajout de la nouvelle entreprise : ",
          error
        );
      });
  };

  // Gestion des erreurs

  const [errors, setErrors] = useState({
    nom: "",
    prenom: "",
    email: "",
    motDePasse: "",
    adresse: "",
    telephone: "",
    dateNaissance: "",
  });

  const validateField = (fieldName, value) => {
    // Vous pouvez ajouter votre logique de validation ici
    return ""; // Retourner un message d'erreur vide par défaut
  };

  const handleInputChange = (fieldName, value) => {
    const newErrors = { ...errors };
    const errorMessage = validateField(fieldName, value);
    newErrors[fieldName] = errorMessage;
    setErrors(newErrors);
    // Mettre à jour l'état du champ
    switch (fieldName) {
      case "nom":
        setNewEntreprise((prevState) => ({
          ...prevState,
          nom: value,
        }));
        break;
      case "prenom":
        setNewEntreprise((prevState) => ({
          ...prevState,
          prenom: value,
        }));
        break;
      case "email":
        setNewEntreprise((prevState) => ({
          ...prevState,
          email: value,
        }));
        break;
      case "motDePasse":
        setNewEntreprise((prevState) => ({
          ...prevState,
          password: value,
        }));
        break;
      case "adresse":
        setNewEntreprise((prevState) => ({
          ...prevState,
          adresse: value,
        }));
        break;
      case "telephone":
        setNewEntreprise((prevState) => ({
          ...prevState,
          telephone: value,
        }));
        break;
      case "dateNaissance":
        setNewEntreprise((prevState) => ({
          ...prevState,
          dateNaissance: value,
        }));
        break;
      default:
        break;
    }
  };

  return (
    <div className="infos_prsnl_container">
      {props.selectedOption === "candidat" && (
        <div className="candidat">
          {/* Le reste du code pour le composant candidat */}
        </div>
      )}

      {props.selectedOption === "recruteur" && (
        <div className="recruteur">
          {entreprises.length > 0 ? (
            <select
              value={selectedEntreprise}
              onChange={handleEntrepriseChange}
            >
              <option value="">Sélectionnez une entreprise</option>
              {entreprises.map((entreprise) => (
                <option key={entreprise.id} value={entreprise.id}>
                  {entreprise.nom}
                </option>
              ))}
            </select>
          ) : (
            <div>
              <p className="newEntreprise">
                Aucune entreprise disponible. Ajoutez une nouvelle entreprise :
              </p>

              <div className="recruteur">
                {/* Le reste du code pour ajouter une nouvelle entreprise */}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InfosPrsnl;
