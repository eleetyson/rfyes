import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-white border-bottom">
      <Link to="/" className="navbar-brand pl-xl-5 pl-lg-5 pl-md-5 pl-sm-2  ml-xl-3 ml-lg-3 ml-md-3">
        Logo here
      </Link>

      <div className="navbar-nav ml-auto flex-row">
        <Link to="/all" className="nav-link px-3">Index</Link>
        <Link to="/about" className="nav-link pr-xl-5 pr-lg-5 pr-md-5 pr-sm-2  mr-xl-5 mr-lg-5 mr-md-5  pl-xl-3 pl-lg-3 pl-md-3">About</Link>
      </div>
    </nav>
  )

}
