import React, { Component } from 'react'

import VarvLogo from '../images/fran.png'
import NeoLogo from '../images/neoyoga.png'
import TCLogo from '../images/tucancha.jpg'
import './style/clients.css'

 class Clients extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-p">
                    <h3>CLIENTES</h3>
                </div>

                <div>
                    <ul className="footer-ul">
                        <li>
                            < a href>
                                <img src={VarvLogo} alt="Varvlav" />
                            </a>
                        </li>
                        <li>
                            <a href>
                                <img src={NeoLogo} alt="Varvlav" />
                            </a>
                        </li>
                        <li>
                            <a href>
                                <img src={TCLogo} alt="Varvlav" />
                            </a>
                        </li>
                    </ul>

                </div>

                <div className="pie-footer"></div>



            </div>
        )
    }
}

export default Clients;