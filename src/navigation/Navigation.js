import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../styles/Navigation.css"


function Navigation() {
  return (
    <div className="header">
      <div className="header-logo">
<NavLink to="/" className={({isActive}) => isActive? "active" : ""}>Home</NavLink>
</div>
<div className="header-part">
<NavLink to="/about" className={({isActive}) => isActive? "active" : ""}>About</NavLink>
<NavLink to="/contact" className={({isActive}) => isActive? "active" : ""}>Contact</NavLink>
</div>
    </div>
  )
}

export default Navigation