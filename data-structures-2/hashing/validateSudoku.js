function validateSudoku(grid) {
  const rowSets = Array.from({ length: 9 }, () => new Set());
  const colSets = Array.from({ length: 9 }, () => new Set());
  const boxSets = Array.from({ length: 9 }, () => new Set());

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const num = grid[row][col];

      if (num === ".") continue;

      const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

      if (
        rowSets[row].has(num) ||
        colSets[col].has(num) ||
        boxSets[boxIndex].has(num)
      ) {
        return false;
      }

      rowSets[row].add(num);
      colSets[col].add(num);
      boxSets[boxIndex].add(num);
    }
  }

  return true;
}
