import React from "react";
import '../../'

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

      <button onClick={() => props.onClick("infos")}>Infos</button>
      <button onClick={() => props.onClick("publications")}>
        Publications
      </button>
      <button onClick={() => props.onClick("postes")}>Postes</button>
    </div>
  );
};

export default UserLeftSide;
