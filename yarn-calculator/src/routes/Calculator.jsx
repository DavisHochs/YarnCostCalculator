import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = (operator) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult("Please enter valid numbers");
      return;
    }

    let res;
    switch (operator) {
      case "add":
        res = number1 + number2;
        break;
      case "subtract":
        res = number1 - number2;
        break;
      case "multiply":
        res = number1 * number2;
        break;
      case "divide":
        res = number2 !== 0 ? number1 / number2 : "Cannot divide by zero";
        break;
      default:
        res = "Invalid operation";
    }
    setResult(res);
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="text-center">Calculator</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Number 1</Form.Label>
          <Form.Control
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Number 2</Form.Label>
          <Form.Control
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </Form.Group>
        <div className="d-flex justify-content-between">
          <Button variant="primary" onClick={() => handleCalculate("add")}>+</Button>
          <Button variant="secondary" onClick={() => handleCalculate("subtract")}>-</Button>
          <Button variant="success" onClick={() => handleCalculate("multiply")}>×</Button>
          <Button variant="danger" onClick={() => handleCalculate("divide")}>÷</Button>
        </div>
      </Form>
      {result !== null && (
        <h4 className="text-center mt-3">Result: {result}</h4>
      )}
    </Container>
  );
};

export default Calculator;
