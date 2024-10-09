function orangesRotting(grid) {
  const queue = [];
  const ROWS = grid.length,
    COLS = grid[0].length;
  let freshOranges = 0;

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (grid[row][col] === 2) queue.push([row, col]);
      if (grid[row][col] === 1) freshOranges += 1;
    }
  }

  if (freshOranges === 0) return 0;

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let minutes = -1;

  while (queue.length) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const [row, col] = queue.shift();

      for (const [rowDiff, colDiff] of directions) {
        const newRow = row + rowDiff,
          newCol = col + colDiff;

        if (newRow < 0 || newCol < 0 || newRow >= ROWS || newCol >= COLS)
          continue;
        if (grid[newRow][newCol] !== 1) continue;

        grid[newRow][newCol] = 2;
        freshOranges -= 1;
        queue.push([newRow, newCol]);
      }
    }

    minutes += 1;
  }

  return freshOranges === 0 ? minutes : -1;
}
