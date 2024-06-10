import React from 'react'
import { useParams } from 'react-router-dom'
import '../../../style/UserProfile/UserProfile.css';
import UserSideRight from './UserSideRight';

const UserProfile = () => {
    const {activePage} = useParams();

  return (
    <div className='userProfile'>
      <div className="left"><UserSideLe/></div>
      <div className="right"><UserSideRight/></div>
    </div>
  )
}

export default UserProfile