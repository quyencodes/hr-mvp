import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import banner1 from './assets/1.mtfuji.png'
import logo from './assets/2.logo.png'
import amsterdam from './assets/3.amsterdam.jpg'
import japan from './assets/4.japan.jpg'
import sanfran from './assets/5.sanfran.jpg'
import ontario from './assets/5.ontario.jpg'
import kbbq from './assets/6.korean-bbq.jpg'
import './styles/main.css'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Coffee from './components/Coffees'
import review1 from './assets/13.review1.jpg'
import review2 from './assets/14.review2.jpg'

export default function App() {
  return (
    <main className="container">
      <section className="header">
        <Navbar />
        <div className="text-box">
          <h1>The best coffee in the whold wide world</h1>
          <p>The moment you have been waiting for is finally here</p>
          <Link className="hero-btn" to="/about">
            Visit us to know more
          </Link>
        </div>
        {/* <img className="banner-image-1" src={banner1} alt="mtfuji" /> */}
      </section>
      <Coffee />
      {/* <section className="course">
        <h1>Coffees We Offer</h1>
        <p>Deciding what coffee to drink has never been easier</p>
        <div className="row">
          <div className="course-col">
            <h3>Americano</h3>
            <p>
              A Café Americano, or what we just call an Americano, combines freshly pulled shots of
              espresso with hot water to achieve the size of a standard cup of brewed coffee.
            </p>
          </div>
          <div className="course-col">
            <h3>Espresso</h3>
            <p>
              Espresso is a coffee-brewing method of Italian origin, in which a small amount of
              nearly boiling water is forced under 9–10 bars of pressure through finely-ground
              coffee beans. Espresso can be made with a wide variety of coffee beans and roast
              degrees.
            </p>
          </div>
          <div className="course-col">
            <h3>Cold Brew</h3>
            <p>
              Cold brew is not the same thing as iced coffee, which is hot-brewed and then chilled.
              Instead, it's made by steeping coarse-ground coffee beans in room-temperature water
              for 10 to 20 hours.
            </p>
          </div>
        </div>
        <p>Try all 3 drinks for the price of 3 no discount</p>
      </section> */}
      <section className="campus">
        <h1>Our Locations</h1>
        <p>
          Very cool places. We are international. Same recipe across the world made by the finest
          coffee makers in the world.
        </p>
        <div className="row">
          <div className="campus-col">
            <img className="campus-photos" src={amsterdam} alt="yuh"></img>
            <div className="layer">
              <h3>AMSTERDAM</h3>
            </div>
          </div>
          <div className="campus-col">
            <img className="campus-photos" src={japan} alt="yuh"></img>
            <div className="layer">
              <h3>TOKYO</h3>
            </div>
          </div>
          <div className="campus-col">
            <img className="campus-photos" src={ontario} alt="yuh"></img>
            <div className="layer">
              <h3>TORONTO</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h1>Customer Reviews</h1>
        <p>
          We've sourced from a million of reviews and have listed the most relevant and upvoted.
          These are unbiased and objective fr.
        </p>
        <div className="row">
          <div className="testimonial-col">
            <img src={review1} alt="a11y-placeholder" />
            <div>
              Absolutely love the coffee here. I don't drink much coffee but I decided to give Q's
              coffee a visit. Was glad I did. I tried the house special, Q recommended I try all 3
              drinks and see the taste difference. Now I'm an Americano lover.
              <h3>User 1</h3>
            </div>
          </div>
          <div className="testimonial-col">
            <img src={review2} alt="a11y-placeholder" />
            <div>
              Great coffee. Great place to study and hang out with friends and family. I'm an active
              coffee connoisseur and the cold brew was refreshing. After talking to Q, the owner, I
              was happy to find out that they grow their own beans. Crazy.
              <h3>User 2</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="cta">
        <h1>Contact us if you have questions</h1>
        <Link className="hero-btn" to="/contact">
          CONTACT US
        </Link>
      </section>
      <Footer />
    </main>
  )
}
