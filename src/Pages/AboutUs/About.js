import React from 'react'
import Header from '../../Components/Header/Header'
import Croissant from '../../Components/Croissant/Croissant'
import Review from '../../Components/Review/Review'
import Play from '../../Components/Play/Play'
import Footer from '../../Components/Footer/Footer'

const About = () => {
  return (
    <> 
      <Header pageName={'About Us'}/>
      <Croissant />
      <Review />
      <Play />
    </>
  )
}

export default About