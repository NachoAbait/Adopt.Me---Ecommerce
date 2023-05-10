require('dotenv').config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const UsuarioModel = require("../modelos/usuarios");
require("../db");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

router.post("/", async (req, res) => {
  
    const email = req.body.email;
    const contrasena = req.body.contrasena;
  
    if (email && contrasena) {
  
      try {
        const usuario = await UsuarioModel.findOne({ email: email });
  
        if (!usuario) {
          res.status(401).send("Credenciales incorrectas");
  
        } else {
          const contrasenaCoincide = await bcrypt.compare(
            contrasena,
            usuario.contrasena
            );
            const token = jwt.sign({ email: usuario.email }, process.env.SECRET_KEY);
  
          if (!contrasenaCoincide) {
            res.status(401).send("Credenciales incorrectas");
  
          } else {
            res.status(200).json({ email, token });
          }
        }
  
      } catch (error) {
        console.log(error);
        res.status(500).send("Error interno del servidor");
      }
  
    } else {
      res.status(400).send("Credenciales incompletas");
    }
  });

module.exports = router;