import React, { useState } from "react";
import "../../../style/UserProfile/UserLeftSide.css";

const UserLeftSide = () => {
  // Utilisation de l'état pour suivre l'onglet sélectionné
  const [selectedTab, setSelectedTab] = useState('publications');

  // Exemple de données pour les publications et les offres d'emplois
  const publications = [
    { id: 1, content: 'Publication 1' },
    { id: 2, content: 'Publication 2' },
    // Ajoutez plus de publications ici
  ];

  const jobOffers = [
    { id: 1, content: 'Offre d\'emploi 1' },
    { id: 2, content: 'Offre d\'emploi 2' },
    // Ajoutez plus d'offres d'emplois ici
  ];

  return (
    <div className="left_side">
      <div className="card_header">
        <div className="userInfo">
          <div className="cardBg">
            <img src="" alt="Background" />
            <div className="nameField">
              <div>Abdellatif MAJD</div>
              <div>Institut Spécialisé NTIC Sydi Youssef Ben Ali</div>
            </div>
          </div>
        </div>
        <div className="card_infos">
          <div
            className={`infos ${selectedTab === 'publications' ? 'active' : ''}`}
            onClick={() => setSelectedTab('publications')}
          >
            Publications
          </div>
          <div
            className={`infos ${selectedTab === 'jobOffers' ? 'active' : ''}`}
            onClick={() => setSelectedTab('jobOffers')}
          >
            Offres d'emplois
          </div>
        </div>
      </div>

      <div className="content_card">
        {selectedTab === 'publications' && (
          <div>
            <h3>Publications</h3>
            {publications.map((publication) => (
              <div key={publication.id} className="card">
                {publication.content}
              </div>
            ))}
          </div>
        )}
        {selectedTab === 'jobOffers' && (
          <div>
            <h3>Offres d'emplois</h3>
            {jobOffers.map((offer) => (
              <div key={offer.id} className="card">
                {offer.content}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserLeftSide;
