import React from 'react'
import Header from '../../Components/Header/Header'
import ContactStyles from './Contact.module.css'

import { AiOutlineHome } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { FaRegEnvelope } from 'react-icons/fa';
import Orange_Button from '../../Components/Orange_Button/Orange_Button';


const Contact = () => {
  return (
    <div>
      <Header pageName={`Contact Us`} />
      <div className={`content-width m-auto py-10 xl:py-28`}>
        <div className='map'>
          <iframe src="https://www.google.com/maps/d/embed?mid=1gaQSzilmEXF7ALoUH7VAifYe9fg&hl=en_US&ehbc=2E312F" height="450" className='w-full'></iframe>
        </div>
        <div className="mt-10 xxl:mt-28 xl:flex flex-wrap justify-between items-start">
          <div className="contact_details">
            <ul>
              <li className='flex items-center gap-8'>
                <div className={`${ContactStyles.icon}`}>
                  <AiOutlineHome />
                </div>
                <div>
                  <div className='font-light'>Binghamton, New York</div>
                  <span>4343 Hinkle Deegan Lake Road</span>
                </div>
              </li>
              <li className='flex items-center gap-8 mt-5'>
                <div className={`${ContactStyles.icon}`}>
                  <BsTelephone />
                </div>
                <div>
                  <div className='font-light'>00 (958) 9865 562</div>
                  <span>Mon to Fri 9am to 6 pm</span>
                </div>
              </li>
              <li className='flex items-center gap-8 mt-5'>
                <div className={`${ContactStyles.icon}`}>
                  <FaRegEnvelope />
                </div>
                <div>
                  <div className='font-light'>support@colorlib.com</div>
                  <span>Send us your query anytime!</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="contact_form mt-5 xxl:mt-0">
            <form action="https://formspree.io/f/myyqbpgz" method='POST'>
              <div className='xl:flex flex-wrap gap-8'>
                <div className='form-left flex flex-col gap-5'>
                  <div>
                    <input type="text" name='username' className='p-4 text-xs w-full xl:w-80' placeholder='Enter your name' required />
                  </div>
                  <div>
                    <input type="email" name="email" className='p-4 text-xs w-full xl:w-80' placeholder='Enter email address' required/>
                  </div>
                  <div>
                    <input type="text" name="subject" className='p-4 text-xs w-full xl:w-80' placeholder='Enter subject' required/>
                  </div>
                </div>
                <div className="form-right">
                  <textarea name="message" placeholder='Enter Message' className='text-xs w-full sm:mt-5 lg:mt-0 xl:w-80 p-4 h-full' cols="30" required></textarea>
                </div>
              </div>
              <div className={`block ml-auto w-fit`}>
                <Orange_Button BtnName={'SEND MESSAGE'} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact