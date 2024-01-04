import React, { createContext, useState } from 'react'
import all_products from '../components/assets/all_products'

export const ShopContext = createContext(null);

// a component for providing a data to all the website about the number
// of the cart items numbers that is added to the cart
const getDefaultCart =()=> {
    let cart = {};
    for (let i=1;i<all_products.length+1; i++){
        cart[i] = 0;
    }
    return cart;
};
const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getDefaultCart);

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = all_products.find((product)=> product.id === Number(item));
                totalAmount += cartItem[item] * itemInfo.new_price;
            }
        }
        return totalAmount;
    }

    const addToCart = (ItemId) => {
        setCartItem((prev)=> ({...prev, [ItemId]: prev[ItemId] + 1}))
    };

    const removeFromCart = (ItemId) => {
        setCartItem((prev)=> ({...prev, [ItemId]: prev[ItemId] - 1}))
    };

    const updateItemCartAmount = (newAmount, ItemId) => {
        setCartItem((prev)=> ({...prev, [ItemId]: newAmount}))
    };

    const contextValue = { cartItem, addToCart, removeFromCart, updateItemCartAmount, getTotalCartAmount};
    console.log(cartItem);
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  );
}

export default ShopContextProvider