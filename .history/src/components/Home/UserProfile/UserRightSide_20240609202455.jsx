import React from 'react';
import '../../../style/UserProfile/UserRightSide.css';


const UserRightSide = ({ props }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

      <div >Infos</div>
      <div >
        Publications
      </div>
      <div >Postes</div>
    </div>
  );
};

export default UserRightSide;

