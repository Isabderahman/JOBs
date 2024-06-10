import React from 'react'
import { useParams } from 'react-router-dom'
import 

const UserProfile = () => {
    const {activePage} = useParams();

  return (
    <div className='userProfile'>UserProfile {activePage} </div>
  )
}

export default UserProfile