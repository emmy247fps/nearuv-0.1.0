import React from 'react'
import { Header } from '../Display/general/index.js'
// import MainLayout from '../Display/general/MainLayout.js'
import Items from './items.js'
import './productCard.css'



function ProductCard (items) {
  return (
    <>
    <Header />
     <div class="product">
	produt description page
	<div>{items.img}</div>
 </div>
 </>
  )
}

export default ProductCard

