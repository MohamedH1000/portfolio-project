import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import './totalpayment.css'

//a component for displaying the total amount of prices that is added to the cart
const Totalpayment = () => {
    
    const {getTotalCartAmount} = useContext(ShopContext);
    let totalAmount = getTotalCartAmount(); 
  return (
    <div className="checkout">
      <div className="invoice">
        <div className="checkout-details">
            <div className="div-details">
              <p>Shipment subtotal</p>
              <p style={{fontWeight:'600'}}>{totalAmount} EGP</p>
            </div>
            <div className="delivery-fees">
              <p>Delivery Fees</p>
              <p style={{fontWeight:'600'}}>Up to 10 EGP</p>
            </div>
            <div className="total-shipment">
              <p style={{fontWeight:'600'}}>Total Shipment 1</p>
              <p style={{fontWeight:'600'}}>{totalAmount} EGP</p>
            </div>
        </div>
      </div>
      <div className="shipping-info">
        <div className="location-info">
          <span>Deliver To</span>
          <div className="d-flex">
            <div className="location-title">
              <img
                src="https://cdn.chefaa.com/filters:format(webp)/public/assets/app/images/location_header_icon.png"
                alt=""
                width="24"
                height="24"
              ></img>
              <Link to="https://chefaa.com/eg-en/login">Add Address</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout-pay">
        <div className="invoice-confirm">
          <button>Pay Online</button>
        </div>
        <div className="pay-cash">
          <button>Pay Cash</button>
        </div>
      </div>
    </div>
  );
};

export default Totalpayment;
