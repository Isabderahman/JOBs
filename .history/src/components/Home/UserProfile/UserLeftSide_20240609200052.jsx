import React from "react";
import '../../../style/UserProfile/UserLeftSide.css'

const UserLeftSide = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div className="Card">
        <d className="UserInfo">
          <div className="CardBackground">
            <img src="" />
          </div>
        </d>
      </div>

      <div onClick={() => props.onClick("infos")}>Infos</div>
      <div onClick={() => props.onClick("publications")}>
        Publications
      </div>
      <div onClick={() => props.onClick("postes")}>Postes</div>
    </div>
  );
};

export default UserLeftSide;
