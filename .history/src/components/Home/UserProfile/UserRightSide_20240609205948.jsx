import React from 'react';
import '../../../style/UserProfile/UserRightSide.css';


const UserRightSide = () => {
  return (
    <div className='donnees'>
      <div className='infos'>Infos <i className='fas fa-info-circle'></i></div>
      <div className='publications'> Publications <i className='fas fa-pub'></i></div>
      <div className='postes'>Postes <i className='fas fa-postes'></i></div>
    </div>
  );
};

export default UserRightSide;

