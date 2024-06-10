import React from "react";
import "../../../style/UserProfile/UserLeftSide.css";

const UserLeftSide = () => {


  return (
    <div className="left_side">

      <div className="card_header">
        <div className="userInfo">
          <div className="cardBg">
            <img src="" />
          </div>
        </div>

        <div className="infos">
      <div className='infos_prsnl'>Infos </div><i className='fas fa-info-circle'></i>
      </div>
      <div className="infos">
      <div className='publications'> Publications </div><i className='fas fa-newspaper'></i>
      </div>
      <div className="infos">
      <div className='postes'>Postes </div><i className='fas fa-briefcase'></i>
      </div>
      </div>
     
        <div className="content_card">
          
        </div>
      
    </div>
  );
};

export default UserLeftSide;
