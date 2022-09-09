import React, { useState, useRef } from 'react'
// import { productCard } from '../../utilities'
import '../../../comp-files/app-style/_commentPage.scss'
import {
    IoMdSend,
    IoMdArrowRoundBack,
    IoIosHeartEmpty,
    IoIosChatboxes
} from "react-icons/io";
import {AiFillLike, AiFillDislike} from "react-icons/ai";
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
          <nav className='notify'>
          < IoIosChatboxes size={20}/>
          <small className='number'>50 </small>
           </nav>
          <span className='commentSideBarContainerDetailsDate'> 8/8/22</span>
         
         </div>
         </div>
                  <div className='commentSideBarContainer'>
         <TheAvatar imgUrl='/profile.jpg' />
         < div className = 'commentSideBarContainerDetails' >

          <h3>John.Remi</h3>
          <nav className='notify'>
          < IoIosChatboxes size={20}/>
          <small className='number'>50 </small>
         </nav>
          <span className='commentSideBarContainerDetailsDate'> 8/8/22</span>
         
         </div>
         </div>
                  <div className='commentSideBarContainer'>
         <TheAvatar imgUrl='/profile.jpg' />
         < div className = 'commentSideBarContainerDetails' >

          <h3>John.Remi</h3>
          <nav className='notify'>
          < IoIosChatboxes size={20}/>
          <small className='number'>50 </small>
         </nav>
          <span className='commentSideBarContainerDetailsDate'> 8/8/22</span>
         
         </div>
         </div>
                  <div className='commentSideBarContainer'>
         <TheAvatar imgUrl='/profile.jpg' />
         < div className = 'commentSideBarContainerDetails' >

          <h3>John.Remi</h3>
          <nav className='notify'>
          < IoIosChatboxes size={20}/>
          <small className='number'>50 </small>
         </nav>
          <span className='commentSideBarContainerDetailsDate'> 8/8/22</span>
         
         </div>
         </div>

           <div className='commentSideBarContainer'>
         <TheAvatar imgUrl='/profile.jpg' />
         < div className = 'commentSideBarContainerDetails' >

          <h3>John.Remi</h3>
          <nav className='notify'>
          < IoIosChatboxes size={20}/>
          <small className='number'>50 </small>
         </nav>
          <span className='commentSideBarContainerDetailsDate'> 8/8/22</span>
         
         </div>
         </div>

           <div className='commentSideBarContainer'>
         <TheAvatar imgUrl='/profile.jpg' />
         < div className = 'commentSideBarContainerDetails' >

          <h3>John.Remi</h3>
          <nav className='notify'>
          < IoIosChatboxes size={20}/>
          <small className='number'>50 </small>
         </nav>
          <span className='commentSideBarContainerDetailsDate'> 8/8/22</span>
         
         </div>
         </div>

           <div className='commentSideBarContainer'>
         <TheAvatar imgUrl='/profile.jpg' />
         < div className = 'commentSideBarContainerDetails' >

          <h3>John.Remi</h3>
          <nav className='notify'>
          < IoIosChatboxes size={20}/>
          <small className='number'>50 </small>
         </nav>
          <span className='commentSideBarContainerDetailsDate'> 8/8/22</span>
         
         </div>
         </div>

           <div className='commentSideBarContainer'>
         <TheAvatar imgUrl='/profile.jpg' />
         < div className = 'commentSideBarContainerDetails' >

          <h3>John.Remi</h3>
          <nav className='notify'>
          < IoIosChatboxes size={20}/>
          <small className='number'>50 </small>
         </nav>
          <span className='commentSideBarContainerDetailsDate'> 8/8/22</span>
         
         </div>
         </div>

           <div className='commentSideBarContainer'>
         <TheAvatar imgUrl='/profile.jpg' />
         < div className = 'commentSideBarContainerDetails' >

          <h3>John.Remi</h3>
          <nav className='notify'>
          < IoIosChatboxes size={20}/>
          <small className='number'>50 </small>
         </nav>
          <span className='commentSideBarContainerDetailsDate'> 8/8/22</span>
         
         </div>
         </div>
                  <div className='commentSideBarContainer'>
         <TheAvatar imgUrl='/profile.jpg' />
         < div className = 'commentSideBarContainerDetails' >

          <h3>John.Remi</h3>
          <nav className='notify'>
          < IoIosChatboxes size={20}/>
          <small className='number'>50 </small>
         </nav>
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
                        
                            <div className='commentWrap'>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              < span > A text is a written or spoken passage,  </span>
                            <br />
                            <div className='muted'>
                            <span>just now</span>
                            <span><b> Reply</b></span>
                            </div>
                          </div>
                          
                          <div className='commentLikeIcon'>
                               <nav className='notify'>
                              <AiFillLike size={20}/>
                              <small className='number'>50 </small>
                            </nav>
                              
                              <nav className='notify'>
                              <AiFillDislike size={20}/>
                              <small className='number'>50 </small>
                            </nav>
                              <nav className='notify'>
                              <nav className='notify'>< IoIosChatboxes size={20}/></nav>
                              <small className='number'>50 </small>
                            </nav>
                          </div> 
                          </div> 
                        </div>
                         <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentWrap'>
                           
                          <div className='commentNote'>
                              <span >John.Remi </span>
                              < span > A text is a written or spoken passage, A text is a written or spoken passage, especially one that is used in a school or university
                              for discussion or in an examination.I 'll read the text aloud . </span>
                            <br />
                            <div className='muted'>
                            <span>2 minute ago</span>
                            <span><b> Reply</b></span>
                            </div>
                          </div>
                           <div className='commentLikeIcon'>
                               <nav className='notify'>
                              <nav className='notify'><AiFillLike size={20}/></nav>
                              <small className='number'>50 </small>
                            </nav>
                              
                              <nav className='notify'>
                              <AiFillDislike size={20}/>
                              <small className='number'>50 </small>
                            </nav>
                              <nav className='notify'>
                              <nav className='notify'>< IoIosChatboxes size={20}/></nav>
                              <small className='number'>50 </small>
                            </nav>
                          </div> 
                          </div> 
                        </div>
                         <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentWrap'>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              < span > A text is a written or spoken passage,A text is a written or spoken passage, especially one that is used in a school or university for discussion or in an examination. I'll read the text aloud .  </span>
                            <br />
                            <div className='muted'>
                            <span>5 minute ago</span>
                            <span><b> Reply</b></span>
                            </div>
                          </div>
                          <div className='commentLikeIcon'>
                               <nav className='notify'>
                              <nav className='notify'><AiFillLike size={20}/></nav>
                              <small className='number'>50 </small>
                            </nav>
                              
                              <nav className='notify'>
                              <AiFillDislike size={20}/>
                              <small className='number'>50 </small>
                            </nav>
                              <nav className='notify'>
                              <nav className='notify'>< IoIosChatboxes size={20}/></nav>
                              <small className='number'>50 </small>
                            </nav>
                          </div> 
                          </div>
                        </div>
                         <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentWrap'>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              < span > A text is a written or spoken passage,A text is a written or spoken passage, especially one that is used in a school or university for discussion or in an examination. I'll read the text aloud .  </span>
                            <br />
                            <div className='muted'>
                            <span>30 minute ago</span>
                            <span><b> Reply</b></span>
                            </div>
                          </div>
                           <div className='commentLikeIcon'>
                               <nav className='notify'>
                              <nav className='notify'><AiFillLike size={20}/></nav>
                              <small className='number'>50 </small>
                            </nav>
                              
                              <nav className='notify'>
                              <AiFillDislike size={20}/>
                              <small className='number'>50 </small>
                            </nav>
                              <nav className='notify'>
                              <nav className='notify'>< IoIosChatboxes size={20}/></nav>
                              <small className='number'>50 </small>
                            </nav>
                          </div> 
                        </div>
                        </div> 
                        <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentWrap'>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              < span > A text is a written or spoken passage,A text is a written or spoken passage, especially one that is used in a school or university for discussion or in an examination. I'll read the text aloud .  </span>
                            <br />
                            <div className='muted'>
                            <span>1 hour ago</span>
                            <span><b> Reply</b></span>
                            </div>
                          </div>
                          <div className='commentLikeIcon'>
                               <nav className='notify'>
                              <nav className='notify'><AiFillLike size={20}/></nav>
                              <small className='number'>50 </small>
                            </nav>
                              
                              <nav className='notify'>
                              <AiFillDislike size={20}/>
                              <small className='number'>50 </small>
                            </nav>
                              <nav className='notify'>
                              <nav className='notify'>< IoIosChatboxes size={20}/></nav>
                              <small className='number'>50 </small>
                            </nav>
                          </div> 
                        </div>
                        </div> 
                         <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentWrap'>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              < span > A text is a written or spoken passage,A text is a written or spoken passage, especially one that is used in a school or university for discussion or in an examination. I'll read the text aloud .  </span>
                            <br />
                            <div className='muted'>
                            <span>2 hours ago</span>
                            <span><b> Reply</b></span>
                            </div>
                          </div>
                          <div className='commentLikeIcon'>
                               <nav className='notify'>
                              <nav className='notify'><AiFillLike size={20}/></nav>
                              <small className='number'>50 </small>
                            </nav>
                              
                              <nav className='notify'>
                              <AiFillDislike size={20}/>
                              <small className='number'>50 </small>
                            </nav>
                              <nav className='notify'>
                              <nav className='notify'>< IoIosChatboxes size={20}/></nav>
                              <small className='number'>50 </small>
                            </nav>
                          </div> 
                        </div>
                        </div> 
                         <div className='commentSection'>
                          <div className='img'>
                              <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentWrap'>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              < span > A text is a written or spoken passage,A text is a written or   </span>
                            <br />
                            <div className='muted'>
                            <span>1 day ago</span>
                            <span><b> 1 Likes</b></span>
                            </div>
                          </div>
                         <div className='commentLikeIcon'>
                               <nav className='notify'>
                              <nav className='notify'><AiFillLike size={20}/></nav>
                              <small className='number'>50 </small>
                            </nav>
                              
                              <nav className='notify'>
                              <AiFillDislike size={20}/>
                              <small className='number'>50 </small>
                            </nav>
                              <nav className='notify'>
                              <nav className='notify'>< IoIosChatboxes size={20}/></nav>
                              <small className='number'>50 </small>
                            </nav>
                          </div> 
                          </div>
                        </div>
                         <div className='commentSection'>
                          <div className='img'>
                            <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentWrap'>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              < span >A text is a written or spoken passage, especially one that is used in a school or university for discussion or in an examination.  </span>
                            <br />
                            <div className='muted'>
                            <span>1 week ago</span>
                            <span><b> Reply</b></span>
                            </div>
                          </div>
                           <div className='commentLikeIcon'>
                               <nav className='notify'>
                              <nav className='notify'><AiFillLike size={20}/></nav>
                              <small className='number'>50 </small>
                            </nav>
                              
                              <nav className='notify'>
                              <AiFillDislike size={20}/>
                              <small className='number'>50 </small>
                            </nav>
                              <nav className='notify'>
                              <nav className='notify'>< IoIosChatboxes size={20}/></nav>
                              <small className='number'>50 </small>
                            </nav>
                          </div> 
                          </div>
                        </div>
                       <div className='commentSection'>
                          <div className='img'>
                            <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentWrap'>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              < span >A text is a written or spoken passage, especially one that is used in a school or university for discussion or in an examination.  </span>
                            <br />
                            <div className='muted'>
                            <span>2 month ago</span>
                            <span><b> Reply</b></span>
                            </div>
                          </div>
                          <div className='commentLikeIcon'>
                               <nav className='notify'>
                              <nav className='notify'><AiFillLike size={20}/></nav>
                              <small className='number'>50 </small>
                            </nav>
                              
                              <nav className='notify'>
                              <AiFillDislike size={20}/>
                              <small className='number'>50 </small>
                            </nav>
                              <nav className='notify'>
                              <nav className='notify'>< IoIosChatboxes size={20}/></nav>
                              <small className='number'>50 </small>
                            </nav>
                          </div> 
                          </div>
                        </div>
                         <div className='commentSection'>
                          <div className='img'>
                            <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentWrap'>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              < span >A text is a written or spoken passage, especially one that is used in a school or university for discussion or in an examination.  </span>
                            <br />
                            <div className='muted'>
                            <span>6 month ago</span>
                            <span><b> Reply</b></span>
                            </div>
                          </div>
                           <div className='commentLikeIcon'>
                               <nav className='notify'>
                              <nav className='notify'><AiFillLike size={20}/></nav>
                              <small className='number'>50 </small>
                            </nav>
                              
                              <nav className='notify'>
                              <AiFillDislike size={20}/>
                              <small className='number'>50 </small>
                            </nav>
                              <nav className='notify'>
                              <nav className='notify'>< IoIosChatboxes size={20}/></nav>
                              <small className='number'>50 </small>
                            </nav>
                          </div> 
                          </div>
                        </div>
                         <div className='commentSection'>
                          <div className='img'>
                            <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentWrap'>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              < span >A text is a written or spoken passage, especially one that is used in a school or university for discussion or in an examination.  </span>
                            <br />
                            <div className='muted'>
                            <span>1 year ago</span>
                            <span><b> Reply</b></span>
                            </div>
                          </div>
                           <div className='commentLikeIcon'>
                               <nav className='notify'>
                              <nav className='notify'><AiFillLike size={20}/></nav>
                              <small className='number'>50 </small>
                            </nav>
                              
                              <nav className='notify'>
                              <AiFillDislike size={20}/>
                              <small className='number'>50 </small>
                            </nav>
                              <nav className='notify'>
                              <nav className='notify'>< IoIosChatboxes size={20}/></nav>
                              <small className='number'>50 </small>
                            </nav>
                          </div> 
                          </div>
                        </div>
                         <div className='commentSection'>
                          <div className='img'>
                            <TheAvatar imgUrl='/profile.jpg' />
                          </div>
                          <div className='commentWrap'>
                          <div className='commentNote'>
                              <span className='commentNoteName'>John.Remi </span>
                              < span >A text is a written or spoken passage, especially one that is used in a school or university for discussion or in an examination.  </span>
                            <br />
                            <div className='muted'>
                            <span>2 year ago</span>
                            <span><b> Reply</b></span>
                            </div>
                          </div>
                         <div className='commentLikeIcon'>
                               <nav className='notify'>
                              <nav className='notify'><AiFillLike size={20}/></nav>
                              <small className='number'>50 </small>
                            </nav>
                              
                              <nav className='notify'>
                              <AiFillDislike size={20}/>
                              <small className='number'>50 </small>
                            </nav>
                              <nav className='notify'>
                              <nav className='notify'>< IoIosChatboxes size={20}/></nav>
                              <small className='number'>50 </small>
                            </nav>
                          </div> 
                          </div>
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
                <button>Send</button>
                   </div>
               </div>
             
      </div>
     
  </div>    
 )
 }
 

export default CommentPage
