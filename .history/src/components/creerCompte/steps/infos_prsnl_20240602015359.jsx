import React from 'react'
import 

const InfosPrsnl = () => {
  return (
    <div className='infos_prsnl_container'>
      <input type="text" placeholder='Nom'/>
      <input type="text" placeholder='Prénom'/>
      <input type="email" placeholder='Email'/>
      <input type="password" placeholder='Mot de passe'/>
      <input type="text" placeholder='adresse'/>
      <input type="number" placeholder='Telephone'/>
      <input type="date" placeholder='Date de naissance'/>
    </div>
  )
}

export default InfosPrsnl