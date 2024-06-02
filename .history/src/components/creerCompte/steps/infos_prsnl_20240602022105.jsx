import React from 'react'
import '../../../style/steps/infos_prsnl.css'

const InfosPrsnl = () => {
  return (
    <div className='infos_prsnl_container'>
        <div className="candidat">
            <input type="text" placeholder='Nom'/>
          <input type="text" placeholder='Prénom'/>
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Mot de passe'/>
          <input type="text" placeholder='adresse'/>
          <input type="number" placeholder='Telephone'/>
          <input type="date" placeholder='Date de naissance'/>
        </div>

        <div className="recruteur">
            <input type="text" placeholder='Nom'/>
          <input type="text" placeholder='Prénom'/>
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Mot de passe'/>
          <input type="text" placeholder='adresse'/>
          <input type="number" placeholder='Telephone'/>
          <input type="date" placeholder='Date de naissance'/>
        </div>
    </div>
  )
}

export default InfosPrsnl