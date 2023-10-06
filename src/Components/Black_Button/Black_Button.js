import React from 'react'
import BlabkbtnStyles from './Black_Button.module.css'

const Black_Button = ({BtnName}) => {
  return (
    <>
      <button className={`${BlabkbtnStyles.getStartedBtn_black} border border-black px-7 py-3 rounded mt-7 text-white bg-black`}>
        {BtnName}
      </button>
    </>
  )
}

export default Black_Button