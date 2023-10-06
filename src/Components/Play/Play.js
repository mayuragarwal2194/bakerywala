import React from 'react';
import playBtn from '../../Images/play-btn.png';
import PlayStyles from './Play.module.css';
import Black_Button from '../Black_Button/Black_Button';

const Play = () => {
  return (
    <>
      <div className={`w-full`}>
        <div className={`content-width m-auto py-28 sm:block lg:flex px-4 items-center justify-between`}>
          <div className={PlayStyles.m4_left}>
            <div className={`${PlayStyles.m4c1_r1} text-xs`}>BRAND NEW APP TO BLOW YOUR MIND</div>
            <div className={`${PlayStyles.m4c1_r2} text-4xl font-bold mt-5`}>We’ve made a life that will change you</div>
            <div className={`m4c1-r3 mt-5 font-bold text-sm`}>
              We are here to listen from you deliver exellence
            </div>
            <div className={`${PlayStyles.m4c1_r4} mt-5 text-sm`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmo
              d tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <Black_Button BtnName={'Get Started Now'}/>
          </div>
          <div className={`${PlayStyles.play_image} flex items-center justify-center mt-8`}>
            <img src={playBtn} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Play