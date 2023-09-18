import React from 'react';
import './Home.css';

import c1 from '../../Images/c1.jpg';
import c2 from '../../Images/c2.jpg';
import c3 from '../../Images/c3.jpg';
import c4 from '../../Images/c4.jpg';
import b1 from '../../Images/b1.jpg';
import b2 from '../../Images/b2.jpg';
import b3 from '../../Images/b3.jpg';
import user from '../../Images/user.png';
import Navbar from '../../Components/Navbar/Navbar';
import Croissant from '../../Components/Croissant/Croissant';
import Orange_Button from '../../Components/Orange_Button/Orange_Button';

import Play from '../../Components/Play/Play';
import Footer from '../../Components/Footer/Footer';
import Social_buttons from '../../Components/Social_Buttons/Social_buttons';
import Review from '../../Components/Review/Review';

import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="main" id="main">
        <section className='main1-section'>
          <div className="m1">
            <div className="m1-transparent">
              <div className='m1-content m-auto pb-40'>
                <div className={`header flex items-center justify-between px-4 py-5 text-white`}>
                  <Social_buttons />
                  <div className="header-c2 flex items-center justify-center gap-7">
                    <div className="header-no">+953 012 3654 896</div>
                    <div className="header-site">support@colorlib.com</div>
                  </div>
                </div>
                <Navbar />
                <div className="m1-rows home-m1-rows text-center mt-16 text-white">
                  <div className="m1r1">WHENEVER WE BAKE, BAKE WITH OUR HEART</div>
                  <div className="m1r2 m-auto text-7xl py-2 font-bold mt-5 border-y">Love with baking items</div>
                  <div className="m1r3 m-auto mt-5 text-sm">
                    Since Americans in the South began roasting pigs publicly, Barbecues
                    have been a staple of North American living. For many, grilling
                    becomes a routine mealtime activity.
                  </div>
                  <Orange_Button BtnName={`CHECK OUR MENU`} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='croissant-section'>
          <Croissant />
        </section>
        <section className='category-section'>
          <div className="m3 w-full py-28">
            <div className="m3-rows m-auto text-center">
              <div className="m3-head text-4xl font-semibold text-black">Category of available items</div>
              <div className="m3-r1 text-sm mt-4">
                They are grilling celebrities in their own right.
              </div>
              <div className="m3-r2 flex mt-24 justify-between mb-20">
                <div className="category-cards flex flex-col items-center justify-center">
                  <div className="category-card-image">
                    <img className='w-full h-full object-cover rounded-full' src={c1} />
                  </div>
                  <div className="category-card-title text-black font-bold mb-5 text-lg mt-3">Pizza</div>
                  <div className="card-body text-sm">
                    inappropriate behavior is often laughed off as “boys will be.
                  </div>
                </div>
                <div className="category-cards flex flex-col items-center justify-center">
                  <div className="category-card-image">
                    <img className='w-full h-full object-cover rounded-full' src={c2} />
                  </div>
                  <div className="category-card-title text-black font-bold mb-5 text-lg mt-3">Bread</div>
                  <div className="card-body text-sm">
                    inappropriate behavior is often laughed off as “boys will be.
                  </div>
                </div>
                <div className="category-cards flex flex-col items-center justify-center">
                  <div className="category-card-image">
                    <img className='w-full h-full object-cover rounded-full' src={c3} />
                  </div>
                  <div className="category-card-title text-black font-bold mb-5 text-lg mt-3">Burgers</div>
                  <div className="card-body text-sm">
                    inappropriate behavior is often laughed off as “boys will be.
                  </div>
                </div>
                <div className="category-cards flex flex-col items-center justify-center">
                  <div className="category-card-image">
                    <img className='w-full h-full object-cover rounded-full' src={c4} />
                  </div>
                  <div className="category-card-title text-black font-bold mb-5 text-lg mt-3">Chicken</div>
                  <div className="card-body text-sm">
                    inappropriate behavior is often laughed off as “boys will be.
                  </div>
                </div>
              </div>
              <Orange_Button BtnName='View Full Menu' />
            </div>
          </div>
        </section>
        <section className='play-section'>
          <Play />
        </section>
        <section className='review-section'>
          <Review />
        </section>
        <section className='blog-section'>
          <div className="m6 w-100">
            <div className="blog-rows m-auto text-center py-28">
              <div className="blog-head text-4xl font-bold">Latest Posts From Our Blog</div>
              <div className="blog-description m-auto mt-7 text-sm">
                Do you want to share your love of cheese fondue with your children? Or
                did you just find out that one of your fondue party guests doesn’t drink
                alcohol.
              </div>
              <div className="blog-cards flex mt-20">
                <div className="card">
                  <div className="card-image">
                    <img src={b1} className='dish-image' />
                  </div>
                  <div className="blog-user flex items-center justify-between py-2">
                    <div className='flex items-center'>
                      <img src={user} />
                      <span className='text-sm pl-3'>Mark Wiens</span>
                    </div>
                    <div className='blog-posting-info font-light text-sm flex items-center gap-3'>
                      <div>13th Dec</div>
                      <div className='flex items-center gap-1'>
                        <FaRegHeart /> 15
                      </div>
                      <div className='flex items-center gap-1'>
                        <FaRegComment /> 04
                      </div>
                    </div>
                  </div>
                  <div className="card-body text-left">
                    <h5 className="card-title font-semibold mt-8 text-lg">
                      STOCKING YOUR RESTAURANT KITCHEN FINDING RELIABLE SELLERS
                    </h5>
                    <div className="card-description mt-4 text-sm font-light">
                      Saving money – is something we would all like to do. Whether you are
                      struggling to manage day to day or earning a six figure salary,
                      saving is something we all think about.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image">
                    <img src={b2} className='dish-image' />
                  </div>
                  <div className="blog-user flex items-center justify-between py-2">
                    <div className='flex items-center'>
                      <img src={user} />
                      <span className='text-sm pl-3'>Mark Wiens</span>
                    </div>
                    <div className='blog-posting-info font-light text-sm flex items-center gap-3'>
                      <div>13th Dec</div>
                      <div className='flex items-center gap-1'>
                        <FaRegHeart /> 15
                      </div>
                      <div className='flex items-center gap-1'>
                        <FaRegComment /> 04
                      </div>
                    </div>
                  </div>
                  <div className="card-body text-left">
                    <h5 className="card-title font-semibold mt-8 text-lg">
                      Cooking For Special Occasions Cookware In The Brick And Mortr
                    </h5>
                    <div className="card-description mt-4 text-sm font-light">
                      Let’s talk about meat fondue recipes and what you need to know first. Meat fondue also known as oil fondue is a method of cooking all kinds of meats, poultry, and seafood in a pot of heated oil.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image">
                    <img src={b3} className='dish-image' />
                  </div>
                  <div className="blog-user flex items-center justify-between py-2">
                    <div className='flex items-center'>
                      <img src={user} />
                      <span className='text-sm pl-3'>Mark Wiens</span>
                    </div>
                    <div className='blog-posting-info font-light text-sm flex items-center gap-3'>
                      <div>13th Dec</div>
                      <div className='flex items-center gap-1'>
                        <FaRegHeart /> 15
                      </div>
                      <div className='flex items-center gap-1'>
                        <FaRegComment /> 04
                      </div>
                    </div>
                  </div>
                  <div className="card-body text-left">
                    <h5 className="card-title font-semibold mt-8 text-lg">
                      When Your Meal Bites Back Tips For Avoiding Food Poisoning
                    </h5>
                    <div className="card-description mt-4 text-sm font-light">
                      While some people really seem to have a knack for barbequing – always grilling up a perfect meal – for the rest of us, it is something that must be learned, not something that just comes naturally. Believe it or not, there is technique involved.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default Home