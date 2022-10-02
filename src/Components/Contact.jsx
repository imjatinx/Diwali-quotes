import React from 'react'
import contact from '../Assests/Hero.png'
import { Link } from 'react-router-dom'

function Contact() {

  return (
    <div>
      <h1 className='text-5xl font-bold text-center pb-5'>Contact Us</h1>
      <div className='hero-content'>
        <img className="w-[16rem] sm:w-[25rem] rounded-lg shadow-2xl" src={contact} alt="About us" />
      </div>

      <h1 className='text-center text-xl'>Enter your details</h1>
      <div className='flex justify-center items-center pb-12'>
        <form action="https://formcarry.com/s/JQhEv1Sfh" method="POST" acceptCharset="UTF-8">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <label className="input-group">
              <span>Email</span>
              <input type="text" name='Email-HappyDiwaliSMS' placeholder="info@site.com" className="input input-bordered" />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Suggestions</span>
            </label>
            <textarea className="textarea textarea-primary" name='Desc-HappyDiwaliSMS' placeholder="Enter here..."></textarea>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input type="checkbox" defaultChecked name='Agree-HappyDiwaliSMS' className="checkbox" />
              <span className="label-text">Allow us to send Personalised mail <br /> so that we can know your interest <br /> and provide you the best. <br />Read &nbsp;
                <Link to={'/policy'}>
                  <span className='underline hover:text-primary'>
                    Privacy & Policy
                  </span>
                </Link>
              </span>
            </label>
          </div>
          <input type="hidden" name="_gotcha"></input>
          <button type='submit' className="btn btn-outline btn-primary">Button</button>
        </form>
      </div >
      <div className="divider"></div>
    </div >
  )
}

export default Contact
