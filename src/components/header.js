import React from "react";
import SignIn from "./signIn";

function Header() {
    return(
        <header>
            <div className="logo">PIZZA</div>
            <div className="btn-wrapper">
                <SignIn/>
            </div>
        </header>
    )
}

export default Header