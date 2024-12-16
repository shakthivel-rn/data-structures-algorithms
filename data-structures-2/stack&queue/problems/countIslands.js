function countIslands(grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let islands = 0;

  const exploreIsland = (r, c) => {
    const queue = [[r, c]];
    grid[r][c] = "0";

    while (queue.length) {
      const [curRow, curCol] = queue.shift();

      for (const [dr, dc] of directions) {
        const newRow = curRow + dr;
        const newCol = curCol + dc;

        if (
          newRow < 0 ||
          newRow >= rows ||
          newCol < 0 ||
          newCol >= cols ||
          grid[newRow][newCol] === "0"
        ) {
          continue;
        }

        grid[newRow][newCol] = "0";
        queue.push([newRow, newCol]);
      }
    }
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        islands++;
        exploreIsland(r, c);
      }
    }
  }

  return islands;
}
