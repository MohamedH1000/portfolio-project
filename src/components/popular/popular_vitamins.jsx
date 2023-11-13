import React, {useState} from 'react'
import Item from '../Item/Item'
import './popular_vitamins.css'
import Pagination from '../pagination/pagination'
import vitamins from '../assets/vitamins'

//vitamins and supplements category design in the website
const PopularVitamins = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(42);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  return (
    <div className="popular-vitamins">
        <h1>Vitamins & Supplements</h1>
        <hr className='horizoontal_vitamins'></hr>
        <img src="https://cdn.chefaa.com/filters:format(webp)/public/uploads/categories/Categoryabanner-1694x448px--1-_1675333305.jpg" alt='' style={{width:'80%', marginBottom:'20px', borderRadius:'20px'}}></img>
        <div className="vitamins-items">
          {vitamins.slice(firstPostIndex, lastPostIndex).map((item, i) => {
              return <Item key={i} id={item.id} name={item.name} image={item.image} save={item.save} old_price={item.old_price} new_price={item.new_price}/>
          })}
        </div>
        <div>
          <Pagination totalPost={vitamins.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/> 
        </div>
    </div>
  )
}

export default PopularVitamins