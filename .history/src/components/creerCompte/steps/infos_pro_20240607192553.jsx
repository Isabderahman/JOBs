import React, { useState } from 'react';
import '../../../style/steps/infos_pro.css';

const InfosPro = (props) => {
  const [userType, setUserType] = useState(props.selectedOption);
  const [candidateData, setCandidateData] = useState({
    education: [{ diplome: '', institut: '', date_debut: '', date_fin: '', description: '' }],
    experiences: [{ poste: '', entreprise: '', date_debut: '', date_fin: '', description: '' }],
    competences: ['']
  });

  const [recruiterData, setRecruiterData] = useState({
    email: '',
    password: '',
    prenom: '',
    nom: '',
    adresse: '',
    telephone: '',
    date_naissance: '',
    id_entreprise: ''
  });

  const handleCandidateChange = (e, index, section) => {
    const { name, value } = e.target;
    const updatedSection = [...candidateData[section]];
    updatedSection[index][name] = value;
    setCandidateData({ ...candidateData, [section]: updatedSection });
  };

  const handleRecruiterChange = (e) => {
    const { name, value } = e.target;
    setRecruiterData({ ...recruiterData, [name]: value });
  };

  const addField = (section) => {
    if (section === 'education') {
      setCandidateData({ ...candidateData, education: [...candidateData.education, { diplome: '', institut: '', date_debut: '', date_fin: '', description: '' }] });
    } else if (section === 'experiences') {
      setCandidateData({ ...candidateData, experiences: [...candidateData.experiences, { poste: '', entreprise: '', date_debut: '', date_fin: '', description: '' }] });
    } else if (section === 'competences') {
      setCandidateData({ ...candidateData, competences: [...candidateData.competences, ''] });
    }
  };

  const handleCompetenceChange = (e, index) => {
    const updatedCompetences = [...candidateData.competences];
    updatedCompetences[index] = e.target.value;
    setCandidateData({ ...candidateData, competences: updatedCompetences });
  };

  const removeField = (index, section) => {
    const updatedSection = candidateData[section].filter((_, i) => i !== index);
    setCandidateData({ ...candidateData, [section]: updatedSection });
  };

  return (
    <div className='infos_pro_container'>

      
      {userType === "candidat" && (
        <div className="candidat" style={{ margin: '100px 0' }}>
          
          <h3>Éducation</h3>
          {candidateData.education.map((edu, index) => (
            <div key={index}>
              <input type="text" className="input-field" name="diplome" value={edu.diplome} onChange={(e) => handleCandidateChange(e, index, 'education')} placeholder="Diplôme" />
              <input type="text" className="input-field" name="institut" value={edu.institut} onChange={(e) => handleCandidateChange(e, index, 'education')} placeholder="Institut" />
              <input type="date" className="input-field" name="date_debut" value={edu.date_debut} onChange={(e) => handleCandidateChange(e, index, 'education')} placeholder="Date de début" />
              <input type="date" className="input-field" name="date_fin" value={edu.date_fin} onChange={(e) => handleCandidateChange(e, index, 'education')} placeholder="Date de fin" />
              <input type="text" className="input-field" name="description" value={edu.description} onChange={(e) => handleCandidateChange(e, index, 'education')} placeholder="Description" />
              <button className="remove-button" onClick={() => removeField(index, 'education')}>Supprimer</button>
              <button className="button-field" onClick={() => addField('education')}>Ajouter une éducation</button>

            </div>
          ))}

          <h3>Expériences</h3>
          {candidateData.experiences.map((exp, index) => (
            <div key={index}>
              <input type="text" className="input-field" name="poste" value={exp.poste} onChange={(e) => handleCandidateChange(e, index, 'experiences')} placeholder="Poste" />
              <input type="text" className="input-field" name="entreprise" value={exp.entreprise} onChange={(e) => handleCandidateChange(e, index, 'experiences')} placeholder="Entreprise" />
              <input type="date" className="input-field" name="date_debut" value={exp.date_debut} onChange={(e) => handleCandidateChange(e, index, 'experiences')} placeholder="Date de début" />
              <input type="date" className="input-field" name="date_fin" value={exp.date_fin} onChange={(e) => handleCandidateChange(e, index, 'experiences')} placeholder="Date de fin" />
              <input type="text" className="input-field" name="description" value={exp.description} onChange={(e) => handleCandidateChange(e, index, 'experiences')} placeholder="Description" />
              <button className="remove-button" onClick={() => removeField(index, 'experiences')}>Supprimer</button>
              <button className="button-field" onClick={() => addField('experiences')}>Ajouter une expérience</button>

            </div>
          ))}

          <h3>Compétences</h3>
          {candidateData.competences.map((comp, index) => (
            <div key={index}>
              <input type="text" className="input-field" value={comp} onChange={(e) => handleCompetenceChange(e, index)} placeholder="Compétence" />
              <button className="remove-button" onClick={() => removeField(index, 'competences')}>Supprimer</button>
              <button className="button-field" onClick={() => addField('competences')}>Ajouter une compétence</button>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default InfosPro;
