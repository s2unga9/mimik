import './ContactUs.css';
import React, { Component } from 'react';


class Contact extends Component {
    render() {
        return (
            <div className='ContactUs'>

                <h1>CONTACTEZ-NOUS</h1>

                <form action="">

                    <h2>Je peux vous conseiller pour choisir vos masques<br />
                        Donnez-moi votre avis</h2>

                    <div>
                        <input required="required" type="text"
                            placeholder="Votre prénom" />
                    </div>

                    <div>
                        <input required="required" type="email"
                            placeholder="Votre email" />
                    </div>

                    <div>
                        <textarea required="required" placeholder="Message"></textarea>
                    </div>

                    <button type="submit" value="valide">Valide</button>

                    
                </form>
            </div>

                )
    }
}

export default Contact;