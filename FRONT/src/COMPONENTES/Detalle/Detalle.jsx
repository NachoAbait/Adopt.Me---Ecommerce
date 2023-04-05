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


    return (
        <div className={css.container}>

            <div className={css.barra}>
                <h1>BARRA</h1>
            </div>

            <div className={css.mini}>
                <div className={css.fotos}>
                    <div className={css.carrusel}>
                        <img src={detalle.img && detalle.img[currentImg]} alt="producto" />
                    </div>
                    <br />
                    <button className={css.anterior} onClick={prevImg}>&#10094;</button>
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
                                            <button className={css.boton_talle}>{talle.talle}</button>
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

            <div className={css.descripcion}>
                <div className={css.desc}>
                    <h1>{detalle.descripcion}</h1>
                </div>
            </div>
            
            
        </div>
    )
    
}
