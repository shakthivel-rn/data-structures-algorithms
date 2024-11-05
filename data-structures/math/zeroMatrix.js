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

function zeroMatrix(matrix) {
  const ROWS = matrix.length,
    COLS = matrix[0].length;
  let rowZero = false;

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (matrix[row][col] === 0) {
        matrix[0][col] = 0;

        if (row > 0) {
          matrix[row][0] = 0;
        } else {
          rowZero = true;
        }
      }
    }
  }

  for (let row = 1; row < ROWS; row++) {
    for (let col = 1; col < COLS; col++) {
      if (matrix[0][col] === 0 || matrix[row][0] === 0) {
        matrix[row][col] = 0;
      }
    }
  }

  if (matrix[0][0] === 0) {
    for (let row = 0; row < ROWS; row++) {
      matrix[row][0] = 0;
    }
  }

  if (rowZero) {
    for (let col = 0; col < COLS; col++) {
      matrix[0][col] = 0;
    }
  }
}
