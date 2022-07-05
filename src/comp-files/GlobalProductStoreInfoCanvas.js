// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import "./app-style/_globalStoreProductInfoCanvas.scss";

// import {
//   IoIosArrowDropdown,
//   IoIosClose,
//   IoIosInformationCircleOutline,
//   IoIosShareAlt,
// } from "react-icons/io";

// import {
//   getGlobalStoreProductInfoBySlug,
// } from "../redux/actions";
// import { ContentLoading, DataLoading } from "./hoc/Loading";
// import { globalSellersIcons } from "./Icons";
// import { generatePublicUrl } from "../utilities-config/urlConfig";
// import { Header } from "../Display/general";

// const GlobalProductStoreInfoCanvas = ({show, hide, productInfo, setProductInfo}) => {
//   const dispatch = useDispatch();
//   const data = useSelector((state) => state.selectedGlobalItem);
//   const { sellers} = data;

//   // useEffect(()=>{
//   //   const {slug} = props.match.params;
//   //   dispatch(getGlobalStoreProductInfoBySlug(slug))
//   // },[props, dispatch]);
// const grt = () =>{}
// const get = function() {}
// // const gft(){}
// // Function declaration
// function add() {		
	
// }

// // Calling a function
// add(2, 3);

// console.log({show, hide, productInfo})
//   return (
//     <div className="content">
//     <div className="productInfoCanvas open" > 
//     {/* <Header /> */}
//       <div className="heading">
//         <IoIosClose
//           className="cancelIcon"
//           onClick={()=>hide(!show)}
//           size={40}
//         />
//       </div>
//         {/* globalImage  */}
//         <div className="swiperContainer">
//             <div className="swiperSlider">
//               { productInfo.globalProductImage.length > 0 &&
//                 productInfo.globalProductImage.map((item, index) => (
//                   <img
//                     // src={generatePublicUrl(item.img)}
//                     src={productInfo.globalProductImage.length > 0 ? item.img : '/logo.png'}
//                     key={index}
//                     alt={productInfo.productName}
//                   />
                  
//                 ))}
//             </div>

//         <div className="productDetailsLayout">
//           {/* Here is the global product information */}
//           {productInfo && (
//             <div className="productInfo">
//               <h2 className="productName">{productInfo.productName}</h2>
//               <div className="productRating">
//                 <div>
//                 <span className="global">{productInfo.global}</span>
//                 <span className="globalNumber">{productInfo.rating}</span>
//                 <span className="globalLikes">{productInfo.likes}</span>
//                 <span className="globalReviews">{productInfo.comments}</span>
//                 </div>
//                 <div className="sellersLink">
//                 <a href="" >views sellers</a>
//                 </div>
//               </div>
//               <div className="globalInfo">
//               <div className="globalOffer">
//                 <h2 className="listName">Available offers</h2>
//                 <div className="Offer">
//                 <span className="offerListIcon">
//                   {/* {productInfo.globalOffer &&
//                   productInfo.globalOffer.length > 0 ? (
//                     productInfo.globalOffer.map((item, index) => (
//                       <div className="globalOfferItems" key={index}>
//                         {item.offer} {item.terms}
//                       </div>
//                     ))
//                   ) : (
//                     <div className="globalOfferItems"> No items yet </div>
//                   )} */}
//                   <img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
//                   className="iconImg"></img>
//                   <li className="listOffer">Bank Offer5% Cashback on Flipkart Axis Bank Card</li>
//                 </span>
//                 <span className="offerListIcon">
//                   {/* {productInfo.globalOffer &&
//                   productInfo.globalOffer.length > 0 ? (
//                     productInfo.globalOffer.map((item, index) => (
//                       <div className="globalOfferItems" key={index}>
//                         {item.offer} {item.terms}
//                       </div>
//                     ))
//                   ) : (
//                     <div className="globalOfferItems"> No items yet </div>
//                   )} */}
//                   <img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
//                   className="iconImg"></img>
//                   <li className="listOffer">Bank Offer5% Cashback on Flipkart Axis Bank Card</li>
//                 </span>
//                 <span className="offerListIcon">
//                   {/* {productInfo.globalOffer &&
//                   productInfo.globalOffer.length > 0 ? (
//                     productInfo.globalOffer.map((item, index) => (
//                       <div className="globalOfferItems" key={index}>
//                         {item.offer} {item.terms}
//                       </div>
//                     ))
//                   ) : (
//                     <div className="globalOfferItems"> No items yet </div>
//                   )} */}
//                   <img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
//                   className="iconImg"></img>
//                   <li className="listOffer">Bank Offer5% Cashback on Flipkart Axis Bank Card</li>
//                 </span>
//                 <span className="offerListIcon">
//                   {/* {productInfo.globalOffer &&
//                   productInfo.globalOffer.length > 0 ? (
//                     productInfo.globalOffer.map((item, index) => (
//                       <div className="globalOfferItems" key={index}>
//                         {item.offer} {item.terms}
//                       </div>
//                     ))
//                   ) : (
//                     <div className="globalOfferItems"> No items yet </div>
//                   )} */}
//                   <img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
//                   className="iconImg"></img>
//                   <li className="listOffer">Bank Offer5% Cashback on Flipkart Axis Bank Card</li>
//                 </span>
//                 <span className="offerListIcon">
//                   {/* {productInfo.globalOffer &&
//                   productInfo.globalOffer.length > 0 ? (
//                     productInfo.globalOffer.map((item, index) => (
//                       <div className="globalOfferItems" key={index}>
//                         {item.offer} {item.terms}
//                       </div>
//                     ))
//                   ) : (
//                     <div className="globalOfferItems"> No items yet </div>
//                   )} */}
//                   <img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
//                   className="iconImg"></img>
//                   <li className="listOffer">Bank Offer5% Cashback on Flipkart Axis Bank Card</li>
//                 </span>
//                 <span className="offerListIcon">
//                   {/* {productInfo.globalOffer &&
//                   productInfo.globalOffer.length > 0 ? (
//                     productInfo.globalOffer.map((item, index) => (
//                       <div className="globalOfferItems" key={index}>
//                         {item.offer} {item.terms}
//                       </div>
//                     ))
//                   ) : (
//                     <div className="globalOfferItems"> No items yet </div>
//                   )} */}
//                   <img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
//                   className="iconImg"></img>
//                   <li className="listOffer">Bank Offer5% Cashback on Flipkart Axis Bank Card</li>
//                 </span>
//                 </div>
//               </div>
//               <div className="glob">
//                 <h2> About product</h2>
//                 <div>
//                 <ul>
//                   <li>IN THE BOX: 8-pack of 1.5 volt AA alkaline batteries for reliable performance across a wide range of devices</li>
//                   <li>DEVICE COMPATIBLE: Ideal battery for game controllers, toys, flashlights, digital cameras, clocks, and more</li>
//                   <li>DESIGNED TO LAST: 10-year leak-free shelf life; store for emergencies or use right away</li>
//                   <li>EASY USE & STORAGE: Ships in Certified Frustration-Free Packaging; easy to open and store extras for later use</li>
//                   <li>SINGLE USE: These batteries are NOT rechargeable; for rechargeable options, check out Amazon Basics rechargeable batteries</li>
//                 </ul> 
//                  </div>
//               </div>
//               </div>
//             </div>
//           )}
//           {data && <>{data.loading ? DataLoading() : <div className="box"> Get items </div>}</>}
//         </div>
//       </div>
//     </div>
    
    
//     {/* Here is the global sellers container */}
    
