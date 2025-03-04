const express = require("express");
const { register, login } = require("../controllers/auth");
const { checkGrammar } = require("../controllers/check-grammar");
const router = express.Router();

router.post("/auth/register", register);
router.post("/auth/login", login);
router.post("/check-grammar", checkGrammar)

module.exports = router;
