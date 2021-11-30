import React from "react";
import '../styles/components/pages/HomePages.css';

const HomePage = (props) => {
    return (
        <main>
         <div class="hero-image">
         <img src="images/home/beer2.jpg" alt="Gonzalo's" height="350px" width="100%"/>    
        
</div>


          <div className="noticia">
         
                       
          </div>
          <aside>
            
          
            <h2>Bienvenidos</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
           
            <h2>Testimonios</h2>
            <div className="testimonios right">
           
            <div className="testimonio">
            <span className="cita"> "Cerveza Exquisita, totalmente recomendable"</span>
            <span className="autor">Pedro Rock</span>
            </div>
            </div>
            <div className="testimonios right">
            
            <div className="testimonio">
            <span className="cita"> "La Porter es una delicia. Excelente producto"</span>
            <span className="autor">Gonzalo Pimentel</span>
            </div>
            </div>
            <div className="testimonios right">
            
            <div className="testimonio">
            <span className="cita"> "Cerveza ideal para compartir con amigos"</span>
            <span className="autor">Luis Perez</span>
            </div>
            </div>
           
            </aside>

        </main>
    );
}

export default HomePage;