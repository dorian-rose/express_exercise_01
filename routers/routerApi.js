const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { validateInputs } = require("../middleware/validateInputs");
const {
  getServicios,
  getServicio,
  createServicio,
  updateServicio,
  deleteServicio,
} = require("../controllers/apiControllers");

router.get("/servicios", getServicios);
router.get("/servicio/:id", getServicio);
router.post(
  "/servicio",
  [
    check("servicio", "The service is obligatory").not().isEmpty(),
    check("descripcion", "The service is obligatory").not().isEmpty(),
    validateInputs,
  ],
  createServicio
);
router.put(
  "/servicio/:id",
  [
    check("servicio", "The service is obligatory").not().isEmpty(),
    check("descripcion", "The service is obligatory").not().isEmpty(),
    validateInputs,
  ],
  updateServicio
); //validate
router.delete("/servicio/:id", deleteServicio);

module.exports = router;
