import React, { useState } from 'react'
import './popular_medication.css'
import Item from '../Item/Item'
import medication_banner from '../assets/banner/medication_banner.webp'
import Pagination from '../pagination/pagination'
import '../pagination/pagination.css'
import medication from '../assets/medication'

//medication category design of the website
const Popular = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(42);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  return (
    <div className="popular-medication">
        <h1>Medication</h1>
        <hr className='horizoontal_medication'></hr>
        <img src={medication_banner} alt='' style={{width:'80%', marginBottom:'20px', borderRadius:'20px'}}></img>
        <div className="medication-items">
          {medication.slice(firstPostIndex, lastPostIndex).map((item, i) => {
              return <Item key={i} id={item.id} name={item.name} image={item.image} save={item.save} old_price={item.old_price} new_price={item.new_price}/>
          })}
        </div>    
        <div>
          <Pagination totalPost={medication.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/> 
        </div>
    </div>
  )
}

export default Popular