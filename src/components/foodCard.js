import React from "react";
import {useDispatch} from 'react-redux';
import {addCartItems} from './redux/slice/cartSlice'

function FoodCard({item}) {

    const dispatch = useDispatch();

    return(
        <article className="food-card">
            <div className="food-card-main">
                <img src={item.image} alt={item.title} />
                <h2>{item.title}</h2>
                <span>{item.compound}</span>
            </div>
            <div className="food-card-footer">
                <p>от {item.price}руб</p>
                <button className="orange-btn" onClick={ () => {dispatch(addCartItems(item))} }>Выбрать</button>
            </div>
        </article>
    )
}

export default FoodCard