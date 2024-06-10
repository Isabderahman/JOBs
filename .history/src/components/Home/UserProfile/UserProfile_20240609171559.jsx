import React from 'react'
import { useParams } from 'react-router-dom'
import '../../../style/UserProfile/UserProfile.css';

const UserProfile = () => {
    const {activePage} = useParams();

  return (
    <div className='userProfile'>
      <div className="left"></div>
      
    </div>
  )
}

export default UserProfile