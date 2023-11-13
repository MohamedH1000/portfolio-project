import React, {useState} from 'react'
import './popular_haircare.css'
import Item from '../Item/Item'
import Pagination from '../pagination/pagination'
import hair_care from '../assets/hair-care'

// popular hair care design of the website
const PopularHairCare = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(42);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  return (
    <div className="popular-haircare">
        <h1>Hair Care</h1>
        <hr className='horizoontal_haircare'></hr>
        <div className="haircare-items">
          {hair_care.slice(firstPostIndex, lastPostIndex).map((item, i) => {
              return <Item key={i} id={item.id} name={item.name} image={item.image} save={item.save} old_price={item.old_price} new_price={item.new_price}/>
          })}
        </div>
        <div>
          <Pagination totalPost={hair_care.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/> 
        </div>
    </div>
  )
}

export default PopularHairCare