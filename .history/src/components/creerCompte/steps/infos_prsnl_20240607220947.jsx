import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../style/steps/infos_prsnl.css';

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
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios.get('/api/entreprises')
      .then(response => {
        setEntreprises(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des entreprises : ', error);
      });
  }, []);

  const handleEntrepriseChange = (event) => {
    setSelectedEntreprise(event.target.value);
  };

  const handleNewEntrepriseInputChange = (event) => {
    const { name, value } = event.target;
    setNewEntreprise(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    let formErrors = {};
    if (!newEntreprise.nom) formErrors.nom = "Le nom de l'entreprise est requis.";
    if (!newEntreprise.numEntreprise) formErrors.numEntreprise = "Le numéro d'entreprise est requis.";
    if (!newEntreprise.email) {
      formErrors.email = "L'email est requis.";
    } else if (!/\S+@\S+\.\S+/.test(newEntreprise.email)) {
      formErrors.email = "L'email n'est pas valide.";
    }
    if (!newEntreprise.password) formErrors.password = "Le mot de passe est requis.";
    if (!newEntreprise.adresse) formErrors.adresse = "L'adresse est requise.";
    if (!newEntreprise.telephone) formErrors.telephone = "Le téléphone est requis.";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleNewEntrepriseSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
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
          setErrors({});
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
          <div className="candidat_profil">
            <input type="file" className="profile-input" id="profile-input-candidat" />
            <label htmlFor="profile-input-candidat">Télécharger la photo de profil <i className='fas fa-download'></i></label>
          </div>
          <div className="candidat_cv">
            <input type="file" className="profile-input" id="profile-input-candidat" />
            <label htmlFor="profile-input-candidat">Télécharger le cv <i className='fas fa-download'></i></label>
          </div>
          <input type="text" placeholder='
