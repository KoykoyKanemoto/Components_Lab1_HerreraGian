export const evaluateExpression = async (expression) => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/calculator/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ expression }),
      });
  
      const data = await response.json();
      return data.result || "Error";
    } catch (error) {
      console.error("Error fetching data:", error);
      return "Error";
    }
  };
  