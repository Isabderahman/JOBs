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

  // la gestion des erreur ---------------------------------------------------------------------------------------------------------------

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [adresse, setAdresse] = useState("");
  const [telephone, setTelephone] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [errors, setErrors] = useState({});

 
  








  const validateField = (fieldName, value) => {
    let errorMessage = "";
  
    switch (fieldName) {
      case "nom":
      case "prenom":
        if (!value) {
          errorMessage = "Ce champ est requis";
        }
        break;
      case "email":
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
          errorMessage = "Ce champ est requis";
        } else if (!emailPattern.test(value)) {
          errorMessage = "Adresse email invalide";
        }
        break;
      case "motDePasse":
        if (!value) {
          errorMessage = "Ce champ est requis";
        } else if (value.length < 6) {
          errorMessage = "Le mot de passe doit comporter au moins 6 caractères";
        }
        break;
      case "telephone":
        const phonePattern = /^[0-9]+$/;
        if (!value) {
          errorMessage = "Ce champ est requis";
        } else if (!phonePattern.test(value)) {
          errorMessage = "Numéro de téléphone invalide";
        }
        break;
      case "dateNaissance":
        if (!value) {
          errorMessage = "Ce champ est requis";
        }
        break;
      default:
        break;
    }
  
    return errorMessage;
  };

  













  const handleInputChange = (fieldName, value) => {
    const errorMessage = validateField(fieldName, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: errorMessage,
    }));
  
    // Mettre à jour l'état du champ
    switch (fieldName) {
      case "nom":
        setNom(value);
        break;
      case "prenom":
        setPrenom(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "motDePasse":
        setMotDePasse(value);
        break;
      case "adresse":
        setAdresse(value);
        break;
      case "telephone":
        setTelephone(value);
        break;
      case "dateNaissance":
        setDateNaissance(value);
        break;
      default:
        break;
    }
  };
  







  // l-----------------------------------------------------------------------------------------------------------------------------------------------------------------

  return (
    <div className="infos_prsnl_container">
      {props.selectedOption === "candidat" && (
        <div className="candidat">
          <div className="candidat_profil">
            <input
              type="file"
              className="profile-input"
              id="profile-input-candidat"
            />
            <label htmlFor="profile-input-candidat">
              Télécharger la photo de profil <i className="fas fa-download"></i>
            </label>
          </div>
          <div className="candidat_cv">
            <input
              type="file"
              className="profile-input"
              id="profile-input-candidat"
            />
            <label htmlFor="profile-input-candidat">
              Télécharger le cv <i className="fas fa-download"></i>
            </label>
          </div>
          <input type="text" placeholder="Nom" onChange={(e) => setNom(e.target.value)} />
      {errors.nom && <p>{errors.nom}</p>}
      <input type="text" placeholder="Prénom" onChange={(e) => setPrenom(e.target.value)} />
      {errors.prenom && <p>{errors.prenom}</p>}
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      {errors.email && <p>{errors.email}</p>}
      <input type="password" placeholder="Mot de passe" onChange={(e) => setMotDePasse(e.target.value)} />
      {errors.motDePasse && <p>{errors.motDePasse}</p>}
      <input type="text" placeholder="Adresse" onChange={(e) => setAdresse(e.target.value)} />
      {errors.adresse && <p>{errors.adresse}</p>}
      <input type="text" placeholder="Téléphone" onChange={(e) => setTelephone(e.target.value)} />
      {errors.telephone && <p>{errors.telephone}</p>}
      <input type="date" placeholder="Date de Naissance" onChange={(e) => setDateNaissance(e.target.value)} />
      {errors.dateNaissance && <p>{errors.dateNaissance}</p>}
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
          <input
            type="file"
            className="profile-input"
            id="profile-input-recruteur"
          />
          <label>
            Télécharger la photo de profil{" "}
            <i className="fas fa-download"></i>
          </label>
        </div>
        <form onSubmit={handleNewEntrepriseSubmit}>
          <input
            type="text"
            name="nom"
            value={newEntreprise.nom}
            onChange={handleNewEntrepriseInputChange}
            placeholder="Nom de l'entreprise"
          />
          {<span className="error">{props.errors.nom}</span>}
          <input
            type="text"
            name="numEntreprise"
            value={newEntreprise.numEntreprise}
            onChange={handleNewEntrepriseInputChange}
            placeholder="Numéro Entreprise"
          />
          {<span className="error">{props.errors.numEntreprise}</span>}
          <input
            type="email"
            name="email"
            value={newEntreprise.email}
            onChange={handleNewEntrepriseInputChange}
            placeholder="Email"
          />
          {<span className="error">{props.errors.email}</span>}
          <input
            type="password"
            name="password"
            value={newEntreprise.password}
            onChange={handleNewEntrepriseInputChange}
            placeholder="Mot de passe"
          />
          {<span className="error">{props.errors.motDePasse}</span>}
          <input
            type="text"
            name="adresse"
            value={newEntreprise.adresse}
            onChange={handleNewEntrepriseInputChange}
            placeholder="Adresse"
          />
          {<span className="error">{props.errors.adresse}</span>}
          <input
            type="number"
            name="telephone"
            value={newEntreprise.telephone}
            onChange={handleNewEntrepriseInputChange}
            placeholder="Téléphone"
          />
          {<span className="error">{props.errors.telephone}</span>}
        </form>
      </div>
    )}
  </div>
)}

    </div>
  );
};

export default InfosPrsnl;
