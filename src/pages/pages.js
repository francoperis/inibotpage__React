import React from 'react';


import '../componentes/style/global.css';
import Hero from '../componentes/Hero.js';
import Tecno from '../componentes/Tecno.js';
import About from '../componentes/About.js';
import Form from '../componentes/Form.js';

class Pages extends React.Component{
    render() {
        return(
            <div>
                <Hero />
                <Tecno />
                <About />
                <Form />
            </div>
        )
    }
}



export default Pages;

