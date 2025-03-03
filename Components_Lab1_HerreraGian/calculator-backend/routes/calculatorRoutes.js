const express = require("express");
const router = express.Router();
const { evaluateExpression } = require("../controllers/calculatorController");

router.post("/evaluate", evaluateExpression);

module.exports = router;
