const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { validateInputs } = require("../middleware/validateInputs");
const { getUser, createUser } = require("../controllers/apiUserControllers");

router.get("/user/:id", getUser);
router.post(
  "/user",
  [
    check("userName", "The username is obligatory").not().isEmpty(),
    check("email", "Email must be a valid email").isEmail().normalizeEmail(),
    check("password", "Password is obligatory")
      .isLength({ min: 10 })
      .withMessage("must be at least 10 characters long")
      .matches(/\d/)
      .withMessage("must contain a number")
      .matches(/\D/)
      .withMessage("must contain a letter"),
    validateInputs,
  ],
  createUser
);

module.exports = router;
