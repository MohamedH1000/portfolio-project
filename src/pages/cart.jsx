import React, { useContext } from 'react'
import './css/cart.css'
import { Link } from 'react-router-dom'
import {ShopContext} from '../context/shopContext'
import all_products from '../components/assets/all_products'
import CartItem from '../components/CartItem/CartItem'
import Totalpayment from '../components/totalpayment/totalpayment'

// a component for displaying the design of the cart page
const Cart = () => {
  const {cartItem, getTotalCartAmount} = useContext(ShopContext);
  let totalAmount = getTotalCartAmount(); 
    return (
      <section className="cart-container">
        <div className="cart-head">
          <h1>Cart</h1>
        </div>
        {totalAmount > 0 ? (
          <>
            <div className="cart-items">
              {all_products.map((product,i) => {
                if (cartItem[product.id] !== 0) {
                  return <CartItem key={i} data={product} />;
                }
              })}
            </div>
            <div className="total-payment">
              <Totalpayment />
            </div>
          </>
        ) : (
          <div className="cart-start">
            <img
              src="https://cdn.chefaa.com/filters:format(webp)/public/assets/app/images/empty-cart-icon.png"
              alt=""
              style={{ height: "120px", width: "120px" }}
            ></img>
            <p>Shopping Cart is Empty</p>
            <Link to="/">
              <button className="start-shopping">Start shopping now</button>
            </Link>
          </div>
        )}
      </section>
    );
}

export default Cart