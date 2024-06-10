import React from 'react';
import '../../../style/UserProfile/UserRightSide.css';


const UserRightSide = () => {
  return (
    <div className='donnees'>
      
      <div className='publications'> Publications <i className='fas fa-newspaper'></i></div>
      <div className='postes'>Postes <i className='fas fa-briefcase'></i></div>
    </div>
  );
};

export default UserRightSide;

