import React from "react";
import "../../../style/UserProfile/UserLeftSide.css";

const UserLeftSide = ({ profileImg, backgroundImg, name, institute }) => {
  return (
    <div className="left_side">
      <div className="card_header">
        <div className="cardBg">
          <img src={backgroundImg} alt="Background" />
        </div>
        <div className="cardImg">
            <img src={profileImg} alt="Profile" />
          <div className="cardInfo">
            <div className="nom">{name}</div>
            <div className="institut">{institute}</div>
          </div>
        </div>
        <div className="card_infos">
          <div className="infos">Infos</div>
          <div className="infos">Publications</div>
          <div className="infos">Postes</div>
        </div>
      </div>
      <div className="content_card"></div>
    </div>
  );
};

export default UserLeftSide;
