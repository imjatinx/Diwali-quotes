import React from 'react'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Policy from './Components/Policy'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about-us' element={<About/>} />
        <Route exact path='/contact-us' element={<Contact />} />
        <Route exact path='/policy' element={<Policy />} />
      </Routes>
      <Footer />
    </>
  )
}
