import React, { useState } from 'react'
import './popular_skincare.css'
import skincare from '../assets/skin-care'
import Item from '../Item/Item'
import Pagination from '../pagination/pagination'

//skin care category design of the website
const PopularSkinCare = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(42);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  return (
    <div className="popular-skincare">
        <h1>Skin Care</h1>
        <hr className='horizoontal_skincare'></hr>
        <img src="https://cdn.chefaa.com/filters:format(webp)/public/uploads/categories/Categoryabanner-1694x448px-edit--1-_1675333173.png" alt='' style={{width:'80%', marginBottom:'20px', borderRadius:'20px'}}></img>
        <div className="skincare-items">
          {skincare.slice(firstPostIndex, lastPostIndex).map((item, i) => {
              return <Item key={i} id={item.id} name={item.name} image={item.image} save={item.save} old_price={item.old_price} new_price={item.new_price}/>
           
          })}
        </div>
        <div>
          <Pagination totalPost={skincare.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/> 
        </div>
    </div>
  )
}

export default PopularSkinCare