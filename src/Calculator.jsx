import React, { useState } from 'react';
import * as math from 'mathjs';

function Calculator() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleExpressionChange = (event) => {
    setExpression(event.target.value);
  };

  const evaluateExpression = () => {
    try {
      const parsedExpression = math.parse(expression);
      const evaluated = parsedExpression.compile().eval();
      setResult(evaluated);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div>
      <h1>Math Chatbot</h1>
      <input
        type="text"
        placeholder="Enter a math expression"
        value={expression}
        onChange={handleExpressionChange}
      />
      <button onClick={evaluateExpression}>Calculate</button>
      <div>
        <p>Result: {result}</p>
      </div>
    </div>
  );
}

export default Calculator;
