import React from 'react'
import Tilt from 'react-tilt'
import hero from '../Assests/Hero.png'


function Hero() {

    const today = new Date().getDate();

    return (
        <>
            <div className="hero bg-slate-600 text-white py-10">
                <div className="hero-content flex-col lg:flex-row">
                    <Tilt className="Tilt ml-0 sm:ml-16 cursor-move select-none transition duration-100 ease" options={{ speed: 300, scale: 1 }}  >
                        <div className="Tilt-inner">
                            <img src={hero} className="w-[16rem] sm:w-[25rem] rounded-lg shadow-2xl" alt="Happy Diwali Deepawali SMS Shayari" />
                        </div>
                    </Tilt>
                    <div>
                        <h1 className="text-3xl font-bold">Happy Diwali Festival 2022-23</h1>
                        <p className="py-6">Happy Diwali to all of you and your family. May this diwali goddess laxmi will give you wealth and prosperity. This Year Diwali 2022 is on October 24, Monday ( {24 - today} days left ). </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
