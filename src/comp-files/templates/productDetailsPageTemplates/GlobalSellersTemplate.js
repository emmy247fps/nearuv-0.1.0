import React, { useState } from 'react'
import {IoIosArrowDropdown, IoIosClose, IoIosInformationCircleOutline, IoIosShareAlt,  } from 'react-icons/io'
import { globalSellersIcons } from "../../../comp-files/Icons";
import { products } from '../../../utilities';
import "../../../comp-files/app-style/__globalSellersTemplate.scss";

const GlobalSellersTemplate = (props) => {
 const { data} = props
 const [showThumb, setShowThumb] = useState(false)


  return (
        <div className="sellers : Open">
               <div className="sellersContainer">
               {data.sellers.map((item, i) => (
                   <div className="contain__content" key={i}>
                       <div className="contain__content__profile">
                        <div className='profileInfo'>
                           <img
                               src={item.sellerImage ? '' : "/logo.png"}
                               alt={item.sellerName}
                               
                           />
                           <span>{item.sellerName}</span>
                           <span >
                               <IoIosInformationCircleOutline
                                   className="icons iconsInformation"
                                   size={20}
                               />
                           </span>
                           </div>
                           <div className="sellerName">
                           <span>Follow</span>
                           </div>  
                       </div>
                       <div className="contain__content__product">
                           <div className={showThumb ? "image__contain showThumb" : "image__contain"} onMouseOver={()=>setShowThumb(true)}>
                               {
                                   item.productImages.length > 0 ? item.productImages.map((image, i) => (
                                       <img className={showThumb ? "showThumb" : ""} onMouseEnter={()=>setShowThumb(true)} src={image.img} alt={item.productName} key={i} />
                                   )) : <img src='logo.png' alt='default image' />}
                           </div>
                           <div className="productName">
                           {item.productOtherName ? <span>{item.productOtherName}</span> : item.productName}
                           </div>
                           <div className="product__price">
                                   <span className="currency">Price: $</span> 
                                   {/* This will be multi currency but here is a test for one currency */}
                                   <span className="figure">{item.sellingPrice}</span>
                                   <span className="icons">
                                       <IoIosArrowDropdown />
                                   </span>
                           </div>
                           <div className="contain__content__product__icons">
                                   {globalSellersIcons.map((item, i) => (
                                        <div key={i} className="iconButtons" size={item.size}  >
                                           <item.icon/>
                                           <div >
                                       <span style={{fontSize: '.8rem'}}>{item.name}</span>
                                       </div> 
                                         
                                      </div>
                                      
                                  ))} 
                               </div> 
                       </div>
                   </div>
               ))}
               </div> 
       </div>
  )
}

export default GlobalSellersTemplate