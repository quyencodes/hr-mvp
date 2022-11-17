import React, { useState, useEffect } from 'react'
import banner1 from './assets/1.mtfuji.png'
import logo from './assets/2.logo.png'
import amsterdam from './assets/3.amsterdam.jpg'
import japan from './assets/4.japan.jpg'
import sanfran from './assets/5.sanfran.jpg'
import kbbq from './assets/6.korean-bbq.jpg'
import './styles/main.css'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

export default function Contact() {
  const [menu, setMenu] = useState(true)
  const navLinks = document.getElementById('nav-links')

  const menuStyle = {
    right: menu ? '-200px' : '0px',
  }

  const showMenu = () => {
    setMenu(!menu)
  }

  return (
    <main className="container">
      <section className="sub-header">
        <Navbar />
        <div className="text-box2">
          <h1>Contact</h1>
          <p>Making the greatest coffee ever is an iterative process</p>
        </div>
        {/* <img className="banner-image-1" src={banner1} alt="mtfuji" /> */}
      </section>
      <section className="about-us">
        <div className="row">
          <div className="about-col">
            <h1>We are the world's largest university</h1>
            <p>
              Sa sdj ksa nkdja s asj asdn bksa bdkjsa sadbs ada askd b sakbdsa dsa sdkasd sdaj knd
              sa das dsa dkas dksa dsad askd as
            </p>
            <a href="" className="hero-btn red-btn">
              EXPLORE NOW
            </a>
          </div>
          <div className="about-col">
            <img src={kbbq}></img>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
