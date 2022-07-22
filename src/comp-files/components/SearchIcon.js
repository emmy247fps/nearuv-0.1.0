import React from 'react'
import '../app-style/__searchIcon.scss'


const SearchIcon = () => {
  return (
   <div class="searchContainer">
   <div class="search">
     {/* <h1>Click on search icon</h1> */}
     <div>
       <input type="text" placeholder="Search..." required />
     </div>
   </div>
 </div>
  )
}

export default SearchIcon

















