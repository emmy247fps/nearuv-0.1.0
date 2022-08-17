import React, { useState, useRef } from 'react'
// import { productCard } from '../../utilities'
import '../../../comp-files/app-style/_commentPage.scss'
import { IoMdSend, IoMdArrowRoundBack } from "react-icons/io";
import { TheAvatar } from '../../../comp-files/components';
import { Link } from 'react-router-dom';
import Commentzz from './comment/Commentzz';



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
<>
<Commentzz />
</>
      // <div className='comment'>
      // <div className='commentHeader'  onMouseUp={clickHandler}>
      //   <div className='commentNavbar'>
      //     <Link to={`/`}  >
      //   <IoMdArrowRoundBack size={40} 
      //    />
      //   </Link>
      //   </div>
      //   <form className='subHeader' onSubmit={handleSubmit} >
      //       <TheAvatar link={username} imgUrl='/profile.jpg' />
      //       {/* <div className='fsdgf'> */}
      //       <input className='textarea' type="text" onChange={(e) => setAddedComment(e.target.value)} 
      //       placeholder="Add comments" 
      //       onFocus={() => console.log('test')} />
      //       <nav className='SubmitIcon'>
      //       <IoMdSend className='sendIcon' size={30} />
      //       </nav>
      //       {/* </div> */}
      //     </form>
      //   </div>
      //   <div className='commentBody' ref= {commentRef}>
      //     {/* <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br /> */}
      //     {/* <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br />
      //     <span className='description'><b>{data.text}</b></span><br /> */}
      //     <span className='addedComment'>{addedComment}</span>
      //   </div>
        
      //   {/* <div className='commentFooter'>
      //     <div className='cardInfo'>
      //       <div className='cardItems'>
      //         <div className='value'><b>{data.sellers}</b></div>
      //         <div className='type'><b>Seller</b></div>
      //       </div>
      //       <div className='cardItems'>
      //         <div className='value'><b>{data.comment}</b></div>
      //         <div className='type'><b>Comments</b></div>
      //       </div>
      //       <div className='cardItems'>
      //         <div className='value'><b>{data.views}</b></div>
      //         <div className='type'><b>Views</b></div>
      //       </div>
      //       <div className='cardItems '>
      //         <div className='value rating'>{data.rating}</div>
      //         <div className='type'><b>Rating</b></div>
      //       </div>
      //     </div>
      //   </div> */}
      // </div>
  )
}

export default CommentPage
