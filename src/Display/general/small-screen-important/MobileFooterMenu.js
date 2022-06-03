import React from 'react';
import { Link } from "react-router-dom"
import "../../../comp-files/app-style/_mobileFooterMenu.scss"

import { MdNotifications, MdApps } from "react-icons/md";
import { IoIosBasket, IoIosHome, IoMdGift, IoMdSearch } from "react-icons/io";
import TheAvatar from '../../../comp-files/components/TheAvatar';
import IconAvatar from '../../../comp-files/components/IconAvatar';

const MobileFooterMenu = () => {

  const leftFooter = [
    {
      icon: IoIosHome,
      toolTip: "Home",
      className: "footer__icons__home",
      size: 24,
      link: ""
    },
    {
      icon: IoMdSearch,
      toolTip: "Search",
      className: "footer__icons__search",
      size: 24,
      link: "search"
    }
  ];

  return (
    <div className="footer__icons footer">
      {leftFooter.map((item, i)=>
        <IconAvatar
        link ={item.link}
        key={i}
        >
          <item.icon className={item.className} size={item.size} style={{margin: '0 12.5px'}} />
        </IconAvatar>
      )}
      
      <IconAvatar
        link ={"cart"}
        >
          <IoIosBasket className="footer__icons__basket" size={42} />
        </IconAvatar>

      <IconAvatar
        link ={"gift"}
        >
          <IoMdGift className="footer__icons__gift" size={24} style={{margin: '0 12.5px'}}  />
        </IconAvatar>

      <TheAvatar
        link={'profile'}
        imgUrl={"/profile.jpg"}
      />
      
    </div>
  )
};

export default MobileFooterMenu;


{/* <TheAvatar className='profileImg' link={item.username} imgUrl={item.profilePicture} /> */ }