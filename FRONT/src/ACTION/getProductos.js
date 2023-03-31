import axios from "axios";
import { GET_PRODUCTOS } from ".";

export default function getProductos() {
  return async function (dispatch) {
    const productos = await axios.get("http://localhost:3001/productos");
    console.log(productos.data)
    return dispatch({ type: GET_PRODUCTOS, payload: productos.data });
  };
}
