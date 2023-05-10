const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");

const UsuarioSchema = new Schema({
  usuario: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contrasena: {
    type: String,
    required: false,
  },
  fotoPerfil: {
    type: String,
  },
  telefono: {
    type: String,
  },
  ciudad: {
    type: String,
  },
  pais: {
    type: String,
  },
  tipo: {
    type: String,
  },
  anosExperiencia: {
    type: String,
  },
  nacimiento: {
    type: String,
  },
  publicaciones: {
    type: String,
  },
  caca: {
    type: String,
  },
  paseadorContratado: {
    type: String,
  },
  puntuacion: {
    type: Array,
  },
  lat: {
    type: String,
    required: false,
  },
  lng: {
    type: String,
    required: false,
  },
  lat2: {
    type: String,
    required: false,
  },
  lng2: {
    type: String,
    required: false,
  },
  direccion: {
    type: String,
    required: false,
  },
  dni1: {
    type: String,
  },
  dni2: {
    type: String,
  },
  servicio: {
    type: String,
  },
  terminos: {
    type: Boolean,
  },
  paypal: {
    type: String,
  },
  notification: {
    type: Array,
  },
  roles: [
    {
      ref: "roles",
      type: Schema.Types.ObjectId,
    },
  ],
});

const UsuarioModel = mongoose.model("usuarios", UsuarioSchema);
module.exports = UsuarioModel;