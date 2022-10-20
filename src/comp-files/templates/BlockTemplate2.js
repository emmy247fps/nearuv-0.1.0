import React from 'react'
import { Link } from "react-router-dom"; 
import "../app-style/_productListPage.scss";

const BlockTemplate2 = (props) => {
    const { data, itemAction, closeHandler,ProductLinkHandler } = props
    return (
        <div className="productDisplay" >
          {data.map((product, i) => (
            <Link to={`/p?name=${product.productName}`}
              className="productDisplayContainer"
              key={i}
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
                  <span>4.5⭐⭐⭐</span>&nbsp;
                  <span>(2000)⭐⭐⭐</span>
                </div>
                <div>More Info</div>
              </div>
              </div>
              </Link>
          ))}
        </div>
    );
}

export default BlockTemplate2