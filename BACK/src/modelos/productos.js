const mongoose = require("mongoose");
const { Schema } = mongoose;

const productosSchema = new Schema({
  titulo: {
    require: true,
    type: String,
  },
  colores: {
    require: true,
    type: Array,
  },
  id: {
    require: true,
    type: String,
  },
  precio: {
    require: true,
    type: Number,
  },
  descripcion: {
    require: true,
    type: String,
  },
  img: {
    require: true,
    type: Array,
  },
  tipo: {
    require: true,
    type: String,
  },
});

const ProductosModel = mongoose.model("productos", productosSchema);
module.exports = ProductosModel;
