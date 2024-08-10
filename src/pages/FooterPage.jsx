import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

function FooterPage() {
  return (
    <div className='footer pt-20 pb-5 text-white'>
        <div className="footer-top flex justify-between items-center px-10 pb-10 border-b-[0.1px] border-b-gray-500">
            <div className="footer-top-left flex flex-col ml-32">
                <img src="/assets/logo.png" className='w-[10rem] py-5' alt="" />
                <h4 className='text-gray-600 pb-5'>lorem ipsum dolor sit amet, sectetur adipiscing elit. In nec tortor ut odio vulputate pretium.</h4>
                <div className="social flex gap-10 ml-2">
                    <FontAwesomeIcon className='scale-[200%] hover:text-purple-600 text-gray-400 transition-colors duration-300' icon={faInstagram} />
                    <FontAwesomeIcon className='scale-[200%] hover:text-purple-600 text-gray-400 transition-colors duration-300' icon={faYoutube} />
                </div>
            </div>
            <div className="footer-top-right flex shrink-0 justify-end px-32">
                <div className="ml-40 flex flex-col gap-5">
                    <h4 className='text-[2rem]'>Navigate</h4>
                    <h4 className='text-[1.2rem] hover:text-white hover:scale-105 text-gray-400'>Home</h4>
                    <h4 className='text-[1.2rem] hover:text-white hover:scale-105 text-gray-400'>About</h4>
                    <h4 className='text-[1.2rem] hover:text-white hover:scale-105 text-gray-400'>Contact</h4>
                </div>
                <div className="ml-40 flex flex-col gap-5">
                    <h4 className='text-[2rem]'>Contact Us</h4>
                    <h4 className='text-[1.2rem] hover:text-white hover:scale-105 text-gray-400'>Name</h4>
                    <h4 className='text-[1.2rem] hover:text-white hover:scale-105 text-gray-400'>Phone Number</h4>
                    <h4 className='text-[1.2rem] hover:text-white hover:scale-105 text-gray-400'>Email</h4>
                </div>
            </div>
        </div>
        <div className="footer-bottom px-5 pt-2 flex justify-between">
            <h4>Scroll To Top</h4>
            <h4>www.pccoer.com</h4>
        </div>
    </div>
  )
}

export default FooterPage