import React, { useState } from 'react'
import { TheAvatar } from '../../../comp-files/components'
import { PageAnimate } from '../../../comp-files/hoc'
import '../../../comp-files/app-style/SlidingInfo.scss'
import { IoIosSend } from "react-icons/io";


const CommentPage = ({data, username}) => { 
    const [addedComment, setAddedComment] = useState('')
    let comment = []
    
    const handleSubmit = e => {
      e.preventDefault()
      console.log(addedComment)
    }


  

  return (
    //  <PageAnimate>
        <>
        <div className='mobileOverlay'>
       {/* <span className='description'><b>{data.text}</b></span> */}
         <span className='addedComment'>{addedComment}</span> 
        <div className='itemOverlay'>
        <form className='comment' onSubmit={handleSubmit} >
         <TheAvatar link={username} imgUrl='/profile.jpg'/>
         <textarea type="text" onChange={(e)=>setAddedComment(e.target.value)} placeholder="Add comments" onFocus={()=>console.log('test')} 
         />
        <IoIosSend className='SubmitIcon' size={40}/>
       </form>
           <div className='cardInfo'>
             <div className='cardItems'>
                 {/* <div className='value'>{data.sellers}</div> */}
                 <div className='type'>Seller</div>
             </div>
             <div className='cardItems'>
                 {/* <div className='value'>{data.comment}</div> */}
                 <div className='type'>Comments</div>
             </div>
             <div className='cardItems'>
                 {/* <div className='value'>{data.views}</div> */}
                 <div className='type'>Views</div>
             </div>
             <div className='cardItems '>
                 {/* <div className='value rating'>{data.rating}</div> */}
                 <div className='type'>Rating</div>
             </div>
           </div>
           </div>
   
</div>
</>
        //  </PageAnimate>
// {/* <>
// <div>
//           {/* <span className='description'><b>{data.text}</b></span>
//          <span className='addedComment'>{addedComment}</span> */}
// </div>
 
// </> */}
  )
}

export default CommentPage