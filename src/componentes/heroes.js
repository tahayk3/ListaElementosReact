import React from "react";
import '../hojas-de-estilo/Heroe.css';

function Heroe(props){
    return(
        <div className='contenedor-heroe'>
            <img 
                className='imagen-heroe'
                src={require(`../imagenes/heroe-${props.imagen}.png`)}
                alt='Imagen de Wonder Woman' />
             <div className="contenedor-texto-heroe">
                <p className="nombre-heroe">{props.nombre}</p>
                <p className="cargo-heroe">{props.cargo}</p>
                <p className="texto-heroe">{props.testimonio}</p>
             </div>
        </div>
    );
}

export default Heroe;