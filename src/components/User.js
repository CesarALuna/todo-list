import React from 'react'
import logo from '../img/logo.svg'

function User() {
  return (
    <div className="User">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="info">
        <p>Tasky</p>
        {/* <a href="#">Logout</a> */}
      </div>
    </div>
  )
}

export default User
