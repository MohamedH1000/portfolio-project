import React, { useContext } from 'react'
import './item.css'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/shopContext';
// every single item design in the website in the category pages
const Item = (props) => {
    const {addToCart, cartItem} = useContext(ShopContext);
    const cartItemAmount = cartItem[props.id];
  return (
    <div className='item'>
        {props.save.length > 0 &&
        <div className="save">
            save {props.save}
        </div>
        }
        <div className="image">
            <Link to={`/product/${props.id}`}><img src={props.image} alt='' style={{width:"139", height:"168px", objectFit:"cover", cursor:"pointer"}}></img></Link>
        </div>
        <div className="name-prices">
            <div className="name">
                {props.name}
            </div>
            <div className="prices">
                <p>{props.new_price} EGP</p>
                {props.old_price.length > 0 &&
                <p className='old_price'>{props.old_price} EGP</p>
                }
            </div>
            <button className="add-to-cart" onClick={()=> addToCart(props.id)}>Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
        </div>
    </div>
  )
}

export default Item;