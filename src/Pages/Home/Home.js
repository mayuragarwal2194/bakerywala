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
        <section className='Category-section'>
          <div className="m3 w-full py-28">
            <div className="m3-rows m-auto text-center">
              <div className="m3-head text-4xl font-bold text-black">Category of available items</div>
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
        <section className='Play-section'>
          <Play />
        </section>
        <div className="m5">
          <div className="m5-trans">
            <div className="m5-head">Enjoy our Client’s Review</div>
            <div className="m5-r1">
              Who are in extremely love with eco friendly system.
            </div>
          </div>
        </div>
        <div className="clear" />
        <div className="m6">
          <div className="m6-rows">
            <div className="m6-head">Latest Posts From Our Blog</div>
            <div className="m6-r1">
              Do you want to share your love of cheese fondue with your children? Or
              did you just find out that one of your fondue party guests doesn’t drink
              alcohol.
            </div>
            <div className="m6-r2">
              <div className="m6r2-c1">
                <img src={b1} width={350} height={210} />
                <div className="m6r2-c1r1">
                  <img src={user} width={30} height={30} />
                  <span>Mark Wiens</span>
                </div>
                <div className="m6r2-c1r2">
                  STOCKING YOUR RESTAURANT
                  <br /> KITCHEN FINDING RELIABLE SELLERS
                </div>
                <div className="m6r2-c1r3">
                  Saving money – is something we would all like to do. Whether you are
                  struggling to manage day to day or earning a six figure salary,
                  saving is something we all think about.
                </div>
              </div>
              <div className="m6r2-c2">
                <img src={b2} width={350} height={210} />
                <div className="m6r2-c2r1">
                  <img src={user} width={30} height={30} />
                  <span>Mark Wiens</span>
                </div>
                <div className="m6r2-c2r2">
                  COOKING FOR SPECIAL OCCASIONS
                  <br /> COOKWARE IN THE BRICK AND MORTR
                </div>
                <div className="m6r2-c2r3">
                  Let’s talk about meat fondue recipes and what you need to know
                  first. Meat fondue also known as oil fondue is a method of cooking
                  all kinds of meats, poultry, and seafood in a pot of heated oil.
                </div>
              </div>
              <div className="m6r2-c2">
                <img src={b3} width={350} height={210} />
                <div className="m6r2-c2r1">
                  <img src={user} width={30} height={30} />
                  <span>Mark Wiens</span>
                </div>
                <div className="m6r2-c2r2">
                  WHEN YOUR MEAL BITES BACK TIPS
                  <br /> FOR AVOIDING FOOD POISONING
                </div>
                <div className="m6r2-c2r3">
                  While some people really seem to have a knack for barbequing –
                  always grilling up a perfect meal – for the rest of us, it is
                  something that must be learned, not something that just comes
                  naturally. Believe it or not, there is technique involved.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
        <section className='Footer-Section'>
          <Footer />
        </section>
        <div className="clear" />
      </div>

    </>
  )
}

export default Home