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
    <>
   
    </>
  )
}

export default CommentLayout
