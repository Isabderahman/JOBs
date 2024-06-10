import React from "react";
import "../../../style/UserProfile/UserLeftSide.css";

const UserLeftSide = () => {
  return (
    <div className="left_side">
      <div className="card_header">
        <di className="userInfo">
          <div className="cardBg">
            <img src="" />
          </div>

          <div className="card_infos">
          <div className="infos">Infos</div>
          <div className="infos">Publications</div>
          <div className="infos">Postes</div>
        </div>

        </di>


      </div>

      <div className="content_card"></div>
    </div>
  );
};

export default UserLeftSide;
