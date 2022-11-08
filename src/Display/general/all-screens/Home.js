import React, { useState } from "react";
import "../../../comp-files/app-style/_home.scss";
// import "../../../comp-files/app-style/_mobileCategoryMenu.scss";
import "../../../comp-files/app-style/_video.scss";
import { useDispatch } from "react-redux";
// import { clickedVideos } from "../../../redux/actions/video.actions";
import { Link, useNavigate } from 'react-router-dom'
import { productCard } from '../../../utilities'
import { useLocation } from 'react-router-dom'
import Status from "../../../comp-files/components/Status";
// import CommentPage from "../../private/small-screen-important/CommentPage";
import { TheAvatar } from "../../../comp-files/components";
import { IoIosChatbubbles, IoIosPeople, } from "react-icons/io";
import { ItemsTemplate } from "../../../comp-files";




const Home = () => {
  // console.log(props)
  const [open, setOpen] = useState(false)
  const [data, setData] = useState({})
  const dispatch = useDispatch();
  const navigate = useNavigate()
 
  // const toggle = (values) => {
  //   dispatch(clickedVideos(values));
  // };
  // const [elRefs, setElRefs] = useState([])
  // const [loading, setLoading] = useState(false)
  // const histroy = useLocation();

  // const handleClick = (x) => {
  //   console.log(x);
  //   setData(x)
  //   setOpen(true)
  // }
  // const clickHandler = () => {
  //   if (open === true) { setOpen(false) }
  // }
  // useEffect(() => {
  //  const refs = Array(productCard.length).fill().map((_, i)=> elRefs[i] || createRef());

  //  setElRefs(refs);
  // }, [productCard]);


  const itemClickedHandler =(link)=>{
    navigate(link)
  }
  const chatIconHandler =(link)=>{
    navigate(link)
  }
  
  return (
    <>
      {/* <Status className='status' /> */}

      <ItemsTemplate 
       data = {productCard}
       type = 'item'
       mobileIconClick = {()=>chatIconHandler(`/comment`)}
        />
      {/* <div className='homeContainer' >
        {productCard?.map((item, i) => (
          <div className="homeContainerItems" key={i} onClick={()=>itemClickedHandler(`/description/${item.slug}/${item.name}`)}>
            <img alt={item.username} src={item.img} style={{ width: "100%" }} className="homeContainerItemsImage" />
            <div className='overlay'>
              <div className='cardHeaderDesktopView'>
                <TheAvatar link={item.username} imgUrl={item.profilePicture} />
                <div className="id">
                  <span className='userName'>{item.username}</span>
                  <div className="iconP" >
                    <IoIosPeople size={15} />
                    <div className="numFollowers"><b>{item.followers}k</b></div>
                  </div>
                </div>
                <IoIosChatbubbles className="mobileIcon" size={23} onClick={()=>chatIconHandler(`/comment`)} />
              </div>
              <div className="info">
                <span className='overlayText'>{item.description}</span>
              </div>
            </div>
          </div>
        ))
        }
      </div> */}

      {/* <SlidingInfo
        clickHandler={() => clickHandler()}
        data={data}
        open={open} /> */}





      {/* <ProductCard /> */}
      {/* <SubHeader />
      <Container
      //  className={
      //     toggleSidebar || toggleVideoCanvasPlayer
      //       ? // || toggleMobileMenu
      //         "content__area close"
      //       : "content__area"
      //   }
        className ="content__area"
       
      >
        <Row>
          {videos.map((values, i) => (
            <Col lg={3} md={4} sm={2} xs={1} key={i}>
              <div className="video__channel">
                <img src={values.profilePicture} alt={values.profileName} />
                <p>{values.profileName}</p>
              </div>
              <VideoComponent
                onClick={() => toggle(values)}
                classNameContainer="video"
                classNameVideoTop="video__top"
                videoSource={values.content}
                alt={values.contentTitle}
                videoTime={values.time}
              >
                <div className="video__title">{values.contentTitle}</div>
                <div className="video__details">
                  <span>
                    <AiFillEye /> {values.views}{" "}
                  </span>
                  <span>{values.uploadTime}</span>
                </div>
              </VideoComponent>
            </Col>
          ))}
        </Row>
      </Container> */}
    </>
  );
};

export default Home;
