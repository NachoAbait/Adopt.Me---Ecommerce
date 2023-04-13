const mongoose = require("mongoose");
const { Schema } = mongoose;

const comentariosSchema = new Schema({
    author: { type: String, required: true },
    content: { type: String, required: true },
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    date: { type: Date, default: Date.now },
})

const ComentariosModel = mongoose.model("comentarios", productosSchema);
module.exports = ComentariosModel;
