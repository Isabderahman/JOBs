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
          <h2>{data[props.selected].title}</h2>
          <p>{data[props.selected].content}</p>
        </div>
      )}
    </div>
  );
};

export default UserLeftSide;
