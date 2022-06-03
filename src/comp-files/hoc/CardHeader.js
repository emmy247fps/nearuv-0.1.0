import React from 'react'
import TheAvatar from '../components/TheAvatar'
import IconAvatar from '../components/IconAvatar'
import { FaInfo } from "react-icons/fa"
import '../app-style/_cardHeader.scss'
// import SlidingInfo from '../components/SlidingInfo'


const CardHeader = ({ username, profilePicture, className, handleClick }) => {
  
     const clickHandler = ()=>{
      handleClick()
     }

    //  const style = {
    //   width: '100%' ,
    //   color: 'white'
    // }
 
  return (
    <div className={className}>
      <TheAvatar link={username} imgUrl={profilePicture} />
        <FaInfo 
        onClick={clickHandler} className="cardHeaderIcon icons__IoIosInformation" size={13} />
      <div className='cardHeaderDesktopView'>
        <span className='cardHeaderUsername'>simplydigital</span>
        <span className='cardHeaderFollowers'>followers:24k</span>
      </div>
    </div>
  )
}

export default CardHeader