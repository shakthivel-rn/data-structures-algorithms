function zeroMatrix(matrix) {
  const ROWS = matrix.length,
    COLS = matrix[0].length;
  const copyMatrix = matrix.map((row) => [...row]);

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (matrix[row][col] === 0) {
        for (let c = 0; c < COLS; c++) {
          copyMatrix[row][c] = 0;
        }
        for (let r = 0; r < ROWS; r++) {
          copyMatrix[r][col] = 0;
        }
      }
    }
  }

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      matrix[row][col] = copyMatrix[row][col];
    }
  }
}

function zeroMatrix(matrix) {
  const ROWS = matrix.length,
    COLS = matrix[0].length;
  const rowZero = Array.from({ length: ROWS }, () => false);
  const colZero = Array.from({ length: COLS }, () => false);

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (matrix[row][col] === 0) {
        rowZero[row] = true;
        colZero[col] = true;
      }
    }
  }

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (rowZero[row] || colZero[col]) {
        matrix[row][col] = 0;
      }
    }
  }
}
