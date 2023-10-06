import React, { useState } from 'react';
import navStyles from './Navbar.module.css'
import logoImg from '../../Images/logo.png';
import { Outlet, Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className={`${openMenu ? navStyles.active : navStyles.nevbar} bg-white m-auto flex items-center justify-between py-3 px-5`} id="navbar">
        <div className={navStyles.logo}>
          <NavLink to='/'>
            <img src={logoImg} width={126} height={60} />
          </NavLink>
        </div>
        <ul className={`${navStyles.navbar_list} font-semibold flex`}>
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
        <div className={`${navStyles.mobile_navbar_Btn}`}>
          <FaBars className={`${navStyles.mobile_nav_icon}`} onClick={() => {setOpenMenu(true)}}/>
          <AiOutlineClose className={`${navStyles.close_outline} ${navStyles.mobile_nav_icon}`} onClick={() => {setOpenMenu(false)}}/>
        </div>
        <Outlet />
      </div>
    </>
  )
}

export default Navbar