import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsBySlug,
  displayAvailableSellers,
  selectedGlobalStoreItem,
} from "../../../redux/actions";
import { GlobalProductStoreInfoCanvas } from "../../../comp-files";
import { sellers as sellersFromDemoApi } from "../../../demoApi";
import "../../../comp-files/app-style/_productListPage.scss";

import { generatePublicUrl } from "../../../utilities-config/urlConfig";
import SellersCanvas from "../../../comp-files/SellersCanvas";
import MainLayout from "../MainLayout";
import { Link,useParams } from "react-router-dom";

const ProductListPage = (props) => {
  const dispatch = useDispatch();
  const {slug} = useParams();
  const [canvas, setCanvas] = useState(false)
  const [productInfo, setProductInfo] = useState({})
  const selector = useSelector((state) => {
    return {
      product: state.globalProduct.globalProducts,
    };
  });
  useEffect(() => {
    
    dispatch(getProductsBySlug(slug));
    console.log([slug, props])
  }, [dispatch, props ]);

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

  return (
    <>
      {canvas && <GlobalProductStoreInfoCanvas  show={canvas} hide={setCanvas} productInfo={productInfo} setProductInfo={setProductInfo} /> }
      {/* <SellersCanvas show={canvas} hide={setCanvas} /> */}
      <div className="product__display" onClick={closeHandler}>
        {selector.product.map((product, i) => (
          <div
            className="product__display__container"
            key={i}
            onClick={()=>getProductInfoHandler(product)}
          >
            <div className="product__display__container__image">
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
            <div className="product__display__container__info">
              <div className="product__display__container__info__wrap">
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
      </div>
    </>
  );
};

export default ProductListPage;
