import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import banner1 from './assets/1.mtfuji.png'
import logo from './assets/2.logo.png'
import amsterdam from './assets/3.amsterdam.jpg'
import japan from './assets/4.japan.jpg'
import sanfran from './assets/5.sanfran.jpg'
import coffeeshop from './assets/15.coffee-shop.jpg'
import './styles/main.css'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

export default function About() {
  const [menu, setMenu] = useState(true)

  const menuStyle = {
    right: menu ? '-200px' : '0px',
  }

  const showMenu = () => {
    setMenu(!menu)
  }

  useEffect(() => {}, [menu])

  return (
    <main className="container">
      <section className="sub-header">
        <Navbar />
        <div className="text-box2">
          <h1>About Us</h1>
          <p>The story behind the coffee</p>
        </div>
        {/* <img className="banner-image-1" src={banner1} alt="mtfuji" /> */}
      </section>
      <section className="about-us">
        <div className="row">
          <div className="about-col">
            <h1>We make good coffee.</h1>
            <p>
              Established in 1998, Q has made coffee since a young age. He&#39;s always wanted to
              make a coffee shop and make it the best it can be. After graduating from Coffee
              Reactor&#39;s advanced coffee 12-week immersive, he and his team has what it takes to
              make the best coffee ever.
            </p>
            <Link className="hero-btn red-btn" to="/">
              EXPLORE NOW
            </Link>
          </div>
          <div className="about-col">
            <img src={coffeeshop} alt="coffeeshop"></img>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
