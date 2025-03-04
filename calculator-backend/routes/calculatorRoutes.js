import { Router } from "express";
const calculatorRoutes = Router();
import { evaluateExpression } from "../controllers/calculatorController.js";

calculatorRoutes.post("/evaluate", evaluateExpression);

export default calculatorRoutes;
