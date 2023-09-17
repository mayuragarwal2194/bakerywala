import React from 'react';
import CroissantStyles from './Croissant.module.css'
import aboutImg from '../../Images/about-img.png';
import Orange_Button from '../Orange_Button/Orange_Button';

const Croissant = () => {
  return (
    <>
      <div className={`${CroissantStyles.m2} w-full flex relative py-28`}>
        <div className={CroissantStyles.m2c1}>
          <div className={CroissantStyles.m2c1_r1}>BRAND NEW APP TO BLOW YOUR MIND</div>
          <div className={`${CroissantStyles.m2c1_r2} font-bold mt-5`}>
            We’ve baked every item from the core of our
            <br /> heart to serve you
          </div>
          <div className={`mt-5 text-sm`}>
            We are here to listen from you deliver exellence by any means
          </div>
          <div className={`${CroissantStyles.m2c1_r4} mt-5`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
          </div>
          <Orange_Button BtnName={`Get Started Now`} />
        </div>
        <div className={`${CroissantStyles.m2c2} absolute right-0`}>
          <img src={aboutImg} width={600} height={340} />
        </div>
      </div>
    </>
  )
}

export default Croissant