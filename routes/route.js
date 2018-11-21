var express = require("express");

var router = express.Router();
var register = require("../modules/controller/register");
var login = require("../modules/controller/login");

router.post("/post", register.registerUser);
router.post("/get", login.loginUser);

module.exports = router;
