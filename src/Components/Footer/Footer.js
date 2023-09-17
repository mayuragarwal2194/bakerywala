import React from 'react';
import FooterStyles from './Footer.module.css'
import Social_buttons from '../Social_Buttons/Social_buttons';

const Footer = () => {
  return (
    <>
      <div className={`${FooterStyles.m7} w-full`}>
        <div className={`${FooterStyles.m7_rows} py-28 m-auto`}>
          <div className={`${FooterStyles.m7r1} text-white flex items-center justify-between`}>
            <div className={FooterStyles.m7r1_c1}>
              <h4 className={`text-lg`}>About Us</h4>
              <p className={`text-sm mt-6`}>
                If you own an Iphone, you’ve probably already worked out how much
                fun it is to use it to watch movies-it has that.
              </p>
            </div>
            <div className={FooterStyles.m7r1_c2}>
              <h4>Newsletter</h4>
              <p className={`text-sm mt-6 mb-4`}>Stay update with our latest</p>
              <input type="text" placeholder="Email Address" />
            </div>
            <div className={FooterStyles.m7r1_c3}>
              <h4 className='mb-5'>Follow Us</h4>
              <p className={`text-sm mb-4`}>Let us be social</p>
              <Social_buttons />
            </div>
          </div>
          <div className="clear" />
          <div className={`${FooterStyles.m7r2} text-white mt-5`}>
            Copyright ©2020 All rights reserved | This template is made with <span className={FooterStyles.heart}>♡</span> by
            <span> Colorlib MAYUR AGARWAL</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer