import { memo } from "react";

import "../app-style/_productListPage.scss";


const BlockTemplate = (props) => {
  const { data, itemAction, closeHandler } = props

  return (
      <div className="productDisplay" onClick={closeHandler}>
        {data.map((product, i) => (
          <div
            className="productDisplayContainer"
            key={i}
            onClick={()=>itemAction(product)}
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
      </div>
  );
};

export default memo(BlockTemplate);