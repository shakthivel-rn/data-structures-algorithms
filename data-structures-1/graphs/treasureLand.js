function treasureLand(grid) {
  const ROWS = grid.length,
    COLS = grid[0].length;
  const CHEST = 0,
    LAND = 2147483647;
  const queue = [],
    directions = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (grid[row][col] === CHEST) queue.push([row, col]);
    }
  }

  while (queue.length) {
    const [row, col] = queue.shift();

    for (const [rowDiff, colDiff] of directions) {
      const newRow = row + rowDiff,
        newCol = col + colDiff;

      if (newRow < 0 || newCol < 0 || newRow >= ROWS || newCol >= COLS)
        continue;
      if (grid[newRow][newCol] !== LAND) continue;

      grid[newRow][newCol] = grid[row][col] + 1;
      queue.push([newRow, newCol]);
    }
  }
}
