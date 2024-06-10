import React from "react";
import '../../../style/UserProfile/UserLeftSide.css'

const UserLeftSide = () => {







  const data = {
    infos: { title: "Infos", content: "Voici les informations." },
    publications: { title: "Publications", content: "Voici les publications." },
    postes: { title: "Postes", content: "Voici les postes." }
  };

  return (
    <div>
      {selected && (
        <div className="card">
          <h2>{data[selected].title}</h2>
          <p>{data[selected].content}</p>
        </div>
      )}
    </div>
  );
};

export default UserLeftSide;
