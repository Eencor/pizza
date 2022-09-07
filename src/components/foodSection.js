import React from "react";
import FoodCard from "./foodCard";

function FoodSection({id, food, title}) { 

    return(
        <section className="food-section-wrapper" id = {id}>
            <h1>{title}</h1>
            <div className="food-section">
                {food.map( el => <FoodCard
                key={el.id}
                item = {el}/>)}
            </div>
        </section>
    )
}

export default FoodSection