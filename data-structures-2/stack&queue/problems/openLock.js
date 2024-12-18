function openLock(deadends, target) {
  const start = "0000";
  const deadSet = new Set(deadends);
  const visited = new Set();

  if (deadSet.has(start)) return -1;
  if (start === target) return 0;

  const queue = [[start, 0]];

  while (queue.length > 0) {
    const [current, turns] = queue.shift();

    if (current === target) return turns;

    for (const neighbor of getNeighbors(current)) {
      if (!deadSet.has(neighbor) && !visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, turns + 1]);
      }
    }
  }

  return -1;
}

const getNeighbors = (code) => {
  const neighbors = [];

  for (let i = 0; i < 4; i++) {
    const digit = parseInt(code[i], 10);
    const nextCode =
      code.substring(0, i) + ((digit + 1) % 10) + code.substring(i + 1);
    const prevCode =
      code.substring(0, i) + ((digit + 9) % 10) + code.substring(i + 1);

    neighbors.push(nextCode, prevCode);
  }

  return neighbors;
};
