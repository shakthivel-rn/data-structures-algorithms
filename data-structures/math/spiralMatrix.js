function spiralOrder(matrix) {
  const result = [];
  const ROWS = matrix.length,
    COLS = matrix[0].length;
  let left = 0,
    right = COLS - 1,
    top = 0,
    bottom = ROWS - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top += 1;

    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right -= 1;

    if (!(top <= bottom && left <= right)) break;

    for (let i = right; i >= left; i--) {
      result.push(matrix[bottom][i]);
    }
    bottom -= 1;

    for (let i = bottom; i >= top; i--) {
      result.push(matrix[i][left]);
    }
    left += 1;
  }

  return result;
}
