import React from 'react'
import { FaFacebookF, FaTwitter, FaWhatsapp, FaQuora } from "react-icons/fa"
import { BsThreeDots } from "react-icons/bs"

export default function Share() {


    return (
        <div>
            <ul className='bg-white z-50 h-max fixed grid grid-flow-row grid-cols-5 place-content-center w-full bottom-0 sm:top-1/2 sm:-translate-y-1/2 sm:w-12 sm:flex sm:flex-col md:top-1/2 md:-translate-y-1/2 md:w-12 lg:top-1/2 lg:-translate-y-1/2 lg:w-12'>
                <a href={`http://www.facebook.com/share.php?u=www.happydiwalisms.in&title=Wish you a very a happy diwali from happy diwali sms team`} target='_blank'>
                    <li className='bg-[#3b5998]'>
                        <div className='py-4 px-3 flex justify-center'>
                            <FaFacebookF className='text-white text-xl' />
                        </div>
                    </li>
                </a>
                <a href={`https://twitter.com/intent/tweet?url=www.happydiwalisms.in&text=This october we wish you very very happy diwali from happy diwali sms team&hashtags=happyDiwali&hashtags=OctoberDiwali&hashtags=happyDeepawali&hashtags=diwali&hashtags=deepawali`} target="_blank">
                    <li className='bg-[#55acee]'>
                        <div className='py-4 px-3 flex justify-center'>
                            <FaTwitter className='text-white text-xl' />
                        </div>
                    </li>
                </a>
                <a href={`https://api.whatsapp.com/send?text='Wish you a very very happy diwali''www.happydiwalisms.in'`} target='_blank'>
                    <li className='bg-[#4dc247]'>
                        <div className='py-4 px-3 flex justify-center'>
                            <FaWhatsapp className='text-white text-xl' />
                        </div>
                    </li>
                </a>
                <a href="">
                    <li className='bg-[#a82400]'>
                        <div className='py-4 px-3 flex justify-center'>
                            <FaQuora className='text-white text-xl' />
                        </div>
                    </li>
                </a>
                <a href="">
                    <li className='bg-white'>
                        <div className='py-4 px-3 flex justify-center'>
                            <BsThreeDots className='text-black text-xl' />
                        </div>
                    </li>
                </a>
            </ul>
        </div>
    )
}
