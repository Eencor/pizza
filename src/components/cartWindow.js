import React from "react";
import CartItem from './cartItem'
import {useDispatch} from 'react-redux';
import {clearCartItems} from './redux/slice/cartSlice';
import CartEmpty from "./cartEmpty";

function CartWindow({totalPrice, foodInCart}) {
    
    const dispatch = useDispatch();

    const clearCart = () => {
        dispatch(clearCartItems());
    }

    if(!foodInCart.length){
        return <CartEmpty/>
    }

    return(
        <div className="cart-window-wrapper">
            <div className="cart-window">
                {foodInCart.map(el => <CartItem
                item = {el} 
                key={el.id}/>)}
                <div className="cart-window-footer">
                    <p>Сумма заказа: {totalPrice} руб.</p>
                    <div className="cart-window-footer-btn">
                        <button className="clear-btn" onClick={clearCart}>Очистить корзину</button>
                        <button className="buy-btn">Перейти к покупке</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default CartWindow