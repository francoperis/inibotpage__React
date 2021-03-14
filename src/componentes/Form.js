import React from 'react';

import FormImag from '../images/image.png';
class Form extends React.Component{
    handleChange = e => {
        console.log ({ 
            name : e.target.name,
            value : e.target.value,
        })
    }

    handleChange = e => {
        console.log ('Button was clicked')
    }


    render() {
        return(
            <div className="form">
                <div className="form-img">
                    <img src ={FormImag} alt="Form-img" />
                </div>

                <div className="form-action">
                    <h1>ENVIANOS TU MENSAJE</h1>

                    <form>
                        <div>
                            <label>Nombre</label>
                            <input onChange={this.handleChange} className="form-name" type="text" name="nombre" />
                        </div>

                        <button type="button" onClick={this.handleClick} className="form-button" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Form;