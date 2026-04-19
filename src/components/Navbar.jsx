import { useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="navbar">
      <Link className="logo" to="/" onClick={closeMenu}>SkyWave</Link>
      <nav className={open ? 'open' : ''}>
        <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/search" onClick={closeMenu}>Search</NavLink>
        <NavLink to="/info" onClick={closeMenu}>Info</NavLink>
        <NavLink to="/lounge" onClick={closeMenu}>Lounge</NavLink>
        <NavLink to="/support" onClick={closeMenu}>Support</NavLink>
        <NavLink to="/travelers" onClick={closeMenu}>Travelers</NavLink>
      </nav>
      <NavLink className="btn-outline" to="/signup" onClick={closeMenu}>
        Create Account
      </NavLink>
      <button
        className="menu-btn"
        aria-label="Open menu"
        onClick={() => setOpen((prev) => !prev)}
      >
        <FaBars />
      </button>
    </header>
  )
}

export default Navbar
