import React from 'react'
import logo from "../../logofinlas.png"
import { Link } from 'react-router-dom'
import "./Navbar3.css"

function Navbar3() {
  return (
    <div className='mynav'>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" href="#"><img src={logo} alt=""/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to="/" className="nav-link" aria-current="page" >HOME</Link>
        <Link to="/events" className="nav-link" >EVENT</Link>
        <Link to="/teams" className="nav-link" >TEAM</Link>
        
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar3
