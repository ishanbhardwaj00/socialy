import React from 'react'

const UserProfile = (props) => {
  console.log(props);
  return (
    <div>
      <p>{props.user.userName}</p>
    </div>
  )
}

export default UserProfile
