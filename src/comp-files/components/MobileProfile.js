import React from "react";
import "../app-style/_mobileProfile.scss";
import { IoMdGrid } from "react-icons/io";
import {
  MdOutlineVideoLibrary,
  MdOutlineExplore,
  MdOutlineShop,
} from "react-icons/md";

const MobileProfile = () => {
  return (
    <div className="profileContainer">
      <div className="profileContainerImage">
        <img
          src="https://i.pinimg.com/564x/fe/16/95/fe1695c7fdfc953aef89ce9f7b5d11c0.jpg"
          alt="perry"
          
        />
      </div>
      <div className="profileContainerDetails">
        <div className="col1">
          <div class="profile-stats">
            <ul>
              <li>
                <span class="profile-stat-count">164</span> posts
              </li>
              <li>
                <span class="profile-stat-count">188</span> followers
              </li>
              <li>
                <span class="profile-stat-count">206</span> following
              </li>
            </ul>
            <div class="profile-bio">
              <span class="profile-real-name">Jane Doe</span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️
              </p>
            </div>
            <div className="profileIcon">
              <IoMdGrid size={30} />
              <MdOutlineVideoLibrary size={30} />
              <MdOutlineExplore size={30} />
              <MdOutlineShop size={30} />
            </div>
            <div className="profileGrid">
              <div>
                <img
                  src="https://observer.com/wp-content/uploads/sites/2/2017/03/c6qa1mmwcaelrfk.jpg?quality=80&w=1200&strip"
                  alt=""
                />
                <img
                  src="https://www.bellanaija.com/wp-content/uploads/2022/01/271692703_249792950622781_8820093464004144355_n.jpg"
                  alt=""
                />{" "}
                <img
                  src="https://guardian.ng/wp-content/uploads/2021/09/240944433_110593068016775_5713504258986737220_n-3.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Alex_Telles_2021.jpg/800px-Alex_Telles_2021.jpg"
                  alt=""
                />
                <img
                  src="https://guardian.ng/wp-content/uploads/2021/09/78937464_850584902026570_6936442964674855449_n-1.jpg"
                  alt=""
                />{" "}
                <img
                  src="https://www.naijanews.com/wp-content/uploads/2022/06/Davido-Songs-Lyrics.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://dailytrust.com/_next/image?url=https%3A%2F%2Fcms.dailytrust.com.ng%2Fwp-content%2Fuploads%2F2022%2F01%2FDavido-1.jpg&w=1200&q=75"
                  alt=""
                />
                <img
                  src="https://www.nme.com/wp-content/uploads/2020/08/Burna-Boy-2020-Press-Image-Nicolas-Gerardin-696x442.jpg"
                  alt=""
                />{" "}
                <img
                  src="https://naijalebrity.com/photos/naijalebrity_XgacS9i5NWTzfKARtNhNfAKG/Tiwa%20Savage%201.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileProfile;
