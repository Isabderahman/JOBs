import React from 'react'

const InfosPro = (props) => {
  return (
    <di className='infos_prsnl_container'>
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
    </di>
  );
}

export default InfosPro