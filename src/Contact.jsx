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
      <section className="about-us">
        <div className="row">
          <div className="about-col">
            <h4>Enter your contact info and we will get back to as soon as possible!</h4>
            <form>
              <input
                type="text"
                placeholder="First name *"
                onChange={(event) => {
                  setForm({ ...form, firstName: event.target.value })
                }}
              />
              <input
                type="text"
                placeholder="Last name *"
                onChange={(event) => {
                  setForm({ ...form, lastName: event.target.value })
                }}
              />
              <input
                type="text"
                placeholder="Email *"
                onChange={(event) => {
                  setForm({ ...form, email: event.target.value })
                }}
              />
              <input
                type="text"
                placeholder="Phone number *"
                onChange={(event) => {
                  setForm({ ...form, phoneNumber: event.target.value })
                }}
              />
              <textarea
                type="text"
                placeholder="Message *"
                onChange={(event) => {
                  setForm({ ...form, message: event.target.value })
                }}
                rows="8"
                cols="100"
              />
              <button type="submit">Submit</button>
            </form>
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

Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quis velit et blanditiis, sapiente nostrum repellendus mollitia numquam, facere facilis dolorum. Aspernatur tenetur illum labore nulla nobis quasi similique architecto!
