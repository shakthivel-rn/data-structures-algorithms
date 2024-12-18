var perfectSquares = function (n) {
  if (n <= 0) return 0;

  const perfectSquares = [];
  for (let i = 1; i * i <= n; i++) {
    perfectSquares.push(i * i);
  }

  const queue = [n];
  const visited = new Set();
  visited.add(n);
  let level = 0;

  while (queue.length > 0) {
    level += 1;
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const current = queue.shift();

      for (const square of perfectSquares) {
        const next = current - square;

        if (next === 0) return level;
        if (next < 0) break;
        if (next > 0 && !visited.has(next)) {
          queue.push(next);
          visited.add(next);
        }
      }
    }
  }

  return level;
};
