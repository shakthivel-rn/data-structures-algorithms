function oceanReachables(heights) {
  const pacificReachables = new Set(),
    atlanticReachables = new Set();
  const ROWS = heights.length,
    COLS = heights[0].length;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  function dfsHelper(row, col, reachables, prevHeight) {
    if (row < 0 || col < 0 || row >= ROWS || col >= COLS) return;
    if (reachables.has(`${row}-${col}`) || heights[row][col] < prevHeight)
      return;

    reachables.add(`${row}-${col}`);

    for (const [rowDiff, colDiff] of directions) {
      dfsHelper(row + rowDiff, col + colDiff, reachables, heights[row][col]);
    }
  }

  for (let row = 0; row < ROWS; row++) {
    dfsHelper(row, 0, pacificReachables, heights[row][0]);
    dfsHelper(row, COLS - 1, atlanticReachables, heights[row][COLS - 1]);
  }

  for (let col = 0; col < COLS; col++) {
    dfsHelper(0, col, pacificReachables, heights[0][col]);
    dfsHelper(ROWS - 1, col, atlanticReachables, heights[ROWS - 1][col]);
  }

  const result = [];
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (
        pacificReachables.has(`${row}-${col}`) &&
        atlanticReachables.has(`${row}-${col}`)
      ) {
        result.push([row, col]);
      }
    }
  }

  return result;
}
