import React from 'react'
import logo from '../Assests/Logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="md:navbar-start lg:navbar-start xl:navbar-start sm:navbar-start w-28">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 space-y-5 shadow shadow-white bg-base-100 rounded-box w-52">
              <Link to={'/'}>
                <li>Home</li>
              </Link>
              <Link to={'/about-us'}>
                <li>About Us</li>
              </Link>
              <Link to={'/contact-us'}>
                <li>Contact Us</li>
              </Link>
              <Link to={'/policy'}>
                <li>Privacy Policy</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to={'/'}>
            <img src={logo} alt="logo" width={150} />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