//     {/* <div className="sellersCanvas open">
//       <div className="contain">
//         {sellers.loading ? (
//           DataLoading("sellers")
//         ) : (
//           <>
//             <div className="contain__heading">
//               <div className="heading__bar">
//                 <IoIosClose
//                   className="icons icons__cancel"
//                   size={40}
//                 />
//               </div>
//               <div className="contain__heading__location">
//                 <input type="search" defaultValue="Ikeja" />
//               </div>
//               <h4>
//                 <span>
//                   {sellers.length === 1 ? (
//                     <p>{sellers.length} Seller in your location</p>
//                   ) : sellers.length > 1 ? (
//                     <p>{sellers.length} Sellers in your location</p>
//                   ) : (
//                     <p>No seller is selling this product</p>
//                   )}{" "}
//                 </span>
//               </h4>
//             </div>

//             {sellers.map((item, index) => (
//               <div className="contain__content" key={index}>
//                 <div className="contain__content__profile">
//                   <img
//                     src={
//                       item.sellerId.image.length > 0
//                         ? generatePublicUrl(item.sellerId.image[0].img)
//                         : "/logo.png"
//                     }
//                     alt={item.sellerId.username}
//                   />
//                   <span>{item.sellerId.username}</span>
//                   <span className="contain__content__profileInformation">
//                     <IoIosInformationCircleOutline
//                       className="icons iconsInformation"
//                       size={20}
//                     />
//                   </span>
//                 </div>
//                 <div className="contain__content__product">
//                   <div className="image__contain">
//                     <img
//                       src={
//                         item.sellerId.image.length > 0
//                           ? generatePublicUrl(item.sellerId.image[0].img)
//                           : "/logo.png"
//                       }
//                       alt=""
//                     />
//                   </div>
//                   <span>{item.productName}</span>
//                   <div className="product__price">
//                     <div>
//                       <span className="currency">$</span>
//                       <span className="figure">{item.sellingPrice}</span>
//                       <span className="icons">
//                         <IoIosArrowDropdown />
//                       </span>
//                     </div>
//                   </div>
//                   <div className="contain__content__product__icons">
//                     {globalSellersIcons.map((item, index) => (
//                       <div key={index} className="icons" size={item.size}>
//                         <item.icon />
//                         <span>{item.name}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </>
//         )}
//       </div>
//     </div> */}
  
//     </div>
//   );
// };

// export default GlobalProductStoreInfoCanvas;
