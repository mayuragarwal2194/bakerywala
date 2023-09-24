import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import './Slider.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { FaStar } from "react-icons/fa";

import clientImage from '../../../Images/r1.png'

const Slider = () => {
  const options = {
    responsiveClass: true,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  };
  return (
    <div className='bakery-slider mt-10'>
      <OwlCarousel className='owl-theme' loop margin={10} {...options}>
        <div className='item text-left'>
          <img src={clientImage} alt="client1-image" />
          <div className="client_name flex items-center mt-5">
            <h2 className='text-lg font-semibold'>Fannie Rowe</h2>
            <div className="rating flex ml-8">
              <span className='orangeStar'><FaStar /></span>
              <span className='orangeStar'><FaStar /></span>
              <span className='orangeStar'><FaStar /></span>
              <span><FaStar /></span>
              <span><FaStar /></span>
            </div>
          </div>
          <p className='mt-5 font-light text-sm'>
            Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
          </p>
        </div>
        <div className='item text-left'>
          <img src={clientImage} alt="client1-image" />
          <div className="client_name flex items-center mt-5">
            <h2 className='text-lg font-semibold'>Hulda Sutton</h2>
            <div className="rating flex ml-8">
              <span className='orangeStar'><FaStar /></span>
              <span className='orangeStar'><FaStar /></span>
              <span className='orangeStar'><FaStar /></span>
              <span><FaStar /></span>
              <span><FaStar /></span>
            </div>
          </div>
          <p className='mt-5 font-light text-sm'>
            Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
          </p>
        </div>
        <div className='item text-left'>
          <img src={clientImage} alt="client1-image" />
          <div className="client_name flex items-center mt-5">
            <h2 className='text-lg font-semibold'>Fannie Rowe</h2>
            <div className="rating flex ml-8">
              <span className='orangeStar'><FaStar /></span>
              <span className='orangeStar'><FaStar /></span>
              <span className='orangeStar'><FaStar /></span>
              <span><FaStar /></span>
              <span><FaStar /></span>
            </div>
          </div>
          <p className='mt-5 font-light text-sm'>
            Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
          </p>
        </div>
        <div className='item text-left'>
          <img src={clientImage} alt="client1-image" />
          <div className="client_name flex items-center mt-5">
            <h2 className='text-lg font-semibold'>Hulda Sutton</h2>
            <div className="rating flex ml-8">
              <span className='orangeStar'><FaStar /></span>
              <span className='orangeStar'><FaStar /></span>
              <span className='orangeStar'><FaStar /></span>
              <span><FaStar /></span>
              <span><FaStar /></span>
            </div>
          </div>
          <p className='mt-5 font-light text-sm'>
            Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
          </p>
        </div>
        <div className='item text-left'>
          <img src={clientImage} alt="client1-image" />
          <div className="client_name flex items-center mt-5">
            <h2 className='text-lg font-semibold'>Fannie Rowe</h2>
            <div className="rating flex ml-8">
              <span className='orangeStar'><FaStar /></span>
              <span className='orangeStar'><FaStar /></span>
              <span className='orangeStar'><FaStar /></span>
              <span><FaStar /></span>
              <span><FaStar /></span>
            </div>
          </div>
          <p className='mt-5 font-light text-sm'>
            Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
          </p>
        </div>
        <div className='item text-left'>
          <img src={clientImage} alt="client1-image" />
          <div className="client_name flex items-center mt-5">
            <h2 className='text-lg font-semibold'>Hulda Sutton</h2>
            <div className="rating flex ml-8">
              <span className='orangeStar'><FaStar /></span>
              <span className='orangeStar'><FaStar /></span>
              <span className='orangeStar'><FaStar /></span>
              <span><FaStar /></span>
              <span><FaStar /></span>
            </div>
          </div>
          <p className='mt-5 font-light text-sm'>
            Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
          </p>
        </div>
        <div className='item text-left'>
          <img src={clientImage} alt="client1-image" />
          <div className="client_name flex items-center mt-5">
            <h2 className='text-lg font-semibold'>Fannie Rowe</h2>
            <div className="rating flex ml-8">
              <span className='orangeStar'><FaStar /></span>
              <span className='orangeStar'><FaStar /></span>
              <span className='orangeStar'><FaStar /></span>
              <span><FaStar /></span>
              <span><FaStar /></span>
            </div>
          </div>
          <p className='mt-5 font-light text-sm'>
            Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
          </p>
        </div>
        <div className='item text-left'>
          <img src={clientImage} alt="client1-image" />
          <div className="client_name flex items-center mt-5">
            <h2 className='text-lg font-semibold'>Hulda Sutton</h2>
            <div className="rating flex ml-8">
              <span className='orangeStar'><FaStar /></span>
              <span className='orangeStar'><FaStar /></span>
              <span className='orangeStar'><FaStar /></span>
              <span><FaStar /></span>
              <span><FaStar /></span>
            </div>
          </div>
          <p className='mt-5 font-light text-sm'>
            Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
          </p>
        </div>
      </OwlCarousel>
    </div>
  )
}

export default Slider