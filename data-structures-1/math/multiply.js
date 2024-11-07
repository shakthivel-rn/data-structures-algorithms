function multiply(num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";

  const N = num1.length,
    M = num2.length;
  const result = Array.from({ length: N + M }, () => 0);

  for (let i = N - 1; i >= 0; i--) {
    const n1 = num1.charCodeAt(i) - 48;

    for (let j = M - 1; j >= 0; j--) {
      const n2 = num2.charCodeAt(j) - 48;

      const sum = n1 * n2 + result[i + j + 1];
      result[i + j + 1] = sum % 10;
      result[i + j] += Math.floor(sum / 10);
    }
  }

  const product = result.join("").replace(/^0+/, "");
  return product;
}
