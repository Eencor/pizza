import React from "react";
import Cart from "./cart";

function Navigation() {
    
    return(
        <nav>
            <a href="#pizza">Пицца</a>
            <a href="#drink">Напитки</a>
            <Cart/>
        </nav>
    )
}

export default Navigation