import axios from "axios";
import { FILTRAR_CORREA } from ".";

export default function filtrarCorrea(payload) {
    return { type: FILTRAR_CORREA, payload};
  };
