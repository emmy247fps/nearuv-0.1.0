import React from 'react'
import "../../../comp-files/app-style/_subHeader.scss"
import { TopProducts } from '../../../utilities';
const SubHeader = () => {
    return (
        <div className="trending__bar">
      {TopProducts.images.map((value, i) => (
        <span key={i}>
        <img src= {value.url} alt= {value.name} className = "top__trending__itemImage"/>
        <span>{value.name}</span>
        </span>
      ))}
    </div>
    )
};

export default SubHeader;