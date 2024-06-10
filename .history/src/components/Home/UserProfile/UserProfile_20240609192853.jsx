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
    <div style={{ display: 'flex', gap: '20px' }} className="userProfile">
      <div className="left">
      <UserLeftSide onSelect={handleSelect} />
      </div>
      <UserRightSide selected={selected} />
    </div>
  );
};

export default UserProfile;
