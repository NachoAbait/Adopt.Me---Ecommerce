import axios from "axios";
import { FILTRAR_RASTREADOR } from ".";

export default function filtrarRastreador(payload) {
    return { type: FILTRAR_RASTREADOR, payload};
};

