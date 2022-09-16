import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  IoIosArrowDropdown,
  IoIosClose,
  IoIosInformationCircleOutline,
  IoIosShareAlt,
  IoIosSearch,
  IoIosPeople,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
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
import { MobileProductListPage } from "../../private";

// import { Header } from "../Display/general";

const ProductDetailsPage = () => {
  const sidebar = useSelector((state) => state.sidebar);
  const [displayImage, setDisplayImage] = useState("");
  const [openSellers, setOpenSellers] = useState(false);
  const [openAvailableSellers, setOpenAvailableSellers] = useState(false);
  const product = products[0];
  const [relatedProductHTML, setRelatedProductHTML] = useState(null);
  const [brandCategoryHTML, setBrandCategoryHTML] = useState(null);
  const [compareContainerHTML, setCompareContainerHTML] = useState(null);
  const [dataHTMLClassName, setDataHTMLClassName] = useState("");
  const [relatedProductHTMLClassName, setRelatedProductHTMLClassName] =
    useState("");
  const relatedProductRef = useRef(null);
  const [brandCategoryHTMLClassName, setBrandCategoryHTMLClassName] =
    useState("");
  const [compareContainerHTMLClassName, setCompareContainerHTMLClassName] =
    useState("");
  const brandCategoryRef = useRef(null);
  const compareContainerRef = useRef(null);
  const [dataHTML, setDataHTML] = useState(null);
  const dataRef = useRef(null);
  useEffect(() => {
    setDataHTML(dataRef.current.offsetWidth);
    setDataHTMLClassName(dataRef.current);
  }, [dataRef]);

  useEffect(() => {
    setRelatedProductHTML(relatedProductRef.current.offsetWidth);
    setRelatedProductHTMLClassName(relatedProductRef.current);
    console.log(relatedProductRef.current);

    console.log(relatedProductRef);
  }, [relatedProductRef]);

  useEffect(() => {
    setBrandCategoryHTML(brandCategoryRef.current.offsetWidth);
    setBrandCategoryHTMLClassName(brandCategoryRef.current);
    console.log(brandCategoryRef.current);

    console.log(brandCategoryRef);
  }, [brandCategoryRef]);

//   useEffect(() => {
//     setCompareContainerHTML(compareContainerRef.current.offsetWidth);
//     setCompareContainerHTMLClassName(compareContainerRef.current);
//     console.log(compareContainerRef.current);

//     console.log(compareContainerRef);
//   }, [compareContainerRef]);

//   const toggleMenu = () => {
//     setOpenAvailableSellers(!openAvailableSellers);
//   };
//   const closeSubMenu = () => {
//     dispatch(sidebarAction(false));
//     // dispatch(sideMenuContentAction(false));
//   };

//   const dispatch = useDispatch();
//   const { display, loading } = useSelector((state) => state.pDTemplateSwitch);

//   const clickHandler = (info) => {
//     dispatch(pDTemplateSwitch(info));
//   };
//   const { isOpen, setIsOpen } = useState(false);

//   const closeSlidebar = () => {
//     if (openAvailableSellers) {
//       setOpenAvailableSellers(false);
//     }
//   };
//   const [sideBar, setSideBar] = useState(false);

//   const toggleSidebar = () => {
//     setSideBar((prevState) => !prevState);
//   };
//   const slideInNavProps = {
//     open: openAvailableSellers,
//     setOpen: setOpenAvailableSellers,
//     position: "right",
//     data: product.sellers,
//   };

//   const changeImageHandler = (img) => {
//     setDisplayImage(img);
//     console.log(img);
//   };

 

  return (
    <div className="productDetailsLayout" >
      {/* <SlideInNav {...slideInNavProps} /> */}
   hhdfjjdfij
    </div>
  );
};

export default ProductDetailsPage;
