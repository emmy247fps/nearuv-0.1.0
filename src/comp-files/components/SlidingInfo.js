// import React, { useState } from 'react'
// import { productCard } from '../../utilities'
// // import '../app-style/SlidingInfo.scss'
// import { IoMdSend, IoIosClose } from "react-icons/io";
// import TheAvatar from './TheAvatar'


// const SlidingInfo = ({ open, data, clickHandler, username }) => {
//   const [addedComment, setAddedComment] = useState('')
//   let comment = []

//   const handleSubmit = e => {
//     e.preventDefault()
//     console.log(addedComment)
//   }

//   return (

//     <div className='mobileOverlay'>
//       <nav className={open ? 'nav-menu active' : 'nav-menu'}>
//         <div className='commentHeader'  onMouseUp={clickHandler} draggable='off' >
//           <IoIosClose size={40} onClick={clickHandler} />

//         </div>
//         <div className='commentBody'>
//           <span className='description'><b>{data.text}</b></span>
//           <span className='addedComment'>{addedComment}</span>
//         </div>
        
//         <div className='commentFooter'>
//           <form className='comment' onSubmit={handleSubmit} >
//             <TheAvatar link={username} imgUrl='/profile.jpg' />
//             <textarea type="text" onChange={(e) => setAddedComment(e.target.value)} 
//             placeholder="Add comments" 
//             onFocus={() => console.log('test')} />
//             <IoMdSend className='SubmitIcon' size={40} />
//           </form>
//           <div className='cardInfo'>
//             <div className='cardItems'>
//               <div className='value'><b>{data.sellers}</b></div>
//               <div className='type'><b>Seller</b></div>
//             </div>
//             <div className='cardItems'>
//               <div className='value'><b>{data.comment}</b></div>
//               <div className='type'><b>Comments</b></div>
//             </div>
//             <div className='cardItems'>
//               <div className='value'><b>{data.views}</b></div>
//               <div className='type'><b>Views</b></div>
//             </div>
//             <div className='cardItems '>
//               <div className='value rating'>{data.rating}</div>
//               <div className='type'><b>Rating</b></div>
//             </div>
//           </div>
//         </div> 
//       </nav>
//     </div>
//   )
// }

// export default SlidingInfo