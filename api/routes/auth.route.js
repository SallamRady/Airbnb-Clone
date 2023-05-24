const router = require("express").Router();
const authController = require("../controllers/auth.controller");

router.post("/register", authController.signup);

router.post("/login", authController.singin);

module.exports = router;
