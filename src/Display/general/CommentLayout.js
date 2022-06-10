import React, { useState } from 'react'
import { TheAvatar } from '../../comp-files/components'
import { IoIosSend } from "react-icons/io";
import '../../comp-files/app-style/_commentLayout.scss'

const CommentLayout = ({ data, username, addedComment, setAddedComment, children }) => {


  const handleSubmit = e => {
        e.preventDefault()
        console.log(addedComment)
      }
   

  return ( 
    <></>
    // <div>
    //   <div className='layoutHead'></div>
    //   <div className='layoutBody' style={{height: '500px'}}>{children}</div>
    //   <div className='layoutFooter'>
    //     <div className='itemOverlay '>
    //       <form className='comment' onSubmit={handleSubmit} >
    //         <TheAvatar link={username} imgUrl='/profile.jpg' />
    //         <textarea type="text" 
    //         onChange={(e) => setAddedComment(e.target.value)} 
    //         placeholder="Add comments" 
    //         onFocus={() => console.log('test')}>
    //           <IoIosSend className='SubmitIcon' size={40} />
    //         </textarea>
           
            
    //       </form>
    //       <div className='cardInfo'>
    //         <div className='cardItems'>
    //           {/* <div className='value'>{data.sellers}</div> */}
    //           <div className='type'>Seller</div>
    //         </div>
    //         <div className='cardItems'>
    //           {/* <div className='value'>{data.comment}</div> */}
    //           <div className='type'>Comments</div>
    //         </div>
    //         <div className='cardItems'>
    //           {/* <div className='value'>{data.views}</div> */}
    //           <div className='type'>Views</div>
    //         </div>
    //         <div className='cardItems '>
    //           {/* <div className='value rating'>{data.rating}</div> */}
    //           <div className='type'>Rating</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    // </div>
  )
}

export default CommentLayout
