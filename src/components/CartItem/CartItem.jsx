import React, { useContext } from 'react'
import './cartitem.css'
import pharmacyLogo from '../assets/pharmacyLogo.webp'
import { ShopContext } from '../../context/shopContext'

// design the cart item shape of the items added to the cart

const CartItem = (props) => {
    const {id, image, name, new_price} = props.data;
    const {addToCart, removeFromCart, cartItem, updateItemCartAmount} = useContext(ShopContext);
  return (
    <section className='shipment-section'>
      <div className='shipment-container'>
          <div className='list-cart-products'>
            <div className='shipping-header'>
              <h1>Shipment 1 from 1</h1>
              <div className='d-flex'>
                <img src={pharmacyLogo} alt='' style={{width:'50px', height:'50px'}}></img>
                <div>
                  <p>Shipment from : Nearby pharmacy</p>
                  <span style={{color:'red'}}>Delivered within 1-2 hours</span>
                </div>
              </div>
            </div>
            <div className="shopping-product">
              <div className="row">
                <div className="product-image">
                  <img src={image} alt='' width='85px' height='74px'></img>
                </div>
                <div className="product-details">
                  <p>{name}</p>
                </div>
                <div className="product-amount">
                  <div className='button-design'>
                    <button onClick={()=>addToCart(id)} style={{width:'40px',backgroundColor:'var(--text-color)', color:'white',border:'1px solid var(--text-color)', cursor:'pointer',borderRadius:'10px 0 0 10px'}}>+</button>
                    <input style={{width:'50px',textAlign:'center',backgroundColor:'var(--bg-color)',color:'white',border:'1px solid var(--text-color)'}} value={cartItem[id]} onChange={(e)=> updateItemCartAmount(Number(e.target.value),id)}></input>
                    <button onClick={()=>removeFromCart(id)} style={{width:'40px',backgroundColor:'var(--text-color)', color:'white',border:'1px solid var(--text-color)', cursor:'pointer',borderRadius:'0 10px 10px 0'}}>-</button>
                  </div>
                  <div style={{fontWeight: '600'}}>
                    {new_price * cartItem[id]} EGP
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default CartItem