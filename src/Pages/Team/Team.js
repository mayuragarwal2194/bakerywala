import React from 'react'
import TeamStyles from './Team.module.css'

import Header from '../../Components/Header/Header'
import Category from '../../Components/Category/Category'
import Croissant from '../../Components/Croissant/Croissant'

import chef1_Image from '../../Images/t1.jpg';
import chef2_Image from '../../Images/t2.jpg';
import chef3_Image from '../../Images/t3.jpg';
import chef4_Image from '../../Images/t4.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const chefData = [
  {
    chefImage: chef1_Image,
    chefName: "Ethel Davis",
    chefAbout: "Head chef (cutting)"
  },
  {
    chefImage: chef2_Image,
    chefName: "Rodney Cooper",
    chefAbout: "Head chef (Herb specialist)"
  },
  {
    chefImage: chef3_Image,
    chefName: "Dora Walker",
    chefAbout: "Senior Chef (Curry)"
  },
  {
    chefImage: chef4_Image,
    chefName: "Lena Keller",
    chefAbout: "Head Chef (Steak)"
  },
]

const Team = () => {
  return (
    <div>
      <Header pageName={`Chef Team`} />
      <section className='Chef-Section'>
        <div className={`${TeamStyles.chef_rows} m-auto text-center py-28`}>
          <div>
            <div className="blog-head text-4xl font-semibold">
              Meet Our Qualified Chefs
            </div>
            <div className="blog-description m-auto mt-7 text-sm font-light">
              Who are in extremely love with eco friendly system.
            </div>
          </div>
          <div className='flex justify-between mt-24'>
            {chefData.map((item, index) => {
              return (
                <div key={index} className={`${TeamStyles.chef_cards} flex flex-col items-center`}>
                  <div className={TeamStyles.card_image}>
                    <img src={item.chefImage} alt="" />
                    <div className={`${TeamStyles.hoverSection} flex items-center justify-center gap-5`}>
                      <a href="#">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                      <a href="#">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                      <a href="#">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>
                    </div>
                  </div>
                  <div className="card_body mt-7">
                    <div className="card_title text-lg font-semibold">
                      {item.chefName}
                    </div>
                    <div className={`${TeamStyles.card_description} text-sm font-light`}>
                      {item.chefAbout}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <Category />
      <Croissant />
    </div>
  )
}

export default Team