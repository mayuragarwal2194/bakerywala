import React, { useState } from 'react'
import MenuTabStyles from './Menu_Tab.module.css'
import Menu_Card from './Menu_Card/Menu_Card'

const Menu_Tab = () => {
  const [toggle, setToggle] = useState(1);

  const updateToggle = (id) => {
    setToggle(id);
  }
  return (
    <>
      <div className={`${MenuTabStyles.tab} mb-20`}>
        <ul className='flex items-center justify-center gap-7'>
          <li className={`${toggle == 1 ? MenuTabStyles.active : "bg-white py-2 px-8 cursor-pointer rounded"}`} onClick={() => {updateToggle(1)}}>
            Pizza
          </li>
          <li className={`${toggle == 2 ? MenuTabStyles.active : "bg-white py-2 px-8 cursor-pointer rounded"}`} onClick={() => updateToggle(2)}>
            Breads
          </li>
          <li className={`${toggle == 3 ? MenuTabStyles.active : "bg-white py-2 px-8 cursor-pointer rounded"}`} onClick={() => updateToggle(3)}>
            Burgers
          </li>
          <li className={`${toggle == 4 ? MenuTabStyles.active : "bg-white py-2 px-8 cursor-pointer rounded"}`} onClick={() => updateToggle(4)}>
            Chicken
          </li>
        </ul>
      </div>
      <div className={`${toggle == 1 ? MenuTabStyles.showContent : MenuTabStyles.content} pizza-cards`}>
        <Menu_Card />
      </div>
      <div className={`${toggle == 2 ? MenuTabStyles.showContent : MenuTabStyles.content} breds-cards`}>
        <Menu_Card />
      </div>
      <div className={`${toggle == 3 ? MenuTabStyles.showContent : MenuTabStyles.content} burgers-cards`}>
        <Menu_Card />
      </div>
      <div className={`${toggle == 4 ? MenuTabStyles.showContent : MenuTabStyles.content} chicken-cards`}>
        <Menu_Card />
      </div>
    </>
  )
}

export default Menu_Tab