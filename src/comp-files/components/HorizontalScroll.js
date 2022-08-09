import React, { useState, useEffect, useRef } from 'react'
import '../app-style/__horizontalScroll.scss'
import { products } from "../../utilities";
import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io";

const HorizontalScroll = (props) => {
  const { children, width, height, reference1, name } = props
 const product = products[0]
//  const {scrollAmount, setScrollAmount} = useState (320)
const scrollAmount = 320;
let currentScrollPosition =  0 
  const { scrollPosition, setScrollPosition } = useState(0)
  const [reference2, setRefecence2] = useState(null)
  const sectionRef = useRef(null) 

  useEffect(() => {
    setRefecence2(sectionRef.current.offsetWidth)
  }, [sectionRef]);


  const maxScroll=  reference2 + reference1;
  console.log({ name })

  const scrollHorizontally = (data) => {
    currentScrollPosition += (data * scrollAmount);
    console.log(currentScrollPosition)
    // if(currentScrollPosition <  0){
    //   currentScrollPosition = 0
    // } 
    //  if (currentScrollPosition > maxScroll){
    //   currentScrollPosition = maxScroll
    // }  
    name.style.left = currentScrollPosition + 'px'
    console.log(name)
  }  

  // const scrollHorizontally= () =>{
  // name.scrollBy(350,0)
  
  // }
  // const scrollHorizontaly =()=>{
  //   name.scrollBy(-350, 0)
  // }
 

  return (
      <section className="horizontalScroll" ref = {sectionRef} style={{width: width, height: height}}>
        <button className="btnScroll" onClick={() => scrollHorizontally(.5)} ><IoIosArrowBack /></button>
        <button className="btnScroll" onClick={() => scrollHorizontally(-.5)}><IoIosArrowForward /></button>
        
            {children}
     </section>
    // </div>
  )
}

export default HorizontalScroll