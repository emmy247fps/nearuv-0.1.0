import React, { memo, useState } from "react";
import "../../comp-files/app-style/_slideInNav.scss";
import { useDispatch, useSelector } from "react-redux";
import { sidebarAction } from "../../redux/actions";
import GlobalSellersTemplate from "../templates/productDetailsPageTemplates/GlobalSellersTemplate";


const SlideInNav = ({open, setOpen, data, position}) => {
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.sidebar);
 
  const handleNavItem = (active, content) => {
    if (open) dispatch(sidebarAction(false));
  };
  // dummy data;
  console.log(data)
  const GlobalSellersTemplateProps = {
    data:data,
    setOpen: setOpen
  }
  return (
    <div
      className={open ? "sidebarContainer" : 
        !open && position === 'left' ? "sidebarContainer closeSidebarLeft" :
        !open && position === 'top' ? "sidebarContainer closeSidebarTop" :
        !open && position === 'right' ? "sidebarContainer closeSidebarRight" :
        !open && position === 'bottom' && "sidebarContainer closeSidebarBottom" 
      }
    >
      <GlobalSellersTemplate {...GlobalSellersTemplateProps}  />
    </div>
  );
};
export default memo(SlideInNav)