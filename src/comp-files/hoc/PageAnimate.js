import React, { memo, useState } from 'react'
import "../app-style/_pageAnimate.scss"

const PageAnimate = ({children}) => {
  const [ load, setLoad ] = useState(false)

  return (
    <div className= {load ? 'fadeIn active' : 'fadeIn'} onLoad={()=>setLoad(true)} >{children}</div>
  )
}

export default memo(PageAnimate)