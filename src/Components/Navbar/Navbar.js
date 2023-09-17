import React from 'react';
import navStyles from './Navbar.module.css'
import logoImg from '../../Images/logo.png';
import About from '../../Pages/AboutUs/About';

const Navbar = () => {
  return (
    <>
      <div className={`${navStyles.nevbar} bg-white m-auto flex items-center justify-between py-3 px-5`} id="navbar">
        <div className={navStyles.logo}>
          <img src={logoImg} width={126} height={60} />
        </div>
        <ul className='font-semibold flex'>
          <li className='ps-5 cursor-pointer'>HOME</li>
          <li className='ps-5 cursor-pointer'>ABOUT</li>
          <li className='ps-5 cursor-pointer'>MENU</li>
          <li className='ps-5 cursor-pointer'>TEAM</li>
          <li className='ps-5 cursor-pointer'>
            <select>
              <option value="">BLOG</option>
            </select>
          </li>
          <li className='ps-5 cursor-pointer'>ELEMENTS</li>
          <li className='ps-5 cursor-pointer'>CONTACT</li>
        </ul>
      </div>
    </>
  )
}

export default Navbar