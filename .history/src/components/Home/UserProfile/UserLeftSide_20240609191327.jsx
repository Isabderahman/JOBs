import React from 'react';
import '../../../style/UserProfile/UserLeftSide.css';

const UserLeftSide = ({ activePage }) => {
  return (
    <div className='user_left_side'>
      {activePage === "profile-utilisateur" ? (
        <div>
          <span>Infos</span>
        </div>
    </div>
  );
};

export default UserLeftSide;
