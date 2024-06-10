import React from "react";
import "../../../style/UserProfile/UserProfile.css";
import UserLeftSide from "./UserLeftSide";
import UserRightSide from "./UserRightSide";
import { useState } from "react";

const UserProfile = () => {


  const [selected, setSelected] = useState(null);
  
  const handleSelect = (section) => {
    setSelected(section);
  };

  return (
    <div className="userProfile">
      <div className="left">
      <UserLeftSide  selected={selected} />
      </div>
      <div className="right">
      <UserRightSide  />
      </div>
    </div>
  );
};

export default UserProfile;
