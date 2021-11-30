import { faFacebook,faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt,faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import '../styles/components/pages/ContactoPage.css';
import {useState} from "react";
import axios from "axios";

const ContactoPage = (props) => {
    const initialForm = {
        nombre:'',
        email:'',
        telefono:'',
        mensaje:''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm );

    const handleChange = e => {
        const { name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }
   const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true);
    const response = await axios.post('http://localhost:3000/api/contacto',formData);
    
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false)
    {
        setFormData(initialForm)
    }
   }

    return (
    <main className="holder">
        <div className="columna contacto">
            <h2>Contactate con nosotros</h2>
            <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
                <p>
                    <label>Nombre </label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                </p>
                <p>
                    <label>E-mail</label>
                    <input type="text" name="email"  value={formData.email} onChange={handleChange}/>
                </p>
              
                <p>
                    <label>Teléfono</label>
                   <input type="text" name="telefono"  value={formData.telefono} onChange={handleChange}/>
                </p>
                <p>
                    <label>Comentario</label>
                    <textarea name="mensaje"  value={formData.mensaje} onChange={handleChange}> </textarea> 
                </p>
                <p className="centrar">
                    <input type="submit" value="Enviar"/> 

                </p>
                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}
            </form>
        </div>
        <div className="columna datos">
            <h2>Otras vías de contactos</h2>
            <p>Tambien pueden contactarse con nosotros usando los siguientes medios:</p>
            

            <ul>
                <li><FontAwesomeIcon icon={faPhoneAlt}/> Teléfono:454546464   </li>
                <li><FontAwesomeIcon icon={faEnvelopeOpen}/> Email:pepe@patagonianbeer.com.ar</li>
                <li><FontAwesomeIcon icon={faFacebook}/> Facebook</li>
                <li><FontAwesomeIcon icon={faTwitterSquare}/> Twitter</li>
            </ul>
            <img src="images/home/beer1.jpg" alt="Gonzalo's" height="275" width="100%"/>
                    
        </div>
    </main>
     
    );
}

export default ContactoPage;