const math = require("mathjs");

const evaluateExpression = (req, res) => {
  try {
    const { expression } = req.body;

    if (!expression || typeof expression !== "string") {
      return res.status(400).json({ error: "Invalid input" });
    }


    const result = math.evaluate(expression);

    res.json({ result: result.toString() });
  } catch (error) {
    res.status(500).json({ error: "Error evaluating expression" });
  }
};

module.exports = { evaluateExpression };
