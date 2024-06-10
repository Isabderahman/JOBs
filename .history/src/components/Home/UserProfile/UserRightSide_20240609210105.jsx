import React from 'react';
import '../../../style/UserProfile/UserRightSide.css';


const UserRightSide = () => {
  return (
    <div className='donnees'>
      <div className="infos">
      <div className='infos_prsnl'>Infos <i className='fas fa-info-circle'></i></div>
      </div>
      <div className="infoss">
      <div className='publications'> Publications <i className='fas fa-newspaper'></i></div>
      </div>
      <div className='postes'>Postes <i className='fas fa-briefcase'></i></div>
    </div>
  );
};

export default UserRightSide;

