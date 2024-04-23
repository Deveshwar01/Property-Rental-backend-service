const express = require("express");
const router = express.Router();

const {SellerSignup,SellerLogin} = require("../controllers/SellerAuth");
const {authenticateSeller} = require("../controllers/middlewares")


router.post("/login",SellerLogin);
router.post("/signup",SellerSignup);   
module.exports = router;