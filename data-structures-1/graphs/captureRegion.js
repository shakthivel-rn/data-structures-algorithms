function captureRegion(board) {
  const ROWS = board.length,
    COLS = board[0].length;

  if (ROWS === 0) return;

  function capture(row, col) {
    if (row < 0 || col < 0 || row === ROWS || col === COLS) return;
    if (board[row][col] !== "O") return;

    board[row][col] = "T";

    capture(row + 1, col);
    capture(row - 1, col);
    capture(row, col + 1);
    capture(row, col - 1);
  }

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (
        board[row][col] === "O" &&
        (row === 0 || col === 0 || row === ROWS - 1 || col === COLS - 1)
      ) {
        capture(row, col);
      }
    }
  }

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (board[row][col] === "O") board[row][col] = "X";
    }
  }

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (board[row][col] === "T") board[row][col] = "O";
    }
  }
}
