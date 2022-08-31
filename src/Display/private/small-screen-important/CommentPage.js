import React, { useState, useRef } from 'react'
// import { productCard } from '../../utilities'
import '../../../comp-files/app-style/_commentPage.scss'
import {
    IoMdSend,
    IoMdArrowRoundBack,
    IoIosHeartEmpty,
    IoIosChatboxes
} from "react-icons/io";
import { TheAvatar } from '../../../comp-files/components';
import { Link } from 'react-router-dom';



const CommentPage = (props) => {
  const { open,  clickHandler, selected, refprop} = props
  const commentRef = useRef()
  console.table(props)
  const [addedComment, setAddedComment] = useState('')
  let comment = []
  const username = 'testing username'
  const data = {
    text: 'testing',
    sellers: 'someone',
comment: '23k',
views: 400,
rating: '56k',
  }
  const handleSubmit = e => {
    e.preventDefault()
    console.log(addedComment)
  }
  const backHandler = e => {
    e.preventDefault()
    
  }
  if(selected) refprop?.current?.scollIntoView({ behavior: "smooth", block: "start"})
  return (
   
      <div className='comment'>
        <div className='commentSideBar'>
               <div className='commentSideBarSection'>
                <div className='commentSideBarContainer'>
         <TheAvatar imgUrl='/profile.jpg' />
         < div className = 'commentSideBarContainerDetails' >

          <h3>John.Remi</h3>
          <button className='button-icon'>
          <nav className='notify'>< IoIosChatboxes size={20}/></nav>
          <small className='number'>50 </small>
         </button>
          <span className='commentSideBarContainerDetailsDate'> 8/8/22</span>
         
         </div>
         </div>
                  <div className='commentSideBarContainer'>
         <TheAvatar imgUrl='/profile.jpg' />
         < div className = 'commentSideBarContainerDetails' >

          <h3>John.Remi</h3>
          <p>< IoIosChatboxes size={30}/></p>
          <span className='commentSideBarContainerDetailsDate'> 8/8/22</span>
         
         </div>
         </div>
                  <div className='commentSideBarContainer'>
         <TheAvatar imgUrl='/profile.jpg' />
         < div className = 'commentSideBarContainerDetails' >

          <h3>John.Remi</h3>
          <p>john join</p>
          <span className='commentSideBarContainerDetailsDate'> 8/8/22</span>
         
         </div>
         </div>
                  <div className='commentSideBarContainer'>
         <TheAvatar imgUrl='/profile.jpg' />
         < div className = 'commentSideBarContainerDetails' >

          <h3>John.Remi</h3>
          <p>john join</p>
          <span className='commentSideBarContainerDetailsDate'> 8/8/22</span>
         
         </div>
         </div>

           <div className='commentSideBarContainer'>
         <TheAvatar imgUrl='/profile.jpg' />
         < div className = 'commentSideBarContainerDetails' >

          <h3>John.Remi</h3>
          <p>john join</p>
          <span className='commentSideBarContainerDetailsDate'> 8/8/22</span>
         
         </div>
         </div>

           <div className='commentSideBarContainer'>
         <TheAvatar imgUrl='/profile.jpg' />
         < div className = 'commentSideBarContainerDetails' >

          <h3>John.Remi</h3>
          <p>john join</p>
          <span className='commentSideBarContainerDetailsDate'> 8/8/22</span>
         
         </div>
         </div>

           <div className='commentSideBarContainer'>
         <TheAvatar imgUrl='/profile.jpg' />
         < div className = 'commentSideBarContainerDetails' >

          <h3>John.Remi</h3>
          <p>john join</p>
          <span className='commentSideBarContainerDetailsDate'> 8/8/22</span>
         
         </div>
         </div>

           <div className='commentSideBarContainer'>
         <TheAvatar imgUrl='/profile.jpg' />
         < div className = 'commentSideBarContainerDetails' >

          <h3>John.Remi</h3>
          <p>john join</p>
          <span className='commentSideBarContainerDetailsDate'> 8/8/22</span>
         
         </div>
         </div>

           <div className='commentSideBarContainer'>
         <TheAvatar imgUrl='/profile.jpg' />
         < div className = 'commentSideBarContainerDetails' >

          <h3>John.Remi</h3>
          <p>john join</p>
          <span className='commentSideBarContainerDetailsDate'> 8/8/22</span>
         
         </div>
         </div>
                  <div className='commentSideBarContainer'>
         <TheAvatar imgUrl='/profile.jpg' />
         < div className = 'commentSideBarContainerDetails' >

          <h3>John.Remi</h3>
          <p>This is the info</p>
          < IoIosChatboxes/>
          <span className='commentSideBarContainerDetailsDate'> 8/8/22</span>
         
         </div>
         </div>
         
               </div>
               </div>
               <div className='commentBody' ref= {commentRef}>
                
                   <div className='section'>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              < span > A text is a written or spoken passage,  </span>
                            <br />
                            <div className='muted'>
                            <span>2d</span>
                            <span><b> 1 Likes</b></span>
                            <span><b> 50 comment</b></span>
                            <span><b> Reply</b></span>
                            </div>
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div> 
                        </div>
                         <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              < span > A text is a written or spoken passage,A text is a written or spoken passage, especially one that is used in a school or university for discussion or in an examination. I'll read the text aloud .  </span>
                            <br />
                            <div className='muted'>
                            <span>2d</span>
                            <span><b> 1 Likes</b></span>
                            <span><b> 50 comment</b></span>
                            <span><b> Reply</b></span>
                            </div>
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div> 
                        </div>
                         <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              < span > A text is a written or spoken passage,A text is a written or spoken passage, especially one that is used in a school or university for discussion or in an examination. I'll read the text aloud .  </span>
                            <br />
                            <div className='muted'>
                            <span>2d</span>
                            <span><b> 1 Likes</b></span>
                            <span><b> 50 comment</b></span>
                            <span><b> Reply</b></span>
                            </div>
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div> 
                        </div>
                         <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              < span > A text is a written or spoken passage,A text is a written or spoken passage, especially one that is used in a school or university for discussion or in an examination. I'll read the text aloud .  </span>
                            <br />
                            <div className='muted'>
                            <span>2d</span>
                            <span><b> 1 Likes</b></span>
                            <span><b> 50 comment</b></span>
                            <span><b> Reply</b></span>
                            </div>
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div> 
                        </div>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              < span > A text is a written or spoken passage,A text is a written or spoken passage, especially one that is used in a school or university for discussion or in an examination. I'll read the text aloud .  </span>
                            <br />
                            <div className='muted'>
                            <span>2d</span>
                            <span><b> 1 Likes</b></span>
                            <span><b> 50 comment</b></span>
                            <span><b> Reply</b></span>
                            </div>
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div> 
                        </div>
                         <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              < span > A text is a written or spoken passage,A text is a written or spoken passage, especially one that is used in a school or university for discussion or in an examination. I'll read the text aloud .  </span>
                            <br />
                            <div className='muted'>
                            <span>2d</span>
                            <span><b> 1 Likes</b></span>
                            <span><b> 50 comment</b></span>
                            <span><b> Reply</b></span>
                            </div>
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div> 
                        </div>
                         <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              < span > A text is a written or spoken passage,A text is a written or   </span>
                            <br />
                            <div className='muted'>
                            <span>2d</span>
                            <span><b> 1 Likes</b></span>
                            <span><b>70 comment</b></span>
                            <span><b> Reply</b></span>
                            </div>
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div> 
                        </div>
                         <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              < span >A text is a written or spoken passage, especially one that is used in a school or university for discussion or in an examination.  </span>
                            <br />
                            <div className='muted'>
                            <span>2d</span>
                            <span><b> 1 Likes</b></span>
                            <span><b> 50 comment</b></span>
                            <span><b> Reply</b></span>
                            </div>
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div> 
                        </div>
                        {/* <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              <span> How u doing</span>
                            
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div>
                        </div>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              <span>Nice Product</span>
                            
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div>
                        </div>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              <span >Thank You</span>
                            
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div>
                        </div>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              <span>Its very affordable</span>
                            
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div>
                        </div>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              <span >Buy for me</span>
                            
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div>
                        </div>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              <span >How much?</span>
                            
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div>
                        </div>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              <span >just 50$</span>
                            
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div>
                        </div>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              <span >Thank You</span>
                            
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div>
                        </div>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              <span>Its very affordable</span>
                            
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div>
                        </div>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              <span >Buy for me</span>
                            
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div>
                        </div>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              <span >How much?</span>
                            
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div>
                        </div>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              <span >just 50$</span>
                            
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div>
                        </div>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              <span >Thank You</span>
                            
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div>
                        </div>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              <span>Its very affordable</span>
                            
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div>
                        </div>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              <span >Buy for me</span>
                            
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div>
                        </div>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              <span >How much?</span>
                            
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div>
                        </div>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              <span >just 50$</span>
                            
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div>
                        </div>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              <span >Thank You</span>
                            
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div>
                        </div>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              <span>Its very affordable</span>
                            
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div>
                        </div>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              <span >Buy for me</span>
                            
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div>
                        </div>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              <span >How much?</span>
                            
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div>
                        </div>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              <span >just 50$</span>
                            
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div>
                        </div>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              <span >Thank You</span>
                            
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div>
                        </div>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              <span>Its very affordable</span>
                            
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div>
                        </div>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              <span >Buy for me</span>
                            
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div>
                        </div>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              <span >How much?</span>
                            
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div>
                        </div>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              <span >just 50$</span>
                            
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div>
                        </div>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              <span >Thank You</span>
                            
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div>
                        </div>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              <span>Its very affordable</span>
                            
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div>
                        </div>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              <span >Buy for me</span>
                            
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div>
                        </div>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              <span >How much?</span>
                            
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div>
                        </div>
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              <span>just 50$</span>
                            <br />
                            <div className='muted'>
                              <span>2d</span>
                              <b>Reply</b>
                              <b>Like</b>
                            </div>
                          </div>
                          <div className='commentLikeIcon'>
                              <IoIosHeartEmpty />
                          </div>
                        </div> */}
                   </div>
                   < div className = 'commentFooter'
              onSubmit = {
                handleSubmit
              } >
                <TheAvatar link={username} imgUrl='/profile.jpg' />
                <input 
                  className='textarea' 
                  type="text" 
                  onChange={(e) => setAddedComment(e.target.value)}
                  placeholder="Add comments" 
                  onFocus={() => console.log('test')}
                  />
                <nav className='SubmitIcon'>
                  <IoMdSend className='sendIcon' size={30} />
                </nav>
                   </div>
               </div>
             
      </div>
     
      
 )
 }
{/* <div className='fgh'>
<div className = 'comment' >
        <div className = 'commentHeader'onMouseUp = {clickHandler} >
      
              <form className = 'subHeader'onSubmit = { handleSubmit} >
                  <TheAvatar link = {username} imgUrl = '/profile.jpg' />
                  <input className = 'textarea' type = "text" 
                  onChange = { (e) => setAddedComment(e.target.value)}
                  placeholder = "Add comments"
                  onFocus = {() => console.log('test')}
                  /> 
                  <nav className = 'SubmitIcon' >
                 <IoMdSend className = 'sendIcon' size = {30}
                 /> 
                 </nav> 
            </form> 
      </div> 
      <div className = 'commentBody' ref = {commentRef } >
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='addedComment'>{addedComment }</span>
        
      </div>


</div>
<div className = 'comment' >
        <div className = 'commentHeader'onMouseUp = {clickHandler} >
      
              <form className = 'subHeader'onSubmit = { handleSubmit} >
                  <TheAvatar link = {username} imgUrl = '/profile.jpg' />
                  <input className = 'textarea' type = "text" 
                  onChange = { (e) => setAddedComment(e.target.value)}
                  placeholder = "Add comments"
                  onFocus = {() => console.log('test')}
                  /> 
                  <nav className = 'SubmitIcon' >
                 <IoMdSend className = 'sendIcon' size = {30}
                 /> 
                 </nav> 
            </form> 
      </div> 
      <div className = 'commentBody' ref = {commentRef } >
         <div className='img'>
               <TheAvatar imgUrl='/profile.jpg' />
            </div>
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='addedComment'>{addedComment }</span>
        
      </div>


</div>
<div className = 'comment' >
        <div className = 'commentHeader'onMouseUp = {clickHandler} >
      
              <form className = 'subHeader'onSubmit = { handleSubmit} >
                  <TheAvatar link = {username} imgUrl = '/profile.jpg' />
                  <input className = 'textarea' type = "text" 
                  onChange = { (e) => setAddedComment(e.target.value)}
                  placeholder = "Add comments"
                  onFocus = {() => console.log('test')}
                  /> 
                  <nav className = 'SubmitIcon' >
                 <IoMdSend className = 'sendIcon' size = {30}
                 /> 
                 </nav> 
            </form> 
      </div> 
      <div className = 'commentBody' ref = {commentRef } >
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='description'><b>{data.text}</b></span><br />
          <span className ='addedComment'>{addedComment }</span>
        
      </div>


</div>
</div> */}
 

export default CommentPage
