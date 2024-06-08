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
    axios
      .get("/api/entreprises")
      .then((response) => {
        setEntreprises(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des entreprises : ", error);
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
        console.error("Erreur lors de l'ajout de la nouvelle entreprise : ", error);
      });
  };

  const handleInputChange = (fieldName, value) => {
    props.setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: "" }));
    switch (fieldName) {
      case "nom":
        props.setNom(value);
        break;
      case "prenom":
        props.setPrenom(value);
        break;
      case "email":
        props.setEmail(value);
        break;
      case "motDePasse":
        props.setMotDePasse(value);
        break;
      case "adresse":
        props.setAdresse(value);
        break;
      case "telephone":
        props.setTelephone(value);
        break;
      case "dateNaissance":
        props.setDateNaissance(value);
        break;
      default:
        break;
    }
  };

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
              Télécharger le CV <i className="fas fa-download"></i>
            </label>
          </div>
        </div>
      )}

      {props.selectedOption === "recruteur" && (
        <div>
          <label>
            Sélectionner une entreprise
            <select
              value={selectedEntreprise}
              onChange={handleEntrepriseChange}
              className="entreprise_select"
            >
              <option value="">Sélectionner une entreprise</option>
              {entreprises.map((entreprise) => (
                <option key={entreprise.id} value={entreprise.id}>
                  {entreprise.nom}
                </option>
              ))}
            </select>
          </label>

          <button
            type="button"
            onClick={() => setNewEntrepriseFormVisible(true)}
            className="new_entreprise_button"
          >
            Ajouter une nouvelle entreprise
          </button>

          {newEntrepriseFormVisible && (
            <form
              onSubmit={handleNewEntrepriseSubmit}
              className="new_entreprise_form"
            >
              <label>
                Nom de l'entreprise
                <input
                  type="text"
                  name="nom"
                  value={newEntreprise.nom}
                  onChange={handleNewEntrepriseInputChange}
                />
              </label>
              <label>
                Numéro de l'entreprise
                <input
                  type="text"
                  name="numEntreprise"
                  value={newEntreprise.numEntreprise}
                  onChange={handleNewEntrepriseInputChange}
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={newEntreprise.email}
                  onChange={handleNewEntrepriseInputChange}
                />
              </label>
              <label>
                Mot de passe
                <input
                  type="password"
                  name="password"
                  value={newEntreprise.password}
                  onChange={handleNewEntrepriseInputChange}
                />
              </label>
              <label>
                Adresse
                <input
                  type="text"
                  name="adresse"
                  value={newEntreprise.adresse}
                  onChange={handleNewEntrepriseInputChange}
                />
              </label>
              <label>
                Numéro de téléphone
                <input
                  type="tel"
                  name="telephone"
                  value={newEntreprise.telephone}
                  onChange={handleNewEntrepriseInputChange}
                />
              </label>
              <button type="submit">Ajouter</button>
            </form>
          )}
        </div>
      )}

      <form>
        <label>
          Nom
          <input
            type="text"
            value={props.nom}
            onChange={(e) => handleInputChange("nom", e.target.value)}
          />
          {props.errors.nom && <span className="error">{props.errors.nom}</span>}
        </label>
        <label>
          Prénom
          <input
            type="text"
            value={props.prenom}
            onChange={(e) => handleInputChange("prenom", e.target.value)}
          />
          {props.errors.prenom && <span className="error">{props.errors.prenom}</span>}
        </label>
        <label>
          Email
          <input
            type="email"
            value={props.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
          {props.errors.email && <span className="error">{props.errors.email}</span>}
        </label>
        <label>
          Mot de passe
          <input
            type="password"
            value={props.motDePasse}
            onChange={(e) => handleInputChange("motDePasse", e.target.value)}
          />
          {props.errors.motDePasse && <span className="error">{props.errors.motDePasse}</span>}
        </label>
        <label>
          Adresse
          <input
            type="text"
            value={props.adresse}
            onChange={(e) => handleInputChange("adresse", e.target.value)}
          />
          {props.errors.adresse && <span className="error">{props.errors.adresse}</span>}
        </label>
        <label>
          Téléphone
          <input
            type="tel"
            value={props.telephone}
            onChange={(e) => handleInputChange("telephone", e.target.value)}
          />
          {props.errors.telephone && <span className="error">{props.errors.telephone}</span>}
        </label>
        <label>
          Date de naissance
          <input
            type="date"
            value={props.dateNaissance}
            onChange={(e) => handleInputChange("dateNaissance", e.target.value)}
          />
          {props.errors.dateNaissance && <span className="error">{props.errors.dateNaissance}</span>}
        </label>
      </form>
    </div>
  );
};

export default InfosPrsnl;
