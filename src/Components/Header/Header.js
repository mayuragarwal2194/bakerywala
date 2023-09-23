import React from 'react'
import Navbar from '../Navbar/Navbar'
import Orange_Button from '../../Components/Orange_Button/Orange_Button';
import Social_buttons from '../../Components/Social_Buttons/Social_buttons';
import { FaArrowRight } from 'react-icons/fa';
import Header_Top from './Header_Top/Header_Top';

const Header = ({pageName}) => {
  return (
    <div>
      <section className='main1-section'>
        <div className="m1">
          <div className="m1-transparent">
            <div className='m1-content m-auto pb-12'>
              <Header_Top />
              <Navbar />
              <div className="m1-rows home-m1-rows text-center mt-16 text-white">
                <div className="m1r2 m-auto text-5xl py-2 font-semibold mt-5">
                  {pageName}
                </div>
                <div className="m1r3 m-auto font-light mt-5 text-sm flex items-center justify-center gap-3">
                  Home <FaArrowRight /> {pageName}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Header