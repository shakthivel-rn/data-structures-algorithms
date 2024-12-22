function updateMatrix(mat) {
  const rows = mat.length,
    cols = mat[0].length;
  const result = Array.from({ length: rows }, () => Array(cols).fill(Infinity));
  const queue = [];
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (mat[r][c] === 0) {
        result[r][c] = 0;
        queue.push([r, c]);
      }
    }
  }

  while (queue.length) {
    const [row, col] = queue.shift();

    for (const [dr, dc] of directions) {
      const newRow = row + dr,
        newCol = col + dc;
      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        result[newRow][newCol] > result[row][col] + 1
      ) {
        result[newRow][newCol] = result[row][col] + 1;
        queue.push([newRow, newCol]);
      }
    }
  }

  return result;
}
