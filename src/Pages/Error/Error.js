import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import errorImg from '../../Images/error404.png'
import errorStyles from './Error.module.css'
import { NavLink } from 'react-router-dom'
import Black_Button from '../../Components/Black_Button/Black_Button'

const Error = () => {
  return (
    <>
      <Navbar />
      <div className={`${errorStyles.error_bg}`}>
        <div className={`content-width text-center pb-28`}>
          <div className={`${errorStyles.error_image} m-auto`}>
            <img src={errorImg} />
            {/* <h1 className='mt-20 text-4xl'>Error 404</h1> */}
          </div>
          <NavLink to='/'>
            <Black_Button BtnName={'Go Back'}/>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Error