import React from "react";
import "../../../style/UserProfile/UserLeftSide.css";

const UserLeftSide = () => {


  return (
    <div>
      <div className="Card">
        <div className="UserInfo">
          <div className="CardBg">
            <img src="" />
          </div>
        </div>
      </div>
      {props.selected && (
        <div className="card">
          
        </div>
      )}
    </div>
  );
};

export default UserLeftSide;
