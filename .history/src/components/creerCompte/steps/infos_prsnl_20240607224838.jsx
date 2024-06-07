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


  const InfosPrsnl = ({ selectedOption, entreprises, selectedEntreprise, handleEntrepriseChange, validateFields, errors }) => {
    const [newEntreprise, setNewEntreprise] = useState({
      nom: '',
      numEntreprise: '',
      email: '',
      password: '',
      adresse: '',
      telephone: ''
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewEntreprise({ ...newEntreprise, [name]: value });
      validateFields(name, value);
    };
  
    return (
      <div className='infos_prsnl_container'>
        {selectedOption === "candidat" && (
          <div className="candidat">
            <div className="candidat_profil">
              <input type="file" className="profile-input" id="profile-input-candidat" />
              <label htmlFor="profile-input-candidat">Télécharger la photo de profil <i className='fas fa-download'></i></label>
            </div>
            <div className="candidat_cv">
              <input type="file" className="profile-input" id="profile-input-candidat" />
              <label htmlFor="profile-input-candidat">Télécharger le cv <i className='fas fa-download'></i></label>
            </div>
            <input type="text" placeholder='Nom' onBlur={(e) => validateFields('nom', e.target.value)} />
            {errors.nom && <span className="error">{errors.nom}</span>}
            <input type="text" placeholder='Prénom' onBlur={(e) => validateFields('prenom', e.target.value)} />
            {errors.prenom && <span className="error">{errors.prenom}</span>}
            <input type="email" placeholder='Email' onBlur={(e) => validateFields('email', e.target.value)} />
            {errors.email && <span className="error">{errors.email}</span>}
            <input type="password" placeholder='Mot de passe' onBlur={(e) => validateFields('password', e.target.value)} />
            {errors.password && <span className="error">{errors.password}</span>}
            <input type="text" placeholder='Adresse' onBlur={(e) => validateFields('adresse', e.target.value)} />
            {errors.adresse && <span className="error">{errors.adresse}</span>}
            <input type="number" placeholder='Téléphone' onBlur={(e) => validateFields('telephone', e.target.value)} />
            {errors.telephone && <span className="error">{errors.telephone}</span>}
            <input type="date" placeholder='Date de naissance' onBlur={(e) => validateFields('dateNaissance', e.target.value)} />
            {errors.dateNaissance && <span className="error">{errors.dateNaissance}</span>}
          </div>
        )}
  
        {selectedOption === "recruteur" && (
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
                <p className='newEntreprise'>Aucune entreprise disponible. Ajoutez une nouvelle entreprise :</p>
                <div className="recruteur">
                  <input type="file" className="profile-input" id="profile-input-recruteur" />
                  <label>Télécharger la photo de profil <i className='fas fa-download'></i></label>
                </div>
                <form>
                  <input type="text" name="nom" value={newEntreprise.nom} onChange={handleInputChange} placeholder="Nom de l'entreprise" />
                  {errors.nom && <span className="error">{errors.nom}</span>}
                  <input type="text" name="numEntreprise" value={newEntreprise.numEntreprise} onChange={handleInputChange} placeholder='Numéro Entreprise' />
                  {errors.numEntreprise && <span className="error">{errors.numEntreprise}</span>}
                  <input type="email" name="email" value={newEntreprise.email} onChange={handleInputChange} placeholder='Email' />
                  {errors.email && <span className="error">{errors.email}</span>}
                  <input type="password" name="password" value={newEntreprise.password} onChange={handleInputChange} placeholder='Mot de passe' />
                  {errors.password && <span className="error">{errors.password}</span>}
                  <input type="text" name="adresse" value={newEntreprise.adresse} onChange={handleInputChange} placeholder='Adresse' />
                  {errors.adresse && <span className="error">{errors.adresse}</span>}
                  <input type="number" name="telephone" value={newEntreprise.telephone} onChange={handleInputChange} placeholder='Téléphone' />
                  {errors.telephone && <span className="error">{errors.telephone}</span>}
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };
  
  export default InfosPrsnl;