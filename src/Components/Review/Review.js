import React from 'react'
import ReviewStyles from './Review.module.css'
import Slider from './Slider/Slider'

const Review = () => {
  return (
    <>
      <div className={`${ReviewStyles.m5} w-full text-white text-center`}>
        <div className={`${ReviewStyles.m5_trans} w-100 py-28`}>
          <div className={`content-width m-auto`}>
            <div className={`text-4xl font-semibold`}>Enjoy our Client’s Review</div>
            <div className={ReviewStyles.m5_r1}>
              Who are in extremely love with eco friendly system.
            </div>
            <Slider />
          </div>
        </div>
      </div>
    </>
  )
}

export default Review