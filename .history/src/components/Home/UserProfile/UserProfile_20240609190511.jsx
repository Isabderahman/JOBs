import React from "react";
import { useParams } from "react-router-dom";
import "../../../style/UserProfile/UserProfile.css";
import UserLeftSide from "./UserLeftSide";
import UserRightSide from "./UserRightSide";

const UserProfile = () => {
  const { activePage } = useParams(); // Retrieve activePage from URL parameters

  return (
    <div className="userProfile">
      <div className="left">
        <UserLeftSide activePage={activePage} /> {/* Pass activePage as a prop */}
      </div>
      <div className="right">
        <UserRightSide activePage={activePage} /> {/* Pass activePage as a prop */}
      </div>
    </div>
  );
};

export default UserProfile;
