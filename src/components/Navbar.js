import React from 'react'
import { NavLink } from 'react-router-dom'
import { RoughNotation } from "react-rough-notation"

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-white border-bottom">
      <NavLink to="/" className="navbar-brand pl-xl-5 pl-lg-5 pl-md-5 pl-sm-1 pl-xs-1  ml-xl-3 ml-lg-3 ml-md-3">
         <RoughNotation type="highlight" color="#da552f" iterations="4" strokeWidth="3" animationDelay="1400" show="true">
           <strong>Request For Yes</strong>
         </RoughNotation>
      </NavLink>

      <div className="navbar-nav ml-auto flex-row">
        <NavLink exact to="/" className="nav-link pr-3" activeClassName="nav-item active">Generator</NavLink>
        <NavLink exact to="/all" className="nav-link px-3" activeClassName="nav-item active">Index</NavLink>
        <NavLink exact to="/about" className="nav-link pr-xl-5 pr-lg-5 pr-md-5 pr-sm-1 pr-xs-1  mr-xl-5 mr-lg-5 mr-md-5  pl-xl-3 pl-lg-3 pl-md-3" activeClassName="nav-item active">About</NavLink>
      </div>
    </nav>
  )

}

export default Navbar
