import React from 'react'
import { Link } from 'react-router-dom'
import About_us from '../Assests/Hero.png'

function About() {
  return (

    <>
      <div>
        <h1 className='text-5xl font-bold text-center pb-5'>About Happy Diwali SMS</h1>
        <div className='hero-content'>
          <img className="w-[16rem] sm:w-[25rem] rounded-lg shadow-2xl" src={About_us} alt="About us" />
        </div>
        <p className='p-5 text-justify'>Welcome to Nitaj Tales, your number one source for all types of quotes and shayari. We're dedicated to giving you the very best of quality diwali, holi and other indian festival stuffs, with a focus on sincerity, Unique and short. Founded in 2019 by Jatin G., Nitaj Tales is a subsidiary of our company Nitaj Enterprises has come a long way from its beginnings in Social media. When Jatin G. first started out, his passion for Writing poetry drove them to spent more time in writing so that Nitaj Tales can offer you best services. We now serve customers all over country, and are thrilled that we're able to turn our passion into our own website.we hope you enjoy our products as much as we enjoy offering them to you. Finally, this is our complete about us page about details are showing what is the motive to create Nitaj Enterprises. If you have any questions or comments, please don't hesitate to <Link to={'/contact-us'}>contact us</Link>
          <br />
          <br />
          Sincerely, Jatin G. Have a nice day !
        </p>
      </div>
    </>

  )
}

export default About
