import React from 'react';

import Hero from '../componentes/Hero.js';
import Tecno from '../componentes/Tecno.js';
import About from '../componentes/About.js';

class Pages extends React.Component{
    render() {
        return(
            <div>
                <Hero />
                <Tecno />
                <About />
            </div>
        )
    }
}



export default Pages;

