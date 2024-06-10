import React from "react";
import "../../../style/UserProfile/UserLeftSide.css";

const UserLeftSide = (props) => {
  const data = {
    infos: { title: "Infos", content: "Voici les informations." },
    publications: { title: "Publications", content: "Voici les publications." },
    postes: { title: "Postes", content: "Voici les postes." },
  };

  return (
    <div>
      <div className="Card">
        <div className="UserInfo">
          <div className="CardB">
            <img src="" />
          </div>
        </div>
      </div>
      {props.selected && (
        <div className="card">
          <h2>{data[props.selected].title}</h2>
          <p>{data[props.selected].content}</p>
        </div>
      )}
    </div>
  );
};

export default UserLeftSide;
