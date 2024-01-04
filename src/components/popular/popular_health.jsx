import React, {useState} from 'react'
import './popular_health.css'
import Item from '../Item/Item'
import Pagination from '../pagination/pagination'
import health_care_devices from '../assets/health-care-devices'

//popular health design of the website
const PopularHealth = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(42);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  return (
    <div className="popular-health">
        <h1>Health Care Devices</h1>
        <hr className='horizoontal_health'></hr>
        <div className="health-items">
          {health_care_devices.slice(firstPostIndex, lastPostIndex).map((item, i) => {
            if (item.category === "health-care-devices"){
              return <Item key={i} id={item.id} name={item.name} image={item.image} save={item.save} old_price={item.old_price} new_price={item.new_price}/>
            } else {
              return null;
            }
          })}
        </div>
        <div>
          <Pagination totalPost={health_care_devices.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/> 
        </div>
    </div>
  )
}

export default PopularHealth