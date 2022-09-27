import React, { useEffect, useRef, useState } from "react";
import { products } from "../../utilities";
import HorizontalScroll from "./HorizontalScroll";

  const product = products[0];

export const DesktopProductPageTopImageDetails = () => {
  const [displayImage, setDisplayImage] = useState("");
  const product = products[0];
  const [relatedProductHTML, setRelatedProductHTML] = useState(null);
  const [dataHTMLClassName, setDataHTMLClassName] = useState("");
  const [relatedProductHTMLClassName, setRelatedProductHTMLClassName] =
    useState("");
  const relatedProductRef = useRef(null);
  const brandCategoryRef = useRef(null);
  const compareContainerRef = useRef(null);
  const [dataHTML, setDataHTML] = useState(null);
  const dataRef = useRef(null);

  const changeImageHandler = (img) => {
    setDisplayImage(img);
    console.log(img);
  };


  return (
   <div className="desktopHorizontaScroll">
                  
                  <div className="big-img">
                    <img
                      src={
                        displayImage
                          ? displayImage
                          : product?.globalProductImage.length > 0
                          ? product.globalProductImage[0].img
                          : "/logo.png"
                      }
                      alt={product.productName}
                    />
                  </div>
                  <HorizontalScroll 
                                        height='60px' 
                                        width='369px' 
                                        reference1={dataHTML}
                                            name={dataHTMLClassName}
                                        >
                  <div className="imageScroll" ref={dataRef}>
                    {product?.globalProductImage?.map((item, i) => (
                      <img
                        className="selectedContainerSmallImgScroll"
                        src={
                          product.globalProductImage ? item.img : "/logo.png"
                        }
                        key={i}
                        alt={product.productName}
                        onClick={() => changeImageHandler(item.img)}
                      />
                    ))}
                  </div>
                  </HorizontalScroll>
                </div>
  )
}
