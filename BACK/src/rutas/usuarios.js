const express = require("express");
const router = express.Router();
const UsuarioModel = require("../modelos/usuarios");
require("../db");
require("bcryptjs");

router.get("/", async (req, res) => {
    try {
      let users = await UsuarioModel.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ msg: "no se encontró nada" });
    }
  });

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      let userId = await UsuarioModel.findById(id);
      if (userId) {
        let u = await userId.save();
        res.status(200).json(u);
      } else {
        res.status(400).json(`${id} no encontrado`);
      }
    } catch (error) {
      res.status(400).json(`${id} no encontrado`);
    }
  });

  module.exports = router;