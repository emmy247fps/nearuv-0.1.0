import React, { memo } from 'react'
import { Link } from 'react-router-dom';

const IconAvatar = ({children, link}) => {

   
  return (
    <Link to={`/${link}`}>
          {children}
        </Link>
  )
}

export default memo(IconAvatar)