import React from 'react'
import './pagination.css'

//pagination style in the website
const Pagination = (props) => {
    const {totalPost, postPerPage, setCurrentPage, currentPage} = props;
    let pages = [];

    for(let i = 1; i < Math.ceil(totalPost/postPerPage); i++){
        pages.push(i);
    }

  return (
    <div className='pagination'>
      <button onClick={()=> setCurrentPage(1)}>&laquo;</button>
      <button onClick={()=>setCurrentPage((prev)=> prev === 1 ? prev : prev - 1)}>&lsaquo;</button>
        {pages.map((page, index) => {
                return <button key={index} onClick={()=>setCurrentPage(page)} className={page === currentPage ? 'active' : ''}>{page}</button>
        })}
      <button onClick={()=> setCurrentPage((next)=> next === Math.ceil(totalPost/postPerPage)-1? next : next + 1)}>&rsaquo;</button>
      <button onClick={()=>setCurrentPage(Math.ceil(totalPost/postPerPage)-1)}>&raquo;</button>
    </div>
  )
}

export default Pagination