function fillDistancesFromGates(grid) {
  const ROWS = grid.length;
  const COLS = grid[0].length;

  const GATE = 0;
  const EMPTY = 2147483647;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const queue = [];

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] === GATE) {
        queue.push([r, c]);
      }
    }
  }

  while (queue.length) {
    const [row, col] = queue.shift();

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (
        newRow < 0 ||
        newRow >= ROWS ||
        newCol < 0 ||
        newCol >= COLS ||
        grid[newRow][newCol] !== EMPTY
      ) {
        continue;
      }

      grid[newRow][newCol] = grid[row][col] + 1;
      queue.push([newRow, newCol]);
    }
  }
}
