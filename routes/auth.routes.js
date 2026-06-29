const express = require("express");
const authController = require("../controllers/auth.controller");

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Backend is working");
});

router.post("/signup", authController.signup);
router.post("/login", authController.login);

module.exports = router;
