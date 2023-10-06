import React from 'react'
import Header from '../../Components/Header/Header'
import menuStyles from './Menu.module.css'
import Play from '../../Components/Play/Play'
import Menu_Tab from './Menu_Tab/Menu_Tab'

const Menu = () => {
  return (
    <>
      <Header pageName={`Menu List`}/>
      <div className={`${menuStyles.menu_main}`}>
        <div className={`content-width py-28`}>
          <Menu_Tab />
        </div>
      </div>
      <Play />
    </>
  )
}

export default Menu