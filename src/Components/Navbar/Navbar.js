import React from 'react';
import navStyles from './Navbar.module.css'
import logoImg from '../../Images/logo.png';
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className={`${navStyles.nevbar} bg-white m-auto flex items-center justify-between py-3 px-5`} id="navbar">
        <div className={navStyles.logo}>
          <img src={logoImg} width={126} height={60} />
        </div>
        <ul className='font-semibold flex'>
          <li className='ps-5 cursor-pointer font-medium'>
            <Link to='/'>HOME</Link>
          </li>
          <li className='ps-5 cursor-pointer font-medium'>
            <Link to='/about'>ABOUT</Link>
          </li>
          <li className='ps-5 cursor-pointer font-medium'>
            <Link to='/menu'>MENU</Link>
          </li>
          <li className='ps-5 cursor-pointer font-medium'>
            <Link to='/team'>TEAM</Link>
          </li>
          <li className='ps-5 cursor-pointer font-medium'>
            <Link to='/contact'>CONTACT</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  )
}

export default Navbar