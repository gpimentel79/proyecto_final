import React from "react";  
import '../../../styles/components/pages/NovedadesPage.css';

const NovedadItem = (props)=> {
   const {title, subtitle, imagen, body} = props;
   return (
       <div className="noticia">
         <img className="izquierda" src={imagen}/>
         <aside>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          </aside>
         
           
          <div dangerouslySetInnerHTML={{ __html:body}}/>
          <hr />
       </div>
   )
}
export default NovedadItem;