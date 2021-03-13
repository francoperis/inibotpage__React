import React from 'react';

import logo from '../images/logos/index';

import './style/tecno.css'
class Tecno extends React.Component{
    render(){
        return(
            <div className="tecno">
                <div className="tecno1">
                    <div className="tecno1__h2">
                        <h2>TECNOLOGIAS</h2>
                    </div>
                    <ul className="tecno1__child">
                        <li>
                            <img src={logo.html} alt="HTML" />
                        </li>
                        <li>
                            <img src={logo.react} alt="react" />
                        </li>
                        <li>
                            <img src={logo.vue} alt="vue" />
                        </li>
                        <li>
                            <img src={logo.nest} alt="nest" />   
                        </li>
                        <li>
                            <img src={logo.arangodb} alt="arangodb" />
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className="tecno1__child">
                        <li>
                            <img src={logo.mysql} alt="mysql" />
                        </li>
                        <li>
                            <img src={logo.next} alt="next" />
                        </li>
                        <li>
                            <img src={logo.gatsby} alt="gatsby" />
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Tecno;