import React from 'react'
import '../../../style/UserProfile/UserLeftSide.css'

const UserLeftSide = (props) => {
  return (
    <div className='user_left_side'>
      {props.activePage }
    </div>
  )
}

export default UserLeftSide