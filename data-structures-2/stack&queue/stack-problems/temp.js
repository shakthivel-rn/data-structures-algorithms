function countIslands(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let islands = 0;

  const explore = (row, col) => {
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      grid[row][col] === "0"
    )
      return;
    grid[row][col] = "0";
    explore(row + 1, col);
    explore(row - 1, col);
    explore(row, col + 1);
    explore(row, col - 1);
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === "1") {
        islands++;
        explore(row, col);
      }
    }
  }

  return islands;
}
