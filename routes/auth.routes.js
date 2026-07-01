const express = require("express");
const authController = require("../controllers/auth.controller");
const { auth } = require("../middlewares/auth.middleware");
const {
  profile,
  adminDashboard,
  studentDashboard,
  visitorDashboard,
} = require("../controllers/user.controller");
const {
  isAdmin,
  isStudent,
  isVisitor,
} = require("../middlewares/role.middleware");

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Backend is working");
});

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/profile", auth, profile);
router.get("/admin/dashboard", auth, isAdmin, adminDashboard);

router.get("/student/dashboard", auth, isStudent, studentDashboard);

router.get("/visitor/dashboard", auth, isVisitor, visitorDashboard);

module.exports = router;
  