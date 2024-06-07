import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import '../../../style/steps/infos_prsnl.css'

const InfosPrsnl = (props) => {
  const [entreprises, setEntreprises] = useState([]);
  const [selectedEntreprise, setSelectedEntreprise] = useState('');
  const [newEntrepriseFormVisible, setNewEntrepriseFormVisible] = useState(false);
  const [newEntreprise, setNewEntreprise] = useState({
    nom: '',
    numEntreprise: '',
    email: '',
    password: '',
    adresse: '',
    telephone: ''
  });
  const [errors, setErrors] = useState({}); // État pour stocker les erreurs

  useEffect(() => {
    // Effectuer une requête HTTP pour récupérer la liste des entreprises
    axios.get('/api/entreprises')
      .then(response => {
        setEntreprises(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des entreprises : ', error);
      });
  }, []);

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    // Validation des champs
    if (!newEntreprise.nom) {
      formIsValid = false;
      errors["nom"] = "Veuillez saisir le nom de l'entreprise.";
    }

    if (!newEntreprise.numEntreprise) {
      formIsValid = false;
      errors["numEntreprise"] = "Veuillez saisir le numéro de l'entreprise.";
    }

    // Validez les autres champs de la même manière

    setErrors(errors);
    return formIsValid;
  };

  const handleNewEntrepriseSubmit = (event) => {
    event.preventDefault();
    
    if (validateForm()) {
      // Envoyer une requête HTTP pour ajouter la nouvelle entreprise
      axios.post('/api/ajouter-entreprise', newEntreprise)
        .then(response => {
          setEntreprises(prevState => [...prevState, response.data]);
          setNewEntrepriseFormVisible(false);
          setNewEntreprise({
            nom: '',
            numEntreprise: '',
            email: '',
            password: '',
            adresse: '',
            telephone: ''
          });
        })
        .catch(error => {
          console.error('Erreur lors de l\'ajout de la nouvelle entreprise : ', error);
        });
    }
  };

  return (
    <div className='infos_prsnl_container'>
      {props.selectedOption === "candidat" && (
        <div className="candidat">
          {/* Code pour les champs candidat */}
        </div>
      )}

      {props.selectedOption === "recruteur" && (
        <div className="recruteur">
          {/* Code pour les champs recruteur */}
        </div>
      )}

      {/* Affichage des erreurs */}
      {Object.keys(errors).map((fieldName, index) => {
        return (
          <div key={index} className="error">{errors[fieldName]}</div>
        );
      })}
    </div>
  );
};

export default InfosPrsnl;
