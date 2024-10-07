function islandCount(grid) {
  if (grid.length === 0) return 0;

  const ROWS = grid.length,
    COLS = grid[0].length;
  let numOfIslands = 0;
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  function dfs(row, col) {
    if (row < 0 || col < 0 || row >= ROWS || col >= COLS) return;
    if (grid[row][col] === "0") return;

    grid[row][col] = "0";

    for (const [rowDiff, colDiff] of directions) {
      dfs(row + rowDiff, col + colDiff);
    }
  }

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (grid[row][col] === "1") {
        dfs(row, col);
        numOfIslands += 1;
      }
    }
  }

  return numOfIslands;
}
