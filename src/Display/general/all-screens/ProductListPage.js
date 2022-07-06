import React, { useCallback, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getProductsBySlug,
  displayAvailableSellers,
  selectedGlobalStoreItem,
} from "../../../redux/actions";
import { GlobalProductStoreInfoCanvas, ItemsTemplate, BlockTemplate } from "../../../comp-files";
import { sellers as sellersFromDemoApi } from "../../../demoApi";
// import "../../../comp-files/app-style/_productListPage.scss";
// import "../../../comp-files/app-style/_home.scss";

import { generatePublicUrl } from "../../../utilities-config/urlConfig";
import SellersCanvas from "../../../comp-files/SellersCanvas";
import MainLayout from "../MainLayout";
import { Link,useParams } from "react-router-dom";
// import ProductDetailsPage from "./ProductDetailsPage";
import BlockTemplate2 from "../../../comp-files/templates/BlockTemplate2";

const ProductListPage = (props) => {
  const dispatch = useDispatch();
  const {slug} = useParams();
  const [canvas, setCanvas] = useState(false)
  const [productInfo, setProductInfo] = useState({})
  const screenSize = window.matchMedia('(max-width: 600px)').matches;
  const [mobileScreen, setMobileScreen] = useState(null)
  const selector = useSelector((state) => {
    return {
      product: state.globalProduct.globalProducts,
    };
  });
  useEffect(() => {
    dispatch(getProductsBySlug(slug));
  }, [dispatch, props ]);

  // console.log({mobileScreen, screenSize})

  useCallback(()=>{
    if(screenSize){
      setMobileScreen(true)
      // console.log({mobileScreen, screenSize})
    }
  },[setMobileScreen,  screenSize, mobileScreen])

  const info = (product) => {
    
    // console.log(product)
  };
  const getProductInfoHandler = (product) => {
    dispatch(selectedGlobalStoreItem(product));
    setProductInfo(product)
    setCanvas(true)
  }
  const closeHandler =()=>{
    if(canvas){
      setCanvas(false)
    }
  }
  // const ProductLinkHandler =(link)=>{
  //   navigate(link)
  // }
// console.log(ProductLinkHandler)
  return (
    <>
    <BlockTemplate2
    data = {selector.product}
    itemAction = {getProductInfoHandler}
           closeHandler = {closeHandler}
          //  ProductLinkHandler = {()=>ProductLinkHandler(`/comment`)}
    />
      {/* {canvas && <ProductDetailsPage show={canvas} hide={setCanvas} productInfo={productInfo} setProductInfo={setProductInfo} /> } */}
      {/* <SellersCanvas show={canvas} hide={setCanvas} /> */}
      {/* <BlockTemplate
        data = {selector.product}
        itemAction = {getProductInfoHandler}
               closeHandler = {closeHandler}
         /> */}


      {/* <div className="productDisplay" onClick={closeHandler}>
        {selector.product.map((product, i) => (
          <div
            className="productDisplayContainer"
            key={i}
            onClick={()=>getProductInfoHandler(product)}
          >
            <div className="productDisplayContainerImage">
              <img
                src={
                  product.globalProductImage.length > 0
                    // ? generatePublicUrl(product.globalProductImage[0].img)
                  ? product.globalProductImage[0].img
                    : "/logo.png"
                }
                alt={product.productName}
              />
            </div>
            <div className="productDisplayContainerInfo">
              <div className="productDisplayContainerInfo__wrap">
              <div className="title">{product.productName}</div>
              <div>
                <span>4.5***</span>&nbsp;
                <span>(2000)***</span>
              </div>
              <div>More Info</div>
            </div>
            </div>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default ProductListPage;
