import React from 'react';
import '../../../style/UserProfile/UserRightSide.css';


const UserRightSide = () => {
  return (
    <div className='donnees'>
      <div className="infos">
      <div className='infos_prsnl'>Infos </div><i className='fas fa-info-circle'></i>
      </div>
      <div className="infos">
      <div className='publications'> Publications </div><i className='fas fa-newspaper'></i>
      </div>
      <div className="infos">
      <div className='postes'>Postes </div><i className='fas fa-briefcase'></i>
      </div>
    </div>
  );
};

export default UserRightSide;

