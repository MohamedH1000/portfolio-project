import React, { useContext } from 'react'
import './productdisplay.css'
import delivery_time_waffar from '../assets/delivery_time_waffar.svg'
import Storefrontwaffar from '../assets/Storefrontwaffar.svg'
import returnwaffar from '../assets/returnwaffar.svg'
import { ShopContext } from '../../context/shopContext'

// a branch component of the main component that is used for displaying the product design
const ProductDisplay = (props) => {
    const {product} = props;
    const { addToCart, cartItem , updateItemCartAmount} = useContext(ShopContext);
    const cartItemAmount = cartItem[product.id];
  return (
    <div className='product-display'>
        <div className="small-img">
            <img src={product.image} alt=''/>
        </div>
        <div className="large-image">
            <img src={product.image} alt=''/>
        </div>
        <div className="specifications">
            <h1 style={{fontSize:'18px', marginBottom:'15px'}}>{product.name}</h1>
            <p style={{fontSize:'14px'}}>price:<span style={{fontSize:'18px', paddingLeft:'5px', fontWeight:'bold',paddingRight:'15px'}}>{product.new_price} EGP</span>
            {product.old_price.length > 0 && <span style={{fontSize:'14px', textDecoration:'line-through', fontWeight:'bold', paddingRight:'10px'}}>{product.old_price} EGP</span>} 
            {product.save.length > 0 && <span style={{color:'red', fontWeight:'600'}}>save{product.save}</span>}</p>
            <div className="delivery-time">
                <div className='delivery-time-content'><img style={{paddingRight:'10px'}} src={delivery_time_waffar} alt=''/><p>Delivery time: <b>48 working hours in Cairo & Giza</b></p></div>
                <div className='delivery-time-content'><img style={{paddingRight:'10px'}} src={Storefrontwaffar} alt=''/><p> Sold by: <b>Pharmacy Store</b></p></div>
                <div className='delivery-time-content'><img style={{paddingRight:'10px'}} src={returnwaffar} alt=''/><p> This item is eligible for free returns <b style={{color:'blue', textDecoration: 'underline', cursor:'pointer'}} >Learn More</b></p></div>
            </div>
            <div className="add-to-cart-id">
                <p style={{fontSize:'16px', fontWeight:'600',paddingTop:'10px'}}>quantity:</p> <input value={cartItem[product.id]} onChange={(e)=> updateItemCartAmount(Number(e.target.value),product.id)} style={{position:'absolute',left:'70px',width:'40px',height:'50px',top:'0',textAlign:'center'}}></input>
                <button className="button-add-cart" onClick={()=> addToCart(product.id)}>Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay