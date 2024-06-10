import React from 'react';
import '../../../style/UserProfile/UserRightSide.css';

const UserRightSide = ({ activePage }) => {
  return (
    <div className='user_right_side'>
      {activePage === "infos" ? (
        <div>
          <h2>Informations</h2>
          {/* Display user information or other content based on activePage */}
        </div>
      ) : (
        <div>
          {/* Add other conditions if needed */}
        </div>
      )}
    </div>
  );
};

export default UserRightSide;
