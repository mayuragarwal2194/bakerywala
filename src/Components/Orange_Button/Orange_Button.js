import React from 'react';
import BtnStyles from './Orange_Button.module.css'

const Orange_Button = ({BtnName}) => {
  return (
    <>
      <button className={`${BtnStyles.getStartedBtn} px-7 py-3 rounded mt-7 text-white`}>{BtnName}</button>
    </>
  )
}

export default Orange_Button