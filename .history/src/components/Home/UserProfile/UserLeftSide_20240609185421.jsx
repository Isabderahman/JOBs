import React from 'react'
import '../../../style/UserProfile/UserLeftSide.css'

const UserLeftSide = (props) => {
  return (
    <div className='user_left_side'>

      {props.activePage === "infos" ? 
      <div>
          <i className=''></i>
      </div>
      : 
      <div>
        
        </div>
        
      }
    </div>
  )
}

export default UserLeftSide