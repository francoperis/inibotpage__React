import React from 'react';

import './style/form.css'
import FormImag from '../images/image.png';
class Form extends React.Component{
    handleChange = e => {
        console.log ({ 
            textarea : e.target.textarea,
            email : e.target.email,
            name : e.target.name,
            value : e.target.value,
        })
    }

    handleClick = e => {
        console.log ('Button was clicked')
    }


    render() {
        return(
            <div className="form">
                <div className="form-img">
                    <img src ={FormImag} alt="Form-img" />
                </div>
                <div class="form-action">
          ENVIANOS TU MENSAJE
          <form action="#" method="post">
            <label for="name"></label>
            <input
              onChange={this.handleChange}
              type="text"
              name="nombre"
              placeholder="Nombre"
              className="form-name"
              required
            />
            <br />
            <label for="email"></label>
            <input
              onChange={this.handleChange}
              type="email"
              name="email"
              placeholder="Email"
              className="form-email"
              required
            /><br />
            <label for="message"></label>
            <textarea
              onChange={this.handleChange}
              type="textarea"
              name="text"
              placeholder="Mensaje"
              minlength="15"
              className ="form-text"
              required
            ></textarea><br />
            <button 
            type="button"
            onClick={this.handleClick} 
            className="form-button"
            >Enviar</button><br />
          </form>
        </div>

                
            </div>
        )
    }
}

export default Form;        



