import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons'

function FooterPage() {
    const scrollToSection = (selector) => {
        const element = document.querySelector(selector);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <div className='footer pt-20 w-screen pb-5 text-white'>
        <div className="footer-top flex justify-between items-center sm:px-10 sm:pb-10 sm:border-b-[0.1px] sm:border-b-gray-500">
            <div className="footer-top-left flex flex-col -ml-20 lg:ml-32">
                <img src="/assets/logo.png" className='w-[10rem] sm:py-5' alt="" />
                <h4 className='text-gray-400 hidden lg:block pb-5'><span className='text-white'>Location</span>: Pimpri Chinchwad College of Engineering and Research Pune, Plot No. B, Sector no. 110, Gate no.1, Laxminagar, Ravet, Haveli, Pune - 412101.</h4>
                <div className="social flex gap-10 ml-10 pb-10 sm:ml-2">
                    <a href='https://www.instagram.com/urc.pccoer?igsh=MTQ2eTg0dWUyYW1sOA==' target='_blank'><FontAwesomeIcon className='scale-[200%] hover:text-purple-600 text-gray-400 transition-colors duration-300' icon={faInstagram} /></a>
                    <a href='https://youtube.com/@ultimateroboticschampionship?feature=shared' target='_blank'><FontAwesomeIcon className='scale-[200%] hover:text-purple-600 text-gray-400 transition-colors duration-300' icon={faYoutube} /></a>
                    <a href="https://www.google.com/maps/place/Pimpri+Chinchwad+College+Of+Engineering+%26+Research,+Ravet,+Pimpri-Chinchwad,+Maharashtra+412101/@18.6514033,73.7453516,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2ba0236e62d6d:0xaf82683765815de9!8m2!3d18.6510284!4d73.7452945!16s%2Fg%2F11qs96sn5y?entry=ttu" target='_blank'><FontAwesomeIcon className='scale-[200%] hover:text-purple-600 text-gray-400 transition-colors duration-300' icon={faMapLocationDot} /></a>
                </div>
            </div>
            <div className="footer-top-right flex shrink-0 justify-end sm:px-32">
                <div className="hidden md:flex lg:ml-40 flex-col gap-5">
                    <h4 className='text-[2rem]'>Navigate</h4>
                    <h4 onClick={() => scrollToSection(".landing-page-container")} className='text-[1.2rem] hover:text-white hover:scale-105 text-gray-400'>Home</h4>
                    <h4 onClick={() => scrollToSection(".register-page")} className='text-[1.2rem] hover:text-white hover:scale-105 text-gray-400'>FAQs</h4>
                    <h4 onClick={() => scrollToSection(".footer")} className='text-[1.2rem] hover:text-white hover:scale-105 text-gray-400'>Contact</h4>
                </div>
                <div className="contact-us sm:ml-20 lg:ml-40 flex flex-col gap-5">
                    <h4 className='text-[2rem]'>Contact Us</h4>
                    <h4 className='text-[1.2rem] hover:text-white hover:scale-105 text-gray-400'>98609 22884</h4>
                    <h4 className='text-[1.2rem] hover:text-white hover:scale-105 text-gray-400'>93258 23736</h4>
                    <h4 className='text-[1.2rem] hover:text-white hover:scale-105 text-gray-400'>urcxpccoer@pccoer.in</h4>
                </div>
            </div>
        </div>
        <div className="footer-bottom hidden sm:flex px-5 pt-2 justify-between">
            <h4 onClick={() => scrollToSection(".landing-page-container")}>Scroll To Top</h4>
            <h4>www.pccoer.com</h4>
        </div>
    </div>
    
  )
}

export default FooterPage