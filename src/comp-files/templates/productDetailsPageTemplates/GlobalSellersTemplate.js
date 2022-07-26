import React, { useState } from 'react'
import {IoIosArrowDropdown, IoIosClose, IoIosInformationCircleOutline, IoIosShareAlt,  } from 'react-icons/io'
import { globalSellersIcons } from "../../../comp-files/Icons";
import { products } from '../../../utilities';
import "../../../comp-files/app-style/_globalSellersTemplate.scss";
import { FiFilter } from "react-icons/fi";
import { DataLoading } from "../../../comp-files/hoc/Loading";
import { useDispatch, useSelector } from "react-redux";
import { pDTemplateSwitch, sidebarAction } from "../../../redux/actions";



const GlobalSellersTemplate = (props) => {
    const [activeElement, setActiveElement] = useState("");

 const { data, activeItem, setOpen} = props
 const [showThumb, setShowThumb] = useState(false)

    const selectedSeller =(item)=>{
        setActiveElement(item.sellerName)
        setOpen(false)
        console.log(item)

    }
    const dispatch = useDispatch()
    const { display, loading } = useSelector(state => state.pDTemplateSwitch)

    const clickHandler = (info) => {
        dispatch(pDTemplateSwitch(info))
    }

  return  data.length > 0 && <div className="sellers : Open">
               <div className="sellersContainer">
          <div className="sellersHeaderIcon">
              <FiFilter size={20} onClick={() => clickHandler('filter')} className="Icon" />
          </div>
               {data.map((item, i) => (
                   <div 
                    key={i} 
                    onClick={()=>selectedSeller(item)}
                    className={
                       activeElement === item.sellerName
                           ? `contain__content active`
                           : 'contain__content'}
                        
                           >
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
      {loading ? 'Loading please wait' : display === 'sellers' ? <GlobalSellersTemplate
          data={data}
      /> : display === 'filter' ? 'fdghshds' :
              display === 'navigate' && 'fdghshds'
      } 
       </div>
  
}

export default GlobalSellersTemplate