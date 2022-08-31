import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    IoIosArrowDropdown, IoIosClose, IoIosInformationCircleOutline, IoIosShareAlt, IoIosSearch, IoIosPeople ,IoIosArrowBack,
IoIosArrowForward} from "react-icons/io";
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
import HorizontalScroll from "../../../comp-files/components/HorizontalScroll";


// import { Header } from "../Display/general";

const ProductDetailsPage = () => {
    const sidebar = useSelector((state) => state.sidebar);
    const [displayImage, setDisplayImage] = useState('')
    const [openSellers, setOpenSellers] = useState(false)
    const [openAvailableSellers, setOpenAvailableSellers] = useState(false)
    const product = products[0]
    const [relatedProductHTML, setRelatedProductHTML] = useState(null)
    const [brandCategoryHTML, setBrandCategoryHTML] = useState(null)
    const [compareContainerHTML, setCompareContainerHTML] = useState(null)
    const [dataHTMLClassName, setDataHTMLClassName] = useState('')
    const [relatedProductHTMLClassName, setRelatedProductHTMLClassName] = useState('')
    const relatedProductRef = useRef(null)
    const [brandCategoryHTMLClassName, setBrandCategoryHTMLClassName] = useState('')
    const [compareContainerHTMLClassName, setCompareContainerHTMLClassName] = useState('')
    const brandCategoryRef = useRef(null)
    const compareContainerRef = useRef(null)
    const [dataHTML, setDataHTML] = useState(null)
    const dataRef = useRef(null)
  useEffect(() => {
    setDataHTML(dataRef.current.offsetWidth)
      setDataHTMLClassName(dataRef.current)
  }, [dataRef])

    useEffect(() => { 
        setRelatedProductHTML(relatedProductRef.current.offsetWidth)
        setRelatedProductHTMLClassName(relatedProductRef.current)
        console.log(relatedProductRef.current)

        console.log(relatedProductRef)
    }, [relatedProductRef])

    useEffect(() => {
        setBrandCategoryHTML(brandCategoryRef.current.offsetWidth)
        setBrandCategoryHTMLClassName(brandCategoryRef.current)
        console.log(brandCategoryRef.current)

        console.log(brandCategoryRef)
    }, [brandCategoryRef])

    useEffect(() => {
        setCompareContainerHTML(compareContainerRef.current.offsetWidth)
        setCompareContainerHTMLClassName(compareContainerRef.current)
        console.log(compareContainerRef.current)

        console.log(compareContainerRef)
    }, [compareContainerRef])
    
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

    const closeSlidebar = () => {
        if (openAvailableSellers) {
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

    const changeImageHandler = (img)=>{
        setDisplayImage(img)
        console.log(img)
    } 

    
    // const scrollHorizontally = () => {
    //     brandCategoryRef.scrollBy(350, 0)
    //     console.log({ brandCategoryRef })
    // }
    // const scrollHorizontaly = () => {
    //     brandCategoryRef.scrollBy(-350, 0)
    // }


    return (
            <div className="productDetailsLayout"
                onClick={() => closeSlidebar()}
            >
                <SlideInNav {...slideInNavProps} />
                <div className="content">
                    {/* Here is the global product information */}
                    {product && (
                        <div className="productInfoContainer">
                            <div className="productInfoRow">
                                {/* column 1 */}

                                <div className="column1">
                                    <div className="productImageRow">
                                        <div className="big-img">
                                            <img
                                                src={displayImage ? displayImage : product?.globalProductImage.length > 0 ? 
                                                product.globalProductImage[0].img : '/logo.png'}
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
                                                        <img className="selectedContainerSmallImgScroll"
                                                            src={product.globalProductImage ? item.img : '/logo.png'}
                                                            key={i}
                                                            alt={product.productName}
                                                            onClick={() => changeImageHandler(item.img)}
                                                        />
                                                    ))}
                                           
                                        </div>
                                        </HorizontalScroll>
                                    </div>
                                </div>
                                <div className="column2">
                                    <div className="sectionWrap">
                                        {/* column 2 */}
                                        <div className="section2">
                                            <section id="sec1">
                                                <h2 className="productName">{product.productName}</h2><br />
                                                <div className="itemDetailinfoContainer">
                                                <div className="itemDetailinfoContainerButton">
                                                    <button >Add to Cart</button>
                                                <button onClick={() => toggleMenu()} >Select a seller</button>
                                                </div>
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
                                                        <span>Promo: </span><span className="amount"><span className='currency'>$</span>259.99</span>
                                                    </div>
                                                    <div className="itemDetailinfoContainerQuantity">In Stock</div>
                                                   
                                                    <div className="itemDetailinfoContainerColor">
                                                        <span>Color </span><br />
                                                        <div className="colorArray">
                                                            {product?.globalProductImage?.length > 0 &&
                                                                product?.globalProductImage?.map((item, i) => (
                                                                    <div className="colorImg" key={i}>
                                                                        <img
                                                                            src={product.globalProductImage?.length > 0 ? item.img : '/logo.png'}
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
                                                          <nav className="iconImg">⭐</nav>
                                                            <li className="listOffer">Bank Offer5% Cashback on Flipkart Axis Bank Card</li>
                                                        </span>
                                                        <span className="offerListIcon">
                                                         <nav className="iconImg">⭐</nav>
                                                            <li className="listOffer">Bank Offer5% Cashback on Flipkart Axis Bank Card</li>
                                                        </span>
                                                        <span className="offerListIcon">
                                                        <nav className="iconImg">⭐</nav>
                                                            <li className="listOffer">Bank Offer5% Cashback on Flipkart Axis Bank Card</li>
                                                        </span>
                                                        <span className="offerListIcon">
                                                             <nav className="iconImg">⭐</nav>
                                                            <li className="listOffer">Bank Offer5% Cashback on Flipkart Axis Bank Card</li>
                                                        </span>
                                                        <span className="offerListIcon">
                                                           <nav className="iconImg">⭐</nav>
                                                            <li className="listOffer">Bank Offer5% Cashback on Flipkart Axis Bank Card</li>
                                                        </span>
                                                        <span className="offerListIcon">
                                                             <nav className="iconImg">⭐</nav>
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
                                                <h2>Customers who viewed this also viewed</h2>
                                                <div className="sec4List">
                                                <li>IN THE BOX: 8-pack of 1.5 volt AA alkaline batteries for reliable performance across a wide range of devices</li><br />
                                                <li>DEVICE COMPATIBLE: Ideal battery for game controllers, toys, flashlights, digital cameras, clocks, and more</li><br />
                                                <li>DESIGNED TO LAST: 10-year leak-free shelf life; store for emergencies or use right away</li><br />
                                                <li>EASY USE & STORAGE: Ships in Certified Frustration-Free Packaging; easy to open and store extras for later use</li><br />
                                                <li>SINGLE USE: These batteries are NOT rechargeable; for rechargeable options, check out Amazon Basics rechargeable batteries</li><br />
                                            </div>
                                            </section>
                                            <hr />
                                            <HorizontalScroll height='29rem' width='100%' 
                                            reference1={relatedProductHTML}
                                            name={relatedProductHTMLClassName}
                                                data={product?.globalProductImage}
                                            >
                                                <div className="imageScroll" ref={relatedProductRef}>
                                                    {product?.globalProductImage?.length > 0 &&
                                                        product?.globalProductImage?.map((item, i) => (
                                                            <div key={i} className="tuna">
                                                                <img className="RelatedProductImg"
                                                                    src={product.globalProductImage?.length > 0 ? item.img : '/logo.png'}

                                                                    alt={product.productName}
                                                                />
                                                                <div className="RelatedProductContainerName">
                                                                    <span className="title">{product.productName}</span>
                                                                    <span className="amount">500$</span>
                                                                    <span>⭐⭐⭐⭐</span> <br />
                                                                </div>
                                                            </div>

                                                        ))}
                                                </div>
                                            </HorizontalScroll>
                                        <hr />
                                            <div className="BuyItWithContainer">
                                                <h2>Buy It with</h2>
                                            <div className="BuyItWithContainerImg">
                                                
                                                        <div className="" >
                                                            <img
                                                        src="https://m.media-amazon.com/images/I/71DDA+p+QqL._AC_SS450_.jpg"
                                                                 alt=''/>
                                                                 <span className="plus">+</span>
                                                            <img
                                                        src="https://images-na.ssl-images-amazon.com/images/I/61wJ747+kML._AC_UL116_SR116,116_.jpg"
                                                                alt=''
                                                          />
                                                          <span className="plus">+</span>
                                                            <img
                                                        src="https://images-na.ssl-images-amazon.com/images/I/71X-+ydMQLL._AC_UL116_SR116,116_.jpg"
                                                                alt=''
                                                            />
                                                        </div>
                                                        {/* ))} */}
                                                <div className="BuyItWithContainerTotal">
                                                    <h3>Total price:$294.97</h3>
                                                    <div className="itemDetailinfoContainerButton" >
                                                    <button>Add all 3 to Cart</button>
                                                        
                                                    </div> 
                                                        </div>
                                              </div>
                                              <form className="">
                                                <input type="checkbox" />
                                                    <label > This item: Apple Watch Series 6 (GPS, 44mm) - Space Gray Aluminum Case with Black Sport Band (Renewed)
                                                    $274.9</label><br /><br />
                                                <input type="checkbox" />
                                                    <label > Misxi 2 Pack Hard PC Case with Tempered Glass Screen Protector Compatible with Apple Watch SE Series 6 Series 5
                                                    $10.99</label><br /><br />
                                                <input type="checkbox" />
                                                    <label > Smiling Case Compatible with Apple Watch Series 6/SE/Series 5/Series 4 44mm with Built in Tempered Glass Screen
                                                    $8.99</label><br /><br />
                                              </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="brandcategoryContainer">
                                <div className="brandcategoryName">
                                    <h2>Brands in this category </h2>
                                </div>
                                <HorizontalScroll height='18rem' width='100%' 
                                reference1={brandCategoryHTML}
                                    name={brandCategoryHTMLClassName}
                                    data={product?.globalProductImage}
                                >
                                {/* <section className="brandcategoryList"> */}
                                    {/* <button className="btnScroll" 
                                    onClick={() => scrollHorizontally} 
                                    ><IoIosArrowBack /></button>
                                    <button className="btnScroll" 
                                    onClick={() => scrollHorizontaly}
                                    ><IoIosArrowForward /></button> */}
                                    <div className="imageScroll" ref={brandCategoryRef}>
                                    {product?.globalProductImage?.length > 0 &&
                                        product?.globalProductImage?.map((item, i) => (

                                            <img className="brandcategoryImgContainerItems"
                                                src={product.globalProductImage?.length > 0 ? item.img : '/logo.png'}
                                                key={i}
                                                alt={product.productName}
                                            />
                                        ))}
                                </div>
                                {/* </section> */}
                                </HorizontalScroll>
                            </div>
                        <hr />
                        <div className="compareContainer">
                            <h2>Compare with similar items</h2>
                            <HorizontalScroll height='42rem' width='100%'
                                reference1={compareContainerHTML}
                                name={compareContainerHTMLClassName}
                                data={product?.globalProductImage}
                            >
                                <div className="compareContainerWrap" ref={compareContainerRef}>
                                    {product?.compareImg?.length > 0 &&
                                        product?.compareImg?.map((item, i) => (
                                            <div className="compareContainerImg" key={i}>
                                                <div className="compareContainerImgDetails">
                                                    <img
                                                        src={product.compareImg?.length > 0 ? item.img : '/logo.png'}

                                                        alt={product.productName}
                                                    />
                                                    <div className="title">
                                                        <span >Apple Watch Series 6 (GPS, 44mm) - Blue Aluminum Case with Deep Navy Sport Band (Renewed)$</span> <br />
                                                    </div>
                                                </div>
                                                <div className="compareContainerTable">
                                                    <tbody className="compareContainerTableList">
                                                        <tr>
                                                            <th> Rating</th>
                                                            <td > ⭐⭐⭐⭐</td>
                                                        </tr>
                                                        <tr>
                                                            <th> Price</th>
                                                            <td > $269.99 </td>
                                                        </tr>
                                                        <tr>
                                                            <th> Sold By</th>
                                                            <td> Power Up Deals </td>
                                                        </tr>
                                                        <tr>
                                                            <th> Color</th>
                                                            <td> 	Blue </td>
                                                        </tr>
                                                        <tr>
                                                            <th> Compatible Phone Models</th>
                                                            <td> Samsung Galaxy S6 </td>
                                                        </tr>
                                                        <tr>
                                                            <th> Item Dimensions</th>
                                                            <td>7 x 4 x 5 inches </td>
                                                        </tr>
                                                        <tr>
                                                            <th> Operating System</th>
                                                            <td> watchOS</td>
                                                        </tr>
                                                    </tbody>
                                                </div>
                                            </div>

                                        ))}
                                </div>
                            </HorizontalScroll>
                        </div>
                        <HorizontalScroll height='29rem' width='100%'
                            reference1={relatedProductHTML}
                            name={relatedProductHTMLClassName}
                            data={product?.globalProductImage}
                        >
                            <div className="imageScroll" ref={relatedProductRef}>
                                {product?.globalProductImage?.length > 0 &&
                                    product?.globalProductImage?.map((item, i) => (
                                        <div key={i} className="tuna">
                                            <img className="RelatedProductImg"
                                                src={product.globalProductImage?.length > 0 ? item.img : '/logo.png'}

                                                alt={product.productName}
                                            />
                                            <div className="RelatedProductContainerName">
                                                <span className="title">{product.productName}</span>
                                            </div>
                                        </div>

                                    ))}
                            </div>
                        </HorizontalScroll>
                        <div className="brandcategoryContainer">
                            <div className="brandcategoryName">
                                <h2>Brands in this category </h2>
                            </div>
                            <HorizontalScroll height='18rem' width='100%'
                                reference1={brandCategoryHTML}
                                name={brandCategoryHTMLClassName}
                                data={product?.globalProductImage}
                            >
                                {/* <section className="brandcategoryList"> */}
                                {/* <button className="btnScroll" 
                                    onClick={() => scrollHorizontally} 
                                    ><IoIosArrowBack /></button>
                                    <button className="btnScroll" 
                                    onClick={() => scrollHorizontaly}
                                    ><IoIosArrowForward /></button> */}
                                <div className="imageScroll" ref={brandCategoryRef}>
                                    {product?.globalProductImage?.length > 0 &&
                                        product?.globalProductImage?.map((item, i) => (

                                            <img className="brandcategoryImgContainerItems"
                                                src={product.globalProductImage?.length > 0 ? item.img : '/logo.png'}
                                                key={i}
                                                alt={product.productName}
                                            />
                                        ))}
                                </div>
                                {/* </section> */}
                            </HorizontalScroll>
                        </div>
                        <div className="productReviewRow">
                            <div className="productDetailsContainer">
                                <div className="productDetailsContainerName">
                                    <h2>Product information</h2>
                                </div>

                            <div className="productDetailsContainerRow">
                                        <tbody className="productDetailsTable">
                                    <div className="productDetailsTableWrap">
                                            <tr >
                                                <th> ASIN </th>
                                                <td > B098RKWHHZ </td>
                                            </tr>
                                            <tr>
                                                <th > Release date </th>
                                                <td > July 31, 2022 </td>
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
                                                <td> August 1, 2022 </td>
                                            </tr>
                                    </div>
                                        </tbody>
                                
                            </div>
                                     
                            </div>
                             <div class="customerReview">
                                <div className="customerReviewName">
                                    <h2>Customer reviews</h2>
                                </div>
                                <div className="customerReviewWrap">
                               <div class="customerReviewStar">
                                    <span class="customerReviewStarTotal">5 star</span>
                                    <div class="customerReviewStarTotalProgressBar">
                                        <progress
                                            class="progressBar"
                                            max="100"
                                            value="100"
                                        ></progress>
                                   </div>
                                  <span class="customerReviewStarPercentage">+1m</span>
                              </div>

                    <div class="customerReviewStar">
                        <span class="customerReviewStarTotal">4 star</span>
                        <div class="customerReviewStarTotalProgressBar">
                        <progress
                            class="progressBar"
                            max="100"
                            value="80"
                        ></progress>
                        </div>
                        <span class="customerReviewStarPercentage">+100k</span>
                    </div>

                    <div class="customerReviewStar">
                        <span class="customerReviewStarTotal">3 star</span>
                        <div class="customerReviewStarTotalProgressBar">
                        <progress
                            class="progressBar"
                            max="100"
                            value="60"
                        ></progress>
                        </div>
                        <span class="customerReviewStarPercentage">+10k</span>
                    </div>

                    <div class="customerReviewStar">
                        <span class="customerReviewStarTotal">2 star</span>
                        <div class="customerReviewStarTotalProgressBar">
                        <progress
                            class="progressBar"
                            max="100"
                            value="40"
                        ></progress>
                        </div>
                        <span class="customerReviewStarPercentage">+1k</span>
                    </div>

                    <div class="customerReviewStar">
                        <span class="customerReviewStarTotal">1 star</span>
                        <div class="customerReviewStarTotalProgressBar">
                        <progress
                            class="progressBar"
                            max="100"
                            value="20"
                        ></progress>
                        </div>
                        <span class="customerReviewStarPercentage">+100</span>
                    </div>
                    </div>
                            </div>
                            <div class="customerReview">
                                <div className="customerReviewName">
                                    <h2>Seller reviews</h2>
                                </div>
                                <div className="customerReviewWrap">
                                    <div class="customerReviewStar">
                                        <span class="customerReviewStarTotal">5 star</span>
                                        <div class="customerReviewStarTotalProgressBar">
                                            <progress
                                                class="progressBar"
                                                max="100"
                                                value="100"
                                            ></progress>
                                        </div>
                                        <span class="customerReviewStarPercentage">+1m</span>
                                    </div>

                                    <div class="customerReviewStar">
                                        <span class="customerReviewStarTotal">4 star</span>
                                        <div class="customerReviewStarTotalProgressBar">
                                            <progress
                                                class="progressBar"
                                                max="100"
                                                value="80"
                                            ></progress>
                                        </div>
                                        <span class="customerReviewStarPercentage">+100k</span>
                                    </div>

                                    <div class="customerReviewStar">
                                        <span class="customerReviewStarTotal">3 star</span>
                                        <div class="customerReviewStarTotalProgressBar">
                                            <progress
                                                class="progressBar"
                                                max="100"
                                                value="60"
                                            ></progress>
                                        </div>
                                        <span class="customerReviewStarPercentage">+10k</span>
                                    </div>

                                    <div class="customerReviewStar">
                                        <span class="customerReviewStarTotal">2 star</span>
                                        <div class="customerReviewStarTotalProgressBar">
                                            <progress
                                                class="progressBar"
                                                max="100"
                                                value="40"
                                            ></progress>
                                        </div>
                                        <span class="customerReviewStarPercentage">+1k</span>
                                    </div>

                                    <div class="customerReviewStar">
                                        <span class="customerReviewStarTotal">1 star</span>
                                        <div class="customerReviewStarTotalProgressBar">
                                            <progress
                                                class="progressBar"
                                                max="100"
                                                value="20"
                                            ></progress>
                                        </div>
                                        <span class="customerReviewStarPercentage">+100</span>
                                    </div>
                                </div>
                            </div>
                       </div>
                      
                         </div>
                      
                       
                    )}
                </div>
            </div>
    );
}

export default ProductDetailsPage