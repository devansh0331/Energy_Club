import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar2() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
      <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand title" href="#">EnergyClub</Link>
  </div>
</nav>
  <div className="container-fluid">
    
    <Link to="/" className="navbar-brand mb-0 h1">Home</Link>
    <Link to="/events" className="navbar-brand mb-0 h1">Events</Link>
    <Link to="/teams" className="navbar-brand mb-0 h1">Team</Link>
  </div>
</nav>
    </div>
  )
}

export default Navbar2
