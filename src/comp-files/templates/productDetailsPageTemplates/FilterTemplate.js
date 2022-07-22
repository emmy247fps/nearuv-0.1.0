import React from 'react'
import '../../app-style/__filterTemplate.scss'


const FilterTemplate = () => {
  return (
      <nav className='filterTemplateContainer'>
        <ul >
       <li className='dropdown'><a>sellers Reviews</a>
       <ul>
        <li><a>dfghj</a></li>
        <li><a>dfghj</a></li>
        <li><a>dfghj</a></li>
        <li><a>dfghj</a></li>
        </ul>
        </li>
        <li><a>Brand</a></li>   
       <li><a> price</a></li>   
       <li><a>Customers view</a></li>   
       <li><a>Packaging options</a></li>    
       <li><a>conditions</a></li>   
        </ul>
     </nav>
  )
}

export default FilterTemplate