import axios from "axios";
import { FILTRAR_ROPA } from ".";

export default function filtrarRopa(payload) {
    return { type: FILTRAR_ROPA, payload };
  };
