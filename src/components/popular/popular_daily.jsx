import React, {useState} from 'react'
import './popular_daily.css'
import daily_essentials from '../assets/daily-essentials'
import Item from '../Item/Item'
import Pagination from '../pagination/pagination'

// popular daily category design
const PopularDaily = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(42);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  return (
    <div className="popular-daily">
        <h1>Daily Essentials</h1>
        <hr className='horizoontal_daily'></hr>
        <img src="https://cdn.chefaa.com/filters:format(webp)/public/uploads/categories/Category-Banner-EN-15_1692612113.png" alt='' style={{width:'80%', marginBottom:'20px', borderRadius:'20px'}}></img>
        <div className="daily-items">
          {daily_essentials.slice(firstPostIndex, lastPostIndex).map((item, i) => {
              return <Item key={i} id={item.id} name={item.name} image={item.image} save={item.save} old_price={item.old_price} new_price={item.new_price}/>
          })}
        </div>
        <div>
          <Pagination totalPost={daily_essentials.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/> 
        </div>
    </div>
  )
}

export default PopularDaily