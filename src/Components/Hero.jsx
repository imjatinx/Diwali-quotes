import React from 'react'
import hero from '../Assests/Hero.png'

function Hero() {

    const today = new Date().getDate()

    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={hero} className="w-[16rem] sm:w-[25rem] rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-3xl font-bold">Happy Diwali Festival 2022-23</h1>
                    <p className="py-6">Happy Diwali to all of you and your family. May this diwali goddess laxmi will give you wealth and prosperity. This Year Diwali 2022 is on October 24, Monday ( {24-today} days left ) </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
