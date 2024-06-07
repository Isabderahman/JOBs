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










  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [adresse, setAdresse] = useState('');
  const [telephone, setTelephone] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [errors, setErrors] = useState({});

  const validateField = (fieldName, value) => {
    let errorMessage = '';
    switch(fieldName) {
      case 'nom':
        if (!value) {
          errorMessage = 'Le nom est requis.';
        }
        break;
      case 'prenom':
        if (!value) {
          errorMessage = 'Le prénom est requis.';
        }
        break;
      case 'email':
        if (!value) {
          errorMessage = 'L\'email est requis.';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          errorMessage = 'L\'email est invalide.';
        }
        break;
      case 'motDePasse':
        if (!value) {
          errorMessage = 'Le mot de passe est requis.';
        } else if (value.length < 6) {
          errorMessage = 'Le mot de passe doit contenir au moins 6 caractères.';
        }
        break;
      case 'adresse':
        if (!value) {
          errorMessage = 'L\'adresse est requise.';
        }
        break;
      case 'telephone':
        if (!value) {
          errorMessage = 'Le numéro de téléphone est requis.';
        } else if (isNaN(value)) {
          errorMessage = 'Le numéro de téléphone doit être numérique.';
        }
        break;
      case 'dateNaissance':
        if (!value) {
          errorMessage = 'La date de naissance est requise.';
        }
        break;
      default:
        break;
    }
    return errorMessage;
  };

  const handleInputChange = (fieldName, value) => {
    const newErrors = { ...errors };
    const errorMessage = validateField(fieldName, value);
    newErrors[fieldName] = errorMessage;
    setErrors(newErrors);
    // Mettre à jour l'état du champ
    switch(fieldName) {
      case 'nom':
        setNom(value);
        break;
      case 'prenom':
        setPrenom(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'motDePasse':
        setMotDePasse(value);
        break;
      case 'adresse':
        setAdresse(value);
        break;
      case 'telephone':
        setTelephone(value);
        break;
      case 'dateNaissance':
        setDateNaissance(value);
        break;
      default:
        break;
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
    <input type="text" placeholder='Nom' value={nom} onChange={(e) => handleInputChange('nom', e.target.value)} />
    {errors.nom && <span className="error">{errors.nom}</span>}
    <input type="text" placeholder='Prénom' value={prenom} onChange={(e) => handleInputChange('prenom', e.target.value)} />
    {errors.prenom && <span className="error">{errors.prenom}</span>}
    <input type="email" placeholder='Email' value={email} onChange={(e) => handleInputChange('email', e.target.value)} />
    {errors.email && <span className="error">{errors.email}</span>}
    <input type="password" placeholder='Mot de passe' value={motDePasse} onChange={(e) => handleInputChange('motDePasse', e.target.value)} />
    {errors.motDePasse && <span className="error">{errors.motDePasse}</span>}
    <input type="text" placeholder='Adresse' value={adresse} onChange={(e) => handleInputChange('adresse', e.target.value)} />
    {errors.adresse && <span className="error">{errors.adresse}</span>}
    <input type="number" placeholder='Téléphone' value={telephone} onChange={(e) => handleInputChange('telephone', e.target.value)} />
    {errors.telephone && <span className="error">{errors.telephone}</span>}
    <input type="date" placeholder='Date de naissance' value={dateNaissance} onChange={(e) => handleInputChange('dateNaissance', e.target.value)} />
    {errors.dateNaissance && <span className="error">{errors.dateNaissance}</span>}
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