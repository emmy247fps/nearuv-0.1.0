import React, { useEffect, useRef, useState } from "react";
import { products } from "../../utilities";
import HorizontalScroll from "./HorizontalScroll";
// import "../../../comp-files/app-style/_productDetailsPage.scss";

  const product = products[0];


const MobileProductPageTopImageDetails = () => {
  return (
      <div className="mobileTopInfo">
      <div className="mobileTopInfoImg">
        <HorizontalScroll height='23rem' >
              <div className="imageScroll">
                {product?.globalProductImage?.length > 0 &&
                  product?.globalProductImage?.map((item, i) => (
                    <img
                      // className="brandcategoryImgContainerItems"
                      src={
                        product.globalProductImage?.length > 0
                          ? item.img
                          : "/logo.png"
                      }
                      key={i}
                      alt={product.productName}
                    />
                  ))}
              </div>
              {/* </section> */}
              </HorizontalScroll>
                    </div>
    <h2 className="mobileTopInfoName">{product.productName}</h2> 

    </div>
  )
}

export default MobileProductPageTopImageDetails