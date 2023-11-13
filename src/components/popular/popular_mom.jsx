import React, {useState} from 'react'
import './popular_mom.css'
import mom_and_baby from '../assets/mom-and-baby'
import Item from '../Item/Item'
import Pagination from '../pagination/pagination'

// mom category design of the website
const PopularMom = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(42);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  return (
    <div className="popular-mom">
        <h1>Mom and Baby</h1>
        <hr className='horizoontal_mom'></hr>
        <div className="mom-items">
          {mom_and_baby.slice(firstPostIndex, lastPostIndex).map((item, i) => {
              return <Item key={i} id={item.id} name={item.name} image={item.image} save={item.save} old_price={item.old_price} new_price={item.new_price}/>
          })}
        </div>
        <div>
          <Pagination totalPost={mom_and_baby.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/> 
        </div>
    </div>
  )
}

export default PopularMom