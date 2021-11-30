import { useState,useEffect } from "react";
import axios from 'axios';
import NovedadItem from "../components/layout/novedades/NovedadItem";
import '../styles/components/pages/NovedadesPage.css';


import React from "react";
const NovedadesPage = (props) => {
     
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] =useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);

            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    },[]);

    return (
        <section className="holder">
            <h1>Nuestras Cervezas</h1>
            {loading ? (
                <p>Cargando...</p>
            ):(
              novedades.map(item =><NovedadItem key={item.id}
                title={item.titulo} subtitle={item.subtitulo}
              imagen={item.imagen} body={item.cuerpo}/>)  
            )}
           
        </section>
    );
}

export default NovedadesPage;