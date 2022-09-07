import React from "react";
import {useDispatch} from 'react-redux';
import {addCartItems, minusCartItems, deleteCartItems} from './redux/slice/cartSlice';

function CartItem({item}) {
    const dispatch = useDispatch();
    const itemTotalPrice = item.price * item.count;

    const addItem = () => {
        dispatch(addCartItems(item))
    };

    const minusItem = () => {
        dispatch(minusCartItems(item.id))
    };

    const deleteItem = () => {
        dispatch(deleteCartItems(item.id))
    };


    return(
        <div className="cart-item">
            <span>{item.title}</span>
            <div className="cart-count-wrapper">
                <button className="cart-item-btn" onClick={minusItem}>-</button>
                <p className="cart-count">{item.count}</p>
                <button className="cart-item-btn" onClick={addItem}>+</button>
            </div>            
            <p className="cart-item-tp">{itemTotalPrice} руб.</p>
            <button className="delete-btn" onClick={deleteItem}>x</button>            
        </div>
    )
};

export default CartItem;    