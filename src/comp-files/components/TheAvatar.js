import React, {memo} from 'react'
import { Link } from 'react-router-dom'
import '../app-style/_theAvatar.scss'


const TheAvatar = ({link, imgUrl}) => {

  return (
    <Link to={`/${link}`}><img
    className="profileImage"
    src={imgUrl}
    alt={'profile'}
  /></Link> 
  )
}

export default memo(TheAvatar)