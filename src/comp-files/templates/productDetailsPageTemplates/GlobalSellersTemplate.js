import React, { useState } from 'react'
import {IoIosArrowDropdown, IoIosClose, IoIosInformationCircleOutline, IoIosShareAlt,  } from 'react-icons/io'
import { globalSellersIcons } from "../../../comp-files/Icons";
import { products } from '../../../utilities';


const GlobalSellersTemplate = (props) => {
 const { data} = props
 const [showThumb, setShowThumb] = useState(false)
  return (
   <div className="sellers">
   <div className="sellersCanvas">
       <div className="contain">
           {/* {sellers.loading ? (
               DataLoading("sellers")
           ) : ( */}
           <>
           
               <div className="sellersContainer">
               {data.sellers.map((item, i) => (
                   <div className="contain__content" key={i}>
                       <div className="contain__content__profile">
                           <img
                               src={item.sellerImage ? '' : "/logo.png"}
                               alt={item.sellerName}
                               
                           />
                           
                           <div className="sellerName">
                           <span>{item.sellerName}</span>
                           </div>
                           <span >
                               <IoIosInformationCircleOutline
                                   className="icons iconsInformation"
                                   size={20}
                               />
                           </span>
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
                               <div>        
                                   <span className="currency">price:         $</span> 
                                   {/* This will be multi currency but here is a test for one currency */}
                                   <span className="figure">{item.sellingPrice}</span>
                                   <span className="icons">
                                       <IoIosArrowDropdown />
                                   </span>
                               </div>
                           </div>
                           <div className="contain__content__product__icons">
                                   {globalSellersIcons.map((item, i) => (
                                        <div key={i} className="icons" size={item.size}>
                                           <item.icon  size={20}/>
                                           <div >
                                       <span style={{fontSize: '1rem'}}>{item.name}</span>
                                       </div> 
                                         
                                      </div>
                                      
                                  ))} 
                               </div> 
                       </div>
                   </div>
               ))}
               </div>
           </>
           {/* )} */}
       </div>
   </div>
</div>
  )
}

export default GlobalSellersTemplate