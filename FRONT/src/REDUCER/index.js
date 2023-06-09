//ACCIONES
import {
  GET_PRODUCTOS,
  GET_DETALLE,
  FILTRAR_CORREA,
  FILTRAR_RASTREADOR,
  FILTRAR_ROPA,
  SET_USER,
  CLEAR_USER_DATA,
  GET_USERS,
} from "../ACTION";

//ESTADOS GLOBALES
const initialState = {
  productos: [],
  productosCopia: [],
  detalleProducto: [],
  userData: [],
  users: [],
};

//ROOT REDUCER
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTOS:
      return {
        ...state,
        productos: action.payload,
        productosCopia: action.payload
      };
    
    case GET_DETALLE:
      return {
        ...state,
        detalleProducto: action.payload,
      };
    
    case FILTRAR_CORREA:
      const allproductos = state.productosCopia
      const filtradoCorrea = allproductos.filter((e) => {
        return e.tipo.includes(action.payload)
      })
      console.log(filtradoCorrea)
      return {
        ...state,
        productos: filtradoCorrea
      };
    
    case FILTRAR_RASTREADOR:
      const allproductos2 = state.productosCopia
      const filtradoRastreador = allproductos2.filter((e) => {
        return e.tipo.includes(action.payload)
      })
      console.log(filtradoRastreador)
      return {
        ...state,
        productos: filtradoRastreador
      };
    
    case FILTRAR_ROPA:
      const allproductos3 = state.productosCopia
      const filtradoRopa = allproductos3.filter((e) => {
        return e.tipo.includes("ropita")
      })
      console.log(filtradoRopa)
      return {
        ...state,
        productos: filtradoRopa
      };

      case SET_USER:
      return { ...state, 
        userData: action.payload 
      };

      case CLEAR_USER_DATA:
        return {
          ...state,
          userData: null,
        }

        case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };

      case "getDetalleUsuario":
      return {
        ...state,
        detalleUsuario: action.payload,
      };

      default:
        return state;
  }
}
