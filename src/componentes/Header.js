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
                        <li className="navbar-ul__li">
                            <a href="#">ABOUT US</a>
                        </li>
                        <li className="navbar-ul__li">
                            <a href="#">TECNOLOGIA</a>
                        </li>
                        <li className="navbar-ul__li">
                            <a href="#">FORMULARIO</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        )
    }
}

export default Header;