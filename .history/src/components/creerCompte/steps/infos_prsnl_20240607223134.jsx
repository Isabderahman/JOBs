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
  const [errors, setErrors] = useState({});

  
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

  const handleEntrepriseChange = (event) => {
    setSelectedEntreprise(event.target.value);
  };

  const handleNewEntrepriseInputChange = (event) => {
    const { name, value } = event.target;
    setNewEntreprise(prevState => ({
      ...prevState,
      [name]: value
    }));
  
    const error = validateField(name, value);
    setErrors(prevState => ({
      ...prevState,
      [name]: error
    }));
  };

  



  const handleNewEntrepriseSubmit = (event) => {
    event.preventDefault();
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
  };



  const validateField = (name, value) => {
    let error = '';
    switch(name) {
      case 'nom':
      case 'numEntreprise':
      case 'adresse':
        if (!value) {
          error = 'Ce champ est requis';
        }
        break;
      case 'email':
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
          error = 'Adresse email invalide';
        }
        break;
      case 'password':
        if (value.length < 6) {
          error = 'Le mot de passe doit contenir au moins 6 caractères';
        }
        break;
      case 'telephone':
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(value)) {
          error = 'Numéro de téléphone invalide';
        }
        break;
      default:
        break;
    }
    return error;
  };

  




  const validateForm = () => {
    const newErrors = {};
    Object.keys(newEntreprise).forEach((key) => {
      const error = validateField(key, newEntreprise[key]);
      if (error) {
        newErrors[key] = error;
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = () => {
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
          <input type="text" placeholder='Nom'/>
          <input type="text" placeholder='Prénom'/>
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Mot de passe'/>
          <input type="text" placeholder='Adresse'/>
          <input type="number" placeholder='Téléphone'/>
          <input type="date" placeholder='Date de naissance'/>
        </div>
      )}

      {props.selectedOption === "recruteur" && (
        <div className="recruteur">



          {entreprises.length > 0 ? (
            
            <select value={selectedEntreprise} onChange={handleEntrepriseChange}>
              <option value="">Sélectionnez une entreprise</option>
              {entreprises.map(entreprise => (
                <option key={entreprise.id} value={entreprise.id}>{entreprise.nom}</option>
              ))}
            </select>


            
          ) : (
            <div>
              <p className='newEntreprise' >Aucune entreprise disponible. Ajoutez une nouvelle entreprise :</p>
              
              <div className="recruteur">
              <input type="file" className="profile-input" id="profile-input-recruteur" />
                <label >Télécharger la photo de profil <i className='fas fa-download'></i></label>
              </div>
              <form onSubmit={handleNewEntrepriseSubmit}>
                <input type="text" name="nom" value={newEntreprise.nom} onChange={handleNewEntrepriseInputChange} placeholder="Nom de l'entreprise"/>
                <input type="text" name="numEntreprise" value={newEntreprise.numEntreprise} onChange={handleNewEntrepriseInputChange} placeholder='Numéro Entreprise'/>
                <input type="email" name="email" value={newEntreprise.email} onChange={handleNewEntrepriseInputChange} placeholder='Email'/>
                <input type="password" name="password" value={newEntreprise.password} onChange={handleNewEntrepriseInputChange} placeholder='Mot de passe'/>
                <input type="text" name="adresse" value={newEntreprise.adresse} onChange={handleNewEntrepriseInputChange} placeholder='Adresse'/>
                <input type="number" name="telephone" value={newEntreprise.telephone} onChange={handleNewEntrepriseInputChange} placeholder='Téléphone'/>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InfosPrsnl;