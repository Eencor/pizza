import React from 'react';
import Header from '../components/header.js';
import Menu from '../components/menu.js';
import Navigation from '../components/navigation.js';

function Main() {
    return(
        <div className='main'>
            <Header/>
            <Navigation/>
            <Menu/>
        </div>
    )
}

export default Main;