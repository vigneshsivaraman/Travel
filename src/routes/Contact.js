import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import contact from "../assets/contact.jpg"
import Footer from '../components/Footer'
import ContactFrom from '../components/ContactFrom'

const Contact = () => {
  return (
    <div>
      <NavBar />
      <Hero
      cName="hero-mid"
      heroImg={contact}
      title="Contact"
      btnclass="hide"
       />
       <ContactFrom />
       <Footer />
    </div>
  )
}

export default Contact