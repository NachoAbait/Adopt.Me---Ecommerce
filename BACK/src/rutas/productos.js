const express = require("express");
const router = express.Router();
const ProductosModel = require("../modelos/productos");
require("../db");

router.post("/", async (req, res) => {
  try {
    const { titulo, id, precio, descripcion, stock, img, talle, tipo} = req.body;
    const producto = new ProductosModel({
      titulo,
      id,
      precio,
      descripcion,
      stock,
      img,
      talle,
      tipo
    });
    const productoSaved = await producto.save();
    console.log(productoSaved);

    res.status(200).json({ msg: "Usuario creado exitosamente" });
  } catch (error) {
    res.status(400).json({ msg: "no se pudo crear el producto" });
  }
});

router.get("/", async (req, res) => {
  try {
    let productos = await ProductosModel.find();
    res.status(200).json(productos);
  } catch (error) {
    res.status(400).json({ msg: "No se encontro ningun producto" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    let detalle = await ProductosModel.findOne({ id: id });
    res.status(200).json(detalle);
  } catch (error) {
    res.status(400).json({ msg: "No se encontro ningun producto con ese id" });
  }
});


module.exports = router;
