import React from 'react'
import CategoryStyles from './Category.module.css'
import Orange_Button from '../../Components/Orange_Button/Orange_Button';

import c1 from '../../Images/c1.jpg';
import c2 from '../../Images/c2.jpg';
import c3 from '../../Images/c3.jpg';
import c4 from '../../Images/c4.jpg';

const Category = () => {
  return (
    <>
      <div className={`${CategoryStyles.m3} w-full py-28`}>
        <div className={`${CategoryStyles.m3_rows} m-auto text-center`}>
          <div className={`${CategoryStyles.m3_head} text-4xl font-semibold text-black`}>Category of available items</div>
          <div className={`${CategoryStyles.m3_r1} text-sm mt-4`}>
            They are grilling celebrities in their own right.
          </div>
          <div className="m3-r2 flex sm:items-center sm:flex-col lg:flex-row sm:gap-10 lg:gap-0 mt-24 justify-between mb-20">
            <div className={`${CategoryStyles.category_cards} flex flex-col items-center justify-center`}>
              <div className={`${CategoryStyles.category_card_image}`}>
                <img className='w-full h-full object-cover rounded-full' src={c1} />
              </div>
              <div className={`${CategoryStyles.category_card_title} text-black font-semibold mb-5 text-lg mt-3`}>Pizza</div>
              <div className="card-body font-light text-sm">
                inappropriate behavior is often laughed off as “boys will be.
              </div>
            </div>
            <div className={`${CategoryStyles.category_cards} flex flex-col items-center justify-center`}>
              <div className={`${CategoryStyles.category_card_image}`}>
                <img className='w-full h-full object-cover rounded-full' src={c2} />
              </div>
              <div className={`${CategoryStyles.category_card_title} text-black font-semibold mb-5 text-lg mt-3`}>Bread</div>
              <div className="card-body font-light text-sm">
                inappropriate behavior is often laughed off as “boys will be.
              </div>
            </div>
            <div className={`${CategoryStyles.category_cards} flex flex-col items-center justify-center`}>
              <div className={`${CategoryStyles.category_card_image}`}>
                <img className='w-full h-full object-cover rounded-full' src={c3} />
              </div>
              <div className={`${CategoryStyles.category_card_title} text-black font-semibold mb-5 text-lg mt-3`}>Burgers</div>
              <div className="card-body font-light text-sm">
                inappropriate behavior is often laughed off as “boys will be.
              </div>
            </div>
            <div className={`${CategoryStyles.category_cards} flex flex-col items-center justify-center`}>
              <div className={`${CategoryStyles.category_card_image}`}>
                <img className='w-full h-full object-cover rounded-full' src={c4} />
              </div>
              <div className={`${CategoryStyles.category_card_title} text-black font-semibold mb-5 text-lg mt-3`}>Chicken</div>
              <div className="card-body font-light text-sm">
                inappropriate behavior is often laughed off as “boys will be.
              </div>
            </div>
          </div>
          <Orange_Button BtnName='View Full Menu' />
        </div>
      </div>
    </>
  )
}

export default Category