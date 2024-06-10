import React from "react";
import { useParams } from "react-router-dom";
import "../../../style/UserProfile/UserProfile.css";
import UserLeftSide from "./UserLeftSide";
import UserSideLeft from "./UserLeftSide";

const UserProfile = () => {
  const { activePage } = useParams();

  return (
    <div className="userProfile">
      <div className="left">
        <UserLeftSide />
      </div>
      <div className="right">
        <UserSideRight />
      </div>
    </div>
  );
};

export default UserProfile;
