import React from 'react'
import '../../../style/steps/infos_prsnl.css'

const InfosPrsnl = (props) => {
  return (
    <div className='infos_prsnl_container'>
        {props.selectedOption === "candidat" && <div className="candidat">
          <p>Veuillez remplir votre informations personnelles..</p>
            <input type="text" placeholder='Nom'/>
          <input type="text" placeholder='Prénom'/>
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Mot de passe'/>
          <input type="text" placeholder='adresse'/>
          <input type="number" placeholder='Telephone'/>
          <input type="date" placeholder='Date de naissance'/>
          <input type="text" placeholder='Num Entreprise'/>
          <input type="file" placeholder='Profile'/>
        </div>}

        {props.selectedOption === "recruteur" && <div className="recruteur">
            <input type="text" placeholder="Nom de l'entreprise"/>
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Mot de passe'/>
          <input type="text" placeholder='adresse'/>
          <input type="number" placeholder='Telephone'/>
          <input type="text" placeholder='Num Entreprise'/>
          <input type="file" placeholder='Profile'/>
        </div>}
    </div>
  )
}

export default InfosPrsnl