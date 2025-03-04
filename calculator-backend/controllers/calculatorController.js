import { evaluate } from "mathjs";
export const evaluateExpression = (req, res) => {
  try {
    const { expression } = req.body;
    console.log(expression);

    if (!expression) {
      return res.status(400).json({ error: "expression required" });
    }

    const result = evaluate(expression);

    res.json({ result: result.toString() });
  } catch (error) {
    res.status(500).json({ error: "Error evaluating expression" });
  }
};
