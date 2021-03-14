import React from 'react';

import './style/hero.css'
import FiguraGrua from '../images/grua.png'
import Header from './Header.js'

class Hero extends React.Component{
    render() {
        return(
            
            <div className="banner">
                <div>
                    <Header />
                </div>
                <div className="main">
                    <div className="main-hero">
                        <h1 className="main-hero__h1">DESARROLLO <br/> DE SOFTWARE</h1>
                        <img className="main-hero__img" src={FiguraGrua} alt="Figura-grua" ></img>
                    </div>
                </div>
            </div>
        )   
        
    }
}


export default Hero;

