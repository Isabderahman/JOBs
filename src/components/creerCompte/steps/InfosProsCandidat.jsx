import '../../../style/steps/infos_pro_candidat.css'
import React, { useState } from 'react';
import InfosPrsnlCandidat from './InfosPrsnlCandidat';

const InfosProsCandidat = () => {
  const[education, setEducation] = useState([]);
  const [educations, setEducations] = useState([{}]);
  const [experiences, setExperiences] = useState([{}]); 
  const [experience, setExperience] = useState([]);
  const [competences, setCompetences] = useState([{}]);
  const[competence, setCompetence] = useState([]);
  const[retour, setRetour] = useState(false);

  


  const handleAjouterEducation = () => {
    setEducations([...educations, education]);
  }

  const handleChangeEducation = (e) => {
    setEducation(e.target.value);
  }

  const handleSupprimerEducation = () => {
    setEducations(educations.slice(0, -1));
  };


  const handleAjouterExperience = () => {
    setExperiences([...experiences, experience])
  }

  const  handleChangeExperience = (e) => {
    setExperience(e.target.value);
  }
  
  const handleSupprimerExperience = () => {
    setExperiences(experiences.slice(0, -1));
  }

  const handleAjouterCompetence = () => {
    setCompetences([...competences, competence])
  }
  const handleChangeCompetence = (e) => {
    setCompetence(e.target.value);
  }

  const handleSupprimerCompetence = () => {
    setCompetences(competences.slice(0, -1));
  }


  const handleRedirect = () => {
    setRetour(true); 
  }
  if (retour) {
    return <InfosPrsnlCandidat />;
  }
  








  const handleSubmit = (event) => {
    event.preventDefault(); 
    // Envoyer les données au backend ou faire quelque chose avec les données
  };


  return (
    <div className='infos_pro_candidat_container'>
        <form action="" onSubmit={handleSubmit}>
        

{/* ----------------------------------------------------------education--------------------------------------------------------------------- */}

        {educations.map((education, index) => (
        <div className="infos" key={index}>
          <h3>Education {index +1 } </h3>
          <input type="text" name="diplome" placeholder='Diplôme' onChange={handleChangeEducation}  required/>
          <input type="text" name="institut" placeholder='Institut' onChange={handleChangeEducation}  required/>
          <div className="date_debut">
            <label>Date de début</label>
            <input type="date" name="debut" onChange={handleChangeEducation}  required/>
          </div>
          <div className="date_debut">
            <label>Date de fin</label>
            <input type="date" name="fin" onChange={handleChangeEducation}  required/>
          </div>
          <textarea name="description" placeholder='Description' onChange={handleChangeEducation} required></textarea>
          <div className="btn">
            <button className='ajouter' onClick={handleAjouterEducation}>Ajouter une éducation</button>
            <button className='supprimer' onClick={handleSupprimerEducation}>Supprimer</button>
            <br />
            <br />
            <br />
            <hr />
          </div>
        </div>
      ))}


{/* ----------------------------------------------------------expérience--------------------------------------------------------------------- */}


          {experiences.map((exp, index) => (
                      <div className="infos">

                      <h3>Expérience {index + 1} </h3>
                      <input type="text" placeholder='Poste' onChange={handleChangeExperience} required/>
                      <input type="text" placeholder='Entreprise' onChange={handleChangeExperience} required/>
                      <div className="date_debut">
                        <label>Date de début</label>
                        <input type="date"  onChange={handleChangeExperience} required/>
                        </div>
                        <div className="date_debut">
                        <label>Date de fin</label>
                        <input type="date" onChange={handleChangeExperience} required />
                        </div>
                        <textarea name="description" placeholder='Description' onChange={handleChangeExperience} required></textarea>
          
                        <div className="btn">
                          <button className='ajouter' onClick={handleAjouterExperience}>Ajouter une expérience</button>
                          <button className='supprimer' onClick={handleSupprimerExperience}>Supprimer</button>
                        </div>
                        <br />
            <br />
            <br />
            <hr />
          </div>
          ))}




{/* ----------------------------------------------------------compétences------------------------------------------------------------------ */}
          {competences.map((cmp, index) => (
                      <div className="infos">
                      <h3>Compétence {index + 1} </h3>
                        <input type="text" placeholder='Compétence' onChange={handleChangeCompetence} required/>
            
                        <div className="btn">
                            <button className='ajouter' onClick={handleAjouterCompetence}>Ajouter un compétence</button>
                            <button className='supprimer' onClick={handleSupprimerCompetence}>Supprimer</button>
                          </div>
                      </div>
          ))}

          <button type='button' onClick={handleRedirect}>Retour</button>
          <button type='submit'>Confirmer</button>
        </form>
    </div>
  )
}

export default InfosProsCandidat