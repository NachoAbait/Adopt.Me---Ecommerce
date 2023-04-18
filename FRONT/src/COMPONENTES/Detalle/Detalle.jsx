import React, { useEffect , useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import css from "./Detalle.module.css"
import { useParams } from "react-router-dom";
import getDetalle from "../../ACTION/getDetalle";

export default function Detalle() {
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetalle(id))
    }, [dispatch])

  
    const detalle = useSelector((state) => state.detalleProducto)
    console.log(detalle)

    const imagenes = detalle.img 
    const colores = detalle.colores
    console.log("estos son los colores")
    console.log(colores)

    const[colorActual, setColorActual] = useState( "rojo")
    console.log("estado color:")
    console.log(colorActual)

    const [currentImg, setCurrentImg] = useState(0);


    const nextImg = () => {
        if (currentImg ===  imagenes.length - 1) {
        setCurrentImg(0);
        } else {
        setCurrentImg(currentImg + 1);
        }
    };
    
    const prevImg = () => {
            if (currentImg === 0) {
                setCurrentImg(imagenes.length - 1);
            } else {
                setCurrentImg(currentImg - 1);
            }
    };
    

    const handleColorActual = (e) => {
        e.preventDefault()
        setColorActual(e.target.value)
    }

    const verificarStock = (talle) => {
        let colorete = undefined
        let tallete = undefined

        colores.map((colores) => {
            if (colores.color === colorActual) {
                colorete = colores
                return(colorete)
            }
        })
        console.log("este es el colorete")
        console.log(colorete)

        colorete.talle_Stock.map((talleStock) => { 
            if (talleStock.talle === talle) {
                tallete = talleStock
            }
        })
        console.log("este es el tallete")
        console.log(tallete)
        
        return (tallete.stock>0 ? false : true )
    }

    return (
        <div className={css.container}>

            <div className={css.barra}>
                <div className={css.back}>
                    <div className={css.iconoBack}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16"> <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/> </svg>
                    </div>
                </div>
                <div className={css.perfil}>
                    <div className={css.iconoPerfil}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg> 
                    </div>
                </div>
                <div className={css.carrito}>
                    <div className={css.iconoCarrito}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16"><path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/></svg>
                    </div>
                </div>
            </div>

            <div className={css.mini}>
                <div className={css.fotos}>
                    <div className={css.carrusel}>
                        <img src={detalle.img && detalle.img[currentImg]} alt="producto" />
                    </div>
                    <br />
                    <button className={css.anterior} onClick={prevImg}>&#10094;</button> &nbsp;&nbsp;
                    <button className={css.siguiente} onClick={nextImg}>&#10095;</button>
                </div>
         
                <div className={css.menu}>
                    <div className={css.titulo}>
                        <h1>{ detalle.titulo}</h1> 
                    </div>
                    <div className={css.precio}>
                        <h2>$ { detalle.precio}</h2>
                    </div>
                    <div className={css.metodo}>
                        <h2>Ver metodos de pago</h2>
                    </div>
                    <div className={css.color}>
                        <div className={css.colorcolor}>
                            <h2>Color:</h2>
                        </div>
                        <div className={css.color_desplegable}>
                            <select onChange={(e) => handleColorActual(e)} className={css.option}>
                                {colores && colores.map((color) => {
                                    return <option value={color.color} className={css.option}>{color.color}</option>
                                })}
                                
                        </select>
                        </div>
                        
                    
                    </div>
                    <div className={css.cantidad}>
                        <div className={css.talles}>
                            <h2>Talles:</h2>
                        </div>
                        <div className={css.talles_talles}>
                            {detalle.colores && detalle.colores.map((e) => {
                                if (e.color === colorActual) {
                                    return e && e.talle_Stock.map((talle) => {
                                        return <div className={css.container_boton}>
                                            <button disabled={verificarStock(talle.talle)} className={css.boton_talle}>{talle.talle}</button>
                                            &nbsp; &nbsp;
                                            </div>
                                    })
                                }
                            })} 
                        </div>
                        
                    </div>
                    <div className={css.boton}>
                        <h2>Comprar ahora</h2>
                    </div>
                    <div className={css.boton}>
                        <h2>Agregar al carrito</h2>
                    </div>
                  

                </div>
            </div>    
            br
            <div className={css.descripcion}>
                <div className={css.desc}>
                    <h1>{detalle.descripcion}</h1>
                </div>
            </div>
            
            
        </div>
    )
    
}
