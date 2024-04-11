import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import service from "../assets/service.jpg"
import Footer from '../components/Footer'
import Trip from '../components/Trip'

const Service = () => {
  return (
    <div>
      <NavBar />
      
       <Hero
       cName="hero-mid"
       heroImg={service}
       title="Service"
       btnclass="hide"
       />
       <Trip />
       <Footer />
    </div>
  )
}

export default Service