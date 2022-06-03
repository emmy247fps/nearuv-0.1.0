import React from 'react'
import { products } from '../utilities'
import './items.css'



function Items() {

  return (
		<div className='item_card'>
          {
           products.map((item) => (
                    <div className='items'>
                          <img src={item.img} />
                          </div>
                  ))
          }
		</div>
   
  )
}

export default Items
