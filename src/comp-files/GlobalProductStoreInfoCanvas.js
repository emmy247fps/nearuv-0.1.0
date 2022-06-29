import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./app-style/_globalStoreProductInfoCanvas.scss";

import {
  IoIosArrowDropdown,
  IoIosClose,
  IoIosInformationCircleOutline,
  IoIosShareAlt,
} from "react-icons/io";

import {
  getGlobalStoreProductInfoBySlug,
} from "../redux/actions";
import { ContentLoading, DataLoading } from "./hoc/Loading";
import { globalSellersIcons } from "./Icons";
import { generatePublicUrl } from "../utilities-config/urlConfig";

const GlobalProductStoreInfoCanvas = ({show, hide, productInfo, setProductInfo}) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.selectedGlobalItem);
  const { sellers} = data;

  // useEffect(()=>{
  //   const {slug} = props.match.params;
  //   dispatch(getGlobalStoreProductInfoBySlug(slug))
  // },[props, dispatch]);

console.log({show, hide, productInfo})
  return (
    <div className="content">
    <div className="productInfoCanvas open" > 
      <div className="heading">
        <IoIosClose
          className="cancelIcon"
          onClick={()=>hide(!show)}
          size={40}
        />
      </div>
        {/* globalImage  */}
        <div className="swiperContainer">
            <div className="swiperSlider">
              { productInfo.globalProductImage.length > 0 &&
                productInfo.globalProductImage.map((item, index) => (
                  <img
                    // src={generatePublicUrl(item.img)}
                    src={productInfo.globalProductImage.length > 0 ? item.img : '/logo.png'}
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
                <span className="global">{productInfo.global}</span>
                <span className="globalNumber">{productInfo.rating}</span>
                <span className="globalLikes">{productInfo.likes}</span>
                <span className="globalReviews">{productInfo.comments}</span>
              </div>
              <div className="globalOffer">
                <h4>Available offers</h4>
                <span>
                  {productInfo.globalOffer &&
                  productInfo.globalOffer.length > 0 ? (
                    productInfo.globalOffer.map((item, index) => (
                      <div className="globalOfferItems" key={index}>
                        {item.offer} {item.terms}
                      </div>
                    ))
                  ) : (
                    <div className="globalOfferItems"> No items yet </div>
                  )}
                </span>
              </div>
            </div>
          )}
          {data && <>{data.loading ? DataLoading() : <div> Get items </div>}</>}
        </div>
      </div>
    </div>
    
    
    {/* Here is the global sellers container */}
    
    {/* <div className="sellers__canvas open">
      <div className="contain">
        {sellers.loading ? (
          DataLoading("sellers")
        ) : (
          <>
            <div className="contain__heading">
              <div className="heading__bar">
                <IoIosClose
                  className="icons icons__cancel"
                  size={40}
                />
              </div>
              <div className="contain__heading__location">
                <input type="search" defaultValue="Ikeja" />
              </div>
              <h4>
                <span>
                  {sellers.length === 1 ? (
                    <p>{sellers.length} Seller in your location</p>
                  ) : sellers.length > 1 ? (
                    <p>{sellers.length} Sellers in your location</p>
                  ) : (
                    <p>No seller is selling this product</p>
                  )}{" "}
                </span>
              </h4>
            </div>

            {sellers.map((item, index) => (
              <div className="contain__content" key={index}>
                <div className="contain__content__profile">
                  <img
                    src={
                      item.sellerId.image.length > 0
                        ? generatePublicUrl(item.sellerId.image[0].img)
                        : "/logo.png"
                    }
                    alt={item.sellerId.username}
                  />
                  <span>{item.sellerId.username}</span>
                  <span className="contain__content__profile__information">
                    <IoIosInformationCircleOutline
                      className="icons icons__information"
                      size={20}
                    />
                  </span>
                </div>
                <div className="contain__content__product">
                  <div className="image__contain">
                    <img
                      src={
                        item.sellerId.image.length > 0
                          ? generatePublicUrl(item.sellerId.image[0].img)
                          : "/logo.png"
                      }
                      alt=""
                    />
                  </div>
                  <span>{item.productName}</span>
                  <div className="product__price">
                    <div>
                      <span className="currency">$</span>
                      <span className="figure">{item.sellingPrice}</span>
                      <span className="icons">
                        <IoIosArrowDropdown />
                      </span>
                    </div>
                  </div>
                  <div className="contain__content__product__icons">
                    {globalSellersIcons.map((item, index) => (
                      <div key={index} className="icons" size={item.size}>
                        <item.icon />
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div> */}
  
    </div>
  );
};

export default GlobalProductStoreInfoCanvas;
