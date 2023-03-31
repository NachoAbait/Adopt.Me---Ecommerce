import React from "react";
import css from "./Paginado.module.css"

export default function Paginado({ ProductosPorPagina, Productos, paginado }) {
    const numeroPagina = [];

    for (let i = 0; i <= Math.ceil(Productos.length / ProductosPorPagina) - 1; i++) {
        numeroPagina.push(i + 1)
    }
    
    return (
        <nav className={css.paginado}>
            <ul className={css.numeros}>
                {numeroPagina && numeroPagina.map(numero => (
                    <li key={numero} className={css.numero}>
                        <a onClick={() => paginado(numero)}> {numero}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
         
}