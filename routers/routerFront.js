const express = require("express");
const router = express.Router();
const {
  getIndex,
  getServicios,
  getProductos,
  getQuienesSomos,
  getContacto,
} = require("../controllers/frontControllers");

//import routes

router.get("/", getIndex);

router.get("/servicios", getServicios);

router.get("/productos", getProductos);

router.get("/quienesSomos", getQuienesSomos);

router.get("/contacto", getContacto);

module.exports = router;
