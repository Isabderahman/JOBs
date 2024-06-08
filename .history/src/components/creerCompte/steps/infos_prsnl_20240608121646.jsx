import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../style/steps/infos_prsnl.css";

const InfosPrsnl = ({ selectedOption, errors, handleInputChange, formData, handleStepChange }) => {
  const [entreprises, setEntreprises] = useState([]);
  const [selectedEntreprise, setSelectedEntreprise] = useState("");
  const [newEntrepriseFormVisible, setNewEntrepriseFormVisible] = useState(false);
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

  const handleNewEntrepriseSubmit = () => {
    if (
      newEntreprise.nom &&
      newEntreprise.numEntreprise &&
      newEntreprise.email &&
      newEntreprise.password &&
      newEntreprise.adresse &&
      newEntreprise.telephone
    ) {
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
          handleStepChange(); // Appeler cette fonction pour passer à l'étape suivante
        })
        .catch((error) => {
          console.error("Erreur lors de l'ajout de la nouvelle entreprise : ", error);
        });
    }
  };

  useEffect(() => {
    if (
      newEntreprise.nom &&
      newEntreprise.numEntreprise &&
      newEntreprise.email &&
      newEntreprise.password &&
      newEntreprise.adresse &&
      newEntreprise.telephone
    ) {
      handleNewEntrepriseSubmit();
    }
  }, [newEntreprise]);

  return (
    <div className="infos_prsnl_container">
      {selectedOption === "candidat" && (
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
          <input
            type="text"
            placeholder="Nom"
            value={formData.nom}
            onChange={(e) => handleInputChange("nom", e.target.value)}
          />
          {errors.nom && <span className="error">{errors.nom}</span>}
          <input
            type="text"
            placeholder="Prénom"
            value={formData.prenom}
            onChange={(e) => handleInputChange("prenom", e.target.value)}
          />
          {errors.prenom && <span className="error">{errors.prenom}</span>}
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
          <input
            type="password"
            placeholder="Mot de passe"
            value={formData.motDePasse}
            onChange={(e) => handleInputChange("motDePasse", e.target.value)}
          />
          {errors.motDePasse && <span className="error">{errors.motDePasse}</span>}
          <input
            type="text"
            placeholder="Adresse"
            value={formData.adresse}
            onChange={(e) => handleInputChange("adresse", e.target.value)}
          />
          {errors.adresse && <span className="error">{errors.adresse}</span>}
          <input
            type="number"
            placeholder="Téléphone"
            value={formData.telephone}
            onChange={(e) => handleInputChange("telephone", e.target.value)}
          />
          {errors.telephone && <span className="error">{errors.telephone}</span>}
          <input
            type="date"
            placeholder="Date de naissance"
            value={formData.dateNaissance}
            onChange={(e) => handleInputChange("dateNaissance", e.target.value)}
          />
          {errors.dateNaissance && <span className="error">{errors.dateNaissance}</span>}
        </div>
      )}

      {selectedOption === "recruteur" && (
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
                <input
                  type="text"
                  name="nom"
                  value={newEntreprise.nom}
                  onChange={handleNewEntrepriseInputChange}
                  placeholder="Nom de l'entreprise"
                />
                {errors.nom && <span className="error">{errors.nom}</span>}
                <input
                  type="text"
                  name="numEntreprise"
                  value={newEntreprise.numEntreprise}
                  onChange={handleNewEntrepriseInputChange}
                  placeholder="Numéro Entreprise"
                />
                
                <input
                  type="email"
                  name="email"
                  value={newEntreprise.email}
                  onChange={handleNewEntrepriseInputChange}
                  placeholder="Email"
                />
                {errors.email && <span className="error">{errors.email}</span>}
                <input
                  type="password"
                  name="password"
                  value={newEntreprise.password}
                  onChange={handleNewEntrepriseInputChange}
                  placeholder="Mot de passe"
                />
                {errors.password && <span className="error">{errors.password}</span>}
                <input
                  type="text"
                  name="adresse"
                  value={newEntreprise.adresse}
                  onChange={handleNewEntrepriseInputChange}
                  placeholder="Adresse"
                />
                {errors.adresse && <span className="error">{errors.adresse}</span>}
                <input
                  type="number"
                  name="telephone"
                  value={newEntreprise.telephone}
                  onChange={handleNewEntrepriseInputChange}
                  placeholder="Téléphone"
                />
                {errors.telephone && <span className="error">{errors.telephone}</span>}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InfosPrsnl;
