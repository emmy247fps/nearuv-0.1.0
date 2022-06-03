import React,  {useState} from 'react'
import { productCard } from '../../utilities'
import '../app-style/SlidingInfo.scss'
import { IoIosSend } from "react-icons/io";
import TheAvatar from './TheAvatar'


const SlidingInfo = ({open, data, profilePicture, username}) => { 
  const [addedComment, setAddedComment] = useState('')
  let comment = []

  const handleSubmit = e => {
    e.preventDefault()
    console.log(addedComment)
  }
  return (
  <></>
    // <div className='mobileOverlay'>
    //           <nav className={open ? 'nav-menu active' : 'nav-menu'}>
    //                   <div className='itemOverlay'>
    //                        <span className='description'><b>{data.text}</b></span>
    //                        <span className='addedComment'>{addedComment}</span>
    //                        <div>
    //                        <form className='comment' onSubmit={handleSubmit} >
    //                         <TheAvatar link={username} imgUrl='/profile.jpg'/>
    //                         <textarea type="text" onChange={(e)=>setAddedComment(e.target.value)} placeholder="Add comments" onFocus={()=>console.log('test')} />
    //                        <IoIosSend className='SubmitIcon' size={40}/>
    //                       </form>
    //                           <div className='cardInfo'>
    //                             <div className='cardItems'>
    //                                 <div className='value'>{data.sellers}</div>
    //                                 <div className='type'>Seller</div>
    //                             </div>
    //                             <div className='cardItems'>
    //                                 <div className='value'>{data.comment}</div>
    //                                 <div className='type'>Comments</div>
    //                             </div>
    //                             <div className='cardItems'>
    //                                 <div className='value'>{data.views}</div>
    //                                 <div className='type'>Views</div>
    //                             </div>
    //                             <div className='cardItems '>
    //                                 <div className='value rating'>{data.rating}</div>
    //                                 <div className='type'>Rating</div>
    //                             </div>
    //                           </div>
    //                           </div>
    //                   </div>
    //             </nav>
    // </div>
  )
}

export default SlidingInfo