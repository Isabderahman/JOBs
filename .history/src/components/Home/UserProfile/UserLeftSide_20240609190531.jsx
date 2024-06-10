import React from 'react';
import '../../../style/UserProfile/UserLeftSide.css';

const UserLeftSide = ({ activePage }) => {
  return (
    <div className='user_left_side'>
      {activePage === "infos" ? (
        <div>
          <i className='fas fa-info'></i> <span>Infos</span>
        </div>
      ) : (
        <div>
          {/* Add other conditions if needed */}
        </div>
      )}
    </div>
  );
};

export default UserLeftSide;
