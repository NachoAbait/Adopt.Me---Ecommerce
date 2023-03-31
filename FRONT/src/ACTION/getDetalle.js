import axios from "axios";
import { GET_DETALLE } from ".";

export default function getDetalle(id) {
  return async function (dispatch) {
    const detalle = await axios.get(`http://localhost:3001/productos/${id}`);
    console.log(detalle.data)
    return dispatch({ type: GET_DETALLE, payload: detalle.data });
  };
}
