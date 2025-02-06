const express = require("express");
const handleSignup = require("../controller/use");
const router = express.Router();

router.post = ("/", handleSignup);
module.exports = router;
