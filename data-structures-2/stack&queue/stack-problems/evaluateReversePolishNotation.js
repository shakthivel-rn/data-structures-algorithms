function evaluateReversePolishNotation(tokens) {
  const stack = [];

  for (const token of tokens) {
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else {
      const b = stack.pop();
      const a = stack.pop();

      stack.push(calculate(a, b, token));
    }
  }

  return stack[0];
}

function calculate(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return Math.trunc(a / b);
    default:
      throw new Error("Unsupported operator");
  }
}
