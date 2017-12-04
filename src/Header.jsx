import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
    render() {
        return (
            <div className='header'>
                <span className='header__top'>
                    Boutique de Masques en tissu Coréen
                </span>
                <span className='header__logo'>
                    mimik
                </span>
                <nav className='header-menu-bar'>
                    <span className='header-menu-bar__title'>PRODUCTS</span>
                    <span className='header-menu-bar__title'>COMMENT UTILISER?</span>
                    <span className='header-menu-bar__title'>CONTACTEZ-NOUS</span>
                    <span className='header-menu-bar__title'>INSCRIPTION</span>
                    <span className='header-menu-bar__title'>REVIEW</span>
                    <span className='header-menu-bar__icon'>
                        <i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
                    </span>
                    <span className='header-menu-bar__icon'>
                        <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
                    </span>
                </nav>
            </div>
        )
    }
}


export default Header;