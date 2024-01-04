import React from 'react'
import './CartNavBar.css'
import { useNavigate } from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa';
import pharmacyLogo from '../assets/pharmacyLogo.webp'
import { Link } from 'react-router-dom';

// the navbar of the cart item in the items that is added to the cart
const CartNavBar = () => {
  const navigate = useNavigate();
  return (
    <header className="cart-header">
        <Link to='/eg-ar' style={{color:'black', textDecoration:'none'}}><div className="cart-logo"><img src={pharmacyLogo} alt='' style={{borderRadius:'50%'}}></img> Pharmacy</div></Link>
        <div className="cart-link">
            <button className="cart-previous" onClick={() => navigate(-1)}>Go to previous page <FaArrowRight/></button>
        </div>
    </header>
  )
}

export default CartNavBar