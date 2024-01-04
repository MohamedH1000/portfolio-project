import React, {useState} from 'react'
import './popular_makeup.css'
import Item from '../Item/Item'
import makeup_and_accessories from '../assets/makeup-and-accessories'
import Pagination from '../pagination/pagination'


//popular make up category design of the website
const PopularMakeUp = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(42);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  return (
    <div className="popular-makeup">
        <h1>Makeup and Accessories</h1>
        <hr className='horizoontal_makeup'></hr>
        <img src="https://cdn.chefaa.com/filters:format(webp)/public/uploads/categories/Nivea-20-category-EN_1692617216.png" alt='' style={{width:'80%', marginBottom:'20px', borderRadius:'20px'}}></img>
        <div className="makeup-items">
          {makeup_and_accessories.slice(firstPostIndex, lastPostIndex).map((item, i) => {
            if (item.category === "makeup-and-accessories"){
              return <Item key={i} id={item.id} name={item.name} image={item.image} save={item.save} old_price={item.old_price} new_price={item.new_price}/>
            } else {
              return null;
            }
          })}
        </div>
        <div>
          <Pagination totalPost={makeup_and_accessories.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/> 
        </div>
    </div>
  )
}

export default PopularMakeUp