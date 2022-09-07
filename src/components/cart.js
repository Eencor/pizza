import React, { useState } from "react";
import {useSelector} from 'react-redux';
import CartWindow from "./cartWindow";

function Cart(){

    const [cartVisible, setCartVisible] = useState(false);

    const foodInCart = useSelector(state => state.cart.cartItems);
    const count = foodInCart.reduce((acc, el) => acc += el.count, 0);
    const totalPrice = foodInCart.reduce((acc, el) => acc += (el.price * el.count), 0);

    

    return(
        <div className="cart">
            <button className="orange-btn" onClick={() => setCartVisible(!cartVisible)}>
                Корзина {count === 0 ? '': count}
            </button>
            {cartVisible ? <CartWindow totalPrice = {totalPrice} foodInCart = {foodInCart} /> : null}
        </div>
    )
}

export default Cart 