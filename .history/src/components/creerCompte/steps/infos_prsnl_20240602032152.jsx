import React from 'react'
import '../../../style/steps/infos_prsnl.css'

const InfosPrsnl = () => {
  return (
    <div className='infos_prsnl_container'>
        {props.selectedOption}

        <div className="recruteur">
            <input type="text" placeholder="Nom de l'entreprise"/>
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Mot de passe'/>
          <input type="text" placeholder='adresse'/>
          <input type="number" placeholder='Telephone'/>
        </div>
    </div>
  )
}

export default InfosPrsnl