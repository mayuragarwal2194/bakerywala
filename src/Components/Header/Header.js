import React from 'react'
import Navbar from '../Navbar/Navbar'
import Orange_Button from '../../Components/Orange_Button/Orange_Button';
import Social_buttons from '../../Components/Social_Buttons/Social_buttons';
import { FaArrowRight } from 'react-icons/fa';

const Header = ({pageName}) => {
  return (
    <div>
      <section className='main1-section'>
        <div className="m1">
          <div className="m1-transparent">
            <div className='m1-content m-auto pb-12'>
              <div className={`header flex items-center justify-between px-4 py-5 text-white`}>
                <Social_buttons />
                <div className="header-c2 flex items-center justify-center gap-7">
                  <div className="header-no">+953 012 3654 896</div>
                  <div className="header-site">support@colorlib.com</div>
                </div>
              </div>
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