import React from 'react'
import './ProfileCard.css'
const ProfileCard = (props) => {
  return (
    <div>
      <div className='profile-card'>
        <h1>{props.name}</h1>
        <p>Email : {props.email} </p>
      </div>
    </div>
  )
}

export default ProfileCard