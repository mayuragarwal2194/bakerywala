import React from 'react'
import headerTopStyles from './Header_Top.module.css'
import Social_buttons from '../../Social_Buttons/Social_buttons'

const Header_Top = () => {
  return (
    <div>
      <div className={`header content-width flex items-center justify-between px-4 py-5 text-white sm:hidden lg:flex`}>
        <Social_buttons />
        <div className={`${headerTopStyles.header_c2} flex items-center justify-center gap-7`}>
          <div className="header-no">+953 012 3654 896</div>
          <div className="header-site">support@colorlib.com</div>
        </div>
      </div>
    </div>
  )
}

export default Header_Top