import React, { useState, useEffect, createRef } from "react";
import "../../../comp-files/app-style/_home.scss";
// import "../../../comp-files/app-style/_mobileCategoryMenu.scss";
import "../../../comp-files/app-style/_video.scss";
import { useDispatch } from "react-redux";
import { clickedVideos } from "../../../redux/actions/video.actions";
import { Link, useLinkClickHandler, useNavigate } from 'react-router-dom'
import { productCard } from '../../../utilities'
import CardHeader from "../../../comp-files/hoc/CardHeader";
import { useLocation } from 'react-router-dom'
import Status from "../../../comp-files/components/Status";
// import CommentPage from "../../private/small-screen-important/CommentPage";
import { TheAvatar } from "../../../comp-files/components";
import { IoMdPlay, IoIosCafe, IoIosChatbubbles,IoIosPeople, IoIosCheckmarkCircleOutline } from "react-icons/io";
import { CommentPage } from "../../private";



const Home = (props) => {
  console.log(props)
  const [open, setOpen] = useState(false)
  const [data, setData] = useState({})
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const history = useLocation()
  console.log(navigate, history)
  const toggle = (values) => {
    dispatch(clickedVideos(values));
  };
  const [elRefs, setElRefs] = useState([])
  // const [loading, setLoading] = useState(false)
  // const histroy = useLocation();

  const handleClick = (x) => {
    console.log(x);
    setData(x)
    setOpen(true)
  }
  const clickHandler = () => {
    if (open === true) { setOpen(false) }
  }
useEffect(() => {
 const refs = Array(productCard.length).fill().map((_, i)=> elRefs[i] || createRef());

 setElRefs(refs);
}, [productCard]);



  return (
    <>
      <Status
        className='status' />

      {/* <CommentPage
        clickHandler={() => clickHandler()}
        data={data}
        open={open} /> */}

      <div className='homeContainer' >

        {productCard?.map((item, i) => (
            <Link to={`/ProductCard/:slug`} key={i}>
          <div className="homeContainerItems" >
            <img src={item.img} style={{ width: "100%" }} 
             className="homeContainerItemsImage" />
            {/* <div className="videoIcon">
            <IoMdPlay className="playIcon" size={45} />
            </div> */}

            <div className='overlay'>
              <div className='cardHeaderDesktopView'>
                <TheAvatar link={item.username} imgUrl={item.profilePicture} />
                <div className="id">
                  <span className='userName'>simplydigital</span>
                  <div className="iconP" >
                    <IoIosPeople size={15} />
                    <div className="numFollowers"><b>24k</b></div>
                    
                    {/* <div className='rating'><b>R</b>:{item.rating}</div> */}
                  </div>
                </div>
                <Link ref={elRefs[i]} to={`/comment/:slug`} className="mobileIcon">
                  <IoIosChatbubbles size={23} 
                  // selected= {Number(childClicked) == i}
                  refprop={elRefs[i]}/>
                </Link>
            

              </div>
             
              <div className="info">
                <span className='overlayText'>{item.text}</span>
              </div>
               {/* icon for mobile view only */}
            </div>
          </div>
            </Link> 

        ))
        }
      </div>

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
