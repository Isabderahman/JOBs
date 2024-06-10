import React from 'react'
import { useParams } from 'react-router-dom'
import '../../../style/UserProfile/UserProfile.css';
import Header from '../Header';

const UserProfile = () => {
    const {activePage} = useParams();

  return (
    <div className='userProfile'>
      <Header />
      <div>
      UserProfile {activePage}
      </div>
       </div>
  )
}

export default UserProfile