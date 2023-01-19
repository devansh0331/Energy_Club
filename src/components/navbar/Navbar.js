import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand title" href="/">ENERGY CLUB</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link active navbar-brand mb-0 h1" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/events" className="nav-link navbar-brand mb-0 h1">Events</Link>
        </li>
        <li className="nav-item">
          <Link to="/teams" className="nav-link navbar-brand mb-0 h1  " >Team</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>




      
    </div>
  )
}

export default Navbar
