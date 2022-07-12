import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../comp-files/app-style/__productDetailsPage.scss";
import { IoIosClose, } from "react-icons/io";
import { DataLoading } from "../../../comp-files/hoc/Loading";
import { products } from "../../../utilities";

// import { Header } from "../Display/general";

const ProductDetailsPage = () => {
    const product = products[0]

    return (

        <div className="productDetailsLayout">
            <div className="swiperSlider">
                {product?.globalProductImage?.length > 0 &&
                    product?.globalProductImage?.map((item, index) => (
                        <img
                            // src={generatePublicUrl(item.img)}
                            src={product.globalProductImage?.length > 0 ? item.img : '/logo.png'}
                            key={index}
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
                                <div className="navigationHeader">
                                    <h2>Navigation</h2>
                                </div>
                                <nav className="navigationList">
                                        <a href="#sec1" className="productNav">Product details</a>
                                        <a href="#sec2">Specifications</a>
                                        <a href="#sec3"> Feedback</a>
                                        <a href="#sec4">Customers view</a>
                                 </nav>
                            </div>
                            {/* column 2 */}
                            <div className="column2">
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

                            {/* column 3 */}
                           
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductDetailsPage