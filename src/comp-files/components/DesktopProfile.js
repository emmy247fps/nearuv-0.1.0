import React from 'react'
import "../app-style/_desktopProfile.scss";
import { IoMdGrid } from "react-icons/io";
import {
  MdOutlineVideoLibrary,
  MdOutlineExplore,
  MdOutlineShop,
} from "react-icons/md";


const DesktopProfile = () => {
  return (
    <div className='DesktopProfile'>
    
      <div className="profileContainerImage">
        <img
          src="https://i.pinimg.com/564x/fe/16/95/fe1695c7fdfc953aef89ce9f7b5d11c0.jpg"
          alt="perry"
          
        />
      </div>
      <div className="">
        <div className="col1">
          <div class="profile-stats">
            <div>
              <li>
                <span class="profile-stat-count">164</span> posts
              </li>
              <li>
                <span class="profile-stat-count">188</span> followers
              </li>
              <li>
                <span class="profile-stat-count">206</span> following
              </li>
            </div>
            <div class="profile-bio">
              <span class="profile-real-name">Jane Doe</span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️
              </p>
            </div>
           
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesktopProfile