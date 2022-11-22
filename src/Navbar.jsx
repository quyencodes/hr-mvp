import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/2.logo.png'
import Footer from './Footer.jsx'

export default function Navbar() {
  const [menu, setMenu] = useState(true)

  const menuStyle = {
    right: menu ? '-200px' : '0px',
  }

  const showMenu = () => {
    setMenu(!menu)
  }

  return (
    <nav>
      <a href="/">
        <img className="logo-image" src={logo} alt="logo" />
      </a>
      <div className="nav-links" id="navLinks" style={menuStyle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-x"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={showMenu}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
        <ul>
          <li>
            <Link className="nav-link" to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              ABOUT
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/layout">
              LAYOUT
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-menu-2"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        onClick={showMenu}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
      </svg>
    </nav>
  )
}
