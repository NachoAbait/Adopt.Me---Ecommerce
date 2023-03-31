import React from "react";
import css from "./Tarjeta.module.css"
import { Link } from "react-router-dom";

export default function Tarjeta({ titulo, precio, img, id }) {
    return (
        
        <div className={css.frente}>
            <Link to={ `/producto/${id}`} >
                <img className={css.img} src={img[0]} alt="fotito" />
            </Link>    
            <div className={css.cartel}>
                <div className={css.nombre}> { titulo } </div>
                <div className={css.precio}> ${ precio }</div>
                <div className={css.boton}>AGREGAR</div>
            </div>
            
            
        </div>
    )
}