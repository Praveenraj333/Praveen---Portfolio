import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">Praveen - Portfolio</div>

      {/* Hamburger for mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(true)}>
        ☰
      </div>

      {/* Desktop nav */}
      <nav className="nav-desktop">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>Home</NavLink>
        <NavLink to="/skills" className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>Skills</NavLink>
        <NavLink to="/certificate" className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>Certificate</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>Contact</NavLink>
      </nav>

      {/* Mobile Slide Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <span className="close" onClick={() => setMenuOpen(false)}>✕</span>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/skills" onClick={() => setMenuOpen(false)}>Skills</NavLink>
        <NavLink to="/certificate" onClick={() => setMenuOpen(false)}>Certificate</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
      </div>
    </header>
  );
}

export default Navbar;
