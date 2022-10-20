import {useState} from "react";
import "../app-style/_desktopProfile.scss";
import { IoMdGrid } from "react-icons/io";
import { profilePage } from "../../utilities"
import {
  MdOutlineVideoLibrary,
  MdOutlineExplore,
  MdOutlineShop,
  MdVerified,
} from "react-icons/md";

const DesktopProfile = () => {
  const [pageView, setPageView] = useState('Pictures');

  const iconHandler =(info)=>{
    setPageView(info)
  }
  return (
    <div className="DesktopProfile">
      <div className="DesktopProfileContainer">
        <div className="DesktopProfileContainerSection1">
          <div className="DesktopProfileContainerImage">
            <div className="DesktopProfileContainerImagewrap"> 
              <img
                src="http://www.christembassycanada.org/uploads/1/7/4/5/17455559/pastor-2_2_orig.jpg"
                alt="perry"
              />
            </div>
            <nav>
              <span className="profileRealName">Jane Doe</span>
              <MdVerified />
            </nav>
            <ul className="profileStatsContainer">
              <li>
                <span className="profileStatCount">164</span> posts
              </li>
              <li>
                <span className="profileStatCount">188</span> followers
              </li>
              <li>
                <span className="profileStatCount">206</span> following
              </li>
            </ul>
          </div>
        </div>
        
        <div className="DesktopProfileContainerSection2">
            <div className="friendSugest">
            {profilePage.profileStatusImg.map((item, index)=>
             <div key={index} className="friendSugestWrap">
              <div className="friendSugestItem">
                <img
                  src={item.img}
                  alt=""
                />
                <span className="friendSugestTitle">{item.name}</span>
                <button>follow</button>
              </div>
            </div>
            )}
          </div>
          <div className="ProfileStatus">
            {profilePage.profileStatusImg.map((item, index)=>
             <div key={index} className="ProfileStatusWrap">
              <div className="ProfileStatusItem">
                <img
                  src={item.img}
                  alt=""
                />
                <span className="ProfileStatusTitle">{item.name}</span>
              </div>
            </div>
            )}
          </div>

          <div className="profileIconContainer">
            <div className="profileBio">
              <p>{pageView}</p>
            </div>
             <div className="profileIcon">
             <IoMdGrid size={30} onClick={()=> iconHandler('Pictures')} />
            <MdOutlineVideoLibrary size={30} onClick={()=> iconHandler('Videos')} />
            <MdOutlineExplore size={30} onClick={()=> iconHandler('Explore')} />
            <MdOutlineShop size={30} onClick={()=> iconHandler('Store')} />
            </div>
           
          </div>
          
          <div className="profileGrid" >
            {profilePage.postImages.map((item, index)=>
            <div key={index} className="profileGridImg">
              <img
                src={item.img}
                alt="status images"
              />
            </div>)}
          </div>

        </div>
      </div>
    </div>
  );
};

export default DesktopProfile;
