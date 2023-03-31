import React, { useEffect , useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import css from "./Detalle.module.css"
import { useParams } from "react-router-dom";
import getDetalle from "../../ACTION/getDetalle";

export default function Detalle() {
    const { id } = useParams()
    const dispatch = useDispatch()

    const detalle = useSelector((state) => state.detalleProducto)
    const imagenes = detalle.img 

    useEffect(() => {
        dispatch(getDetalle(id))
    },[dispatch])

    const [currentImg, setCurrentImg] = useState(0);

    console.log("este es el arreglo de img")
    console.log(imagenes)

    console.log("esta es la img actual")
    console.log(currentImg)

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
                    <div className={css.stock}>
                        <h2>Stock: {detalle.stock}</h2>
                    </div>
                    <div className={css.cantidad}>
                        <h2>Talle: {detalle.talle} </h2>
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
