
// SERVIDOR
const express = require("express");
const app = express();

app.listen(3001, () => {
  console.log("Server on port 3001");
});

//MIDDLEWARES
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// MODELOS
const productoModel = require("./src/modelos/productos")
const usuarioModel = require("./src/modelos/usuarios")

//RUTAS
const rutasProducto = require("./src/rutas/productos")
const rutasUsuario = require("./src/rutas/usuarios")
const loginUsersLogin = require("./src/rutas/authRoutes");

app.use("/productos", rutasProducto)
app.use("/usuarios", rutasUsuario)
app.use("/login", loginUsersLogin)


//DATABASE
const mongoose = require("mongoose");
const uri = `mongodb+srv://noesneda:aleli123@proyecto.hbyeplt.mongodb.net/?retryWrites=true&w=majority`;

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("DB conectada");
  } catch (err) {
    console.error(err);
  }
}
connect();

