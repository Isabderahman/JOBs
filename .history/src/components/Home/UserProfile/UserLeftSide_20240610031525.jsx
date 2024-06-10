import React from "react";
import "../../../style/UserProfile/UserLeftSide.css";
import { useState } from "react";

const UserLeftSide = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="left_side">
      <div className="card_header">
        <div className="userInfo">
          <div className="cardBg">
            <img src="" />
          </div>
          <div className="infos">
              <div>Abdellatif MAJD</div>
              <div>Institut Spécialisé NTIC Sydi Youssef Ben Ali </div>
              <div>Marrakech </div>
              <div>+212 687494073 </div>
            </div>
        </div>
      </div>


      </div>
    </div>
  );
};

export default UserLeftSide;
