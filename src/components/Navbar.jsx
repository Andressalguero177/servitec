import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto)
  }

  return (
    <nav className="navbar">
      <Link to="/" className="logo">MiTienda</Link>

      <div className={`menu-toggle ${menuAbierto ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuAbierto ? 'active' : ''}`}>
        <li><NavLink to="/" end onClick={() => setMenuAbierto(false)}>Inicio</NavLink></li>
        <li><NavLink to="/about" onClick={() => setMenuAbierto(false)}>About</NavLink></li>
        <li><NavLink to="/contact" onClick={() => setMenuAbierto(false)}>Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
