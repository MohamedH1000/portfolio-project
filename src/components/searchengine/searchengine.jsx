import './searchengine.css'
import down_arrow from '../assets/down_arrow.png'
import {FaShoppingCart} from 'react-icons/fa';
import { Link } from 'react-router-dom';

// design of the search engine bar
const SearchEngine = (props) => {
    const searchHandler = (e) => {
            e.preventDefault();
    }
    const {searchItem, handleChange} = props;
    return (
        <div className="search">
            <form className='form' onSubmit={searchHandler}>
                <input type="text" placeholder='Search' style={{outline:'none'}} onChange={handleChange} value={searchItem}/>
                <Link to="/eg-ar/search-result"><button type="submit">Search</button></Link>
            </form>
            <div className="delivery">
                <p>Delivery to <img src={down_arrow} alt='' style={{scale:'0.6'}}></img></p>
                <p><b>Unspecified</b></p>
            </div>
            <div className="cart">
                 <Link to='/eg-ar/cart' style={{textDecoration:'none'}}><p>cart&nbsp;&nbsp;<FaShoppingCart style={{color:'var(--text-color)', fontSize:'20px'}}/></p></Link>
            </div>
            <div className="login-register">
                <Link to="/eg-ar/login"><button className="login">Login</button></Link>
                <Link to="/eg-ar/register"><button className="register">Register</button></Link>
            </div>
        </div>       
        );
    }

export default SearchEngine;