import React, {useState} from 'react';
import Pagination from '../pagination/pagination';
import Item from '../Item/Item';
import './searchengine.css';
import all_products from '../assets/all_products';

// a page for displaying the results that is related to what you type in the search engine
const SearchResult = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(42);
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const {searchItem} = props;
  return (
    <div className="popular-results">
        <h1>Results</h1>
        <hr className='horizoontal_results'></hr>
        <div className="results-items">
          {all_products.filter((item, i)=>{
            if (searchItem === "") {
                return <Item key={i} id={item.id} name={item.name} image={item.image} save={item.save} old_price={item.old_price} new_price={item.new_price}/>;
            } else if (item.name.toLowerCase().includes(searchItem.toLowerCase())) {
                return <Item key={i} id={item.id} name={item.name} image={item.image} save={item.save} old_price={item.old_price} new_price={item.new_price}/>;
            }
          }).slice(firstPostIndex, lastPostIndex).map((item, i) => {
              return <Item key={i} id={item.id} name={item.name} image={item.image} save={item.save} old_price={item.old_price} new_price={item.new_price}/>
          })}
        </div>
        <div>
          <Pagination totalPost={all_products.filter((item, i)=>{
            if (searchItem === "") {
                return <Item key={i} id={item.id} name={item.name} image={item.image} save={item.save} old_price={item.old_price} new_price={item.new_price}/>;
            } else if (item.name.toLowerCase().includes(searchItem.toLowerCase())) {
                return <Item key={i} id={item.id} name={item.name} image={item.image} save={item.save} old_price={item.old_price} new_price={item.new_price}/>;
            }
          }).length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/> 
        </div>
    </div>
  )
}

export default SearchResult;