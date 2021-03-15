import React from 'react';

import './style/header.css'
import Logopage from '../images/paglogo.png'
class Header extends React.Component{
    render() {
        return (
        <div className="header">
            <div className="header-img">
                <img src = {Logopage} alta ="InibotLogo" />
            </div>

            <div>
                <nav className="navbar">
                    <ul className="navbar-ul">
                        <li><a href="#profile-banner" className="navbar-ul__li">ABOUT</a></li>
                        <li><a href="#profile-tecno" className="navbar-ul__li">NOSOTROS</a></li>
                        <li><a href="#profile-form" className="navbar-ul__li">FORMULARIO</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        )
    }
}

export default Header;