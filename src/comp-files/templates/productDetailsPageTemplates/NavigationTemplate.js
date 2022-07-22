import React from 'react'
import '../../app-style/__navigationTemplate.scss'

const NavigationTemplate = () => {
  return (
   <div className="navigationTemplate">
   <div className="navigationHeader">
   <h2>Navigation</h2>
</div>
<nav className="navigationList">
   <a href="#sec1" className="productNav">Product details</a>
   <a href="#sec2">Specifications</a>
   <a href="#sec3"> Feedback</a>
   <a href="#sec4">Customers view</a>
</nav>
</div> 
  )
}

export default NavigationTemplate