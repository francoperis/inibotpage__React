import React from 'react';

class Form extends React.Component{
    handleChange = e => {
        console.log ({
            value : e.target.value

        })

    }
    handleClick = e => {
        console.log ('Mensaje enviado')
    }
    render() {
        return(
            <div>
                <h3>
                    ENVIANOS TU MENSAJE
                </h3>

                <form>
                    <div>
                        <label>Nombre</label>
                        <input onChange={this.handleChange} className="input-n" type="text" name="name" required></input>
                        <label>Email</label>
                        <input className="input-e" type="email" name="Email" required></input>
                        <label>Mensaje</label>
                        <textarea className="text" type="textarea" minLength ="15" name="Mensaje" required></textarea>
                    </div>
                    <button onClick={this.handleClick} className="button" type="button">ENVIAR</button>
                </form>
            </div>
        )
    }
}

export default Form;