const express = require("express");
const router = express.Router();
const { authenticateUser } = require('../controllers/middlewares');
const { login, signup } = require("../controllers/auth");
router.post("/login", login);
router.post("/signup", signup);
module.exports = router;