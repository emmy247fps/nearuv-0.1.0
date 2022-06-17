import React from 'react'
import Items from './items.js'
import './productCard.css'



function ProductCard () {
  return (
     <div class="product">
		 <div className='product_container'>
			

		  <div className='product_row'>
			  <Items />
			  <Items />
			  <Items />
			  <Items />
			  </div>    
		 </div>
 
 </div>
    
  )
}

export default ProductCard

