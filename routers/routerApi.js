const express = require("express");
const router = express.Router();
const {
  getServicios,
  getServicio,
  createServicio,
  updateServicio,
} = require("../controllers/apiControllers");

router.get("/servicios", getServicios);
router.get("/servicio/:id", getServicio);
router.post("/servicio", createServicio);
router.put("/servicio/:id", updateServicio);

module.exports = router;
