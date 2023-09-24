import React from 'react'
import MenuCardStyles from './Menu_Card.module.css'
const pizzaData = [
  {
    Pizza_Name: "Pizza Americano",
    Pizza_Description: "Usage of the Internet is becoming more common due to rapid advance. Usage of the Internet is becoming more common due to rapid advance."
  },
  {
    Pizza_Name: "Pizza Tunisia",
    Pizza_Description: "Usage of the Internet is becoming more common due to rapid advance. Usage of the Internet is becoming more common due to rapid advance."
  },
  {
    Pizza_Name: "Beef lovers Pizza",
    Pizza_Description: "Usage of the Internet is becoming more common due to rapid advance. Usage of the Internet is becoming more common due to rapid advance."
  },
  {
    Pizza_Name: "Chicken lovers Pizza",
    Pizza_Description: "Usage of the Internet is becoming more common due to rapid advance. Usage of the Internet is becoming more common due to rapid advance."
  },
  {
    Pizza_Name: "Meatball Pizza",
    Pizza_Description: "Usage of the Internet is becoming more common due to rapid advance. Usage of the Internet is becoming more common due to rapid advance."
  },
  {
    Pizza_Name: "Bakery special Pizza",
    Pizza_Description: "Usage of the Internet is becoming more common due to rapid advance. Usage of the Internet is becoming more common due to rapid advance."
  },
  {
    Pizza_Name: "Pizza Alfredo",
    Pizza_Description: "Usage of the Internet is becoming more common due to rapid advance. Usage of the Internet is becoming more common due to rapid advance."
  },
  {
    Pizza_Name: "Cheese lovers Pizza",
    Pizza_Description: "Usage of the Internet is becoming more common due to rapid advance. Usage of the Internet is becoming more common due to rapid advance."
  },
]



const Menu_Card = () => {
  return (
    <>
      {pizzaData.map((item, index) => {
        return (
          <div key={index} className={`${MenuCardStyles.card} bg-white w-full p-5 mb-7`}>
            <div className="card_body flex items-center justify-between">
              <div className="card_left w-3/4">
                <div className={`${MenuCardStyles.card_title} mb-5 text-lg font-semibold`}>{item.Pizza_Name}</div>
                <div className={`${MenuCardStyles.card_description} text-sm font-light`}>
                  {item.Pizza_Description}
                </div>
              </div>
              <div className="card_right flex gap-12">
                <ul className='flex flex-col items-center gap-4'>
                  <li className={`${MenuCardStyles.size} text-lg font-semibold`}>6”</li>
                  <li className={`${MenuCardStyles.price} text-lg font-semibold`}>$15</li>
                </ul>
                <ul className='flex flex-col items-center gap-4'>
                  <li className={`${MenuCardStyles.size} text-lg font-semibold`}>10”</li>
                  <li className={`${MenuCardStyles.price} text-lg font-semibold`}>$20</li>
                </ul>
                <ul className='flex flex-col items-center gap-4'>
                  <li className={`${MenuCardStyles.size} text-lg font-semibold`}>14”</li>
                  <li className={`${MenuCardStyles.price} text-lg font-semibold`}>$25</li>
                </ul>
              </div>
            </div>
          </div>
        )
      })}

    </>
  )
}

export default Menu_Card