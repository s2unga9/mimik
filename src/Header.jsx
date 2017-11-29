import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className='header-top'>
                <p>Boutique de Masques en tissu Coréen</p>
            </div>
            <div className='header-logo'>
                <img src="" alt="Mimik_logo"/>
            </div>
            <div className='header-list'>
                <ul>
                    <li>PRODUCTS</li>
                    <li>COMMENT UTILISER?</li>
                    <li>CONTACTEZ-NOUS</li>
                    <li>INSCRIPTION</li>
                    <li>REVIEW</li>
                    <li><img src="" alt="cart"/></li>
                    <li><img src="" alt="instagram"/></li>
                </ul>
            </div>  
        ) 
    }
}



export default Header;