const express = require("express");
const router = express.Router();
const {
  getServicios,
  getServicio,
  createServicio,
  updateServicio,
  deleteServicio,
} = require("../controllers/apiControllers");

router.get("/servicios", getServicios);
router.get("/servicio/:id", getServicio);
router.post("/servicio", createServicio);
router.put("/servicio/:id", updateServicio);
router.delete("/servicio/:id", deleteServicio);

module.exports = router;
