import React, { useState } from 'react'
import { TheAvatar } from '../../../comp-files/components'
import { PageAnimate } from '../../../comp-files/hoc'
import '../../../comp-files/app-style/SlidingInfo.scss'
import { IoIosSend } from "react-icons/io";
import CommentLayout from '../../general/CommentLayout';
import { productCard } from '../../../utilities'

const CommentPage = ({ username }) => {
  let comment = []
  // const [addedComment, setAddedComment] = useState('')
  const [data, setData] = useState({})


  const datain = (x) => {
    // console.log(x);
    setData(x)

  }
// const data = {item}

  return (
    <>
    {/* {productCard.map((item, index) => (
     
    <CommentLayout 
    username={username} 
    // setAddedComment = {setAddedComment} 
     datain ={item}
    />
    
     ))} */}
     
     </>
  )
}

export default CommentPage