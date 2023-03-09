const express = require("express");
const router = express.Router();
const {
  getIndex,
  getServicios,
  getProductos,
  getQuienesSomos,
  getContacto,
  getInstallations,
} = require("../controllers/frontControllers");

//import routes

router.get("/", getIndex);

router.get("/servicios", getServicios);

router.get("/installations", getInstallations);

router.get("/productos", getProductos);

router.get("/quienesSomos", getQuienesSomos);

router.get("/contacto", getContacto);

module.exports = router;
