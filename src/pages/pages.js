import React from 'react';


import '../componentes/style/global.css';
import Hero from '../componentes/Hero.js';
import Tecno from '../componentes/Tecno.js';
import About from '../componentes/About.js';
import Form from '../componentes/Form.js';
import Clients from '../componentes/Clients.js'

class Pages extends React.Component{
    render() {
        return(
            <div>
                <Hero />
                <Tecno />
                <About />
                <Form />
                <Clients />
            </div>
        )
    }
}



export default Pages;

