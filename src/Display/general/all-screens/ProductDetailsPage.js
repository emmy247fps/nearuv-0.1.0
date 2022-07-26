import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowDropdown, IoIosClose, IoIosInformationCircleOutline, IoIosShareAlt, IoIosSearch, IoIosPeople } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
import { DataLoading } from "../../../comp-files/hoc/Loading";
import { products } from "../../../utilities";
import { globalSellersIcons } from "../../../comp-files/Icons";
import NavigationTemplate from "../../../comp-files/templates/productDetailsPageTemplates/NavigationTemplate";
import FilterTemplate from "../../../comp-files/templates/productDetailsPageTemplates/FilterTemplate";
import { pDTemplateSwitch, sidebarAction } from "../../../redux/actions";
import SearchBar from "../../../comp-files/SearchBar";
import "../../../comp-files/app-style/_productDetailsPage.scss";
import styled from "styled-components";
import { SlidingInfo } from "../../../comp-files/components";
import GlobalSellersTemplate from "../../../comp-files/templates/productDetailsPageTemplates/GlobalSellersTemplate";
import Product from "../../../comp-files/Product";
import SlideInNav from "../../../comp-files/components/SildeInNav";


// import { Header } from "../Display/general";

const ProductDetailsPage = () => {
    const sidebar = useSelector((state) => state.sidebar);
    const [openSellers, setOpenSellers] = useState(false)
    const [openAvailableSellers, setOpenAvailableSellers] = useState(false)
    const product = products[0]
    console.log(sidebar) 

    const toggleMenu = () => {
        setOpenAvailableSellers(!openAvailableSellers)
    };
    const closeSubMenu = () => {
        dispatch(sidebarAction(false));
        // dispatch(sideMenuContentAction(false));
    };

    const dispatch = useDispatch()
    const { display, loading } = useSelector(state => state.pDTemplateSwitch)

    const clickHandler = (info) => {
        dispatch(pDTemplateSwitch(info))
    }
    const { isOpen, setIsOpen } = useState(false)

    const closeSlidebar = ()=>{
        if (openAvailableSellers){
            setOpenAvailableSellers(false)
        }
    }
    const [sideBar, setSideBar] = useState(false);

    const toggleSidebar = () => {
        setSideBar((prevState) => !prevState)
    }
    const slideInNavProps = {
        open: openAvailableSellers, 
        setOpen: setOpenAvailableSellers,
        position: 'right',
        data: product.sellers
    }

    return (
        <>
            <SlideInNav {...slideInNavProps} />
        <div className="productDetailsLayout" 
        onClick={() => closeSlidebar()}
        >
            <div className="swiperSlider">
                {product?.globalProductImage?.length > 0 &&
                    product?.globalProductImage?.map((item, i) => (
                        <img
                            // src={generatePublicUrl(item.img)}
                            src={product.globalProductImage?.length > 0 ? item.img : '/logo.png'}
                            key={i}
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
                                <div className="sectionWrap">
                                    {/* column 2 */}
                                    <div className="section2">
                                        <section id="sec1">
                                            <h2 className="productName">{product.productName}</h2><br />
                                            <div className="itemDetailinfoContainer">
                                                <div className="itemDetailinfoContainerBrandLink">
                                                    <a href="#">Visit the Nintendo Store</a>
                                                </div>

                                                <div className="itemDetailinfoContainerSellerName">
                                                    <span ><b> sellers: </b></span>
                                                    <span> Samuel </span><br />
                                                </div>
                                                <div className="itemDetailinfoContainerPrice">
                                                    <span>Price:   </span>
                                                    <span className="amount"> $349.99</span> <br />
                                                </div>
                                                <div className="itemDetailinfoContainerPromo">
                                                    <span>Promo: </span>
                                                    <span className="amount"> $259.99</span> <br />
                                                </div>
                                                <div className="itemDetailinfoContainerQuantity">
                                                    <button >In Stock.</button><br />
                                                </div>
                                                <div className="itemDetailinfoContainerColor">
                                                    <span>Color </span><br />
                                                    <div className="ColorArray">
                                                        {product?.globalProductImage?.length > 0 &&
                                                            product?.globalProductImage?.map((item, i) => (
                                                                <div className="ColorImg">
                                                                    <img
                                                                        src={product.globalProductImage?.length > 0 ? item.img : '/logo.png'}
                                                                        key={i}
                                                                        alt={product.productName}
                                                                    />
                                                                </div>
                                                            ))}
                                                    </div>
                                                </div>
                                                <div className="itemDetailinfoContainerRating">
                                                    <span>Rating: </span>
                                                    <span>⭐⭐⭐⭐</span> <br />
                                                </div>
                                            </div>
                                        </section>
                                        <hr />
                                        <section id="sec2">

                                            <div className="globalOffer">
                                                <h2 className="listName">offers</h2>
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
                                        <hr />
                                        <section id="sec3">
                                            <h2>Product details</h2>
                                            <ul>
                                                <li>IN THE BOX: 8-pack of 1.5 volt AA alkaline batteries for reliable performance across a wide range of devices</li><br />
                                                <li>DEVICE COMPATIBLE: Ideal battery for game controllers, toys, flashlights, digital cameras, clocks, and more</li><br />
                                                <li>DESIGNED TO LAST: 10-year leak-free shelf life; store for emergencies or use right away</li><br />
                                                <li>EASY USE & STORAGE: Ships in Certified Frustration-Free Packaging; easy to open and store extras for later use</li><br />
                                                <li>SINGLE USE: These batteries are NOT rechargeable; for rechargeable options, check out Amazon Basics rechargeable batteries</li><br />
                                            </ul>
                                        </section>
                                        <hr />
                                        <section id="sec4">
                                            <h2>Customers who viewed this also viewed</h2><br />
                                            <li>IN THE BOX: 8-pack of 1.5 volt AA alkaline batteries for reliable performance across a wide range of devices</li><br />
                                            <li>DEVICE COMPATIBLE: Ideal battery for game controllers, toys, flashlights, digital cameras, clocks, and more</li><br />
                                            <li>DESIGNED TO LAST: 10-year leak-free shelf life; store for emergencies or use right away</li><br />
                                            <li>EASY USE & STORAGE: Ships in Certified Frustration-Free Packaging; easy to open and store extras for later use</li><br />
                                            <li>SINGLE USE: These batteries are NOT rechargeable; for rechargeable options, check out Amazon Basics rechargeable batteries</li><br />
                                        </section>
                                        <hr />
                                        <section className="RelatedProductContainer">
                                            <div className="RelatedProductWrap">
                                                {product?.globalProductImage?.length > 0 &&
                                                    product?.globalProductImage?.map((item, i) => (
                                                        <div >
                                                            <img className="RelatedProductImg"
                                                                src={product.globalProductImage?.length > 0 ? item.img : '/logo.png'}
                                                                key={i}
                                                                alt={product.productName}
                                                            />
                                                            <div className="RelatedProductContainerName">
                                                                <span className="RelatedProductContainerNameTitle">{product.productName}</span><br />
                                                                <span className="amount">500$</span>
                                                                <span>⭐⭐⭐⭐</span> <br />
                                                            </div>
                                                        </div>

                                                    ))}
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                            {/* column 3 */}
                            <div className="column3">
                                <div className="contain__heading">
                                    <div className="contain__heading__location">
                                        {/* <input type="search" defaultValue="Ikeja"  className="sellerSearchBar"/> */}
                                    </div>
                                    <div className="sellersHeaderIcon">

                                        {/* <button onClick={() =>
                                        setIsOpen(true)}>seller</button>
                                        <Slider open={isOpen} 
                                        onClose={()=> setIsOpen(false)}/> */}

                                        <IoIosSearch size={20} onClick={() => clickHandler('search')} className="Icon" />
                                        
                                        <IoMenu size={20} onClick={() => clickHandler('navigate')} className="Icon" />
                                        <IoIosPeople size={20} onClick={() => toggleMenu()}
                                            className="Icon" />

                                        {/* <IoIosInformationCircleOutline size={23}/>
                    <IoIosClose size={23}/>  */}
                                        {/* <span>
                           {product.sellers.length === 1 ? (
                               <p>{product.sellers.length} seller in your location</p>
                           ) : product.sellers.length > 1 ? (
                               <p>{product.sellers.length} sellers in your location</p>
                           ) : (
                               <p>No seller is selling this product</p>
                               
                           )}{" "}
                       </span> */}
                                    </div>
                                </div>
                                <div>

                                    {/* <Slider /> */}
                                </div>
                                {loading ? 'Loading please wait' : display === 'sellers' ? <GlobalSellersTemplate
                                    data={product}
                                /> : display === 'filter' ? <FilterTemplate /> :
                                    display === 'navigate' && <NavigationTemplate />
                                }


                            </div>
                        </div>

                        <hr />
                        {/* <SlidingInfo /> */}

                        <div className="brandcategoryContainer">
                            <div className="brandcategoryName">
                                <h1>Brands in this category on Amazon</h1>
                            </div>
                            <div className="brandcategoryList">
                                {product?.globalProductImage?.length > 0 &&
                                    product?.globalProductImage?.map((item, i) => (

                                        <img className="brandcategoryImg"
                                            src={product.globalProductImage?.length > 0 ? item.img : '/logo.png'}
                                            key={i}
                                            alt={product.productName}
                                        />
                                    ))}
                            </div>
                        </div>



                        <div className="productDetailsContainer">
                            <div className="productDetailsContainerName">
                                <h2>Product information</h2>
                            </div>
                            <div className="productDetailsContainerWrap">
                                <div className="productDetailsList">
                                    <table className="productDetailsTable">
                                        <tr>
                                            <th> ASIN </th>
                                            <td > B098RKWHHZ </td>
                                        </tr>
                                        <tr>
                                            <th > Release date </th>
                                            <td > October 8, 2021 </td>
                                        </tr>
                                        <tr>
                                            <th > Product Dimensions </th>
                                            <td> 2.9 x 6.5 x 7.9 inches; 3.22 Pounds </td>
                                        </tr>
                                        <tr>
                                            <th > Binding </th>
                                            <td> Video Game </td>
                                        </tr>
                                        <tr>
                                            <th > Item model number </th>
                                            <td> HEGSKAAAA </td>
                                        </tr>
                                        <tr>
                                            <th > Item Weight </th>
                                            <td> 3.22 pounds </td>
                                        </tr>
                                        <tr>
                                            <th > Item Weight </th>
                                            <td> 3.22 pounds </td>
                                        </tr>
                                        <tr>
                                            <th > Item Weight </th>
                                            <td> 3.22 pounds </td>
                                        </tr>
                                        <tr>
                                            <th > Item Weight </th>
                                            <td> 3.22 pounds </td>
                                        </tr>
                                        <tr>
                                            <th > Date First Available </th>
                                            <td> July 1, 2021 </td>
                                        </tr>
                                    </table>

                                </div>
                            </div>

                        </div>

                    </div>
                )}
            </div>
        </div>
        </>
    );
}

export default ProductDetailsPage