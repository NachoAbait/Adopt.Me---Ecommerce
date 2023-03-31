const mongoose = require("mongoose")
const { Schema } = mongoose

const productosSchema = new Schema({
    titulo: {
        require: true,
        type: String
    },
    id: {
        require: true,
        type: String
    },
    precio: {
        require: true,
        type: Number,
    },
    descripcion:{
        require: true,
        type: String
    },
    img: {
        require: true,
        type: Array
    },
    stock: {
        require: true,
        type: Number,
    },
    talle: {
        type: String
    },
    tipo: {
        require: true,
        type: String
    }
})

const ProductosModel = mongoose.model("productos", productosSchema)
module.exports = ProductosModel