import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../comp-files/app-style/__productDetailsPage.scss";
import { IoIosArrowDropdown, IoIosClose, IoIosInformationCircleOutline, IoIosShareAlt,IoMenu , IoFilter } from "react-icons/io";
import { DataLoading } from "../../../comp-files/hoc/Loading";
import { products } from "../../../utilities";
import { globalSellersIcons } from "../../../comp-files/Icons";
import GlobalSellersTemplate from "../../../comp-files/templates/productDetailsPageTemplates/GlobalSellersTemplate";
import NavigationTemplate from "../../../comp-files/templates/productDetailsPageTemplates/NavigationTemplate";
import FilterTemplate from "../../../comp-files/templates/productDetailsPageTemplates/FilterTemplate";
import { SearchIcon } from "../../../comp-files/components";

// import { Header } from "../Display/general";

const ProductDetailsPage = () => {
    const product = products[0]
   

    return (

        <div className="productDetailsLayout">
            <div className="swiperSlider">
                {product?.globalProductImage?.length > 0 &&
                    product?.globalProductImage?.map((item, i) => (
                        <img
                            // src={generatePublicUrl(item.img)}
                            src={product.globalProductImage?.length > 0 ? item.img : '/logo.png'}
                            key={i}
                            alt={product.productName}
                        />

                    ))}
            </div>

            <div className="content">
                {/* Here is the global product information */}
                {product && (
                    <div className="productInfoContainer">

                        <div className="productInfoRow">
                            {/* column 1 */}
                            
                            <div className="column1">
                                <div className="sectionWrap">
                            {/* column 2 */}
                            <div className="section2">
                                <section id="sec1">
                                    <h2 className="productName">{product.productName}</h2>

                                    <h2>Product details</h2>
                                    <li>IN THE BOX: 8-pack of 1.5 volt AA alkaline batteries for reliable performance across a wide range of devices</li>
                                    <li>DEVICE COMPATIBLE: Ideal battery for game controllers, toys, flashlights, digital cameras, clocks, and more</li>
                                    <li>DESIGNED TO LAST: 10-year leak-free shelf life; store for emergencies or use right away</li>
                                    <li>EASY USE & STORAGE: Ships in Certified Frustration-Free Packaging; easy to open and store extras for later use</li>
                                    <li>SINGLE USE: These batteries are NOT rechargeable; for rechargeable options, check out Amazon Basics rechargeable batteries</li>
                                </section>
                                <section id="sec2">

                                    <div className="globalOffer">
                                        <h2 className="listName">Available offers</h2>
                                        <div className="Offer">
                                            <span className="offerListIcon">
                                                <img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                                                    className="iconImg"></img>
                                                <li className="listOffer">Bank Offer5% Cashback on Flipkart Axis Bank Card</li>
                                            </span>
                                            <span className="offerListIcon">
                                                <img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                                                    className="iconImg"></img>
                                                <li className="listOffer">Bank Offer5% Cashback on Flipkart Axis Bank Card</li>
                                            </span>
                                            <span className="offerListIcon">
                                                <img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                                                    className="iconImg"></img>
                                                <li className="listOffer">Bank Offer5% Cashback on Flipkart Axis Bank Card</li>
                                            </span>
                                            <span className="offerListIcon">
                                                <img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                                                    className="iconImg"></img>
                                                <li className="listOffer">Bank Offer5% Cashback on Flipkart Axis Bank Card</li>
                                            </span>
                                            <span className="offerListIcon">
                                                <img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                                                    className="iconImg"></img>
                                                <li className="listOffer">Bank Offer5% Cashback on Flipkart Axis Bank Card</li>
                                            </span>
                                            <span className="offerListIcon">
                                                <img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                                                    className="iconImg"></img>
                                                <li className="listOffer">Bank Offer5% Cashback on Flipkart Axis Bank Card</li>
                                            </span>
                                        </div>
                                    </div>
                                </section>
                                <section id="sec3">
                                    <h2>Verified Customer Feedback</h2>
                                    <li>IN THE BOX: 8-pack of 1.5 volt AA alkaline batteries for reliable performance across a wide range of devices</li>
                                    <li>DEVICE COMPATIBLE: Ideal battery for game controllers, toys, flashlights, digital cameras, clocks, and more</li>
                                    <li>DESIGNED TO LAST: 10-year leak-free shelf life; store for emergencies or use right away</li>
                                    <li>EASY USE & STORAGE: Ships in Certified Frustration-Free Packaging; easy to open and store extras for later use</li>
                                    <li>SINGLE USE: These batteries are NOT rechargeable; for rechargeable options, check out Amazon Basics rechargeable batteries</li>
                                    <li>EASY USE & STORAGE: Ships in Certified Frustration-Free Packaging; easy to open and store extras for later use</li>
                                    <li>SINGLE USE: These batteries are NOT rechargeable; for rechargeable options, check out Amazon Basics rechargeable batteries</li>
                                    <li>EASY USE & STORAGE: Ships in Certified Frustration-Free Packaging; easy to open and store extras for later use</li>
                                    <li>SINGLE USE: These batteries are NOT rechargeable; for rechargeable options, check out Amazon Basics rechargeable batteries</li>                               </section>
                                <section id="sec4">
                                    <h2>Customers who viewed this also viewed</h2>
                                    <li>IN THE BOX: 8-pack of 1.5 volt AA alkaline batteries for reliable performance across a wide range of devices</li>
                                    <li>DEVICE COMPATIBLE: Ideal battery for game controllers, toys, flashlights, digital cameras, clocks, and more</li>
                                    <li>DESIGNED TO LAST: 10-year leak-free shelf life; store for emergencies or use right away</li>
                                    <li>EASY USE & STORAGE: Ships in Certified Frustration-Free Packaging; easy to open and store extras for later use</li>
                                    <li>SINGLE USE: These batteries are NOT rechargeable; for rechargeable options, check out Amazon Basics rechargeable batteries</li>
                                </section>
                            </div>
                            </div>
                            </div>
                            {/* column 3 */}
                            <div className="column3">
                            <div className="contain__heading">
                   <div className="contain__heading__location">
                       {/* <input type="search" defaultValue="Ikeja"  className="sellerSearchBar"/> */}
                   </div>
                   <div className="sellersHeaderIcon">
                   
                    <SearchIcon  />
                     {/* <IoIosInformationCircleOutline size={23}/>
                    <IoIosClose size={23}/> */}
                       {/* <span>
                           {product.sellers.length === 1 ? (
                               <p>{product.sellers.length} seller in your location</p>
                           ) : product.sellers.length > 1 ? (
                               <p>{product.sellers.length} sellers in your location</p>
                           ) : (
                               <p>No seller is selling this product</p>
                           )}{" "}
                       </span> */}
                   </div>
               </div>
                               {/* <GlobalSellersTemplate 
                               data={product}

                               /> */}
                               <FilterTemplate />
                                {/* <div className="about">
                                    <div className="aboutHearder">
                                        <h2> About product</h2>
                                    </div>
                                    <div>
                                        <ul className="aboutList">
                                            <li>IN THE BOX: 8-pack of 1.5 volt AA alkaline batteries for reliable performance across a wide range of devices</li>
                                            <li>DEVICE COMPATIBLE: Ideal battery for game controllers, toys, flashlights, digital cameras, clocks, and more</li>
                                            <li>DESIGNED TO LAST: 10-year leak-free shelf life; store for emergencies or use right away</li>
                                            <li>EASY USE & STORAGE: Ships in Certified Frustration-Free Packaging; easy to open and store extras for later use</li>
                                            <li>SINGLE USE: These batteries are NOT rechargeable; for rechargeable options, check out Amazon Basics rechargeable batteries</li>
                                        </ul>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                       

                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductDetailsPage