const express = require("express");
const authController = require("../controllers/auth.controller");
const { auth } = require("../middlewares/auth.middleware");
const { profile } = require("../controllers/user.controller");

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Backend is working");
});

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/profile", auth, profile);

module.exports = router;
