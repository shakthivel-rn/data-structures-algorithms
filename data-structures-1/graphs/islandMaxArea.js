function islandMaxArea(grid) {
  if (grid.length === 0) return 0;

  const ROWS = grid.length,
    COLS = grid[0].length;
  let globalMaxArea = 0;
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  function dfs(row, col) {
    if (row < 0 || col < 0 || row >= ROWS || col >= COLS) return 0;
    if (grid[row][col] === 0) return 0;

    grid[row][col] = 0;

    return (
      1 +
      directions.reduce(
        (acc, [rowDiff, colDiff]) => acc + dfs(rowDiff + row, colDiff + col),
        0
      )
    );
  }

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (grid[row][col] === 1) {
        const localMaxArea = dfs(row, col);
        globalMaxArea = Math.max(globalMaxArea, localMaxArea);
      }
    }
  }

  return globalMaxArea;
}
