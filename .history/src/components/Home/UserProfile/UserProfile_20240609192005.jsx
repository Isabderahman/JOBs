import React from "react";
import { useParams } from "react-router-dom";
import "../../../style/UserProfile/UserProfile.css";
import UserLeftSide from "./UserLeftSide";
import UserRightSide from "./UserRightSide";

const UserProfile = () => {



  return (
    
    <div className="userProfile">
      <div className="left">
        <UserLeftSide  /> 
      </div>
      <div className="right">
        <UserRightSide activePage={activePage} /> 
      </div>
    </div>
  );
};

export default UserProfile;
