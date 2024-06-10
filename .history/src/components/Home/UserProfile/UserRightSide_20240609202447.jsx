import React from 'react';
import '../../../style/UserProfile/UserRightSide.css';


const UserRightSide = ({ props }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

      <div >Infos</div>
      <div onClick={() => props.onClick("publications")}>
        Publications
      </div>
      <div onClick={() => props.onClick("postes")}>Postes</div>
    </div>
  );
};

export default UserRightSide;

