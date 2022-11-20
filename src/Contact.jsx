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
import coffeeshop from './assets/15.coffee-shop.jpg'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialState)

  const submitHandler = () => {
    event.preventDefault()
    console.log('this is what the form data looks like', form)
    setForm(initialState)
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
      <section className="contact-us">
        <div className="row">
          <div className="contact-col">
            <form>
              <input
                type="text"
                placeholder="First name *"
                onChange={(event) => {
                  setForm({ ...form, firstName: event.target.value })
                }}
                required
              />
              <input
                type="text"
                placeholder="Last name *"
                onChange={(event) => {
                  setForm({ ...form, lastName: event.target.value })
                }}
                required
              />
              <input
                type="text"
                placeholder="Email *"
                onChange={(event) => {
                  setForm({ ...form, email: event.target.value })
                }}
                required
              />
              <input
                type="text"
                placeholder="Phone number *"
                onChange={(event) => {
                  setForm({ ...form, phoneNumber: event.target.value })
                }}
                required
              />
              <textarea
                type="text"
                placeholder="Message *"
                onChange={(event) => {
                  setForm({ ...form, message: event.target.value })
                }}
                rows="8"
                required
              />
              <button type="submit" className="hero-btn red-btn">
                Send Message
              </button>
            </form>
          </div>
          <div className="location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8535.406981959057!2d-122.40257292495933!3d37.78741832796654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858085bdb9cd35%3A0xbdb5525f0a6d91a6!2sHack%20Reactor!5e0!3m2!1sen!2sus!4v1668924437958!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: '0' }}
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="myFrame"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
