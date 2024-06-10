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
      <button onClick={() => props.onClick("publications")}>
        Publications
      </button>
      <button onClick={() => props.onClick("postes")}>Postes</button>
    </div>
  );
};

export default UserLeftSide;
