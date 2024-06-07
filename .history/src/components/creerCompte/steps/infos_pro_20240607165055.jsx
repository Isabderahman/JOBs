import React from 'react';
import '../../../style/steps/infos_pro.css';

const InfosPro = (props) => {
  const { selectedOption, userInfo } = props;

  return (
    <div className='infos_pro_container'>
      {selectedOption === "candidat" && (
        <div className="candidat">
          <h2>Éducation</h2>
          {userInfo.education.map((edu, index) => (
            <div key={index} className="education">
              <h3>{edu.diplome}</h3>
              <p>{edu.institut}</p>
              <p>{edu.date_debut} - {edu.date_fin}</p>
              <p>{edu.description}</p>
            </div>
          ))}
          <h2>Expériences</h2>
          {userInfo.experiences.map((exp, index) => (
            <div key={index} className="experience">
              <h3>{exp.poste}</h3>
              <p>{exp.entreprise}</p>
              <p>{exp.date_debut} - {exp.date_fin}</p>
              <p>{exp.description}</p>
            </div>
          ))}
          <h2>Compétences</h2>
          <ul>
            {userInfo.competences.map((comp, index) => (
              <li key={index}>{comp.competence}</li>
            ))}
          </ul>
        </div>
      )}

      {selectedOption === "recruteur" && (
        <div className="recruteur">
          <h2>Informations Personnelles</h2>
          <p><strong>Email:</strong> {userInfo.email}</p>
          <p><strong>Mot de passe:</strong> {userInfo.password}</p>
          <p><strong>Prénom:</strong> {userInfo.prenom}</p>
          <p><strong>Nom:</strong> {userInfo.nom}</p>
          <p><strong>Adresse:</strong> {userInfo.adresse}</p>
          <p><strong>Téléphone:</strong> {userInfo.telephone}</p>
          <p><strong>Date de naissance:</strong> {userInfo.date_naissance}</p>
          <p><strong>ID Entreprise:</strong> {userInfo.id_entreprise}</p>
        </div>
      )}
    </div>
  );
}

export default InfosPro;
