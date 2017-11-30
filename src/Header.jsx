import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='header-top'>
                    <span>Boutique de Masques en tissu Coréen</span>
                </div>
                <div className='header-logo'>
                    <span>mimik</span>
                </div>
                <ul className='header-menus'>
                    <li className='header-menu'>PRODUCTS</li>
                    <li className='header-menu'>COMMENT UTILISER?</li>
                    <li className='header-menu'>CONTACTEZ-NOUS</li>
                    <li className='header-menu'>INSCRIPTION</li>
                    <li className='header-menu'>REVIEW</li>
                    <li className='header-icon'>
                        <i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
                    </li>
                    <li className='header-icon'>
                        <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;