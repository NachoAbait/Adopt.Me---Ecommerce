
import css from "./Index.module.css"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
//ACTIONS
import getProductos from "../../ACTION/getProductos"
import filtrarCorrea from "../../ACTION/filtrarCorrea"
import filtrarRastreador from "../../ACTION/filtrarRastreador"
import filtrarRopa from "../../ACTION/filtrarRopa"
//COMPONENTES
import Loading from "../Loading/Loading"
import Tarjeta from "../Tarjeta/Tarjeta"
import Paginado from "../Paginado/Paginado"


export default function Index() {
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getProductos())
    },[dispatch])

    const Productos = useSelector((state) => state.productos) 
    
    const [paginaActual, setPaginaActual] = useState(1)
    const [ProductosPorPagina, setProductosPorPagina] = useState(9)
    const indiceUltimoProducto = paginaActual * ProductosPorPagina
    const indicePrimerProducto = indiceUltimoProducto - ProductosPorPagina
    const productosActual = Productos.slice(indicePrimerProducto, indiceUltimoProducto)

    
    if (!Productos || Productos.length === 0) {
        return (
            <Loading></Loading>
        )
    }

    const paginado = (numeroDePaginas) => { 
        setPaginaActual(numeroDePaginas)
    }
    
    const handleTodosLosProductos = (e) => {
        dispatch(getProductos())
        setPaginaActual(1)
    }

    const handleFilterCorrea = (e) => {
        dispatch(filtrarCorrea("correa"))
        setPaginaActual(1)
    }

    const handleFilterRastreador = (e) => {
        dispatch(filtrarRastreador("rastreador"))
        setPaginaActual(1)
    }

    const handleFilterRopa = (e) => {
        dispatch(filtrarRopa("ropita"))
        setPaginaActual(1)
    }

    return (
        <div>
            <div className={css.container}>
                <div className={css.barraLateral}>
                    <div className={css.logo}>
                        <h1 className={css.adopt}>Adopt.me</h1>
                        <h5 className={css.commerce}>--Commerce--</h5>
                    </div>
                    <br /> <br /> <br /> <br />

                    <div className={css.boton}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg> 
                    &nbsp;  Perfil
                    </div><br /> <br /> <br /> <br />
                    

                    <div className={css.item} onClick={handleTodosLosProductos}>
                        &nbsp;&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" /></svg>
                        &nbsp; Todos los productos
                    </div><br />
                    

                    <div className={css.item} onClick={handleFilterRopa}>
                        &nbsp;&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" /></svg>
                        &nbsp;  Ropita
                    </div><br />
                    

                    <div className={css.item} onClick={handleFilterRastreador}>
                        &nbsp;&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" /></svg>
                        &nbsp;  Rastreadores
                    </div><br />
                    

                    <div className={css.item} onClick={handleFilterCorrea}>
                        &nbsp;&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" /></svg>
                        &nbsp;   Correas
                    </div><br /> <br /> <br /> <br /><br />
                    
                    
                    <div className={css.boton}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16"><path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/></svg>
                    &nbsp; Carrito
                    </div>

                    <div className={css.publicidad} >
                        <p >PUBLICIDAD</p>
                    </div><br />
                </div>
                    
                <div className={css.centro}>
                    <div className={css.paginado}>
                        <Paginado ProductosPorPagina={ProductosPorPagina} Productos={Productos} paginado={paginado} />
                    </div>
                    
                        {productosActual &&  productosActual.map(p => {
                            return (
                                <Tarjeta titulo={p.titulo} id={p.id} precio={p.precio} descripcion={p.descripcion} img={p.img} stock={p.stock} talle={p.talle} tipo={p.tipo} />    
                            )
                        })}
                   
                </div>
                
            </div>
        </div>
    )
}