import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../comp-files/app-style/__productDetailsPage.scss";
import { IoIosClose, } from "react-icons/io";
import { DataLoading } from "../../../comp-files/hoc/Loading";

// import { Header } from "../Display/general";

const ProductDetailsPage = () => {
    const productInfo = {
        key: "2",
        img: "https://images.unsplash.com/photo-1652040703185-9da58020a862?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        tagline: "",
        productSlug: 'comment',
        globalProductImage: [
            { img: "https://images.unsplash.com/photo-1652040703185-9da58020a862?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" },
            { img: "https://images.unsplash.com/photo-1652040703185-9da58020a862?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" },
            { img: "https://images.unsplash.com/photo-1652040703185-9da58020a862?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" },
            { img: "https://images.unsplash.com/photo-1652040703185-9da58020a862?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" },
        ],
        sellers: 2,
        productName: 'term opzdfg[o k[pzdfog[ pokzd f[kz [kpozr[ gkpozgkpo zds[ rgtr',
        global: 500,
        rating: 4.7,
        likes: 700,
        comments: 300,
        globalOffer: [
            {
                offer: 4000,
                terms: 'term opzdfg[o k[pzdfog[ pokzd f[kz [kpozr[ gkpozgkpo zds[ rgtr '
            }
        ]
    }

    return (
        <div className="content">
            <div className="productInfoCanvas open" >

                {/* globalImage  */}
                <div className="swiperContainer">
                    <div className="swiperSlider">
                        {productInfo?.globalProductImage?.length > 0 &&
                            productInfo?.globalProductImage?.map((item, index) => (
                                <img
                                    // src={generatePublicUrl(item.img)}
                                    src={productInfo.globalProductImage?.length > 0 ? item.img : '/logo.png'}
                                    key={index}
                                    alt={productInfo.productName}
                                />

                            ))}
                    </div>

                    <div className="productDetailsLayout">
                        {/* Here is the global product information */}
                        {productInfo && (
                            <div className="productInfo">
                                <h2 className="productName">{productInfo.productName}</h2>
                                <div className="productRating">
                                    <div>
                                        <span className="global">{productInfo.global}</span>
                                        <span className="globalNumber">{productInfo.rating}</span>
                                        <span className="globalLikes">{productInfo.likes}</span>
                                        <span className="globalReviews">{productInfo.comments}</span>
                                    </div>
                                    <div className="sellersLink">
                                        <a href="" >views sellers</a>
                                    </div>
                                </div>
                                <div className="globalInfo">
                                    <div className="Navigation">
                                        <h2>Navigation</h2>
                                    </div>
                                    <div className="globalinfoWrap">
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
                                    <div className="glob">
                                        <h2> About product</h2>
                                        <div>
                                            <ul>
                                                <li>IN THE BOX: 8-pack of 1.5 volt AA alkaline batteries for reliable performance across a wide range of devices</li>
                                                <li>DEVICE COMPATIBLE: Ideal battery for game controllers, toys, flashlights, digital cameras, clocks, and more</li>
                                                <li>DESIGNED TO LAST: 10-year leak-free shelf life; store for emergencies or use right away</li>
                                                <li>EASY USE & STORAGE: Ships in Certified Frustration-Free Packaging; easy to open and store extras for later use</li>
                                                <li>SINGLE USE: These batteries are NOT rechargeable; for rechargeable options, check out Amazon Basics rechargeable batteries</li>
                                            </ul>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="sellersList">
                                        <h2>sellersList</h2>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProductDetailsPage