import React from "react";
import '../../../style/UserProfile/UserLeftSide.css'

const UserLeftSide = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div className="Card">
        <div className="UserInfo">
          <div className="CardBackground">
            <img src="" />
          </div>
        </div>
      </div>

      <div onClick={() => props.onClick("infos")}>Infos</div>
      <div onClick={() => props.onClick("publications")}>
        Publications
      </div>
      <div onClick={() => props.onClick("postes")}>Postes</div>
    </div>
  );






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
